export type ProjectStatus = 'Development' | 'Production' | 'Discontinued'

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
    activeUsers?: number
}