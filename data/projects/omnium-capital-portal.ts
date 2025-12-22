import type { Project } from '~/models/project.models'

export const omniumCapitalPortal: Project = {
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
}
