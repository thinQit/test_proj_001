'use client'

import Link from 'next/link'
import { ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface CartButtonProps {
  count?: number
  href?: string
  onClick?: () => void
}

export default function CartButton({
  count = 0,
  href = '/cart',
  onClick = () => undefined,
}: Partial<CartButtonProps>) {
  return (
    <Button asChild variant="ghost" size="icon" className="relative" onClick={onClick}>
      <Link href={href}>
        <ShoppingBag className="h-5 w-5" />
        <Badge className="absolute -right-1 -top-1 min-w-5 justify-center px-1 text-[10px]">{count}</Badge>
      </Link>
    </Button>
  )
}
