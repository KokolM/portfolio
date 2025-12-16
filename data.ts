type ProjectStatus = 'development' | 'production' | 'discontinued'

export interface TechStack {
    name: string
    component?: string
}

export interface ProjectLink {
    text: string
    url?: string
    icon: string
    disabled?: boolean
}

export interface Project {
    id: string
    title: string
    subtitle: string
    description: string
    longDescription?: string
    features: string[]
    status: ProjectStatus
    layout: 'image-left' | 'image-right'
    image: string
    screenshots?: string[]
    techStack: TechStack[]
    links: ProjectLink[]
    contribution?: string
}

export const projectsData: Record<string, Project> = {
    holup: {
        id: 'holup',
        title: 'Holup',
        subtitle: 'Flutter app for reintegration of ex-prisoners',
        description: 'Flutter app for reintegration of ex-prisoners',
        longDescription: 'Holup is a cross-platform app (kiosks, iOS, Android) built for the Slovak government to help ex-prisoners reintegrate into society. It offers job search (Profesia.sk), CV creation, housing assistance, and practical guidance for life after release. It currently runs on kiosks in all Slovak prisons.',
        features: [
            'Job search & CV builder',
            'Emergency housing finder',
            'Step-by-step reentry guidance',
            'User-friendly & secure',
            'Runs on kiosks as Flutter Web App in all Slovak prisons',
            'Downloadable app for iOS and Android after release',
        ],
        status: 'production',
        layout: 'image-right',
        image: '/images/holup/holup-kiosk.webp',
        screenshots: [
            '/images/holup/holup-kiosk.webp',
            '/images/holup/holup-mobile.webp',
        ],
        techStack: [
            { name: 'Flutter', component: 'TechIconFlutter' },
            { name: 'Dart', component: 'TechIconDart' },
        ],
        links: [
            {
                text: 'Google Play',
                url: 'https://play.google.com/store/apps/details?id=sk.sancananavrat.holup',
                icon: 'devicon-google-plain',
            },
            {
                text: 'App Store',
                url: 'https://apps.apple.com/sk/app/holup/id6503700108',
                icon: 'devicon-apple-original',
            },
        ],
        contribution: 'Developed the Flutter app for kiosks, iOS, and Android. Integrated job and housing features, and focused on usability and security for a sensitive user base.',
    },
    'data-sharing-platform': {
        id: 'data-sharing-platform',
        title: 'Data Sharing Platform',
        subtitle: 'Decentralized platform for data sharing and governance',
        description: 'Decentralized platform for data sharing and governance',
        longDescription: 'A decentralized platform for secure data sharing and governance, developed for EU Horizon projects (Auroral, Spade, Circuless) at bAvenir s.r.o. The platform enables organizations to share data and manage identities across Europe, supporting innovative and sustainable data ecosystems.',
        features: [
            'Frontend for decentralized data tools',
            'Centralized backend for identity & relationships',
            'API & service development',
            'Secure, compliant data management',
            'Collaboration on EU Horizon projects',
            'Decentralized governance features',
        ],
        status: 'production',
        layout: 'image-left',
        image: '/images/spade/spade-1.webp',
        screenshots: [
            '/images/spade/spade-1.webp',
            '/images/spade/spade-2.webp',
        ],
        techStack: [
            { name: 'Vue', component: 'TechIconVue' },
            { name: 'TypeScript', component: 'TechIconTypescript' },
            { name: 'Tailwind', component: 'TechIconTailwind' },
            { name: 'Node', component: 'TechIconNode' },
            { name: 'Docker', component: 'TechIconDocker' },
        ],
        links: [
            {
                text: 'Live Demo',
                url: 'https://spade.example.com',
                icon: 'devicon-chrome-plain',
            },
            {
                text: 'GitHub',
                url: 'https://github.com/KokolM/spade',
                icon: 'devicon-github-original',
            },
        ],
        contribution: 'Full stack development: built user-facing components, managed backend for identities and relationships, and contributed to EU Horizon projects (Auroral, Spade, Circuless) to advance data sharing across Europe.',
    },
    'omnium-capital-portal': {
        id: 'omnium-capital-portal',
        title: 'Omnium Capital Portal',
        subtitle: 'Client Portal for Investment Company',
        description: 'Client Portal for Investment Company',
        longDescription: 'Engineered a secure, full-stack client portal for Omnium Capital, providing clients and staff with role-based access to investment data and tools. The platform integrates with upstream investment systems and automates data flows.',
        features: [
            'Django REST API with data sync & transformation',
            'Role-based access for clients, staff, brokers, admins',
            'Responsive Vue.js + PrimeVue frontend',
            'Secure authentication & authorization',
            'VM-based deployment with Nginx & HTTPS',
            'Scalable, robust system architecture',
        ],
        status: 'production',
        layout: 'image-right',
        image: '/images/omnium/omnium-combined.webp',
        screenshots: [
            '/images/omnium/omnium-desktop.webp',
            '/images/omnium/omnium-mobile.webp',
        ],
        techStack: [
            { name: 'Vue', component: 'TechIconVue' },
            { name: 'TypeScript', component: 'TechIconTypescript' },
            { name: 'PrimeFaces', component: 'TechIconPrimeFaces' },
            { name: 'Node', component: 'TechIconNode' },
            { name: 'Docker', component: 'TechIconDocker' },
            { name: 'Nginx', component: 'TechIconNginx' },
            { name: 'PostgreSQL', component: 'TechIconPostgres' },
        ],
        links: [
            {
                text: 'Private Project',
                icon: '',
                disabled: true,
            },
        ],
        contribution: 'Built the backend (Django REST), designed RBAC, developed the Vue.js frontend, and handled deployment and system architecture.',
    },
    greencast: {
        id: 'greencast',
        title: 'GreenCast',
        subtitle: 'Management portal for energy communities',
        description: 'Management portal for energy communities',
        longDescription: 'A client-server Nuxt application that integrates with Slovakia\'s Energetic Data Center (EDC) to provide simplified access and role management for renewable energy source owners. The dashboard enables solar panel owners to organize into energy communities and manage their renewable energy assets.',
        features: [
            'Integration with Slovakia EDC',
            'User role & access management',
            'Energy community management',
            'Dashboard with analytics',
            'Billing & consumption tracking',
            'Simplified EDC interface layer',
            'Client-server Nuxt architecture',
        ],
        status: 'production',
        layout: 'image-left',
        image: '/images/greencast/greencast-combined.webp',
        screenshots: [
            '/images/greencast/greencast-desktop.webp',
            '/images/greencast/greencast-mobile.webp',
        ],
        techStack: [
            { name: 'Vue', component: 'TechIconVue' },
            { name: 'Nuxt', component: 'TechIconNuxt' },
            { name: 'TypeScript', component: 'TechIconTypescript' },
            { name: 'Tailwind', component: 'TechIconTailwind' },
            { name: 'Node', component: 'TechIconNode' },
            { name: 'Docker', component: 'TechIconDocker' },
        ],
        links: [
            {
                text: 'Private Project',
                icon: '',
                disabled: true,
            },
        ],
        contribution: 'Developed the full Nuxt application, integrated with EDC APIs, implemented role management system, and created user-friendly interface for energy community management.',
    },
    heyme: {
        id: 'heyme',
        title: 'Heyme',
        subtitle: 'Task and collaboration software platform',
        description: 'Task and collaboration software platform',
        longDescription: 'A task and collaboration software platform similar to Notion, designed to streamline team productivity and project management. The platform provides intuitive tools for task organization, team collaboration, and project tracking.',
        features: [
            'Task management & organization',
            'Team collaboration tools',
            'Project tracking & monitoring',
            'RESTful API architecture',
            'Real-time data synchronization',
            'Scalable backend infrastructure',
        ],
        status: 'development',
        layout: 'image-right',
        image: '/images/heyme/heyme-combined.webp',
        screenshots: [
            '/images/heyme/heyme-desktop.webp',
            '/images/heyme/heyme-mobile.webp',
        ],
        techStack: [
            { name: 'Node', component: 'TechIconNode' },
            { name: 'TypeScript', component: 'TechIconTypescript' },
            { name: 'PostgreSQL', component: 'TechIconPostgres' },
            { name: 'Docker', component: 'TechIconDocker' },
            { name: 'Nginx', component: 'TechIconNginx' },
        ],
        links: [
            {
                text: 'Private Project',
                icon: '',
                disabled: true,
            },
        ],
        contribution: 'Developed the complete backend architecture and RESTful API, ensuring robust data management, real-time synchronization, and scalable infrastructure to support the collaboration platform.',
    },
}