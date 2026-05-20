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
    label: "Call Us",
    value: "(310) 555-0189",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@lustersalon.com",
  },
  {
    icon: Clock,
    label: "Opening Hours",
    value: "Tue-Sat: 9AM - 7PM\nSun: 10AM - 5PM | Mon: Closed",
  },
];

export function Contact() {
  const { ref, isInView } = useInView();

  return (
    <Section ref={ref} id="contact" className="bg-charcoal text-ivory">
      <div className="grid lg:grid-cols-2 gap-16">
        <div className={`transition-all duration-700 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
          <span className="inline-block text-muted-rose text-sm font-medium tracking-widest uppercase mb-4">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium leading-tight mb-6">
            Ready for Your
            <span className="italic text-muted-rose"> Transformation?</span>
          </h2>
          <p className="text-lg text-ivory/60 leading-relaxed mb-10">
            Book your appointment today and experience the Luster difference. 
            Your best hair is just one visit away.
          </p>

          <div className="space-y-6">
            {contactInfo.map((info) => (
              <div key={info.label} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-ivory/10 flex items-center justify-center">
                  <info.icon className="w-5 h-5 text-muted-rose" />
                </div>
                <div>
                  <div className="text-sm text-muted-rose mb-1">{info.label}</div>
                  <div className="text-ivory/80 whitespace-pre-line text-sm">{info.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`transition-all duration-700 delay-300 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
          <div className="bg-ivory/5 rounded-2xl p-8 md:p-10 border border-ivory/10">
            <h3 className="text-2xl font-serif mb-6">Book Your Appointment</h3>
            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm text-ivory/60 mb-2">Full Name</label>
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
                  <option value="color" className="bg-charcoal">Balayage & Highlights</option>
                  <option value="keratin" className="bg-charcoal">Keratin Smoothing</option>
                  <option value="treatment" className="bg-charcoal">Deep Conditioning</option>
                  <option value="bridal" className="bg-charcoal">Bridal Styling</option>
                  <option value="scalp" className="bg-charcoal">Scalp Revival Treatment</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-ivory/60 mb-2">Message (Optional)</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-ivory/10 border border-ivory/20 text-ivory placeholder-ivory/40 focus:outline-none focus:border-muted-rose transition-colors resize-none"
                  placeholder="Tell us about your hair goals..."
                />
              </div>
              <Button size="lg" className="w-full group">
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
