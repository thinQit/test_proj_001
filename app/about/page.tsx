export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import FeaturesCards3D from "@/components/FeaturesCards3D"
import TestimonialsAnimated from "@/components/TestimonialsAnimated"
import CTASparkles from "@/components/CTASparkles"

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground">
      <HeroAurora
        badge="Founded in 2022 in Austin, TX"
        title="Designed to be worn on repeat"
        subtitle="StyleVault makes modern essentials with premium materials, honest pricing, and a fit-first approach."
        primaryCta={{ label: "Shop the Collection", href: "/shop" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
      />

      <section className="py-20 md:py-28">
        <FeaturesCards3D
          badge="Our story"
          title="From fit frustrations to a better baseline"
          subtitle="We release small drops to stay intentional—less waste, better quality control, and more focus on details you notice."
          features={[
            { icon: "Ruler", title: "Fit-first design", description: "We test across body types and publish clear measurements." },
            { icon: "Leaf", title: "Material integrity", description: "We choose fabrics for longevity, not trends." },
            { icon: "MessageCircleHeart", title: "Transparent service", description: "Fast dispatch, easy returns, and responsive support." },
          ]}
        />
      </section>

      <section className="py-20 md:py-28">
        <TestimonialsAnimated
          title="The people behind the pieces"
          subtitle="Small team, high standards."
          testimonials={[
            {
              quote:
                "Leads design, fit testing, and seasonal direction with a focus on timeless silhouettes.",
              name: "Avery Chen",
              designation: "Founder & Creative Director",
              src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg",
            },
            {
              quote:
                "Works with partner factories on materials, trims, and quality control.",
              name: "Samira Patel",
              designation: "Product & Sourcing",
              src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg",
            },
            {
              quote:
                "Runs support, returns, and the fit guide—so you can buy with confidence.",
              name: "Noah Brooks",
              designation: "Customer Experience Lead",
              src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg",
            },
          ]}
        />
      </section>

      <section className="py-20 md:py-28">
        <CTASparkles
          title="Ready to build your capsule?"
          subtitle="Start with a best seller and expand from there."
          ctaLabel="Shop Best Sellers"
          ctaHref="/shop?collection=best-sellers"
          secondaryCtaLabel="Get Sizing Help"
          secondaryCtaHref="/faq#sizing"
        />
      </section>
    </main>
  )
}
