"use client";

import { useState, useEffect, useCallback } from "react";
import { useInView } from "@/hooks/useInView";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Clock, ArrowRight } from "lucide-react";

interface ServiceImage {
  src: string;
  alt: string;
}

interface Service {
  name: string;
  category: string;
  price: string;
  priceFrom: boolean;
  duration: string;
  description: string;
  includes: string[];
  popular?: boolean;
  images: ServiceImage[];
}

const services: Service[] = [
  {
    name: "Signature Cut & Style",
    category: "cuts",
    price: "$85",
    priceFrom: false,
    duration: "60 min",
    description: "Precision cut tailored to your face shape and lifestyle",
    includes: ["Consultation", "Shampoo & condition", "Blowout finish"],
    popular: true,
    images: [
      { src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80", alt: "Signature cut front view" },
      { src: "https://images.unsplash.com/photo-1595476108010-bdfc2ff28550?auto=format&fit=crop&w=600&q=80", alt: "Signature cut side view" },
      { src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=600&q=80", alt: "Signature cut back view" },
    ],
  },
  {
    name: "Balayage & Highlights",
    category: "color",
    price: "$180",
    priceFrom: true,
    duration: "2-3 hrs",
    description: "Natural, sun-kissed dimension with hand-painted technique",
    includes: ["Color consultation", "Hand-painted technique", "Toning & gloss", "Take-home care guide"],
    popular: true,
    images: [
      { src: "https://images.unsplash.com/photo-1560869713-da86a9ec0744?auto=format&fit=crop&w=600&q=80", alt: "Balayage result 1" },
      { src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=600&q=80", alt: "Balayage result 2" },
      { src: "https://images.unsplash.com/photo-1595476108010-bdfc2ff28550?auto=format&fit=crop&w=600&q=80", alt: "Balayage result 3" },
    ],
  },
  {
    name: "Full Color",
    category: "color",
    price: "$150",
    priceFrom: false,
    duration: "90 min",
    description: "Rich, vibrant color with maximum shine and depth",
    includes: ["Color matching", "Premium formula", "Deep conditioning", "Style finish"],
    images: [
      { src: "https://images.unsplash.com/photo-1596178060810-72f53ce9a65c?auto=format&fit=crop&w=600&q=80", alt: "Full color result 1" },
      { src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=600&q=80", alt: "Full color result 2" },
      { src: "https://images.unsplash.com/photo-1560869713-da86a9ec0744?auto=format&fit=crop&w=600&q=80", alt: "Full color result 3" },
    ],
  },
  {
    name: "Keratin Smoothing",
    category: "treatments",
    price: "$250",
    priceFrom: false,
    duration: "2.5 hrs",
    description: "Frizz-free smooth hair for up to 12 weeks",
    includes: ["Hair analysis", "Keratin application", "Heat sealing", "Aftercare instructions"],
    images: [
      { src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80", alt: "Keratin result 1" },
      { src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=600&q=80", alt: "Keratin result 2" },
      { src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80", alt: "Keratin result 3" },
    ],
  },
  {
    name: "Bridal Package",
    category: "styling",
    price: "$200",
    priceFrom: false,
    duration: "90 min",
    description: "Flawless bridal look that lasts all day and night",
    includes: ["Trial session", "Day-of styling", "Touch-up kit", "Emergency support"],
    images: [
      { src: "https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?auto=format&fit=crop&w=600&q=80", alt: "Bridal styling 1" },
      { src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=600&q=80", alt: "Bridal styling 2" },
      { src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80", alt: "Bridal styling 3" },
    ],
  },
];

function ServiceCard({ service, isActive, onBook }: { service: Service; isActive: boolean; onBook: () => void }) {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div
      className={cn(
        "group relative rounded-2xl overflow-hidden bg-surface border border-border transition-all duration-500",
        isActive
          ? "scale-100 shadow-lg z-10"
          : "scale-[0.92] opacity-60 z-0"
      )}
    >
      {/* Foggy overlay on inactive cards */}
      {!isActive && (
        <div className="absolute inset-0 bg-foreground/20 backdrop-blur-[2px] z-20 pointer-events-none" />
      )}

      <div className="p-5 sm:p-6">
        {/* Image Carousel */}
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-5">
          {service.images.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={img.alt}
              className={cn(
                "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
                currentImage === index ? "opacity-100" : "opacity-0"
              )}
            />
          ))}

          {/* Image dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {service.images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImage(index);
                }}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  currentImage === index
                    ? "bg-white w-4"
                    : "bg-white/50 hover:bg-white/70"
                )}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Popular badge */}
        {service.popular && (
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-foreground text-background rounded-full mb-3">
            Most Booked
          </span>
        )}

        {/* Service Info */}
        <h3 className="text-xl font-serif font-medium text-foreground mb-2">{service.name}</h3>
        <p className="text-[15px] text-foreground/75 leading-relaxed mb-4">{service.description}</p>

        {/* Price & Duration */}
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

        {/* Includes */}
        <ul className="space-y-2 mb-5">
          {service.includes.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-soft flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        {/* Book Button */}
        <Button variant="outline" size="sm" className="w-full group/btn" onClick={onBook}>
          Book Appointment
          <ArrowRight className="ml-1.5 w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </div>
    </div>
  );
}

export function Services() {
  const { ref, isInView } = useInView();
  const [currentIndex, setCurrentIndex] = useState(1); // Start at middle
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  }, []);

  // Auto-advance on mobile
  useEffect(() => {
    if (!isMobile || isHovered) return;
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [isMobile, isHovered, nextSlide]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  // Get visible cards
  const getVisibleCards = () => {
    const cards = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + services.length) % services.length;
      cards.push({ service: services[index], index, isActive: i === 0 });
    }
    return cards;
  };

  return (
    <Section ref={ref} id="services" className="bg-background">
      {/* Header */}
      <div className={cn("max-w-3xl mx-auto text-center mb-12 md:mb-16 transition-all duration-500", isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
        <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-4">
          Services & Pricing
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight mb-6">
          Expert Premium Hair Services
          <span className="block italic text-accent-soft">Tailored for You</span>
        </h2>
        <p className="text-lg text-foreground/80 max-w-xl mx-auto leading-relaxed">
          Transparent pricing. Every service includes a personal consultation.
        </p>
      </div>

      {/* Carousel */}
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Desktop: 3 cards */}
        <div className="hidden md:flex items-center justify-center gap-4 lg:gap-6">
          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 lg:left-4 z-30 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-background"
            aria-label="Previous service"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>

          {/* Cards */}
          <div className="flex items-center justify-center gap-4 lg:gap-6 w-full max-w-5xl">
            {getVisibleCards().map(({ service, index, isActive }) => (
              <div
                key={`${service.name}-${index}`}
                className={cn(
                  "transition-all duration-500 flex-shrink-0",
                  isActive ? "w-[320px] lg:w-[380px]" : "w-[260px] lg:w-[300px]"
                )}
              >
                <ServiceCard service={service} isActive={isActive} onBook={scrollToContact} />
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 lg:right-4 z-30 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-background"
            aria-label="Next service"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* Mobile: 1 card with swipe */}
        <div className="md:hidden relative">
          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center opacity-0 active:opacity-100 transition-opacity"
            aria-label="Previous service"
          >
            <ChevronLeft className="w-4 h-4 text-foreground" />
          </button>

          {/* Active Card */}
          <div className="w-full max-w-sm mx-auto">
            <ServiceCard service={services[currentIndex]} isActive={true} onBook={scrollToContact} />
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center opacity-0 active:opacity-100 transition-opacity"
            aria-label="Next service"
          >
            <ChevronRight className="w-4 h-4 text-foreground" />
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                currentIndex === index
                  ? "bg-foreground w-6"
                  : "bg-foreground/30 hover:bg-foreground/50"
              )}
              aria-label={`Go to service ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
