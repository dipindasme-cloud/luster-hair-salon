"use client";

import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Clock, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Category = "all" | "cuts" | "color" | "treatments" | "styling";

interface Service {
  name: string;
  category: Category;
  price: string;
  duration: string;
  result: string;
  popular?: boolean;
  image: string;
}

const services: Service[] = [
  {
    name: "Signature Cut & Style",
    category: "cuts",
    price: "$85",
    duration: "60 min",
    result: "Precision cut tailored to your face shape and lifestyle",
    popular: true,
    image: "https://images.unsplash.com/photo-1595476108010-bdfc2ff28550?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Luxury Blowout",
    category: "styling",
    price: "$55",
    duration: "45 min",
    result: "Voluminous, salon-fresh finish that lasts for days",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Balayage & Highlights",
    category: "color",
    price: "$180",
    duration: "120 min",
    result: "Natural, sun-kissed dimension with seamless blending",
    popular: true,
    image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Keratin Smoothing",
    category: "treatments",
    price: "$250",
    duration: "150 min",
    result: "Frizz-free, silky smooth hair for up to 12 weeks",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Deep Conditioning",
    category: "treatments",
    price: "$65",
    duration: "45 min",
    result: "Intense moisture restoration for dry, damaged hair",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Full Color Transformation",
    category: "color",
    price: "$150",
    duration: "90 min",
    result: "Rich, vibrant color with maximum shine and longevity",
    image: "https://images.unsplash.com/photo-1596178060810-72f53ce9a65c?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Bridal Styling",
    category: "styling",
    price: "$200",
    duration: "90 min",
    result: "Elegant, long-lasting bridal look with trial session",
    image: "https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Scalp Revival Treatment",
    category: "treatments",
    price: "$75",
    duration: "60 min",
    result: "Rejuvenated scalp for healthier, stronger hair growth",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=600&q=80",
  },
];

const categories: { label: string; value: Category }[] = [
  { label: "All Services", value: "all" },
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

  return (
    <Section ref={ref} id="services" className="bg-ivory">
      <SectionHeading
        label="Our Services"
        title="Tailored Treatments for Every Need"
        subtitle="Each service includes a personal consultation to ensure the perfect result for your unique hair."
      />

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={cn(
              "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 min-h-[44px]",
              activeCategory === cat.value
                ? "bg-charcoal text-ivory"
                : "bg-warm-beige/30 text-charcoal/70 hover:bg-warm-beige/50"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredServices.map((service, index) => (
          <div
            key={service.name}
            className={cn(
              "group rounded-2xl bg-soft-cream border border-warm-beige/30 overflow-hidden hover:border-muted-rose/50 hover:shadow-xl transition-all duration-500",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
              {service.popular && (
                <span className="absolute top-3 right-3 px-3 py-1 text-xs font-medium bg-muted-rose text-white rounded-full">
                  Popular
                </span>
              )}
              <div className="absolute bottom-3 left-3 right-3">
                <h3 className="text-lg font-serif text-white drop-shadow-lg">
                  {service.name}
                </h3>
              </div>
            </div>

            <div className="p-5">
              <p className="text-charcoal/60 text-sm leading-relaxed mb-4">{service.result}</p>

              <div className="flex items-center justify-between pt-4 border-t border-warm-beige/30">
                <div className="flex items-center gap-3">
                  <span className="text-xl font-serif text-charcoal">{service.price}</span>
                  <span className="flex items-center gap-1 text-xs text-charcoal/50">
                    <Clock className="w-3.5 h-3.5" />
                    {service.duration}
                  </span>
                </div>
                <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                  Book <ArrowRight className="ml-1 w-3 h-3" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
