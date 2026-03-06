"use client";

import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

interface FooterProps {
  brand?: string
}

export default function Footer({ brand = 'StyleVault' }: Partial<FooterProps>) {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-4">
        <div>
          <p className="text-lg font-bold">{brand}</p>
          <p className="mt-2 text-sm text-muted-foreground">
            245 Mercer St, New York, NY 10012<br />
            support@stylevault.com
          </p>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold">Shop</p>
          <div className="space-y-2 text-sm text-muted-foreground">
            <Link href="/shop" className="block">All Products</Link>
            <Link href="/collections/new-arrivals" className="block">New Arrivals</Link>
            <Link href="/sale" className="block">Sale</Link>
          </div>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold">Support</p>
          <div className="space-y-2 text-sm text-muted-foreground">
            <Link href="/contact" className="block">Contact</Link>
            <Link href="/faq" className="block">FAQ</Link>
            <Link href="/shipping" className="block">Shipping & Returns</Link>
          </div>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold">Company</p>
          <div className="space-y-2 text-sm text-muted-foreground">
            <Link href="/about" className="block">About</Link>
            <Link href="/careers" className="block">Careers</Link>
            <Link href="/privacy" className="block">Privacy Policy</Link>
          </div>
        </div>
      </div>
      <Separator />
      <div className="mx-auto max-w-7xl px-4 py-4 text-xs text-muted-foreground">
        © {new Date().getFullYear()} {brand}. All rights reserved.
      </div>
    </footer>
  )
}
