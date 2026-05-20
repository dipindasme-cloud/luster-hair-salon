"use client";

import { useInView } from "@/hooks/useInView";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Gem, Users, Clock, Shield } from "lucide-react";

const reasons = [
  {
    icon: Gem,
    title: "Premium Products",
    description: "We exclusively use professional-grade, salon-exclusive products that deliver superior results and long-term hair health.",
  },
  {
    icon: Users,
    title: "Master Stylists",
    description: "Our team averages 10+ years of experience with continuous training in the latest techniques and trends.",
  },
  {
    icon: Clock,
    title: "Unrushed Experience",
    description: "We never double-book. Every appointment receives our full attention for meticulous, personalized results.",
  },
  {
    icon: Shield,
    title: "Satisfaction Guarantee",
    description: "Not completely in love with your results? We&apos;ll make it right within 7 days, no questions asked.",
  },
];

export function WhyChooseUs() {
  const { ref, isInView } = useInView();

  return (
    <Section ref={ref} className="bg-charcoal text-ivory">
      
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-muted-rose text-sm font-medium tracking-widest uppercase mb-4">
            Why Luster
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium leading-tight">
            What Sets Us Apart
          </h2>
          <p className="mt-6 text-lg text-ivory/60 max-w-2xl mx-auto">
            We&apos;ve built our reputation on the details that matter most to our clients.
            </p>
        </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {reasons.map((reason, index) => (
          <div
            key={reason.title}
            className={`text-center p-8 rounded-2xl bg-ivory/5 border border-ivory/10 hover:bg-ivory/10 transition-all duration-500 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-muted-rose/20 flex items-center justify-center">
              <reason.icon className="w-7 h-7 text-muted-rose" />
            </div>
            <h3 className="text-xl font-serif mb-3">{reason.title}</h3>
            <p className="text-ivory/60 text-sm leading-relaxed">{reason.description}</p>
          </div>
        ))}
      </div>
      </div>
    </Section>
  );
}
