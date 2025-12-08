export interface Post {
  slug: string
  title: string
  description: string
  content: string
  date: string
  coverImage?: string
  author: Author
  tags: string[]
  categories: string[]
  readingTime: string
  published: boolean
  excerpt: string
}

export interface Author {
  name: string
  avatar?: string
  bio?: string
}

export interface Category {
  name: string
  slug: string
  description?: string
  count?: number
}

export interface Tag {
  name: string
  slug: string
  count?: number
}

export interface PostMetadata {
  title: string
  description: string
  date: string
  coverImage?: string
  author?: string
  tags?: string[]
  categories?: string[]
  published?: boolean
}

export interface Heading {
  id: string
  text: string
  level: 2 | 3 | 4
}

export interface SearchResult {
  item: Post
  score?: number
  matches?: Array<{
    indices: [number, number][]
    value?: string
    key?: string
  }>
}
