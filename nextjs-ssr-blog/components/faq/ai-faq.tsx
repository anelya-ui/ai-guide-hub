'use client'

import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { MessageCircle } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: 'Заменит ли AI мою работу?',
    answer:
      'AI не заменит вас, но специалист с AI заменит специалиста без AI. Изучайте инструменты и оставайтесь востребованными.',
  },
  {
    question: 'Сложно ли изучить AI-инструменты?',
    answer:
      'Базовые навыки можно освоить за 1-2 недели. Главное - постоянная практика и правильные гайды.',
  },
  {
    question: 'Какой AI-инструмент изучать первым?',
    answer:
      'Начните с ChatGPT или Claude для работы с текстами, затем переходите к специализированным инструментам вашей сферы.',
  },
  {
    question: 'Можно ли доверять результатам AI?',
    answer:
      'AI - это помощник, а не замена критическому мышлению. Всегда проверяйте и адаптируйте результаты.',
  },
  {
    question: 'Нужно ли знать программирование для работы с AI?',
    answer:
      'Нет, современные AI-инструменты имеют простые интерфейсы. Промпт-инжиниринг важнее программирования.',
  },
  {
    question: 'Сколько стоит использование AI?',
    answer:
      'Многие инструменты имеют бесплатные планы. Платные версии окупаются экономией времени уже через месяц использования.',
  },
]

export function AIFaq() {
  return (
    <section className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">
          Часто задаваемые вопросы об AI
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Развенчиваем мифы и отвечаем на популярные вопросы новичков
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-8">
          <Button size="lg" variant="outline">
            <MessageCircle className="mr-2 h-5 w-5" />
            Задать свой вопрос
          </Button>
        </div>
      </div>
    </section>
  )
}
