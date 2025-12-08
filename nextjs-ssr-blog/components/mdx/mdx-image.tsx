'use client'

import Image from 'next/image'
import { useState } from 'react'
import { cn } from '@/lib/utils'

interface MDXImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  caption?: string
  priority?: boolean
}

export function MDXImage({
  src,
  alt,
  width = 1200,
  height = 630,
  caption,
  priority = false,
}: MDXImageProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <figure className="my-8">
        <div
          className="relative overflow-hidden rounded-lg border border-border cursor-zoom-in transition-transform hover:scale-[1.02]"
          onClick={() => setIsOpen(true)}
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="w-full h-auto"
            priority={priority}
          />
        </div>
        {caption && (
          <figcaption className="mt-2 text-center text-sm text-muted-foreground">
            {caption}
          </figcaption>
        )}
      </figure>

      {/* Lightbox */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 cursor-zoom-out"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative max-h-[90vh] max-w-[90vw]">
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              className="h-auto w-auto max-h-[90vh] max-w-[90vw] object-contain"
            />
          </div>
        </div>
      )}
    </>
  )
}
