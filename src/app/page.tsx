import Image from "next/image";
import Header from "./_components/Header";
import { Hero } from "./_components/Hero";
import Footer from "./_components/Footer";
import { Skills } from "./_components/Skills";
import { Projects } from "./_components/Projects";
import { Contact } from "./_components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
