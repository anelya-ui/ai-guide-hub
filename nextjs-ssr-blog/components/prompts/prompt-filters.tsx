'use client'

import { aiTools, categories, difficulties, type AITool, type PromptCategory, type Difficulty } from '@/lib/prompts-data'

interface PromptFiltersProps {
  selectedTools: AITool[]
  selectedCategories: PromptCategory[]
  selectedDifficulties: Difficulty[]
  onToolsChange: (tools: AITool[]) => void
  onCategoriesChange: (categories: PromptCategory[]) => void
  onDifficultiesChange: (difficulties: Difficulty[]) => void
}

export function PromptFilters({
  selectedTools,
  selectedCategories,
  selectedDifficulties,
  onToolsChange,
  onCategoriesChange,
  onDifficultiesChange,
}: PromptFiltersProps) {
  const toggleTool = (tool: AITool) => {
    if (selectedTools.includes(tool)) {
      onToolsChange(selectedTools.filter(t => t !== tool))
    } else {
      onToolsChange([...selectedTools, tool])
    }
  }

  const toggleCategory = (category: PromptCategory) => {
    if (selectedCategories.includes(category)) {
      onCategoriesChange(selectedCategories.filter(c => c !== category))
    } else {
      onCategoriesChange([...selectedCategories, category])
    }
  }

  const toggleDifficulty = (difficulty: Difficulty) => {
    if (selectedDifficulties.includes(difficulty)) {
      onDifficultiesChange(selectedDifficulties.filter(d => d !== difficulty))
    } else {
      onDifficultiesChange([...selectedDifficulties, difficulty])
    }
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

      {/* AI-Инструменты */}
      <div className="space-y-2 p-3 border border-border rounded-lg bg-card">
        <h3 className="font-semibold text-xs uppercase tracking-wide text-muted-foreground mb-3">
          AI-Инструменты
        </h3>
        <div className="space-y-1">
          {Object.entries(aiTools).map(([tool]) => {
            const isSelected = selectedTools.includes(tool as AITool)
            return (
              <button
                key={tool}
                onClick={() => toggleTool(tool as AITool)}
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
                <span className="truncate">{tool}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Категории */}
      <div className="space-y-2 p-3 border border-border rounded-lg bg-card">
        <h3 className="font-semibold text-xs uppercase tracking-wide text-muted-foreground mb-3">
          Категории
        </h3>
        <div className="space-y-1">
          {Object.entries(categories).map(([category]) => {
            const isSelected = selectedCategories.includes(category as PromptCategory)
            return (
              <button
                key={category}
                onClick={() => toggleCategory(category as PromptCategory)}
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
                <span className="truncate">{category}</span>
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
          {difficulties.map((difficulty) => {
            const isSelected = selectedDifficulties.includes(difficulty)
            return (
              <button
                key={difficulty}
                onClick={() => toggleDifficulty(difficulty)}
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
                <span>{difficulty}</span>
              </button>
            )
          })}
        </div>
      </div>
    </aside>
  )
}
