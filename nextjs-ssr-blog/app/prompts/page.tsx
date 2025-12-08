'use client'

import { useState, useMemo } from 'react'
import { Search, Sparkles } from 'lucide-react'
import { AnimatedCodeBackground } from '@/components/hero/animated-code-background'
import { PromptCard } from '@/components/prompts/prompt-card'
import { PromptFilters } from '@/components/prompts/prompt-filters'
import { PopularPrompts } from '@/components/prompts/popular-prompts'
import { mockPrompts, type AITool, type PromptCategory, type Difficulty } from '@/lib/prompts-data'

export default function PromptsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTools, setSelectedTools] = useState<AITool[]>([])
  const [selectedCategories, setSelectedCategories] = useState<PromptCategory[]>([])
  const [selectedDifficulties, setSelectedDifficulties] = useState<Difficulty[]>([])

  // Filter prompts based on search and filters
  const filteredPrompts = useMemo(() => {
    return mockPrompts.filter((prompt) => {
      const matchesSearch =
        searchQuery === '' ||
        prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prompt.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prompt.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesTool = selectedTools.length === 0 || selectedTools.includes(prompt.tool)
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(prompt.category)
      const matchesDifficulty = selectedDifficulties.length === 0 || selectedDifficulties.includes(prompt.difficulty)

      return matchesSearch && matchesTool && matchesCategory && matchesDifficulty
    })
  }, [searchQuery, selectedTools, selectedCategories, selectedDifficulties])

  const totalPrompts = mockPrompts.length

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative py-6 md:py-8 overflow-hidden border-b border-border">
        {/* Background */}
        <div className="absolute top-0 left-0 right-0 h-full pointer-events-none">
          <AnimatedCodeBackground />
        </div>

        <div className="w-[80%] mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 mb-2">
              <Sparkles className="w-4 h-4 text-primary" />
            </div>

            {/* Title */}
            <h1 className="text-xl md:text-2xl font-bold mb-1.5">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Библиотека AI Промптов
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs md:text-sm text-muted-foreground mb-3">
              Готовые промпты для ChatGPT, Claude, Midjourney и других AI-сервисов
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Найти промпт..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border border-border bg-background/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs">
              <Sparkles className="w-3 h-3" />
              <span className="font-semibold">{totalPrompts}+ проверенных промптов</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Three Column Layout */}
      <div className="py-12">
        <div className="w-[80%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.5fr_1fr] gap-8">
            {/* Left Sidebar - Filters */}
            <div className="hidden lg:block">
              <PromptFilters
                selectedTools={selectedTools}
                selectedCategories={selectedCategories}
                selectedDifficulties={selectedDifficulties}
                onToolsChange={setSelectedTools}
                onCategoriesChange={setSelectedCategories}
                onDifficultiesChange={setSelectedDifficulties}
              />
            </div>

            {/* Center - Prompts Grid */}
            <main className="space-y-6">
              {/* Mobile filters */}
              <div className="lg:hidden">
                <details className="bg-card border border-border rounded-lg p-4 mb-6">
                  <summary className="font-semibold cursor-pointer">
                    Фильтры ({filteredPrompts.length} промптов)
                  </summary>
                  <div className="mt-4">
                    <PromptFilters
                      selectedTools={selectedTools}
                      selectedCategories={selectedCategories}
                      selectedDifficulties={selectedDifficulties}
                      onToolsChange={setSelectedTools}
                      onCategoriesChange={setSelectedCategories}
                      onDifficultiesChange={setSelectedDifficulties}
                    />
                  </div>
                </details>
              </div>

              <div className="flex items-center justify-between mb-4">
                <p className="text-sm text-muted-foreground">
                  Найдено промптов: {filteredPrompts.length}
                </p>
              </div>

              {filteredPrompts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">
                    Промпты не найдены. Попробуйте изменить фильтры.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {filteredPrompts.map((prompt) => (
                    <PromptCard key={prompt.id} prompt={prompt} />
                  ))}
                </div>
              )}
            </main>

            {/* Right Sidebar */}
            <div className="hidden lg:block">
              <PopularPrompts />
            </div>
          </div>

          {/* Mobile Popular Prompts */}
          <div className="lg:hidden mt-12">
            <PopularPrompts />
          </div>
        </div>
      </div>
    </div>
  )
}
