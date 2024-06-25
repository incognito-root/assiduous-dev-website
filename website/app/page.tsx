import Image from "next/image";
import Services from "@/components/component/Services";
export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10">

      <div className="max-w-7xl w-full">
      <Services></Services>

      </div>
      

    </main>
  );
}
