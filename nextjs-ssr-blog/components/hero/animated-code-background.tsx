'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

// Extensive character set for digital rain effect
const codeSnippets = [
  // Symbols
  '{', '}', '[', ']', '<', '>', '(', ')', ';', ':', '.', ',', '+', '-', '*', '/', '=', '"', "'", '|', '\\', '&', '%', '#', '@', '!', '?', '~', '^', '$',
  // Numbers
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  // Letters
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  // Code keywords
  'AI', 'ML', 'API', 'CSS', 'JS', 'TS', 'fn', 'const', 'let', 'var', 'if', 'for', 'async', 'await',
]

// Color palettes for light and dark themes
const colorPalettes = {
  light: {
    primary: '#9ca3af', // Muted gray-purple for light theme
    secondary: '#a5b4fc', // Soft indigo for light theme
    shadowPrimary: 'rgba(156, 163, 175, 0.3)',
    shadowSecondary: 'rgba(165, 180, 252, 0.3)',
  },
  dark: {
    primary: '#a78bfa', // Original lighter purple for dark theme
    secondary: '#c084fc',
    shadowPrimary: 'rgba(167, 139, 250, 0.6)',
    shadowSecondary: 'rgba(192, 132, 252, 0.6)',
  },
}

interface StaticCode {
  id: number
  text: string
  left: number
  top: number
  opacity: number
  delay: number
  duration: number
  colorIndex: number // 0 or 1 for color selection
  fontSize: number
}

export function AnimatedCodeBackground() {
  const [codeElements, setCodeElements] = useState<StaticCode[]>([])
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const elements: StaticCode[] = []

    // Create 150 blinking symbols across the entire space
    for (let i = 0; i < 150; i++) {
      elements.push({
        id: i,
        text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
        left: Math.random() * 100,
        top: Math.random() * 100,
        opacity: Math.random() * 0.3 + 0.2, // 0.2-0.5
        delay: Math.random() * 5,
        duration: Math.random() * 2 + 3, // 3-5s
        colorIndex: Math.random() > 0.5 ? 0 : 1,
        fontSize: Math.random() > 0.7 ? 14 : 11,
      })
    }

    setCodeElements(elements)
  }, [])

  // Get colors based on current theme
  const palette = theme === 'dark' ? colorPalettes.dark : colorPalettes.light
  const isLight = theme !== 'dark'

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Dark Space Background */}
      <div className="absolute inset-0 bg-space-dark" />

      {/* Massive Purple Neon Gradient from bottom center */}
      <div
        className="absolute inset-x-0 bottom-0 h-[80%]"
        style={{
          background: isLight
            ? 'radial-gradient(ellipse 80% 70% at 50% 100%, rgba(165, 180, 252, 0.12) 0%, rgba(139, 92, 246, 0.08) 20%, rgba(99, 102, 241, 0.05) 40%, transparent 70%)'
            : 'radial-gradient(ellipse 80% 70% at 50% 100%, rgba(139, 92, 246, 0.4) 0%, rgba(99, 102, 241, 0.3) 20%, rgba(79, 70, 229, 0.2) 40%, transparent 70%)',
          filter: isLight ? 'blur(80px)' : 'blur(60px)',
        }}
      />

      {/* Additional purple glow layers for depth */}
      <div
        className="absolute inset-x-0 bottom-0 h-[60%]"
        style={{
          background: isLight
            ? 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(165, 180, 252, 0.1) 0%, rgba(139, 92, 246, 0.06) 30%, transparent 60%)'
            : 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(168, 85, 247, 0.3) 0%, rgba(139, 92, 246, 0.2) 30%, transparent 60%)',
          filter: isLight ? 'blur(60px)' : 'blur(40px)',
        }}
      />

      <div
        className="absolute inset-x-0 bottom-0 h-[40%]"
        style={{
          background: isLight
            ? 'radial-gradient(ellipse 50% 40% at 50% 100%, rgba(165, 180, 252, 0.08) 0%, rgba(139, 92, 246, 0.04) 40%, transparent 70%)'
            : 'radial-gradient(ellipse 50% 40% at 50% 100%, rgba(192, 132, 252, 0.25) 0%, rgba(168, 85, 247, 0.15) 40%, transparent 70%)',
          filter: isLight ? 'blur(50px)' : 'blur(30px)',
        }}
      />

      {/* Digital Rain - Blinking Symbols */}
      <div className="absolute inset-0">
        {mounted && codeElements.map((element) => {
          const color = element.colorIndex === 0 ? palette.primary : palette.secondary
          const shadow = element.colorIndex === 0 ? palette.shadowPrimary : palette.shadowSecondary

          return (
            <div
              key={element.id}
              className="absolute font-mono whitespace-nowrap animate-cosmic-blink z-[1]"
              style={{
                left: `${element.left}%`,
                top: `${element.top}%`,
                animationDelay: `${element.delay}s`,
                animationDuration: `${element.duration}s`,
                fontSize: `${element.fontSize}px`,
                opacity: element.opacity,
                color: color,
                filter: 'blur(0.5px)',
                textShadow: `0 0 10px ${shadow}`,
              }}
            >
              {element.text}
            </div>
          )
        })}
      </div>
    </div>
  )
}
