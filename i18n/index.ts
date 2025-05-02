import fr from './locales/fr.json'
import en from './locales/en.json'

export const i18n = {
  restructureDir: false,
  defaultLocale: 'fr',
  locales: [
    {
      code: 'fr',
      name: 'Français'
    },
    {
      code: 'en',
      name: 'English'
    }
  ],
  strategy: 'no_prefix'
}

export default { fr, en }
