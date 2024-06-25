import React from 'react'
import { HiPaintBrush } from 'react-icons/hi2'

const WhyUs = () => {
  return (
    <div className="h-full w-full bg-[#1A1A1A]">

        <div className="flex flex-col justify-center items-center sm:w-full sm:h-[280px] h-[150px] px-5 bg-cover bg-center" style={{ backgroundImage: "url('WhyUs.svg')" }}>
      
                <div className="flex flex-col justify-center items-center gap-3">
                    <h2 className="text-center text-white font-semibold sm:text-4xl text-2xl" >Why Choose Assiduous Dev?</h2>
                    <p className="text-[#E6E6E6] text-center sm:text-base text-sm">Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results.</p>
                </div>
        </div>

        <div className="sm:grid sm:grid-cols-2 sm:grid-rows-2 ">

            <div className="p-10 flex flex-col gap-1 border border-[#262626] ">
            <div className='flex gap-5'>
                <div className="flex flex-row justify-center items-center mb-6 h-[68px] w-[68px] rounded-lg bg-gradient-to-b from-[#242424] to-[#242424]">
                <div className='flex flex-row justify-center items-center'>
                <HiPaintBrush color="#9EFF00" fontSize="1.5em"/>
                </div> 
                </div> 
                <h3 className="mt-4 text-xl font-semibold text-white">Expertise</h3>
                </div>
                <img src="" alt="" />

                <div className="">
                <p className="text-[#e6e6e6b6] ">Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.</p>

                </div>
               
                </div>

                <div className="p-10 flex flex-col gap-1 border border-[#262626] ">
                
                <div className='flex gap-5'>
                <div className="mb-6 h-[68px] w-[68px] rounded-lg bg-gradient-to-b from-[#242424] to-[#242424]">
                </div> 
                <h3 className="mt-4 text-xl font-semibold text-white">Expertise</h3>
                </div>
                <img src="" alt="" />

                <div className="">
                <p className="text-[#e6e6e6b6] ">Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.</p>

                </div>
               
                </div>

                <div className="p-10 flex flex-col gap-1 border border-[#262626] ">
                <div className='flex gap-5'>
                <div className="mb-6 h-[68px] w-[68px] rounded-lg bg-gradient-to-b from-[#242424] to-[#242424]">
                </div> 
                <h3 className="mt-4 text-xl font-semibold text-white">Expertise</h3>
                </div>
                <img src="" alt="" />

                <div className="">
                <p className="text-[#e6e6e6b6] ">Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.</p>

                </div>
               
                </div>

                <div className="p-10 flex flex-col gap-1 border border-[#262626] ">
                <div className='flex gap-5'>
                <div className="mb-6 h-[68px] w-[68px] rounded-lg bg-gradient-to-b from-[#242424] to-[#242424]">
                </div> 
                <h3 className="mt-4 text-xl font-semibold text-white">Expertise</h3>
                </div>
                <img src="" alt="" />

                <div className="">
                <p className="text-[#e6e6e6b6] ">Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.</p>

                </div>
               
                </div>

        </div>


    </div>
  )
}

export default WhyUs