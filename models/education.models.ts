export interface Education {
    id: string
    institution: string
    degree: string
    field: string
    location: string
    startDate: Date
    endDate: Date
    description: string[]
    thesis?: string
}