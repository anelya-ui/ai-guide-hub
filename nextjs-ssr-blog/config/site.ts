export const siteConfig = {
  name: 'AI Guide Hub',
  description:
    'Платформа с гайдами, промптами и AI-ресурсами для IT-специалистов',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  ogImage: '/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/yourusername',
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
  },
  author: {
    name: 'Your Name',
    bio: 'Full-stack developer passionate about web technologies and sharing knowledge through writing.',
    avatar: '/avatar.jpg',
    email: 'your.email@example.com',
  },
  navigation: [
    {
      title: 'Главная',
      href: '/',
    },
    {
      title: 'Гайды',
      href: '/guides',
    },
    {
      title: 'Блог',
      href: '/blog',
    },
    {
      title: 'Промпты',
      href: '/prompts',
    },
    {
      title: 'Инструменты',
      href: '/tools',
    },
    {
      title: 'AI Курсы',
      href: '/courses',
    },
  ],
}

export type SiteConfig = typeof siteConfig
