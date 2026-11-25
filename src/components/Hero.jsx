import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
} from 'react-icons/fi'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { personal } from '../data/data'
import { pick } from '../i18n/content'
import { useLanguage } from '../context/LanguageContext'
import portrait from '../assets/formal-portrait.jpg'

function useTypewriter(words, speed = 78, pause = 1900) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    setText('')
    setWordIndex(0)
    setIsDeleting(false)
  }, [words])

  useEffect(() => {
    const current = words[wordIndex % words.length]
    if (!current) return undefined

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
          setWordIndex((index) => index + 1)
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
  const { lang, t, messages } = useLanguage()
  const typeText = useTypewriter(messages.hero.titles)
  const location = pick(personal, 'location', lang)
  const tagline = pick(personal, 'tagline', lang)

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 26 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
  }

  const firstName = personal.shortName
  const lastName = personal.name.split(' ').slice(-1)[0]

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-[72px]">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-100" />
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-accent-gold/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-accent-blue/5 blur-[100px]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-5"
          >
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 rounded-full border border-bg-border bg-bg-card px-4 py-2 text-xs font-epilogue text-text-secondary">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                {t('hero.available')}
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-syne text-[2.7rem] font-bold leading-[1.04] text-text-primary min-[380px]:text-[2.9rem] sm:text-6xl xl:text-7xl"
              style={{ letterSpacing: '-0.045em' }}
            >
              {t('hero.greeting')}{' '}
              <span className="glow-gold text-accent-gold">{firstName}</span> {lastName}
              <span className="text-accent-gold">.</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="flex min-h-[32px] items-center gap-3">
              <div className="h-[2px] w-8 rounded-full bg-accent-gold" />
              <p className="font-syne text-base font-semibold text-text-secondary sm:text-lg">
                {typeText}
                <span className="cursor-blink ml-0.5 text-accent-gold">|</span>
              </p>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="max-w-xl font-epilogue text-sm leading-relaxed text-text-secondary sm:text-base"
            >
              {tagline}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
              {personal.coreStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.04 }}
                  whileHover={{ scale: 1.04, borderColor: 'rgb(var(--accent-gold) / 0.5)' }}
                  className="tag cursor-default px-3 py-1 text-[11px]"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-1.5">
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <FiDownload size={15} />
                {t('hero.download')}
              </a>

              <a
                href="#contact"
                onClick={(event) => {
                  event.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-secondary"
              >
                <FiMail size={15} />
                {t('hero.hire')}
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-1">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-bg-border text-text-secondary transition-all duration-200 hover:scale-110 hover:border-accent-gold/50 hover:text-accent-gold"
                >
                  <Icon size={15} />
                </a>
              ))}

              <div className="mx-1 h-6 w-px bg-bg-border" />
              <span className="inline-flex items-center gap-1.5 text-xs font-epilogue text-text-muted">
                <FiMapPin size={12} className="text-accent-gold" />
                {location}
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, x: 24 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[370px]">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
              >
                <div className="rounded-[2rem] border border-bg-border bg-bg-card p-2 shadow-lift">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.55rem] bg-bg-secondary">
                    <div className="absolute inset-0 z-0 bg-gradient-to-br from-bg-secondary to-bg-card" />
                    <img
                      src={portrait}
                      alt={`${personal.name} — Profile`}
                      width="1000"
                      height="934"
                      className="relative z-10 h-full w-full object-cover object-top transition-transform duration-700 ease-smooth hover:scale-[1.02]"
                    />
                  </div>
                </div>

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
                  className="absolute -right-4 -top-5 z-20 rounded-2xl border border-bg-border bg-bg-card px-4 py-3 shadow-xl"
                >
                  <p className="font-syne text-sm font-bold leading-none text-accent-gold">
                    MERN + AI
                  </p>
                  <p className="mt-1 text-[10px] text-text-muted">Stack</p>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute -bottom-4 -left-4 z-20 rounded-2xl border border-bg-border bg-bg-card px-4 py-3 shadow-xl"
                >
                  <p className="font-syne text-sm font-bold leading-none text-text-primary">
                    Full Stack
                  </p>
                  <p className="mt-1 text-[10px] text-text-muted">Developer</p>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                  className="absolute -left-6 -top-7 z-20 rounded-2xl border border-bg-border bg-bg-card px-4 py-3 shadow-xl"
                >
                  <p className="font-syne text-sm font-bold leading-none text-accent-blue">
                    AI / RAG
                  </p>
                  <p className="mt-1 text-[10px] text-text-muted">Next.js · TypeScript</p>
                </motion.div>
              </motion.div>

              <div className="absolute inset-0 -z-10 scale-75 rounded-full bg-accent-gold/10 blur-3xl" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-text-muted">
            {t('hero.scroll')}
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-8 w-px bg-gradient-to-b from-accent-gold/60 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}
