"use client";

import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface AnimateInProps extends HTMLAttributes<HTMLDivElement> {
  direction?: "up" | "left" | "right" | "none";
  delay?: number;
}

export const AnimateIn = forwardRef<HTMLDivElement, AnimateInProps>(
  ({ className, direction = "up", delay = 0, children, ...props }, ref) => {
    const { ref: inViewRef, isInView } = useInView();

    const directions = {
      up: isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
      left: isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8",
      right: isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8",
      none: isInView ? "opacity-100" : "opacity-0",
    };

    return (
      <div
        ref={(node) => {
          (inViewRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }}
        className={cn(
          "transition-all duration-700",
          directions[direction],
          className
        )}
        style={{ transitionDelay: `${delay}ms` }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

AnimateIn.displayName = "AnimateIn";
