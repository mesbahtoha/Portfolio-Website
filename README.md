# Alex Morgan — Personal Portfolio Website

A modern, animated, fully responsive personal portfolio and resume website built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**. Designed with a dark editorial aesthetic featuring gold accents, cinematic scroll animations, and a clean content-first layout.

---

## Table of Contents

- [Live Preview](#live-preview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Dev Server](#running-the-dev-server)
  - [Building for Production](#building-for-production)
  - [Preview the Production Build](#preview-the-production-build)
- [Customization Guide](#customization-guide)
  - [Updating Your Personal Info](#updating-your-personal-info)
  - [Adding Work Experience](#adding-work-experience)
  - [Adding Education](#adding-education)
  - [Updating Skills](#updating-skills)
  - [Adding Projects](#adding-projects)
  - [Adding a Profile Photo](#adding-a-profile-photo)
  - [Linking Your Resume PDF](#linking-your-resume-pdf)
- [Component Documentation](#component-documentation)
  - [Navbar](#navbar)
  - [Hero](#hero)
  - [About](#about)
  - [Experience](#experience)
  - [Education](#education)
  - [Skills](#skills)
  - [Projects](#projects)
  - [Contact](#contact)
  - [Footer](#footer)
  - [ScrollProgressBar](#scrollprogressbar)
  - [SectionDivider](#sectiondivider)
  - [SectionWrapper & SectionHeading](#sectionwrapper--sectionheading)
- [Animation System](#animation-system)
  - [Overview](#overview)
  - [Hooks](#hooks)
  - [Variants Reference](#variants-reference)
  - [Per-Section Animation Strategy](#per-section-animation-strategy)
  - [Adding Animations to New Elements](#adding-animations-to-new-elements)
- [Design System](#design-system)
  - [Color Tokens](#color-tokens)
  - [Typography](#typography)
  - [Reusable CSS Classes](#reusable-css-classes)
  - [Custom Animations (CSS)](#custom-animations-css)
- [Deployment](#deployment)
  - [Vercel](#vercel)
  - [Netlify](#netlify)
  - [GitHub Pages](#github-pages)
- [Adding a Backend to the Contact Form](#adding-a-backend-to-the-contact-form)
- [Troubleshooting](#troubleshooting)
- [License](#license)

---

## Live Preview

Run locally with:

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Features

- **Dark editorial design** — deep charcoal background with gold/amber accent palette
- **Fully responsive** — optimized for mobile, tablet, and desktop
- **Cinematic scroll animations** — every section has a distinct animation personality powered by Framer Motion
- **Gold scroll progress bar** — fixed at the top, fills as you scroll
- **Typewriter effect** — rotating job titles in the Hero section
- **Floating avatar** — animated gradient ring with floating stat chips
- **Animated timeline** — experience entries draw in from the left with a vertical line that grows downward
- **Skill progress bars** — width animates from zero when each card enters the viewport
- **Active nav indicator** — highlights the current section in the navbar using `IntersectionObserver`
- **Animated section dividers** — decorative lines that draw in between sections
- **Heading clip animation** — section titles clip up from below on scroll
- **Stagger animations** — list items, tags, and cards cascade in one after another
- **Noise texture overlay** — subtle grain for depth and atmosphere
- **Single data file** — all content lives in `src/data/data.js` for easy editing
- **SEO-friendly** — proper meta tags in `index.html`

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev) | 18.2 | UI framework |
| [Vite](https://vitejs.dev) | 5.1 | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com) | 3.4 | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | 11.0 | Animations |
| [React Icons](https://react-icons.github.io/react-icons/) | 5.0 | Icon library (Feather Icons set) |
| [React Router DOM](https://reactrouter.com) | 6.22 | Routing (single page, used for `BrowserRouter`) |
| [Google Fonts](https://fonts.google.com) | — | Syne (headings) + Epilogue (body) |

---

## Project Structure

```
resume-site/
│
├── index.html                  # HTML entry point, Google Fonts link
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind theme (colors, fonts, animations)
├── postcss.config.js           # PostCSS (Tailwind + Autoprefixer)
├── package.json                # Dependencies and scripts
│
└── src/
    ├── main.jsx                # ReactDOM.createRoot entry
    ├── App.jsx                 # Root component, BrowserRouter, noise overlay
    ├── index.css               # Global styles, Tailwind directives, CSS components
    │
    ├── data/
    │   └── data.js             # ⭐ ALL content lives here — edit this to customize
    │
    ├── hooks/
    │   └── useScrollAnimations.js  # Animation hooks + Framer Motion variant library
    │
    ├── pages/
    │   └── Home.jsx            # Page layout — assembles all sections
    │
    ├── components/
    │   ├── Navbar.jsx          # Fixed top nav, mobile menu, active section tracking
    │   ├── Hero.jsx            # Full-height hero with typewriter + floating avatar
    │   ├── About.jsx           # Two-column intro with stats grid and career arc
    │   ├── Experience.jsx      # Animated vertical timeline
    │   ├── Education.jsx       # Education cards with spring-bounce icons
    │   ├── Skills.jsx          # Skill categories with animated progress bars
    │   ├── Projects.jsx        # Project cards with hover effects
    │   ├── Contact.jsx         # Contact info panel + message form
    │   ├── Footer.jsx          # Copyright, social links, back-to-top
    │   ├── ScrollProgressBar.jsx   # Gold progress bar fixed at top of page
    │   ├── SectionDivider.jsx      # Animated decorative line between sections
    │   └── SectionWrapper.jsx      # Scroll-triggered section container + SectionHeading
    │
    └── assets/                 # Place your images here
        └── images/             # e.g. profile.jpg, project screenshots
```

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** v18 or higher — [Download](https://nodejs.org)
- **npm** v9 or higher (comes with Node.js)

Verify your versions:

```bash
node --version   # should print v18.x.x or higher
npm --version    # should print 9.x.x or higher
```

### Installation

**1. Unzip the project:**

```bash
unzip resume-site.zip
cd resume-site
```

Or if cloning from a repository:

```bash
git clone https://github.com/your-username/resume-site.git
cd resume-site
```

**2. Install dependencies:**

```bash
npm install
```

This installs React, Vite, Tailwind CSS, Framer Motion, React Icons, and React Router DOM.

### Running the Dev Server

```bash
npm run dev
```

Opens at [http://localhost:5173](http://localhost:5173) with hot module replacement — changes in any file instantly reflect in the browser without a full refresh.

### Building for Production

```bash
npm run build
```

Outputs optimized static files to the `dist/` folder. This includes minified JS/CSS and hashed filenames for cache busting.

### Preview the Production Build

```bash
npm run preview
```

Serves the `dist/` folder locally so you can verify the production build before deploying.

---

## Customization Guide

**Everything you need to change is in one file: `src/data/data.js`.**  
You do not need to touch any component files for basic customization.

### Updating Your Personal Info

Open `src/data/data.js` and edit the `personal` object:

```js
export const personal = {
  name: "Your Full Name",
  title: "Your Job Title",
  tagline: "A one-line pitch about what you do.",
  email: "you@email.com",
  phone: "+1 (555) 000-0000",
  location: "Your City, Country",
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-username",
  twitter: "https://twitter.com/your-handle",
  resumeUrl: "/resume.pdf",   // path to your resume PDF in the public/ folder
  initials: "YN",             // shown in avatar until you add a photo
};
```

> **Tip:** Place your resume PDF inside the `public/` folder (create it if it doesn't exist) and set `resumeUrl: "/resume.pdf"`.

---

### Adding Work Experience

Edit the `experiences` array in `src/data/data.js`. Each item follows this shape:

```js
{
  title: "Job Title",
  company: "Company Name",
  type: "Full-time",          // "Full-time" | "Part-time" | "Contract" | "Internship"
  period: "Jan 2023 – Present",
  location: "City, Country (Remote)",
  description: "One or two sentences summarising your role.",
  achievements: [
    "Achievement one — use numbers where possible",
    "Achievement two",
    "Achievement three",
  ],
  tech: ["React", "TypeScript", "GraphQL"],
},
```

Add as many items as you like — they render in the order they appear in the array. Most recent job goes first.

---

### Adding Education

Edit the `education` array:

```js
{
  degree: "B.Sc. Computer Science",
  institution: "University Name",
  period: "2019 – 2023",
  location: "City, Country",
  gpa: "3.9/4.0",             // set to null to hide the GPA badge
  description: "Short description of your studies or thesis.",
  highlights: [
    "Dean's List",
    "Club President",
  ],
},
```

---

### Updating Skills

Edit the `skills` array. Each object is a category with a list of skills and proficiency levels (0–100):

```js
{
  category: "Frontend",
  icon: "FaCode",             // icon name (currently used as a key, not rendered directly)
  items: [
    { name: "React", level: 95 },
    { name: "TypeScript", level: 88 },
  ],
},
```

The `level` value drives the animated progress bar width. Use your honest assessment — recruiters appreciate authenticity.

---

### Adding Projects

Edit the `projects` array:

```js
{
  title: "Project Name",
  description: "Two to three sentences about what it does and why it matters.",
  tech: ["React", "Node.js", "PostgreSQL"],
  gradient: "from-blue-500/20 to-cyan-500/10",   // Tailwind gradient classes for the card header
  live: "https://your-project.com",
  github: "https://github.com/you/project",
  stats: "1k+ users",          // optional badge text shown in the card header
},
```

**Available gradient options** (Tailwind color pairs):

| Style | Classes |
|---|---|
| Gold/Orange | `from-amber-500/20 to-orange-500/10` |
| Blue/Cyan | `from-blue-500/20 to-cyan-500/10` |
| Purple | `from-violet-500/20 to-purple-500/10` |
| Green | `from-emerald-500/20 to-teal-500/10` |
| Pink | `from-pink-500/20 to-rose-500/10` |

---

### Adding a Profile Photo

1. Place your image in `src/assets/images/` (e.g. `profile.jpg`).
2. Open `src/components/Hero.jsx`.
3. Find the avatar section (the `<div className="avatar-inner">` element).
4. Replace the initials fallback with an `<img>` tag:

```jsx
// Before
<div className="avatar-inner">AM</div>

// After
import profileImg from '../assets/images/profile.jpg'

<div className="avatar-inner overflow-hidden p-0">
  <img
    src={profileImg}
    alt="Alex Morgan"
    className="w-full h-full object-cover rounded-full"
  />
</div>
```

---

### Linking Your Resume PDF

1. Create a `public/` folder in the project root if it doesn't exist.
2. Place your PDF there: `public/resume.pdf`.
3. In `src/data/data.js` set `resumeUrl: "/resume.pdf"`.

The `Download Resume` button in the Hero and Navbar will now link to it directly.

---

## Component Documentation

### Navbar

**File:** `src/components/Navbar.jsx`

A fixed top navigation bar that:
- Transitions from transparent to a blurred dark background after 50px of scroll
- Highlights the active section using `IntersectionObserver` with a `motion.span` layoutId pill animation
- Contains a hamburger menu for mobile that opens a full-screen drawer with staggered link entrances
- The `Download CV` button links to `personal.resumeUrl`

**Key props:** None — reads from `personal` in `data.js` and uses the `navLinks` array defined at the top of the file.

**To add or remove nav links:** Edit the `navLinks` array inside `Navbar.jsx`:

```js
const navLinks = [
  { label: 'Home',       href: '#hero' },
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Contact',    href: '#contact' },
]
```

---

### Hero

**File:** `src/components/Hero.jsx`

Full-viewport-height opening section featuring:
- **Typewriter effect** — cycles through an array of job titles using a custom `useTypewriter` hook
- **Floating avatar** — animated gradient ring (`gradient-border` CSS class) with a floating CSS animation and two "chip" stat callouts
- **Staggered entrance** — badge, name, role, bio, buttons, and social links each animate in 120ms apart using `containerVariants` / `itemVariants`
- **Scroll indicator** — animated line at the bottom that bounces down

**To change the typewriter titles**, edit the `titles` array inside `Hero.jsx`:

```js
const titles = [
  'Frontend Developer',
  'React Specialist',
  'UI/UX Engineer',
  'Open Source Contributor',
]
```

---

### About

**File:** `src/components/About.jsx`

Two-column layout:
- **Left column** — intro paragraphs, passion tags, and key info rows. Slides in from the left (`slideLeft` variant).
- **Right column** — 2×2 stats grid (scale up with stagger) + career arc timeline card. Slides in from the right (`slideRight` variant).

Both columns are wrapped in a parent `SectionWrapper` which triggers the stagger cascade.

---

### Experience

**File:** `src/components/Experience.jsx`

Vertical timeline layout:
- A vertical gold line uses `motion.div` with `scaleY` animating from 0 to 1 on scroll (`whileInView`)
- Each `ExperienceCard` has its own `useReveal` hook so it triggers independently as you scroll past it
- Cards slide in from the left (`x: -40 → 0`)
- On hover, cards shift right by 6px (`whileHover: { x: 6 }`)
- Achievement bullet points stagger in with `x: -12 → 0`

---

### Education

**File:** `src/components/Education.jsx`

Card grid (1 column on mobile, 2 on desktop):
- Each card scales up from `scale: 0.97` and `y: 32`
- The icon badge uses a spring animation (`type: 'spring'`) for a bounce-in effect
- Highlight items stagger in with `scaleUp` variant
- Cards have a decorative corner accent that appears after the card

---

### Skills

**File:** `src/components/Skills.jsx`

Three-column grid of skill category cards:
- Each card fades up with a staggered `delay: index * 0.13`
- The category icon bounces in with a spring rotation
- Skill bar widths animate from 0 to their `level` value using `motion.div` with `width` as the animated property
- Bars trigger when the card enters the viewport (`inView` passed as a prop to `SkillBar`)
- Additional "familiar with" tags at the bottom have `scaleUp` stagger and `whileHover: { scale: 1.1 }`

---

### Projects

**File:** `src/components/Projects.jsx`

2-column responsive grid:
- Cards animate with `opacity: 0, y: 48, scale: 0.96` → visible
- Alternate delay pattern: first/third cards delay `0.0s`, second/fourth delay `0.12s` — creates a natural staggered pair effect
- Hover lifts the card `-6px` on Y with a gold border glow
- Project hero area contains two `motion.div` geometric shapes that rotate on an `animate` loop and snap to 45° on card hover
- Link rows use `whileHover: { x: 3 }` for a subtle slide-right micro-interaction

---

### Contact

**File:** `src/components/Contact.jsx`

5-column grid (2 info + 3 form):
- **Info panel** — staggered container with `slideLeft` per card; contact info cards shift right on hover (`whileHover: { x: 6 }`)
- **Form panel** — slides in from the right (`slideRight`); each field fades up with incremental delays
- Submit button shows a `✓ Message Sent!` success state for 3 seconds
- Input focus states apply a gold border + subtle glow shadow

> **Note:** The form is UI-only. See [Adding a Backend to the Contact Form](#adding-a-backend-to-the-contact-form) to wire it up.

---

### Footer

**File:** `src/components/Footer.jsx`

- Animated in as a staggered container (`staggerContainer(0.08)`)
- Brand, nav links, and divider all use `fadeUp` variant
- Divider line draws in from left using `scaleX: 0 → 1`
- Nav link hover uses `whileHover: { color: '#f0a500', y: -2 }` for a subtle lift
- Back-to-top button uses `whileHover: { scale: 1.1, y: -3 }`

---

### ScrollProgressBar

**File:** `src/components/ScrollProgressBar.jsx`

A 2px fixed bar at the very top of the page (above the navbar). Uses:
- `useScroll()` from Framer Motion to get `scrollYProgress` (0–1)
- `useSpring()` to smooth out the progress with `stiffness: 100, damping: 30`
- `scaleX` on a `transform-origin: left` div for an efficient GPU-composited animation

---

### SectionDivider

**File:** `src/components/SectionDivider.jsx`

A decorative `1px` horizontal line between sections featuring:
- A `scaleX: 0 → 1` line that draws in from left (or right if `flip={true}`)
- A small gold dot at the midpoint that scales in after the line completes (delay: 0.5s)
- Triggered by its own `useReveal` hook with a shallow `-20px` margin

**Props:**

| Prop | Type | Default | Description |
|---|---|---|---|
| `flip` | `boolean` | `false` | If true, the line draws from right to left |

---

### SectionWrapper & SectionHeading

**File:** `src/components/SectionWrapper.jsx`

**`SectionWrapper`** — the scroll-trigger orchestrator for every section. Wraps content in a `motion.section` using `sectionVariants`, which sets `staggerChildren: 0.13`. All direct `motion.*` children inside automatically stagger.

```jsx
<SectionWrapper id="about" className="py-24">
  {/* All motion.* children here will stagger */}
</SectionWrapper>
```

**`SectionHeading`** — a pre-animated heading block used consistently across all sections. It renders:
1. A `labelReveal` animated label row with the gold line drawing in
2. A `clip-text` heading (clips up from `translateY(60%)`)
3. An optional `fadeUp` subtitle

```jsx
<SectionHeading
  label="About Me"          // small uppercase label above heading
  title={<>Who I <span className="text-accent-gold">Am</span></>}
  subtitle="Optional subtitle text."
/>
```

**`AnimatedItem`** — a standalone scroll-triggered wrapper for elements outside a `SectionWrapper` stagger context:

```jsx
import { AnimatedItem } from './SectionWrapper'

<AnimatedItem delay={0.2}>
  <MyCard />
</AnimatedItem>
```

---

## Animation System

### Overview

All scroll animations are powered by **Framer Motion** and centralized in `src/hooks/useScrollAnimations.js`. The system uses three layers:

1. **Hooks** — manage viewport detection and scroll progress values
2. **Variants** — reusable `hidden` / `visible` state objects passed to `motion.*` components
3. **Stagger** — parent containers propagate their `visible` state down to children, triggering them one after another

The global easing curve used everywhere is `[0.22, 1, 0.36, 1]` — a fast-out, slow-settle cubic bezier that feels snappy without being harsh.

All scroll animations use `once: true` — they fire exactly once when the element enters the viewport and do not replay on re-scroll.

---

### Hooks

#### `useReveal(options?)`

Returns `{ ref, inView }`. Attach `ref` to a DOM element; `inView` becomes `true` once it enters the viewport.

```jsx
import { useReveal } from '../hooks/useScrollAnimations'

function MyCard() {
  const { ref, inView } = useReveal({ margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      Content
    </motion.div>
  )
}
```

**Options:**

| Option | Type | Default | Description |
|---|---|---|---|
| `margin` | `string` | `'-80px'` | Shrinks the viewport detection area. Negative values mean the element must be further into view. |
| `once` | `boolean` | `true` | Fire once and stop observing. |

---

#### `usePageScrollProgress()`

Returns a spring-smoothed `scaleX` MotionValue representing page scroll (0–1). Used exclusively by `ScrollProgressBar`.

```jsx
const scaleX = usePageScrollProgress()
// Apply to a motion.div with transform-origin: left
```

---

#### `useParallax(ref, distance?)`

Returns a `y` MotionValue that moves the element relative to scroll position. Pass a `ref` to the element you want to parallax.

```jsx
const ref = useRef(null)
const y = useParallax(ref, 50)  // moves 50px over the element's scroll range

<motion.div ref={ref} style={{ y }}>
  Parallax element
</motion.div>
```

---

### Variants Reference

Import any variant from `src/hooks/useScrollAnimations.js`:

```js
import { fadeUp, slideLeft, scaleUp, staggerContainer } from '../hooks/useScrollAnimations'
```

| Variant | Effect | Best used for |
|---|---|---|
| `fadeUp` | `opacity 0→1`, `y 36→0` | Cards, paragraphs, most elements |
| `fadeIn` | `opacity 0→1` only | Subtle text, overlays |
| `slideLeft` | `opacity 0→1`, `x -32→0` | Timeline items, left-column content |
| `slideRight` | `opacity 0→1`, `x 32→0` | Right-column content, form panels |
| `scaleUp` | `opacity 0→1`, `scale 0.88→1` | Tags, stat cards, icon badges |
| `lineReveal` | `scaleX 0→1` from origin left | Decorative horizontal lines |
| `labelReveal` | `opacity 0→1`, `y 10→0` | Section label text |
| `sectionVariants` | Triggers stagger on children | Top-level section wrappers |
| `skillBarVariant` | `opacity 0→1`, `y 12→0` | Skill bar row containers |
| `staggerContainer(n, delay)` | Stagger wrapper | Any list of child items |

---

### Per-Section Animation Strategy

| Section | Entry | Children |
|---|---|---|
| **Hero** | Page fade-in (0.4s) | Stagger 120ms: badge → name → role → bio → buttons → socials |
| **About** | Left col: `slideLeft`, right col: `slideRight` | Tags `scaleUp`, stat cards `scaleUp`, arc items `slideLeft` |
| **Experience** | Timeline line `scaleY` draws down | Each card: `slideLeft` with own `useReveal`. Achievements stagger `x -12→0` |
| **Education** | Cards: `y 32, scale 0.97 → 0, 1` with delay `index * 0.12` | Icon: spring bounce-in. Highlights: `scaleUp` stagger |
| **Skills** | Cards: `fadeUp` delay `index * 0.13` with `staggerChildren` | Icon: spring rotate-in. Bars: `width 0 → level%` |
| **Projects** | `y 48, scale 0.96 → 0, 1`, alternate column delay | Tags: `scaleUp`. Links: `whileHover { x: 3 }` |
| **Contact** | Info panel: `slideLeft` stagger. Form: `slideRight` | Info cards: `whileHover { x: 6 }`. Fields: stagger `fadeUp` |
| **Footer** | `staggerContainer(0.08)` | Links: `fadeUp`. Divider: `scaleX`. Socials: `scaleUp` |

---

### Adding Animations to New Elements

**Simple one-off animation (outside a stagger context):**

```jsx
import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useScrollAnimations'

function NewCard() {
  const { ref, inView } = useReveal()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      Card content
    </motion.div>
  )
}
```

**Staggered list inside a SectionWrapper:**

```jsx
import { motion } from 'framer-motion'
import { staggerContainer, fadeUp } from '../hooks/useScrollAnimations'

// Parent triggers stagger
<motion.ul variants={staggerContainer(0.08)}>
  {items.map(item => (
    // Children inherit hidden/visible from parent stagger
    <motion.li key={item.id} variants={fadeUp}>
      {item.name}
    </motion.li>
  ))}
</motion.ul>
```

**Hover micro-interaction:**

```jsx
<motion.button
  whileHover={{ scale: 1.04, y: -2 }}
  whileTap={{ scale: 0.97 }}
  transition={{ duration: 0.2 }}
>
  Click me
</motion.button>
```

---

## Design System

### Color Tokens

All colors are defined in `tailwind.config.js` and available as Tailwind utility classes.

**Backgrounds:**

| Token | Class | Hex | Usage |
|---|---|---|---|
| `bg.primary` | `bg-bg-primary` | `#080810` | Page background |
| `bg.secondary` | `bg-bg-secondary` | `#0e0e1a` | Alternate section bg |
| `bg.card` | `bg-bg-card` | `#12121f` | Card backgrounds |
| `bg.border` | `bg-bg-border` | `#1e1e30` | Borders, dividers |

**Accents:**

| Token | Class | Hex | Usage |
|---|---|---|---|
| `accent.gold` | `text-accent-gold` | `#f0a500` | Primary accent, headings |
| `accent.amber` | `text-accent-amber` | `#ffb830` | Hover states, gradients |
| `accent.coral` | `text-accent-coral` | `#ff6b6b` | Error states, emphasis |
| `accent.blue` | `text-accent-blue` | `#4a9eff` | Info states, secondary accent |

**Text:**

| Token | Class | Hex | Usage |
|---|---|---|---|
| `text.primary` | `text-text-primary` | `#f0eee8` | Headings, important text |
| `text.secondary` | `text-text-secondary` | `#9896a4` | Body text, descriptions |
| `text.muted` | `text-text-muted` | `#5a5870` | Labels, placeholders, metadata |

---

### Typography

| Font | Weight | Class | Usage |
|---|---|---|---|
| **Syne** | 700, 800 | `font-syne` | All headings, section titles, nav, buttons |
| **Epilogue** | 400, 500 | `font-epilogue` | Body text, descriptions, metadata |

Both fonts load via Google Fonts in `index.html`. They are preconnected for performance.

**Font size scale (Tailwind defaults used):**

- Section titles: `text-4xl md:text-5xl` (Syne 800)
- Card headings: `text-lg` (Syne 700)
- Body text: `text-base` / `text-sm` (Epilogue 400)
- Labels/meta: `text-xs` (Epilogue 500)

---

### Reusable CSS Classes

Defined in `src/index.css` under `@layer components`:

| Class | Description |
|---|---|
| `.card` | Dark card with border, rounded corners, hover border glow |
| `.tag` | Small pill tag — dark bg, border, gold hover |
| `.btn-primary` | Filled gold button — primary CTA |
| `.btn-secondary` | Ghost gold button — secondary CTA |
| `.glow-gold` | Gold text shadow glow effect |
| `.gradient-border` | Animated rotating gradient border (used on avatar) |
| `.cursor-blink` | Step-function opacity blink for typewriter cursor |
| `.noise-overlay` | Fixed full-screen SVG grain texture overlay |

---

### Custom Animations (CSS)

Defined in `tailwind.config.js` and accessible as Tailwind classes:

| Class | Effect | Duration |
|---|---|---|
| `animate-float` | Gentle vertical float `0 → -20px → 0` | 6s, infinite |
| `animate-pulse-glow` | Gold box-shadow pulse | 2s, infinite |

---

## Deployment

### Vercel

The easiest option — zero configuration needed.

```bash
npm i -g vercel
vercel
```

Or connect your GitHub repository to [vercel.com](https://vercel.com) and it deploys automatically on every push.

---

### Netlify

```bash
npm run build
```

Then drag the `dist/` folder to [app.netlify.com/drop](https://app.netlify.com/drop).

Or via CLI:

```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

---

### GitHub Pages

1. Install the GitHub Pages plugin:

```bash
npm install --save-dev gh-pages
```

2. Add to `package.json` scripts:

```json
"scripts": {
  "deploy": "gh-pages -d dist"
}
```

3. Set the base path in `vite.config.js`:

```js
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/',
})
```

4. Build and deploy:

```bash
npm run build
npm run deploy
```

---

## Adding a Backend to the Contact Form

The contact form in `Contact.jsx` is currently UI-only. To make it functional, replace the `handleSubmit` function with a real API call.

**Option A — EmailJS (no server needed):**

```bash
npm install @emailjs/browser
```

```jsx
import emailjs from '@emailjs/browser'

const handleSubmit = async (e) => {
  e.preventDefault()
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        from_name: formState.name,
        from_email: formState.email,
        message: formState.message,
      },
      'YOUR_PUBLIC_KEY'
    )
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormState({ name: '', email: '', message: '' })
  } catch (err) {
    console.error('Failed to send:', err)
  }
}
```

**Option B — Formspree:**

```jsx
const handleSubmit = async (e) => {
  e.preventDefault()
  const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formState),
  })
  if (res.ok) {
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormState({ name: '', email: '', message: '' })
  }
}
```

---

## Troubleshooting

**Fonts not loading**

Make sure you have an internet connection during development — fonts are served from Google Fonts CDN. For offline use, download the fonts and host them locally via `@font-face` in `index.css`.

---

**Tailwind classes not applying**

Verify `tailwind.config.js` `content` array includes your file paths:

```js
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
```

Then restart the dev server: `npm run dev`.

---

**Animations not triggering on scroll**

Check that the element is inside a `SectionWrapper` or has a `useReveal` hook attached. Also verify `framer-motion` is installed: `npm list framer-motion`.

---

**Build fails with "Cannot find module"**

Run `npm install` to restore all dependencies, then `npm run build` again.

---

**Vite base path issues after deployment**

If assets return 404 after deploying to a subdirectory (e.g. GitHub Pages), set the base in `vite.config.js`:

```js
base: '/your-repo-name/'
```

---

**Mobile layout breaks**

Ensure all section containers use responsive Tailwind classes like `grid-cols-1 md:grid-cols-2` and `px-6`. The project is built mobile-first — if you add new sections, follow the same pattern.

---

## License

MIT License — free to use, modify, and distribute for personal and commercial projects. Attribution appreciated but not required.

---

*Built with React, Vite, Tailwind CSS, and Framer Motion.*
