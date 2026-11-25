# Md. Mesbahul Alam — Portfolio

> **Full Stack Developer · AI & RAG Applications** · Dhaka, Bangladesh
> [mesbahulalam017@gmail.com](mailto:mesbahulalam017@gmail.com) · [GitHub](https://github.com/mesbahtoha) · [LinkedIn](https://www.linkedin.com/in/mesbahul-alam/)

A production-ready personal portfolio built with **React 18**, **Vite 5**, **Tailwind CSS 3**, and **Framer Motion 11**. It includes a full dark/light theme system, English/Bangla localization, contract work experience, a research showcase, project detail modals, and a YouTube/Google Drive video section.

**Live:** [https://beautiful-fairy-fd01f8.netlify.app/](https://beautiful-fairy-fd01f8.netlify.app/)

---

## Highlights

- **Dark / light mode** — token-driven themes, persisted to `localStorage`, system preference fallback, no flash on load.
- **English / বাংলা** — every section, navigation item, project description, research note, form label, and footer string is translatable.
- **Contract experience** — Shahi Mokam, Fahim Pharmaceutical, and Bytespace with roles, durations, links, and delivery notes.
- **Research section** — DorjiBari / BodyM smartphone-based body measurement with plain-language headline metrics, collapsible technical details, and an honest limitations note.
- **Video showcase** — YouTube and Google Drive embeds in an accessible modal player.
- **Project system** — featured + all projects, detail modals, feature lists, challenges, roadmap, live/API/repo links.
- **Responsive** — verified at 320, 360, 390, 414, 768, 1024, 1280, 1366, 1440, and 1920 px with no horizontal overflow.
- **Performance** — compressed project thumbnails, lazy-loaded images, font preconnect, single-page static build.
- **Motion & polish** — smooth anchor scrolling, staggered reveals, hover shadows, soft card elevation, and reduced-motion fallbacks.
- **SEO** — Open Graph, Twitter cards, canonical URL, JSON-LD Person schema, sitemap, robots.txt, web manifest.
- **Accessibility** — skip link, keyboard-operable project cards, focus-visible rings, modal focus/escape handling, reduced-motion support.

---

## Tech Stack

| Layer | Technology |
|---|---|
| UI | React 18, Vite 5 |
| Styling | Tailwind CSS 3, CSS custom properties |
| Animation | Framer Motion 11 |
| Icons | React Icons 5 |
| Contact form | EmailJS 4 |
| Routing | React Router DOM 6 |
| Fonts | Manrope (headings), Inter (body), JetBrains Mono (metrics), Hind Siliguri (Bangla) |

---

## Structure

```text
src/
├── context/
│   ├── ThemeContext.jsx        # dark/light theme + persistence
│   └── LanguageContext.jsx     # en/bn language + t() helper
├── i18n/
│   ├── translations.js         # UI strings for both languages
│   └── content.js              # pick() helper for bilingual data
├── data/
│   └── data.js                 # personal, about, experience, education,
│                               # skills, projects, research, videos, extras
├── hooks/
│   └── useScrollAnimations.js
├── pages/
│   └── Home.jsx
└── components/
    ├── Navbar.jsx              # nav, theme/lang controls, mobile drawer
    ├── Controls.jsx            # ThemeToggle + LanguageToggle
    ├── Hero.jsx                # typewriter hero + professional portrait
    ├── About.jsx               # bio, portrait, stats, journey
    ├── Experience.jsx          # contract timeline + career snapshot
    ├── Education.jsx           # B.Sc. + HSC (2022)
    ├── Skills.jsx              # categorized skill chips
    ├── Projects.jsx            # project grid + detail modal
    ├── Research.jsx            # BodyM research dashboard
    ├── Videos.jsx              # YouTube / Google Drive showcase
    ├── Contact.jsx             # EmailJS form
    ├── Footer.jsx
    ├── ScrollProgressBar.jsx
    ├── SectionDivider.jsx
    └── SectionWrapper.jsx
```

---

## Run Locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # preview the production build
```

### Preview a theme or language directly

```text
http://localhost:5173/?theme=light&lang=bn
```

Supported query params:

| Param | Values |
|---|---|
| `theme` | `dark`, `light` |
| `lang` | `en`, `bn` |

The choice is persisted in `localStorage` and can also be changed from the navbar.

---

## Editing Content

All portfolio content lives in **`src/data/data.js`**.

- Every human-readable field can have a matching **`...Bn`** sibling, for example:
  ```js
  short: 'English summary',
  shortBn: 'বাংলা সারাংশ',
  ```
- UI strings live in **`src/i18n/translations.js`** under `en` and `bn`.
- Theme colors live as CSS variables in **`src/index.css`** (`:root` / `html.dark` and `html.light`).
- Project thumbnails are imported from `src/assets/` and compressed as JPEG.

### Resume

`personal.resumeUrl` currently points to the updated Google Drive CV. Replace it in `data.js` if the link changes.

### Contact form

EmailJS keys are configured in `src/components/Contact.jsx`:

```js
const EMAILJS_SERVICE_ID  = 'service_bagerdo'
const EMAILJS_TEMPLATE_ID = 'template_244vtrm'
const EMAILJS_PUBLIC_KEY  = 'asbAb2JcSv6aXvChh'
```

Template variables used: `from_name`, `name`, `from_email`, `reply_to`, `message`, `to_email`.

---

## Deployment

### Netlify (current)

- Build command: `npm run build`
- Publish directory: `dist`
- The repository is connected to Netlify, so pushes to `main` redeploy automatically.

### Vercel

- Framework preset: **Vite**
- Build command: `npm run build`
- Output directory: `dist`

---

## Quality Checks

```bash
npm run build
```

The build is verified for:

- no horizontal overflow at mobile, tablet, and desktop widths;
- working theme and language toggles with persisted state;
- project and video modals opening and closing correctly;
- mobile menu open/close and body scroll lock;
- no broken images and no JavaScript runtime errors.

---

## Credits

Designed and built by **Md. Mesbahul Alam**.
Research data from the **DorjiBari / BodyM** reproducible study.
