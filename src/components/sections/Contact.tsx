"use client";

import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FormInput, FormSelect, FormTextarea, FormField } from "@/components/ui/Form";
import { MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle, Loader2, Shield } from "lucide-react";

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
        <div className={`transition-all duration-500 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}>
          <div className="w-full h-full bg-[#f8f5f2] rounded-3xl p-8 md:p-12 flex flex-col gap-8">
  {/* Top Content */}
  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
    
    {/* Heading */}
    <div className="max-w-2xl">
      <h2 className="text-3xl md:text-5xl font-semibold text-[#1f1f1f] leading-tight">
        Get in touch with Luster experts
      </h2>
    </div>

    
  </div>

  {/* Review Card */}
  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-neutral-200 max-w-2xl">
    
    {/* Stars */}
    <div className="flex items-center gap-1 mb-5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          className="w-5 h-5 fill-orange-400"
        >
          <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z" />
        </svg>
      ))}
    </div>

    {/* Review Text */}
    <p className="text-neutral-600 text-base md:text-lg leading-relaxed mb-6">
      The team at Luster truly understands hair! From consultation
      to styling, they made me feel confident and beautiful.
    </p>

    {/* User */}
    <div className="flex items-center gap-4">
      
      {/* Profile */}
      <div className="w-14 h-14 rounded-full overflow-hidden">
        <img
          src="https://framerusercontent.com/images/tOD4UiwN4XShQxBFw0V7t06FA.jpg"
          alt="Emma Rose"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info */}
      <div>
        <h4 className="text-[#1f1f1f] font-semibold">
          Emma Rose
        </h4>

        <p className="text-sm text-neutral-500">
          Hair styling and color
        </p>
      </div>
    </div>
  </div>
</div>

          

    
        </div>

        <div className={`transition-all duration-500 delay-200 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}>
          <div className="bg-background/5 rounded-2xl p-6 sm:p-8 border border-background/10 h-full flex flex-col">
            

            {formState === "success" ? (
              <div className="text-center flex-grow flex flex-col items-center justify-center">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h4 className="text-2xl font-serif text-background mb-2">Request Received!</h4>
                <p className="text-background/70">We'll contact you within 24 hours to confirm your appointment.</p>
              </div>
            ) : (
              <form id="contact-form" className="space-y-4 flex flex-col flex-grow" onSubmit={handleSubmit} noValidate>
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
                    <option value="cut" className="bg-foreground">Deep Conditioning</option>
                    <option value="balayage" className="bg-foreground">Precision Haircuts</option>
                    <option value="color" className="bg-foreground">Hair Coloring</option>
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
                  className="w-full group mt-auto"
                  type="submit"
                  disabled={formState === "submitting"}
                  variant="inverse"
                >
                  {formState === "submitting" ? (
                    <>Sending... <Loader2 className="ml-2 w-5 h-5 animate-spin" /></>
                  ) : (
                    <>Submit Your Form <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" /></>
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
