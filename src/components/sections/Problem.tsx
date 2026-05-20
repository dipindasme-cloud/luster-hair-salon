"use client";

import { useInView } from "@/hooks/useInView";

const concerns = [
  {
    icon: "✦",
    title: "Frizz & Unruly Texture",
    description: "Humidity, heat damage, and lack of moisture leave your hair looking dull and unmanageable every day.",
  },
  {
    icon: "✦",
    title: "Breakage & Damage",
    description: "Chemical treatments, excessive styling, and environmental stress weaken your hair from root to tip.",
  },
  {
    icon: "✦",
    title: "Thinning & Hair Loss",
    description: "Stress, hormonal changes, and poor scalp health contribute to visible thinning and reduced volume.",
  },
  {
    icon: "✦",
    title: "Dryness & Lack of Shine",
    description: "Stripped natural oils and harsh products leave your hair parched, brittle, and lifeless.",
  },
];

export function Problem() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-charcoal text-ivory">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-muted-rose text-sm font-medium tracking-widest uppercase mb-4">
            Sound Familiar?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium leading-tight">
            Your Hair Deserves Better
          </h2>
          <p className="mt-6 text-lg text-ivory/60 max-w-2xl mx-auto">
            These are the most common concerns we hear from clients walking through our doors. You&apos;re not alone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {concerns.map((concern, index) => (
            <div
              key={concern.title}
              className={`p-8 rounded-2xl bg-ivory/5 border border-ivory/10 hover:bg-ivory/10 transition-all duration-500 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <span className="text-2xl text-muted-rose mb-4 block">{concern.icon}</span>
              <h3 className="text-xl font-serif mb-3">{concern.title}</h3>
              <p className="text-ivory/60 leading-relaxed text-sm">{concern.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
