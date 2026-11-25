// Thin gold bar fixed at the top — fills as you scroll down the page
import { motion } from 'framer-motion'
import { usePageScrollProgress } from '../hooks/useScrollAnimations'

export default function ScrollProgressBar() {
  const scaleX = usePageScrollProgress()

  return (
    <motion.div
      style={{
        scaleX,
        transformOrigin: '0%',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background:
          'linear-gradient(to right, rgb(var(--accent-gold)), rgb(var(--accent-amber)), rgb(var(--accent-blue)))',
        zIndex: 9999,
      }}
    />
  )
}
