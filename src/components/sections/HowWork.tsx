"use client";

import Image from "next/image";
import { MessageCircle, Sparkles, Star, type LucideProps } from "lucide-react";

interface ProcessStep {
  icon: React.ComponentType<LucideProps>;
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    icon: MessageCircle,
    title: "Consultation",
    description: "We listen to your hair goals and assess what works best for you.",
  },
  {
    icon: Sparkles,
    title: "Custom Treatment",
    description: "Tailored service — cut, color, or care — designed just for you.",
  },
  {
    icon: Star,
    title: "Final Touch",
    description: "Expert styling and finishing for a flawless, fresh look.",
  },
];

export function HowWork() {
  return (
    <section id="process" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        
        {/* 1. Header Area: Stays perfectly centered at the top of the section */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-4">
            The process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight mb-6">
            Your Style Journey From{" "}
            <span className="block italic text-accent-soft md:inline">Start To Finish</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-xl mx-auto leading-relaxed">
            From the moment you walk through our doors to the final expert touch, here is how we elevate your everyday look.
          </p>
        </div>

        {/* 2. Main Layout Container: 
           - Columns match equal heights on desktop using 'items-stretch'
           - Stacks vertically on mobile 
        */}
        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-14">
          
          {/* Left Side: The Image 
             - In mobile viewports: It displays 1st right after the header block
             - In desktop viewports: It fills 100% of the available grid column height
          */}
          <div className="overflow-hidden rounded-2xl h-full w-full min-h-[350px] lg:min-h-full">
            <Image
              src="/HowWork/1.jpg"
              alt="Hair salon process"
              width={934}
              height={768}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          {/* Right Side: The Steps Timeline Content 
             - Flex layouts ensure it aligns neatly inside its grid half
          */}
          <div className="flex flex-col justify-center space-y-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.title}>
                  <div className="flex items-start gap-4">
                    {/* Icon Container Badge */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <Icon className="h-5 w-5" />
                    </div>

                    {/* Step Title and Subtext Content */}
                    <div>
                      <h4 className="mb-1.5 text-lg font-semibold text-foreground md:text-xl">
                        {step.title}
                      </h4>
                      <p className="max-w-md text-sm leading-relaxed text-foreground/70 md:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline connection line spacer */}
                  {index !== processSteps.length - 1 && (
                    <div className="ml-6 mt-6 h-8 w-px bg-accent/20" />
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}