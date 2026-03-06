"use client";

import { ShieldCheck, RefreshCw, Truck, BadgeCheck } from 'lucide-react'

interface TrustBadgesProps {
  items?: { title: string; description: string; icon: string }[]
}

export default function TrustBadges({
  items = [
    { title: 'Free Shipping', description: 'On orders over $75', icon: 'Truck' },
    { title: 'Easy Returns', description: '30-day hassle-free returns', icon: 'RefreshCw' },
    { title: 'Premium Quality', description: 'Curated materials and fit', icon: 'BadgeCheck' },
    { title: 'Secure Checkout', description: 'Protected payments', icon: 'ShieldCheck' },
  ],
}: Partial<TrustBadgesProps>) {
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Truck,
    RefreshCw,
    BadgeCheck,
    ShieldCheck,
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => {
        const Icon = iconMap[item.icon] || ShieldCheck
        return (
          <div key={item.title} className="rounded-xl border border-border bg-card/80 p-4">
            <Icon className="mb-2 h-5 w-5 text-[#E63946]" />
            <p className="text-sm font-semibold">{item.title}</p>
            <p className="text-xs text-muted-foreground">{item.description}</p>
          </div>
        )
      })}
    </div>
  )
}
