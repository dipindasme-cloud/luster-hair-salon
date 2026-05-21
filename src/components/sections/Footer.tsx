import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "YouTube", href: "#" },
];

export function Footer() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background pt-16 pb-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-background/10">
          <div>
            <a href="#top" onClick={scrollToTop} className="text-3xl font-serif font-medium tracking-wide mb-4 block">
              Luster
            </a>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Premium hair salon dedicated to transforming your look with expert care,
              luxury products, and an atmosphere of quiet elegance.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-11 h-11 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent-soft/30 transition-colors text-sm font-medium"
                >
                  {social.label[0]}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Services", "About", "Team", "Gallery", "FAQ", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-background/70 hover:text-accent-soft transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Opening Hours</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex flex-col sm:flex-row sm:justify-between gap-1">
                <span>Monday</span>
                <span className="sm:text-right">Closed</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:justify-between gap-1">
                <span>Tuesday-Saturday</span>
                <span className="sm:text-right">9AM - 7PM</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:justify-between gap-1">
                <span>Sunday</span>
                <span className="sm:text-right">10AM - 5PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-background/70">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-accent-soft flex-shrink-0 mt-1" />
                <span>123 Elegance Avenue, Suite 4<br />Beverly Hills, CA 90210</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-accent-soft flex-shrink-0 mt-1" />
                <a href="tel:+13105550189" className="hover:text-accent-soft transition-colors">(310) 555-0189</a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 text-accent-soft flex-shrink-0 mt-1" />
                <a href="mailto:hello@lustersalon.com" className="hover:text-accent-soft transition-colors">hello@lustersalon.com</a>
              </li>
            </ul>
            <Button variant="outlineLight" size="sm" className="mt-6">
              Book Appointment
            </Button>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
          <p>&copy; {new Date().getFullYear()} Luster Salon. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-background/80 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-background/80 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
