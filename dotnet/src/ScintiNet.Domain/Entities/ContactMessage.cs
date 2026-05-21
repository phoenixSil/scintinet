namespace ScintiNet.Domain.Entities;

public sealed class ContactMessage
{
    public Guid Id { get; private set; }
    public string FullName { get; private set; } = string.Empty;
    public string Email { get; private set; } = string.Empty;
    public string Phone { get; private set; } = string.Empty;
    public string Subject { get; private set; } = string.Empty;
    public string Body { get; private set; } = string.Empty;
    public string? ServiceType { get; private set; }
    public DateTime CreatedAt { get; private set; }

    private ContactMessage() { }

    public static ContactMessage Create(
        string fullName,
        string email,
        string phone,
        string subject,
        string body,
        string? serviceType = null)
    {
        ArgumentException.ThrowIfNullOrWhiteSpace(fullName);
        ArgumentException.ThrowIfNullOrWhiteSpace(email);
        ArgumentException.ThrowIfNullOrWhiteSpace(body);

        return new ContactMessage
        {
            Id          = Guid.NewGuid(),
            FullName    = fullName.Trim(),
            Email       = email.Trim().ToLowerInvariant(),
            Phone       = phone?.Trim() ?? string.Empty,
            Subject     = subject?.Trim() ?? string.Empty,
            Body        = body.Trim(),
            ServiceType = serviceType?.Trim(),
            CreatedAt   = DateTime.UtcNow
        };
    }
}
