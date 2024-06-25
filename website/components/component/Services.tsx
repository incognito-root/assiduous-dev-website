import React from 'react'

const Services = () => {
  return (
    <div className="h-full w-full bg-[#1A1A1A]">

  <div className="flex flex-col justify-center items-center sm:w-full sm:h-[280px] h-[150px] px-5 bg-cover bg-center" style={{ backgroundImage: "url('Services.svg')" }}>
      
      <div className="flex flex-col justify-center items-center gap-3">
      <h2 className="text-center text-white font-semibold sm:text-4xl text-2xl" >Our Services</h2>
      <p className="text-[#E6E6E6] text-center sm:text-base text-sm">Transform your brand with our innovative digital solutions that captivate and engage your audience.</p>
     </div>
  </div>
  <div className="sm:flex sm:flex-row ">
    <div className="p-10 flex flex-col gap-1 border border-[#262626] sm:w-[2000px]">
      <div className="mb-6 h-[68px] w-[68px] rounded-lg bg-gradient-to-b from-[#242424] to-[#242424]"></div>
      <img src="" alt="" />
      <div className=" sm:h-[350px] h-[300px]">
      <h3 className="mb-2 text-xl font-semibold text-white">Design</h3>
      <p className="text-[#e6e6e6b6] ">At AssiduousDev, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.</p>

      </div>
      <button className="rounded-md h-[52px] w-full font-semibold text-[#E6E6E6] bg-[#262626]">Learn More</button>
    </div>

    <div className="p-10 flex flex-col gap-1 border border-[#262626] sm:w-[2000px]">
      <div className="mb-6 h-[68px] w-[68px] rounded-lg bg-gradient-to-b from-[#242424] to-[#242424]"></div>
      
      <div className=" sm:h-[350px] h-[300px]">
        <h3 className="mb-2 text-xl font-semibold text-white">Development</h3>
      <p className="text-[#e6e6e6b6]">Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.</p>
      </div>

      <button className="rounded-md h-[52px] w-full font-semibold text-[#E6E6E6] bg-[#262626]">Learn More</button>
    </div>

    <div className="p-10 flex flex-col gap-1 border border-[#262626] sm:w-[2000px]">
      <div className="mb-6 h-[68px] w-[68px] rounded-lg bg-gradient-to-b from-[#242424] to-[#242424]"></div>
      
      <div className=" sm:h-[350px] h-[300px]">
        <h3 className="mb-2 text-xl font-semibold text-white">Project Management</h3>
      <p className="text-[#e6e6e6b6]">Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.</p>

      </div>

      <button className="mt-23 rounded-md h-[52px] w-full font-semibold text-[#E6E6E6] bg-[#262626]">Learn More</button>
      
    </div>
  </div>
</div>


  )
}

export default Services
