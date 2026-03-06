'use client'

import Image from 'next/image'
import { Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import QuantityStepper from '@/components/QuantityStepper'

interface CartLineItemProps {
  name?: string
  variant?: string
  price?: number
  quantity?: number
  imageSrc?: string
  onRemove?: () => void
  onQuantityChange?: (value: number) => void
}

export default function CartLineItem({
  name = 'Classic Oversized Shirt',
  variant = 'Black / M',
  price = 68,
  quantity = 1,
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg',
  onRemove = () => undefined,
  onQuantityChange = () => undefined,
}: Partial<CartLineItemProps>) {
  return (
    <div className="flex gap-3 rounded-xl border border-border p-3">
      <div className="relative h-20 w-16 overflow-hidden rounded-md">
        <Image src={imageSrc} alt={name} fill className="object-cover" unoptimized />
      </div>
      <div className="flex-1 space-y-1">
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs text-muted-foreground">{variant}</p>
        <div className="mt-2 flex items-center justify-between">
          <QuantityStepper value={quantity} onChange={onQuantityChange} />
          <p className="text-sm font-semibold">${(price * quantity).toFixed(2)}</p>
        </div>
      </div>
      <Button variant="ghost" size="icon" onClick={onRemove} aria-label="Remove item from cart">
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  )
}
