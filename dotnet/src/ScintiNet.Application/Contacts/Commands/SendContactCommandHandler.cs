using MediatR;
using ScintiNet.Application.Common;
using ScintiNet.Application.Interfaces;
using ScintiNet.Domain.Entities;

namespace ScintiNet.Application.Contacts.Commands;

internal sealed class SendContactCommandHandler : IRequestHandler<SendContactCommand, Result>
{
    private readonly IEmailService _emailService;

    public SendContactCommandHandler(IEmailService emailService)
        => _emailService = emailService;

    public async Task<Result> Handle(SendContactCommand cmd, CancellationToken ct)
    {
        var message = ContactMessage.Create(
            cmd.FullName,
            cmd.Email,
            cmd.Phone,
            cmd.Subject,
            cmd.Body,
            cmd.ServiceType
        );

        var sent = await _emailService.SendContactNotificationAsync(message, ct);

        return sent
            ? Result.Success()
            : Result.Failure("L'envoi du courriel a échoué. Veuillez réessayer.");
    }
}
