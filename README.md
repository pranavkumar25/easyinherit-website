# EasyInherit — Modern SaaS Website

A Next.js 14 + TypeScript + Tailwind CSS single-page website for EasyInherit, an inheritance and succession assistance platform for Indian families and NRIs.

## Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: lucide-react
- **Font**: Inter (single font, multiple weights — via `next/font/google`)

## Colors (from brand palette)

| Token       | Hex       | Usage                         |
| ----------- | --------- | ----------------------------- |
| `midnight`  | `#0A0F22` | Background (deep navy)        |
| `electric`  | `#2E63FF` | Primary accent (royal blue)   |
| `mint`      | `#22E89B` | Secondary accent (spring mint)|

## Getting started

```bash
cd ~/Desktop/easyinherit-saas
npm install
npm run dev
```

Then open http://localhost:3000.

## Structure

```
app/
  layout.tsx        # Root layout, Inter font, metadata
  page.tsx          # Single-page composition
  globals.css       # Tailwind directives, base tokens, FX utilities

components/
  Navbar.tsx        # Sticky glass nav with pill-style nav
  Hero.tsx          # Hero + product/dashboard mockup
  LogoCloud.tsx     # Ecosystem / partner logos
  Problem.tsx       # 4-stat problem framing
  Services.tsx      # Bento grid of 9 services
  Approach.tsx      # 4-step process timeline
  NRI.tsx           # NRI section with animated globe
  Cities.tsx        # India coverage grid
  Founder.tsx       # Founder quote / vision card
  FAQ.tsx           # Interactive accordion
  CTA.tsx           # Closing CTA + contact card
  Footer.tsx        # Multi-column footer + brand wordmark

  ui/
    Button.tsx       # 4 variants (primary, secondary, ghost, mint)
    Badge.tsx
    Eyebrow.tsx      # Pill section labels
    Logo.tsx
    SectionHeader.tsx
    BackgroundFX.tsx # Grid + glow orbs for sections
```

## Notes

- Single font system (Inter) — hierarchy created with weight + size, not a second family.
- All visual FX (glow orbs, grid, conic borders) are pure CSS — no images required.
- Fully responsive (mobile-first).
