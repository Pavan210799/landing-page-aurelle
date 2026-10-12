# AURELLE — Luxury Travel Landing Page

A modern, fully responsive marketing landing page for **AURELLE**, a curated luxury travel platform. Built with **React.js** and **Tailwind CSS** for a mentor frontend assignment.

## Sections

1. **Navbar** — Logo, navigation links, CTA, mobile menu  
2. **Hero** — Headline, description, destination visuals, CTAs  
3. **About** — Product introduction and stats  
4. **Features** — Six feature cards in a responsive grid  
5. **How It Works** — Four-step journey with imagery  
6. **Testimonials** — Customer review cards  
7. **Pricing** — Three membership tiers with CTAs  
8. **Footer** — Contact info, links, social icons  

## Tech stack

- React 19 + Vite  
- Tailwind CSS v4 (`@tailwindcss/vite`)  
- Framer Motion (scroll reveals, hover, hero animation)  
- Lucide React (icons)  

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Deploy (Vercel)

1. Push this folder to a GitHub repository.  
2. Import the repo at [vercel.com/new](https://vercel.com/new).  
3. Framework preset: **Vite** — build command `npm run build`, output directory `dist`.  
4. Deploy.

## Deploy (Netlify)

- Build command: `npm run build`  
- Publish directory: `dist`  

## Project structure

```
src/
  components/
    layout/     Navbar, Footer
    sections/   Hero, About, Features, ...
    ui/         Button, Container, SectionHeading, Reveal
  data/         content.js
  hooks/        useScrolledNav.js
```

## License

MIT — portfolio / educational use.
# landing-page-aurelle
