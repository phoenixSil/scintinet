using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using ScintiNet.Application.Contacts.Commands;

namespace ScintiNet.Web.Pages;

public class IndexModel : PageModel
{
    private readonly IMediator _mediator;

    public IndexModel(IMediator mediator) => _mediator = mediator;

    [BindProperty]
    public ContactFormInput Input { get; set; } = new();

    public bool? FormSuccess { get; private set; }
    public string? FormError { get; private set; }

    public void OnGet() { }

    public async Task<IActionResult> OnPostAsync()
    {
        if (!ModelState.IsValid)
        {
            FormSuccess = false;
            return Page();
        }

        var cmd = new SendContactCommand(
            Input.FullName,
            Input.Email,
            Input.Phone ?? string.Empty,
            Input.Subject ?? string.Empty,
            Input.Body,
            Input.ServiceType
        );

        var result = await _mediator.Send(cmd);

        if (result.IsSuccess)
        {
            FormSuccess = true;
            ModelState.Clear();
            Input = new();
        }
        else
        {
            FormSuccess = false;
            FormError = result.Error;
        }

        return Page();
    }
}

public class ContactFormInput
{
    [System.ComponentModel.DataAnnotations.Required(ErrorMessage = "Votre nom est requis.")]
    public string FullName { get; set; } = string.Empty;

    [System.ComponentModel.DataAnnotations.Required(ErrorMessage = "Votre courriel est requis.")]
    [System.ComponentModel.DataAnnotations.EmailAddress(ErrorMessage = "Adresse courriel invalide.")]
    public string Email { get; set; } = string.Empty;

    public string? Phone { get; set; }
    public string? Subject { get; set; }
    public string? ServiceType { get; set; }

    [System.ComponentModel.DataAnnotations.Required(ErrorMessage = "Votre message est requis.")]
    [System.ComponentModel.DataAnnotations.MinLength(10, ErrorMessage = "Le message doit contenir au moins 10 caractères.")]
    public string Body { get; set; } = string.Empty;
}
