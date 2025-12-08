import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AIEfficiencyCalculator } from '@/components/calculator/ai-efficiency-calculator'
import { AIFaq } from '@/components/faq/ai-faq'
import { AnimatedCodeBackground } from '@/components/hero/animated-code-background'

export const revalidate = 3600 // Revalidate every hour

export default async function Home() {
  return (
    <div className="relative">
      {/* Global Cosmic Background - Fixed position to cover header too */}
      <div className="fixed top-0 left-0 right-0 h-screen pointer-events-none z-0">
        <AnimatedCodeBackground />
      </div>

      {/* Hero Section */}
      <section className="hero-section relative py-12 md:py-24 lg:py-32 overflow-visible">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4" variant="secondary">
              🚀 Разработано полностью с искусственным интеллектом
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 animate-slide-up">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Гайды и Ресурсы для IT-специалистов
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
              Практические руководства, эффективные промпты, обзоры инструментов и полезные AI-ресурсы для повышения продуктивности в IT.
            </p>
            <div className="flex justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-accent to-primary text-white font-semibold hover:opacity-90 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link href="/blog">AI Гайды</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-features py-12 -mt-12 relative z-[3]">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Что вы найдёте</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>📚 Практические Гайды</CardTitle>
                <CardDescription>
                  Пошаговые инструкции по работе с AI-инструментами и технологиями
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>💬 AI Промпты</CardTitle>
                <CardDescription>
                  Готовые промпты для ChatGPT, Claude, Midjourney и других AI-сервисов
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>🛠️ Обзоры Инструментов</CardTitle>
                <CardDescription>
                  Детальные обзоры и сравнения AI-инструментов для работы
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>🎯 Для Дизайнеров</CardTitle>
                <CardDescription>
                  Специализированные ресурсы и инструменты для UI/UX дизайнеров
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>💻 Для Разработчиков</CardTitle>
                <CardDescription>
                  AI-помощники в программировании и автоматизации разработки
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>🎓 AI Обучение</CardTitle>
                <CardDescription>
                  Структурированные мини-курсы по изучению искусственного интеллекта
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="section-popular py-12 relative z-[3]">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Популярные статьи</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Badge className="w-fit mb-2 border-purple-500" variant="outline">
                  Промпты
                </Badge>
                <CardTitle className="text-xl">Лучшие промпты для ChatGPT в 2025 году</CardTitle>
                <CardDescription>
                  Коллекция из 50+ проверенных промптов для разных задач
                </CardDescription>
              </CardHeader>
              <div className="px-6 pb-6">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/blog">Читать далее</Link>
                </Button>
              </div>
            </Card>

            <Card>
              <CardHeader>
                <Badge className="w-fit mb-2 border-blue-500" variant="outline">
                  Гайды
                </Badge>
                <CardTitle className="text-xl">Figma + AI: Полный гайд по автоматизации дизайна</CardTitle>
                <CardDescription>
                  Как использовать AI-плагины для ускорения работы в Figma
                </CardDescription>
              </CardHeader>
              <div className="px-6 pb-6">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/blog">Читать далее</Link>
                </Button>
              </div>
            </Card>

            <Card>
              <CardHeader>
                <Badge className="w-fit mb-2 border-green-500" variant="outline">
                  Инструменты
                </Badge>
                <CardTitle className="text-xl">Топ-10 AI инструментов для разработчиков</CardTitle>
                <CardDescription>
                  Обзор лучших AI-ассистентов для программирования в 2025
                </CardDescription>
              </CardHeader>
              <div className="px-6 pb-6">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/blog">Читать далее</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Efficiency Calculator */}
      <div className="section-calculator relative z-[3]">
        <div className="container">
          <AIEfficiencyCalculator />
        </div>
      </div>

      {/* FAQ Section */}
      <div className="section-faq relative z-[3]">
        <div className="container">
          <AIFaq />
        </div>
      </div>
    </div>
  )
}
