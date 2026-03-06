'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavItem {
  label: string;
  href: string;
}

interface NavbarStickyProps {
  logo: string;
  navItems: NavItem[];
  ctaLabel?: string;
  ctaHref?: string;
}

export default function NavbarSticky({
  logo = 'ShopNova',
  navItems = [],
  ctaLabel = 'Shop Now',
  ctaHref = '/products',
}: Partial<NavbarStickyProps>) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold text-foreground">
          {logo}
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map(function (item) {
            return (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Search">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Cart">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          {ctaLabel && ctaHref && (
            <Button asChild className="bg-[#E63946] text-white hover:bg-[#E63946]/90">
              <a href={ctaHref}>{ctaLabel}</a>
            </Button>
          )}
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={function () {
            setMobileOpen(!mobileOpen);
          }}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t bg-background md:hidden">
          <nav className="container mx-auto flex flex-col gap-4 px-4 py-4">
            {navItems.map(function (item) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground"
                  onClick={function () {
                    setMobileOpen(false);
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="flex items-center gap-3">
              <Button variant="outline" className="w-full" asChild>
                <a href="/search">Search</a>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <a href="/cart">Cart</a>
              </Button>
            </div>
            {ctaLabel && ctaHref && (
              <Button className="w-full bg-[#E63946] text-white hover:bg-[#E63946]/90" asChild>
                <a href={ctaHref}>{ctaLabel}</a>
              </Button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
