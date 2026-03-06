import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { newsletterSignupSchema } from "@/lib/validators";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = newsletterSignupSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid newsletter submission", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { email } = parsed.data;

    const signup = await db.newsletterSignup.upsert({
      where: { email },
      update: {
        consentAcceptedAt: new Date(),
      },
      create: {
        email,
        consentAcceptedAt: new Date(),
      },
    });

    return NextResponse.json(
      { data: { id: signup.id, email: signup.email, createdAt: signup.createdAt } },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/newsletter error", error);
    return NextResponse.json({ error: "Failed to subscribe newsletter." }, { status: 500 });
  }
}
