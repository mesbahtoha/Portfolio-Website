import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiDownload, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { personal } from '../data/data'
import profileImg from '../assets/profile.jpeg'

// Typewriter hook
function useTypewriter(words, speed = 80, pause = 2000) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.slice(0, text.length + 1))

        if (text.length === current.length) {
          setTimeout(() => setIsDeleting(true), pause)
        }
      } else {
        setText(current.slice(0, text.length - 1))

        if (text.length === 0) {
          setIsDeleting(false)
          setWordIndex((i) => i + 1)
        }
      }
    }, isDeleting ? speed / 2 : speed)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, wordIndex, words, speed, pause])

  return text
}

const socialLinks = [
  { icon: FiGithub, href: personal.github, label: 'GitHub' },
  { icon: FiLinkedin, href: personal.linkedin, label: 'LinkedIn' },
  { icon: FaFacebookF, href: personal.facebook, label: 'Facebook' },
  { icon: FaInstagram, href: personal.instagram, label: 'Instagram' },
]

export default function Hero() {
  const titles = [
    'MERN Stack Developer',
    'Full Stack Developer',
    'React.js Developer',
    'Node.js Developer',
  ]

  const typeText = useTypewriter(titles)

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const firstName = personal.shortName
  const lastName = personal.name.split(' ').slice(-1)[0]

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-[72px] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-100" />
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            {/* Status badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-bg-card border border-bg-border rounded-full text-xs font-epilogue text-text-secondary">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for opportunities
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="font-syne font-800 text-5xl sm:text-6xl xl:text-7xl text-text-primary leading-[1.05] tracking-tight"
            >
              Hi, I&apos;m{' '}
              <span className="text-accent-gold glow-gold">{firstName}</span>
              <br />
              {lastName}
              <span className="text-accent-gold">.</span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <div className="w-8 h-[2px] bg-accent-gold rounded-full" />
              <p className="font-syne font-600 text-lg text-text-secondary">
                {typeText}
                <span className="cursor-blink text-accent-gold ml-0.5">|</span>
              </p>
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={itemVariants}
              className="text-text-secondary font-epilogue text-base leading-relaxed max-w-lg"
            >
              {personal.tagline}
            </motion.p>

            {/* Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-2">
              <a href={personal.resumeUrl} className="btn-primary">
                <FiDownload size={15} />
                Download Resume
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-secondary"
              >
                <FiMail size={15} />
                Hire Me
              </a>
            </motion.div>

            {/* Social + Location */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 pt-2 flex-wrap">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-bg-border flex items-center justify-center text-text-secondary hover:text-accent-gold hover:border-accent-gold/50 transition-all duration-200 hover:scale-110"
                >
                  <Icon size={16} />
                </a>
              ))}

              <div className="w-px h-6 bg-bg-border mx-1" />
              <span className="text-xs font-epilogue text-text-muted">
                📍 {personal.location}
              </span>
            </motion.div>
          </motion.div>

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{ y: [0, -16, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
              >
                {/* Gradient ring */}
                <div className="gradient-border p-[3px] rounded-full">
                  <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden bg-bg-card">
                    <div className="absolute inset-0 bg-gradient-to-br from-bg-secondary to-bg-card z-0" />
                    <img
                      src={profileImg}
                      alt="Profile pic"
                      className="relative z-10 w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>

                {/* Floating chips */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute -top-4 -right-4 bg-bg-card border border-bg-border rounded-2xl px-4 py-3 shadow-xl z-20"
                >
                  <p className="text-accent-gold font-syne font-700 text-base leading-none">
                    MERN
                  </p>
                  <p className="text-text-muted text-xs mt-1">Stack</p>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute -bottom-4 -left-4 bg-bg-card border border-bg-border rounded-2xl px-4 py-3 shadow-xl z-20"
                >
                  <p className="text-accent-gold font-syne font-700 text-base leading-none">
                    2025
                  </p>
                  <p className="text-text-muted text-xs mt-1">Certified</p>
                </motion.div>
              </motion.div>

              <div className="absolute inset-0 -z-10 bg-accent-gold/10 blur-3xl rounded-full scale-75" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-text-muted text-xs font-epilogue tracking-widest uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-[1px] h-8 bg-gradient-to-b from-accent-gold/60 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}