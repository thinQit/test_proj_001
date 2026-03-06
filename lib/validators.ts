import { z } from "zod";

export const productQuerySchema = z.object({
  category: z.string().optional(),
  size: z.string().optional(),
  color: z.string().optional(),
  minPrice: z.coerce.number().int().nonnegative().optional(),
  maxPrice: z.coerce.number().int().nonnegative().optional(),
  inStock: z
    .string()
    .transform((v) => v === "true")
    .optional(),
  sort: z
    .enum(["featured", "new", "price_asc", "price_desc", "top_rated"])
    .optional()
    .default("featured"),
});

export const cartRequestSchema = z.object({
  action: z.enum(["ADD", "UPDATE", "REMOVE"]),
  productSlug: z.string().min(1),
  color: z.string().min(1),
  size: z.string().min(1),
  quantity: z.number().int().min(0).max(99).optional(),
});

export const contactTopicSchema = z.enum([
  "ORDER_STATUS",
  "RETURNS_EXCHANGES",
  "SIZING_HELP",
  "PRODUCT_QUESTION",
  "BULK_GIFTING",
  "PRESS",
  "OTHER",
]);

export const contactSubmissionSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email(),
  topic: contactTopicSchema,
  orderNumber: z.string().max(40).optional(),
  message: z.string().min(10).max(5000),
});

export const newsletterSignupSchema = z.object({
  email: z.string().email(),
  consentAccepted: z.boolean().refine((v) => v, {
    message: "Consent must be accepted.",
  }),
});
