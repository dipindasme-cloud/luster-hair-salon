"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal">
      {/* Mobile: Hero Image */}
      <div className="absolute inset-0 md:hidden">
        <img
          src="/hero/hero.png"
          alt="Luster Premium Hair Salon"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/80" />
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
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/30 to-charcoal/70" />
        {!isVideoLoaded && (
          <img
            src="/hero/hero.png"
            alt="Luster Premium Hair Salon"
            className="w-full h-full object-cover"
          />
        )}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-28 sm:pt-32 pb-16 sm:pb-20">
        <span
          className={`inline-block text-muted-rose text-xs sm:text-sm md:text-base font-medium tracking-widest uppercase mb-4 sm:mb-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Premium Hair Salon
        </span>

        <h1
          className={`text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-white leading-tight mb-6 sm:mb-8 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Where Your Hair
          <span className="block italic text-muted-rose">Finds Its Glow</span>
        </h1>

        <p
          className={`text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Expert stylists, bespoke treatments, and an atmosphere of quiet luxury. 
          Your transformation begins the moment you walk in.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <Button size="lg" className="group bg-white text-charcoal hover:bg-muted-rose hover:text-white">
            Book Appointment
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="outline" size="lg" className="border-white/50 text-white hover:bg-white hover:text-charcoal">
            Explore Services
          </Button>
        </div>

        <div
          className={`mt-12 sm:mt-16 md:mt-20 grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-lg mx-auto transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-serif text-white">12+</div>
            <div className="text-xs sm:text-sm text-white/60 mt-1">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-serif text-white">5K+</div>
            <div className="text-xs sm:text-sm text-white/60 mt-1">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-serif text-white">4.9</div>
            <div className="text-xs sm:text-sm text-white/60 mt-1">Star Rating</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
