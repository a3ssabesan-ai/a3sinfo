import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import AIStrategy from "./components/AIStrategy";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0f1e]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <AIStrategy />
      <Contact />
      <Footer />
    </main>
  );
}
