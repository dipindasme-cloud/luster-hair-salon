"use client";

import { useState, useEffect } from "react";
import { Menu, X, Scissors } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "FAQ", href: "#faq" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Process", href: "#process" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
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

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen]);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex items-center justify-between">
        <a
          href="#top"
          onClick={scrollToTop}
          className="flex items-center gap-1.5 sm:gap-2 group"
        >
          <div className={cn(
            "w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors duration-300",
            isScrolled ? "bg-foreground" : "bg-white/20 backdrop-blur-sm",
            "group-hover:bg-accent-soft"
          )}>
            <Scissors className={cn(
              "w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300",
              isScrolled ? "text-background" : "text-white"
            )} />
          </div>
          <span className={cn(
            "text-lg sm:text-xl md:text-2xl font-serif font-semibold tracking-[0.2em] transition-colors duration-300",
            isScrolled ? "text-foreground" : "text-white"
          )}>
            LUSTER
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-accent-soft after:transition-all after:duration-300 hover:after:w-full",
                  isActive
                    ? (isScrolled ? "text-foreground after:w-full" : "text-white after:w-full")
                    : (isScrolled ? "text-foreground/80 hover:text-foreground" : "text-white/80 hover:text-white")
                )}
              >
                {link.label}
              </a>
            );
          })}
          <Button variant={isScrolled ? "primary" : "inverse"} size="sm" className="ml-6">
            Contact Us
          </Button>
        </nav>

        <button
          onClick={() => setIsMenuOpen(true)}
          className="lg:hidden p-1.5 sm:p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label="Open menu"
        >
          <Menu className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-white")} />
        </button>
      </div>

      <div
        className={cn(
          "lg:hidden fixed inset-0 z-50 transition-all duration-500",
          isMenuOpen ? "visible" : "invisible"
        )}
      >
        <div
          role="button"
          tabIndex={0}
          className={cn(
            "absolute inset-0 bg-foreground/50 transition-opacity duration-500",
            isMenuOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setIsMenuOpen(false)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setIsMenuOpen(false);
          }}
          aria-label="Close menu overlay"
        />

        <div
          className={cn(
            "absolute right-0 top-0 bottom-0 w-full max-w-sm bg-background shadow-2xl transition-transform duration-500",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between px-5 py-4 sm:px-6 sm:py-5 border-b border-border/30">
            <a href="#top" onClick={scrollToTop} className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-foreground flex items-center justify-center">
                <Scissors className="w-4 h-4 text-background" />
              </div>
              <span className="text-lg sm:text-xl font-serif font-semibold tracking-wider text-foreground">
                LUSTER
              </span>
            </a>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full hover:bg-border/30 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-foreground" />
            </button>
          </div>

          <nav className="flex flex-col px-5 pt-6 sm:px-6 sm:pt-8 gap-1">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "py-3.5 sm:py-4 text-lg sm:text-xl font-serif text-foreground hover:text-accent-soft transition-all duration-300 border-b border-border/20",
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
            <a href="tel:+13105550189" className="text-sm text-foreground/70 hover:text-accent-soft transition-colors">
              (310) 555-0189
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
