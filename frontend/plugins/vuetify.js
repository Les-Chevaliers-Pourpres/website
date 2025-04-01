import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          info: '#10578E',
          warning: '#D64309',
          error: '#A52818',
          success: '#008800'
        }
      }
    }
  })

  nuxtApp.vueApp.use(vuetify)
})
