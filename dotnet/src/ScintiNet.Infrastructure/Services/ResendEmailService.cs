using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using ScintiNet.Application.Interfaces;
using ScintiNet.Domain.Entities;

namespace ScintiNet.Infrastructure.Services;

internal sealed class ResendEmailService : IEmailService
{
    private const string ResendApiUrl = "https://api.resend.com/emails";

    private readonly ResendOptions _opts;
    private readonly HttpClient _http;
    private readonly ILogger<ResendEmailService> _logger;

    public ResendEmailService(
        IOptions<ResendOptions> opts,
        IHttpClientFactory httpFactory,
        ILogger<ResendEmailService> logger)
    {
        _opts   = opts.Value;
        _http   = httpFactory.CreateClient("Resend");
        _logger = logger;
    }

    public async Task<bool> SendContactNotificationAsync(ContactMessage message, CancellationToken ct = default)
    {
        try
        {
            var payload = new
            {
                from    = $"ScintiNet Site Web <{_opts.FromEmail}>",
                to      = new[] { _opts.AdminEmail },
                reply_to = message.Email,
                subject = $"[ScintiNet] Nouveau message — {message.Subject}",
                html    = BuildHtmlBody(message)
            };

            var json    = JsonSerializer.Serialize(payload);
            var content = new StringContent(json, Encoding.UTF8, "application/json");

            using var request = new HttpRequestMessage(HttpMethod.Post, ResendApiUrl);
            request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", _opts.ApiKey);
            request.Content = content;

            var response = await _http.SendAsync(request, ct);

            if (response.IsSuccessStatusCode)
                return true;

            var body = await response.Content.ReadAsStringAsync(ct);
            _logger.LogError("Resend API {Status}: {Body}", response.StatusCode, body);
            return false;
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Échec Resend pour {Email}", message.Email);
            return false;
        }
    }

    private static string BuildHtmlBody(ContactMessage m) => $"""
        <!DOCTYPE html>
        <html lang="fr">
        <head><meta charset="utf-8"/></head>
        <body style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;">
          <div style="background:#0097CE;padding:20px;border-radius:8px 8px 0 0;">
            <h1 style="color:#fff;margin:0;font-size:22px;">ScintiNet — Nouveau message</h1>
          </div>
          <div style="border:1px solid #e2e8f0;border-top:none;padding:24px;border-radius:0 0 8px 8px;">
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:8px 0;color:#64748b;width:140px;">Nom</td><td style="padding:8px 0;font-weight:600;">{m.FullName}</td></tr>
              <tr><td style="padding:8px 0;color:#64748b;">Courriel</td><td style="padding:8px 0;">{m.Email}</td></tr>
              <tr><td style="padding:8px 0;color:#64748b;">Téléphone</td><td style="padding:8px 0;">{m.Phone}</td></tr>
              <tr><td style="padding:8px 0;color:#64748b;">Sujet</td><td style="padding:8px 0;">{m.Subject}</td></tr>
              {(m.ServiceType is not null ? $"<tr><td style='padding:8px 0;color:#64748b;'>Service</td><td style='padding:8px 0;'>{m.ServiceType}</td></tr>" : "")}
            </table>
            <hr style="border:none;border-top:1px solid #e2e8f0;margin:16px 0;"/>
            <div style="background:#f8fafc;border-radius:6px;padding:16px;">
              <p style="color:#1e293b;white-space:pre-wrap;margin:0;">{m.Body}</p>
            </div>
            <p style="color:#94a3b8;font-size:12px;margin-top:24px;">
              Reçu le {m.CreatedAt:dd MMMM yyyy \à HH:mm} UTC · NEQ 3382027319<br/>
              ScintiNet · 12 Rue Boucher, App. 8, Québec (QC)
            </p>
          </div>
        </body>
        </html>
        """;
}

public sealed class ResendOptions
{
    public const string Section  = "Resend";
    public string ApiKey     { get; set; } = string.Empty;
    public string FromEmail  { get; set; } = "noreply@scintinet.com";
    public string AdminEmail { get; set; } = "tsillery@ymail.com";
}
