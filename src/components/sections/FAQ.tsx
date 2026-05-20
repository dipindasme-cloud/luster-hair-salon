"use client";

import { useInView } from "@/hooks/useInView";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";

const faqs = [
  {
    question: "How far in advance should I book my appointment?",
    answer: "We recommend booking 1-2 weeks in advance for regular services, and 3-4 weeks for bridal or special event styling. Walk-ins are welcome based on availability, but appointments are preferred to ensure your preferred stylist and time slot.",
  },
  {
    question: "What should I bring to my first consultation?",
    answer: "Bring inspiration photos of styles you love, a list of any hair products you currently use, and information about any chemical treatments you&apos;ve had in the past 6 months. This helps us provide the most accurate recommendation.",
  },
  {
    question: "Do you offer packages for multiple services?",
    answer: "Yes! We offer curated packages for bridal parties, special events, and first-time clients. Contact us for personalized package pricing based on your specific needs and group size.",
  },
  {
    question: "How long does a typical color service take?",
    answer: "A single-process color takes about 60-90 minutes. Balayage or highlights typically take 2-3 hours. Full color corrections can take 3-4 hours. We never rush color services to ensure the best possible result.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "We require 24 hours notice for cancellations or rescheduling. Late cancellations or no-shows may incur a fee of 50% of the service cost. We understand life happens, so please communicate with us as soon as possible.",
  },
  {
    question: "Do you use products that are safe for sensitive scalps?",
    answer: "Absolutely. We carry a range of gentle, hypoallergenic products specifically formulated for sensitive scalps. During your consultation, please inform us of any allergies or sensitivities so we can tailor our product selection.",
  },
];

export function FAQ() {
  const { ref, isInView } = useInView();

  return (
    <Section ref={ref} id="faq" className="bg-soft-cream">
      <div className={`max-w-3xl mx-auto transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <SectionHeading
          label="FAQ"
          title="Common Questions"
          subtitle="Everything you need to know before your visit."
        />

        <div className="bg-ivory rounded-2xl p-8 md:p-10 border border-warm-beige/30">
          <Accordion items={faqs} />
        </div>
      </div>
    </Section>
  );
}
