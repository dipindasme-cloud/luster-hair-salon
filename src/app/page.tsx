import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Team } from "@/components/sections/Team";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Services />
        <Gallery />
        <Testimonials />

        {/* Mid-page CTA */}
        <section className="bg-foreground text-background py-16 px-4 sm:px-6 md:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">Ready for Your Transformation?</h2>
            <p className="text-background/80 mb-6 max-w-xl mx-auto leading-relaxed">Book your free consultation today. New clients receive a complimentary hair assessment.</p>
            <Button variant="inverse" size="lg" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Book Appointment
            </Button>
          </div>
        </section>

        <WhyChooseUs />
        <Team />
        <FAQ />
        <Contact />
      </main>
      <Footer />

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-foreground/95 backdrop-blur-sm p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <button
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          className="block w-full bg-white text-foreground text-center font-semibold py-3 rounded-full text-base min-h-[48px] hover:bg-accent-soft hover:text-white transition-colors"
        >
          Book Appointment
        </button>
      </div>
    </>
  );
}
