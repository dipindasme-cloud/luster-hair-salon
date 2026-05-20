"use client";

import { useInView } from "@/hooks/useInView";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Visit Us",
    value: "123 Elegance Avenue, Suite 4\nBeverly Hills, CA 90210",
  },
  {
    icon: Phone,
    label: "Call or Text",
    value: "(310) 555-0189",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@lustersalon.com",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Tue-Sat: 9AM-7PM\nSun: 10AM-5PM | Mon: Closed",
  },
];

export function Contact() {
  const { ref, isInView } = useInView();

  return (
    <Section ref={ref} id="contact" className="bg-charcoal text-ivory">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        <div className={`transition-all duration-700 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
          <span className="inline-block text-muted-rose text-sm font-medium tracking-widest uppercase mb-4">
            Book Now
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium leading-tight mb-6">
            Ready for Your
            <span className="italic text-muted-rose"> Transformation?</span>
          </h2>
          <p className="text-lg text-ivory/60 leading-relaxed mb-10">
            Book your appointment today. New clients receive a complimentary 
            consultation with their first visit.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {contactInfo.map((info) => (
              <div key={info.label} className="flex gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-ivory/10 flex items-center justify-center">
                  <info.icon className="w-4 h-4 text-muted-rose" />
                </div>
                <div>
                  <div className="text-xs text-muted-rose mb-1">{info.label}</div>
                  <div className="text-ivory/80 whitespace-pre-line text-sm">{info.value}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Button size="lg" className="bg-white text-charcoal hover:bg-muted-rose hover:text-white group">
              Book Online
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="border-ivory/30 text-ivory hover:bg-ivory hover:text-charcoal">
              <Phone className="mr-2 w-4 h-4" />
              Call Us
            </Button>
          </div>
        </div>

        <div className={`transition-all duration-700 delay-300 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
          <div className="bg-ivory/5 rounded-2xl p-6 sm:p-8 border border-ivory/10">
            <h3 className="text-xl font-serif mb-6">Request an Appointment</h3>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-ivory/60 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-ivory/10 border border-ivory/20 text-ivory placeholder-ivory/40 focus:outline-none focus:border-muted-rose transition-colors min-h-[44px]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm text-ivory/60 mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg bg-ivory/10 border border-ivory/20 text-ivory placeholder-ivory/40 focus:outline-none focus:border-muted-rose transition-colors min-h-[44px]"
                    placeholder="(000) 000-0000"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-ivory/60 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-ivory/10 border border-ivory/20 text-ivory placeholder-ivory/40 focus:outline-none focus:border-muted-rose transition-colors min-h-[44px]"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm text-ivory/60 mb-2">Service</label>
                <select
                  id="service"
                  className="w-full px-4 py-3 rounded-lg bg-ivory/10 border border-ivory/20 text-ivory focus:outline-none focus:border-muted-rose transition-colors min-h-[44px]"
                >
                  <option value="" className="bg-charcoal">Select a service</option>
                  <option value="cut" className="bg-charcoal">Signature Cut & Style</option>
                  <option value="balayage" className="bg-charcoal">Balayage & Highlights</option>
                  <option value="color" className="bg-charcoal">Full Color</option>
                  <option value="keratin" className="bg-charcoal">Keratin Smoothing</option>
                  <option value="bridal" className="bg-charcoal">Bridal Package</option>
                  <option value="scalp" className="bg-charcoal">Scalp Revival</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-ivory/60 mb-2">Notes (Optional)</label>
                <textarea
                  id="message"
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg bg-ivory/10 border border-ivory/20 text-ivory placeholder-ivory/40 focus:outline-none focus:border-muted-rose transition-colors resize-none"
                  placeholder="Tell us about your hair goals..."
                />
              </div>
              <Button size="lg" className="w-full group bg-white text-charcoal hover:bg-muted-rose hover:text-white">
                Request Appointment
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}
