import AuraTheme from './themes/aura'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        '@primevue/nuxt-module',
        [
            '@nuxtjs/google-fonts',
            {
                families: {
                    'Saira Extra Condensed': [400, 500, 600, 700, 800],
                    'Open Sans': true,
                },
                display: 'swap',
                preload: true,
            },
        ],
        'nuxt-viewport',
    ],

    routeRules: {
        '/**': { prerender: true, ssr: false },
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
