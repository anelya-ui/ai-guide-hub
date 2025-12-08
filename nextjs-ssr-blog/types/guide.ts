export type GuideCategory =
  | 'design-ai'
  | 'programming'
  | 'content'
  | 'data-analysis'
  | 'productivity'

export type GuideDifficulty = 'beginner' | 'intermediate' | 'advanced'

export type GuideTool =
  | 'ChatGPT'
  | 'Claude'
  | 'Figma'
  | 'Midjourney'
  | 'GitHub Copilot'
  | 'Other'

export interface Guide {
  id: string
  title: string
  description: string
  category: GuideCategory
  difficulty: GuideDifficulty
  readTime: number // в минутах
  tools: GuideTool[]
  author: {
    name: string
    avatar: string
  }
  publishedAt: string
  image: string
  slug: string
  views?: number
}

export interface GuideFilters {
  categories: GuideCategory[]
  difficulties: GuideDifficulty[]
  readTime: {
    min: number
    max: number | null
  } | null
  tools: GuideTool[]
}
