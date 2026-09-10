# usd-site REPORT

## What was built

KnockNok marketing landing pages from Figma file `FgnYtbWDjZLlaJddHbzV9F` (canvas `66:2811` 完成稿（开发看这边）).

| Surface | Figma node | Path |
|---------|------------|------|
| Web desktop | `66:2812` KnockNok-web端 | `/workspace/kennethTest/usd-site` → route `/web` |
| H5 mobile web | `66:3150` KnockNok-移动端H5 | same project → route `/h5` |

Stack: **Vite + React + TypeScript + Tailwind CSS v4 + React Router**.

Assets (logos, icons, phone mockups) were downloaded via Figma MCP `get_design_context` / asset URLs into `public/assets/web` and `public/assets/h5`.

`/workspace/kennethTest/zy-homework` was not modified.

Native phone apps were **not** built (no React Native / Flutter / iOS / Android).

## How Figma was used

1. `get_metadata` on `66:2811` to locate Web + H5 frames.
2. `get_design_context` + `get_screenshot` on `66:2812` (Web) and `66:3150` (H5).
3. Design tokens / copy / assets taken from MCP output; pages re-implemented in normal document flow (Figma Web export used heavy absolute positioning).

Note: Cursor’s Figma MCP namespace was not attached to this agent session; the same authenticated `https://mcp.figma.com/mcp` endpoint was called with the stored OAuth token.

## How to run

```bash
cd /workspace/kennethTest/usd-site
npm install
npm run dev
```

Then open:

- `http://localhost:5173/web` — desktop
- `http://localhost:5173/h5` — mobile H5 (375px-wide layout)
- `http://localhost:5173/` — auto-redirect by viewport / UA

Production build (already verified):

```bash
npm run build
npm run preview
```

## Updates (official zh)

- Replaced **all** `zh` locale strings in `src/i18n/messages.ts` with verbatim copy from `/workspace/kennethTest/usd-site-copy/official-zh.txt` (nav, hero, features, steps, mock labels, all 11 FAQ Q&A, footer slogan, 免责声明, tagline, copyright).
- **EN** left as previously synced from `official-en.txt`.
- Language switch EN ↔ 中文 (`knocknok-lang`) unchanged; FAQ answers show when expanded in both locales.

## Remaining notes

1. Phone mockup image chrome remains in raster assets (not HTML-retyped from official phone UI lines).
2. H5 hamburger is an in-page section nav.
3. UI-only chrome not in official files: `桌面版` / `菜单` (H5).

## Build status

`npm run build` succeeded (Vite production bundle written to `dist/`).
