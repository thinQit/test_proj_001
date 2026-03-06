'use client'

import { useEffect, useState } from 'react'
import { Star } from 'lucide-react'
import { Card } from '@/components/ui/card'

interface Testimonial {
  name: string
  quote: string
  rating: number
  product: string
}

interface TestimonialsCarouselProps {
  items?: Testimonial[]
  interval?: number
}

export default function TestimonialsCarousel({
  items = [
    { name: 'Maya R.', quote: 'The tailoring is incredible. StyleVault made me a repeat customer.', rating: 5, product: 'Essential Tailored Blazer' },
    { name: 'Jordan K.', quote: 'Fast shipping and the fabric quality feels premium.', rating: 5, product: 'Minimal Knit Set' },
    { name: 'Aisha L.', quote: 'Exactly like the photos. Fit guide was accurate.', rating: 4, product: 'Relaxed Cargo Pant' },
  ],
  interval = 4000,
}: Partial<TestimonialsCarouselProps>) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % items.length), interval)
    return () => clearInterval(timer)
  }, [items.length, interval])

  const active = items[index] || items[0]

  return (
    <Card className="rounded-xl border border-border bg-card/90 p-6">
      <div className="mb-3 flex gap-1">
        {Array.from({ length: active.rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
      </div>
      <p className="mb-4 text-base">“{active.quote}”</p>
      <p className="text-sm font-semibold">{active.name}</p>
      <p className="text-xs text-muted-foreground">Purchased: {active.product}</p>
    </Card>
  )
}
