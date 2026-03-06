'use client'

import { useEffect, useState } from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

interface SearchBarProps {
  placeholder?: string
  initialQuery?: string
  delay?: number
  onSearch?: (query: string) => void
  className?: string
}

export default function SearchBar({
  placeholder = 'Search',
  initialQuery = '',
  delay = 350,
  onSearch = () => undefined,
  className = '',
}: Partial<SearchBarProps>) {
  const [query, setQuery] = useState(initialQuery)

  useEffect(() => {
    const timer = setTimeout(() => onSearch(query), delay)
    return () => clearTimeout(timer)
  }, [query, delay, onSearch])

  return (
    <div className={cn('relative', className)}>
      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="pl-9 pr-14"
      />
      <span className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md border border-border px-2 py-0.5 text-[10px] text-muted-foreground">
        ⌘K
      </span>
    </div>
  )
}
