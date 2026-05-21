import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Services } from "@/components/sections/Services";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Team } from "@/components/sections/Team";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { InlineCTA, MidPageCTA, MobileStickyCTA } from "@/components/sections/CTAs";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <TrustStrip />
        <Services />
        <Gallery />
        <Testimonials />
        <InlineCTA />
        <MidPageCTA />
        <WhyChooseUs />
        <Team />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
