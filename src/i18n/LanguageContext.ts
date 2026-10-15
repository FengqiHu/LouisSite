import { createContext, useContext } from 'react'
import { content, type Locale } from './content'

export const LanguageContext = createContext<{
  locale: Locale
  setLocale: (locale: Locale) => void
} | null>(null)

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage requires LanguageProvider')
  return { ...context, content: content[context.locale] }
}
