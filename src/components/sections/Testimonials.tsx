"use client";

import { useInView } from "@/hooks/useInView";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  treatment: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    role: "Marketing Director",
    content: "I&apos;ve been to salons across the city, but Luster is in a league of its own. My balayage looks so natural, and my hair has never felt healthier. The attention to detail is remarkable.",
    rating: 5,
    treatment: "Balayage & Highlights",
  },
  {
    name: "Emma Rodriguez",
    role: "Bride",
    content: "They made my wedding day absolutely perfect. The trial session was thorough, and on the day itself, my hair stayed flawless from ceremony to last dance. I couldn&apos;t have asked for more.",
    rating: 5,
    treatment: "Bridal Styling",
  },
  {
    name: "Jessica Chen",
    role: "Entrepreneur",
    content: "After years of damage from DIY coloring, Luster restored my hair to a condition I thought was impossible. The keratin treatment changed my life. I wake up with great hair every day.",
    rating: 5,
    treatment: "Keratin Smoothing",
  },
  {
    name: "Olivia Thompson",
    role: "Teacher",
    content: "The scalp treatment was a game-changer for my thinning hair. Within three sessions, I noticed real improvement. The team genuinely cares about results, not just quick fixes.",
    rating: 5,
    treatment: "Scalp Revival Treatment",
  },
];

export function Testimonials() {
  const { ref, isInView } = useInView();

  return (
    <Section ref={ref} className="bg-soft-cream">
      <SectionHeading
        label="Client Stories"
        title="Real Results, Real Joy"
        subtitle="Hear from clients who found their hair confidence at Luster."
      />

      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.name}
            className={`p-8 rounded-2xl bg-ivory border border-warm-beige/30 hover:shadow-lg transition-all duration-500 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-muted-rose text-muted-rose" />
              ))}
            </div>

            <p className="text-charcoal/80 leading-relaxed mb-6 italic font-serif text-lg">
              &ldquo;{testimonial.content}&rdquo;
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-warm-beige/30">
              <div>
                <div className="font-medium text-charcoal">{testimonial.name}</div>
                <div className="text-sm text-charcoal/50">{testimonial.role}</div>
              </div>
              <span className="px-3 py-1 text-xs font-medium bg-muted-rose/20 text-muted-rose rounded-full">
                {testimonial.treatment}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
