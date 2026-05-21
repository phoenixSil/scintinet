namespace ScintiNet.Domain.ValueObjects;

public sealed record ServiceInfo(
    string Slug,
    string Title,
    string Description,
    string Icon,
    string ImagePath,
    bool IsSeniorService = false
);
