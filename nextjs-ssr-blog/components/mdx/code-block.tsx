'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface CodeBlockProps {
  children: string
  className?: string
  language?: string
  showLineNumbers?: boolean
}

export function CodeBlock({
  children,
  className,
  language,
  showLineNumbers = false,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(children)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Extract language from className (e.g., "language-javascript")
  const lang = language || className?.replace(/language-/, '') || 'text'

  return (
    <div className="group relative">
      {/* Language label and copy button */}
      <div className="flex items-center justify-between px-4 py-2 bg-muted border border-border rounded-t-lg">
        <span className="text-xs font-mono text-muted-foreground uppercase">
          {lang}
        </span>
        <Button
          variant="ghost"
          size="sm"
          onClick={copyToClipboard}
          className="h-8 px-2 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Code content */}
      <pre
        className={cn(
          'overflow-x-auto rounded-b-lg border border-t-0 border-border bg-muted p-4',
          'scrollbar-thin',
          showLineNumbers && 'pl-12'
        )}
      >
        <code className={cn('text-sm font-mono', className)}>{children}</code>
      </pre>
    </div>
  )
}
