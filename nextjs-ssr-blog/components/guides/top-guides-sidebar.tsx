import { Guide } from '@/types/guide'
import Link from 'next/link'
import { Eye, TrendingUp } from 'lucide-react'

interface TopGuidesSidebarProps {
  guides: Guide[]
}

export function TopGuidesSidebar({ guides }: TopGuidesSidebarProps) {
  return (
    <aside className="space-y-3 sticky top-20">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-4 h-4 text-accent" />
        <h2 className="text-base font-bold">Топ гайды</h2>
      </div>

      <div className="space-y-2">
        {guides.map((guide, index) => (
          <Link
            key={guide.id}
            href={`/guides/${guide.slug}`}
            className="group block p-3 bg-card border border-border rounded-lg hover:shadow-md hover:border-accent/50 transition-all duration-200"
          >
            <div className="flex gap-2">
              {/* Number badge */}
              <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                index === 0
                  ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-white'
                  : index === 1
                  ? 'bg-gradient-to-br from-gray-300 to-gray-500 text-white'
                  : index === 2
                  ? 'bg-gradient-to-br from-orange-400 to-orange-600 text-white'
                  : 'bg-muted text-muted-foreground'
              }`}>
                {index + 1}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0 space-y-1.5">
                <h3 className="text-xs font-semibold line-clamp-2 group-hover:text-accent transition-colors leading-tight">
                  {guide.title}
                </h3>

                <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                  {guide.views && (
                    <div className="flex items-center gap-0.5">
                      <Eye className="w-2.5 h-2.5" />
                      <span>{guide.views.toLocaleString('ru-RU')}</span>
                    </div>
                  )}
                  <span>•</span>
                  <span>{guide.readTime} мин</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </aside>
  )
}
