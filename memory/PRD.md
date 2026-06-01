# FW Worldwide — Logistics Marketing Site

## Original Problem
Premium B2B logistics marketing website for "FW Worldwide" (Freight Wing Logistic Pvt Ltd), tagline "Forward. Always." DHL/FedEx-quality, brand colors: Red #E8281A, Navy #1C2230, Yellow #F5C842, Off-white #F5F3EE.

## Stack
- React 19 + react-router-dom + Tailwind + framer-motion + lucide-react
- Static site (no backend)

## User Choices
- Static site (no backend forms persistence)
- Stock logistics photography (Unsplash/Pexels)
- Carrier names as styled text tiles (uniform, brand-safe)
- Google Maps iframe embed

## Pages Implemented (2026-12)
- `/` Home — Hero with cargo-ship bg, stats bar (180+/40K+/99.4%/24h), yellow mode strip, 4 service cards, value-added grid, why-choose-us, carriers grid, mission/vision split, CTA banner, footer
- `/services` — 4 featured services with images + bullets, value-added grid, safety section (Driver Training, Vehicle Safety, GPS Tracking, Emergency Preparedness)
- `/about` — Intro, key stats, Mission/Vision split, Why-Choose-Us, 6-card values strip
- `/carriers` — Airlines (13) + Shipping Lines (10) styled tile grid
- `/contact` — Form (Name/Company/Email/Phone/Service/Message) + navy info card + Google Maps iframe

## Typography
- Bebas Neue (display), DM Sans (body), Space Mono (labels/IDs)

## Recent Changes
- Removed "Active Shipment" hover card from home hero (per user)
- Made hero headline span full width
- Fixed Contact page form/info layout (col-span on FadeIn wrapper)

## P1 Backlog
- Carrier real SVG logos (currently styled text)
- Track Shipment page (mock data)
- Quote form backend persistence (MongoDB) if needed
- Blog / Case Studies section
- Multi-language (EN/HI)

## Test Credentials
N/A — static site.
