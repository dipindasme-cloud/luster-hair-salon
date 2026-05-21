import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "dark";
  hover?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", hover = true, ...props }, ref) => {
    const variants = {
      default: "bg-surface border border-border",
      elevated: "bg-surface border border-border shadow-sm",
      dark: "bg-foreground/5 border border-foreground/10",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl overflow-hidden",
          variants[variant],
          hover && "hover:shadow-lg hover:border-accent-soft/50 hover:-translate-y-0.5 transition-all duration-300",
          className
        )}
        {...props}
      />
    );
  }
);

Card.displayName = "Card";
