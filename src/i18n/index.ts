import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import translations from './locales'

const i18nConfig = {
  resources: translations,
  fallbackLng: 'pt-BR',
  defaultNS: 'translations'
}

await i18n.use(LanguageDetector).use(initReactI18next).init(i18nConfig)

// eslint-disable-next-line import/no-default-export
export default i18n
