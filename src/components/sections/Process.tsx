"use client";

import { useInView } from "@/hooks/useInView";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MessageCircle, Scissors, Sparkles } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    step: "01",
    title: "Consultation",
    description: "We begin with a thorough consultation to understand your goals, assess your hair condition, and discuss the best approach for your desired result.",
  },
  {
    icon: Scissors,
    step: "02",
    title: "Treatment",
    description: "Your stylist expertly executes the chosen service using premium products and proven techniques, with care and precision at every step.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Final Styling",
    description: "We complete your look with professional styling and provide personalized aftercare advice to maintain your results at home.",
  },
];

export function Process() {
  const { ref, isInView } = useInView();

  return (
    <Section ref={ref} className="bg-ivory">
      <SectionHeading
        label="How It Works"
        title="Your Journey to Beautiful Hair"
        subtitle="Three simple steps to the hair you&apos;ve always wanted."
      />

      <div className="grid md:grid-cols-3 gap-8 relative">
        <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-px bg-warm-beige/50" />

        {steps.map((step, index) => (
          <div
            key={step.step}
            className={`relative text-center transition-all duration-500 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-soft-cream border-2 border-warm-beige/50 flex items-center justify-center relative z-10">
              <step.icon className="w-8 h-8 text-muted-rose" />
            </div>
            <span className="text-muted-rose text-sm font-medium tracking-widest">Step {step.step}</span>
            <h3 className="text-2xl font-serif mt-2 mb-4">{step.title}</h3>
            <p className="text-charcoal/60 leading-relaxed max-w-xs mx-auto">{step.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
