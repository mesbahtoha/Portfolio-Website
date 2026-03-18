# Md. Mesbahul Alam — Personal Portfolio Website

> **MERN Stack Developer** · Dhaka, Bangladesh · [mesbahulalam017@gmail.com](mailto:mesbahulalam017@gmail.com)

A modern, fully responsive personal portfolio website built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**. Features cinematic scroll animations, a working contact form powered by EmailJS, and a clean dark editorial design with gold accents.

---

## 🔗 Live Demo

> Add your live URL here after deployment

```
https://your-portfolio.vercel.app
```

---

## ⚡ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev) | 18.2 | UI framework |
| [Vite](https://vitejs.dev) | 5.1 | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com) | 3.4 | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | 11.0 | Scroll animations |
| [EmailJS](https://www.emailjs.com/) | 4.x | Contact form (no backend needed) |
| [React Icons](https://react-icons.github.io) | 5.0 | Icons |
| [React Router DOM](https://reactrouter.com) | 6.22 | Routing |
| [Google Fonts](https://fonts.google.com) | — | Syne + Epilogue fonts |

---

## 📁 Project Structure

```
portfolio/
│
├── index.html                      # Entry point, Google Fonts
├── vite.config.js                  # Vite config
├── tailwind.config.js              # Colors, fonts, animations
├── postcss.config.js               # PostCSS
├── package.json                    # Dependencies & scripts
│
└── src/
    ├── main.jsx                    # App entry
    ├── App.jsx                     # Root component
    ├── index.css                   # Global styles & Tailwind
    │
    ├── data/
    │   └── data.js                 # ⭐ ALL content lives here
    │
    ├── hooks/
    │   └── useScrollAnimations.js  # Framer Motion hooks & variants
    │
    ├── pages/
    │   └── Home.jsx                # Assembles all sections
    │
    └── components/
        ├── Navbar.jsx              # Fixed nav + mobile menu
        ├── Hero.jsx                # Hero with typewriter effect
        ├── About.jsx               # About + learning journey
        ├── Experience.jsx          # Career / first-role section
        ├── Education.jsx           # Education cards
        ├── Skills.jsx              # Animated skill bars
        ├── Projects.jsx            # Project cards
        ├── Contact.jsx             # EmailJS contact form ✅
        ├── Footer.jsx              # Footer + social links
        ├── ScrollProgressBar.jsx   # Gold progress bar at top
        ├── SectionDivider.jsx      # Animated dividers between sections
        └── SectionWrapper.jsx      # Scroll-trigger animation wrapper
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or higher → [Download](https://nodejs.org)
- **npm** v9 or higher

```bash
node --version   # should be v18+
npm --version    # should be v9+
```

### Installation

```bash
# 1. Unzip the project
unzip portfolio.zip
cd portfolio

# 2. Install all dependencies
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. Changes reflect instantly.

### Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder — ready to deploy.

### Preview Production Build

```bash
npm run preview
```

---

## ✏️ How to Customize

**All content is in one file → `src/data/data.js`**
You don't need to touch any component files for basic edits.

### Update Personal Info

```js
export const personal = {
  name: "Md. Mesbahul Alam",
  email: "mesbahtoha@gmail.com",
  phone: "+880 1XXX-XXXXXX",           // ← add your real number
  location: "Dhaka, Bangladesh",
  github: "https://github.com/mesbahtoha",
  linkedin: "https://linkedin.com/in/mesbahtoha",
  facebook: "https://facebook.com/your-username",   // ← update
  instagram: "https://instagram.com/your-username", // ← update
  resumeUrl: "/resume.pdf",            // ← after adding PDF to public/
}
```

### Add Your Projects

```js
export const projects = [
  {
    title: "⚡ ZapShift — Parcel Delivery App",
    description: "Full-stack parcel delivery application with booking, live tracking, and role-based dashboards for users, agents, and admins.",
    tech: ["React", "Node.js", "MongoDB", "JWT", "Tailwind"],
    gradient: "from-amber-500/20 to-orange-500/10",
    live: "https://zapshift.vercel.app",              // ← your live URL
    github: "https://github.com/mesbahtoha/zapshift", // ← your repo URL
    stats: "MERN Stack",
  },
]
```

### Add Your Profile Photo

1. Place your photo at `src/assets/images/profile.jpg`
2. Open `src/components/Hero.jsx` and replace:

```jsx
// Add import at top of file
import profileImg from '../assets/images/profile.jpg'

// Replace the avatar inner div
<div className="avatar-inner overflow-hidden p-0">
  <img
    src={profileImg}
    alt="Md. Mesbahul Alam"
    className="w-full h-full object-cover rounded-full"
  />
</div>
```

### Link Your Resume PDF

1. Create a `public/` folder in the project root
2. Place your file: `public/resume.pdf`
3. In `data.js` set: `resumeUrl: "/resume.pdf"`

---

## 📧 Contact Form (EmailJS)

The contact form sends emails directly to your Gmail — **no backend or server needed**.

### Your Keys (already configured)

```js
// src/components/Contact.jsx
const EMAILJS_SERVICE_ID  = 'service_bagerdo'
const EMAILJS_TEMPLATE_ID = 'template_244vtrm'
const EMAILJS_PUBLIC_KEY  = 'asbAb2JcSv6aXvChh'
```

### Template Variables Required

Make sure your EmailJS template uses these **exact** variable names:

| Variable | Purpose |
|---|---|
| `{{from_name}}` | Sender name in Subject line |
| `{{name}}` | Sender name shown in email body |
| `{{from_email}}` | Sender email shown in body |
| `{{reply_to}}` | Makes Gmail Reply go to sender ✅ |
| `{{message}}` | The message content |

### Recommended Email Body Template

```
New message from your portfolio contact form.

👤 Name:    {{from_name}}
📧 Email:   {{from_email}}
─────────────────────────────
💬 Message:
{{message}}
─────────────────────────────

↩ Hit Reply to respond directly to {{from_name}}.
```

### How It Works

```
Visitor fills form on your portfolio
           ↓
EmailJS sends email to mesbahulalam017@gmail.com
           ↓
You see sender's name + email in Gmail inbox
           ↓
Click Reply → goes directly to sender ✅
```

**Free plan:** 200 emails/month — more than enough for a portfolio.

---

## 🎨 Design System

### Color Tokens

| Token | Tailwind Class | Hex | Usage |
|---|---|---|---|
| Background | `bg-bg-primary` | `#080810` | Page background |
| Card | `bg-bg-card` | `#12121f` | Card backgrounds |
| Border | `border-bg-border` | `#1e1e30` | Card borders |
| Gold | `text-accent-gold` | `#f0a500` | Primary accent |
| Amber | `text-accent-amber` | `#ffb830` | Hover states |
| Text | `text-text-primary` | `#f0eee8` | Headings |
| Body | `text-text-secondary` | `#9896a4` | Descriptions |
| Muted | `text-text-muted` | `#5a5870` | Labels, metadata |

### Fonts

| Font | Weight | Usage |
|---|---|---|
| **Syne** | 700, 800 | Headings, buttons, nav |
| **Epilogue** | 400, 500 | Body text, descriptions |

### Reusable CSS Classes

| Class | Description |
|---|---|
| `.card` | Dark card with border + hover glow |
| `.tag` | Small pill tag with gold hover |
| `.btn-primary` | Filled gold button |
| `.btn-secondary` | Ghost gold outline button |
| `.glow-gold` | Gold text shadow glow |
| `.gradient-border` | Animated rotating gradient ring |
| `.cursor-blink` | Blinking typewriter cursor |

---

## 🌀 Scroll Animations

All animations live in `src/hooks/useScrollAnimations.js`.

| Variant | Effect | Used In |
|---|---|---|
| `fadeUp` | Fade + slide up 36px | Cards, paragraphs |
| `fadeIn` | Opacity only | Subtle overlays |
| `slideLeft` | Fade + slide from left | Timeline, contact info |
| `slideRight` | Fade + slide from right | Form panel, right columns |
| `scaleUp` | Fade + scale from 0.88 | Tags, stat cards, badges |
| `lineReveal` | ScaleX 0→1 from left | Decorative gold lines |
| `staggerContainer` | Staggers all children | Lists and grids |

**Scroll Progress Bar** — a gold gradient line fixed at the top of the page. Fills as you scroll down using `useSpring` + `useScroll` from Framer Motion.

All animations trigger **once** — they fire when the element enters the viewport and do not replay on re-scroll.

---

## 🌍 Deployment Guide

### Option 1 — Vercel (Recommended · Free)

```bash
# Step 1: Push to GitHub
git init
git add .
git commit -m "portfolio v1.0"
git remote add origin https://github.com/mesbahtoha/portfolio.git
git push -u origin main

# Step 2: Deploy
npm install -g vercel
vercel
```

Or go to [vercel.com](https://vercel.com) → sign in with GitHub → Import your repo → Deploy.

**Your free URL:** `https://portfolio-mesbahtoha.vercel.app`

---

### Option 2 — Netlify (Free)

```bash
npm run build
```

Drag the `dist/` folder to [app.netlify.com/drop](https://app.netlify.com/drop)

**Your free URL:** `https://mesbahul-portfolio.netlify.app`

---

### Option 3 — Custom Domain (~$10/year)

1. Buy `mesbahulalam.dev` at [Namecheap](https://namecheap.com) (~$10/year)
2. In Vercel → **Settings** → **Domains** → add your domain
3. Copy DNS records Vercel gives you into Namecheap DNS settings
4. Wait 10–30 minutes → your portfolio is live at your own domain ✅

---

## 🔧 Troubleshooting

**EmailJS emails not arriving?**
- Double-check your 3 keys in `Contact.jsx`
- Make sure template variable names match exactly (especially `{{name}}` and `{{reply_to}}`)
- Check EmailJS dashboard → Email History for errors

**Tailwind classes not applying?**
- Restart the dev server: `npm run dev`
- Check `tailwind.config.js` content paths include `./src/**/*.{js,jsx}`

**Build failing?**
```bash
npm install
npm run build
```

**Fonts not loading?**
- Google Fonts needs an internet connection during development
- Check the `<link>` tag is in `index.html`

**Animations not working?**
- Make sure `framer-motion` is installed: `npm list framer-motion`
- Check elements are inside a `SectionWrapper` or have `useReveal` hook

---

## ✅ Pre-Launch Checklist

- [ ] Updated `personal.phone` with real number
- [ ] Updated `personal.facebook` with real URL
- [ ] Updated `personal.instagram` with real URL
- [ ] Updated `personal.linkedin` with real URL
- [ ] Added all real project GitHub repo URLs
- [ ] Added all real project live demo URLs
- [ ] Added profile photo to `src/assets/images/`
- [ ] Added resume PDF to `public/resume.pdf`
- [ ] Set `resumeUrl: "/resume.pdf"` in `data.js`
- [ ] Tested contact form — email arrives in Gmail inbox
- [ ] Tested contact form — Gmail Reply goes to sender ✅
- [ ] Tested on mobile device
- [ ] Tested on tablet
- [ ] Deployed to Vercel or Netlify
- [ ] Added live URL to this README

---

<div align="center">

**Crafted with ❤️ by Md. Mesbahul Alam**

[![GitHub](https://img.shields.io/badge/GitHub-mesbahtoha-181717?style=flat&logo=github)](https://github.com/mesbahtoha)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-mesbahtoha-0A66C2?style=flat&logo=linkedin)](https://linkedin.com/in/mesbahtoha)
[![Email](https://img.shields.io/badge/Email-mesbahtoha@gmail.com-EA4335?style=flat&logo=gmail)](mailto:mesbahtoha@gmail.com)

*MERN Stack Developer · Dhaka, Bangladesh · Open to Opportunities*

</div>
