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
        background: 'linear-gradient(to right, #f0a500, #ffb830, #4a9eff)',
        zIndex: 9999,
      }}
    />
  )
}
