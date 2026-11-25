import { motion } from 'framer-motion'
import { FiArrowUp, FiGithub, FiLinkedin } from 'react-icons/fi'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { personal } from '../data/data'
import { useLanguage } from '../context/LanguageContext'
import { useReveal, staggerContainer, fadeUp, scaleUp } from '../hooks/useScrollAnimations'
import shortImg from '../assets/shortImg.jpeg'

const socialLinks = [
  { icon: FiGithub, href: personal.github, label: 'GitHub' },
  { icon: FiLinkedin, href: personal.linkedin, label: 'LinkedIn' },
  { icon: FaFacebookF, href: personal.facebook, label: 'Facebook' },
  { icon: FaInstagram, href: personal.instagram, label: 'Instagram' },
]

const footerLinks = [
  { key: 'about', href: '#about' },
  { key: 'experience', href: '#experience' },
  { key: 'education', href: '#education' },
  { key: 'projects', href: '#projects' },
  { key: 'research', href: '#research' },
  { key: 'videos', href: '#videos' },
  { key: 'contact', href: '#contact' },
]

export default function Footer() {
  const { t } = useLanguage()
  const { ref, inView } = useReveal({ margin: '-20px' })

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <motion.footer
      ref={ref}
      variants={staggerContainer(0.06)}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="border-t border-bg-border/60 bg-bg-secondary/50"
    >
      <div className="mx-auto max-w-6xl px-6 py-12">
        <motion.div
          variants={fadeUp}
          className="mb-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center"
        >
          <div className="flex max-w-sm flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 overflow-hidden rounded-lg bg-accent-gold p-[2px]">
                <div className="h-full w-full overflow-hidden rounded-[6px] bg-bg-card">
                  <img src={shortImg} alt="" width="32" height="32" className="h-full w-full object-cover" />
                </div>
              </div>
              <span className="font-syne font-bold text-text-primary">
                {personal.shortName}
                <span className="text-accent-gold">.</span>
              </span>
            </div>
            <p className="font-epilogue text-xs leading-relaxed text-text-muted">
              {t('footer.tagline')}
            </p>
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex w-fit items-center gap-1.5 text-[11px] font-epilogue text-accent-gold transition-opacity hover:opacity-80"
            >
              {t('footer.resume')} ↗
            </a>
          </div>

          <motion.nav
            variants={staggerContainer(0.04)}
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-5 gap-y-2"
          >
            {footerLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                variants={fadeUp}
                whileHover={{ color: 'rgb(var(--accent-gold))', y: -2 }}
                onClick={(event) => {
                  event.preventDefault()
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="font-epilogue text-sm text-text-muted transition-colors"
              >
                {t(`nav.${link.key}`)}
              </motion.a>
            ))}
          </motion.nav>
        </motion.div>

        <motion.div
          variants={{
            hidden: { scaleX: 0, opacity: 0 },
            visible: {
              scaleX: 1,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
            },
          }}
          style={{ transformOrigin: '0%' }}
          className="mb-8 h-px bg-gradient-to-r from-transparent via-bg-border to-transparent"
        />

        <motion.div
          variants={fadeUp}
          className="flex flex-col items-center justify-between gap-4 sm:flex-row"
        >
          <motion.div variants={staggerContainer(0.05)} className="flex flex-wrap items-center gap-2.5">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                variants={scaleUp}
                whileHover={{ scale: 1.1, borderColor: 'rgb(var(--accent-gold) / 0.4)' }}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-bg-border text-text-muted transition-colors hover:text-accent-gold"
              >
                <Icon size={14} />
              </motion.a>
            ))}
          </motion.div>

          <p className="text-center font-epilogue text-xs text-text-muted">
            © {new Date().getFullYear()} {personal.name}. {t('footer.rights')}{' '}
            <span className="hidden sm:inline">{t('footer.builtWith')}</span>
          </p>

          <motion.button
            type="button"
            onClick={scrollToTop}
            whileHover={{ scale: 1.08, y: -2, borderColor: 'rgb(var(--accent-gold) / 0.4)' }}
            whileTap={{ scale: 0.95 }}
            aria-label={t('footer.backToTop')}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-bg-border text-text-muted transition-colors hover:text-accent-gold"
          >
            <FiArrowUp size={14} />
          </motion.button>
        </motion.div>
      </div>
    </motion.footer>
  )
}
