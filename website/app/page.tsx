import Image from "next/image";
import Services from "@/components/component/Services";
import WhyUs from "@/components/component/WhyUs";
import { FloatingNav } from "@/components/ui/Navbar";
import { navItems } from "@/data";
import Hero from "@/components/component/Hero";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10">

      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero></Hero>
      <Services />
      <WhyUs />

      </div>
      

    </main>
  );
}
