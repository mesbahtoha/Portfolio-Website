import { motion } from 'framer-motion'
import {
  FiArrowRight,
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

const socialLinks = [
  { icon: FiGithub, href: personal.github, label: 'GitHub' },
  { icon: FiLinkedin, href: personal.linkedin, label: 'LinkedIn' },
  { icon: FaFacebookF, href: personal.facebook, label: 'Facebook' },
  { icon: FaInstagram, href: personal.instagram, label: 'Instagram' },
]

export default function Hero() {
  const { lang, t } = useLanguage()
  const location = pick(personal, 'location', lang)
  const tagline = pick(personal, 'tagline', lang)

  const proofPoints = [
    { value: '3', label: t('hero.proofClients') },
    { value: '64', label: t('hero.proofDistricts') },
    { value: '1', label: t('hero.proofFinalist') },
  ]

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
  }

  const firstName = personal.shortName
  const lastName = personal.name.split(' ').slice(-1)[0]

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-[72px]">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-70" />
      <div className="absolute inset-0 bg-hero-gradient opacity-80" />
      <div className="pointer-events-none absolute left-[8%] top-1/3 h-72 w-72 rounded-full bg-accent-gold/[0.04] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-[8%] h-64 w-64 rounded-full bg-accent-blue/[0.04] blur-[110px]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-20 md:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-4"
          >
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-bg-border bg-bg-card/80 px-3.5 py-1.5 text-[11px] font-epilogue text-text-secondary">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                {t('hero.available')}
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">
                {t('hero.eyebrow')}
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-syne text-[2.65rem] font-bold leading-[1.02] text-text-primary min-[380px]:text-[2.85rem] sm:text-6xl xl:text-[4.4rem]"
              style={{ letterSpacing: '-0.045em' }}
            >
              {firstName} {lastName}
              <span className="text-accent-gold">.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="max-w-xl font-epilogue text-sm leading-relaxed text-text-secondary sm:text-base"
            >
              {tagline}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-2">
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
                href="#projects"
                onClick={(event) => {
                  event.preventDefault()
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-secondary"
              >
                {t('hero.viewProjects')}
                <FiArrowRight size={15} />
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-3 grid grid-cols-3 gap-4 border-y border-bg-border/70 py-4"
            >
              {proofPoints.map((point) => (
                <div key={point.label}>
                  <p className="metric-number text-xl text-text-primary md:text-2xl">
                    {point.value}
                  </p>
                  <p className="mt-0.5 text-[10px] font-epilogue font-medium uppercase leading-snug tracking-[0.12em] text-text-muted">
                    {point.label}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 pt-1">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-bg-border text-text-secondary transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-gold/50 hover:text-accent-gold hover:shadow-md"
                >
                  <Icon size={14} />
                </a>
              ))}
              <a
                href={`mailto:${personal.email}`}
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-bg-border text-text-secondary transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-gold/50 hover:text-accent-gold hover:shadow-md"
              >
                <FiMail size={14} />
              </a>

              <div className="mx-1 h-5 w-px bg-bg-border" />
              <span className="inline-flex items-center gap-1.5 text-[11px] font-epilogue text-text-muted">
                <FiMapPin size={11} className="text-accent-gold" />
                {location}
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="group relative w-full max-w-[370px] rounded-[2rem] border border-bg-border bg-bg-card p-2 shadow-lift"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.55rem] bg-bg-secondary">
                <img
                  src={portrait}
                  alt={`${personal.name} — Full Stack Developer`}
                  width="1000"
                  height="934"
                  className="h-full w-full object-cover object-top transition-transform duration-700 ease-smooth group-hover:scale-[1.02]"
                />
              </div>

              <div className="absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-bg-border bg-bg-card px-3.5 py-1.5 text-[10px] font-epilogue font-medium text-text-secondary shadow-lg">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-gold" />
                {t('hero.finalist')}
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-text-muted">
            {t('hero.scroll')}
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="h-7 w-px bg-gradient-to-b from-accent-gold/70 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}
