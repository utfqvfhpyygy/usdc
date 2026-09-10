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

## Updates (i18n + FAQ)

- **Real EN / 中文 switch:** Shared `src/i18n` (`messages.ts` + `LanguageContext`) and `LanguageSwitcher` on Web + H5. Choice persists in `localStorage` key `knocknok-lang`. Nav, hero, sections, CTAs, steps, FAQ questions, footer are translated.
- **FAQ answers:** Only the first FAQ (“Is KnockNok a bank?” / 「KnockNok 是银行吗？」) has approved answer copy. Items 2+ are questions only—no invented answers. Expanding shows answer body only when `a` is present; awaiting official Q&A from PM.

## Remaining design gaps

1. **FAQ items 2+:** Questions only until official answers are supplied.
2. **H5 hamburger:** In-page nav sheet; links jump to sections.
3. **Phone mockup crops / footer vectors:** Approximate Figma, not pixel-identical.
4. **No backend / waitlist CTA** beyond static marketing UI.

## Build status

`npm run build` succeeded (Vite production bundle written to `dist/`).
