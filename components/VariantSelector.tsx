'use client'

import { cn } from '@/lib/utils'

interface VariantOption {
  label: string
  value: string
  inStock?: boolean
}

interface VariantSelectorProps {
  colors?: VariantOption[]
  sizes?: VariantOption[]
  selectedColor?: string
  selectedSize?: string
  onColorChange?: (value: string) => void
  onSizeChange?: (value: string) => void
}

export default function VariantSelector({
  colors = [
    { label: 'Black', value: '#111827', inStock: true },
    { label: 'Ivory', value: '#F3F4F6', inStock: true },
    { label: 'Red', value: '#E63946', inStock: false },
  ],
  sizes = [
    { label: 'S', value: 'S', inStock: true },
    { label: 'M', value: 'M', inStock: true },
    { label: 'L', value: 'L', inStock: false },
  ],
  selectedColor = '#111827',
  selectedSize = 'S',
  onColorChange = () => undefined,
  onSizeChange = () => undefined,
}: Partial<VariantSelectorProps>) {
  return (
    <div className="space-y-4">
      <div>
        <p className="mb-2 text-sm font-medium">Color</p>
        <div className="flex gap-2">
          {colors.map((c) => (
            <button
              key={c.value}
              disabled={!c.inStock}
              onClick={() => onColorChange(c.value)}
              className={cn(
                'h-8 w-8 rounded-full border',
                selectedColor === c.value ? 'ring-2 ring-[#E63946]' : '',
                !c.inStock ? 'cursor-not-allowed opacity-40' : ''
              )}
              style={{ backgroundColor: c.value }}
              title={c.label}
            />
          ))}
        </div>
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">Size</p>
        <div className="flex flex-wrap gap-2">
          {sizes.map((s) => (
            <button
              key={s.value}
              disabled={!s.inStock}
              onClick={() => onSizeChange(s.value)}
              className={cn(
                'rounded-lg border px-3 py-1.5 text-sm',
                selectedSize === s.value ? 'border-[#E63946] bg-[#E63946]/10' : 'border-border',
                !s.inStock ? 'cursor-not-allowed opacity-40 line-through' : ''
              )}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
