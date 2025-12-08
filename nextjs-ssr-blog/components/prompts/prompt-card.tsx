'use client'

import { useState } from 'react'
import { Copy, Check, Eye, Star, FileText } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { type Prompt, toolIcons } from '@/lib/prompts-data'
import { toast } from 'sonner'

interface PromptCardProps {
  prompt: Prompt
}

export function PromptCard({ prompt }: PromptCardProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(prompt.content)
      setCopied(true)
      toast.success('Промпт скопирован в буфер обмена!')
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      toast.error('Не удалось скопировать промпт')
    }
  }

  // Preview of the prompt (first 100 characters)
  const promptPreview = prompt.content.length > 100
    ? prompt.content.substring(0, 100) + '...'
    : prompt.content

  return (
    <div className="group relative p-6 rounded-xl border border-border bg-card hover:border-accent transition-all duration-300 hover:shadow-lg">
      {/* Category, Status Badges and Tool */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="outline" className="text-xs">
            {prompt.category}
          </Badge>
          {prompt.isFeatured && (
            <Badge className="bg-primary text-white text-xs">
              Популярный
            </Badge>
          )}
          {prompt.isNew && (
            <Badge className="bg-green-500 text-white text-xs">
              Новый
            </Badge>
          )}
        </div>
        <div className="text-xl flex-shrink-0 ml-2">
          {toolIcons[prompt.tool]}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold mb-2 text-foreground">
        {prompt.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-4">
        {prompt.description}
      </p>

      {/* Prompt Preview */}
      <div className="relative mb-4 p-3 rounded-lg bg-muted/50 border border-border">
        <p className="text-sm font-mono text-muted-foreground line-clamp-2">
          {promptPreview}
        </p>
        <div className="absolute top-2 right-2">
          <FileText className="w-4 h-4 text-muted-foreground/50" />
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {prompt.tags.map((tag) => (
          <Badge key={tag} variant="outline" className="text-xs">
            #{tag}
          </Badge>
        ))}
      </div>

      {/* Stats and Action */}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        {/* Stats */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Eye className="w-4 h-4" />
            <span>{prompt.views}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500" />
            <span>{prompt.rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Copy className="w-4 h-4" />
            <span>{prompt.copies}</span>
          </div>
        </div>

        {/* Copy Button */}
        <Button
          onClick={copyToClipboard}
          disabled={copied}
          className="gap-2"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              Скопировано
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              Скопировать
            </>
          )}
        </Button>
      </div>
    </div>
  )
}
