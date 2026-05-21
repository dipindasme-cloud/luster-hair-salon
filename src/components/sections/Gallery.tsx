"use client";

import Image from "next/image";
import Link from "next/link";
import { useInView } from "@/hooks/useInView";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1560869713-da86a9ec0744?auto=format&fit=crop&w=800&q=80",
    alt: "Balayage hair transformation",
    span: "md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80",
    alt: "Precision haircut and style",
  },
  {
    src: "https://images.unsplash.com/photo-1595476108010-bdfc2ff28550?auto=format&fit=crop&w=600&q=80",
    alt: "Full color transformation",
  },
  {
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
    alt: "Keratin smoothing treatment",
  },
  {
    src: "https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?auto=format&fit=crop&w=600&q=80",
    alt: "Bridal hair styling",
  },
];

export function Gallery() {
  const { ref, isInView } = useInView();

  return (
    <Section ref={ref} id="gallery" className="bg-background">
      {/* Header */}
      <div className={cn("max-w-3xl mx-auto text-center mb-12 md:mb-16 transition-all duration-500", isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
        <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-4">
          Gallery
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight mb-6">
          Real Transformations,
          <span className="block italic text-accent-soft">Real Results</span>
        </h2>
        <p className="text-lg text-foreground/80 max-w-xl mx-auto leading-relaxed">
          Every photo is a real client. Follow us on Instagram for daily inspiration.
        </p>

        <div className="mt-8">
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-foreground text-background px-6 py-4 rounded-full transition-all duration-300 hover:bg-accent"
          >
            <span className="text-sm font-semibold tracking-wide">
              More on Instagram
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Masonry Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className={cn(
              "group relative rounded-2xl overflow-hidden bg-surface hover:shadow-lg transition-all duration-500",
              image.span,
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className={cn(
              "relative overflow-hidden",
              image.span ? "aspect-[3/4] md:aspect-auto md:h-full" : "aspect-square"
            )}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
