"use client";
import React from "react";
import { Sparkles, Shield, Truck, Star, Zap, Heart, Gift, ShoppingBag, Ruler, Leaf, Info } from 'lucide-react';
import { CardContainer, CardBody, CardItem } from "@/components/ui/effects/3d-card-effect";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesCards3DProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  headline?: string;
  subheadline?: string;
  features: Feature[];
}

const iconMap: Record<string, React.ElementType> = {
  ShoppingBag, Ruler, Leaf, Info,
  Sparkles,
  Shield,
  Truck,
  Star,
  Zap,
  Heart,
  Gift,
};

export default function FeaturesCards3D({
  badge = 'Why Shop With Us',
  title,
  subtitle,
  headline,
  subheadline,
  features = [],
}: Partial<FeaturesCards3DProps>) {
  const resolvedHeadline = headline ?? title ?? 'Built for confidence at checkout';
  const resolvedSubheadline = subheadline ?? subtitle ?? 'From secure payments to quick delivery, every step is optimized for a better shopping experience.';
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          {badge && <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">{badge}</span>}
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{resolvedHeadline}</h2>
          {resolvedSubheadline && <p className="mt-4 text-lg text-muted-foreground">{resolvedSubheadline}</p>}
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map(function (feature, index) {
            const Icon = iconMap[feature.icon] || Star;
            return (
              <CardContainer key={index} className="inter-var">
                <CardBody className="relative group/card border-black/[0.1] w-auto h-auto rounded-xl p-6 border bg-background">
                  <CardItem translateZ="50" className="mb-4 text-[#E63946]">
                    {React.createElement(Icon, { className: "h-8 w-8" })}
                  </CardItem>
                  <CardItem translateZ="60" className="text-xl font-bold text-foreground">
                    {feature.title}
                  </CardItem>
                  <CardItem as="p" translateZ="40" className="text-muted-foreground mt-2 text-sm">
                    {feature.description}
                  </CardItem>
                </CardBody>
              </CardContainer>
            );
          })}
        </div>
      </div>
    </section>
  );
}
