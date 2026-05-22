"use client";
import Image from "next/image";
import { MessageCircle, Sparkles, Star } from "lucide-react";

interface ProcessStep {
  icon: React.ElementType;
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
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
                The process
              </span>
            </div>

            <h2 className="mb-8 text-3xl font-medium leading-tight text-foreground md:text-4xl lg:text-5xl">
              How It Works
            </h2>

            <div className="mb-8 overflow-hidden rounded-2xl lg:hidden">
              <Image
                src="https://framerusercontent.com/images/rrcK9oxY0hEai3Cjr8SYrGqty8.jpg"
                alt="Hair salon process"
                width={934}
                height={768}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="space-y-6">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.title}>
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <h4 className="mb-1.5 text-lg font-semibold text-foreground md:text-xl">
                          {step.title}
                        </h4>
                        <p className="max-w-md text-sm leading-relaxed text-foreground/70 md:text-base">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {index !== processSteps.length - 1 && (
                      <div className="ml-6 mt-6 h-8 w-px bg-accent/20" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="hidden overflow-hidden rounded-2xl lg:block">
            <Image
              src="https://framerusercontent.com/images/rrcK9oxY0hEai3Cjr8SYrGqty8.jpg"
              alt="Hair salon process"
              width={934}
              height={768}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}