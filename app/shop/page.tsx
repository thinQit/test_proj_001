export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import FiltersBar from "@/components/FiltersBar"
import SortSelect from "@/components/SortSelect"
import ProductGrid from "@/components/ProductGrid"
import CTASparkles from "@/components/CTASparkles"

export default function ShopPage() {
  return (
    <main className="bg-background text-foreground">
      <HeroAurora
        title="Shop StyleVault"
        subtitle="Browse essentials by category, color, and fit. New drops land every Thursday at 10 AM CT."
        primaryCta={{ label: "Shop New Arrivals", href: "/shop?sort=new" }}
        secondaryCta={{ label: "Best Sellers", href: "/shop?collection=best-sellers" }}
      />

      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-7xl space-y-6 px-4 md:px-6">
          <FiltersBar />
          <SortSelect />
        </div>
      </section>

      <section className="py-12 md:py-20">
        <ProductGrid />
      </section>

      <section className="py-20 md:py-28">
        <CTASparkles
          title="Not sure where to start?"
          subtitle="Take the quick fit-and-style quiz and we’ll recommend a capsule."
          ctaLabel="Get Recommendations"
          ctaHref="/faq#fit-quiz"
          secondaryCtaLabel="Contact Support"
          secondaryCtaHref="/contact"
        />
      </section>
    </main>
  )
}
