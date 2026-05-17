import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import VisionMission from "./components/VisionMission";
import Plans from "./components/Plans";
import Goals from "./components/Goals";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <VisionMission />
        <Plans />
        <Goals />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
