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

## Updates (official copy)

- Synced **EN** UI strings from `/workspace/kennethTest/usd-site-copy/official-en.txt` into `src/i18n/messages.ts` (nav, hero, dashboard labels, features, steps, all **11 FAQ** Q&A).
- Added matching **简体中文** translations for the full official EN set; brand terms KnockNok / USDC / ACH retained.
- FAQ accordion shows the answer for every item when expanded.
- Language switch (`knocknok-lang` localStorage) unchanged.

## Remaining notes

1. Footer slogan / disclosure not present in `official-en.txt`; kept prior Figma marketing footer copy (EN + ZH).
2. Phone mockup image chrome (Total Balance / Earn screens) remains in raster assets, not re-typeset as HTML.
3. H5 hamburger is an in-page section nav.

## Build status

`npm run build` succeeded (Vite production bundle written to `dist/`).
