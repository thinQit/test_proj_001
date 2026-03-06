export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import FAQAccordion from "@/components/FAQAccordion"
import CTASparkles from "@/components/CTASparkles"

export default function FAQPage() {
  return (
    <main className="bg-background text-foreground">
      <HeroAurora
        title="FAQ"
        subtitle="Quick answers on shipping, returns, sizing, and care."
        primaryCta={{ label: "Contact Support", href: "/contact" }}
        secondaryCta={{ label: "Shop Best Sellers", href: "/shop?collection=best-sellers" }}
      />

      <section id="shipping" className="py-16 md:py-24">
        <FAQAccordion
          headline="Shipping & returns"
          subheadline="Clear policies, no surprises."
          items={[
            { question: "When will my order ship?", answer: "Orders ship in 1–2 business days from Austin, TX. You’ll receive tracking as soon as your label is created." },
            { question: "How much is shipping?", answer: "Standard shipping is $6.95. Shipping is free on orders over $75 (US)." },
            { question: "What is your return policy?", answer: "Returns and exchanges are accepted within 30 days of delivery. Items must be unworn with original tags." },
            { question: "Do you ship internationally?", answer: "Yes—international rates and duties are calculated at checkout. Delivery times vary by destination." },
          ]}
        />
      </section>

      <section id="sizing" className="py-16 md:py-24">
        <FAQAccordion
          headline="Sizing & fit"
          subheadline="Measurements you can trust."
          items={[
            { question: "How do I choose my size?", answer: "Use the size chart on each product page. If you’re between sizes, size down for a closer fit or size up for a relaxed fit." },
            { question: "Do your hoodies run oversized?", answer: "Yes—our Vault Oversized Hoodie is intentionally roomy. For a standard fit, size down one." },
            { question: "What if my size is sold out?", answer: "Join the Vault List or request a restock alert on the product page. We restock best sellers every 3–5 weeks." },
          ]}
        />
      </section>

      <section id="privacy" className="py-16 md:py-24">
        <FAQAccordion
          headline="Privacy & terms"
          subheadline="How we handle your data."
          items={[
            { question: "Do you sell my personal information?", answer: "No. We only use your information to fulfill orders, provide support, and (if you opt in) send product updates." },
            { question: "How do I unsubscribe from emails?", answer: "Use the unsubscribe link at the bottom of any email or contact support and we’ll remove you." },
            { question: "Where can I find your terms?", answer: "Our terms are available upon request via support@stylevault.com and are summarized in checkout." },
          ]}
        />
      </section>

      <section id="fit-quiz" className="py-20 md:py-28">
        <CTASparkles
          title="Want a quick recommendation?"
          subtitle="Tell us your height, usual size, and preferred fit—our team will suggest 2–3 pieces to start."
          ctaLabel="Get Recommendations"
          ctaHref="/contact?intent=recommendation"
          secondaryCtaLabel="Shop Best Sellers"
          secondaryCtaHref="/shop?collection=best-sellers"
        />
      </section>
    </main>
  )
}
