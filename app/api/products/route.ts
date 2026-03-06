import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { productQuerySchema } from "@/lib/validators";

export async function GET(req: NextRequest) {
  try {
    const params = Object.fromEntries(req.nextUrl.searchParams.entries());
    const parsed = productQuerySchema.safeParse(params);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid query parameters", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { category, size, color, minPrice, maxPrice, inStock, sort } = parsed.data;

    const where: Prisma.ProductWhereInput = {
      ...(category ? { category: category.toUpperCase() as Prisma.ProductCategory } : {}),
      ...(typeof inStock === "boolean" ? { inStock } : {}),
      ...(typeof minPrice === "number" || typeof maxPrice === "number"
        ? {
            priceCents: {
              ...(typeof minPrice === "number" ? { gte: minPrice * 100 } : {}),
              ...(typeof maxPrice === "number" ? { lte: maxPrice * 100 } : {}),
            },
          }
        : {}),
      ...(size || color
        ? {
            variants: {
              some: {
                ...(size ? { size } : {}),
                ...(color ? { color } : {}),
              },
            },
          }
        : {}),
    };

    const orderBy: Prisma.ProductOrderByWithRelationInput =
      sort === "new"
        ? { createdAt: "desc" as const }
        : sort === "price_asc"
        ? { priceCents: "asc" as const }
        : sort === "price_desc"
        ? { priceCents: "desc" as const }
        : sort === "top_rated"
        ? { rating: "desc" as const }
        : { createdAt: "desc" as const };

    const products = await db.product.findMany({
      where,
      orderBy,
      include: {
        images: {
          orderBy: { position: "asc" as const },
          take: 1,
        },
        variants: true,
      },
    });

    return NextResponse.json({ data: products }, { status: 200 });
  } catch (error) {
    console.error("GET /api/products error", error);
    return NextResponse.json({ error: "Failed to fetch products." }, { status: 500 });
  }
}
