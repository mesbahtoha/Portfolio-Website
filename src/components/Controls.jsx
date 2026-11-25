import { FiGlobe, FiMoon, FiSun } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'

export function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme()
  const { t } = useLanguage()
  const isDark = theme === 'dark'
  const label = isDark ? t('common.themeLight') : t('common.themeDark')

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className={`icon-button ${className}`}
    >
      {isDark ? <FiSun size={16} /> : <FiMoon size={16} />}
    </button>
  )
}

export function LanguageToggle({ className = '' }) {
  const { lang, toggleLang, t } = useLanguage()
  const label = t('common.language')

  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={label}
      title={`${label} — ${lang === 'en' ? 'বাংলা' : 'English'}`}
      className={`inline-flex h-10 items-center gap-1.5 rounded-full border border-bg-border
                  bg-bg-card/60 px-3 text-[11px] font-bold tracking-wide text-text-secondary
                  hover:border-accent-gold/40 hover:text-accent-gold transition-colors ${className}`}
    >
      <FiGlobe size={13} />
      {lang === 'en' ? 'বাং' : 'EN'}
    </button>
  )
}
