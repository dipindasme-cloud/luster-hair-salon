"use client";

import { useInView } from "@/hooks/useInView";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Scissors, Palette, Droplets, Sparkles } from "lucide-react";

const iconMap = {
  cuts: Scissors,
  color: Palette,
  treatments: Droplets,
  styling: Sparkles,
};

interface TeamMember {
  name: string;
  role: string;
  specialties: { name: string; icon: keyof typeof iconMap }[];
  experience: string;
  clients: string;
  image: string;
  bookable: boolean;
}

const team: TeamMember[] = [
  {
    name: "Isabella Laurent",
    role: "Creative Director",
    specialties: [
      { name: "Precision Cuts", icon: "cuts" },
      { name: "Color Theory", icon: "color" },
    ],
    experience: "15 years",
    clients: "2,000+",
    image: "https://images.unsplash.com/photo-1694163939058-b31163b10f4e?q=80&w=400&auto=format&fit=crop",
    bookable: true,
  },
  {
    name: "Sophia Chen",
    role: "Senior Stylist",
    specialties: [
      { name: "Balayage", icon: "color" },
      { name: "Extensions", icon: "styling" },
    ],
    experience: "10 years",
    clients: "1,500+",
    image: "https://images.unsplash.com/photo-1677331402102-60c7e54d58c2?q=80&w=400&auto=format&fit=crop",
    bookable: true,
  },
  {
    name: "Maya Williams",
    role: "Color Specialist",
    specialties: [
      { name: "Vivid Colors", icon: "color" },
      { name: "Color Correction", icon: "color" },
    ],
    experience: "8 years",
    clients: "1,200+",
    image: "https://images.unsplash.com/photo-1634304669792-b774a8c9ac7f?q=80&w=400&auto=format&fit=crop",
    bookable: true,
  },
  {
    name: "Aria Patel",
    role: "Treatment Expert",
    specialties: [
      { name: "Keratin", icon: "treatments" },
      { name: "Scalp Health", icon: "treatments" },
    ],
    experience: "12 years",
    clients: "1,800+",
    image: "https://images.unsplash.com/photo-1706876431105-7ddcb403de55?q=80&w=400&auto=format&fit=crop",
    bookable: true,
  },
];

export function Team() {
  const { ref, isInView } = useInView();

  return (
    <Section ref={ref} id="team" className="bg-ivory">
      <SectionHeading
        label="Your Stylists"
        title="Meet the Team"
        subtitle="Certified professionals who specialize in making you look incredible."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((member, index) => (
          <div
            key={member.name}
            className={`group rounded-2xl bg-soft-cream border border-warm-beige/30 overflow-hidden hover:shadow-lg transition-all duration-500 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${index * 120}ms` }}
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-5">
              <h3 className="text-lg font-serif text-charcoal mb-0.5">{member.name}</h3>
              <p className="text-muted-rose text-sm font-medium mb-3">{member.role}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {member.specialties.map((spec) => {
                  const Icon = iconMap[spec.icon];
                  return (
                    <span
                      key={spec.name}
                      className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-charcoal/8 text-charcoal/70 rounded-full"
                    >
                      <Icon className="w-3 h-3" />
                      {spec.name}
                    </span>
                  );
                })}
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-warm-beige/30 text-xs text-charcoal/50">
                <span>{member.experience}</span>
                <span>{member.clients} clients</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
