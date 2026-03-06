"use client";

import { Skeleton } from '@/components/ui/skeleton'
import ProductCard from '@/components/ProductCard'
import { cn } from '@/lib/utils'

interface Product {
  id: string
  name: string
  price: number
  compareAtPrice?: number
  rating?: number
  reviewCount?: number
  imageSrc?: string
  colors?: string[]
}

interface ProductGridProps {
  products?: Product[]
  loading?: boolean
  className?: string
}

export default function ProductGrid({
  products = [],
  loading = false,
  className = '',
}: Partial<ProductGridProps>) {
  if (loading) {
    return (
      <div className={cn('grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4', className)}>
        {Array.from({ length: 8 }).map((_, i) => (
          <Skeleton key={i} className="h-[320px] rounded-xl" />
        ))}
      </div>
    )
  }

  return (
    <div className={cn('grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4', className)}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          compareAtPrice={product.compareAtPrice || product.price}
          rating={product.rating || 4.5}
          reviewCount={product.reviewCount || 10}
          imageSrc={product.imageSrc || 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg'}
          colors={product.colors || ['#111827']}
        />
      ))}
    </div>
  )
}
