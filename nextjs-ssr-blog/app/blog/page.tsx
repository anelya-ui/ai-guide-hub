import Link from 'next/link'
import Image from 'next/image'
import { Clock } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { getAllPosts } from '@/lib/mdx'

export const revalidate = 3600 // Revalidate every hour

export default async function BlogPage() {
  const allPosts = await getAllPosts()
  const featuredPost = allPosts[0]
  const otherFeaturedPosts = allPosts.slice(1, 4) // 3 posts for sidebar
  const recentPosts = allPosts.slice(0, 6) // First 6 posts for Recent Posts section

  // If no posts, show empty state
  if (!featuredPost) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-[#333333] dark:text-white">
            Нет доступных постов
          </h2>
          <p className="text-[#666666] dark:text-white/60">
            Добавьте посты, чтобы увидеть их здесь
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">
        {/* Featured Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-12">
          {/* Main Featured Post - Left (60%) */}
          <Link
            href={`/${featuredPost.slug}`}
            className="lg:col-span-3 group"
          >
            <div className="relative h-[400px] rounded-xl overflow-hidden bg-gradient-to-br from-purple-600 to-blue-600 dark:from-purple-900 dark:to-blue-900 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
              {featuredPost.coverImage && (
                <>
                  <Image
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    fill
                    className="object-cover opacity-80"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </>
              )}

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <Badge className="w-fit mb-4 bg-accent text-white border-none">
                  {featuredPost.categories[0] || 'AI Tools'}
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-accent transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-white/90 text-sm mb-4 line-clamp-2">
                  {featuredPost.description}
                </p>
                <div className="flex items-center gap-4 text-white/80 text-sm">
                  <span>{featuredPost.author.name}</span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {featuredPost.readingTime}
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Other Featured Posts - Right (40%) */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-4 text-[#333333] dark:text-white">
              Другие статьи
            </h3>
            <div className="space-y-4">
              {otherFeaturedPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/${post.slug}`}
                  className="group flex gap-4 p-3 rounded-xl bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300"
                  style={{
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  {/* Mini Image */}
                  {post.coverImage && (
                    <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm mb-1 line-clamp-2 text-[#333333] dark:text-white group-hover:text-accent dark:group-hover:text-accent transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-xs text-[#666666] dark:text-white/60 line-clamp-1">
                      {post.description}
                    </p>
                    <div className="flex items-center gap-2 mt-2 text-xs text-[#999999] dark:text-white/40">
                      <Clock className="h-3 w-3" />
                      {post.readingTime}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Posts Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-[#333333] dark:text-white">
              Последние статьи
            </h2>
            {allPosts.length > 12 && (
              <Link
                href="#"
                className="text-sm text-accent hover:underline"
              >
                Все статьи
              </Link>
            )}
          </div>

          {/* Grid - 3 columns, 2 rows */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/${post.slug}`}
                className="group"
              >
                <article className="h-full rounded-xl overflow-hidden bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300"
                  style={{
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                  }}
                >
                  {/* Image */}
                  {post.coverImage && (
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-5">
                    <Badge className="mb-3 text-xs bg-accent/10 text-accent border-accent/20">
                      {post.categories[0]}
                    </Badge>

                    <h3 className="font-bold text-lg mb-2 line-clamp-2 text-[#333333] dark:text-white group-hover:text-accent dark:group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-sm text-[#666666] dark:text-white/60 mb-4 line-clamp-2">
                      {post.description}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center gap-3 text-xs text-[#999999] dark:text-white/40">
                      <span>{post.author.name}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readingTime}
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
