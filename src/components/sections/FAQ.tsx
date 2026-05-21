"use client";

import { useInView } from "@/hooks/useInView";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";

const faqs = [
  {
    question: "Are the prices listed final?",
    answer: "The prices shown are starting points for standard services. Your final price depends on hair length, density, and the complexity of the service. We'll confirm the exact price during your free consultation before any work begins — no surprises.",
  },
  {
    question: "How far in advance should I book?",
    answer: "We recommend 1-2 weeks for regular services and 3-4 weeks for bridal or special events. Walk-ins are welcome based on availability, but appointments guarantee your preferred stylist and time.",
  },
  {
    question: "What if I don't like my results?",
    answer: "We offer a 7-day satisfaction guarantee. If you're not completely happy, come back and we'll adjust it at no charge. This rarely happens, but we want you to feel confident booking.",
  },
  {
    question: "Do you offer free consultations?",
    answer: "Yes. Every new client gets a complimentary 15-minute consultation before their first service. We'll assess your hair, discuss your goals, and recommend the best approach.",
  },
  {
    question: "What's your cancellation policy?",
    answer: "We ask for 24 hours notice. Late cancellations or no-shows may incur a 50% fee. We understand life happens, so just communicate with us as early as possible.",
  },
  {
    question: "Are your products safe for sensitive scalps?",
    answer: "Absolutely. We carry hypoallergenic options and always ask about sensitivities during your consultation. Just let us know and we'll tailor our product selection.",
  },
];

export function FAQ() {
  const { ref, isInView } = useInView();

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Section ref={ref} id="faq" className="bg-surface">
      <div className={`max-w-3xl mx-auto transition-all duration-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
        <SectionHeading
          label="Questions?"
          title="Frequently Asked"
          subtitle="Quick answers before you book."
        />

        <div className="bg-background rounded-2xl p-6 sm:p-8 border border-border/30 mb-8">
          <Accordion items={faqs} />
        </div>

        <div className="text-center">
          <p className="text-foreground/75 mb-4">Still have questions?</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+13105550189"
              className="inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold tracking-wide rounded-full border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300 min-h-[44px]"
            >
              Call Us: (310) 555-0189
            </a>
            <Button variant="outline" onClick={scrollToContact}>
              Or send us a message
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
