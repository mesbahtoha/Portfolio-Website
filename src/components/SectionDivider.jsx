// Subtle animated line between sections.
// `flip` reverses the gradient direction.
import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useScrollAnimations'

export default function SectionDivider({ flip = false }) {
  const { ref, inView } = useReveal({ margin: '-20px' })

  return (
    <div ref={ref} className="relative h-px mx-6 md:mx-24 overflow-hidden">
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={inView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: flip ? '100% 50%' : '0% 50%' }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-bg-border to-transparent"
      />
      {/* Gold accent dot at the midpoint */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                   w-1.5 h-1.5 rounded-full bg-accent-gold/40"
      />
    </div>
  )
}
