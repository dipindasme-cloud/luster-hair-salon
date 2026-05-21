"use client";

import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Clock, ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

type Category = "all" | "cuts" | "color" | "treatments" | "styling";

interface Service {
  name: string;
  category: Category;
  price: string;
  priceFrom: boolean;
  duration: string;
  result: string;
  includes: string[];
  popular?: boolean;
  image: string;
}

const services: Service[] = [
  {
    name: "Signature Cut & Style",
    category: "cuts",
    price: "$85",
    priceFrom: false,
    duration: "60 min",
    result: "Precision cut tailored to your face shape",
    includes: ["Consultation", "Shampoo & condition", "Blowout finish"],
    popular: true,
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Balayage & Highlights",
    category: "color",
    price: "$180",
    priceFrom: true,
    duration: "2-3 hrs",
    result: "Natural, sun-kissed dimension",
    includes: ["Color consultation", "Hand-painted technique", "Toning & gloss", "Take-home care guide"],
    popular: true,
    image: "https://images.unsplash.com/photo-1560869713-da86a9ec0744?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Full Color",
    category: "color",
    price: "$150",
    priceFrom: false,
    duration: "90 min",
    result: "Rich, vibrant color with maximum shine",
    includes: ["Color matching", "Premium formula", "Deep conditioning", "Style finish"],
    image: "https://images.unsplash.com/photo-1595476108010-bdfc2ff28550?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Keratin Smoothing",
    category: "treatments",
    price: "$250",
    priceFrom: false,
    duration: "2.5 hrs",
    result: "Frizz-free for up to 12 weeks",
    includes: ["Hair analysis", "Keratin application", "Heat sealing", "Aftercare instructions"],
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Bridal Package",
    category: "styling",
    price: "$200",
    priceFrom: false,
    duration: "90 min",
    result: "Flawless look that lasts all day",
    includes: ["Trial session", "Day-of styling", "Touch-up kit", "Emergency support"],
    image: "https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Scalp Revival",
    category: "treatments",
    price: "$75",
    priceFrom: false,
    duration: "60 min",
    result: "Healthier scalp, stronger hair growth",
    includes: ["Scalp analysis", "Deep cleansing", "Treatment mask", "Massage therapy"],
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=600&q=80",
  },
];

const categories: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Cuts", value: "cuts" },
  { label: "Color", value: "color" },
  { label: "Treatments", value: "treatments" },
  { label: "Styling", value: "styling" },
];

export function Services() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const { ref, isInView } = useInView();

  const filteredServices = activeCategory === "all"
    ? services
    : services.filter((s) => s.category === activeCategory);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Section ref={ref} id="services" className="bg-background">
      <SectionHeading
        label="Services & Pricing"
        title="Find Your Perfect Service"
        subtitle="Transparent pricing. Every service includes a personal consultation."
      />

      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            aria-pressed={activeCategory === cat.value}
            className={cn(
              "px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm font-medium transition-all duration-300 min-h-[44px]",
              activeCategory === cat.value
                ? "bg-foreground text-background"
                : "bg-border/30 text-foreground/70 hover:bg-border/50"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
        {filteredServices.map((service, index) => (
          <div
            key={service.name}
            className={cn(
              "group rounded-2xl bg-surface border border-border overflow-hidden hover:border-accent-soft/50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-500",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: `${index * 80}ms` }}
          >
            {/* Service Image */}
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
              {service.popular && (
                <span className="absolute top-3 right-3 px-3 py-1 text-xs font-semibold bg-white/90 text-foreground rounded-full">
                  Most Booked
                </span>
              )}
            </div>

            {/* Service Details */}
            <div className="p-5 sm:p-6">
              <h3 className="text-xl font-serif font-medium text-foreground mb-2">{service.name}</h3>

              <p className="text-[15px] text-foreground/75 leading-relaxed mb-4">{service.result}</p>

              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border/30">
                <div className="flex items-baseline gap-1">
                  {service.priceFrom && (
                    <span className="text-sm text-foreground/60 font-sans">From </span>
                  )}
                  <span className="text-2xl font-serif font-medium text-foreground">{service.price}</span>
                </div>
                <span className="flex items-center gap-1 text-sm text-foreground/70">
                  <Clock className="w-3.5 h-3.5" />
                  {service.duration}
                </span>
              </div>

              <ul className="space-y-2.5 mb-5">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-foreground/80">
                    <Check className="w-3.5 h-3.5 text-accent-soft flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <Button variant="outline" size="sm" className="w-full group/btn" onClick={scrollToContact}>
                Book Appointment
                <ArrowRight className="ml-1.5 w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
