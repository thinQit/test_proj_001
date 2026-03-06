'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

interface OrderSummaryProps {
  subtotal?: number
  shippingEstimate?: number
  taxEstimate?: number
}

export default function OrderSummary({
  subtotal = 180,
  shippingEstimate = 12,
  taxEstimate = 14.4,
}: Partial<OrderSummaryProps>) {
  const [promo, setPromo] = useState('')
  const discount = promo.toLowerCase() === 'STYLE10'.toLowerCase() ? subtotal * 0.1 : 0
  const total = subtotal + shippingEstimate + taxEstimate - discount

  return (
    <div className="rounded-xl border border-border bg-card/80 p-5">
      <h3 className="mb-4 text-lg font-semibold">Order Summary</h3>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
        <div className="flex justify-between"><span>Shipping</span><span>${shippingEstimate.toFixed(2)}</span></div>
        <div className="flex justify-between"><span>Tax</span><span>${taxEstimate.toFixed(2)}</span></div>
        {discount > 0 ? <div className="flex justify-between text-green-500"><span>Promo</span><span>- ${discount.toFixed(2)}</span></div> : null}
      </div>
      <Separator className="my-4" />
      <div className="mb-4 flex justify-between text-base font-bold"><span>Total</span><span>${total.toFixed(2)}</span></div>
      <div className="flex gap-2">
        <Input placeholder="Promo code" value={promo} onChange={(e) => setPromo(e.target.value)} />
        <Button variant="secondary">Apply</Button>
      </div>
    </div>
  )
}
