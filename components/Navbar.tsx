'use client'

import Link from 'next/link'
import { Menu, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import SearchBar from '@/components/SearchBar'
import CartButton from '@/components/CartButton'

interface NavbarProps {
  logoText?: string
  categories?: string[]
  cartCount?: number
  className?: string
  onMobileMenuClick?: () => void
}

export default function Navbar({
  logoText = 'StyleVault',
  categories = ['Women', 'Men', 'New Arrivals', 'Sale'],
  cartCount = 0,
  className = '',
  onMobileMenuClick = () => undefined,
}: Partial<NavbarProps>) {
  return (
    <header className={cn('sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur', className)}>
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 md:gap-6">
        <Button variant="ghost" size="icon" className="md:hidden" onClick={onMobileMenuClick}>
          <Menu className="h-5 w-5" />
        </Button>

        <Link href="/" className="text-lg font-bold tracking-tight text-foreground">
          {logoText}
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          {categories.map((category) => (
            <Link
              key={category}
              href={'/shop?category=' + encodeURIComponent(category)}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {category}
            </Link>
          ))}
        </nav>

        <div className="ml-auto hidden w-full max-w-md md:block">
          <SearchBar placeholder="Search products, brands, styles..." />
        </div>

        <Button variant="ghost" size="icon" className="hidden md:inline-flex">
          <User className="h-5 w-5" />
        </Button>

        <CartButton count={cartCount} />
      </div>

      <div className="border-t border-border p-3 md:hidden">
        <SearchBar placeholder="Search StyleVault..." />
      </div>
    </header>
  )
}
