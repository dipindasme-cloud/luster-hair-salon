import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Services } from "@/components/sections/Services";
import { Gallery } from "@/components/sections/Gallery";
import { Reviews } from "@/components/sections/Reviews";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Team } from "@/components/sections/Team";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { HowWork } from "@/components/sections/HowWork";


export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <TrustStrip />
        <Services />
        
        <WhyChooseUs />
        <HowWork />
        <Team />
        
        <Reviews />
        <FAQ />
        <Contact />
        <Gallery />
      </main>
      <Footer />
      
    </>
  );
}
