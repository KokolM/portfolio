import type { Project } from '~/models/project.models'

export const greencast: Project = {
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
}
