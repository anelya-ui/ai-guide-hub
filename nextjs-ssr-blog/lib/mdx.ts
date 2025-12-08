import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { compileMDX } from 'next-mdx-remote/rsc'
import readingTime from 'reading-time'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkGfm from 'remark-gfm'
import type { Post, PostMetadata, Heading } from '@/types'

const POSTS_PATH = path.join(process.cwd(), 'content/posts')

/**
 * Get all MDX posts from the content directory
 */
export async function getAllPosts(): Promise<Post[]> {
  // Ensure directory exists
  if (!fs.existsSync(POSTS_PATH)) {
    return []
  }

  const files = fs.readdirSync(POSTS_PATH).filter((file) => file.endsWith('.mdx'))

  const posts = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.mdx$/, '')
      return getPostBySlug(slug)
    })
  )

  // Filter out null posts and sort by date (newest first)
  return posts
    .filter((post): post is Post => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

/**
 * Get a single post by slug
 */
export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const filePath = path.join(POSTS_PATH, `${slug}.mdx`)

    if (!fs.existsSync(filePath)) {
      return null
    }

    const fileContent = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContent)

    // Calculate reading time
    const stats = readingTime(content)

    // Parse metadata with defaults
    const metadata = data as PostMetadata

    return {
      slug,
      title: metadata.title || 'Untitled',
      description: metadata.description || '',
      content,
      date: metadata.date || new Date().toISOString(),
      coverImage: metadata.coverImage,
      author: {
        name: metadata.author || 'Anonymous',
      },
      tags: metadata.tags || [],
      categories: metadata.categories || [],
      readingTime: stats.text,
      published: metadata.published !== false,
      excerpt: metadata.description || content.slice(0, 150) + '...',
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}

/**
 * Get posts by category
 */
export async function getPostsByCategory(category: string): Promise<Post[]> {
  const allPosts = await getAllPosts()
  return allPosts.filter((post) =>
    post.categories.map((c) => c.toLowerCase()).includes(category.toLowerCase())
  )
}

/**
 * Get posts by tag
 */
export async function getPostsByTag(tag: string): Promise<Post[]> {
  const allPosts = await getAllPosts()
  return allPosts.filter((post) =>
    post.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase())
  )
}

/**
 * Get all unique categories
 */
export async function getAllCategories(): Promise<string[]> {
  const allPosts = await getAllPosts()
  const categories = new Set<string>()

  allPosts.forEach((post) => {
    post.categories.forEach((category) => categories.add(category))
  })

  return Array.from(categories).sort()
}

/**
 * Get all unique tags
 */
export async function getAllTags(): Promise<string[]> {
  const allPosts = await getAllPosts()
  const tags = new Set<string>()

  allPosts.forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag))
  })

  return Array.from(tags).sort()
}

/**
 * Extract headings from MDX content for Table of Contents
 */
export function extractHeadings(content: string): Heading[] {
  const headingRegex = /^(#{2,4})\s+(.+)$/gm
  const headings: Heading[] = []
  let match

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length as 2 | 3 | 4
    const text = match[2].trim()
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')

    headings.push({ id, text, level })
  }

  return headings
}

/**
 * Compile MDX content with plugins
 */
export async function compileMDXContent(content: string) {
  return compileMDX({
    source: content,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeHighlight,
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: 'wrap',
              properties: {
                className: ['anchor'],
              },
            },
          ],
        ],
      },
    },
  })
}

/**
 * Get all post slugs for static generation
 */
export async function getAllPostSlugs(): Promise<string[]> {
  if (!fs.existsSync(POSTS_PATH)) {
    return []
  }

  const files = fs.readdirSync(POSTS_PATH).filter((file) => file.endsWith('.mdx'))
  return files.map((file) => file.replace(/\.mdx$/, ''))
}
