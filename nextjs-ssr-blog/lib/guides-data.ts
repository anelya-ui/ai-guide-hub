import { Guide } from '@/types/guide'

export const mockGuides: Guide[] = [
  {
    id: '1',
    title: 'Как использовать ChatGPT для написания эффективного кода',
    description: 'Подробный гайд по использованию ChatGPT для генерации, рефакторинга и оптимизации кода. Лучшие практики и примеры промптов.',
    category: 'programming',
    difficulty: 'beginner',
    readTime: 12,
    tools: ['ChatGPT', 'GitHub Copilot'],
    author: {
      name: 'Александр Иванов',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=alex'
    },
    publishedAt: '2024-11-28',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
    slug: 'chatgpt-for-coding',
    views: 2453
  },
  {
    id: '2',
    title: 'Создание UI-дизайна с помощью Figma и AI плагинов',
    description: 'Узнайте, как использовать AI-плагины в Figma для ускорения процесса дизайна интерфейсов.',
    category: 'design-ai',
    difficulty: 'intermediate',
    readTime: 18,
    tools: ['Figma', 'ChatGPT'],
    author: {
      name: 'Мария Петрова',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=maria'
    },
    publishedAt: '2024-11-27',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop',
    slug: 'figma-ai-design',
    views: 1876
  },
  {
    id: '3',
    title: 'Анализ данных с помощью Claude: от базового к продвинутому',
    description: 'Полное руководство по использованию Claude для анализа данных, визуализации и генерации инсайтов.',
    category: 'data-analysis',
    difficulty: 'advanced',
    readTime: 25,
    tools: ['Claude'],
    author: {
      name: 'Дмитрий Смирнов',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=dmitry'
    },
    publishedAt: '2024-11-26',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
    slug: 'claude-data-analysis',
    views: 3201
  },
  {
    id: '4',
    title: 'Midjourney для создания контента: полное руководство',
    description: 'Научитесь создавать потрясающие изображения для блога, соцсетей и маркетинговых материалов.',
    category: 'content',
    difficulty: 'beginner',
    readTime: 15,
    tools: ['Midjourney'],
    author: {
      name: 'Елена Козлова',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=elena'
    },
    publishedAt: '2024-11-25',
    image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&h=400&fit=crop',
    slug: 'midjourney-content-creation',
    views: 2987
  },
  {
    id: '5',
    title: 'Автоматизация рабочего процесса с помощью AI',
    description: 'Как использовать AI-инструменты для автоматизации рутинных задач и повышения продуктивности.',
    category: 'productivity',
    difficulty: 'intermediate',
    readTime: 20,
    tools: ['ChatGPT', 'Claude'],
    author: {
      name: 'Игорь Волков',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=igor'
    },
    publishedAt: '2024-11-24',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=400&fit=crop',
    slug: 'ai-workflow-automation',
    views: 1654
  },
  {
    id: '6',
    title: 'GitHub Copilot: советы и трюки для разработчиков',
    description: 'Максимизируйте эффективность работы с GitHub Copilot. Секретные команды и лучшие практики.',
    category: 'programming',
    difficulty: 'intermediate',
    readTime: 14,
    tools: ['GitHub Copilot'],
    author: {
      name: 'Сергей Новиков',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sergey'
    },
    publishedAt: '2024-11-23',
    image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800&h=400&fit=crop',
    slug: 'github-copilot-tips',
    views: 2234
  },
  {
    id: '7',
    title: 'Создание промптов для генерации качественного контента',
    description: 'Искусство создания эффективных промптов для написания статей, постов и маркетинговых текстов.',
    category: 'content',
    difficulty: 'beginner',
    readTime: 10,
    tools: ['ChatGPT', 'Claude'],
    author: {
      name: 'Анна Федорова',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=anna'
    },
    publishedAt: '2024-11-22',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=400&fit=crop',
    slug: 'prompts-for-content',
    views: 3445
  },
  {
    id: '8',
    title: 'AI для дизайна: тренды 2024 года',
    description: 'Обзор современных AI-инструментов для дизайна и их применение в реальных проектах.',
    category: 'design-ai',
    difficulty: 'beginner',
    readTime: 8,
    tools: ['Figma', 'Midjourney'],
    author: {
      name: 'Ольга Соколова',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=olga'
    },
    publishedAt: '2024-11-21',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=400&fit=crop',
    slug: 'ai-design-trends-2024',
    views: 1932
  }
]

export const topGuides = mockGuides
  .sort((a, b) => (b.views || 0) - (a.views || 0))
  .slice(0, 10)
