'use client'

import { Star, ExternalLink, FileText } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { type Tool } from '@/lib/tools-data'
import { toast } from 'sonner'

interface ToolCardProps {
  tool: Tool
}

export function ToolCard({ tool }: ToolCardProps) {
  const handleReviewClick = () => {
    toast.info('Обзоры инструментов скоро появятся!')
  }
  return (
    <div className="group relative p-6 rounded-xl border border-border bg-card hover:border-accent transition-all duration-300 hover:shadow-lg">
      {/* Header with Logo and Status Badges */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          {/* Logo */}
          <div className="text-4xl">{tool.logo}</div>

          {/* Name and Badges */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-1">
              {tool.name}
            </h3>
            <div className="flex flex-wrap items-center gap-2">
              {tool.isFeatured && (
                <Badge className="bg-primary text-white text-xs">
                  Популярно
                </Badge>
              )}
              {tool.isNew && (
                <Badge className="bg-green-500 text-white text-xs">
                  Новинка
                </Badge>
              )}
              {tool.isRecommended && (
                <Badge className="bg-accent text-white text-xs">
                  Рекомендуем
                </Badge>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-4">
        {tool.description}
      </p>

      {/* Rating and Reviews */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          <span className="font-semibold text-sm">{tool.rating}</span>
        </div>
        <span className="text-xs text-muted-foreground">
          ({tool.reviewsCount.toLocaleString()} отзыва)
        </span>
        <span className="text-muted-foreground">•</span>
        <span className="text-sm font-medium text-accent">{tool.pricing}</span>
      </div>

      {/* Features */}
      <div className="mb-4">
        <ul className="space-y-1.5">
          {tool.features.map((feature, index) => (
            <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="text-accent mt-0.5">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tool.tags.map((tag) => (
          <Badge key={tag} variant="outline" className="text-xs">
            #{tag}
          </Badge>
        ))}
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row items-stretch gap-2 pt-4 border-t border-border">
        <a
          href={tool.website}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1"
        >
          <Button className="w-full gap-2 text-xs sm:text-sm">
            <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            Попробовать
          </Button>
        </a>
        <Button
          variant="outline"
          className="flex-1 gap-2 text-xs sm:text-sm"
          onClick={handleReviewClick}
        >
          <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          Обзор
        </Button>
      </div>
    </div>
  )
}
