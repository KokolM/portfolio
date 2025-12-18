export interface Skill {
    id: string
    name: string
    yearsOfExperience: number
    category: 'Frontend' | 'Backend' | 'DevOps' | 'Design' | 'Other'
    component: string
}