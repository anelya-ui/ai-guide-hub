'use client'

import { Star, TrendingUp, Award, BookOpen } from 'lucide-react'
import { type Course } from '@/lib/courses-data'

interface CoursesSidebarProps {
  recommendedCourses: Course[]
  popularThisWeek: Course[]
}

export function CoursesSidebar({ recommendedCourses, popularThisWeek }: CoursesSidebarProps) {
  return (
    <div className="space-y-6 sticky top-20">
      {/* Recommended Courses */}
      <div className="space-y-3 p-4 border border-border rounded-lg bg-card">
        <div className="flex items-center gap-2 mb-3">
          <Award className="w-4 h-4 text-accent" />
          <h3 className="font-semibold text-sm">Рекомендуемые курсы</h3>
        </div>
        <div className="space-y-3">
          {recommendedCourses.map((course, index) => (
            <div
              key={course.id}
              className="group cursor-pointer hover:bg-accent/5 p-2 rounded-md transition-colors"
            >
              <div className="flex items-start gap-2">
                <span className="text-xl font-bold text-accent/30 min-w-[24px]">
                  {index + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">{course.coverImage}</span>
                    <h4 className="font-semibold text-sm truncate">
                      {course.title}
                    </h4>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
                    <BookOpen className="w-3 h-3" />
                    <span>{course.lessonsCount} уроков</span>
                    <span>•</span>
                    <span>{course.duration} ч</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    <span className="font-medium">{course.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular This Week */}
      <div className="space-y-3 p-4 border border-border rounded-lg bg-card">
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className="w-4 h-4 text-accent" />
          <h3 className="font-semibold text-sm">Популярные на этой неделе</h3>
        </div>
        <div className="space-y-3">
          {popularThisWeek.map((course) => (
            <div
              key={course.id}
              className="group cursor-pointer hover:bg-accent/5 p-2 rounded-md transition-colors"
            >
              <div className="flex items-start gap-2">
                <span className="text-2xl">{course.coverImage}</span>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm mb-1 truncate">
                    {course.title}
                  </h4>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
                    <span>{course.studentsCount.toLocaleString()} студентов</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    <span className="font-medium">{course.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Block */}
      <div className="space-y-3 p-4 border border-border rounded-lg bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="flex items-center gap-2 mb-2">
          <Award className="w-5 h-5 text-accent" />
          <h3 className="font-semibold text-sm">Получить сертификат</h3>
        </div>
        <p className="text-xs text-muted-foreground mb-3">
          Завершите курсы с сертификацией и получите официальный документ о прохождении обучения
        </p>
        <div className="flex items-center gap-2 text-xs font-medium text-accent">
          <Award className="w-4 h-4" />
          <span>8 курсов с сертификатом</span>
        </div>
      </div>
    </div>
  )
}
