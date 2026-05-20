"use client";

import { useInView } from "@/hooks/useInView";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const galleryItems = [
  {
    id: 1,
    label: "Balayage Transformation",
    tag: "Before & After",
    front: "https://images.unsplash.com/photo-1595476108010-bdfc2ff28550?auto=format&fit=crop&w=600&q=80",
    back: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    label: "Salon Atmosphere",
    tag: "Interior",
    front: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=600&q=80",
    back: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    label: "Precision Cut",
    tag: "Before & After",
    front: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
    back: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    label: "Bridal Styling",
    tag: "Front & Side",
    front: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=600&q=80",
    back: "https://images.unsplash.com/photo-1523419409543-a5e549a6381f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    label: "Color Correction",
    tag: "Before & After",
    front: "https://images.unsplash.com/photo-1596178060810-72f53ce9a65c?auto=format&fit=crop&w=600&q=80",
    back: "https://images.unsplash.com/photo-1510074229140-bdfc2ff28550?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    label: "Premium Styling",
    tag: "Front & Side",
    front: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80",
    back: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=600&q=80",
  },
];

export function Gallery() {
  const { ref, isInView } = useInView();

  return (
    <Section ref={ref} id="gallery" className="bg-ivory">
      <SectionHeading
        label="Our Work"
        title="Transformations & Atmosphere"
        subtitle="Hover to see different angles of our work. Every transformation tells a story."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item, index) => (
          <div
            key={item.id}
            className={`group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="relative w-full h-full [perspective:1000px]">
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front Image */}
                <div className="absolute inset-0 [backface-visibility:hidden]">
                  <img
                    src={item.front}
                    alt={`${item.label} - front view`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-white/90 text-charcoal rounded-full mb-3">
                      {item.tag}
                    </span>
                    <h3 className="text-xl font-serif text-white">{item.label}</h3>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                </div>

                {/* Back Image */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <img
                    src={item.back}
                    alt={`${item.label} - back view`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-muted-rose text-white rounded-full mb-3">
                      Alternate View
                    </span>
                    <h3 className="text-xl font-serif text-white">{item.label}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
