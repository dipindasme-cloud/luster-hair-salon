"use client";

import { useInView } from "@/hooks/useInView";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

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
  const { ref, isInView } = useInView();

  return (
    <Section ref={ref} id="gallery" className="bg-background">
      <SectionHeading
        label="Real Results"
        title="See the Transformations"
        subtitle="Every photo is an actual client result."
      />

      <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
        {galleryItems.map((item, index) => (
          <div
            key={item.id}
            className={`group rounded-2xl overflow-hidden bg-surface border border-border hover:shadow-lg hover:-translate-y-0.5 transition-all duration-500 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="grid grid-cols-2">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={item.before}
                  alt={`${item.label} - Before`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                <span className="absolute top-3 left-3 px-2.5 py-1 text-xs font-medium bg-white/90 text-foreground rounded-full">
                  Before
                </span>
              </div>
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={item.after}
                  alt={`${item.label} - After`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                <span className="absolute top-3 left-3 px-2.5 py-1 text-xs font-medium bg-accent-soft text-white rounded-full">
                  After
                </span>
              </div>
            </div>
            <div className="p-4 sm:p-5">
              <h3 className="text-lg font-serif text-foreground">{item.label}</h3>
              <p className="text-foreground/60 text-sm">{item.service}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
