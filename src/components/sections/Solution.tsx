"use client";

import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles, Shield, Leaf } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Transformative Results",
    description: "Every treatment is designed to deliver visible, lasting transformation from your very first visit.",
  },
  {
    icon: Shield,
    title: "Premium Products Only",
    description: "We use only salon-grade, professional products that protect and nourish your hair long-term.",
  },
  {
    icon: Leaf,
    title: "Gentle & Nourishing",
    description: "Our methods prioritize hair health, ensuring beauty never comes at the cost of damage.",
  },
];

export function Solution() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-soft-cream">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-700 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <span className="inline-block text-muted-rose text-sm font-medium tracking-widest uppercase mb-4">
              The Luster Difference
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium leading-tight mb-6">
              Expert Care That
              <span className="italic text-muted-rose"> Transforms</span>
            </h2>
            <p className="text-lg text-charcoal/70 leading-relaxed mb-10">
              We don&apos;t just treat symptoms. Our expert stylists diagnose the root cause of your hair concerns 
              and create a personalized treatment plan that delivers lasting results. Every visit leaves your 
              hair healthier, shinier, and more beautiful than before.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className={`flex gap-4 transition-all duration-500 ${
                    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${300 + index * 150}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-muted-rose/20 flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 text-muted-rose" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif mb-1">{benefit.title}</h3>
                    <p className="text-charcoal/60 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={`mt-10 transition-all duration-500 delay-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <Button variant="outline" className="group">
                See Our Services
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          <div className={`relative transition-all duration-700 delay-300 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80"
                alt="Woman with beautiful hair"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-charcoal text-ivory p-6 rounded-xl shadow-xl">
              <div className="text-3xl font-serif">98%</div>
              <div className="text-sm text-ivory/70">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
