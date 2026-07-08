// src/data/skills.ts
export interface Skill {
  name: string
  level: number
  icon: string
  category: 'programming' | 'database' | 'ai-ml' | 'tools'
}

export const skills: Skill[] = [
  // Programming
  { name: 'Python', level: 90, icon: 'python', category: 'programming' },
  { name: 'JavaScript', level: 85, icon: 'javascript', category: 'programming' },
  { name: 'TypeScript', level: 80, icon: 'typescript', category: 'programming' },
  { name: 'HTML5', level: 75, icon: 'html5', category: 'programming' },
  { name: 'CSS3', level: 75, icon: 'css3', category: 'programming' },
  { name: 'C++', level: 70, icon: 'cpp', category: 'programming' },
  { name: 'C', level: 65, icon: 'c', category: 'programming' },
  { name: 'SQL', level: 70, icon: 'sql', category: 'programming' },
  { name: 'R', level: 60, icon: 'r', category: 'programming' },

  // Database
  { name: 'MySQL', level: 75, icon: 'mysql', category: 'database' },
  { name: 'PostgreSQL', level: 70, icon: 'postgresql', category: 'database' },
  { name: 'MongoDB', level: 65, icon: 'mongodb', category: 'database' },
  { name: 'Firebase', level: 60, icon: 'firebase', category: 'database' },
  { name: 'Supabase', level: 55, icon: 'supabase', category: 'database' },

  // AI/ML
  { name: 'Machine Learning', level: 85, icon: 'cpu', category: 'ai-ml' },
  { name: 'OpenCV', level: 75, icon: 'eye', category: 'ai-ml' },
  { name: 'NumPy', level: 80, icon: 'python', category: 'ai-ml' },
  { name: 'Pandas', level: 80, icon: 'table', category: 'ai-ml' },
  { name: 'PyTorch', level: 70, icon: 'brain', category: 'ai-ml' },
  { name: 'Keras', level: 65, icon: 'layers', category: 'ai-ml' },

  // Tools
  { name: 'Git', level: 90, icon: 'git', category: 'tools' },
  { name: 'GitHub', level: 95, icon: 'github', category: 'tools' },
  { name: 'VS Code', level: 95, icon: 'vscode', category: 'tools' },
  { name: 'Cursor', level: 80, icon: 'cursor', category: 'tools' },
  { name: 'Antigravity IDE', level: 50, icon: 'heart', category: 'tools' },
  { name: 'Google Cloud', level: 70, icon: 'cloud', category: 'tools' },
  { name: 'Jupyter', level: 75, icon: 'jupyter', category: 'tools' },
  { name: 'Ollama', level: 60, icon: 'cpu', category: 'tools' },
]

export type SkillCategory = Skill['category']

export const skillCategories: Record<SkillCategory, string> = {
  programming: 'Programming Languages',
  database: 'Databases',
  'ai-ml': 'AI/ML',
  tools: 'Tools & Technologies',
}
