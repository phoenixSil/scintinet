using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using ScintiNet.Application.Interfaces;
using ScintiNet.Infrastructure.Services;

namespace ScintiNet.Infrastructure;

public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructure(
        this IServiceCollection services,
        IConfiguration configuration)
    {
        services.Configure<ResendOptions>(configuration.GetSection(ResendOptions.Section));
        services.AddHttpClient("Resend");
        services.AddTransient<IEmailService, ResendEmailService>();
        return services;
    }
}
