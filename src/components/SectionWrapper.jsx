// ─────────────────────────────────────────────────────────────
//  SectionWrapper.jsx
//  Scroll-triggered container that orchestrates staggered
//  child animations via Framer Motion's variant propagation.
// ─────────────────────────────────────────────────────────────
import { motion } from 'framer-motion'
import { useReveal, sectionVariants, lineReveal, labelReveal, fadeUp } from '../hooks/useScrollAnimations'

// ── MAIN WRAPPER ─────────────────────────────────────────────
// Wrap any section in this to get automatic scroll-triggered
// stagger animation for all `motion.*` children inside it.
export default function SectionWrapper({ children, className = '', id }) {
  const { ref, inView } = useReveal({ margin: '-60px' })

  return (
    <motion.section
      id={id}
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.section>
  )
}

// ── SECTION HEADING ──────────────────────────────────────────
// Animated label + decorative line + title + optional subtitle.
export function SectionHeading({ label, title, subtitle }) {
  return (
    <motion.div variants={fadeUp} className="mb-14">

      {/* Label row */}
      <motion.div className="inline-flex items-center gap-2 mb-4" variants={labelReveal}>
        <motion.div
          variants={lineReveal}
          className="w-5 h-[2px] bg-accent-gold rounded-full"
        />
        <span className="text-accent-gold font-epilogue text-sm font-500 tracking-widest uppercase">
          {label}
        </span>
      </motion.div>

      {/* Heading clips up from below */}
      <div className="overflow-hidden">
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: '60%' },
            visible: {
              opacity: 1,
              y: '0%',
              transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.05 },
            },
          }}
          className="font-syne font-800 text-4xl md:text-5xl text-text-primary tracking-tight leading-tight"
        >
          {title}
        </motion.h2>
      </div>

      {subtitle && (
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: 'easeOut', delay: 0.15 },
            },
          }}
          className="mt-3 text-text-secondary font-epilogue text-base max-w-xl"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}

// ── ANIMATED ITEM ────────────────────────────────────────────
// Standalone scroll-reveal wrapper (for items outside a SectionWrapper)
export function AnimatedItem({ children, className = '', delay = 0 }) {
  const { ref, inView } = useReveal()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
