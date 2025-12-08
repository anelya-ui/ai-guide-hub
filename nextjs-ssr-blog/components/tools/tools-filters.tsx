'use client'

import { categories, pricingModels, ratings, integrations, type ToolCategory, type PricingModel, type Rating, type Integration } from '@/lib/tools-data'

interface ToolsFiltersProps {
  selectedCategories: ToolCategory[]
  selectedPricingModels: PricingModel[]
  selectedRatings: Rating[]
  selectedIntegrations: Integration[]
  onCategoriesChange: (categories: ToolCategory[]) => void
  onPricingModelsChange: (models: PricingModel[]) => void
  onRatingsChange: (ratings: Rating[]) => void
  onIntegrationsChange: (integrations: Integration[]) => void
}

export function ToolsFilters({
  selectedCategories,
  selectedPricingModels,
  selectedRatings,
  selectedIntegrations,
  onCategoriesChange,
  onPricingModelsChange,
  onRatingsChange,
  onIntegrationsChange,
}: ToolsFiltersProps) {
  const toggleCategory = (category: ToolCategory) => {
    if (selectedCategories.includes(category)) {
      onCategoriesChange(selectedCategories.filter(c => c !== category))
    } else {
      onCategoriesChange([...selectedCategories, category])
    }
  }

  const togglePricingModel = (model: PricingModel) => {
    if (selectedPricingModels.includes(model)) {
      onPricingModelsChange(selectedPricingModels.filter(m => m !== model))
    } else {
      onPricingModelsChange([...selectedPricingModels, model])
    }
  }

  const toggleRating = (rating: Rating) => {
    if (selectedRatings.includes(rating)) {
      onRatingsChange(selectedRatings.filter(r => r !== rating))
    } else {
      onRatingsChange([...selectedRatings, rating])
    }
  }

  const toggleIntegration = (integration: Integration) => {
    if (selectedIntegrations.includes(integration)) {
      onIntegrationsChange(selectedIntegrations.filter(i => i !== integration))
    } else {
      onIntegrationsChange([...selectedIntegrations, integration])
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

      {/* Категории */}
      <div className="space-y-2 p-3 border border-border rounded-lg bg-card">
        <h3 className="font-semibold text-xs uppercase tracking-wide text-muted-foreground mb-3">
          Категории
        </h3>
        <div className="space-y-1">
          {Object.entries(categories).map(([category, count]) => {
            const isSelected = selectedCategories.includes(category as ToolCategory)
            return (
              <button
                key={category}
                onClick={() => toggleCategory(category as ToolCategory)}
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
                <span className="truncate flex-1 text-left">{category}</span>
                <span className="text-muted-foreground">({count})</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Ценовая модель */}
      <div className="space-y-2 p-3 border border-border rounded-lg bg-card">
        <h3 className="font-semibold text-xs uppercase tracking-wide text-muted-foreground mb-3">
          Ценовая модель
        </h3>
        <div className="space-y-1">
          {pricingModels.map((model) => {
            const isSelected = selectedPricingModels.includes(model)
            return (
              <button
                key={model}
                onClick={() => togglePricingModel(model)}
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
                <span>{model}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Рейтинг */}
      <div className="space-y-2 p-3 border border-border rounded-lg bg-card">
        <h3 className="font-semibold text-xs uppercase tracking-wide text-muted-foreground mb-3">
          Рейтинг
        </h3>
        <div className="space-y-1">
          {ratings.map((rating) => {
            const isSelected = selectedRatings.includes(rating)
            return (
              <button
                key={rating}
                onClick={() => toggleRating(rating)}
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
                <span>{rating}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Интеграции */}
      <div className="space-y-2 p-3 border border-border rounded-lg bg-card">
        <h3 className="font-semibold text-xs uppercase tracking-wide text-muted-foreground mb-3">
          Интеграции
        </h3>
        <div className="space-y-1">
          {integrations.map((integration) => {
            const isSelected = selectedIntegrations.includes(integration)
            return (
              <button
                key={integration}
                onClick={() => toggleIntegration(integration)}
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
                <span>{integration}</span>
              </button>
            )
          })}
        </div>
      </div>
    </aside>
  )
}
