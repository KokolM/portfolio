export interface TechIconConfig {
    icon: string
    title: string
    url: string
    sizeRem?: number
}

export const techIconsConfig: Record<string, TechIconConfig> = {
    nuxt: {
        icon: 'devicon-nuxt-plain',
        title: 'Nuxt',
        url: 'https://nuxt.com/',
    },
    angular: {
        icon: 'devicon-angular-plain',
        title: 'Angular',
        url: 'https://v17.angular.io/docs',
        sizeRem: 2.0,
    },
    vue: {
        icon: 'devicon-vuejs-plain',
        title: 'Vue JS',
        url: 'https://vuejs.org/',
    },
    typescript: {
        icon: 'devicon-typescript-plain',
        title: 'TypeScript',
        url: 'https://www.typescriptlang.org/',
        sizeRem: 1.9,
    },
    flutter: {
        icon: 'devicon-flutter-plain',
        title: 'Flutter',
        url: 'https://www.flutter.dev/',
        sizeRem: 1.7,
    },
    dart: {
        icon: 'devicon-dart-plain',
        title: 'Dart',
        url: 'https://dart.dev/',
        sizeRem: 1.8,
    },
    node: {
        icon: 'devicon-nodejs-plain',
        title: 'Node JS',
        url: 'https://nodejs.org/',
    },
    postgres: {
        icon: 'devicon-postgresql-plain',
        title: 'PostgreSQL',
        url: 'https://www.postgresql.org/',
    },
    prisma: {
        icon: 'devicon-prisma-plain',
        title: 'Prisma',
        url: 'https://www.prisma.io/',
        sizeRem: 1.8,
    },
    docker: {
        icon: 'devicon-docker-plain',
        title: 'Docker',
        url: 'https://www.docker.com/',
        sizeRem: 2.5,
    },
    traefik: {
        icon: 'devicon-traefikproxy-original',
        title: 'Traefik',
        url: 'https://traefik.io/',
        sizeRem: 2.5,
    },
    nginx: {
        icon: 'devicon-nginx-original',
        title: 'Nginx',
        url: 'https://nginx.org/',
        sizeRem: 2.5,
    },
    primeFaces: {
        icon: 'pi pi-prime',
        title: 'Prime Faces',
        url: 'https://www.primefaces.org/',
        sizeRem: 1.7,
    },
    tailwind: {
        icon: 'devicon-tailwindcss-original',
        title: 'Tailwind',
        url: 'https://tailwindcss.com/',
    },
    figma: {
        icon: 'devicon-figma-plain',
        title: 'Figma',
        url: 'https://www.figma.com/',
        sizeRem: 1.8,
    },
    sketch: {
        icon: 'devicon-sketch-plain',
        title: 'Sketch',
        url: 'https://www.sketch.com/',
    },
    vuetify: {
        icon: 'devicon-vuetify-plain',
        title: 'Vuetify JS',
        url: 'https://vuetifyjs.com/',
    },
    express: {
        icon: 'devicon-express-original',
        title: 'Express JS',
        url: 'https://expressjs.com/',
        sizeRem: 2.2,
    },
    keycloak: {
        icon: 'my-icon my-icon-keycloak',
        title: 'Keycloak',
        url: 'https://www.keycloak.org/',
        sizeRem: 2.4,
    },
    drf: {
        icon: 'devicon-djangorest-plain',
        title: 'DRF',
        url: 'https://www.django-rest-framework.org/',
        sizeRem: 2.4,
    },
    python: {
        icon: 'devicon-python-plain',
        title: 'Python',
        url: 'https://www.python.org/',
        sizeRem: 2.0,
    },
    bash: {
        icon: 'devicon-bash-plain',
        title: 'Bash',
        url: 'https://www.gnu.org/software/bash/',
        sizeRem: 2.0,
    },
    c: {
        icon: 'devicon-c-plain',
        title: 'C',
        url: 'https://en.cppreference.com/w/c/language',
        sizeRem: 2.0,
    },
}

// Helper to convert component name to config key
export function getConfigKey(componentName: string): string {
    // TechIconNuxt -> nuxt
    // TechIconPrimeFaces -> primeFaces
    const key = componentName.replace('TechIcon', '')
    return key.charAt(0).toLowerCase() + key.slice(1)
}
