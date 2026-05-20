import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
    
    const variants = {
      primary: "bg-charcoal text-ivory hover:bg-deep-bronze focus:ring-charcoal",
      secondary: "bg-muted-rose text-white hover:bg-charcoal focus:ring-muted-rose",
      outline: "border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-ivory focus:ring-charcoal",
      ghost: "text-charcoal hover:bg-warm-beige/30 focus:ring-warm-beige",
    };

    const sizes = {
      sm: "px-5 py-2.5 text-sm min-h-[44px]",
      md: "px-7 py-3.5 text-base min-h-[44px]",
      lg: "px-9 py-4 text-lg min-h-[48px]",
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
