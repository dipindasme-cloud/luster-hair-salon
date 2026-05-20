"use client";

import { useInView } from "@/hooks/useInView";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";

const faqs = [
  {
    question: "How far in advance should I book?",
    answer: "We recommend 1-2 weeks for regular services and 3-4 weeks for bridal or special events. Walk-ins are welcome based on availability, but appointments guarantee your preferred stylist and time.",
  },
  {
    question: "What if I don&apos;t like my results?",
    answer: "We offer a 7-day satisfaction guarantee. If you&apos;re not completely happy, come back and we&apos;ll adjust it at no charge. This rarely happens, but we want you to feel confident booking.",
  },
  {
    question: "Do you offer free consultations?",
    answer: "Yes. Every new client gets a complimentary 15-minute consultation before their first service. We&apos;ll assess your hair, discuss your goals, and recommend the best approach.",
  },
  {
    question: "What&apos;s your cancellation policy?",
    answer: "We ask for 24 hours notice. Late cancellations or no-shows may incur a 50% fee. We understand life happens, so just communicate with us as early as possible.",
  },
  {
    question: "Are your products safe for sensitive scalps?",
    answer: "Absolutely. We carry hypoallergenic options and always ask about sensitivities during your consultation. Just let us know and we&apos;ll tailor our product selection.",
  },
];

export function FAQ() {
  const { ref, isInView } = useInView();

  return (
    <Section ref={ref} id="faq" className="bg-soft-cream">
      <div className={`max-w-3xl mx-auto transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <SectionHeading
          label="Questions?"
          title="Frequently Asked"
          subtitle="Quick answers before you book."
        />

        <div className="bg-ivory rounded-2xl p-6 sm:p-8 border border-warm-beige/30 mb-8">
          <Accordion items={faqs} />
        </div>

        <div className="text-center">
          <p className="text-charcoal/60 mb-4">Still have questions?</p>
          <Button variant="outline">
            Call Us: (310) 555-0189
          </Button>
        </div>
      </div>
    </Section>
  );
}
