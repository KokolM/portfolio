import type { Experience } from '~/models/experience.models'

export const experienceData: Record<string, Experience> = {
    bavenir: {
        id: 'bavenir',
        company: 'bAvenir s.r.o.',
        position: 'Fullstack Developer',
        startDate: new Date(2023, 9),
        description: [
            'I contributed to the development of a decentralized data sharing and governance platform, designing user interfaces and implementing core server-side features. The system uses Keycloak for role-based access control and certificate-based authentication to enable secure machine-to-machine communication.',
            'In collaboration with energy experts, I developed a customer portal for energy communities in Slovakia. The platform enables users and administrators to manage communities, share energy, and handle transparent billing for energy production and consumption.',
        ],
        techStackFrontend: [
            { name: 'Nuxt', component: 'TechIconNuxt' },
            { name: 'Angular', component: 'TechIconAngular' },
            { name: 'PrimeFaces', component: 'TechIconPrimeFaces' },
            { name: 'Tailwind', component: 'TechIconTailwind' },
            { name: 'Figma', component: 'TechIconFigma' },
        ],
        techStackBackend: [
            { name: 'Nuxt', component: 'TechIconNuxt' },
            { name: 'Node', component: 'TechIconNode' },
            { name: 'PostgreSQL', component: 'TechIconPostgres' },
            { name: 'Prisma', component: 'TechIconPrisma' },
        ],
        techStackDevOps: [
            { name: 'Docker', component: 'TechIconDocker' },
            { name: 'Traefik', component: 'TechIconTraefik' },
            { name: 'Nginx', component: 'TechIconNginx' },
        ],
    },
    freelance: {
        id: 'freelance',
        company: 'Freelance',
        position: 'Fullstack Developer',
        startDate: new Date(2023, 5),
        description: [
            "As a freelance full-stack developer, I've worked on diverse projects building modern, scalable web applications. My experience includes creating a role-based dashboard for an investment company, implementing backend integrations with third-party APIs, and developing a Notion-like collaborative app for real-time content editing and teamwork.",
        ],
        techStackFrontend: [
            { name: 'Angular', component: 'TechIconAngular' },
            { name: 'PrimeFaces', component: 'TechIconPrimeFaces' },
            { name: 'Tailwind', component: 'TechIconTailwind' },
            { name: 'Node', component: 'TechIconNode' },
            { name: 'PostgreSQL', component: 'TechIconPostgres' },
        ],
        techStackBackend: [
            { name: 'Docker', component: 'TechIconDocker' },
            { name: 'Figma', component: 'TechIconFigma' },
            { name: 'Sketch', component: 'TechIconSketch' },
            { name: 'Nginx', component: 'TechIconNginx' },
        ],
    },
    zvjs: {
        id: 'zvjs',
        company: 'ZVJS - Chance for Reentry',
        position: 'Frontend Developer',
        startDate: new Date(2021, 3),
        endDate: new Date(2023, 9),
        description: [
            'I contributed to the "Chance for Reentry" project, developing a mobile and kiosk application, along with several supporting tools, to support the reintegration of formerly incarcerated individuals. These applications are now deployed across all Slovak correctional facilities.',
        ],
        techStackFrontend: [
            { name: 'Flutter', component: 'TechIconFlutter' },
            { name: 'Vue', component: 'TechIconVue' },
            { name: 'Vuetify', component: 'TechIconVuetify' },
            { name: 'Sketch', component: 'TechIconSketch' },
        ],
        techStackDevOps: [{ name: 'Nginx', component: 'TechIconNginx' }],
    },
}
