// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@primevue/nuxt-module', ['@nuxtjs/google-fonts', { families: { 'Saira Extra Condensed': [400,500, 600, 700, 800] } }]],
  primevue: {
    usePrimeVue: true,
    importTheme: { from: '@/themes/aura.js' },
  },
  css: ['~/assets/css/main.css', 'primeicons/primeicons.css', '@fortawesome/fontawesome-svg-core/styles.css', 'devicon/devicon.min.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: ['@fortawesome/vue-fontawesome'],
  },
  // router: {
  //   options: {
  //     scrollBehaviorType: 'smooth'
  //   }
  // },
})
