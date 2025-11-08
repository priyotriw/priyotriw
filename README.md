# Priyo Tri Winarko — Portfolio (React + TypeScript + Vite)

A production-ready single-page portfolio website built with React 18, TypeScript, and Vite. It showcases projects, skills, certificates, and contact information with smooth animations, responsive design, and GitHub Pages deployment.

## Features
- Hero section with particles background and polished layout
- About section with avatar and badges
- Skills with interactive badges and detail panel
- Projects grid with clean cards and actions (Demo/GitHub)
- Certificates carousel with continuous autoplay (right-to-left), pause on hover/focus, and reduced-motion support
- Contact CTA card with Email/WhatsApp and social icons
- Reveal-on-scroll animations (IntersectionObserver)
- Fully responsive, mobile-first with desktop refinements
- GitHub Pages ready (subpath base + SPA 404 fallback)

## Tech Stack
- React 18, TypeScript
- Vite 5
- CSS (custom, no framework)

## Project Structure
```
portfolio/
  docs/                      # Vite build output (GitHub Pages source)
    404.html                 # SPA fallback for client-side routing
    assets/*
    index.html
  public/                    # Static assets served as-is
    profile.jpeg             # Hero image
    profile2.jpeg            # About image
    resume.txt               # Resume file
  src/
    components/
      About.tsx
      Certificates.tsx
      Contact.tsx
      Hero.tsx
      Projects.tsx
    App.tsx
    main.tsx
    styles.css               # Global styles and animations
    vite-env.d.ts            # Vite env types for TypeScript
  index.html
  package.json
  tsconfig.json / tsconfig.node.json
  vite.config.ts             # base=/priyotriw/, build.outDir=docs
  README.md
```

## Getting Started (Local Development)
Prerequisites:
- Node.js 18+ and npm

Install dependencies and start dev server:
```
npm install
npm run dev
```
Visit http://localhost:5173 (or the shown port).

## Scripts
- `npm run dev` — Start development server
- `npm run build` — Type-check and build to `docs/`
- `npm run preview` — Preview the production build locally

## Deployment — GitHub Pages
This project is configured to deploy from the `main` branch, `docs/` folder.

1) Vite config (already set):
```
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  base: '/priyotriw/',       // GitHub Pages subpath
  build: { outDir: 'docs' }, // Output to docs/
})
```

2) Build and push:
```
npm run build
# commit/push changes to main
```

3) GitHub Pages Settings:
- Repository > Settings > Pages
- Source: `Deploy from a branch`
- Branch: `main`, Folder: `/docs`

4) SPA 404 fallback:
- `docs/404.html` is included and will redirect unknown paths to `/priyotriw/`.

## Image Paths and GitHub Pages
For assets in `public/`, components reference images using `import.meta.env.BASE_URL` to ensure correct paths under the `/priyotriw/` base.

Example:
```tsx
<img
  src={`${import.meta.env.BASE_URL}profile.jpeg`}
  onError={(e) => { /* fallback to .jpg, then placeholder */ }}
/>
```

Ensure the images exist in `/public` with the expected names.

## Accessibility
- Respects `prefers-reduced-motion` for animations and carousel autoplay
- Keyboard-accessible buttons and interactive badges
- Semantic headings and alt text for images

## Animations
- Section reveal animations via `.reveal` and `IntersectionObserver`
- Hover states with shadows/border accents
- Certificates carousel uses `requestAnimationFrame` for smooth continuous autoplay, pauses on hover/focus

## Responsive Design
- Mobile-first layout with refined spacing on small screens
- Desktop-specific spacing/gaps at `min-width: 1024px`
- Uses CSS `clamp()` for scalable typography and component sizing

## Troubleshooting
- PowerShell blocks `npm` scripts:
  - Run via `cmd /c npm run build`, or set execution policy for PowerShell
- `git` not recognized:
  - Install Git and run via full path, e.g. `"C:\\Program Files\\Git\\bin\\git.exe"`
- GitHub Pages 404s / incorrect base paths:
  - Confirm `vite.config.ts` has `base: '/priyotriw/'` and `build.outDir = 'docs'`
  - Ensure Pages source is `main /docs`
  - Make sure `docs/404.html` exists
- Images not showing on Pages:
  - Place images in `public/`
  - Reference with `${import.meta.env.BASE_URL}filename.ext`
  - Fallback logic attempts `.jpeg` -> `.jpg` -> placeholder

## Customization
- Edit texts and content in components inside `src/components/*`
- Update styles in `src/styles.css`
- Replace images in `public/`
- Adjust animation timings/effects in CSS and components

## License
This project is provided as-is for portfolio purposes.

## Contact
- Email: Priyotriwinarko6@gmail.com
- WhatsApp: 085708709954
- GitHub Pages: https://priyotriw.github.io/priyotriw/
- Repository: https://github.com/priyotriw/priyotriw
