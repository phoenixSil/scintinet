using MediatR;
using ScintiNet.Application.Common;

namespace ScintiNet.Application.Contacts.Commands;

public sealed record SendContactCommand(
    string FullName,
    string Email,
    string Phone,
    string Subject,
    string Body,
    string? ServiceType
) : IRequest<Result>;
