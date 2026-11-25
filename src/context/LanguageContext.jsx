import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { getMessages, translations } from '../i18n/translations'

const LanguageContext = createContext(null)

function getInitialLanguage() {
  if (typeof window === 'undefined') return 'en'
  const fromUrl = new URLSearchParams(window.location.search).get('lang')
  if (fromUrl === 'bn' || fromUrl === 'en') {
    window.localStorage.setItem('portfolio-lang', fromUrl)
    return fromUrl
  }
  const stored = window.localStorage.getItem('portfolio-lang')
  return stored === 'bn' ? 'bn' : 'en'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLanguage)

  useEffect(() => {
    document.documentElement.lang = lang
    window.localStorage.setItem('portfolio-lang', lang)
  }, [lang])

  const t = useCallback(
    (path, vars) => {
      const messages = translations[lang] || translations.en
      const fallback = translations.en
      const read = (source) =>
        path.split('.').reduce((acc, key) => (acc == null ? undefined : acc[key]), source)

      let value = read(messages)
      if (value === undefined) value = read(fallback)
      if (value === undefined) return path
      if (typeof value !== 'string') return value

      if (vars) {
        value = value.replace(/\{(\w+)\}/g, (_, key) =>
          vars[key] === undefined ? `{${key}}` : vars[key]
        )
      }
      return value
    },
    [lang]
  )

  const value = useMemo(
    () => ({
      lang,
      isBn: lang === 'bn',
      setLang,
      toggleLang: () => setLang((current) => (current === 'en' ? 'bn' : 'en')),
      t,
      messages: getMessages(lang),
    }),
    [lang, t]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider')
  return context
}
