'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface ProductGalleryProps {
  images?: string[]
  alt?: string
  className?: string
}

export default function ProductGallery({
  images = ['https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg', 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg', 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg'],
  alt = 'StyleVault product',
  className = '',
}: Partial<ProductGalleryProps>) {
  const [active, setActive] = useState(images[0] || 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg')

  return (
    <div className={cn('grid gap-4 md:grid-cols-[84px_1fr]', className)}>
      <div className="order-2 flex gap-2 md:order-1 md:flex-col">
        {images.map((img) => (
          <button
            key={img}
            onClick={() => setActive(img)}
            className={cn(
              'relative h-20 w-20 overflow-hidden rounded-lg border',
              active === img ? 'border-[#E63946]' : 'border-border'
            )}
          >
            <Image src={img} alt={alt} fill className="object-cover" unoptimized />
          </button>
        ))}
      </div>
      <div className="group order-1 overflow-hidden rounded-xl border border-border md:order-2">
        <div className="relative aspect-[4/5]">
          <Image
            src={active}
            alt={alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            unoptimized
          />
        </div>
      </div>
    </div>
  )
}
