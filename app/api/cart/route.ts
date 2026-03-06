import crypto from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { cartRequestSchema } from "@/lib/validators";

const CART_COOKIE = "stylevault_cart";

async function getOrCreateCart(sessionId: string) {
  const existing = await db.cart.findUnique({
    where: { sessionId },
    include: {
      items: {
        include: {
          product: true,
          productVariant: true,
        },
      },
    },
  });

  if (existing) return existing;

  return db.cart.create({
    data: { sessionId },
    include: {
      items: {
        include: {
          product: true,
          productVariant: true,
        },
      },
    },
  });
}

function computeTotals(
  items: Array<{ quantity: number; unitPriceCents: number }>
): { subtotalCents: number; estimatedShippingCents: number; estimatedTaxCents: number; totalCents: number } {
  const subtotalCents = items.reduce((sum, item) => sum + item.quantity * item.unitPriceCents, 0);
  const estimatedShippingCents = subtotalCents >= 7500 ? 0 : 695;
  const estimatedTaxCents = Math.round(subtotalCents * 0.0825);
  const totalCents = subtotalCents + estimatedShippingCents + estimatedTaxCents;

  return { subtotalCents, estimatedShippingCents, estimatedTaxCents, totalCents };
}

export async function GET(req: NextRequest) {
  try {
    const sessionId = req.cookies.get(CART_COOKIE)?.value;

    if (!sessionId) {
      return NextResponse.json(
        {
          data: {
            items: [],
            totals: computeTotals([]),
            currency: "USD",
          },
        },
        { status: 200 }
      );
    }

    const cart = await getOrCreateCart(sessionId);
    const totals = computeTotals(cart.items);

    return NextResponse.json(
      {
        data: {
          id: cart.id,
          items: cart.items,
          totals,
          currency: cart.currency,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("GET /api/cart error", error);
    return NextResponse.json({ error: "Failed to fetch cart." }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = cartRequestSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid cart payload", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const sessionId = req.cookies.get(CART_COOKIE)?.value ?? crypto.randomUUID();
    const cart = await getOrCreateCart(sessionId);

    const { action, productSlug, color, size } = parsed.data;
    const quantity = parsed.data.quantity ?? 1;

    const product = await db.product.findUnique({
      where: { slug: productSlug },
      include: { variants: true },
    });

    if (!product) {
      return NextResponse.json({ error: "Product not found." }, { status: 404 });
    }

    const variant = product.variants.find((v) => v.color === color && v.size === size);
    if (!variant) {
      return NextResponse.json({ error: "Variant not found." }, { status: 404 });
    }

    const existingItem = await db.cartItem.findUnique({
      where: {
        cartId_productVariantId: {
          cartId: cart.id,
          productVariantId: variant.id,
        },
      },
    });

    if (action === "ADD") {
      if (quantity <= 0) {
        return NextResponse.json({ error: "Quantity must be at least 1 for ADD." }, { status: 400 });
      }

      await db.cartItem.upsert({
        where: {
          cartId_productVariantId: {
            cartId: cart.id,
            productVariantId: variant.id,
          },
        },
        update: {
          quantity: (existingItem?.quantity ?? 0) + quantity,
        },
        create: {
          cartId: cart.id,
          productId: product.id,
          productVariantId: variant.id,
          quantity,
          unitPriceCents: product.priceCents,
        },
      });
    }

    if (action === "UPDATE") {
      if (!existingItem) {
        return NextResponse.json({ error: "Cart item does not exist." }, { status: 404 });
      }

      if (quantity <= 0) {
        await db.cartItem.delete({ where: { id: existingItem.id } });
      } else {
        await db.cartItem.update({
          where: { id: existingItem.id },
          data: { quantity },
        });
      }
    }

    if (action === "REMOVE") {
      if (existingItem) {
        await db.cartItem.delete({ where: { id: existingItem.id } });
      }
    }

    const updatedCart = await db.cart.findUnique({
      where: { id: cart.id },
      include: {
        items: {
          include: {
            product: true,
            productVariant: true,
          },
        },
      },
    });

    const totals = computeTotals(updatedCart?.items ?? []);

    const response = NextResponse.json(
      {
        data: {
          id: updatedCart?.id,
          items: updatedCart?.items ?? [],
          totals,
          currency: updatedCart?.currency ?? "USD",
        },
      },
      { status: 200 }
    );

    response.cookies.set(CART_COOKIE, sessionId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    });

    return response;
  } catch (error) {
    console.error("POST /api/cart error", error);
    return NextResponse.json({ error: "Failed to update cart." }, { status: 500 });
  }
}
