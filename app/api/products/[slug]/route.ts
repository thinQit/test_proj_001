import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

type RouteParams = {
  params: { slug: string };
};

export async function GET(_: NextRequest, { params }: RouteParams) {
  try {
    const product = await db.product.findUnique({
      where: { slug: params.slug },
      include: {
        images: { orderBy: { position: "asc" as const } },
        variants: true,
        reviews: {
          orderBy: { createdAt: "desc" as const },
          take: 20,
        },
      },
    });

    if (!product) {
      return NextResponse.json({ error: "Product not found." }, { status: 404 });
    }

    const reviewsSummary = {
      average: product.rating,
      count: product.reviewCount,
    };

    return NextResponse.json({ data: { ...product, reviewsSummary } }, { status: 200 });
  } catch (error) {
    console.error("GET /api/products/[slug] error", error);
    return NextResponse.json({ error: "Failed to fetch product detail." }, { status: 500 });
  }
}
