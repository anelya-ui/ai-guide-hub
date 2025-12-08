'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { AlertTriangle, Home, RotateCcw } from 'lucide-react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Error:', error)
  }, [error])

  return (
    <div className="container flex items-center justify-center min-h-[70vh] py-12">
      <div className="max-w-md text-center">
        <div className="flex justify-center mb-6">
          <div className="rounded-full bg-destructive/10 p-6">
            <AlertTriangle className="h-12 w-12 text-destructive" />
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-4">Something went wrong!</h1>
        <p className="text-muted-foreground text-lg mb-8">
          We&apos;re sorry, but something unexpected happened. Please try again or return to the homepage.
        </p>

        {error.message && (
          <div className="bg-muted p-4 rounded-lg mb-6 text-sm text-left">
            <p className="font-mono text-destructive">{error.message}</p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset}>
            <RotateCcw className="mr-2 h-4 w-4" />
            Try Again
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
