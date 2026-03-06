export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import PricingTable from "@/components/PricingTable"
import FeaturesCards3D from "@/components/FeaturesCards3D"
import CTASparkles from "@/components/CTASparkles"

export default function PricingPage() {
  return (
    <main className="bg-background text-foreground">
      <HeroAurora
        title="Gift cards & member perks"
        subtitle="Simple options for gifting and saving—no subscriptions required."
        primaryCta={{ label: "Buy a Gift Card", href: "/pricing#gift-cards" }}
        secondaryCta={{ label: "Shop Best Sellers", href: "/shop?collection=best-sellers" }}
      />

      <section id="gift-cards" className="py-20 md:py-28">
        <PricingTable
          headline="Digital gift cards"
          subheadline="Perfect for birthdays, graduations, and “just because.”"
          tiers={[
            { name: "$25 Gift Card", price: "$25", description: "A thoughtful starter gift.", features: ["Instant email delivery", "No expiration", "Redeemable sitewide"], ctaLabel: "Choose $25", ctaHref: "/cart" },
            { name: "$50 Gift Card", price: "$50", description: "Our most popular gifting amount.", features: ["Instant email delivery", "No expiration", "Redeemable sitewide"], ctaLabel: "Choose $50", ctaHref: "/cart", highlighted: true },
            { name: "$100 Gift Card", price: "$100", description: "Great for a full outfit refresh.", features: ["Instant email delivery", "No expiration", "Redeemable sitewide"], ctaLabel: "Choose $100", ctaHref: "/cart" },
            { name: "$200 Gift Card", price: "$200", description: "Perfect for major gifting moments.", features: ["Instant email delivery", "No expiration", "Redeemable sitewide"], ctaLabel: "Choose $200", ctaHref: "/cart" },
          ]}
        />
      </section>

      <section className="py-20 md:py-28">
        <FeaturesCards3D
          title="Perks that come standard"
          subtitle="No membership fees—just great service."
          features={[
            { icon: "Truck", title: "Free shipping over $75", description: "Automatic at checkout—no code needed." },
            { icon: "BadgePercent", title: "10% welcome offer", description: "Join the Vault List and get 10% off your first order." },
            { icon: "BellRing", title: "Restock alerts", description: "Get notified when your size is back." },
          ]}
        />
      </section>

      <section className="py-20 md:py-28">
        <CTASparkles
          title="Need help choosing a gift?"
          subtitle="Tell us their style and we’ll recommend a capsule and gift card amount."
          ctaLabel="Contact Styling Support"
          ctaHref="/contact?intent=styling-help"
          secondaryCtaLabel="Browse Best Sellers"
          secondaryCtaHref="/shop?collection=best-sellers"
        />
      </section>
    </main>
  )
}
