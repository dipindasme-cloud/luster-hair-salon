"use client";

import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FormInput, FormSelect, FormTextarea, FormField } from "@/components/ui/Form";
import { MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle, Loader2 } from "lucide-react";

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
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    if (errors[e.target.id]) {
      setErrors({ ...errors, [e.target.id]: "" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim() || formData.phone.replace(/\D/g, "").length < 10) newErrors.phone = "Valid phone number is required";
    if (!formData.email.trim() || !formData.email.includes("@")) newErrors.email = "Valid email is required";
    if (!formData.service) newErrors.service = "Please select a service";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setFormState("submitting");
    setTimeout(() => {
      setFormState("success");
    }, 1500);
  };

  return (
    <Section ref={ref} id="contact" className="bg-foreground text-background">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        <div className={`transition-all duration-700 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
          <span className="inline-block text-accent-soft text-sm font-semibold tracking-widest uppercase mb-4">
            Book Now
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium leading-tight mb-6">
            Ready for Your
            <span className="italic text-accent-soft"> Transformation?</span>
          </h2>
          <p className="text-lg text-background/80 leading-relaxed mb-10">
            Book your appointment today. New clients receive a complimentary
            consultation with their first visit.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {contactInfo.map((info) => (
              <div key={info.label} className="flex gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-background/10 flex items-center justify-center">
                  <info.icon className="w-4 h-4 text-accent-soft" />
                </div>
                <div>
                  <div className="text-xs text-accent-soft mb-1">{info.label}</div>
                  <div className="text-background/80 whitespace-pre-line text-[15px] leading-relaxed">{info.value}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Button variant="inverse" size="lg" className="group" onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}>
              Book Appointment
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <a
              href="tel:+13105550189"
              className="inline-flex items-center justify-center px-9 py-4 text-base sm:text-lg font-semibold tracking-wide rounded-full border-2 border-background/50 text-background hover:bg-background hover:text-foreground transition-all duration-300 min-h-[48px]"
            >
              <Phone className="mr-2 w-4 h-4" />
              Call Us
            </a>
          </div>
        </div>

        <div className={`transition-all duration-700 delay-300 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
          <div className="bg-background/5 rounded-2xl p-6 sm:p-8 border border-background/10">
            <h3 className="text-xl font-serif mb-6">Request an Appointment</h3>

            {formState === "success" ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h4 className="text-2xl font-serif text-background mb-2">Request Received!</h4>
                <p className="text-background/70">We'll contact you within 24 hours to confirm your appointment.</p>
              </div>
            ) : (
              <form id="contact-form" className="space-y-4" onSubmit={handleSubmit} noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField label="Name" required error={errors.name}>
                    <FormInput
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      error={errors.name}
                    />
                  </FormField>
                  <FormField label="Phone" required error={errors.phone}>
                    <FormInput
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      autoComplete="tel"
                      pattern="[\d\s\-\(\)\+]{10,}"
                      placeholder="(000) 000-0000"
                      error={errors.phone}
                    />
                  </FormField>
                </div>
                <FormField label="Email" required error={errors.email}>
                  <FormInput
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    placeholder="your@email.com"
                    error={errors.email}
                  />
                </FormField>
                <FormField label="Service" required error={errors.service}>
                  <FormSelect
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    error={errors.service}
                  >
                    <option value="" className="bg-foreground">Select a service</option>
                    <option value="cut" className="bg-foreground">Signature Cut & Style</option>
                    <option value="balayage" className="bg-foreground">Balayage & Highlights</option>
                    <option value="color" className="bg-foreground">Full Color</option>
                    <option value="keratin" className="bg-foreground">Keratin Smoothing</option>
                    <option value="bridal" className="bg-foreground">Bridal Package</option>
                    <option value="scalp" className="bg-foreground">Scalp Revival</option>
                  </FormSelect>
                </FormField>
                <FormField label="Notes (Optional)">
                  <FormTextarea
                    id="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your hair goals..."
                  />
                </FormField>
                <Button
                  size="lg"
                  className="w-full group"
                  type="submit"
                  disabled={formState === "submitting"}
                  variant="inverse"
                >
                  {formState === "submitting" ? (
                    <>Sending... <Loader2 className="ml-2 w-5 h-5 animate-spin" /></>
                  ) : (
                    <>Request Appointment <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" /></>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
