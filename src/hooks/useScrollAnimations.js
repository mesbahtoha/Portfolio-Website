// ─────────────────────────────────────────────────────────────
//  useScrollAnimations.js
//  Central library for all scroll-driven animation config.
//  Import variants and hooks from here to keep things consistent.
// ─────────────────────────────────────────────────────────────

import { useRef } from 'react'
import { useInView, useScroll, useSpring, useTransform } from 'framer-motion'

// ── 1. VIEWPORT HOOK ─────────────────────────────────────────
// Returns { ref, inView } — fires once when element enters viewport
export function useReveal(options = {}) {
  const ref = useRef(null)
  const inView = useInView(ref, {
    once: true,
    margin: options.margin ?? '-80px',
    ...options,
  })
  return { ref, inView }
}

// ── 2. SCROLL PROGRESS (for the top progress bar) ────────────
export function usePageScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })
  return scaleX
}

// ── 3. PARALLAX helper ───────────────────────────────────────
// Pass a ref to the element you want to parallax
export function useParallax(ref, distance = 40) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [-distance, distance])
  return y
}

// ─────────────────────────────────────────────────────────────
//  ANIMATION VARIANTS
//  Use these with Framer Motion's `variants` prop.
// ─────────────────────────────────────────────────────────────

// Smooth ease curve matching the site's aesthetic
const EASE = [0.22, 1, 0.36, 1]

// ── SECTION — the outer wrapper for every page section
export const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      staggerChildren: 0.13,   // children animate one after another
      delayChildren: 0.05,
    },
  },
}

// ── FADE UP — the most common card / item reveal
export const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE },
  },
}

// ── FADE IN — pure opacity, no movement (for subtle elements)
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
}

// ── SLIDE LEFT — for timeline items and left-anchored content
export const slideLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: EASE },
  },
}

// ── SLIDE RIGHT — for right-anchored content (avatar, stats)
export const slideRight = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: EASE },
  },
}

// ── SCALE UP — for stat cards and icon badges
export const scaleUp = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: EASE },
  },
}

// ── HEADING LINE — the gold accent line that "draws in"
export const lineReveal = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.5, ease: EASE, delay: 0.1 },
  },
}

// ── LABEL — the small uppercase section label
export const labelReveal = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE },
  },
}

// ── STAGGER CONTAINER — wraps a list of staggered children
export const staggerContainer = (stagger = 0.1, delay = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
})

// ── SKILL BAR — width animates from 0 to actual value
// (Use inline style for width, this handles opacity/y)
export const skillBarVariant = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE },
  },
}
