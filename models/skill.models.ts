export interface Skill {
    id: string
    name: string
    yearsOfExperience: number
    category: 'Frontend' | 'Backend' | 'DevOps' | 'Design' | 'Programming' | 'Other'
    component: string
}