"use client";
import { AuroraBackground } from "@/components/ui/backgrounds/aurora-background";
import { TextGenerateEffect } from "@/components/ui/text/text-generate-effect";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroAuroraProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  headline?: string;
  subheadline?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function HeroAurora({
  badge = 'Limited-Time Offer',
  title,
  subtitle,
  headline,
  subheadline,
  primaryCta = { label: 'Shop Collection', href: '/products' },
  secondaryCta = { label: 'View Deals', href: '/deals' },
}: Partial<HeroAuroraProps>) {
  const resolvedHeadline = headline ?? title ?? 'Shop smarter with curated essentials for everyday living';
  const resolvedSubheadline = subheadline ?? subtitle ?? 'Discover best-selling products, trusted quality, and fast shipping—all in one place.';
  return (
    <AuroraBackground auroraColors={['#3b82f6', '#06b6d4', '#67e8f9', '#bfdbfe', '#38bdf8']}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 py-24 md:py-36"
      >
        {badge && (
          <span className="mb-2 inline-block rounded-full border bg-background/70 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-foreground">
            {badge}
          </span>
        )}
        <TextGenerateEffect
          words={resolvedHeadline}
          className="text-4xl font-bold text-center tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl"
        />
        <p className="mt-4 max-w-2xl text-center text-lg text-muted-foreground md:text-xl">
          {resolvedSubheadline}
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <Button size="lg" className="px-8 py-6 text-lg bg-[#E63946] text-white hover:bg-[#E63946]/90" asChild>
            <a href={primaryCta?.href || '#'}>{primaryCta?.label || ''}</a>
          </Button>
          {secondaryCta && (
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg" asChild>
              <a href={secondaryCta.href}>{secondaryCta.label}</a>
            </Button>
          )}
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
