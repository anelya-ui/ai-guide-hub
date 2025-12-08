'use client'

import { useState, useMemo } from 'react'
import { Search } from 'lucide-react'
import { AnimatedCodeBackground } from '@/components/hero/animated-code-background'
import { GuidesFilters } from '@/components/guides/guides-filters'
import { GuideCard } from '@/components/guides/guide-card'
import { TopGuidesSidebar } from '@/components/guides/top-guides-sidebar'
import { mockGuides, topGuides } from '@/lib/guides-data'
import { GuideCategory, GuideDifficulty, GuideTool } from '@/types/guide'

export default function GuidesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filters, setFilters] = useState<{
    categories: GuideCategory[]
    difficulties: GuideDifficulty[]
    readTime: { min: number; max: number | null } | null
    tools: GuideTool[]
  }>({
    categories: [],
    difficulties: [],
    readTime: null,
    tools: [],
  })

  const filteredGuides = useMemo(() => {
    return mockGuides.filter((guide) => {
      // Filter by search query
      const matchesSearch =
        searchQuery === '' ||
        guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        guide.description.toLowerCase().includes(searchQuery.toLowerCase())

      // Filter by categories
      if (
        filters.categories.length > 0 &&
        !filters.categories.includes(guide.category)
      ) {
        return false
      }

      // Filter by difficulties
      if (
        filters.difficulties.length > 0 &&
        !filters.difficulties.includes(guide.difficulty)
      ) {
        return false
      }

      // Filter by read time
      if (filters.readTime) {
        if (guide.readTime < filters.readTime.min) {
          return false
        }
        if (
          filters.readTime.max !== null &&
          guide.readTime > filters.readTime.max
        ) {
          return false
        }
      }

      // Filter by tools
      if (
        filters.tools.length > 0 &&
        !guide.tools.some((tool) => filters.tools.includes(tool))
      ) {
        return false
      }

      return matchesSearch
    })
  }, [searchQuery, filters])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Header */}
      <section className="relative py-6 md:py-8 overflow-hidden border-b border-border">
        {/* Background */}
        <div className="absolute top-0 left-0 right-0 h-full pointer-events-none">
          <AnimatedCodeBackground />
        </div>

        <div className="w-[80%] mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-xl md:text-2xl font-bold mb-1.5">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Гайды по AI
              </span>
            </h1>
            <p className="text-xs md:text-sm text-muted-foreground mb-3">
              Практические руководства по использованию AI-инструментов для
              разработчиков, дизайнеров и контент-мейкеров
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Найти гайд..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border border-border bg-background/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="py-12">
        <div className="w-[80%] mx-auto">
          {/* Three column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.5fr_1fr] gap-8">
            {/* Left Sidebar - Filters (20-25%) */}
            <div className="hidden lg:block">
              <GuidesFilters onFilterChange={setFilters} />
            </div>

            {/* Main Content - Guide Cards (60-70%) */}
            <div className="space-y-6">
              {/* Mobile filters */}
              <div className="lg:hidden">
                <details className="bg-card border border-border rounded-lg p-4 mb-6">
                  <summary className="font-semibold cursor-pointer">
                    Фильтры ({filteredGuides.length} гайдов)
                  </summary>
                  <div className="mt-4">
                    <GuidesFilters onFilterChange={setFilters} />
                  </div>
                </details>
              </div>

              <div className="flex items-center justify-between mb-4">
                <p className="text-sm text-muted-foreground">
                  Найдено гайдов: {filteredGuides.length}
                </p>
              </div>

              {filteredGuides.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">
                    Гайды не найдены. Попробуйте изменить фильтры.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {filteredGuides.map((guide) => (
                    <GuideCard key={guide.id} guide={guide} />
                  ))}
                </div>
              )}
            </div>

            {/* Right Sidebar - Top Guides (20-25%) */}
            <div className="hidden lg:block">
              <TopGuidesSidebar guides={topGuides} />
            </div>
          </div>

          {/* Mobile Top Guides */}
          <div className="lg:hidden mt-12">
            <TopGuidesSidebar guides={topGuides.slice(0, 5)} />
          </div>
        </div>
      </div>
    </div>
  )
}
