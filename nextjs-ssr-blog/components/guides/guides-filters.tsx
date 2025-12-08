'use client'

import { GuideCategory, GuideDifficulty, GuideTool } from '@/types/guide'
import { useState } from 'react'

interface GuidesFiltersProps {
  onFilterChange: (filters: {
    categories: GuideCategory[]
    difficulties: GuideDifficulty[]
    readTime: { min: number; max: number | null } | null
    tools: GuideTool[]
  }) => void
}

const categoryData: { id: GuideCategory; label: string; icon: string }[] = [
  { id: 'design-ai', label: 'Дизайн и AI', icon: '🎨' },
  { id: 'programming', label: 'Программирование', icon: '💻' },
  { id: 'content', label: 'Контент', icon: '📝' },
  { id: 'data-analysis', label: 'Анализ данных', icon: '📊' },
  { id: 'productivity', label: 'Продуктивность', icon: '🚀' },
]

const difficultyData: { id: GuideDifficulty; label: string }[] = [
  { id: 'beginner', label: 'Начинающий' },
  { id: 'intermediate', label: 'Средний' },
  { id: 'advanced', label: 'Продвинутый' },
]

const readTimeData = [
  { id: 'short', label: '<10 мин', min: 0, max: 10 },
  { id: 'medium', label: '10-20 мин', min: 10, max: 20 },
  { id: 'long', label: '>20 мин', min: 20, max: null },
]

const toolsData: GuideTool[] = [
  'ChatGPT',
  'Claude',
  'Figma',
  'Midjourney',
  'GitHub Copilot',
]

export function GuidesFilters({ onFilterChange }: GuidesFiltersProps) {
  const [selectedCategories, setSelectedCategories] = useState<GuideCategory[]>([])
  const [selectedDifficulties, setSelectedDifficulties] = useState<GuideDifficulty[]>([])
  const [selectedReadTime, setSelectedReadTime] = useState<string | null>(null)
  const [selectedTools, setSelectedTools] = useState<GuideTool[]>([])

  const toggleCategory = (category: GuideCategory) => {
    const newCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category]
    setSelectedCategories(newCategories)
    updateFilters({ categories: newCategories })
  }

  const toggleDifficulty = (difficulty: GuideDifficulty) => {
    const newDifficulties = selectedDifficulties.includes(difficulty)
      ? selectedDifficulties.filter((d) => d !== difficulty)
      : [...selectedDifficulties, difficulty]
    setSelectedDifficulties(newDifficulties)
    updateFilters({ difficulties: newDifficulties })
  }

  const toggleReadTime = (timeId: string) => {
    const newReadTime = selectedReadTime === timeId ? null : timeId
    setSelectedReadTime(newReadTime)
    const timeRange = readTimeData.find((t) => t.id === newReadTime)
    updateFilters({
      readTime: timeRange ? { min: timeRange.min, max: timeRange.max } : null,
    })
  }

  const toggleTool = (tool: GuideTool) => {
    const newTools = selectedTools.includes(tool)
      ? selectedTools.filter((t) => t !== tool)
      : [...selectedTools, tool]
    setSelectedTools(newTools)
    updateFilters({ tools: newTools })
  }

  const updateFilters = (update: Partial<{
    categories: GuideCategory[]
    difficulties: GuideDifficulty[]
    readTime: { min: number; max: number | null } | null
    tools: GuideTool[]
  }>) => {
    onFilterChange({
      categories: update.categories ?? selectedCategories,
      difficulties: update.difficulties ?? selectedDifficulties,
      readTime: update.readTime !== undefined ? update.readTime :
        (selectedReadTime ? readTimeData.find(t => t.id === selectedReadTime) ?
          { min: readTimeData.find(t => t.id === selectedReadTime)!.min,
            max: readTimeData.find(t => t.id === selectedReadTime)!.max } : null : null),
      tools: update.tools ?? selectedTools,
    })
  }

  return (
    <aside className="space-y-6 sticky top-20">
      {/* Main Title */}
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
        </svg>
        <h2 className="text-base font-bold">Фильтры</h2>
      </div>

      {/* Категории */}
      <div className="space-y-2 p-3 border border-border rounded-lg bg-card">
        <h3 className="font-semibold text-xs uppercase tracking-wide text-muted-foreground mb-3">
          Категории
        </h3>
        <div className="space-y-1">
          {categoryData.map((category) => {
            const isSelected = selectedCategories.includes(category.id)

            return (
              <button
                key={category.id}
                onClick={() => toggleCategory(category.id)}
                className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-md text-xs transition-all ${
                  isSelected
                    ? 'bg-accent text-white'
                    : 'hover:bg-accent/10 text-foreground'
                }`}
              >
                {/* Checkbox */}
                <div className={`w-3.5 h-3.5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                  isSelected
                    ? 'border-white bg-white'
                    : 'border-gray-400 dark:border-gray-600'
                }`}>
                  {isSelected && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-2.5 h-2.5 text-accent"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  )}
                </div>
                <span className="truncate">{category.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Сложность */}
      <div className="space-y-2 p-3 border border-border rounded-lg bg-card">
        <h3 className="font-semibold text-xs uppercase tracking-wide text-muted-foreground mb-3">
          Сложность
        </h3>
        <div className="space-y-1">
          {difficultyData.map((difficulty) => {
            const isSelected = selectedDifficulties.includes(difficulty.id)
            return (
              <button
                key={difficulty.id}
                onClick={() => toggleDifficulty(difficulty.id)}
                className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-md text-xs transition-all ${
                  isSelected
                    ? 'bg-accent text-white'
                    : 'hover:bg-accent/10 text-foreground'
                }`}
              >
                {/* Checkbox */}
                <div className={`w-3.5 h-3.5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                  isSelected
                    ? 'border-white bg-white'
                    : 'border-gray-400 dark:border-gray-600'
                }`}>
                  {isSelected && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-2.5 h-2.5 text-accent"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  )}
                </div>
                <span>{difficulty.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Время чтения */}
      <div className="space-y-2 p-3 border border-border rounded-lg bg-card">
        <h3 className="font-semibold text-xs uppercase tracking-wide text-muted-foreground mb-3">
          Время
        </h3>
        <div className="space-y-1">
          {readTimeData.map((time) => {
            const isSelected = selectedReadTime === time.id
            return (
              <button
                key={time.id}
                onClick={() => toggleReadTime(time.id)}
                className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-md text-xs transition-all ${
                  isSelected
                    ? 'bg-accent text-white'
                    : 'hover:bg-accent/10 text-foreground'
                }`}
              >
                {/* Radio button */}
                <div className={`w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                  isSelected
                    ? 'border-white'
                    : 'border-gray-400 dark:border-gray-600'
                }`}>
                  {isSelected && (
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  )}
                </div>
                <span>{time.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Инструменты */}
      <div className="space-y-2 p-3 border border-border rounded-lg bg-card">
        <h3 className="font-semibold text-xs uppercase tracking-wide text-muted-foreground mb-3">
          Инструменты
        </h3>
        <div className="space-y-1">
          {toolsData.map((tool) => {
            const isSelected = selectedTools.includes(tool)
            return (
              <button
                key={tool}
                onClick={() => toggleTool(tool)}
                className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-md text-xs transition-all truncate ${
                  isSelected
                    ? 'bg-accent text-white'
                    : 'hover:bg-accent/10 text-foreground'
                }`}
              >
                {/* Checkbox */}
                <div className={`w-3.5 h-3.5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                  isSelected
                    ? 'border-white bg-white'
                    : 'border-gray-400 dark:border-gray-600'
                }`}>
                  {isSelected && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-2.5 h-2.5 text-accent"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  )}
                </div>
                <span>{tool}</span>
              </button>
            )
          })}
        </div>
      </div>
    </aside>
  )
}
