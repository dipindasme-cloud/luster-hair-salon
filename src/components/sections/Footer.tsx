"use client";

import { Phone, MapPin, Star } from "lucide-react";

export function Footer() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Top: Brand + CTA */}
        <div className="py-12 md:py-16 border-b border-background/10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div>
              <a
                href="#top"
                onClick={scrollToTop}
                className="text-3xl md:text-4xl font-serif font-medium tracking-wide block mb-3"
              >
                Luster
              </a>
              <p className="text-background/60 text-sm leading-relaxed max-w-sm">
                Beverly Hills&apos; premier color salon. Expert stylists, premium products, and transformative results since 2012.
              </p>
            </div>

            <div className="md:text-right">
              <button
                onClick={scrollToContact}
                className="w-full md:w-auto inline-flex items-center justify-center px-8 py-4 bg-white text-foreground font-semibold tracking-wide rounded-full hover:bg-accent-soft hover:text-white transition-all duration-300 text-base min-h-[48px]"
              >
                Book Appointment
              </button>
              <p className="text-background/40 text-xs mt-3">
                Free consultation for new clients
              </p>
            </div>
          </div>
        </div>

        {/* Middle: Contact + Trust + Social */}
        <div className="py-8 md:py-10 border-b border-background/10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Contact */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <a
                href="tel:+13105550189"
                className="flex items-center gap-2 text-background/80 hover:text-white transition-colors group"
              >
                <Phone className="w-4 h-4 text-accent-soft group-hover:text-accent-soft transition-colors" />
                <span className="text-sm">(310) 555-0189</span>
              </a>
              <a
                href="https://maps.google.com/?q=123+Elegance+Avenue+Beverly+Hills+CA+90210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-background/80 hover:text-white transition-colors group"
              >
                <MapPin className="w-4 h-4 text-accent-soft group-hover:text-accent-soft transition-colors" />
                <span className="text-sm">123 Elegance Ave, Beverly Hills</span>
              </a>
            </div>

            {/* Trust + Social */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 text-xs text-background/50">
                <span>Olaplex Certified</span>
                <span className="text-background/20">·</span>
                <span>12+ Years</span>
                <span className="text-background/20">·</span>
                <span className="flex items-center gap-1">
                  <Star className="w-3 h-3 fill-accent-soft text-accent-soft" />
                  4.9
                </span>
              </div>
              <a
                href="#"
                aria-label="Follow us on Instagram"
                className="text-xs text-background/50 hover:text-accent-soft transition-colors font-medium tracking-wide"
              >
                @lustersalon
              </a>
            </div>
          </div>
        </div>

        {/* Bottom: Copyright + Legal */}
        <div className="py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-background/40">
          <p>&copy; {new Date().getFullYear()} Luster Salon. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-background/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-background/60 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
