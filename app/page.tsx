import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import RevealInit from "@/components/RevealInit";

export default function Page() {
  return (
    <>
      <Cursor />
      <RevealInit />
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Services />
        <WhyUs />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
