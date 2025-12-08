# Next.js SSR Blog Platform

A modern, full-featured blog platform built with Next.js 14, TypeScript, MDX, and TailwindCSS.

## Features

- ⚡ **Next.js 14** with App Router and Server-Side Rendering
- 📝 **MDX Support** for rich content with React components
- 🎨 **TailwindCSS** with dark/light mode
- 🔍 **Full-text Search** with Fuse.js
- 🤖 **AI Integration** for SEO and content optimization
- 💬 **Giscus Comments** powered by GitHub Discussions
- 🔐 **Admin Panel** with NextAuth.js authentication
- 📊 **Analytics** ready (Vercel Analytics)
- ♿ **Accessible** - WCAG 2.1 AA compliant
- 🚀 **Performance Optimized** - Lighthouse score ≥90

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript 5.x
- **Styling:** TailwindCSS 3.x
- **Content:** MDX 3.x with next-mdx-remote
- **Database:** PostgreSQL with Prisma ORM
- **Authentication:** NextAuth.js
- **Search:** Fuse.js
- **AI:** OpenAI API (GPT-4)
- **Comments:** Giscus
- **Newsletter:** Buttondown

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL database (or use Vercel Postgres)
- GitHub account (for OAuth and comments)

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd nextjs-ssr-blog
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Set up environment variables:
\`\`\`bash
cp .env.example .env.local
\`\`\`

Then edit `.env.local` with your configuration values.

4. Set up the database:
\`\`\`bash
npx prisma db push
npx prisma generate
\`\`\`

5. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

\`\`\`
src/
├── app/                    # Next.js App Router pages
│   ├── (blog)/            # Public blog routes
│   ├── admin/             # Admin panel
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   ├── ui/                # Base UI components
│   ├── layout/            # Header, Footer
│   ├── blog/              # Blog components
│   ├── mdx/               # MDX components
│   └── admin/             # Admin components
├── content/posts/         # MDX blog posts
├── lib/                   # Utilities
├── hooks/                 # Custom hooks
├── types/                 # TypeScript types
└── config/                # Configuration
\`\`\`

## Development Phases

### ✅ Phase 1: Foundation (Complete)
- Next.js project setup
- TailwindCSS configuration
- Base UI components
- Theme system (dark/light)
- Header & Footer

### 🚧 Phase 2: Content Infrastructure (In Progress)
- MDX processing
- Frontmatter parsing
- Content utilities
- MDX components

### 📋 Upcoming Phases
- Phase 3: Public Pages
- Phase 4: Features (Search, TOC, Share buttons)
- Phase 5: Database & Admin Setup
- Phase 6: Admin Features
- Phase 7: AI Integration
- Phase 8: SEO & Performance
- Phase 9: Testing
- Phase 10: Deployment

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Environment Variables

See `.env.example` for all required environment variables.

Key variables:
- `DATABASE_URL` - PostgreSQL connection string
- `NEXTAUTH_SECRET` - Secret for NextAuth.js
- `GITHUB_ID` & `GITHUB_SECRET` - GitHub OAuth credentials
- `OPENAI_API_KEY` - OpenAI API key for AI features

## Performance Targets

- Lighthouse Performance: ≥ 90
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

## License

MIT

## Author

Your Name - [your.email@example.com](mailto:your.email@example.com)

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components inspired by [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
