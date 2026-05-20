"use client";

import { useInView } from "@/hooks/useInView";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  location: string;
  content: string;
  rating: number;
  treatment: string;
  stylist: string;
  visits: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    location: "Beverly Hills",
    content: "I spent years trying to fix my DIY box color disasters. Isabella corrected everything in one session. My hair went from brassy orange to the most natural, expensive-looking blonde I&apos;ve ever had. I&apos;ve been coming back every 8 weeks for two years now.",
    rating: 5,
    treatment: "Color Correction",
    stylist: "Isabella L.",
    visits: "Client for 2 years",
  },
  {
    name: "Emma R.",
    location: "Santa Monica",
    content: "My wedding hair was the one thing I was stressed about. Sophia did a trial that made me cry happy tears. On the day, my updo stayed perfect through 12 hours of photos, ceremony, and dancing. Six of my bridesmaids booked Luster after seeing my photos.",
    rating: 5,
    treatment: "Bridal Styling",
    stylist: "Sophia C.",
    visits: "Referred 6 clients",
  },
  {
    name: "Jessica C.",
    location: "West Hollywood",
    content: "I was skeptical about keratin treatments after a bad experience elsewhere. Aria walked me through exactly what she&apos;d use and why. Three months later, my hair is still smooth, shiny, and I spend 10 minutes on my morning routine instead of 40.",
    rating: 5,
    treatment: "Keratin Smoothing",
    stylist: "Aria P.",
    visits: "Client for 1 year",
  },
];

export function Testimonials() {
  const { ref, isInView } = useInView();

  return (
    <Section ref={ref} className="bg-soft-cream">
      <SectionHeading
        label="Client Reviews"
        title="What Our Clients Say"
        subtitle="Real stories from real people. No filters, no scripts."
      />

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.name}
            className={`relative p-6 sm:p-8 rounded-2xl bg-ivory border border-warm-beige/30 hover:shadow-lg transition-all duration-500 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <Quote className="w-8 h-8 text-muted-rose/30 mb-4" />

            <div className="flex gap-1 mb-4">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-muted-rose text-muted-rose" />
              ))}
            </div>

            <p className="text-charcoal/80 leading-relaxed mb-6 text-sm sm:text-base">
              {testimonial.content}
            </p>

            <div className="pt-4 border-t border-warm-beige/30">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <div className="font-medium text-charcoal">{testimonial.name}</div>
                  <div className="text-sm text-charcoal/50">{testimonial.location}</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 text-xs font-medium bg-muted-rose/15 text-muted-rose rounded-full">
                  {testimonial.treatment}
                </span>
                <span className="px-2.5 py-1 text-xs font-medium bg-charcoal/10 text-charcoal/60 rounded-full">
                  {testimonial.visits}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={`mt-12 text-center transition-all duration-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-ivory border border-warm-beige/30">
          <div className="flex -space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-muted-rose text-muted-rose" />
            ))}
          </div>
          <span className="text-sm font-medium text-charcoal">4.9 out of 5</span>
          <span className="text-sm text-charcoal/50">based on 500+ reviews</span>
        </div>
      </div>
    </Section>
  );
}
