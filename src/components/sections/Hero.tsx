"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Star, Award, Clock } from "lucide-react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToGallery = () => {
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-foreground">
      <div className="absolute inset-0 md:hidden">
        <img
          src="/hero/hero.png"
          alt="Luster Premium Hair Salon"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/90" />
      </div>

      <div className="hidden md:block absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          className="w-full h-full object-cover"
        >
          <source src="/hero/video/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        {!isVideoLoaded && (
          <img
            src="/hero/hero.png"
            alt="Luster Premium Hair Salon"
            className="w-full h-full object-cover"
          />
        )}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 md:px-12 w-full text-center md:text-left">
        <div className="md:max-w-2xl pt-24 sm:pt-28 pb-12 sm:pb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-soft/20 backdrop-blur-sm border border-accent-soft/30 mb-6 sm:mb-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Award className="w-4 h-4 text-accent-soft" />
            <span className="text-accent-soft text-xs sm:text-sm font-medium tracking-wide">
              Award-Winning Salon Since 2012
            </span>
          </div>

          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-white leading-[1.15] sm:leading-[1.1] mb-4 sm:mb-6 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Where Your Best
            <span className="block italic text-accent-soft">Hair Begins</span>
          </h1>

          <p
            className={`text-base sm:text-lg text-white/85 max-w-xl leading-relaxed mb-6 sm:mb-8 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Beverly Hills&apos; premier color salon. From subtle balayage to complete
            transformations, our master stylists deliver results that last.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button variant="inverse" size="lg" className="group w-full sm:w-auto min-w-[200px]" onClick={scrollToContact}>
              Book Appointment
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outlineLight" size="lg" className="w-full sm:w-auto" onClick={scrollToGallery}>
              See Our Work
            </Button>
          </div>

          <div
            className={`flex flex-wrap items-center gap-4 sm:gap-6 transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent-soft text-accent-soft" />
                ))}
              </div>
              <span className="text-white text-sm font-medium">4.9</span>
              <span className="text-white/70 text-sm">(500+ reviews)</span>
            </div>
            <div className="h-4 w-px bg-white/20 hidden sm:block" />
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <Clock className="w-4 h-4 text-accent-soft" />
              <span>Next available: Tomorrow</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce pointer-events-none" aria-hidden="true">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
