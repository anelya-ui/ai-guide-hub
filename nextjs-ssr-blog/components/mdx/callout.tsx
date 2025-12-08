import { AlertCircle, AlertTriangle, CheckCircle, Info, Lightbulb } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CalloutProps {
  type?: 'info' | 'warning' | 'error' | 'success' | 'tip'
  title?: string
  children: React.ReactNode
}

const calloutConfig = {
  info: {
    icon: Info,
    className: 'border-blue-500/50 bg-blue-500/10 text-blue-700 dark:text-blue-400',
    iconClassName: 'text-blue-500',
  },
  warning: {
    icon: AlertTriangle,
    className: 'border-yellow-500/50 bg-yellow-500/10 text-yellow-700 dark:text-yellow-400',
    iconClassName: 'text-yellow-500',
  },
  error: {
    icon: AlertCircle,
    className: 'border-red-500/50 bg-red-500/10 text-red-700 dark:text-red-400',
    iconClassName: 'text-red-500',
  },
  success: {
    icon: CheckCircle,
    className: 'border-green-500/50 bg-green-500/10 text-green-700 dark:text-green-400',
    iconClassName: 'text-green-500',
  },
  tip: {
    icon: Lightbulb,
    className: 'border-purple-500/50 bg-purple-500/10 text-purple-700 dark:text-purple-400',
    iconClassName: 'text-purple-500',
  },
}

export function Callout({ type = 'info', title, children }: CalloutProps) {
  const config = calloutConfig[type]
  const Icon = config.icon

  return (
    <div
      className={cn(
        'my-6 rounded-lg border-l-4 p-4',
        config.className
      )}
    >
      <div className="flex gap-3">
        <Icon className={cn('h-5 w-5 flex-shrink-0 mt-0.5', config.iconClassName)} />
        <div className="flex-1">
          {title && (
            <p className="mb-2 font-semibold">{title}</p>
          )}
          <div className="text-sm [&>p]:my-0">{children}</div>
        </div>
      </div>
    </div>
  )
}
