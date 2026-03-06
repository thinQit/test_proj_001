'use client'

import Link from 'next/link'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

interface MobileNavSheetProps {
  open?: boolean
  onClose?: () => void
  categories?: string[]
  collections?: string[]
  quickLinks?: { label: string; href: string }[]
  className?: string
}

export default function MobileNavSheet({
  open = false,
  onClose = () => undefined,
  categories = ['Women', 'Men', 'Accessories', 'Sale'],
  collections = ['Spring Edit', 'Workwear', 'Street Luxe'],
  quickLinks = [
    { label: 'Track Order', href: '/orders' },
    { label: 'Contact', href: '/contact' },
    { label: 'FAQ', href: '/faq' },
  ],
  className = '',
}: Partial<MobileNavSheetProps>) {
  return (
    <div className={cn('fixed inset-0 z-[60]', open ? 'pointer-events-auto' : 'pointer-events-none', className)}>
      <div
        className={cn(
          'absolute inset-0 bg-black/50 transition-opacity',
          open ? 'opacity-100' : 'opacity-0'
        )}
        onClick={onClose}
      />
      <aside
        className={cn(
          'absolute left-0 top-0 h-full w-[85%] max-w-sm border-r border-border bg-background p-5 transition-transform',
          open ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="mb-4 flex items-center justify-between">
          <p className="text-lg font-bold">StyleVault</p>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <p className="mb-2 text-xs uppercase text-muted-foreground">Categories</p>
        <div className="space-y-2">
          {categories.map((item) => (
            <Link key={item} href={'/shop?category=' + encodeURIComponent(item)} className="block text-sm">
              {item}
            </Link>
          ))}
        </div>

        <Separator className="my-5" />

        <p className="mb-2 text-xs uppercase text-muted-foreground">Collections</p>
        <div className="space-y-2">
          {collections.map((item) => (
            <Link key={item} href={'/collections/' + item.toLowerCase().replace(/\s+/g, '-')} className="block text-sm">
              {item}
            </Link>
          ))}
        </div>

        <Separator className="my-5" />

        <p className="mb-2 text-xs uppercase text-muted-foreground">Quick Links</p>
        <div className="space-y-2">
          {quickLinks.map((link) => (
            <Link key={link.label} href={link.href} className="block text-sm">
              {link.label}
            </Link>
          ))}
        </div>
      </aside>
    </div>
  )
}
