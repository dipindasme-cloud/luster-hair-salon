"use client";

import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Droplets, Award, Heart } from "lucide-react";

const values = [
  {
    icon: Droplets,
    title: "Hydration First",
    description: "Every treatment begins with moisture assessment to restore your hair&apos;s natural balance.",
  },
  {
    icon: Award,
    title: "Certified Experts",
    description: "Our stylists hold advanced certifications in cutting, coloring, and restorative treatments.",
  },
  {
    icon: Heart,
    title: "Client-Centric",
    description: "Your comfort and satisfaction guide every decision we make, from consultation to styling.",
  },
];

export function About() {
  const { ref, isInView } = useInView();

  return (
    <Section ref={ref} id="about" className="bg-soft-cream">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className={`order-2 lg:order-1 transition-all duration-700 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
          <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80"
              alt="Luster salon interior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className={`order-1 lg:order-2 transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
          <span className="inline-block text-muted-rose text-sm font-medium tracking-widest uppercase mb-4">
            Our Philosophy
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium leading-tight mb-6">
            Beauty Rooted in
            <span className="italic text-muted-rose"> Care</span>
          </h2>
          <p className="text-lg text-charcoal/70 leading-relaxed mb-8">
            At Luster, we believe great hair starts with genuine care. Founded over a decade ago, 
            our salon was built on a simple promise: to treat every client&apos;s hair as if it were our own. 
            We combine artistry with science, using only premium products and techniques that protect 
            and enhance your natural beauty.
          </p>

          <div className="space-y-6 mb-10">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`flex gap-4 transition-all duration-500 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${400 + index * 150}ms` }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-muted-rose/20 flex items-center justify-center">
                  <value.icon className="w-5 h-5 text-muted-rose" />
                </div>
                <div>
                  <h3 className="text-lg font-serif mb-1">{value.title}</h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>

          <Button variant="outline">Learn More About Us</Button>
        </div>
      </div>
    </Section>
  );
}
