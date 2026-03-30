import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Startup from "@/components/Startup";
import Academic from "@/components/Academic";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Startup />
      <Academic />
      <Achievements />
      <Contact />
      <Footer />
    </>
  );
}
