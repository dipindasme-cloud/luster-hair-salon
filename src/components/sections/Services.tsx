"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useInView } from "@/hooks/useInView";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ServiceImage {
  src: string;
  alt: string;
}

interface Service {
  name: string;
  price: string;
  priceFrom: boolean;
  description: string;
  images: ServiceImage[];
}

const services: Service[] = [
  {
    name: "Deep Conditioning",
    price: "$99",
    priceFrom: true,
    description: "Transform your hair with proper care from our skilled stylists, who specialize in restoring moisture and shine.",
    images: [
      { src: "https://images.unsplash.com/photo-1560869713-da86a9ec0744?auto=format&fit=crop&w=600&q=80", alt: "Deep conditioning treatment" },
      { src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80", alt: "Hair treatment process" },
      { src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=600&q=80", alt: "Conditioning result" },
    ],
  },
  {
    name: "Precision Haircuts",
    price: "$99",
    priceFrom: true,
    description: "Enhance your look with a perfectly tailored cut and styling that complements your features.",
    images: [
      { src: "https://images.unsplash.com/photo-1595476108010-bdfc2ff28550?auto=format&fit=crop&w=600&q=80", alt: "Precision haircut" },
      { src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80", alt: "Haircut styling" },
      { src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=600&q=80", alt: "Finished haircut" },
    ],
  },
  {
    name: "Customized Hair Coloring",
    price: "$79",
    priceFrom: true,
    description: "Achieve rich, dimensional color that complements your style and enhances your natural beauty.",
    images: [
      { src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=600&q=80", alt: "Hair coloring process" },
      { src: "https://images.unsplash.com/photo-1596178060810-72f53ce9a65c?auto=format&fit=crop&w=600&q=80", alt: "Color application" },
      { src: "https://images.unsplash.com/photo-1560869713-da86a9ec0744?auto=format&fit=crop&w=600&q=80", alt: "Coloring result" },
    ],
  },
  {
    name: "Keratin Smoothing",
    price: "$250",
    priceFrom: false,
    description: "Frizz-free smooth hair for up to 12 weeks with our premium keratin treatment.",
    images: [
      { src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80", alt: "Keratin treatment" },
      { src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=600&q=80", alt: "Smoothing process" },
      { src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80", alt: "Smooth hair result" },
    ],
  },
  {
    name: "Bridal Styling",
    price: "$200",
    priceFrom: false,
    description: "Flawless bridal look that lasts all day and night, including trial session.",
    images: [
      { src: "https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?auto=format&fit=crop&w=600&q=80", alt: "Bridal hairstyle" },
      { src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=600&q=80", alt: "Bridal styling" },
      { src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80", alt: "Wedding hair" },
    ],
  },
];

function ServiceCard({ service, isActive, imageIndex, onPrevImage, onNextImage, onSetImage }: {
  service: Service;
  isActive: boolean;
  imageIndex: number;
  onPrevImage: () => void;
  onNextImage: () => void;
  onSetImage: (index: number) => void;
}) {
  return (
    <div className="group h-full flex flex-col">
      {/* Image Container */}
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5 flex-shrink-0">
        {/* Images */}
        {service.images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.alt}
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-opacity duration-300",
              imageIndex === index ? "opacity-100" : "opacity-0"
            )}
          />
        ))}

        {/* Foggy overlay for inactive cards */}
        {!isActive && (
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px] z-10" />
        )}

        {/* Price Badge */}
        <div className={cn(
          "absolute top-4 right-4 z-20 px-4 py-1.5 rounded-full text-sm font-semibold",
          isActive ? "bg-orange-500 text-white" : "bg-orange-500/60 text-white/80"
        )}>
          {service.priceFrom ? "From " : ""}{service.price}
        </div>

        {/* Navigation Arrows */}
        <div className={cn(
          "absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-3 z-20 transition-opacity duration-300",
          isActive ? "opacity-0 group-hover:opacity-100" : "opacity-0"
        )}>
          <button
            onClick={(e) => { e.stopPropagation(); onPrevImage(); }}
            className="w-9 h-9 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center hover:bg-black/30 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onNextImage(); }}
            className="w-9 h-9 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center hover:bg-black/30 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Image Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
          {service.images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => { e.stopPropagation(); onSetImage(index); }}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                imageIndex === index
                  ? "bg-white w-4"
                  : "bg-white/50 hover:bg-white/70"
              )}
              aria-label={`View image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Text Content */}
      <div className={cn("transition-opacity duration-300 flex-grow", isActive ? "opacity-100" : "opacity-50")}>
        <h3 className="text-xl font-serif text-foreground mb-2">{service.name}</h3>
        <p className="text-[15px] text-foreground/70 leading-relaxed">{service.description}</p>
      </div>
    </div>
  );
}

export function Services() {
  const { ref, isInView } = useInView();
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [imageIndices, setImageIndices] = useState<number[]>(services.map(() => 0));
  const [isMobile, setIsMobile] = useState(false);
  
  // Swipe state
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

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

  const updateImageIndex = (serviceIndex: number, action: "next" | "prev" | "set", value?: number) => {
    setImageIndices((prev) => {
      const newIndices = [...prev];
      const current = newIndices[serviceIndex] || 0;
      if (action === "next") {
        newIndices[serviceIndex] = (current + 1) % services[serviceIndex].images.length;
      } else if (action === "prev") {
        newIndices[serviceIndex] = (current - 1 + services[serviceIndex].images.length) % services[serviceIndex].images.length;
      } else if (action === "set" && value !== undefined) {
        newIndices[serviceIndex] = value;
      }
      return newIndices;
    });
  };

  // Auto-advance
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, [isHovered, nextSlide]);

  // Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + services.length) % services.length;
      cards.push({ service: services[index], globalIndex: index, isActive: i === 0 });
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

      {/* Carousel Container - Fixed height to prevent vibration */}
      <div
        ref={containerRef}
        className="relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Desktop: 3 cards in fixed frame */}
        <div className="hidden md:block relative h-[580px]">
          <div className="absolute inset-0 flex items-center justify-center gap-6 lg:gap-8 max-w-5xl mx-auto px-4">
            {getVisibleCards().map(({ service, globalIndex, isActive }) => (
              <div
                key={`${service.name}-${globalIndex}`}
                className={cn(
                  "transition-all duration-300 flex-shrink-0 h-full",
                  isActive ? "w-[340px] lg:w-[380px] scale-100" : "w-[280px] lg:w-[300px] scale-[0.92]"
                )}
              >
                <ServiceCard
                  service={service}
                  isActive={isActive}
                  imageIndex={imageIndices[globalIndex]}
                  onPrevImage={() => updateImageIndex(globalIndex, "prev")}
                  onNextImage={() => updateImageIndex(globalIndex, "next")}
                  onSetImage={(idx) => updateImageIndex(globalIndex, "set", idx)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: 1 card with swipe */}
        <div className="md:hidden max-w-sm mx-auto px-4">
          <ServiceCard
            service={services[currentIndex]}
            isActive={true}
            imageIndex={imageIndices[currentIndex]}
            onPrevImage={() => updateImageIndex(currentIndex, "prev")}
            onNextImage={() => updateImageIndex(currentIndex, "next")}
            onSetImage={(idx) => updateImageIndex(currentIndex, "set", idx)}
          />
        </div>

        {/* Time Indicator (Non-interactive) */}
        <div className="flex justify-center gap-2 mt-8">
          {services.map((_, index) => (
            <div
              key={index}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                currentIndex === index
                  ? "bg-foreground w-8"
                  : "bg-foreground/20 w-4"
              )}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
