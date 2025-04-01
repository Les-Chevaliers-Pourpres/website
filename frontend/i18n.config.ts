import messages from './i18n'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'fr',
  messages,
  fallbackLocale: 'fr',
  fallbackWarn: false,
  missingWarn: false
}))
