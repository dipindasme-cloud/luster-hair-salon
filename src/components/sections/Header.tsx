"use client";

import { useState, useEffect } from "react";
import { Menu, X, Scissors } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-ivory/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between">
        <a href="#" className="flex items-center gap-1.5 sm:gap-2 group">
          <div className={cn(
            "w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors duration-300",
            isScrolled ? "bg-charcoal" : "bg-white/20 backdrop-blur-sm",
            "group-hover:bg-muted-rose"
          )}>
            <Scissors className={cn(
              "w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300",
              isScrolled ? "text-ivory" : "text-white"
            )} />
          </div>
          <span className={cn(
            "text-lg sm:text-xl md:text-2xl font-serif font-semibold tracking-wider transition-colors duration-300",
            isScrolled ? "text-charcoal" : "text-white"
          )}>
            LUSTER
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                "text-sm font-medium tracking-wide transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-muted-rose after:transition-all after:duration-300 hover:after:w-full",
                isScrolled ? "text-charcoal/80 hover:text-charcoal" : "text-white/80 hover:text-white"
              )}
            >
              {link.label}
            </a>
          ))}
          <Button size="sm" className={cn("ml-6", !isScrolled && "bg-white text-charcoal hover:bg-muted-rose hover:text-white")}>
            Book Now
          </Button>
        </nav>

        <button
          onClick={() => setIsMenuOpen(true)}
          className="lg:hidden p-1.5 sm:p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label="Open menu"
        >
          <Menu className={cn("w-6 h-6", isScrolled ? "text-charcoal" : "text-white")} />
        </button>
      </div>

      <div
        className={cn(
          "lg:hidden fixed inset-0 z-50 transition-all duration-500",
          isMenuOpen ? "visible" : "invisible"
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-charcoal/50 transition-opacity duration-500",
            isMenuOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setIsMenuOpen(false)}
        />

        <div
          className={cn(
            "absolute right-0 top-0 bottom-0 w-full max-w-sm bg-ivory shadow-2xl transition-transform duration-500",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between px-5 py-4 sm:px-6 sm:py-5 border-b border-warm-beige/30">
            <a href="#" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-charcoal flex items-center justify-center">
                <Scissors className="w-4 h-4 text-ivory" />
              </div>
              <span className="text-lg sm:text-xl font-serif font-semibold tracking-wider text-charcoal">
                LUSTER
              </span>
            </a>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full hover:bg-warm-beige/30 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-charcoal" />
            </button>
          </div>

          <nav className="flex flex-col px-5 pt-6 sm:px-6 sm:pt-8 gap-1">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "py-3.5 sm:py-4 text-lg sm:text-xl font-serif text-charcoal hover:text-muted-rose transition-all duration-300 border-b border-warm-beige/20",
                  isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                )}
                style={{ transitionDelay: isMenuOpen ? `${100 + index * 50}ms` : "0ms" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="px-5 pb-6 sm:px-6 sm:pb-8">
            <Button size="lg" className="w-full" onClick={() => setIsMenuOpen(false)}>
              Book Appointment
            </Button>
          </div>

          <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-center">
            <p className="text-sm text-charcoal/50">
              (310) 555-0189
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
