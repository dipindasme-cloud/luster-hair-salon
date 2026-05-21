"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  id: string;
}

function AccordionItem({ question, answer, isOpen, onToggle, id }: AccordionItemProps) {
  return (
    <div className="border-b border-border/50">
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left min-h-[44px]"
        aria-expanded={isOpen}
        aria-controls={`${id}-panel`}
      >
        <span className="text-lg font-serif text-foreground pr-8">{question}</span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-accent-soft flex-shrink-0 transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        id={`${id}-panel`}
        role="region"
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 pb-6" : "max-h-0"
        )}
      >
        <p className="text-foreground/80 leading-relaxed text-base">{answer}</p>
      </div>
    </div>
  );
}

interface AccordionProps {
  items: { question: string; answer: string }[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set());

  const toggle = (index: number) => {
    const next = new Set(openIndices);
    if (next.has(index)) {
      next.delete(index);
    } else {
      next.add(index);
    }
    setOpenIndices(next);
  };

  return (
    <div className="divide-y divide-border/30">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndices.has(index)}
          onToggle={() => toggle(index)}
          id={`faq-${index}`}
        />
      ))}
    </div>
  );
}
