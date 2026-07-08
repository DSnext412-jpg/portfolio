// src/data/projects.ts
export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
  date: string
}

export const projects: Project[] = []
