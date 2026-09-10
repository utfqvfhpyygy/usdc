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

## Design gaps / limitations

1. **FAQ answers:** Only the first item (“Is KnockNok a bank?”) has body copy in the Figma frame; others are collapsed headers only—UI toggles but empty answers until design provides text.
2. **Language / EN control:** Visual only (no real i18n).
3. **H5 hamburger:** Opens an in-page nav sheet (not in Figma as a full menu design); links jump to sections.
4. **Phone mockup crops:** Desktop/H5 crop ratios approximate Figma; slight differences vs pixel-perfect absolute export possible.
5. **Footer decorative vectors:** Present but may not match Figma opacity/placement 1:1.
6. **Duplicate Web frame** `88:3780` in the file was ignored (same name/size as `66:2812`).
7. **No backend / waitlist CTA** beyond static marketing UI from the frames.

## Build status

`npm run build` succeeded (Vite production bundle written to `dist/`).
