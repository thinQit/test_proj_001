import { ContactTopic } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { contactSubmissionSchema } from "@/lib/validators";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = contactSubmissionSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid contact submission", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const payload = parsed.data;

    const message = await db.contactMessage.create({
      data: {
        name: payload.name,
        email: payload.email,
        topic: payload.topic as ContactTopic,
        orderNumber: payload.orderNumber,
        message: payload.message,
      },
    });

    return NextResponse.json(
      { data: { id: message.id, createdAt: message.createdAt } },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/contact error", error);
    return NextResponse.json({ error: "Failed to submit contact form." }, { status: 500 });
  }
}
