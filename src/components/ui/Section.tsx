import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id?: string;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, children, id, ...props }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={cn("py-20 md:py-28 px-6 md:px-12 lg:px-24", className)}
        {...props}
      >
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = "Section";
