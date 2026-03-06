export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import ProductGallery from "@/components/ProductGallery"
import VariantSelector from "@/components/VariantSelector"
import QuantityStepper from "@/components/QuantityStepper"
import FAQAccordion from "@/components/FAQAccordion"
import TestimonialsAnimated from "@/components/TestimonialsAnimated"
import ProductGrid from "@/components/ProductGrid"

export default function ProductDetailPage() {
  return (
    <main className="bg-background text-foreground">
      <HeroAurora
        badge="$78 USD • Was $92"
        title="Vault Oversized Hoodie"
        subtitle="Heavyweight fleece with a structured drape and brushed interior. Designed to hold its shape—wash after wash."
        primaryCta={{ label: "Add to Cart", href: "/cart" }}
        secondaryCta={{ label: "View Size Guide", href: "/faq#sizing" }}
      />

      <section className="py-12 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-2 md:px-6">
          <ProductGallery />
          <div className="space-y-6">
            <VariantSelector />
            <QuantityStepper />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <FAQAccordion
          headline="Details that matter"
          subheadline="Designed for repeat wear with premium finishing."
          items={[
            {
              question: "Fit",
              answer: "Oversized through body and sleeves; size down for a closer fit.",
            },
            {
              question: "Fabric",
              answer: "80% cotton / 20% polyester; brushed interior.",
            },
            {
              question: "Care",
              answer: "Machine wash cold, tumble dry low. Do not bleach.",
            },
            {
              question: "Origin",
              answer: "Responsibly made in Portugal.",
            },
          ]}
        />
      </section>

      <section className="py-16 md:py-24">
        <TestimonialsAnimated
          title="Reviews"
          subtitle="Verified customer feedback."
          testimonials={[
            {
              quote:
                "Not too warm, not too thin. The cuffs keep their shape and the hood sits nicely.",
              name: "Chris D.",
              designation: "Verified Buyer • Feb 11, 2026",
              src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg",
            },
            {
              quote:
                "I sized down and it’s still roomy. Love the hidden pocket.",
              name: "Alyssa P.",
              designation: "Verified Buyer • Jan 27, 2026",
              src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg",
            },
          ]}
        />
      </section>

      <section className="py-16 md:py-24">
        <ProductGrid />
      </section>
    </main>
  )
}
