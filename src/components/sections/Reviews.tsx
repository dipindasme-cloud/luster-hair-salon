"use client";

import { useInView } from "@/hooks/useInView";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

const reviews = [
  {
    name: "Sarah Mitchell",
    role: "Color Correction",
    review: "I spent years trying to fix my DIY box color disasters. Isabella corrected everything in one session. My hair went from brassy orange to the most natural, expensive-looking blonde I've ever had.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Olivia Tate",
    role: "Boost Treatment",
    review: "Volume and shine restored! My hair used to feel flat, but after their volumizing treatment, it's full, bouncy, and has that salon-fresh look every single day.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Jessica Chen",
    role: "Keratin Smoothing",
    review: "I was skeptical about keratin treatments after a bad experience elsewhere. Aria walked me through exactly what she'd use and why. Three months later, my hair is still smooth and shiny.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Lauren Dayana",
    role: "Balayage & Highlights",
    review: "Healthy hair like never before! My damaged, lifeless strands feel soft and look incredible. The team at Luster truly understands how to restore and elevate your hair.",
    image: "https://images.unsplash.com/photo-1615453261246-4b32e335a4a0?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Emma Rodriguez",
    role: "Bridal Styling",
    review: "My wedding hair was the one thing I was stressed about. Sophia did a trial that made me cry happy tears. On the day, my updo stayed perfect through 12 hours of photos, ceremony, and dancing.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Isabella Wren",
    role: "Full Color & Gloss",
    review: "Perfect color every time! Their color experts know exactly what works for me. My balayage looks so natural and vibrant — I keep getting compliments everywhere I go.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80",
  },
];

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    className="w-4 h-4 fill-accent-soft text-accent-soft shrink-0"
  >
    <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z" />
  </svg>
);

function ReviewsCard({ name, role, review, image }: {
  name: string;
  role: string;
  review: string;
  image: string;
}) {
  return (
    <div className="bg-surface rounded-2xl p-6 sm:p-8 flex flex-col justify-between gap-6 transition-all duration-300 ease-in-out hover:bg-white hover:shadow-lg hover:-translate-y-1 cursor-pointer border border-border hover:border-border/50">
      <div className="flex flex-col gap-5">
        {/* Top Bar: Profile Image & Rating */}
        <div className="flex justify-between items-center w-full">
          <div className="w-[48px] h-[48px] rounded-full overflow-hidden border-2 border-border/30">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} />
            ))}
          </div>
        </div>

        {/* Review Text */}
        <p className="text-foreground/70 text-[15px] leading-relaxed">
          &ldquo;{review}&rdquo;
        </p>
      </div>

      {/* User Info */}
      <div className="flex flex-col gap-0.5 mt-auto pt-4 border-t border-border/30">
        <h4 className="text-foreground font-semibold text-base">{name}</h4>
        <p className="text-foreground/50 text-sm">{role}</p>
      </div>
    </div>
  );
}

export function Reviews() {
  const { ref, isInView } = useInView();

  // Column-based data for masonry flow — sequential order
  const columnsData = [
    [reviews[0], reviews[1]], // Column 1: Cards 1, 2
    [reviews[2], reviews[3]], // Column 2: Cards 3, 4
    [reviews[4], reviews[5]], // Column 3: Cards 5, 6
  ];

  return (
    <Section ref={ref} id="reviews" className="bg-background">
      {/* Header */}
      <div className={cn("max-w-3xl mx-auto text-center mb-12 md:mb-16 transition-all duration-500", isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
        <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-4">
          Client Reviews
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight mb-6">
          Real Stories From
          <span className="block italic text-accent-soft">Real Clients</span>
        </h2>
        <p className="text-lg text-foreground/80 max-w-xl mx-auto leading-relaxed">
          Don&apos;t take our word for it — hear what our clients have to say about their Luster experience.
        </p>
      </div>

      {/* Masonry Grid — 3 columns on tablet & desktop, 1 on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-start">
        {columnsData.map((column, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-5 sm:gap-6">
            {column.map((card, cardIndex) => (
              <div
                key={card.name}
                className={cn(
                  "transition-all duration-500",
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
                style={{ transitionDelay: `${(colIndex * 2 + cardIndex) * 100}ms` }}
              >
                <ReviewsCard {...card} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </Section>
  );
}
