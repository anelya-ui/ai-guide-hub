'use client'

import { Star, TrendingUp } from 'lucide-react'
import { type Tool } from '@/lib/tools-data'

interface TopToolsSidebarProps {
  topTools: Tool[]
  newTools: Tool[]
}

export function TopToolsSidebar({ topTools, newTools }: TopToolsSidebarProps) {
  return (
    <div className="space-y-6 sticky top-20">
      {/* Top Tools of the Week */}
      <div className="space-y-3 p-4 border border-border rounded-lg bg-card">
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className="w-4 h-4 text-accent" />
          <h3 className="font-semibold text-sm">Топ инструментов недели</h3>
        </div>
        <div className="space-y-3">
          {topTools.map((tool, index) => (
            <div
              key={tool.id}
              className="group cursor-pointer hover:bg-accent/5 p-2 rounded-md transition-colors"
            >
              <div className="flex items-start gap-2">
                <span className="text-xl font-bold text-accent/30 min-w-[24px]">
                  {index + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">{tool.logo}</span>
                    <h4 className="font-semibold text-sm truncate">
                      {tool.name}
                    </h4>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    <span>{tool.rating}</span>
                    <span>•</span>
                    <span className="truncate">{tool.category}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* New Tools */}
      <div className="space-y-3 p-4 border border-border rounded-lg bg-card">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <h3 className="font-semibold text-sm">Новые инструменты</h3>
        </div>
        <div className="space-y-3">
          {newTools.map((tool) => (
            <div
              key={tool.id}
              className="group cursor-pointer hover:bg-accent/5 p-2 rounded-md transition-colors"
            >
              <div className="flex items-start gap-2">
                <span className="text-2xl">{tool.logo}</span>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm mb-1 truncate">
                    {tool.name}
                  </h4>
                  <p className="text-xs text-muted-foreground line-clamp-2 mb-1">
                    {tool.description}
                  </p>
                  <div className="flex items-center gap-1 text-xs">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    <span className="font-medium">{tool.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Compare Tools Placeholder */}
      <div className="space-y-3 p-4 border border-border rounded-lg bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="flex items-center gap-2 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
            <path d="M18 20V10"></path>
            <path d="M12 20V4"></path>
            <path d="M6 20v-6"></path>
          </svg>
          <h3 className="font-semibold text-sm">Сравнить инструменты</h3>
        </div>
        <p className="text-xs text-muted-foreground">
          Выберите до 3 инструментов для детального сравнения возможностей, цен и отзывов
        </p>
        <button className="w-full px-3 py-2 text-xs font-medium rounded-md bg-accent/10 text-accent hover:bg-accent/20 transition-colors">
          Начать сравнение
        </button>
      </div>
    </div>
  )
}
