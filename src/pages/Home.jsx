// ─────────────────────────────────────────────────────────────
//  Home.jsx — Page root with scroll animation orchestration
//
//  Animation strategy per section:
//    Hero        → entrance only (no scroll trigger needed)
//    About       → fade up + slide in from sides
//    Experience  → staggered timeline items slide from left
//    Education   → staggered cards scale up
//    Skills      → category cards fade up, bars animate width
//    Projects    → cards stagger with a slight Y offset
//    Contact     → info panel slides left, form slides right
//    Footer      → gentle fade up
// ─────────────────────────────────────────────────────────────

import { motion, AnimatePresence } from 'framer-motion'

import Navbar          from '../components/Navbar'
import Hero            from '../components/Hero'
import About           from '../components/About'
import Experience      from '../components/Experience'
import Education       from '../components/Education'
import Skills          from '../components/Skills'
import Projects        from '../components/Projects'
import Contact         from '../components/Contact'
import Footer          from '../components/Footer'
import ScrollProgressBar from '../components/ScrollProgressBar'
import SectionDivider  from '../components/SectionDivider'

export default function Home() {
  return (
    // AnimatePresence wraps the whole page for potential
    // future route-level transitions
    <AnimatePresence mode="wait">
      <motion.main
        key="home"
        className="bg-bg-primary min-h-screen"
        // Page-level entrance — the whole page fades in once
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* ── Fixed gold progress bar ── */}
        <ScrollProgressBar />

        {/* ── Navigation ── */}
        <Navbar />

        {/* ── Hero — has its own internal entrance animations ── */}
        <Hero />

        {/* ── Section divider (decorative) ── */}
        <SectionDivider />

        {/* ── About ── */}
        <About />

        <SectionDivider flip />

        {/* ── Experience ── */}
        <Experience />

        <SectionDivider />

        {/* ── Education ── */}
        <Education />

        <SectionDivider flip />

        {/* ── Skills ── */}
        <Skills />

        <SectionDivider />

        {/* ── Projects ── */}
        <Projects />

        <SectionDivider flip />

        {/* ── Contact ── */}
        <Contact />

        {/* ── Footer ── */}
        <Footer />
      </motion.main>
    </AnimatePresence>
  )
}
