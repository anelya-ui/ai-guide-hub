'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { CheckCircle2, Clock, TrendingUp } from 'lucide-react'

interface ProfessionData {
  id: string
  name: string
  timeSavings: string
  tasks: string[]
  productivity: number
}

const professions: ProfessionData[] = [
  {
    id: 'ui-ux',
    name: 'UI/UX Дизайнер',
    timeSavings: '10-12 часов в неделю',
    tasks: [
      'Генерация вариантов дизайна и прототипов',
      'Создание копирайтинга для интерфейсов'
    ],
    productivity: 40
  },
  {
    id: 'frontend',
    name: 'Frontend Разработчик',
    timeSavings: '12-18 часов в неделю',
    tasks: [
      'Генерация и рефакторинг кода',
      'Отладка и исправление ошибок',
      'Написание документации и тестов'
    ],
    productivity: 35
  },
  {
    id: 'backend',
    name: 'Backend Разработчик',
    timeSavings: '10-15 часов в неделю',
    tasks: [
      'Оптимизация запросов к базе данных',
      'Создание API endpoints',
      'Код-ревью и тестирование'
    ],
    productivity: 30
  },
  {
    id: 'mobile',
    name: 'Mobile Разработчик',
    timeSavings: '12-16 часов в неделю',
    tasks: [
      'Адаптация UI под разные экраны',
      'Решение платформо-специфичных задач',
      'Тестирование на разных устройствах'
    ],
    productivity: 35
  },
  {
    id: 'data-analyst',
    name: 'Data Analyst',
    timeSavings: '18-25 часов в неделю',
    tasks: [
      'Анализ и визуализация данных',
      'Создание отчетов и презентаций',
      'Написание SQL-запросов и скриптов'
    ],
    productivity: 45
  },
  {
    id: 'copywriter',
    name: 'Копирайтер',
    timeSavings: '20-30 часов в неделю',
    tasks: [
      'Генерация идей и черновиков текстов',
      'SEO-оптимизация контента',
      'Редактирование и улучшение текстов'
    ],
    productivity: 50
  }
]

export function AIEfficiencyCalculator() {
  const [selectedProfession, setSelectedProfession] = useState<string>('')
  const [showResults, setShowResults] = useState(false)

  const currentProfession = professions.find(p => p.id === selectedProfession)

  const handleProfessionChange = (value: string) => {
    setSelectedProfession(value)
    setShowResults(false)

    // Trigger animation after a short delay
    setTimeout(() => {
      setShowResults(true)
    }, 100)
  }

  return (
    <section className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">
          Узнайте, сколько времени AI сэкономит в вашей работе
        </h2>
        <p className="text-lg text-muted-foreground">
          Выберите свою профессию и получите персональный расчет эффективности
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Калькулятор эффективности AI</CardTitle>
            <CardDescription>
              Выберите вашу профессию из списка ниже
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Select value={selectedProfession} onValueChange={handleProfessionChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Выберите профессию..." />
              </SelectTrigger>
              <SelectContent>
                {professions.map((profession) => (
                  <SelectItem key={profession.id} value={profession.id}>
                    {profession.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {!showResults && !selectedProfession && (
              <div className="text-center py-12 text-muted-foreground">
                <p className="text-lg">Выберите профессию для расчета</p>
              </div>
            )}

            {showResults && currentProfession && (
              <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
                {/* Left Column - Info */}
                <div className="space-y-6">
                  {/* Time Savings */}
                  <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Экономия времени</h3>
                      <p className="text-2xl font-bold text-primary">
                        {currentProfession.timeSavings}
                      </p>
                    </div>
                  </div>

                  {/* Key Tasks */}
                  <div>
                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      Ключевые задачи, которые AI ускорит:
                    </h3>
                    <ul className="space-y-2">
                      {currentProfession.tasks.map((task, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2"
                          style={{
                            animation: `slide-up 0.5s ease-out ${index * 0.1}s both`
                          }}
                        >
                          <span className="text-primary mt-1">•</span>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Productivity Increase */}
                  <div className="flex items-start gap-4 p-4 bg-accent/5 rounded-lg border border-accent/20">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Рост продуктивности</h3>
                      <p className="text-2xl font-bold text-accent">
                        +{currentProfession.productivity}%
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column - Chart */}
                <div className="flex flex-col">
                  <h3 className="font-semibold text-lg mb-4 text-center">
                    График роста продуктивности
                  </h3>
                  <div className="flex-1 relative p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg border border-white/20">
                    {/* Y-axis labels */}
                    <div className="absolute left-2 top-6 bottom-6 flex flex-col justify-between text-xs text-muted-foreground">
                      <span>100%</span>
                      <span>75%</span>
                      <span>50%</span>
                      <span>25%</span>
                      <span>0%</span>
                    </div>

                    {/* Chart area */}
                    <div className="ml-8 h-full relative">
                      {/* Grid lines */}
                      <div className="absolute inset-0 flex flex-col justify-between">
                        {[0, 1, 2, 3, 4].map((i) => (
                          <div key={i} className="border-t border-white/10" />
                        ))}
                      </div>

                      {/* Line chart */}
                      <svg className="w-full h-full" viewBox="0 0 300 200" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="rgb(59, 130, 246)" />
                            <stop offset="100%" stopColor="rgb(168, 85, 247)" />
                          </linearGradient>
                          <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="rgba(168, 85, 247, 0.3)" />
                            <stop offset="100%" stopColor="rgba(168, 85, 247, 0)" />
                          </linearGradient>
                        </defs>

                        {/* Area under the line */}
                        <path
                          d={`M 0 200 L 0 ${200 - (0 * 2)} L 75 ${200 - (currentProfession.productivity * 0.5 * 2)} L 150 ${200 - (currentProfession.productivity * 0.75 * 2)} L 225 ${200 - (currentProfession.productivity * 0.9 * 2)} L 300 ${200 - (currentProfession.productivity * 2)} L 300 200 Z`}
                          fill="url(#areaGradient)"
                          opacity="0.5"
                        />

                        {/* Main line */}
                        <polyline
                          points={`0,200 75,${200 - (currentProfession.productivity * 0.5 * 2)} 150,${200 - (currentProfession.productivity * 0.75 * 2)} 225,${200 - (currentProfession.productivity * 0.9 * 2)} 300,${200 - (currentProfession.productivity * 2)}`}
                          fill="none"
                          stroke="url(#lineGradient)"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{
                            strokeDasharray: 1000,
                            strokeDashoffset: 1000,
                            animation: 'drawLine 1.5s ease-out forwards'
                          }}
                        />

                        {/* Data points */}
                        {[
                          { x: 0, y: 200 },
                          { x: 75, y: 200 - (currentProfession.productivity * 0.5 * 2) },
                          { x: 150, y: 200 - (currentProfession.productivity * 0.75 * 2) },
                          { x: 225, y: 200 - (currentProfession.productivity * 0.9 * 2) },
                          { x: 300, y: 200 - (currentProfession.productivity * 2) }
                        ].map((point, i) => (
                          <circle
                            key={i}
                            cx={point.x}
                            cy={point.y}
                            r="4"
                            fill="rgb(168, 85, 247)"
                            style={{
                              opacity: 0,
                              animation: `fadeIn 0.5s ease-out ${0.3 + i * 0.3}s forwards`
                            }}
                          />
                        ))}
                      </svg>

                      {/* X-axis labels */}
                      <div className="flex justify-between text-xs text-muted-foreground mt-2">
                        <span>Без AI</span>
                        <span>1 мес</span>
                        <span>3 мес</span>
                        <span>6 мес</span>
                        <span>1 год</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Button - Full Width */}
                <div className="md:col-span-2 text-center pt-4">
                  <Button size="lg" className="w-full sm:w-auto">
                    Начать использовать AI инструменты
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
