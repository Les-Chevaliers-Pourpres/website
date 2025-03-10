import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
  // récupérer la config de SUMO
  // Mettre à jour les dépendances : Mettez à jour votre fichier package.json pour utiliser les dernières versions de Nuxt 3, Vue 3 et d'autres paquets connexes. Supprimez les dépendances Nuxt 2 et Vue 2.
// Mise à jour de la configuration : Convertissez votre fichier nuxt.config.js ou nuxt.config.ts pour utiliser le format defineNuxtConfig. Assurez-vous que toutes les options de configuration sont compatibles avec Nuxt 3.
// Migrer les composants de la mise en page : Déplacez vos composants de mise en page du répertoire layouts vers le nouveau répertoire app/layouts. Mettez à jour leur structure et leur code pour suivre la nouvelle syntaxe de mise en page de Nuxt 3.
// récupérer le linter et les extension pour autocomplete, autosave, couleurs, autolinter etc

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global CSS: https://go.nuxtjs.dev/config-css

  // impossible d'utiliser le scss, plantage du préprocesseur
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
})
