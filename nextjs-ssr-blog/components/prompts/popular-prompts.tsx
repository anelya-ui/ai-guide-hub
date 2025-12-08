'use client'

import { Star, TrendingUp, Plus } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { mockPrompts, toolIcons } from '@/lib/prompts-data'

export function PopularPrompts() {
  // Get top 5 most popular prompts by rating and views
  const popularPrompts = mockPrompts
    .sort((a, b) => b.rating * b.views - a.rating * a.views)
    .slice(0, 5)

  // Get newest prompts (last 3)
  const newPrompts = mockPrompts
    .filter(p => p.isNew)
    .slice(0, 3)

  return (
    <div className="space-y-8">
      {/* Popular Prompts */}
      <div>
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          <Star className="w-5 h-5 text-yellow-500" />
          Популярные промпты
        </h3>
        <div className="space-y-3">
          {popularPrompts.map((prompt) => (
            <div
              key={prompt.id}
              className="p-3 rounded-lg border border-border bg-card hover:border-accent transition-all cursor-pointer group"
            >
              <div className="flex items-start gap-2 mb-2">
                <span className="text-lg">{toolIcons[prompt.tool]}</span>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium line-clamp-2 group-hover:text-accent transition-colors">
                    {prompt.title}
                  </h4>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-500" />
                  <span>{prompt.rating}</span>
                </div>
                <span>•</span>
                <span>{prompt.copies} копирований</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* New This Week */}
      <div>
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-green-500" />
          Новые на этой неделе
        </h3>
        <div className="space-y-3">
          {newPrompts.map((prompt) => (
            <div
              key={prompt.id}
              className="p-3 rounded-lg border border-border bg-card hover:border-accent transition-all cursor-pointer group"
            >
              <div className="flex items-start gap-2 mb-2">
                <span className="text-lg">{toolIcons[prompt.tool]}</span>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium line-clamp-2 group-hover:text-accent transition-colors">
                    {prompt.title}
                  </h4>
                  <Badge className="mt-1 bg-green-500 text-white text-xs">
                    Новый
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Suggest Prompt Button */}
      <div className="p-4 rounded-lg border border-dashed border-border bg-muted/30 text-center">
        <Plus className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
        <h4 className="font-medium mb-2">Предложить промпт</h4>
        <p className="text-xs text-muted-foreground mb-3">
          Поделитесь своим полезным промптом с сообществом
        </p>
        <Button variant="outline" size="sm" className="w-full">
          Предложить
        </Button>
      </div>
    </div>
  )
}
