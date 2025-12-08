import { Guide } from '@/types/guide'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Eye, ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

interface GuideCardProps {
  guide: Guide
}

const difficultyLabels = {
  beginner: 'Начинающий',
  intermediate: 'Средний',
  advanced: 'Продвинутый',
}

const difficultyColors = {
  beginner: 'bg-green-500/10 text-green-500 border-green-500/20',
  intermediate: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
  advanced: 'bg-red-500/10 text-red-500 border-red-500/20',
}

export function GuideCard({ guide }: GuideCardProps) {
  const formattedDate = new Date(guide.publishedAt).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <article className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
      <Link href={`/guides/${guide.slug}`} className="flex flex-col md:flex-row">
        {/* Image - Left side on desktop */}
        <div className="relative h-64 md:h-auto md:w-80 flex-shrink-0 overflow-hidden">
          <Image
            src={guide.image}
            alt={guide.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 to-transparent" />

          {/* Badges on image */}
          <div className="absolute top-4 left-4 flex gap-2">
            <Badge className={`${difficultyColors[guide.difficulty]} border`}>
              {difficultyLabels[guide.difficulty]}
            </Badge>
          </div>
        </div>

        {/* Content - Right side on desktop */}
        <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
          <div className="space-y-4">
            {/* Author and date */}
            <div className="flex items-center gap-3">
              <Image
                src={guide.author.avatar}
                alt={guide.author.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{guide.author.name}</p>
                <p className="text-xs text-muted-foreground">{formattedDate}</p>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold line-clamp-2 group-hover:text-accent transition-colors">
              {guide.title}
            </h3>

            {/* Description */}
            <p className="text-base text-muted-foreground line-clamp-3 leading-relaxed">
              {guide.description}
            </p>

            {/* Tools */}
            <div className="flex flex-wrap gap-2">
              {guide.tools.map((tool) => (
                <Badge key={tool} variant="outline" className="text-xs">
                  {tool}
                </Badge>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{guide.readTime} мин</span>
              </div>
              {guide.views && (
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>{guide.views.toLocaleString('ru-RU')}</span>
                </div>
              )}
            </div>

            <div className="flex items-center gap-2 text-accent font-medium group-hover:gap-3 transition-all">
              <span>Читать</span>
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}
