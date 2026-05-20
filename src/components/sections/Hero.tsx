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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal">
      {/* Mobile: Hero Image */}
      <div className="absolute inset-0 md:hidden">
        <img
          src="/hero/hero.png"
          alt="Luster Premium Hair Salon"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/90" />
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
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/50 to-transparent" />
        {!isVideoLoaded && (
          <img
            src="/hero/hero.png"
            alt="Luster Premium Hair Salon"
            className="w-full h-full object-cover"
          />
        )}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-left pt-24 sm:pt-28 md:pt-0 pb-12 sm:pb-16">
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted-rose/20 backdrop-blur-sm border border-muted-rose/30 mb-6 sm:mb-8 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Award className="w-4 h-4 text-muted-rose" />
              <span className="text-muted-rose text-xs sm:text-sm font-medium tracking-wide">
                Award-Winning Salon Since 2012
              </span>
            </div>

            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-white leading-[1.1] mb-4 sm:mb-6 transition-all duration-1000 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Expert Color &
              <span className="block italic text-muted-rose">Transformation Specialists</span>
            </h1>

            <p
              className={`text-base sm:text-lg text-white/75 max-w-xl leading-relaxed mb-6 sm:mb-8 transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              From subtle balayage to complete color corrections, our master stylists 
              deliver salon results that last. Book your transformation today.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10 transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <Button size="lg" className="group bg-white text-charcoal hover:bg-muted-rose hover:text-white min-w-[200px]">
                Book Your Appointment
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/40 text-white hover:bg-white hover:text-charcoal">
                View Our Work
              </Button>
            </div>

            <div
              className={`flex flex-wrap items-center gap-4 sm:gap-6 mb-8 sm:mb-10 transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-muted-rose text-muted-rose" />
                  ))}
                </div>
                <span className="text-white text-sm font-medium">4.9</span>
                <span className="text-white/50 text-sm">(500+ reviews)</span>
              </div>
              <div className="h-4 w-px bg-white/20 hidden sm:block" />
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <Clock className="w-4 h-4 text-muted-rose" />
                <span>Next available: Tomorrow</span>
              </div>
            </div>

            <div
              className={`flex flex-wrap gap-6 sm:gap-10 transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <div>
                <div className="text-2xl sm:text-3xl font-serif text-white">12+</div>
                <div className="text-xs sm:text-sm text-white/50 mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-serif text-white">5,000+</div>
                <div className="text-xs sm:text-sm text-white/50 mt-1">Transformations</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-serif text-white">98%</div>
                <div className="text-xs sm:text-sm text-white/50 mt-1">Client Retention</div>
              </div>
            </div>
          </div>

          <div
            className={`hidden lg:block transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/hero/hero.png"
                  alt="Luster salon transformation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-5 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-muted-rose/20 flex items-center justify-center">
                    <Award className="w-6 h-6 text-muted-rose" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-charcoal">Certified Experts</div>
                    <div className="text-xs text-charcoal/60">Advanced color specialists</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-charcoal text-white rounded-xl p-4 shadow-xl">
                <div className="text-2xl font-serif">500+</div>
                <div className="text-xs text-white/70">5-Star Reviews</div>
              </div>
            </div>
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
