'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { siteConfig } from '@/config/site'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-[#1a1a3a]/90 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2 text-sm font-medium">
          {siteConfig.navigation.map((item) => {
            const active = isActive(item.href)
            return active ? (
              <Button
                key={item.href}
                asChild
                size="sm"
                className="bg-accent text-white hover:bg-accent/90"
              >
                <Link href={item.href}>
                  {item.title}
                </Link>
              </Button>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-md transition-colors hover:text-primary hover:bg-accent/10"
              >
                {item.title}
              </Link>
            )
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          <ThemeToggle />

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t">
          <nav className="container flex flex-col space-y-2 py-4">
            {siteConfig.navigation.map((item) => {
              const active = isActive(item.href)
              return active ? (
                <Button
                  key={item.href}
                  asChild
                  size="sm"
                  className="bg-accent text-white hover:bg-accent/90 justify-start"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link href={item.href}>
                    {item.title}
                  </Link>
                </Button>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary hover:bg-accent/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              )
            })}
          </nav>
        </div>
      )}
    </header>
  )
}
