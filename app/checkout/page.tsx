export const dynamic = 'force-dynamic';

import OrderSummary from "@/components/OrderSummary"

export default function CheckoutPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl grid grid-cols-1 gap-10 md:grid-cols-2 px-4">
          <div>
            <h1 className="text-3xl font-bold mb-3">Checkout</h1>
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-1">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-lg border border-border bg-card px-3 py-2 text-foreground"
                  placeholder="Full name"
                  autoComplete="name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-1">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-border bg-card px-3 py-2 text-foreground"
                  placeholder="you@email.com"
                  autoComplete="email"
                />
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-semibold mb-1">
                  Shipping address
                </label>
                <textarea
                  id="address"
                  name="address"
                  required
                  className="w-full rounded-lg border border-border bg-card px-3 py-2 text-foreground"
                  placeholder="Street address, city, state, ZIP"
                  rows={3}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-1">
                  Phone (optional)
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full rounded-lg border border-border bg-card px-3 py-2 text-foreground"
                  placeholder="(555) 123-4567"
                  autoComplete="tel"
                />
              </div>
              <button
                type="submit"
                className="mt-3 w-full rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-60"
                disabled
              >
                Place Order (demo)
              </button>
            </form>
          </div>
          <div>
            <OrderSummary />
            <p className="mt-3 text-xs text-muted-foreground">Taxes and shipping calculated at checkout. No payment processing in demo.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
