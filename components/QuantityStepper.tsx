'use client'

import { Minus, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface QuantityStepperProps {
  value?: number
  min?: number
  max?: number
  onChange?: (value: number) => void
}

export default function QuantityStepper({
  value = 1,
  min = 1,
  max = 99,
  onChange = () => undefined,
}: Partial<QuantityStepperProps>) {
  const decrease = () => onChange(Math.max(min, value - 1))
  const increase = () => onChange(Math.min(max, value + 1))

  return (
    <div className="inline-flex items-center rounded-lg border border-border">
      <Button variant="ghost" size="icon" onClick={decrease} aria-label="Decrease quantity">
        <Minus className="h-4 w-4" />
      </Button>
      <span className="w-10 text-center text-sm font-medium">{value}</span>
      <Button variant="ghost" size="icon" onClick={increase} aria-label="Increase quantity">
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  )
}
