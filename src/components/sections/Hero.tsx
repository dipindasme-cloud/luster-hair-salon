"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Star, Award, Clock, MapPin } from "lucide-react";

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
      {/* Mobile: Hero Image */}
      <div className="absolute inset-0 md:hidden">
        <img
          src="/hero/hero.png"
          alt="Luster Premium Hair Salon"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/60 to-foreground/95" />
      </div>

      {/* Desktop: Hero Video */}
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
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/60 to-foreground/30" />
        {!isVideoLoaded && (
          <img
            src="/hero/hero.png"
            alt="Luster Premium Hair Salon"
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full">
        <div className="grid lg:grid-cols-[1fr,auto] gap-8 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="pt-28 sm:pt-32 pb-16 sm:pb-20 md:py-0">
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 sm:mb-8 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Award className="w-3.5 h-3.5 text-accent-soft" />
              <span className="text-white/90 text-xs sm:text-sm font-medium tracking-wide">
                Beverly Hills&apos; Premier Color Salon
              </span>
            </div>

            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-white leading-[1.1] mb-5 sm:mb-6 transition-all duration-500 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Where Your Best
              <span className="block italic text-accent-soft">Hair Begins</span>
            </h1>

            <p
              className={`text-base sm:text-lg text-white/80 max-w-lg leading-relaxed mb-8 sm:mb-10 transition-all duration-500 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Expert color specialists delivering transformative results since 2012. 
              From subtle balayage to complete makeovers — your hair, elevated.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10 transition-all duration-500 delay-300 ${
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

            {/* Trust Row */}
            <div
              className={`flex flex-wrap items-center gap-4 sm:gap-6 transition-all duration-500 delay-400 ${
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
                <span className="text-white/60 text-sm">(500+ reviews)</span>
              </div>
              <div className="h-4 w-px bg-white/20 hidden sm:block" />
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Clock className="w-4 h-4 text-accent-soft" />
                <span>Next available: Tomorrow</span>
              </div>
              <div className="h-4 w-px bg-white/20 hidden sm:block" />
              <div className="flex items-center gap-1.5 text-white/60 text-sm">
                <MapPin className="w-3.5 h-3.5 text-accent-soft" />
                <span>Beverly Hills</span>
              </div>
            </div>
          </div>

          {/* Right: Desktop Image Card */}
          <div
            className={`hidden lg:block w-80 xl:w-96 transition-all duration-500 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
                <img
                  src="/hero/hero.png"
                  alt="Luster salon transformation result"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-xl shadow-black/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent-soft/20 flex items-center justify-center">
                    <Award className="w-5 h-5 text-accent-soft" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">Olaplex Certified</div>
                    <div className="text-xs text-foreground/60">Premium color specialists</div>
                  </div>
                </div>
              </div>
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
