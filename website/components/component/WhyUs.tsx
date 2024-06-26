import { WhyUsItems } from '@/data'
import React from 'react'
import { IoMedal } from "react-icons/io5";
import { MdPeopleAlt } from "react-icons/md";
import { MdEnergySavingsLeaf } from "react-icons/md";
import { FaCrown } from "react-icons/fa";


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

          {WhyUsItems.map(({id,title,desc,})=>(<div className="p-10 flex flex-col gap-1 border border-[#262626] ">
            <div className='flex gap-5'>
                <div className="flex flex-row justify-center items-center mb-6 h-[68px] w-[68px] rounded-lg bg-gradient-to-b from-[#242424] to-[#242424]">
                <div className='flex flex-row justify-center items-center'>
                
                {
            id===1?<IoMedal  color="#9EFF00" fontSize= "1.75rem"/>: id===2?<MdPeopleAlt color="#9EFF00" fontSize= "1.75rem"/>: id===3?<MdEnergySavingsLeaf color="#9EFF00" fontSize= "1.75rem"/>:<FaCrown color="#9EFF00" fontSize= "1.75rem"/>
          }

                </div> 
                </div> 
                <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
                </div>
                <img src="" alt="" />

                <div className="">
                <p className="text-[#e6e6e6b6] ">{desc}</p>

                </div>
               
                </div>))}
{
            
}
               

             

            
        </div>


    </div>
  )
}

export default WhyUs