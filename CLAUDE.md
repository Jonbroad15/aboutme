# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server with HMR
pnpm build        # TypeScript check + Vite build (uses ./ base path)
pnpm build:prod   # Production build for GitHub Pages (/aboutme/ base path)
pnpm lint         # Run ESLint
pnpm preview      # Preview production build locally
pnpm clean        # Remove node_modules, lockfile, and pnpm store
```

All scripts include `pnpm install --prefer-offline` — dependencies are installed automatically.

## Architecture

Single-page personal portfolio site built with React 18 + TypeScript + Vite. UI is assembled from one-page sections: `Hero → About → Skills → Experience → Projects → Publications → Education → Contact`.

**Key architectural details:**

- **Base path**: Vite uses `./` in dev and `/aboutme/` in prod (controlled by `BUILD_MODE=prod` env var). This matters for all asset and image paths — images imported via ES import statements are handled by Vite; direct string paths will break on GitHub Pages.
- **Styling**: Tailwind CSS with a custom color theme (`primary: #2B5D3A`, `secondary: #4A90E2`, `accent: #F5A623`). UI primitives come from Radix UI wrapped as shadcn/ui components (style: "new-york", alias `@/components/ui`).
- **Path aliases**: `@/` maps to `src/`.
- **TypeScript**: Strict mode is disabled for app code (`tsconfig.app.json`) but enabled for Vite config (`tsconfig.node.json`).

## Deployment

Push to `main` triggers `.github/workflows/deploy.yml`, which runs `pnpm build:prod` and deploys to GitHub Pages. The `build:prod` script (not `build`) must be used to set the correct `/aboutme/` base path.
