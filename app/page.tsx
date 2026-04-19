import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FreeToolBanner from "@/components/FreeToolBanner";
import WhyUs from "@/components/WhyUs";
import Features from "@/components/Features";
import Reviews from "@/components/Reviews";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FreeToolBanner />
        <WhyUs />
        <Features />
        <Reviews />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
