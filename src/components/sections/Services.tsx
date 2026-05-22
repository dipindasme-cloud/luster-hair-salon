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
    description:
      "Transform your hair with proper care from our skilled stylists, restoring moisture and shine.",
    images: [
      { src: "/services/deep- (1).png", alt: "Deep conditioning treatment" },
      { src: "/services/deep- (2).png", alt: "Hair treatment process" },
      { src: "/services/deep- (3).png", alt: "Conditioning result" },
    ],
  },
  {
    name: "Precision Haircuts",
    price: "$99",
    priceFrom: true,
    description:
      "Enhance your look with a perfectly tailored cut and styling that complements your features.",
    images: [
      { src: "/services/2 (1).png", alt: "Precision haircut" },
      { src: "/services/2 (2).png", alt: "Haircut styling" },
      { src: "/services/2 (3).png", alt: "Finished haircut" },
    ],
  },
  {
    name: "Customized Hair Coloring",
    price: "$79",
    priceFrom: true,
    description:
      "Achieve rich, dimensional color that complements your style and enhances your natural beauty.",
    images: [
      { src: "/services/3 (1).png", alt: "Hair coloring process" },
      { src: "/services/3 (2).png", alt: "Color application" },
      { src: "/services/3 (3).png", alt: "Coloring result" },
    ],
  },
  {
    name: "Keratin Smoothing",
    price: "$250",
    priceFrom: false,
    description:
      "Frizz-free smooth hair for up to 12 weeks with our premium keratin treatment.",
    images: [
      { src: "/services/4 (1).png", alt: "Keratin treatment" },
      { src: "/services/4 (2).png", alt: "Smoothing process" },
      { src: "/services/4 (3).png", alt: "Smooth hair result" },
    ],
  },
  {
    name: "Bridal Styling",
    price: "$200",
    priceFrom: false,
    description:
      "Flawless bridal look that lasts all day and night, including trial session.",
    images: [
      { src: "/services/5 (1).png", alt: "Bridal hairstyle" },
      { src: "/services/5 (2).png", alt: "Bridal styling" },
      { src: "/services/5 (3).png", alt: "Wedding hair" },
    ],
  },
];

function ServiceCard({
  service,
  isActive,
  imageIndex,
  onPrevImage,
  onNextImage,
  onSetImage,
}: {
  service: Service;
  isActive: boolean;
  imageIndex: number;
  onPrevImage: () => void;
  onNextImage: () => void;
  onSetImage: (index: number) => void;
}) {
  return (
    <div className="group flex h-full flex-col">
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 flex-shrink-0">
        {service.images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.alt}
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-opacity duration-300",
              imageIndex === index ? "opacity-100" : "opacity-0"
            )}
          />
        ))}

        <div
          className={cn(
            "absolute top-4 right-4 z-20 rounded-full px-3.5 py-1.5 text-sm font-medium",
            isActive
              ? "bg-orange-500 text-white"
              : "bg-orange-500/85 text-white"
          )}
        >
          {service.priceFrom ? "From " : ""}
          {service.price}
        </div>

        <div
          className={cn(
            "absolute inset-x-0 top-1/2 z-20 flex -translate-y-1/2 justify-between px-3 transition-opacity duration-300",
            isActive ? "opacity-100 md:opacity-0 md:group-hover:opacity-100" : "opacity-100"
          )}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrevImage();
            }}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-black/25 text-white transition-colors hover:bg-black/35"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onNextImage();
            }}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-black/25 text-white transition-colors hover:bg-black/35"
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-1.5">
          {service.images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                onSetImage(index);
              }}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                imageIndex === index
                  ? "w-4 bg-white"
                  : "w-2 bg-white/55 hover:bg-white/75"
              )}
              aria-label={`View image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div
        className={cn(
          "flex-grow transition-all duration-300",
          isActive ? "opacity-100" : "opacity-70"
        )}
      >
        <h3 className="mb-1.5 text-lg lg:text-xl font-serif text-foreground">
          {service.name}
        </h3>
        <p className="text-sm lg:text-[15px] leading-relaxed text-foreground/72">
          {service.description}
        </p>
      </div>
    </div>
  );
}

export function Services() {
  const { ref, isInView } = useInView();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [imageIndices, setImageIndices] = useState<number[]>(
    services.map(() => 0)
  );

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  }, []);

  const updateImageIndex = (
    serviceIndex: number,
    action: "next" | "prev" | "set",
    value?: number
  ) => {
    setImageIndices((prev) => {
      const newIndices = [...prev];
      const current = newIndices[serviceIndex] || 0;

      if (action === "next") {
        newIndices[serviceIndex] =
          (current + 1) % services[serviceIndex].images.length;
      } else if (action === "prev") {
        newIndices[serviceIndex] =
          (current - 1 + services[serviceIndex].images.length) %
          services[serviceIndex].images.length;
      } else if (action === "set" && value !== undefined) {
        newIndices[serviceIndex] = value;
      }

      return newIndices;
    });
  };

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(nextSlide, 4500);
    return () => clearInterval(timer);
  }, [isHovered, nextSlide]);

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
      cards.push({
        service: services[index],
        globalIndex: index,
        isActive: i === 0,
      });
    }
    return cards;
  };

  return (
    <Section ref={ref} id="services" className="bg-background">
      <div
        className={cn(
          "mx-auto mb-12 max-w-3xl text-center transition-all duration-500 md:mb-14",
          isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        )}
      >
        <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-accent">
          Services & Pricing
        </span>

        <h2 className="mb-5 text-3xl font-medium leading-tight text-foreground md:text-4xl lg:text-5xl">
          Expert Premium Hair Services
          <span className="block italic text-accent-soft">Tailored for You</span>
        </h2>

        <p className="mx-auto max-w-xl text-base leading-relaxed text-foreground/80 md:text-lg">
          Transparent pricing. Every service includes a personal consultation.
        </p>
      </div>

      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="hidden md:block relative h-[410px] lg:h-[430px]">
          <div className="absolute inset-0 mx-auto flex max-w-5xl items-center justify-center gap-5 px-4 lg:gap-6">
            {getVisibleCards().map(({ service, globalIndex, isActive }) => (
              <div
                key={`${service.name}-${globalIndex}`}
                className={cn(
                  "h-full flex-shrink-0 transition-all duration-300",
                  isActive
                    ? "w-[330px] lg:w-[360px] scale-100 opacity-100"
                    : "w-[270px] lg:w-[290px] scale-[0.94] opacity-75"
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

        <div
          className="md:hidden overflow-x-auto scrollbar-hide snap-x snap-mandatory -mx-4 px-4 pb-2"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex items-stretch gap-4 pr-4">
            {services.map((service, index) => (
              <div
                key={`${service.name}-${index}`}
                className={cn(
                  "snap-center shrink-0 w-[80vw] transition-all duration-300",
                  currentIndex === index ? "opacity-100 scale-100" : "opacity-75 scale-[0.98]"
                )}
              >
                <ServiceCard
                  service={service}
                  isActive={currentIndex === index}
                  imageIndex={imageIndices[index]}
                  onPrevImage={() => updateImageIndex(index, "prev")}
                  onNextImage={() => updateImageIndex(index, "next")}
                  onSetImage={(idx) => updateImageIndex(index, "set", idx)}
                />
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </Section>
  );
}