import { mockGuides } from './guides-data'
import { Guide } from '@/types/guide'

/**
 * Get all guides
 * Currently returns mock data, can be extended to read from MDX files
 */
export async function getAllGuides(): Promise<(Guide & { date: string })[]> {
  // Transform mockGuides to include date property for sitemap compatibility
  return mockGuides.map(guide => ({
    ...guide,
    date: guide.publishedAt
  }))
}

/**
 * Get a single guide by slug
 */
export async function getGuideBySlug(slug: string): Promise<Guide | null> {
  const guide = mockGuides.find(g => g.slug === slug)
  return guide || null
}

/**
 * Get guides by category
 */
export async function getGuidesByCategory(category: string): Promise<Guide[]> {
  return mockGuides.filter(guide => guide.category === category)
}

/**
 * Get all unique categories from guides
 */
export async function getAllGuideCategories(): Promise<string[]> {
  const categories = new Set<string>()
  mockGuides.forEach(guide => categories.add(guide.category))
  return Array.from(categories).sort()
}
