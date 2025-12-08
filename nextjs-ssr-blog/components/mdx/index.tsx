import { MDXComponents } from 'mdx/types'
import Link from 'next/link'
import { CodeBlock } from './code-block'
import { Callout } from './callout'
import { MDXImage } from './mdx-image'

export const mdxComponents: MDXComponents = {
  // Headings
  h1: ({ children }) => (
    <h1 className="text-4xl font-bold mt-8 mb-4 scroll-mt-20">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-3xl font-bold mt-8 mb-4 scroll-mt-20">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-2xl font-semibold mt-6 mb-3 scroll-mt-20">{children}</h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-xl font-semibold mt-4 mb-2 scroll-mt-20">{children}</h4>
  ),

  // Paragraphs
  p: ({ children }) => <p className="my-4 leading-7">{children}</p>,

  // Links
  a: ({ href, children }) => (
    <Link
      href={href || '#'}
      className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
    >
      {children}
    </Link>
  ),

  // Lists
  ul: ({ children }) => (
    <ul className="my-4 ml-6 list-disc [&>li]:mt-2">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="my-4 ml-6 list-decimal [&>li]:mt-2">{children}</ol>
  ),
  li: ({ children }) => <li className="leading-7">{children}</li>,

  // Code
  code: ({ children, className }) => {
    const isInline = !className
    if (isInline) {
      return (
        <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">
          {children}
        </code>
      )
    }
    return <CodeBlock className={className}>{String(children)}</CodeBlock>
  },

  pre: ({ children }) => <>{children}</>,

  // Blockquotes
  blockquote: ({ children }) => (
    <blockquote className="my-6 border-l-4 border-primary/50 pl-6 italic text-muted-foreground">
      {children}
    </blockquote>
  ),

  // Tables
  table: ({ children }) => (
    <div className="my-6 w-full overflow-x-auto">
      <table className="w-full border-collapse">{children}</table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-muted">{children}</thead>
  ),
  tbody: ({ children }) => <tbody>{children}</tbody>,
  tr: ({ children }) => (
    <tr className="border-b border-border">{children}</tr>
  ),
  th: ({ children }) => (
    <th className="px-4 py-2 text-left font-semibold">{children}</th>
  ),
  td: ({ children }) => <td className="px-4 py-2">{children}</td>,

  // Horizontal rule
  hr: () => <hr className="my-8 border-border" />,

  // Images
  img: ({ src, alt }) => (
    <MDXImage src={src || ''} alt={alt || ''} />
  ),

  // Custom components
  Callout,
  CodeBlock,
  Image: MDXImage,
}

export { CodeBlock, Callout, MDXImage }
