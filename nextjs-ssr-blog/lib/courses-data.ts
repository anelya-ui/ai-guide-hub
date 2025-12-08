export type CourseLevel = 'Начинающий' | 'Средний' | 'Продвинутый'

export type CourseDirection =
  | 'Основы AI и ML'
  | 'Работа с ChatGPT/Claude'
  | 'AI в дизайне'
  | 'AI в программировании'
  | 'Промпт-инжиниринг'
  | 'AI в аналитике данных'

export type CourseDuration = 'Быстрые' | 'Средние' | 'Полные'

export type CourseFormat = 'Видео + текст' | 'Только текст' | 'С практикой' | 'С сертификатом'

export interface Course {
  id: number
  title: string
  description: string
  level: CourseLevel
  direction: CourseDirection
  lessonsCount: number
  duration: number // in hours
  rating: number
  reviewsCount: number
  studentsCount: number
  price: number // 0 for free
  coverImage: string
  formats: CourseFormat[]
  progress?: number // 0-100 if started
  isPopular?: boolean
  isRecommended?: boolean
  isNew?: boolean
  courseUrl?: string
  provider?: string
}

export const courseLevels: Record<CourseLevel, number> = {
  'Начинающий': 5,
  'Средний': 5,
  'Продвинутый': 2,
}

export const courseDirections: Record<CourseDirection, number> = {
  'Основы AI и ML': 5,
  'Работа с ChatGPT/Claude': 2,
  'AI в дизайне': 2,
  'AI в программировании': 2,
  'Промпт-инжиниринг': 2,
  'AI в аналитике данных': 1,
}

export const courseDurations: CourseDuration[] = ['Быстрые', 'Средние', 'Полные']

export const courseFormats: CourseFormat[] = [
  'Видео + текст',
  'Только текст',
  'С практикой',
  'С сертификатом',
]

export const mockCourses: Course[] = [
  {
    id: 1,
    title: 'Основы работы с ChatGPT',
    description: 'Искусственный интеллект - Курс для новичков без сложных терминов от Skillbox',
    level: 'Начинающий',
    direction: 'Работа с ChatGPT/Claude',
    lessonsCount: 7,
    duration: 2,
    rating: 4.9,
    reviewsCount: 1523,
    studentsCount: 8456,
    price: 0,
    coverImage: '🤖',
    formats: ['Видео + текст', 'С практикой'],
    isPopular: true,
    courseUrl: 'https://skillbox.ru/course/ai/',
    provider: 'Skillbox',
  },
  {
    id: 2,
    title: 'Machine Learning с нуля',
    description: 'ИИ Старт от МФТИ - Практикоориентированный курс для решения реальных задач',
    level: 'Начинающий',
    direction: 'Основы AI и ML',
    lessonsCount: 12,
    duration: 6,
    rating: 4.8,
    reviewsCount: 2289,
    studentsCount: 12890,
    price: 0,
    coverImage: '🧠',
    formats: ['Видео + текст', 'С практикой', 'С сертификатом'],
    isRecommended: true,
    courseUrl: 'https://stepik.org/course/125587/promo',
    provider: 'Stepik',
  },
  {
    id: 3,
    title: 'AI в дизайне: полное руководство',
    description: 'Нейросети практический курс - Специалист по нейросетям и ИИ от Skillbox',
    level: 'Средний',
    direction: 'AI в дизайне',
    lessonsCount: 10,
    duration: 4,
    rating: 4.7,
    reviewsCount: 856,
    studentsCount: 3456,
    price: 0,
    coverImage: '🎨',
    formats: ['Видео + текст', 'С практикой', 'С сертификатом'],
    isPopular: true,
    courseUrl: 'https://skillbox.ru/course/neural-networks/',
    provider: 'Skillbox',
  },
  {
    id: 4,
    title: 'Мастерство промпт-инжиниринга',
    description: 'Нейросети для бизнеса - Продвинутый промпт-инжиниринг для кастомных GPT-агентов',
    level: 'Продвинутый',
    direction: 'Промпт-инжиниринг',
    lessonsCount: 15,
    duration: 8,
    rating: 4.9,
    reviewsCount: 567,
    studentsCount: 2345,
    price: 0,
    coverImage: '🎯',
    formats: ['Видео + текст', 'С практикой', 'С сертификатом'],
    isRecommended: true,
    courseUrl: 'https://skillbox.ru/course/nejroseti-dlya-biznesa/',
    provider: 'Skillbox',
  },
  {
    id: 5,
    title: 'Инженер машинного обучения',
    description: 'Start ML от Karpov Courses - Финальный проект - реальная задача из индустрии',
    level: 'Продвинутый',
    direction: 'Основы AI и ML',
    lessonsCount: 20,
    duration: 12,
    rating: 4.9,
    reviewsCount: 423,
    studentsCount: 1890,
    price: 0,
    coverImage: '💻',
    formats: ['Видео + текст', 'С практикой', 'С сертификатом'],
    isRecommended: true,
    courseUrl: 'https://karpov.courses/ml-start',
    provider: 'Karpov Courses',
  },
  {
    id: 6,
    title: 'Claude для аналитики данных',
    description: 'Используйте Claude для анализа больших объемов данных. Автоматизация отчетов и визуализация результатов.',
    level: 'Средний',
    direction: 'AI в аналитике данных',
    lessonsCount: 8,
    duration: 3,
    rating: 4.8,
    reviewsCount: 298,
    studentsCount: 1534,
    price: 0,
    coverImage: '📊',
    formats: ['Видео + текст', 'С практикой'],
    isNew: true,
    courseUrl: '#',
    provider: 'Собственный курс',
  },
  {
    id: 7,
    title: 'GitHub Copilot для разработчиков',
    description: 'Полный жизненный цикл модели машинного обучения от Яндекс Практикум',
    level: 'Средний',
    direction: 'AI в программировании',
    lessonsCount: 10,
    duration: 4,
    rating: 4.7,
    reviewsCount: 1012,
    studentsCount: 5678,
    price: 0,
    coverImage: '⚙️',
    formats: ['Видео + текст', 'С практикой'],
    isPopular: true,
    courseUrl: 'https://practicum.yandex.ru/machine-learning/',
    provider: 'Яндекс Практикум',
  },
  {
    id: 8,
    title: 'Data Science с Python',
    description: 'Обработка больших объемов данных от Skillfactory',
    level: 'Средний',
    direction: 'Основы AI и ML',
    lessonsCount: 16,
    duration: 10,
    rating: 4.6,
    reviewsCount: 734,
    studentsCount: 4123,
    price: 0,
    coverImage: '🐍',
    formats: ['Видео + текст', 'С практикой', 'С сертификатом'],
    courseUrl: 'https://skillfactory.ru/courses/iskustvennyy-intellekt',
    provider: 'Skillfactory',
  },
  {
    id: 9,
    title: 'Философия искусственного интеллекта',
    description: 'Сертификат от Московского государственного университета - Skillbox + МГУ',
    level: 'Начинающий',
    direction: 'Основы AI и ML',
    lessonsCount: 12,
    duration: 5,
    rating: 4.7,
    reviewsCount: 456,
    studentsCount: 3789,
    price: 0,
    coverImage: '🧩',
    formats: ['Видео + текст', 'С сертификатом'],
    courseUrl: 'https://skillbox.ru/course/aiphil/',
    provider: 'Skillbox + МГУ',
  },
  {
    id: 10,
    title: 'Машинное обучение',
    description: 'Персонализированные рекомендательные системы от Нетологии',
    level: 'Средний',
    direction: 'Основы AI и ML',
    lessonsCount: 14,
    duration: 8,
    rating: 4.5,
    reviewsCount: 823,
    studentsCount: 4567,
    price: 0,
    coverImage: '🔮',
    formats: ['Видео + текст', 'С практикой'],
    courseUrl: 'https://netology.ru/programs/machine-learn',
    provider: 'Нетология',
  },
  {
    id: 11,
    title: 'Deep Learning специализация',
    description: 'Компетенция экспертного уровня от Высшей школы экономики (OpenEdu)',
    level: 'Продвинутый',
    direction: 'AI в программировании',
    lessonsCount: 18,
    duration: 15,
    rating: 4.8,
    reviewsCount: 234,
    studentsCount: 1456,
    price: 0,
    coverImage: '🧬',
    formats: ['Видео + текст', 'С практикой', 'С сертификатом'],
    courseUrl: 'https://openedu.ru/course/hse/INTRML/',
    provider: 'ВШЭ (OpenEdu)',
  },
  {
    id: 12,
    title: 'AI Tools для продуктивности',
    description: 'Практическое применение AI в работе - освойте современные инструменты',
    level: 'Начинающий',
    direction: 'Промпт-инжиниринг',
    lessonsCount: 6,
    duration: 2,
    rating: 4.9,
    reviewsCount: 1289,
    studentsCount: 6234,
    price: 0,
    coverImage: '⚡',
    formats: ['Только текст', 'С практикой'],
    isNew: true,
    courseUrl: '#',
    provider: 'Собственный курс',
  },
]

export const recommendedCourses: Course[] = [
  mockCourses[1], // Machine Learning с нуля
  mockCourses[3], // Мастерство промпт-инжиниринга
  mockCourses[4], // Инженер машинного обучения
  mockCourses[0], // Основы работы с ChatGPT
  mockCourses[2], // AI в дизайне
]

export const popularThisWeek: Course[] = [
  mockCourses[0], // Основы работы с ChatGPT
  mockCourses[2], // AI в дизайне
  mockCourses[6], // GitHub Copilot
]
