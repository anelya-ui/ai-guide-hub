import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { formatDate } from '@/lib/utils'
import type { Post } from '@/types'
import { cn } from '@/lib/utils'

interface PostCardProps {
  post: Post
  variant?: 'default' | 'featured' | 'compact'
}

export function PostCard({ post, variant = 'default' }: PostCardProps) {
  if (variant === 'featured') {
    return (
      <Link href={`/${post.slug}`} className="group">
        <Card className="overflow-hidden hover:shadow-lg transition-shadow">
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
          <CardHeader>
            <div className="flex gap-2 mb-2">
              {post.categories.slice(0, 2).map((category) => (
                <Badge key={category} variant="secondary">
                  {category}
                </Badge>
              ))}
            </div>
            <CardTitle className="text-2xl group-hover:text-primary transition-colors">
              {post.title}
            </CardTitle>
            <CardDescription className="line-clamp-2">
              {post.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                {formatDate(post.date)}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {post.readingTime}
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    )
  }

  if (variant === 'compact') {
    return (
      <Link href={`/${post.slug}`} className="group block">
        <div className="py-3 hover:bg-muted/50 rounded px-2 -mx-2 transition-colors">
          <h3 className="font-medium group-hover:text-primary transition-colors line-clamp-2 mb-1">
            {post.title}
          </h3>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Calendar className="h-3 w-3" />
            {formatDate(post.date)}
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link href={`/${post.slug}`} className="group">
      <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
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
        <CardHeader>
          <div className="flex gap-2 mb-2">
            {post.categories.slice(0, 1).map((category) => (
              <Badge key={category} variant="secondary" className="text-xs">
                {category}
              </Badge>
            ))}
          </div>
          <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </CardTitle>
          <CardDescription className="line-clamp-2">
            {post.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {formatDate(post.date)}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {post.readingTime}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
