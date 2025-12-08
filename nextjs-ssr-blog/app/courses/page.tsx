'use client'

import { useState, useMemo } from 'react'
import { GraduationCap, BookOpen, Users, Clock, Search } from 'lucide-react'
import { AnimatedCodeBackground } from '@/components/hero/animated-code-background'
import { CourseCard } from '@/components/courses/course-card'
import { CoursesFilters } from '@/components/courses/courses-filters'
import { CoursesSidebar } from '@/components/courses/courses-sidebar'
import { mockCourses, recommendedCourses, popularThisWeek, type CourseLevel, type CourseDirection, type CourseDuration, type CourseFormat } from '@/lib/courses-data'

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedLevels, setSelectedLevels] = useState<CourseLevel[]>([])
  const [selectedDirections, setSelectedDirections] = useState<CourseDirection[]>([])
  const [selectedDurations, setSelectedDurations] = useState<CourseDuration[]>([])
  const [selectedFormats, setSelectedFormats] = useState<CourseFormat[]>([])

  // Filter courses
  const filteredCourses = useMemo(() => {
    return mockCourses.filter((course) => {
      // Search filter
      const matchesSearch =
        searchQuery === '' ||
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase())

      // Level filter
      const matchesLevel = selectedLevels.length === 0 || selectedLevels.includes(course.level)

      // Direction filter
      const matchesDirection = selectedDirections.length === 0 || selectedDirections.includes(course.direction)

      // Duration filter
      let matchesDuration = selectedDurations.length === 0
      if (!matchesDuration) {
        for (const duration of selectedDurations) {
          if (duration === 'Быстрые' && course.duration <= 2) {
            matchesDuration = true
            break
          }
          if (duration === 'Средние' && course.duration > 2 && course.duration <= 8) {
            matchesDuration = true
            break
          }
          if (duration === 'Полные' && course.duration > 8) {
            matchesDuration = true
            break
          }
        }
      }

      // Format filter
      const matchesFormat =
        selectedFormats.length === 0 ||
        course.formats.some(format => selectedFormats.includes(format))

      return matchesSearch && matchesLevel && matchesDirection && matchesDuration && matchesFormat
    })
  }, [searchQuery, selectedLevels, selectedDirections, selectedDurations, selectedFormats])

  const totalCourses = mockCourses.length
  const totalLessons = mockCourses.reduce((sum, course) => sum + course.lessonsCount, 0)
  const totalStudents = mockCourses.reduce((sum, course) => sum + course.studentsCount, 0)

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
              <GraduationCap className="w-4 h-4 text-primary" />
            </div>

            {/* Title */}
            <h1 className="text-xl md:text-2xl font-bold mb-1.5">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Изучение AI: от новичка до эксперта
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs md:text-sm text-muted-foreground mb-3">
              Структурированные курсы по искусственному интеллекту для IT-специалистов
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Найти курс..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border border-border bg-background/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center flex-wrap gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-primary" />
                <span className="font-semibold">{totalCourses} курсов</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-primary" />
                <span className="font-semibold">{totalLessons}+ уроков</span>
              </div>
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
              <CoursesFilters
                selectedLevels={selectedLevels}
                selectedDirections={selectedDirections}
                selectedDurations={selectedDurations}
                selectedFormats={selectedFormats}
                onLevelsChange={setSelectedLevels}
                onDirectionsChange={setSelectedDirections}
                onDurationsChange={setSelectedDurations}
                onFormatsChange={setSelectedFormats}
              />
            </div>

            {/* Center - Courses Grid */}
            <main className="space-y-6">
              {/* Mobile filters */}
              <div className="lg:hidden">
                <details className="bg-card border border-border rounded-lg p-4 mb-6">
                  <summary className="font-semibold cursor-pointer">
                    Фильтры ({filteredCourses.length} курсов)
                  </summary>
                  <div className="mt-4">
                    <CoursesFilters
                      selectedLevels={selectedLevels}
                      selectedDirections={selectedDirections}
                      selectedDurations={selectedDurations}
                      selectedFormats={selectedFormats}
                      onLevelsChange={setSelectedLevels}
                      onDirectionsChange={setSelectedDirections}
                      onDurationsChange={setSelectedDurations}
                      onFormatsChange={setSelectedFormats}
                    />
                  </div>
                </details>
              </div>

              <div className="flex items-center justify-between mb-4">
                <p className="text-sm text-muted-foreground">
                  Найдено курсов: {filteredCourses.length}
                </p>
              </div>

              {filteredCourses.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">
                    Курсы не найдены. Попробуйте изменить фильтры.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              )}
            </main>

            {/* Right Sidebar */}
            <div className="hidden lg:block">
              <CoursesSidebar
                recommendedCourses={recommendedCourses}
                popularThisWeek={popularThisWeek}
              />
            </div>
          </div>

          {/* Mobile Sidebars */}
          <div className="lg:hidden mt-12">
            <CoursesSidebar
              recommendedCourses={recommendedCourses.slice(0, 3)}
              popularThisWeek={popularThisWeek}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
