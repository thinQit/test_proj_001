'use client'

import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface FiltersBarProps {
  activeFilters?: string[]
  onClear?: () => void
}

export default function FiltersBar({
  activeFilters = ['Women', 'Size M', 'Black'],
  onClear = () => undefined,
}: Partial<FiltersBarProps>) {
  return (
    <div className="space-y-4 rounded-xl border border-border bg-card/80 p-4">
      <div className="grid gap-3 md:grid-cols-4">
        <Input placeholder="Category" />
        <Input placeholder="Size" />
        <Input placeholder="Color" />
        <Input placeholder="Price range" />
      </div>
      <div className="flex flex-wrap items-center gap-2">
        {activeFilters.map((filter) => (
          <Badge key={filter} variant="secondary">{filter}</Badge>
        ))}
        <Button variant="ghost" size="sm" onClick={onClear}>Clear all</Button>
      </div>
    </div>
  )
}
