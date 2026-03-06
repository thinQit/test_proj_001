export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import ContactForm from "@/components/ContactForm"
import FeaturesCards3D from "@/components/FeaturesCards3D"

export default function ContactPage() {
  return (
    <main className="bg-background text-foreground">
      <HeroAurora
        title="Contact StyleVault"
        subtitle="Questions about sizing, shipping, or an order? We’re here Mon–Fri, 9 AM–6 PM CT."
        primaryCta={{ label: "Email Support", href: "mailto:support@stylevault.com" }}
        secondaryCta={{ label: "Read FAQ", href: "/faq" }}
      />

      <section className="py-16 md:py-24">
        <ContactForm
          headline="Send a message"
          subheadline="We typically respond within 1 business day."
          contactInfo={[
            { icon: "MapPin", label: "Address", value: "StyleVault Studio, 512 W 6th St, Austin, TX 78701" },
            { icon: "Phone", label: "Phone", value: "+1 (512) 555-0198" },
            { icon: "Mail", label: "Support Email", value: "support@stylevault.com" },
          ]}
        />
      </section>

      <section className="py-16 md:py-24">
        <FeaturesCards3D
          title="Customer care"
          subtitle="Quick links and helpful details."
          features={[
            { icon: "Clock3", title: "Mon–Fri", description: "9:00 AM–6:00 PM CT" },
            { icon: "Info", title: "Fastest support", description: "Include your order number (SV-#####)." },
            { icon: "RotateCcw", title: "Returns", description: "Accepted within 30 days of delivery." },
          ]}
        />
      </section>
    </main>
  )
}
