"use client";

import Image from "next/image";
import Link from "next/link";
import { useInView } from "@/hooks/useInView";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

const galleryImages = [
  {
    src: "/gallery/gallery (1).png",
    alt: "Luster salon transformation 1",
  },
  {
    src: "/gallery/gallery (2).png",
    alt: "Luster salon transformation 2",
  },
  {
    src: "/gallery/gallery (3).png",
    alt: "Luster salon transformation 3",
  },
  {
    src: "/gallery/gallery (4).png",
    alt: "Luster salon transformation 4",
  },
  {
    src: "/gallery/gallery (5).png",
    alt: "Luster salon transformation 5",
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
          Real Transformations,{" "}
          <span className="block italic text-accent-soft md:inline">Real Results</span>
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

      {/* Mobile: Cover on top, 2x2 grid below */}
      <div className="md:hidden space-y-3">
        {/* Cover Image */}
        <div
          className={cn(
            "group relative rounded-2xl overflow-hidden bg-surface hover:shadow-lg transition-all duration-500",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <div className="relative aspect-[4/3]">
            <Image
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-2 gap-3">
          {galleryImages.slice(1).map((image, index) => (
            <div
              key={index}
              className={cn(
                "group relative rounded-2xl overflow-hidden bg-surface hover:shadow-lg transition-all duration-500",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="relative aspect-square">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: Cover left, 2x2 grid right */}
      <div className="hidden md:grid grid-cols-2 gap-5">
        {/* Cover Image */}
        <div
          className={cn(
            "group relative rounded-2xl overflow-hidden bg-surface hover:shadow-lg transition-all duration-500",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <div className="relative aspect-[3/4] md:aspect-auto md:h-full min-h-[400px]">
            <Image
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-2 gap-5">
          {galleryImages.slice(1).map((image, index) => (
            <div
              key={index}
              className={cn(
                "group relative rounded-2xl overflow-hidden bg-surface hover:shadow-lg transition-all duration-500",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="relative aspect-square">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
