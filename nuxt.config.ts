import AuraTheme from './themes/aura'
import { projectsData } from './data'

const projectRoutes = Object.keys(projectsData).map(id => `/projects/${id}`)

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        '@primevue/nuxt-module',
        'nuxt-viewport',
        '@nuxt/image',
    ],

    routeRules: {
        '/**': { prerender: true },
    },

    nitro: {
        prerender: {
            routes: ['/', ...projectRoutes]
        }
    },

    primevue: {
        options: {
            theme: {
                preset: AuraTheme.preset,
                options: {
                    ...AuraTheme.options,
                    cssLayer: {
                        name: 'primevue',
                        order: 'tailwind-base, primevue, tailwind-utilities',
                    },
                },
            },
        },
    },

    css: [
        '~/assets/css/main.css',
        'primeicons/primeicons.css',
        '@fortawesome/fontawesome-svg-core/styles.css',
        'devicon/devicon.min.css',
    ],

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    build: {
        transpile: ['@fortawesome/vue-fontawesome'],
    },

    compatibilityDate: '2024-08-24',
})
