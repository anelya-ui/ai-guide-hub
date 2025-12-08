'use client'

import { useState, useMemo } from 'react'
import { Search, Wrench } from 'lucide-react'
import { AnimatedCodeBackground } from '@/components/hero/animated-code-background'
import { ToolCard } from '@/components/tools/tool-card'
import { ToolsFilters } from '@/components/tools/tools-filters'
import { TopToolsSidebar } from '@/components/tools/top-tools-sidebar'
import { mockTools, topTools, newTools, type ToolCategory, type PricingModel, type Rating, type Integration } from '@/lib/tools-data'

export default function ToolsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<ToolCategory[]>([])
  const [selectedPricingModels, setSelectedPricingModels] = useState<PricingModel[]>([])
  const [selectedRatings, setSelectedRatings] = useState<Rating[]>([])
  const [selectedIntegrations, setSelectedIntegrations] = useState<Integration[]>([])

  // Filter tools based on search and filters
  const filteredTools = useMemo(() => {
    return mockTools.filter((tool) => {
      // Search filter
      const matchesSearch =
        searchQuery === '' ||
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))

      // Category filter
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(tool.category)

      // Pricing model filter
      const matchesPricing = selectedPricingModels.length === 0 || selectedPricingModels.includes(tool.pricingModel)

      // Rating filter
      let matchesRating = selectedRatings.length === 0
      if (!matchesRating) {
        for (const rating of selectedRatings) {
          if (rating === '5 звезд' && tool.rating === 5) {
            matchesRating = true
            break
          }
          if (rating === '4+ звезды' && tool.rating >= 4) {
            matchesRating = true
            break
          }
          if (rating === '3+ звезды' && tool.rating >= 3) {
            matchesRating = true
            break
          }
        }
      }

      // Integration filter
      const matchesIntegration =
        selectedIntegrations.length === 0 ||
        tool.integrations.some(integration => selectedIntegrations.includes(integration))

      return matchesSearch && matchesCategory && matchesPricing && matchesRating && matchesIntegration
    })
  }, [searchQuery, selectedCategories, selectedPricingModels, selectedRatings, selectedIntegrations])

  const totalTools = mockTools.length

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
              <Wrench className="w-4 h-4 text-primary" />
            </div>

            {/* Title */}
            <h1 className="text-xl md:text-2xl font-bold mb-1.5">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                AI Инструменты для IT-специалистов
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs md:text-sm text-muted-foreground mb-3">
              Полный каталог проверенных AI-инструментов с обзорами и рейтингами
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Найти инструмент..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border border-border bg-background/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs">
              <Wrench className="w-3 h-3" />
              <span className="font-semibold">{totalTools}+ AI-инструментов</span>
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
              <ToolsFilters
                selectedCategories={selectedCategories}
                selectedPricingModels={selectedPricingModels}
                selectedRatings={selectedRatings}
                selectedIntegrations={selectedIntegrations}
                onCategoriesChange={setSelectedCategories}
                onPricingModelsChange={setSelectedPricingModels}
                onRatingsChange={setSelectedRatings}
                onIntegrationsChange={setSelectedIntegrations}
              />
            </div>

            {/* Center - Tools Grid */}
            <main className="space-y-6">
              {/* Mobile filters */}
              <div className="lg:hidden">
                <details className="bg-card border border-border rounded-lg p-4 mb-6">
                  <summary className="font-semibold cursor-pointer">
                    Фильтры ({filteredTools.length} инструментов)
                  </summary>
                  <div className="mt-4">
                    <ToolsFilters
                      selectedCategories={selectedCategories}
                      selectedPricingModels={selectedPricingModels}
                      selectedRatings={selectedRatings}
                      selectedIntegrations={selectedIntegrations}
                      onCategoriesChange={setSelectedCategories}
                      onPricingModelsChange={setSelectedPricingModels}
                      onRatingsChange={setSelectedRatings}
                      onIntegrationsChange={setSelectedIntegrations}
                    />
                  </div>
                </details>
              </div>

              <div className="flex items-center justify-between mb-4">
                <p className="text-sm text-muted-foreground">
                  Найдено инструментов: {filteredTools.length}
                </p>
              </div>

              {filteredTools.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">
                    Инструменты не найдены. Попробуйте изменить фильтры.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredTools.map((tool) => (
                    <ToolCard key={tool.id} tool={tool} />
                  ))}
                </div>
              )}
            </main>

            {/* Right Sidebar */}
            <div className="hidden lg:block">
              <TopToolsSidebar topTools={topTools} newTools={newTools} />
            </div>
          </div>

          {/* Mobile Sidebars */}
          <div className="lg:hidden mt-12">
            <TopToolsSidebar topTools={topTools.slice(0, 3)} newTools={newTools} />
          </div>
        </div>
      </div>
    </div>
  )
}
