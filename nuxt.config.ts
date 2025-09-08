import Aura from '@primeuix/themes/aura'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@primevue/nuxt-module',
    ['@nuxtjs/google-fonts', { families: { 'Saira Extra Condensed': [400, 500, 600, 700, 800] } }],
    'nuxt-viewport',
    '@primevue/nuxt-module',
  ],

  primevue: {
    options: {
      theme: {
        preset: Aura,
      },
    },
  },

  css: ['~/assets/css/main.css', 'primeicons/primeicons.css', '@fortawesome/fontawesome-svg-core/styles.css', 'devicon/devicon.min.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // router: {
  //   options: {
  //     scrollBehaviorType: 'smooth'
  //   }
  // },
  build: {
    transpile: ['@fortawesome/vue-fontawesome'],
  },

  compatibilityDate: '2024-08-24',
})
