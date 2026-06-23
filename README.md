# Situmbeko Simataa — Portfolio

Personal portfolio for Situmbeko Simataa, a UI/UX and front-end developer based in
Lusaka, Zambia. The site presents selected product work, a curated archive of design
and multimedia projects, and a way to get in touch. It is built as a small monorepo
using React, TypeScript, Vite, Tailwind CSS, pnpm and Turborepo.

Live work featured includes MyCareerWeb, BalloAds and Lusaka365, alongside design,
branding and motion work imported from Behance.

## Highlights

- Single-page experience with client-side routing and dedicated case-study pages.
- Live, lazily-loaded previews of demo sites rendered inside a browser frame.
- Inline video playback for the motion and video-editing work.
- High-resolution imagery sourced from Behance, with an optional script to download
  local copies.
- Responsive layout, reduced-motion support, and an accessible, keyboard-friendly menu.

## Tech stack

- React 18 and TypeScript
- Vite for development and bundling
- Tailwind CSS for styling
- React Router for navigation
- pnpm workspaces and Turborepo for monorepo task orchestration
- Vitest and Testing Library for unit tests

## Repository structure

    apps/
      web/          Portfolio front-end (this is the site)
      functions/    Backend functions workspace (template scaffold)
    packages/
      ui/           Shared UI components
      shared/       Shared types and schemas
      config/       Shared TypeScript configuration
      eslint-config/ Shared ESLint configuration

The portfolio itself lives in `apps/web`. See `apps/web/README.md` for app-specific
notes.

## Getting started

Requirements: Node 20 or newer and pnpm 8.

    pnpm install
    pnpm --filter web dev        # start the dev server
    pnpm --filter web build      # type-check and build for production
    pnpm --filter web test       # run unit tests

## Project imagery

By default, project images load directly from the Behance CDN, so the site works with
no additional setup. To download high-resolution local copies into
`apps/web/public/behance/`:

    pnpm --filter web assets

After downloading, set `VITE_USE_LOCAL_ASSETS=true` in `apps/web/.env` to serve the
local files instead of the CDN.

## Configuration

Environment variables are documented in `.env.example` at the repository root and in
`apps/web/.env.example`. No secrets are required to run the site locally. Copy the
relevant example file to `.env` and adjust values as needed.

## Author

Situmbeko Simataa — UI/UX and Front-End Developer

- GitHub: https://github.com/Ajsitu
- Portfolio (demo): https://my-career-web-sandy.vercel.app
- Behance: https://www.behance.net/situmbesimataa
- LinkedIn: https://www.linkedin.com/in/situmbeko-simataa-b20b4b318
- Email: situmbekosimataa3@gmail.com

## License

This repository contains personal portfolio content. The source code may be used as a
reference. Project imagery, branding and copy remain the property of their respective
owners and are presented here for portfolio purposes.
