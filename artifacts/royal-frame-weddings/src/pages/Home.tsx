import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { Packages } from "@/components/sections/Packages";
import { Testimonials } from "@/components/sections/Testimonials";
import { Booking } from "@/components/sections/Booking";
import { ContactInfo } from "@/components/sections/ContactInfo";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Packages />
        <Testimonials />
        <Booking />
        <ContactInfo />
      </main>

      <Footer />
    </div>
  );
}
