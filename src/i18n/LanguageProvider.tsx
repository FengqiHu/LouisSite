import { useEffect, useState, type ReactNode } from 'react'
import { content, type Locale } from './content'
import { LanguageContext } from './LanguageContext'

const STORAGE_KEY = 'louis-site-language'

function initialLocale(): Locale {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'zh' ? 'zh' : 'en'
  } catch {
    return 'en'
  }
}

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(initialLocale)

  useEffect(() => {
    document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en'
    document.title = content[locale].ui.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', content[locale].ui.description)
    try {
      localStorage.setItem(STORAGE_KEY, locale)
    } catch {
      // Language switching still works when browser storage is unavailable.
    }
  }, [locale])

  return <LanguageContext.Provider value={{ locale, setLocale }}>{children}</LanguageContext.Provider>
}
