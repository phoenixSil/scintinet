# ScintiNet - Site Web d'Entretien Résidentiel

## Overview
ScintiNet is a professional residential cleaning and maintenance services website based in Quebec, Canada. It's a single-page application showcasing the company's services, pricing plans, projects, and contact information.

## Architecture
- **Frontend**: React + TypeScript with Vite, Tailwind CSS, shadcn/ui components
- **Backend**: Express.js (minimal - serves static content)
- **Styling**: Brand colors from official charte graphique, Poppins font

## Brand Guidelines (Charte Graphique)
- **Primary Blue**: #0097CE (Pantone 801 C) - HSL(197, 100%, 40%)
- **Brand Green**: #38D430 (Pantone 802 C) - HSL(117, 65%, 51%)
- **Brand Lime**: #E2E735 (Pantone 387 C) - HSL(62, 79%, 56%)
- **Logo Font**: Conthraxsb (for logo text only)
- **Body Font**: Poppins (headings and body text)
- **Tagline**: "L'exigence du propre et net !"
- **Design elements**: Wave/curve dividers in blue and green

## Key Components
- `client/src/components/scintinet-logo.tsx` - SVG logo with brand colors
- `client/src/components/wave-divider.tsx` - Decorative wave dividers matching brand style
- `client/src/pages/home.tsx` - Main single-page layout with all sections

## Key Pages & Sections
- **Hero**: Full-width hero with blue-green gradient overlay and CTAs
- **About**: Company description and 5 core values
- **Services**: 5 service cards (building maintenance, house cleaning, senior care, window cleaning, car washing)
- **Stats**: Key numbers on blue background with wave dividers
- **Pricing**: 3 plans (Essentiel, Confort, Prestige) + 2 extras
- **Projects**: Recent project showcase gallery
- **CTA**: Call-to-action banner on blue gradient with wave dividers
- **Contact**: Contact form + company info
- **Footer**: Full footer with logo, links, services, and social media

## Custom Tailwind Colors
- `brand-blue` (#0097CE), `brand-blue-dark` (#007baa)
- `brand-green` (#38D430), `brand-green-light` (#4de645)
- `brand-lime` (#E2E735)

## Images
All images are AI-generated and stored in `client/public/images/`:
- hero-cleaning.png, service-*.png, project-*.png
