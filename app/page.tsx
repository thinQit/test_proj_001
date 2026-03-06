export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import FeaturesCards3D from "@/components/FeaturesCards3D"
import TrustBadges from "@/components/TrustBadges"
import ProductGrid from "@/components/ProductGrid"
import TestimonialsAnimated from "@/components/TestimonialsAnimated"
import NewsletterSignup from "@/components/NewsletterSignup"
import CTASparkles from "@/components/CTASparkles"

export default function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <HeroAurora
        badge="Limited-time: 15% off orders $120+ with code VAULT15 (ends Sunday 11:59 PM)."
        title="StyleVault Spring Drop: clean silhouettes, bold confidence"
        subtitle="Premium street-to-studio essentials designed for repeat wear. Free shipping over $75 and 30-day returns."
        primaryCta={{ label: "Shop New Arrivals", href: "/shop?sort=new" }}
        secondaryCta={{ label: "Explore Best Sellers", href: "/shop?collection=best-sellers" }}
      />

      <section className="py-20 md:py-28">
        <TrustBadges />
      </section>

      <section className="py-20 md:py-28">
        <ProductGrid />
      </section>

      <section className="py-20 md:py-28">
        <FeaturesCards3D
          badge="Shop by category"
          title="Curated capsules that mix effortlessly"
          subtitle="Layer-ready outerwear, elevated tops, tailored-comfort bottoms, and minimal accessories."
          features={[
            { icon: "Shirt", title: "Outerwear", description: "Layer-ready pieces with premium hardware." },
            { icon: "BadgeCheck", title: "Tops", description: "Tees, knits, and hoodies in elevated fits." },
            { icon: "PanelsTopLeft", title: "Bottoms", description: "Tailored comfort from joggers to wide-leg." },
            { icon: "ShoppingBag", title: "Accessories", description: "Finish the look with minimal essentials." },
          ]}
        />
      </section>

      <section className="py-20 md:py-28">
        <TestimonialsAnimated
          title="Loved by customers who live in their basics"
          subtitle="Real feedback from verified purchases."
          autoplay
          testimonials={[
            {
              quote:
                "The Vault Oversized Hoodie is the perfect weight—structured but still soft. I bought one and came back for two more colors.",
              name: "Maya R.",
              designation: "Brooklyn, NY",
              src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg",
            },
            {
              quote:
                "Arc Tech Joggers look tailored but feel like loungewear. The zipper pockets are a game changer.",
              name: "Jordan K.",
              designation: "Seattle, WA",
              src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg",
            },
            {
              quote:
                "Fast shipping and the fit guide was accurate. The Studio Crop Tee sits exactly where I want it.",
              name: "Elena S.",
              designation: "Austin, TX",
              src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg",
            },
          ]}
        />
      </section>

      <section className="py-20 md:py-28">
        <NewsletterSignup
          headline="Get early access to drops and member-only pricing"
          subheadline="Join the Vault List for restock alerts, style edits, and 10% off your first order."
          ctaLabel="Join the Vault List"
        />
      </section>

      <section className="py-20 md:py-28">
        <CTASparkles
          title="Ready to refresh your essentials?"
          subtitle="Explore best sellers with free shipping over $75 and 30-day returns."
          ctaLabel="Shop Best Sellers"
          ctaHref="/shop?collection=best-sellers"
          secondaryCtaLabel="View Shipping & Returns"
          secondaryCtaHref="/faq#shipping"
        />
      </section>
    </main>
  )
}
