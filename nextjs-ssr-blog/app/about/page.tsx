import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function AboutPage() {
  return (
    <div className="container py-12">
      {/* Header Section */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="mb-4" variant="secondary">
            👋 About Us
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            About This Blog
          </h1>
          <p className="text-xl text-muted-foreground">
            A modern, performant blog platform built with cutting-edge web technologies.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="mx-auto max-w-4xl py-6">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h2>Our Mission</h2>
          <p>
            We&apos;re dedicated to sharing high-quality content about web development, technology trends,
            and best practices. Our blog is built with Next.js 14, leveraging the latest features
            like Server-Side Rendering (SSR) and Incremental Static Regeneration (ISR) to deliver
            lightning-fast performance.
          </p>

          <h2>Technology Stack</h2>
          <p>
            This blog is built using modern web technologies to ensure the best possible experience
            for our readers:
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mt-8">
          <Card>
            <CardHeader>
              <CardTitle>⚡ Next.js 14</CardTitle>
              <CardDescription>
                App Router with Server Components for optimal performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Leveraging SSR and ISR for fast page loads and SEO optimization.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>🎨 TailwindCSS</CardTitle>
              <CardDescription>
                Utility-first CSS framework with custom design system
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Beautiful, responsive design with dark mode support out of the box.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>📝 MDX</CardTitle>
              <CardDescription>
                Markdown with JSX support for rich content
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Write content in Markdown while embedding React components seamlessly.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>🔍 Search & SEO</CardTitle>
              <CardDescription>
                Full-text search and optimized metadata
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Fast client-side search with Fuse.js and comprehensive SEO optimization.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="prose prose-gray dark:prose-invert max-w-none mt-12">
          <h2>Features</h2>
          <ul>
            <li>Server-Side Rendering (SSR) for optimal performance and SEO</li>
            <li>Incremental Static Regeneration (ISR) for fresh content</li>
            <li>Dark mode support with system preference detection</li>
            <li>Full-text search functionality</li>
            <li>MDX support for rich, interactive content</li>
            <li>Responsive design that works on all devices</li>
            <li>AI-powered content optimization</li>
            <li>GitHub Discussions integration for comments</li>
          </ul>

          <h2>Get in Touch</h2>
          <p>
            We&apos;d love to hear from you! Whether you have questions, suggestions, or just want to
            say hello, feel free to reach out through our GitHub repository or social media channels.
          </p>
        </div>
      </section>
    </div>
  )
}
