'use client'

import Link from 'next/link'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import CartLineItem from '@/components/CartLineItem'

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  imageSrc: string
  variant: string
}

interface CartDrawerProps {
  open?: boolean
  onClose?: () => void
  items?: CartItem[]
}

export default function CartDrawer({
  open = false,
  onClose = () => undefined,
  items = [],
}: Partial<CartDrawerProps>) {
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0)

  return (
    <div className={open ? 'fixed inset-0 z-[70]' : 'hidden'}>
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <aside className="absolute right-0 top-0 h-full w-full max-w-md border-l border-border bg-background p-4">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Your Cart</h3>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        <div className="space-y-3 overflow-y-auto pb-28">
          {items.length === 0 ? <p className="text-sm text-muted-foreground">Your cart is empty.</p> : null}
          {items.map((item) => (
            <CartLineItem
              key={item.id}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              imageSrc={item.imageSrc}
              variant={item.variant}
            />
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 border-t border-border bg-background p-4">
          <Separator className="mb-3" />
          <div className="mb-3 flex items-center justify-between text-sm">
            <span>Subtotal</span>
            <span className="font-semibold">${subtotal.toFixed(2)}</span>
          </div>
          <Button asChild className="w-full bg-[#E63946] text-white hover:bg-[#cf3440]">
            <Link href="/checkout">Checkout</Link>
          </Button>
        </div>
      </aside>
    </div>
  )
}
