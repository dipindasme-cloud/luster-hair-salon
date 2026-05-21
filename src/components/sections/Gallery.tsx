"use client";

import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

type View = "before" | "after";

interface GalleryItem {
  id: number;
  label: string;
  service: string;
  before: string;
  after: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    label: "Brunette to Balayage",
    service: "Balayage & Highlights",
    before: "https://images.unsplash.com/photo-1510074229140-bdfc2ff28550?auto=format&fit=crop&w=600&q=80",
    after: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    label: "Damage Repair",
    service: "Keratin Smoothing",
    before: "https://images.unsplash.com/photo-1595476108010-bdfc2ff28550?auto=format&fit=crop&w=600&q=80",
    after: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    label: "Color Correction",
    service: "Full Color",
    before: "https://images.unsplash.com/photo-1596178060810-72f53ce9a65c?auto=format&fit=crop&w=600&q=80",
    after: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    label: "Bridal Transformation",
    service: "Bridal Package",
    before: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=600&q=80",
    after: "https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?auto=format&fit=crop&w=600&q=80",
  },
];

export function Gallery() {
  const [activeView, setActiveView] = useState<View>("after");
  const { ref, isInView } = useInView();

  return (
    <Section ref={ref} id="gallery" className="bg-background">
      <SectionHeading
        label="Real Results"
        title="See the Transformations"
        subtitle="Every photo is an actual client result. Toggle between before and after."
      />

      <div className="flex justify-center gap-4 mb-10">
        <button
          onClick={() => setActiveView("before")}
          aria-pressed={activeView === "before"}
          className={cn(
            "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 min-h-[44px]",
            activeView === "before"
              ? "bg-foreground text-background"
              : "bg-border/30 text-foreground/70 hover:bg-border/50"
          )}
        >
          Before
        </button>
        <button
          onClick={() => setActiveView("after")}
          aria-pressed={activeView === "after"}
          className={cn(
            "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 min-h-[44px]",
            activeView === "after"
              ? "bg-foreground text-background"
              : "bg-border/30 text-foreground/70 hover:bg-border/50"
          )}
        >
          After
        </button>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
        {galleryItems.map((item, index) => (
          <div
            key={item.id}
            className={`group rounded-2xl overflow-hidden bg-surface border border-border hover:shadow-lg hover:-translate-y-0.5 transition-all duration-500 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src={activeView === "before" ? item.before : item.after}
                alt={`${item.label} - ${activeView}`}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
              <div className="absolute top-3 left-3">
                <span className={cn(
                  "px-3 py-1 text-xs font-medium rounded-full",
                  activeView === "before"
                    ? "bg-white/90 text-foreground"
                    : "bg-accent-soft text-white"
                )}>
                  {activeView === "before" ? "Before" : "After"}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-lg font-serif text-white">{item.label}</h3>
                <p className="text-white/70 text-sm">{item.service}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
