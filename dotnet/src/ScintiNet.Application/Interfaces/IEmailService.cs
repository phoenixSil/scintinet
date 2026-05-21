using ScintiNet.Domain.Entities;

namespace ScintiNet.Application.Interfaces;

public interface IEmailService
{
    Task<bool> SendContactNotificationAsync(ContactMessage message, CancellationToken ct = default);
}
