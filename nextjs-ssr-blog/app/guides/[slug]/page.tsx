import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Eye, ArrowLeft, Calendar } from 'lucide-react'
import { mockGuides } from '@/lib/guides-data'
import { Badge } from '@/components/ui/badge'

const difficultyLabels = {
  beginner: 'Начинающий',
  intermediate: 'Средний',
  advanced: 'Продвинутый',
}

const difficultyColors = {
  beginner: 'bg-green-500/10 text-green-500 border-green-500/20',
  intermediate: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
  advanced: 'bg-red-500/10 text-red-500 border-red-500/20',
}

export async function generateStaticParams() {
  return mockGuides.map((guide) => ({
    slug: guide.slug,
  }))
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  const guide = mockGuides.find((g) => g.slug === params.slug)

  if (!guide) {
    notFound()
  }

  const formattedDate = new Date(guide.publishedAt).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Back button */}
      <div className="border-b border-border">
        <div className="container py-4">
          <Link
            href="/guides"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Назад к гайдам
          </Link>
        </div>
      </div>

      {/* Hero section */}
      <div className="relative h-[400px] w-full">
        <Image
          src={guide.image}
          alt={guide.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0">
          <div className="container pb-8">
            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className={`${difficultyColors[guide.difficulty]} border`}>
                {difficultyLabels[guide.difficulty]}
              </Badge>
              {guide.tools.map((tool) => (
                <Badge key={tool} variant="outline">
                  {tool}
                </Badge>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-4xl">
              {guide.title}
            </h1>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-3">
                <Image
                  src={guide.author.avatar}
                  alt={guide.author.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="font-medium text-foreground">
                    {guide.author.name}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formattedDate}</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{guide.readTime} мин чтения</span>
              </div>

              {guide.views && (
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  <span>{guide.views.toLocaleString('ru-RU')} просмотров</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container py-12">
        <div className="max-w-3xl mx-auto">
          {/* Description */}
          <div className="prose prose-lg dark:prose-invert mb-8">
            <p className="text-xl text-muted-foreground leading-relaxed">
              {guide.description}
            </p>
          </div>

          {/* Placeholder content */}
          <div className="prose prose-lg dark:prose-invert">
            <h2>Введение</h2>
            <p>
              Этот гайд поможет вам освоить использование AI-инструментов для
              решения реальных задач. Мы рассмотрим практические примеры и лучшие
              практики, которые вы сможете применить в своей работе.
            </p>

            <h2>Что вы узнаете</h2>
            <ul>
              <li>Основы работы с AI-инструментами</li>
              <li>Практические примеры использования</li>
              <li>Лучшие практики и рекомендации</li>
              <li>Типичные ошибки и как их избежать</li>
            </ul>

            <h2>Начало работы</h2>
            <p>
              Прежде чем начать, убедитесь, что у вас есть доступ к необходимым
              инструментам. В этом гайде мы будем использовать{' '}
              {guide.tools.join(', ')}.
            </p>

            <h2>Шаг 1: Подготовка</h2>
            <p>
              Первым делом необходимо настроить рабочее окружение. Это включает в
              себя регистрацию в сервисах, установку необходимых расширений и
              подготовку тестовых данных.
            </p>

            <h2>Шаг 2: Базовые операции</h2>
            <p>
              Начнем с простых операций, которые помогут вам освоиться с
              интерфейсом и понять основные принципы работы.
            </p>

            <h2>Шаг 3: Продвинутые техники</h2>
            <p>
              После освоения базовых операций переходим к более сложным техникам,
              которые помогут вам решать нестандартные задачи.
            </p>

            <h2>Заключение</h2>
            <p>
              Теперь вы знаете основные принципы работы с этими инструментами.
              Практикуйтесь, экспериментируйте и не бойтесь пробовать новые
              подходы!
            </p>
          </div>

          {/* Related guides */}
          <div className="mt-12 pt-8 border-t border-border">
            <h2 className="text-2xl font-bold mb-6">Похожие гайды</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mockGuides
                .filter((g) => g.id !== guide.id && g.category === guide.category)
                .slice(0, 2)
                .map((relatedGuide) => (
                  <Link
                    key={relatedGuide.id}
                    href={`/guides/${relatedGuide.slug}`}
                    className="p-4 border border-border rounded-lg hover:border-accent transition-colors"
                  >
                    <h3 className="font-semibold mb-2 line-clamp-2">
                      {relatedGuide.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {relatedGuide.description}
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
