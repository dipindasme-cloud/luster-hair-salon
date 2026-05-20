"use client";

import { useInView } from "@/hooks/useInView";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  experience: string;
  image: string;
}

const team: TeamMember[] = [
  {
    name: "Isabella Laurent",
    role: "Creative Director",
    specialty: "Precision Cuts & Color Theory",
    experience: "15 years",
    image: "https://images.unsplash.com/photo-1694163939058-b31163b10f4e?q=80&w=2093&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Sophia Chen",
    role: "Senior Stylist",
    specialty: "Balayage & Hair Extensions",
    experience: "10 years",
    image: "https://images.unsplash.com/photo-1677331402102-60c7e54d58c2?q=80&w=844&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Maya Williams",
    role: "Color Specialist",
    specialty: "Vivid Colors & Color Correction",
    experience: "8 years",
    image: "https://images.unsplash.com/photo-1634304669792-b774a8c9ac7f?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Aria Patel",
    role: "Treatment Expert",
    specialty: "Keratin & Scalp Treatments",
    experience: "12 years",
    image: "https://images.unsplash.com/photo-1706876431105-7ddcb403de55?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export function Team() {
  const { ref, isInView } = useInView();

  return (
    <Section ref={ref} id="team" className="bg-soft-cream">
      <SectionHeading
        label="Our Team"
        title="Meet Your Stylists"
        subtitle="Passionate professionals dedicated to making you look and feel your best."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, index) => (
          <div
            key={member.name}
            className={`group text-center transition-all duration-500 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 group-hover:shadow-lg transition-shadow">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-serif mb-1">{member.name}</h3>
            <p className="text-muted-rose text-sm font-medium mb-2">{member.role}</p>
            <p className="text-charcoal/60 text-sm">{member.specialty}</p>
            <p className="text-charcoal/50 text-xs mt-2">{member.experience} experience</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
