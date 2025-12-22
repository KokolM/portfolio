import type { Project } from '~/models/project.models'

export const dataSharingPlatform: Project = {
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
}
