import { notFound } from 'next/navigation'
import { getAllTags, getPostsByTag } from '@/lib/mdx'
import { PostCard } from '@/components/blog/post-card'
import { Badge } from '@/components/ui/badge'

export const revalidate = 3600 // Revalidate every hour

// Generate static params for all tags
export async function generateStaticParams() {
  const tags = await getAllTags()
  return tags.map((tag) => ({
    tag: tag.toLowerCase().replace(/\s+/g, '-'),
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { tag: string } }) {
  const tagName = params.tag.replace(/-/g, ' ')
  const posts = await getPostsByTag(tagName)

  if (posts.length === 0) {
    return {
      title: 'Tag Not Found',
    }
  }

  return {
    title: `${tagName} - Tag`,
    description: `Browse all posts tagged with ${tagName}`,
  }
}

export default async function TagPage({ params }: { params: { tag: string } }) {
  const tagName = params.tag.replace(/-/g, ' ')
  const posts = await getPostsByTag(tagName)

  if (posts.length === 0) {
    notFound()
  }

  return (
    <div className="container py-12">
      <div className="mb-12">
        <Badge className="mb-4" variant="secondary">
          Tag
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight mb-4 capitalize">
          #{tagName}
        </h1>
        <p className="text-muted-foreground text-lg">
          {posts.length} {posts.length === 1 ? 'post' : 'posts'} with this tag
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}
