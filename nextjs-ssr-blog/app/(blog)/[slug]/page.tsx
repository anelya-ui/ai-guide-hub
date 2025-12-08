import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Calendar, ArrowLeft } from 'lucide-react'
import { getPostBySlug, getAllPostSlugs, getAllPosts } from '@/lib/mdx'
import { mdxComponents } from '@/components/mdx'
import { Badge } from '@/components/ui/badge'
import { formatDate } from '@/lib/utils'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkGfm from 'remark-gfm'
import { ArticleSchema, BreadcrumbSchema } from '@/components/seo/json-ld'
import { Breadcrumbs } from '@/components/seo/breadcrumbs'
import { siteConfig } from '@/config/site'

// Import highlight.js theme
import 'highlight.js/styles/github-dark.css'

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  const url = `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/${params.slug}`

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
      images: post.coverImage ? [post.coverImage] : [],
      url,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: post.coverImage ? [post.coverImage] : [],
    },
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  // Get related posts from same category
  const allPosts = await getAllPosts()
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug && p.categories.some((c) => post.categories.includes(c)))
    .slice(0, 2)

  const postUrl = `${siteConfig.url}/${params.slug}`
  const breadcrumbItems = [
    { name: 'Главная', url: '/' },
    { name: 'Блог', url: '/blog' },
    { name: post.title, url: `/${params.slug}` },
  ]

  return (
    <div className="min-h-screen bg-background">
      <ArticleSchema
        title={post.title}
        description={post.description}
        datePublished={post.date}
        authorName={post.author.name}
        authorUrl={siteConfig.url}
        image={post.coverImage}
        url={postUrl}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Главная', url: siteConfig.url },
          { name: 'Блог', url: `${siteConfig.url}/blog` },
          { name: post.title, url: postUrl },
        ]}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs items={breadcrumbItems} />

      {/* Back button */}
      <div className="border-b border-border">
        <div className="container py-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Назад к блогу
          </Link>
        </div>
      </div>

      {/* Hero section with cover image */}
      <div className="relative h-[400px] w-full">
        {post.coverImage ? (
          <>
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
        )}

        <div className="absolute bottom-0 left-0 right-0">
          <div className="container pb-8">
            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.map((category) => (
                <Badge key={category} variant="outline" className="bg-background/80 backdrop-blur-sm">
                  {category}
                </Badge>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-4xl">
              {post.title}
            </h1>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-semibold">
                  {post.author.name[0]}
                </div>
                <div>
                  <p className="font-medium text-foreground">
                    {post.author.name}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.date)}</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readingTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container py-12">
        <div className="max-w-3xl mx-auto">
          {/* Description */}
          <div className="prose prose-lg dark:prose-invert mb-8">
            <p className="text-xl text-muted-foreground leading-relaxed">
              {post.description}
            </p>
          </div>

          {/* MDX Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <MDXRemote
              source={post.content}
              components={mdxComponents}
              options={{
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
              }}
            />
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="text-sm font-semibold text-muted-foreground mb-3">Теги</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-12 pt-8 border-t border-border">
              <h2 className="text-2xl font-bold mb-6">Похожие статьи</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="p-4 border border-border rounded-lg hover:border-accent transition-colors"
                  >
                    <h3 className="font-semibold mb-2 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {relatedPost.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
