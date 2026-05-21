namespace ScintiNet.Domain.ValueObjects;

public sealed record PricingPlan(
    string Name,
    string Price,
    string PriceNote,
    string[] Features,
    bool IsPopular = false
);
