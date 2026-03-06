"use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

interface TestimonialItem {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

interface TestimonialsAnimatedProps {
  title?: string;
  subtitle?: string;
  headline?: string;
  subheadline?: string;
  testimonials: TestimonialItem[];
  autoplay?: boolean;
}

export default function TestimonialsAnimated({
  title,
  subtitle,
  headline,
  subheadline,
  testimonials = [],
  autoplay = true,
}: Partial<TestimonialsAnimatedProps>) {
  const resolvedHeadline = headline ?? title ?? 'What shoppers are saying';
  const resolvedSubheadline = subheadline ?? subtitle ?? 'Real reviews from customers who trust us for quality and value.';
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{resolvedHeadline}</h2>
          {resolvedSubheadline && <p className="mt-4 text-lg text-muted-foreground">{resolvedSubheadline}</p>}
        </div>
        {testimonials.length > 0 && <AnimatedTestimonials testimonials={testimonials} autoplay={autoplay} />}
      </div>
    </section>
  );
}
