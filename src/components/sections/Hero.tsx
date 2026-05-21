"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Star, Clock, MapPin } from "lucide-react";

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
      {/* Mobile: Image Background */}
      <div className="absolute inset-0 md:hidden">
        <img
          src="/hero/hero.png"
          alt="Luster Premium Hair Salon"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Desktop: Video Background */}
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
        <div className="absolute inset-0 bg-black/50" />
        {!isVideoLoaded && (
          <img
            src="/hero/hero.png"
            alt="Luster Premium Hair Salon"
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-28 pb-16 md:pt-0 md:pb-0">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent-soft" />
            <span className="text-white/90 text-xs sm:text-sm font-medium tracking-wide">
              Beverly Hills&apos; Premier Color Salon
            </span>
          </div>

          {/* Heading */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-white leading-[1.1] mb-6 transition-all duration-500 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Where Your Best
            <span className="block italic text-accent-soft">Hair Begins</span>
          </h1>

          {/* Body */}
          <p
            className={`text-base sm:text-lg text-white/85 max-w-xl mx-auto leading-relaxed mb-10 transition-all duration-500 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Expert color specialists delivering transformative results since 2012.
            From subtle balayage to complete makeovers — your hair, elevated.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 transition-all duration-500 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button variant="inverse" size="lg" className="group w-full sm:w-auto min-w-[200px]" onClick={scrollToContact}>
              Book Appointment
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outlineLight" size="lg" className="w-full sm:w-auto bg-white/10 backdrop-blur-sm" onClick={scrollToGallery}>
              See Our Work
            </Button>
          </div>

          {/* Trust Row */}
          <div
            className={`flex flex-wrap items-center justify-center gap-4 sm:gap-6 transition-all duration-500 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="flex items-center gap-1.5">
              <div className="flex -space-x-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-accent-soft text-accent-soft" />
                ))}
              </div>
              <span className="text-white text-sm font-medium">4.9</span>
              <span className="text-white/50 text-sm">(500+)</span>
            </div>
            <span className="text-white/20 hidden sm:inline">·</span>
            <div className="flex items-center gap-1.5 text-white/70 text-sm">
              <Clock className="w-3.5 h-3.5 text-accent-soft" />
              <span>Next: Tomorrow</span>
            </div>
            <span className="text-white/20 hidden sm:inline">·</span>
            <div className="flex items-center gap-1.5 text-white/70 text-sm">
              <MapPin className="w-3.5 h-3.5 text-accent-soft" />
              <span>Beverly Hills</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce pointer-events-none" aria-hidden="true">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
