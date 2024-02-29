

import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Membership from "@/components/Membership";
import Register from "@/components/Register";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {



  return (
    <div className="space-y-8 scroll-smooth">
      <Hero />
      <Services/>
      <HowItWorks/>
      <About/>
      <Membership/>
      <Contact/>
      <Register/>
    </div>
  );
}
