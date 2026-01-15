export interface TechStack {
    name: string
    component: string
}

export interface Experience {
    id: string
    company: string
    position: string
    startDate: Date
    endDate?: Date
    website?: string
    about: string
    description: string[]
    techStackFrontend?: TechStack[]
    techStackBackend?: TechStack[]
    techStackDevOps?: TechStack[]
}