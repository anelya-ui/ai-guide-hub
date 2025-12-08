import { notFound } from 'next/navigation'
import { getAllCategories, getPostsByCategory } from '@/lib/mdx'
import { PostCard } from '@/components/blog/post-card'
import { Badge } from '@/components/ui/badge'

export const revalidate = 3600 // Revalidate every hour

// Generate static params for all categories
export async function generateStaticParams() {
  const categories = await getAllCategories()
  return categories.map((category) => ({
    category: category.toLowerCase().replace(/\s+/g, '-'),
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { category: string } }) {
  const categoryName = params.category.replace(/-/g, ' ')
  const posts = await getPostsByCategory(categoryName)

  if (posts.length === 0) {
    return {
      title: 'Category Not Found',
    }
  }

  return {
    title: `${categoryName} - Category`,
    description: `Browse all posts in the ${categoryName} category`,
  }
}

export default async function CategoryPage({ params }: { params: { category: string } }) {
  const categoryName = params.category.replace(/-/g, ' ')
  const posts = await getPostsByCategory(categoryName)

  if (posts.length === 0) {
    notFound()
  }

  return (
    <div className="container py-12">
      <div className="mb-12">
        <Badge className="mb-4" variant="secondary">
          Category
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight mb-4 capitalize">
          {categoryName}
        </h1>
        <p className="text-muted-foreground text-lg">
          {posts.length} {posts.length === 1 ? 'post' : 'posts'} in this category
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
