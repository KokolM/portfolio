import type { Project } from '~/models/project.models'

export const heyme: Project = {
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
}
