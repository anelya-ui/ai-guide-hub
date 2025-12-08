'use client'

import { courseLevels, courseDirections, courseDurations, courseFormats, type CourseLevel, type CourseDirection, type CourseDuration, type CourseFormat } from '@/lib/courses-data'

interface CoursesFiltersProps {
  selectedLevels: CourseLevel[]
  selectedDirections: CourseDirection[]
  selectedDurations: CourseDuration[]
  selectedFormats: CourseFormat[]
  onLevelsChange: (levels: CourseLevel[]) => void
  onDirectionsChange: (directions: CourseDirection[]) => void
  onDurationsChange: (durations: CourseDuration[]) => void
  onFormatsChange: (formats: CourseFormat[]) => void
}

export function CoursesFilters({
  selectedLevels,
  selectedDirections,
  selectedDurations,
  selectedFormats,
  onLevelsChange,
  onDirectionsChange,
  onDurationsChange,
  onFormatsChange,
}: CoursesFiltersProps) {
  const toggleLevel = (level: CourseLevel) => {
    if (selectedLevels.includes(level)) {
      onLevelsChange(selectedLevels.filter(l => l !== level))
    } else {
      onLevelsChange([...selectedLevels, level])
    }
  }

  const toggleDirection = (direction: CourseDirection) => {
    if (selectedDirections.includes(direction)) {
      onDirectionsChange(selectedDirections.filter(d => d !== direction))
    } else {
      onDirectionsChange([...selectedDirections, direction])
    }
  }

  const toggleDuration = (duration: CourseDuration) => {
    if (selectedDurations.includes(duration)) {
      onDurationsChange(selectedDurations.filter(d => d !== duration))
    } else {
      onDurationsChange([...selectedDurations, duration])
    }
  }

  const toggleFormat = (format: CourseFormat) => {
    if (selectedFormats.includes(format)) {
      onFormatsChange(selectedFormats.filter(f => f !== format))
    } else {
      onFormatsChange([...selectedFormats, format])
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

      {/* Уровень */}
      <div className="space-y-2 p-3 border border-border rounded-lg bg-card">
        <h3 className="font-semibold text-xs uppercase tracking-wide text-muted-foreground mb-3">
          Уровень
        </h3>
        <div className="space-y-1">
          {Object.entries(courseLevels).map(([level, count]) => {
            const isSelected = selectedLevels.includes(level as CourseLevel)
            return (
              <button
                key={level}
                onClick={() => toggleLevel(level as CourseLevel)}
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
                <span className="truncate flex-1 text-left">{level}</span>
                <span className="text-muted-foreground">({count})</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Направление */}
      <div className="space-y-2 p-3 border border-border rounded-lg bg-card">
        <h3 className="font-semibold text-xs uppercase tracking-wide text-muted-foreground mb-3">
          Направление
        </h3>
        <div className="space-y-1">
          {Object.entries(courseDirections).map(([direction, count]) => {
            const isSelected = selectedDirections.includes(direction as CourseDirection)
            return (
              <button
                key={direction}
                onClick={() => toggleDirection(direction as CourseDirection)}
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
                <span className="truncate flex-1 text-left">{direction}</span>
                <span className="text-muted-foreground">({count})</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Длительность */}
      <div className="space-y-2 p-3 border border-border rounded-lg bg-card">
        <h3 className="font-semibold text-xs uppercase tracking-wide text-muted-foreground mb-3">
          Длительность
        </h3>
        <div className="space-y-1">
          {courseDurations.map((duration) => {
            const isSelected = selectedDurations.includes(duration)
            let label: string = duration
            if (duration === 'Быстрые') label = 'До 2 часов'
            else if (duration === 'Средние') label = '2-8 часов'
            else if (duration === 'Полные') label = '8+ часов'

            return (
              <button
                key={duration}
                onClick={() => toggleDuration(duration)}
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
                <span>{label}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Формат */}
      <div className="space-y-2 p-3 border border-border rounded-lg bg-card">
        <h3 className="font-semibold text-xs uppercase tracking-wide text-muted-foreground mb-3">
          Формат
        </h3>
        <div className="space-y-1">
          {courseFormats.map((format) => {
            const isSelected = selectedFormats.includes(format)
            return (
              <button
                key={format}
                onClick={() => toggleFormat(format)}
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
                <span>{format}</span>
              </button>
            )
          })}
        </div>
      </div>
    </aside>
  )
}
