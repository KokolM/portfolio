import type { Project } from './models/project.models'
import type { Experience } from './models/experience.models'
import type { Education } from './models/education.models'
import type { Skill } from './models/skill.models'

export const personalData = {
    name: 'Matej',
    surname: 'Kokol',
    email: 'kokol.matej0@gmail.com',
    phone: '(+421) 948 432 249',
    location: 'Slovakia',
    linkedin: 'linkedin.com/in/matej-kokol',
    github: 'github.com/KokolM',
}

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

export const projectsData: Record<string, Project> = {
    holup: {
        id: 'holup',
        title: 'Holup',
        subtitle: 'Flutter app for reintegration of ex-prisoners',
        description: 'Flutter app for reintegration of ex-prisoners',
        longDescription:
            'Holup is a cross-platform app (kiosks, iOS, Android) built for the Slovak government to help ex-prisoners reintegrate into society. It offers job search (Profesia.sk), CV creation, housing assistance, and practical guidance for life after release. It currently runs on kiosks in all Slovak prisons.',
        features: [
            'Job search & CV builder',
            'Emergency housing finder',
            'Step-by-step reentry guidance',
            'User-friendly & secure',
            'Runs on kiosks as Flutter Web App in all Slovak prisons',
            'Downloadable app for iOS and Android after release',
        ],
        status: 'Production',
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
        contribution:
            'Developed the Flutter app for kiosks, iOS, and Android. Integrated job and housing features, and focused on usability and security for a sensitive user base.',
    },
    'data-sharing-platform': {
        id: 'data-sharing-platform',
        title: 'Data Sharing Platform',
        subtitle: 'Decentralized platform for data sharing and governance',
        description: 'Decentralized platform for data sharing and governance',
        longDescription:
            'A decentralized platform for secure data sharing and governance, developed for EU Horizon projects (Auroral, Spade, Circuless) at bAvenir s.r.o. The platform enables organizations to share data and manage identities across Europe, supporting innovative and sustainable data ecosystems.',
        features: [
            'Frontend for decentralized data tools',
            'Centralized backend for identity & relationships',
            'API & service development',
            'Secure, compliant data management',
            'Collaboration on EU Horizon projects',
            'Decentralized governance features',
        ],
        status: 'Production',
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
        contribution:
            'Full stack development: built user-facing components, managed backend for identities and relationships, and contributed to EU Horizon projects (Auroral, Spade, Circuless) to advance data sharing across Europe.',
    },
    'omnium-capital-portal': {
        id: 'omnium-capital-portal',
        title: 'Omnium Capital Portal',
        subtitle: 'Client Portal for Investment Company',
        description: 'Client Portal for Investment Company',
        longDescription:
            'Engineered a secure, full-stack client portal for Omnium Capital, providing clients and staff with role-based access to investment data and tools. The platform integrates with upstream investment systems and automates data flows.',
        features: [
            'Django REST API with data sync & transformation',
            'Role-based access for clients, staff, brokers, admins',
            'Responsive Vue.js + PrimeVue frontend',
            'Secure authentication & authorization',
            'VM-based deployment with Nginx & HTTPS',
            'Scalable, robust system architecture',
        ],
        status: 'Production',
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
        contribution:
            'Built the backend (Django REST), designed RBAC, developed the Vue.js frontend, and handled deployment and system architecture.',
    },
    greencast: {
        id: 'greencast',
        title: 'GreenCast',
        subtitle: 'Management portal for energy communities',
        description: 'Management portal for energy communities',
        longDescription:
            "A client-server Nuxt application that integrates with Slovakia's Energetic Data Center (EDC) to provide simplified access and role management for renewable energy source owners. The dashboard enables solar panel owners to organize into energy communities and manage their renewable energy assets.",
        features: [
            'Integration with Slovakia EDC',
            'User role & access management',
            'Energy community management',
            'Dashboard with analytics',
            'Billing & consumption tracking',
            'Simplified EDC interface layer',
            'Client-server Nuxt architecture',
        ],
        status: 'Production',
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
        contribution:
            'Developed the full Nuxt application, integrated with EDC APIs, implemented role management system, and created user-friendly interface for energy community management.',
    },
    heyme: {
        id: 'heyme',
        title: 'Heyme',
        subtitle: 'Task and collaboration software platform',
        description: 'Task and collaboration software platform',
        longDescription:
            'A task and collaboration software platform similar to Notion, designed to streamline team productivity and project management. The platform provides intuitive tools for task organization, team collaboration, and project tracking.',
        features: [
            'Task management & organization',
            'Team collaboration tools',
            'Project tracking & monitoring',
            'RESTful API architecture',
            'Real-time data synchronization',
            'Scalable backend infrastructure',
        ],
        status: 'Development',
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
        contribution:
            'Developed the complete backend architecture and RESTful API, ensuring robust data management, real-time synchronization, and scalable infrastructure to support the collaboration platform.',
    },
}

export const educationData: Record<string, Education> = {
    stu: {
        id: 'stu',
        institution: 'Slovak University of Technology in Bratislava',
        degree: "Bachelor's Degree",
        field: 'Internet Technologies',
        location: 'Bratislava, Slovakia',
        startDate: new Date(2015, 8),
        endDate: new Date(2019, 5),
        description: [
            'Studied at the Faculty of Informatics and Information Technologies (FIIT), focusing on modern web technologies, software engineering, and mobile application development.',
            'Gained expertise in full-stack development, database systems, and user interface design, which laid the foundation for my professional career as a software developer.',
        ],
        thesis:
            'Mobile Application for Prisoners - Developed a Flutter-based mobile application designed to support the reintegration of prisoners into society. This project evolved into the Holup app, which is now deployed across all Slovak correctional facilities.',
    },
}

export const skillsData: Record<string, Skill> = {
    nuxt: {
        id: 'nuxt',
        name: 'Nuxt',
        yearsOfExperience: 2,
        category: 'Frontend',
        component: 'TechIconNuxt',
    },
    angular: {
        id: 'angular',
        name: 'Angular',
        yearsOfExperience: 4,
        category: 'Frontend',
        component: 'TechIconAngular',
    },
    primefaces: {
        id: 'primefaces',
        name: 'PrimeFaces',
        yearsOfExperience: 4,
        category: 'Frontend',
        component: 'TechIconPrimeFaces',
    },
    tailwind: {
        id: 'tailwind',
        name: 'Tailwind',
        yearsOfExperience: 4,
        category: 'Frontend',
        component: 'TechIconTailwind',
    },
    vue: {
        id: 'vue',
        name: 'Vue',
        yearsOfExperience: 4,
        category: 'Frontend',
        component: 'TechIconVue',
    },
    vuetify: {
        id: 'vuetify',
        name: 'Vuetify',
        yearsOfExperience: 2,
        category: 'Frontend',
        component: 'TechIconVuetify',
    },
    flutter: {
        id: 'flutter',
        name: 'Flutter',
        yearsOfExperience: 4,
        category: 'Frontend',
        component: 'TechIconFlutter',
    },
    typescript: {
        id: 'typescript',
        name: 'TypeScript',
        yearsOfExperience: 4,
        category: 'Backend',
        component: 'TechIconTypescript',
    },
    node: {
        id: 'node',
        name: 'Node',
        yearsOfExperience: 4,
        category: 'Backend',
        component: 'TechIconNode',
    },
    postgres: {
        id: 'postgres',
        name: 'PostgreSQL',
        yearsOfExperience: 4,
        category: 'Backend',
        component: 'TechIconPostgres',
    },
    prisma: {
        id: 'prisma',
        name: 'Prisma',
        yearsOfExperience: 2,
        category: 'Backend',
        component: 'TechIconPrisma',
    },
    docker: {
        id: 'docker',
        name: 'Docker',
        yearsOfExperience: 4,
        category: 'DevOps',
        component: 'TechIconDocker',
    },
    traefik: {
        id: 'traefik',
        name: 'Traefik',
        yearsOfExperience: 2,
        category: 'DevOps',
        component: 'TechIconTraefik',
    },
    nginx: {
        id: 'nginx',
        name: 'Nginx',
        yearsOfExperience: 4,
        category: 'DevOps',
        component: 'TechIconNginx',
    },
    figma: {
        id: 'figma',
        name: 'Figma',
        yearsOfExperience: 2,
        category: 'Design',
        component: 'TechIconFigma',
    },
    sketch: {
        id: 'sketch',
        name: 'Sketch',
        yearsOfExperience: 3,
        category: 'Design',
        component: 'TechIconSketch',
    },
    dart: {
        id: 'dart',
        name: 'Dart',
        yearsOfExperience: 4,
        category: 'Backend',
        component: 'TechIconDart',
    },
}
