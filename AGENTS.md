# Base44 Dev Environment

## Overview
Nexus IT Services — a Vite + React + TypeScript SPA with an Express backend (`server.ts`).
Single-origin setup: Express serves both API routes and the Vite dev server (middleware mode) on port 3000.

## Running
- `docker compose -f docker-compose.base44.yml up -d --build`
- Dev command inside container: `npm ci && npx tsx server.ts`
- Health check: `GET /api/health` → `{"status":"ok",...}`
- Frontend entry: `GET /` (served by Vite middleware, live source — not a prebuilt bundle)

## Key facts
- **No external credentials required to boot.** Firebase config is hardcoded in `firebase-applet-config.json` / `src/lib/firebase.ts`. `GEMINI_API_KEY` is listed in `.env.example` but is not referenced anywhere in the source — the AI page is a static mock.
- **WhatsApp/OpenWA gateway is optional.** The server falls back to simulated delivery when the gateway is unreachable (default `http://localhost:2785`). No separate OpenWA container is needed for the app to run.
- Package manager: **npm** (uses `package-lock.json`). A `bunfig.toml` exists but bun lockfiles are gitignored.
- `node_modules` is a named Docker volume (not bind-mounted) to avoid host/container conflicts.
- `DISABLE_HMR=true` in vite.config.ts disables HMR and file watching — do NOT set it in the sandbox; live reload is needed for edits to appear.

## Verification
- `curl http://localhost:3000/api/health` returns 200 JSON.
- `curl http://localhost:3000/` returns HTML with `@vite/client` script (confirms live dev server, not prebuilt).
- Preview iframe should load the marketing homepage at `/`.
