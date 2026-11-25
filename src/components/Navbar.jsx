import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { FiArrowUpRight } from 'react-icons/fi'
import { personal } from '../data/data'
import { useLanguage } from '../context/LanguageContext'
import { ThemeToggle, LanguageToggle } from './Controls'
import shortImg from '../assets/shortImg.jpeg'

const navItems = [
  { key: 'home', href: '#hero' },
  { key: 'about', href: '#about' },
  { key: 'experience', href: '#experience' },
  { key: 'education', href: '#education' },
  { key: 'skills', href: '#skills' },
  { key: 'projects', href: '#projects' },
  { key: 'research', href: '#research' },
  { key: 'videos', href: '#videos' },
  { key: 'contact', href: '#contact' },
]

export default function Navbar() {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = navItems.map((item) => item.href.slice(1))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    )

    sections.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!menuOpen) return undefined
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (event) => event.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  const handleNav = (href) => {
    setMenuOpen(false)
    const element = document.querySelector(href)
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? 'nav-shell shadow-xl shadow-black/10' : 'bg-transparent border-b border-transparent'
        }`}
      >
        <nav
          aria-label="Primary navigation"
          className="mx-auto flex h-[72px] max-w-8xl items-center justify-between px-4 sm:px-6"
        >
          <a
            href="#hero"
            onClick={(event) => {
              event.preventDefault()
              handleNav('#hero')
            }}
            className="group flex items-center gap-2.5"
          >
            <div className="h-9 w-9 rounded-xl bg-accent-gold p-[2px]">
              <div className="h-full w-full overflow-hidden rounded-[9px] bg-bg-card">
                <img
                  src={shortImg}
                  alt=""
                  width="36"
                  height="36"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <span className="hidden font-syne text-sm font-bold text-text-primary transition-colors group-hover:text-accent-gold sm:block">
              {personal.shortName}
              <span className="text-accent-gold">.</span>
            </span>
          </a>

          <ul className="hidden items-center gap-0.5 lg:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1)
              return (
                <li key={item.href}>
                  <button
                    type="button"
                    onClick={() => handleNav(item.href)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`relative rounded-full px-2.5 py-2 text-[12.5px] font-epilogue font-medium transition-colors xl:px-3 ${
                      isActive
                        ? 'text-accent-gold'
                        : 'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full border border-accent-gold/20 bg-accent-gold/10"
                        transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{t(`nav.${item.key}`)}</span>
                  </button>
                </li>
              )
            })}
          </ul>

          <div className="hidden items-center gap-2 lg:flex">
            <ThemeToggle />
            <LanguageToggle />
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-4 py-2 text-[11px] xl:px-5 xl:text-xs"
            >
              {t('nav.downloadCv')}
              <FiArrowUpRight size={13} />
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <LanguageToggle />
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? t('nav.closeMenu') : t('nav.menu')}
              aria-expanded={menuOpen}
              className="icon-button"
            >
              {menuOpen ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 overflow-y-auto bg-bg-primary/[0.97] pt-[72px] backdrop-blur-xl lg:hidden"
          >
            <nav className="flex min-h-[calc(100dvh-72px)] flex-col px-6 py-6" aria-label="Mobile navigation">
              <div className="mb-4 flex items-center justify-between rounded-2xl border border-bg-border bg-bg-card/70 p-3">
                <span className="text-xs font-epilogue uppercase tracking-widest text-text-muted">
                  {t('common.language')}
                </span>
                <LanguageToggle />
              </div>

              <div className="flex flex-col">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.href}
                    type="button"
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                    onClick={() => handleNav(item.href)}
                    className="flex items-center gap-4 border-b border-bg-border/60 py-3.5 text-left
                               font-syne text-xl font-bold text-text-secondary transition-colors hover:text-accent-gold"
                  >
                    <span className="w-6 text-sm font-syne text-accent-gold/50">
                      0{index + 1}
                    </span>
                    {t(`nav.${item.key}`)}
                  </motion.button>
                ))}
              </div>

              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-7 self-start"
              >
                {t('nav.downloadCv')}
                <FiArrowUpRight size={15} />
              </a>

              <div className="mt-auto pt-10 text-xs text-text-muted">
                {personal.email}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
