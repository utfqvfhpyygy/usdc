# KnockNok landing site

Static marketing site rebuilt from Figma (`完成稿（开发看这边）`):

| Route | Figma frame | Viewport |
|-------|-------------|----------|
| `/web` | `66:2812` KnockNok-web端 (1280px) | Desktop web |
| `/h5` | `66:3150` KnockNok-移动端H5 (375px) | Mobile H5 web |
| `/` | — | Redirects to `/h5` on narrow/mobile, else `/web` |

**Not included:** native iOS/Android apps.

## Run

```bash
cd usd-site
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

- Desktop preview: `/web`
- Mobile preview: `/h5` (or narrow the browser)

## Build

```bash
npm run build
npm run preview
```

Output is in `dist/`.
