import type { Project } from '~/models/project.models'

// Lightweight project metadata for homepage (without heavy data)
export const projectsMeta = {
    holup: {
        id: 'holup',
        title: 'Holup',
        description: 'Flutter app for reintegration of ex-prisoners',
        status: 'Production' as const,
        layout: 'image-right' as const,
        image: '/images/holup/holup-kiosk.webp',
        features: [
            'Job search & CV builder',
            'Emergency housing finder',
            'Step-by-step reentry guidance',
        ],
    },
    'data-sharing-platform': {
        id: 'data-sharing-platform',
        title: 'Data Sharing Platform',
        description: 'Decentralized platform for data sharing and governance',
        status: 'Production' as const,
        layout: 'image-left' as const,
        image: '/images/spade/spade-1.webp',
        features: [
            'Frontend for decentralized data tools',
            'Centralized backend for identity & relationships',
            'API & service development',
        ],
    },
    'omnium-capital-portal': {
        id: 'omnium-capital-portal',
        title: 'Omnium Capital Portal',
        description: 'Client Portal for Investment Company',
        status: 'Production' as const,
        layout: 'image-right' as const,
        image: '/images/omnium/omnium-combined.webp',
        features: [
            'Django REST API with data sync & transformation',
            'Role-based access for clients, staff, brokers, admins',
            'Responsive Vue.js + PrimeVue frontend',
        ],
    },
    greencast: {
        id: 'greencast',
        title: 'GreenCast',
        description: 'Management portal for energy communities',
        status: 'Production' as const,
        layout: 'image-left' as const,
        image: '/images/greencast/greencast-combined.webp',
        features: [
            'Integration with Slovakia EDC',
            'User role & access management',
            'Energy community management',
        ],
    },
    heyme: {
        id: 'heyme',
        title: 'Heyme',
        description: 'Task and collaboration software platform',
        status: 'Development' as const,
        layout: 'image-right' as const,
        image: '/images/heyme/heyme-combined.webp',
        features: [
            'Task management & organization',
            'Team collaboration tools',
            'Project tracking & monitoring',
        ],
    },
}

// Function to dynamically load full project data
export async function getProject(id: string): Promise<Project | null> {
    try {
        const module = await import(`./${id}.ts`)
        const firstKey = Object.keys(module)[0]
        return firstKey ? module[firstKey] : null
    } catch (error) {
        console.error(`Failed to load project: ${id}`, error)
        return null
    }
}
