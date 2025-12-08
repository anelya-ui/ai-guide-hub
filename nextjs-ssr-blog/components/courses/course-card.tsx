'use client'

import { Star, BookOpen, Clock, Users } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { type Course } from '@/lib/courses-data'

interface CourseCardProps {
  course: Course
}

export function CourseCard({ course }: CourseCardProps) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Начинающий':
        return 'bg-green-500 text-white'
      case 'Средний':
        return 'bg-yellow-500 text-white'
      case 'Продвинутый':
        return 'bg-red-500 text-white'
      default:
        return 'bg-gray-500 text-white'
    }
  }

  return (
    <div className="group relative rounded-xl border border-border bg-card hover:border-accent transition-all duration-300 hover:shadow-lg overflow-hidden">
      {/* Cover Image */}
      <div className="relative h-32 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
        <span className="text-6xl">{course.coverImage}</span>

        {/* Level Badge */}
        <div className="absolute top-3 left-3">
          <Badge className={`${getLevelColor(course.level)} text-xs`}>
            {course.level}
          </Badge>
        </div>

        {/* Status Badges */}
        <div className="absolute top-3 right-3 flex flex-col gap-1">
          {course.isPopular && (
            <Badge className="bg-primary text-white text-xs">
              Популярный
            </Badge>
          )}
          {course.isNew && (
            <Badge className="bg-green-500 text-white text-xs">
              Новый
            </Badge>
          )}
          {course.isRecommended && (
            <Badge className="bg-accent text-white text-xs">
              Рекомендуем
            </Badge>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {course.description}
        </p>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{course.lessonsCount} уроков</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="w-3.5 h-3.5" />
            <span>{course.duration} ч</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
            <span>{course.rating} ({course.reviewsCount})</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Users className="w-3.5 h-3.5" />
            <span>{course.studentsCount.toLocaleString()}</span>
          </div>
        </div>

        {/* Progress Bar (if started) */}
        {course.progress !== undefined && (
          <div className="mb-4">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs text-muted-foreground">Прогресс</span>
              <span className="text-xs font-semibold text-accent">{course.progress}%</span>
            </div>
            <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-accent transition-all duration-300"
                style={{ width: `${course.progress}%` }}
              />
            </div>
          </div>
        )}

        {/* Price and Button */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="text-sm font-bold text-foreground">
            {course.price === 0 ? (
              <span className="text-green-600 text-xs">Бесплатно</span>
            ) : (
              <span>₽{course.price.toLocaleString()}</span>
            )}
          </div>
          {course.courseUrl && course.courseUrl !== '#' ? (
            <a
              href={course.courseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button size="sm" className="text-xs h-8">
                {course.progress !== undefined ? 'Продолжить' : 'Ссылка на курс'}
              </Button>
            </a>
          ) : (
            <Button size="sm" className="text-xs h-8" disabled>
              Скоро
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
