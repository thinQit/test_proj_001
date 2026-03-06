'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Heart, Star } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface ProductCardProps {
  name?: string
  price?: number
  compareAtPrice?: number
  rating?: number
  reviewCount?: number
  imageSrc?: string
  colors?: string[]
  onQuickAdd?: () => void
  className?: string
}

export default function ProductCard({
  name = 'Essential Tailored Blazer',
  price = 128,
  compareAtPrice = 160,
  rating = 4.7,
  reviewCount = 84,
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg',
  colors = ['#111827', '#E5E7EB', '#E63946'],
  onQuickAdd = () => undefined,
  className = '',
}: Partial<ProductCardProps>) {
  const [hovered, setHovered] = useState(false)

  return (
    <Card
      className={cn('group overflow-hidden rounded-xl border border-border bg-card/90', className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image src={imageSrc} alt={name} fill className="object-cover transition-transform duration-300 group-hover:scale-105" unoptimized />
        <Button size="icon" variant="secondary" className="absolute right-3 top-3 h-8 w-8 rounded-full" aria-label="Add to wishlist">
          <Heart className="h-4 w-4" />
        </Button>
      </div>
      <div className="space-y-3 p-4">
        <h3 className="line-clamp-1 text-sm font-medium">{name}</h3>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span>{rating}</span>
          <span>({reviewCount})</span>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-base font-bold">${price.toFixed(2)}</p>
          {compareAtPrice > price ? (
            <p className="text-sm text-muted-foreground line-through">${compareAtPrice.toFixed(2)}</p>
          ) : null}
        </div>
        <div className={cn('flex items-center gap-2 transition-opacity', hovered ? 'opacity-100' : 'opacity-70')}>
          {colors.map((color) => (
            <span key={color} className="h-4 w-4 rounded-full border border-border" style={{ backgroundColor: color }} />
          ))}
        </div>
        <Button className="w-full bg-[#E63946] text-white hover:bg-[#cf3440]" onClick={onQuickAdd}>
          Quick Add
        </Button>
      </div>
    </Card>
  )
}
