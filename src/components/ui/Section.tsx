import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id?: string;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: "py-16 md:py-20",
  md: "py-20 md:py-28",
  lg: "py-24 md:py-32",
};

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, children, id, size = "md", ...props }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={cn(sizeMap[size], "px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16", className)}
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
