"use client";

import { useInView } from "@/hooks/useInView";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Gem, Shield, Award, Heart, ArrowRight } from "lucide-react";

const reasons = [
  {
    icon: Gem,
    title: "Premium Products Only",
    description: "We use exclusively salon-grade formulas from Olaplex, Kerastase, and Redken. No drugstore substitutes, ever.",
  },
  {
    icon: Award,
    title: "Master-Level Stylists",
    description: "Every stylist holds advanced certifications and completes 40+ hours of continuing education annually.",
  },
  {
    icon: Shield,
    title: "7-Day Satisfaction Guarantee",
    description: "Not completely in love with your results? We&apos;ll adjust it within 7 days, no questions asked.",
  },
  {
    icon: Heart,
    title: "Never Rushed, Never Double-Booked",
    description: "Your appointment gets our full attention. We build buffer time between clients so you never feel hurried.",
  },
];

export function WhyChooseUs() {
  const { ref, isInView } = useInView();

  return (
    <Section ref={ref} className="bg-charcoal text-ivory">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className={`transition-all duration-700 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
          <span className="inline-block text-muted-rose text-sm font-medium tracking-widest uppercase mb-4">
            Why Luster
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium leading-tight mb-6">
            The Details That
            <span className="italic text-muted-rose"> Matter</span>
          </h2>
          <p className="text-lg text-ivory/60 leading-relaxed mb-10">
            We&apos;ve built our reputation on the things other salons overlook. 
            From the products we use to the time we give each client, every detail 
            is designed around one goal: your best hair.
          </p>

          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className={`flex gap-4 transition-all duration-500 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-muted-rose/20 flex items-center justify-center">
                  <reason.icon className="w-5 h-5 text-muted-rose" />
                </div>
                <div>
                  <h3 className="text-lg font-serif mb-1">{reason.title}</h3>
                  <p className="text-ivory/60 text-sm leading-relaxed">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={`mt-10 transition-all duration-500 delay-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <Button variant="outline" className="border-ivory/30 text-ivory hover:bg-ivory hover:text-charcoal group">
              Book Your Visit
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        <div className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-300 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
          <div className="space-y-4">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=400&q=80"
                alt="Salon interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted-rose/20 flex items-center justify-center p-6">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-serif text-muted-rose">12+</div>
                <div className="text-sm text-ivory/70 mt-2">Years of Excellence</div>
              </div>
            </div>
          </div>
          <div className="space-y-4 pt-8">
            <div className="aspect-square rounded-2xl overflow-hidden bg-ivory/10 flex items-center justify-center p-6">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-serif text-muted-rose">5K+</div>
                <div className="text-sm text-ivory/70 mt-2">Happy Clients</div>
              </div>
            </div>
            <div className="aspect-[3/4] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=400&q=80"
                alt="Stylist at work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
