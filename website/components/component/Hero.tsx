import React from 'react'

const Hero = () => {
  return (
    <section className='h-screen '>
      
    <div className="h-full w-full bg-[#1A1A1A] ">
    
  <div className ="flex h-full flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('Grill.svg')" }}>
 
    <div className="relative flex flex-col items-center justify-center gap-8">
    <img className=' absolute w-[100%] top-[60vh] sm:top-[43vh] md:top-[34vh] lg:top-[30vh] 2xl:top-[30vh]' src="Hero.png" alt="HeroImage" />
      
      <h1 className="z-10 text-center sm:text-5xl text-4xl sm:w-full w-[350px] font-semibold text-white">Empowering Your Vision with Assiduous Solutions</h1>
      <div className="z-10 flex p-5 h-[150px] w-[370px] sm:h-[74px] sm:w-[699px] items-center justify-center rounded-lg border border-[#262626] bg-[#2424249d]">
        <p className="w-[350px] sm:w-full sm:text-lg text-lg text-[#9EFF00] sm:text-white">For <span className="rounded-md sm:bg-[#393939] text-white px-[10px] py-[7px]">Startups</span> , <span className="rounded-md sm:bg-[#393939] text-white  px-[10px] py-[7px]">Enterprise Leaders</span> , <span className="rounded-md sm:bg-[#393939] text-white  px-[10px] py-[7px]">Media & Publishers</span> and <span className="rounded-md sm:bg-[#393939] text-white  px-[10px] py-[7px]">Digital Good</span></p>
      </div>

      <div className="items z-10 flex justify-center gap-3">
        <button className  ="z-10 h-[46px] w-[103px] rounded-lg border border-[#333333] bg-[#2424245d] text-white">Our Works</button>
        <button className ="z-10 h-[46px] w-[103px] rounded-lg border border-[#333333] bg-[#9EFF00] font-semibold text-black">Contact Us</button>
        
      </div>

      
        
      
    </div>
    
  </div>
</div>
</section>
  )
}

export default Hero