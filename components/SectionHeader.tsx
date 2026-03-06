"use client";

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  title?: string
  subtitle?: string
  ctaLabel?: string
  ctaHref?: string
  className?: string
}

export default function SectionHeader({
  title = 'Section Title',
  subtitle = '',
  ctaLabel = '',
  ctaHref = '#',
  className = '',
}: Partial<SectionHeaderProps>) {
  return (
    <div className={cn('mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between', className)}>
      <div>
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">{title}</h2>
        {subtitle ? <p className="mt-2 max-w-2xl text-sm text-muted-foreground md:text-base">{subtitle}</p> : null}
      </div>
      {ctaLabel ? (
        <Button asChild>
          <Link href={ctaHref}>{ctaLabel}</Link>
        </Button>
      ) : null}
    </div>
  )
}
