export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import TestimonialsAnimated from "@/components/TestimonialsAnimated"
import CTASparkles from "@/components/CTASparkles"

export default function TestimonialsPage() {
  return (
    <main className="bg-background text-foreground">
      <HeroAurora
        badge="Average rating: 4.8 from 1,240 reviews"
        title="Customer testimonials"
        subtitle="Verified reviews across our best-selling essentials."
        primaryCta={{ label: "Shop Best Sellers", href: "/shop?collection=best-sellers" }}
        secondaryCta={{ label: "Contact Support", href: "/contact" }}
      />

      <section className="py-20 md:py-28">
        <TestimonialsAnimated
          title="What people are saying"
          subtitle="Fit, fabric, and service—rated highly."
          testimonials={[
            {
              quote:
                "The quality feels like something that should cost more. Clean branding and the stitching is solid.",
              name: "Dylan M.",
              designation: "Chicago, IL • Utility Overshirt",
              src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg",
            },
            {
              quote:
                "The fit guide was spot on. I’m picky about tees and this one holds shape after washing.",
              name: "Priya N.",
              designation: "San Diego, CA • Boxy Tee",
              src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg",
            },
            {
              quote:
                "Shipping was fast and the exchange process was easy when I needed a different size.",
              name: "Hannah L.",
              designation: "Boston, MA • Arc Tech Jogger",
              src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg",
            },
          ]}
        />
      </section>

      <section className="py-20 md:py-28">
        <CTASparkles
          title="Ready to try StyleVault?"
          subtitle="Start with a best seller—free shipping over $75 and 30-day returns."
          ctaLabel="Shop Best Sellers"
          ctaHref="/shop?collection=best-sellers"
          secondaryCtaLabel="View Shipping & Returns"
          secondaryCtaHref="/faq#shipping"
        />
      </section>
    </main>
  )
}
