import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "inverse" | "outline" | "outlineLight" | "ghost" | "ghostLight";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-300 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      primary: "bg-foreground text-background hover:bg-accent focus-visible:ring-foreground",
      inverse: "bg-white text-foreground shadow-lg shadow-black/20 hover:bg-accent-soft hover:text-white focus-visible:ring-white",
      outline: "border-2 border-foreground text-foreground hover:bg-foreground hover:text-background focus-visible:ring-foreground",
      outlineLight: "border-2 border-background/50 text-background hover:bg-background hover:text-foreground focus-visible:ring-background",
      ghost: "text-foreground hover:bg-border/50 focus-visible:ring-border",
      ghostLight: "text-background hover:bg-background/10 focus-visible:ring-background/30",
    };

    const sizes = {
      sm: "px-5 py-2.5 text-sm min-h-[44px]",
      md: "px-7 py-3.5 text-base min-h-[44px]",
      lg: "px-9 py-4 text-base sm:text-lg min-h-[48px]",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
