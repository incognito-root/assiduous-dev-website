import Image from "next/image";
import Services from "@/components/component/Services";
import WhyUs from "@/components/component/WhyUs";
import { FloatingNav } from "@/components/ui/Navbar";
import { navItems } from "@/data";
import Hero from "@/components/component/Hero";
import { motion } from "framer-motion"
import NavigationBar from "@/components/component/NavigationBar";

export default function Home() {
  return (
    <main className="relative bg-[#1A1A1A] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10">

      <div className="max-w-7xl w-full">
        <NavigationBar ></NavigationBar>
      
        <Hero></Hero>
          
        <Services />
        <WhyUs />
        
      </div>
      

    </main>
  );
}
