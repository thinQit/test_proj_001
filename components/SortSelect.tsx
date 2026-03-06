'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface SortSelectProps {
  value?: string
  onValueChange?: (value: string) => void
}

export default function SortSelect({
  value = 'featured',
  onValueChange = () => undefined,
}: Partial<SortSelectProps>) {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="w-[220px]">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="featured">Featured</SelectItem>
        <SelectItem value="newest">Newest</SelectItem>
        <SelectItem value="price-low-high">Price: Low to High</SelectItem>
        <SelectItem value="price-high-low">Price: High to Low</SelectItem>
        <SelectItem value="rating">Top Rated</SelectItem>
      </SelectContent>
    </Select>
  )
}
