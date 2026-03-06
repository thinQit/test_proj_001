export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import CartLineItem from "@/components/CartLineItem"
import OrderSummary from "@/components/OrderSummary"
import TrustBadges from "@/components/TrustBadges"

export default function CartPage() {
  return (
    <main className="bg-background text-foreground">
      <HeroAurora
        title="Your cart"
        subtitle="Review items, update quantities, and check out securely."
        primaryCta={{ label: "Checkout", href: "/checkout" }}
        secondaryCta={{ label: "Continue Shopping", href: "/shop" }}
      />

      <section className="py-12 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-3 md:px-6">
          <div className="space-y-4 md:col-span-2">
            <CartLineItem />
            <CartLineItem />
          </div>
          <OrderSummary />
        </div>
      </section>

      <section className="py-20 md:py-28">
        <TrustBadges />
      </section>
    </main>
  )
}
