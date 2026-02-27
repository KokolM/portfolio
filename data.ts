import type { Project } from './models/project.models'
import type { Experience } from './models/experience.models'
import type { Education } from './models/education.models'
import type { Skill } from './models/skill.models'

export const personalData = {
    name: 'Matej',
    surname: 'Kokol',
    email: 'kokol.matej0@gmail.com',
    phone: '(+48) 575 357 810',
    location: 'Warsaw, Poland',
    linkedin: 'linkedin.com/in/matej-kokol',
    github: undefined, //'github.com/KokolM',
    website: 'matejkokol.eu',
    contract: 'B2B preferred (JDG)',
    nip: '7011294635',
    regon: '543722483',
    jobSeeking: {
        active: true,
        location: 'Warsaw, Poland',
        message: 'Currently seeking full-time opportunities',
    },
    aboutMe:
        'After graduating from <strong>Slovak Technical University</strong>, I began my career developing a <strong>Flutter app</strong> for a Slovak government project that supported the reintegration of ex-prisoners into society. Since then, I’ve expanded into full-stack web development, creating <strong>fintech, SaaS and EU Horizon R&D applications</strong> that people rely on every day, using <strong>Angular, Vue, Nuxt, and ExpressJS</strong> to turn ideas into reliable, scalable systems.',
}

export const experienceData: Record<string, Experience> = {
    freelance: {
        id: 'freelance',
        company: 'Freelance',
        position: 'Fullstack Developer',
        startDate: new Date(2023, 5),
        about: 'Independent software development services for clients in various industries, delivering tailored web and mobile applications to meet specific business needs.',
        description: [
            'Delivered custom <strong>full-stack solutions</strong> for clients in <strong>Fintech and SaaS</strong>, including a secure investment portal for <strong>Omnium Capital</strong> and collaboration tools for <strong>Heyme</strong>.',
            'Built production-ready applications using <strong>Vue / Nuxt</strong> frontends and <strong>ExpressJS / Django Rest Framework</strong> backends with relational <strong>PostgreSQL</strong> databases and <strong>Prisma ORM</strong>.',
            'Integrated external systems including <strong>SOAP investment services</strong> and <strong>LiveKit</strong> (real-time video), designing APIs to synchronize and transform data.',
            'Independently managed projects end-to-end — from architecture and implementation to <strong>deployment and maintenance</strong> using <strong>Docker</strong> and <strong>Traefik</strong> in production environments.',
        ],
    },
    bavenir: {
        id: 'bavenir',
        company: 'bAvenir s.r.o.',
        position: 'Fullstack Developer',
        website: 'https://bavenir.eu/',
        startDate: new Date(2022, 9),
        endDate: new Date(2025, 11),
        about: 'bAvenir is a tech company that delivers innovative software solutions through cutting-edge research, expert development, and strategic collaboration with forward-thinking organizations.',
        description: [
            'Contributed to core web applications for <strong>EU Horizon projects</strong> (Auroral, Spade), building <strong>Angular</strong> and <strong>Nuxt</strong> applications enabling secure data sharing between European organizations.',
            'Implemented a <strong>BFF (Backend-for-Frontend)</strong> architecture with <strong>Keycloak</strong> to strengthen authentication security and protect user tokens.',
            'Built and maintained <strong>REST APIs</strong> using <strong>ExpressJS, PostgreSQL</strong> and <strong>Prisma ORM</strong> for data-intensive platforms and internal tools.',
            'Supported production deployments with <strong>Docker</strong> and <strong>Traefik</strong>, and improved performance through targeted refactoring and database optimization.',
        ],
    },
    zvjs: {
        id: 'zvjs',
        company: 'ZVJS - Chance for Reentry',
        position: 'Frontend Developer',
        website: 'https://www.sancananavrat.sk/',
        startDate: new Date(2020, 0),
        endDate: new Date(2022, 9),
        about: 'The "Chance for Reentry" project by ZVJS aims to support the reintegration of formerly incarcerated individuals through a comprehensive reentry program. Project was co-funded by the EU, Slovak Office of Labour, Social Affairs and Family and the Slovak Ministry of Justice.',
        description: [
            'Engineered a <strong>Flutter-based application</strong> for mobile and prison kiosks to support the reintegration of formerly incarcerated individuals.',
            'Scaled the project from a Bachelor’s thesis to a <strong>national production system (Holup)</strong> deployed in <strong>all Slovak correctional facilities</strong>.',
            'Built and maintained the cross-platform frontend using <strong>Flutter</strong>, optimizing performance for constrained kiosk hardware and mobile devices.',
            'Worked directly with government stakeholders and end users in a <strong>regulated environment</strong>, ensuring accessibility, data privacy compliance, and real-world usability.',
        ],
    },
}

export const projectsData: Record<string, Project> = {
    holup: {
        id: 'holup',
        title: 'Holup',
        subtitle: 'Kiosk and mobile application deployed in all Slovak prisons',
        activeUsers: 300,
        description:
            'Government-deployed Flutter application supporting prisoner reintegration at national scale.',
        longDescription:
            'Holup is a cross-platform application (Flutter Web for kiosks, iOS, Android) developed for the Slovak government to support the reintegration of incarcerated individuals into society. Originally started as a Bachelor’s thesis, the project evolved into a nationally deployed production application running in all Slovak correctional facilities. The application provides employment search integration (Profesia.sk), CV creation, housing assistance, and structured step-by-step guidance for life after release, with a strong focus on user experience.',
        features: [
            'Integrated job search (Profesia.sk) and built-in CV generator',
            'Housing assistance and emergency contact directory',
            'Structured reentry guidance with accessibility-first UX',
            'Deployed as Flutter Web on secure prison kiosks',
            'Available on iOS and Android for continued use after release',
        ],
        status: 'Production',
        layout: 'image-right',
        image: '/images/holup/holup-combined.webp',
        screenshots: [
            '/images/holup/holup-combined.webp',
            '/images/holup/holup-mobile.webp',
            '/images/holup/holup-in-action-1.webp',
            '/images/holup/holup-in-action-2.webp',
            '/images/holup/holup-in-action-3.webp',
        ],
        techStack: [
            { name: 'Flutter', component: 'TechIconFlutter' },
            { name: 'Dart', component: 'TechIconDart' },
            { name: 'Nginx', component: 'TechIconNginx' },
        ],
        links: [
            {
                text: 'About the App',
                url: 'https://www.sancananavrat.sk/realizacia/holup',
                icon: 'devicon-chrome-plain',
                divider: true,
            },
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
            {
                text: 'Private GitHub',
                url: '',
                icon: 'devicon-github-plain',
                disabled: true,
            },
        ],
        contribution:
            'Designed and developed the application from scratch across kiosks, iOS, and Android. Led the technical implementation, optimized performance for constrained kiosk environments, and ensured compliance with government data privacy requirements while maintaining a highly accessible user experience.',
    },
    'omnium-capital-portal': {
        id: 'omnium-capital-portal',
        title: 'Omnium Capital Portal',
        subtitle: 'Client Portal for Investment Company',
        activeUsers: 200,
        description:
            'Secure client portal providing role-based access to investment data and tools.',
        longDescription:
            'Developed a full-stack client portal for Omnium Capital, allowing clients and staff to access investment data securely with role-based permissions. Integrated with the upstream SOAP investment system to automate data flows. Built a responsive Vue.js frontend for an intuitive user experience and a Django REST backend for reliable data management. Deployed behind Nginx with HTTPS for security and stability.',
        features: [
            'Django REST API with data synchronization and transformation',
            'Role-based access for clients, staff, brokers, and admins',
            'Responsive Vue.js + PrimeVue frontend',
            'Secure authentication and authorization',
            'Robust and maintainable system architecture',
        ],
        status: 'Production',
        layout: 'image-left',
        image: '/images/omnium/omnium-combined.webp',
        screenshots: [
            '/images/omnium/omnium-desktop.webp',
            '/images/omnium/omnium-mobile.webp',
        ],
        techStack: [
            { name: 'Vue', component: 'TechIconVue' },
            { name: 'TypeScript', component: 'TechIconTypescript' },
            { name: 'PrimeVue', component: 'TechIconPrimeFaces' },
            { name: 'Django REST Framework', component: 'TechIconDrf' },
            { name: 'PostgreSQL', component: 'TechIconPostgres' },
            { name: 'Python', component: 'TechIconPython' },
            { name: 'Nginx', component: 'TechIconNginx' },
        ],
        links: [
            {
                text: 'Live Demo',
                url: 'https://portal.omniumcapital.sk/',
                icon: 'devicon-chrome-plain',
            },
            {
                text: 'Private GitHub',
                url: '',
                icon: 'devicon-github-plain',
                disabled: true,
            },
        ],
        contribution:
            'Implemented the full-stack solution: built the Django REST backend with RBAC, developed the responsive Vue.js frontend, and managed deployment and system reliability.',
    },
    'data-sharing-platform': {
        id: 'data-sharing-platform',
        title: 'Data Sharing Platform',
        subtitle: 'Decentralized platform for secure data sharing',
        activeUsers: 50,
        description:
            'Decentralized platform enabling organizations to share data and manage identities across Europe.',
        longDescription:
            'Developed for EU Horizon projects (Auroral, Spade, Circuless) at bAvenir s.r.o., this platform allows organizations to securely share data and manage identities using open source technologies. It supports collaboration and governance across Europe while ensuring compliance and data protection.',
        features: [
            'Frontend and backend managing identities and relationships',
            'Analytics dashboard for data sharing insights',
            'Secure and compliant data handling',
            'Support for EU Horizon collaborative projects',
            'Enabeling decentralized governance of data',
        ],
        status: 'Production',
        layout: 'image-right',
        image: '/images/spade/spade-1.webp',
        screenshots: [
            '/images/spade/spade-1.webp',
            '/images/spade/spade-2.webp',
        ],
        techStack: [
            { name: 'Angular', component: 'TechIconAngular' },
            { name: 'Tailwind', component: 'TechIconTailwind' },
            { name: 'PrimeFaces', component: 'TechIconPrimeFaces' },
            { name: 'Express', component: 'TechIconExpress' },
            { name: 'Prisma', component: 'TechIconPrisma' },
            { name: 'Postgres', component: 'TechIconPostgres' },
            { name: 'Keycloak', component: 'TechIconKeycloak' },
            { name: 'TypeScript', component: 'TechIconTypescript' },
            { name: 'Docker', component: 'TechIconDocker' },
            { name: 'Traefik', component: 'TechIconTraefik' },
        ],
        links: [
            {
                text: 'Live Demo',
                url: 'https://spade.bavenir.eu/',
                icon: 'devicon-chrome-plain',
            },
            {
                text: 'GitLab',
                url: 'https://gitlab.eclipse.org/eclipse-research-labs/spade-project',
                icon: 'devicon-gitlab-plain',
            },
        ],
        contribution:
            'Contributed as a full-stack developer: built frontend components, managed backend for identities and relationships, integrated APIs, and supported EU Horizon projects to improve secure data sharing across Europe.',
    },
    heyme: {
        id: 'heyme',
        title: 'Heyme',
        subtitle: 'Task and collaboration software platform',
        activeUsers: 30,
        description:
            'Platform for team task management, collaboration, and project tracking.',
        longDescription:
            'Built a backend for task and collaboration platform similar to Notion to help teams organize tasks, track projects, and collaborate efficiently. Integrated LiveKit for online videoconferencing and real-time data synchronization. Developed a scalable backend with Node.js, Express, and PostgreSQL, ensuring robust data handling and multi-user support.',
        features: [
            'Task management and organization',
            'Team collaboration tools',
            'Project tracking and monitoring',
            'RESTful API backend',
            'Real-time data synchronization across users',
            'Scalable backend infrastructure',
            'Integration with LiveKit for video calls',
        ],
        status: 'Development',
        layout: 'image-left',
        image: '/images/heyme/heyme-combined.webp',
        screenshots: [
            '/images/heyme/heyme-desktop.webp',
            '/images/heyme/heyme-mobile.webp',
        ],
        techStack: [
            { name: 'Express', component: 'TechIconExpress' },
            { name: 'Prisma', component: 'TechIconPrisma' },
            { name: 'PostgreSQL', component: 'TechIconPostgres' },
            { name: 'Keycloak', component: 'TechIconKeycloak' },
            { name: 'TypeScript', component: 'TechIconTypescript' },
            { name: 'Docker', component: 'TechIconDocker' },
            { name: 'Traefik', component: 'TechIconTraefik' },
        ],
        links: [
            {
                text: 'Live Demo',
                url: 'https://my.heyme.uk/',
                icon: 'devicon-chrome-plain',
            },
            {
                text: 'Private GitHub',
                url: '',
                icon: 'devicon-github-plain',
                disabled: true,
            },
        ],
        contribution:
            'Implemented the backend architecture and RESTful API, enabling real-time synchronization, robust data management, and scalable infrastructure for multi-user collaboration.',
    },
    greencast: {
        id: 'greencast',
        title: 'GreenCast',
        subtitle: 'Management portal for energy communities',
        activeUsers: 20,
        description:
            'Client-server portal for managing renewable energy communities and assets.',
        longDescription:
            "Developed a Nuxt-based client-server application integrating with Slovakia's Energetic Data Center (EDC) to simplify access and role management for renewable energy owners. The dashboard allows solar panel owners to create energy communities, manage assets, track consumption, and handle billing. Features analytics and a user-friendly interface for streamlined energy management.",
        features: [
            'Integration with Slovakia EDC APIs',
            'User role and access management',
            'Energy community creation and management',
            'Dashboard with analytics',
            'Billing and consumption tracking',
            'Simplified interface layer for EDC data',
            'Client-server architecture with Nuxt',
        ],
        status: 'Production',
        layout: 'image-right',
        image: '/images/greencast/greencast-combined.webp',
        screenshots: [
            '/images/greencast/greencast-desktop.webp',
            '/images/greencast/greencast-mobile.webp',
            '/images/greencast/greencast-landing.webp',
        ],
        techStack: [
            { name: 'Nuxt', component: 'TechIconNuxt' },
            { name: 'Tailwind', component: 'TechIconTailwind' },
            { name: 'PrimeVue', component: 'TechIconPrimeFaces' },
            { name: 'Prisma', component: 'TechIconPrisma' },
            { name: 'PostgreSQL', component: 'TechIconPostgres' },
            { name: 'Keycloak', component: 'TechIconKeycloak' },
            { name: 'TypeScript', component: 'TechIconTypescript' },
            { name: 'Docker', component: 'TechIconDocker' },
            { name: 'Traefik', component: 'TechIconTraefik' },
        ],
        links: [
            {
                text: 'Live Demo',
                url: 'https://greencast.keks.energy/',
                icon: 'devicon-chrome-plain',
            },
            {
                text: 'Private GitHub',
                url: '',
                icon: 'devicon-github-plain',
                disabled: true,
            },
        ],
        contribution:
            'Built the full Nuxt application: integrated EDC APIs, implemented role management, and developed a user-friendly dashboard for managing renewable energy communities and assets.',
    },
    wic: {
        id: 'wic',
        title: 'Wic',
        subtitle: 'Multi-brand luxury jewelry investment platform',
        description:
            'Multi-tenant platform for luxury jewelry brands with investment-based purchasing.',
        longDescription:
            'Developed a multi-tenant platform where customers can invest toward catalog items or custom commissions, which are produced and delivered once fully funded. The platform includes an admin CMS for brand and order management, as well as a broker portal for client strategy and status tracking. Built with Nuxt (frontend + backend) and Keycloak for authentication and multi-realm support.',
        features: [
            'Multi-tenant architecture for multiple brands',
            'Catalog and custom commission ordering',
            'Investment tracking until fully funded',
            'Admin CMS for brands, catalog, orders, and users',
            'Broker portal for client management and status tracking',
        ],
        status: 'Discontinued',
        layout: 'image-left',
        image: '/images/wic/wic-combined.webp',
        screenshots: [
            '/images/wic/wic-desktop-1.webp',
            '/images/wic/wic-desktop-2.webp',
            '/images/wic/wic-desktop-3.webp',
            '/images/wic/wic-desktop-4.webp',
            '/images/wic/wic-mobile.webp',
        ],
        techStack: [
            { name: 'Nuxt', component: 'TechIconNuxt' },
            { name: 'Tailwind', component: 'TechIconTailwind' },
            { name: 'PrimeVue', component: 'TechIconPrimeFaces' },
            { name: 'Prisma', component: 'TechIconPrisma' },
            { name: 'PostgreSQL', component: 'TechIconPostgres' },
            { name: 'Keycloak', component: 'TechIconKeycloak' },
            { name: 'TypeScript', component: 'TechIconTypescript' },
            { name: 'Docker', component: 'TechIconDocker' },
            { name: 'Traefik', component: 'TechIconTraefik' },
        ],
        links: [
            {
                text: 'Live Demo',
                url: 'https://app.wic.dev.matejkokol.eu/lujery/',
                icon: 'devicon-chrome-plain',
            },
            {
                text: 'Private GitHub',
                url: '',
                icon: 'devicon-github-plain',
                disabled: true,
            },
        ],
        contribution:
            'Implemented the platform end-to-end: multi-tenant setup, Keycloak realms, admin CMS, and broker/client flows using Nuxt and TypeScript.',
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
        thesis: 'Mobile Application for Prisoners - Developed a Flutter-based mobile application designed to support the reintegration of prisoners into society. This project evolved into the Holup app, which is now deployed across all Slovak correctional facilities.',
    },
}

export const skillsData: Record<string, Skill> = {
    nuxtFE: {
        id: 'nuxt',
        name: 'Nuxt',
        yearsOfExperience: 3,
        category: 'Frontend',
        component: 'TechIconNuxt',
    },
    nuxtBE: {
        id: 'nuxt',
        name: 'Nuxt',
        yearsOfExperience: 3,
        category: 'Backend',
        component: 'TechIconNuxt',
    },
    angular: {
        id: 'angular',
        name: 'Angular',
        yearsOfExperience: 3,
        category: 'Frontend',
        component: 'TechIconAngular',
    },
    primefaces: {
        id: 'primefaces',
        name: 'PrimeFaces',
        yearsOfExperience: 5,
        category: 'Frontend',
        component: 'TechIconPrimeFaces',
    },
    tailwind: {
        id: 'tailwind',
        name: 'Tailwind',
        yearsOfExperience: 3,
        category: 'Frontend',
        component: 'TechIconTailwind',
    },
    vue: {
        id: 'vue',
        name: 'Vue',
        yearsOfExperience: 5,
        category: 'Frontend',
        component: 'TechIconVue',
    },
    flutter: {
        id: 'flutter',
        name: 'Flutter',
        yearsOfExperience: 2,
        category: 'Frontend',
        component: 'TechIconFlutter',
    },
    typescript: {
        id: 'typescript',
        name: 'TypeScript',
        yearsOfExperience: 5,
        category: 'Programming',
        component: 'TechIconTypescript',
    },
    python: {
        id: 'python',
        name: 'Python',
        yearsOfExperience: 3,
        category: 'Programming',
        component: 'TechIconPython',
    },
    c: {
        id: 'c',
        name: 'C',
        yearsOfExperience: 4,
        category: 'Programming',
        component: 'TechIconC',
    },
    express: {
        id: 'express',
        name: 'Express',
        yearsOfExperience: 3,
        category: 'Backend',
        component: 'TechIconExpress',
    },
    keycloak: {
        id: 'keycloak',
        name: 'Keycloak',
        yearsOfExperience: 3,
        category: 'Backend',
        component: 'TechIconKeycloak',
    },
    drf: {
        id: 'drf',
        name: 'DRF',
        yearsOfExperience: 2,
        category: 'Backend',
        component: 'TechIconDrf',
    },
    postgres: {
        id: 'postgres',
        name: 'PostgreSQL',
        yearsOfExperience: 3,
        category: 'Backend',
        component: 'TechIconPostgres',
    },
    prisma: {
        id: 'prisma',
        name: 'Prisma',
        yearsOfExperience: 3,
        category: 'Backend',
        component: 'TechIconPrisma',
    },
    docker: {
        id: 'docker',
        name: 'Docker',
        yearsOfExperience: 3,
        category: 'DevOps',
        component: 'TechIconDocker',
    },
    traefik: {
        id: 'traefik',
        name: 'Traefik',
        yearsOfExperience: 3,
        category: 'DevOps',
        component: 'TechIconTraefik',
    },
    nginx: {
        id: 'nginx',
        name: 'Nginx',
        yearsOfExperience: 5,
        category: 'DevOps',
        component: 'TechIconNginx',
    },
    dart: {
        id: 'dart',
        name: 'Dart',
        yearsOfExperience: 2,
        category: 'Programming',
        component: 'TechIconDart',
    },
}
