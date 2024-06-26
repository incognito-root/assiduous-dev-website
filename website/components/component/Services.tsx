import React from 'react'
import { HiPaintBrush,HiPuzzlePiece } from 'react-icons/hi2'
import { MdManageAccounts } from 'react-icons/md'
import { ServicesItems } from '@/data'


const Services = () => {
  return (
    <div className="h-full w-full bg-[#1A1A1A]">

  <div className="flex flex-col justify-center items-center sm:w-full sm:h-[280px] h-[150px] px-5 bg-cover bg-center" style={{ backgroundImage: "url('Services.svg')" }}>
      
      <div className="flex flex-col justify-center items-center gap-3">
      <h2 className="text-center text-white font-semibold sm:text-4xl text-2xl" >Our Services</h2>
      <p className="text-[#E6E6E6] text-center sm:text-base text-sm">Transform your brand with our innovative digital solutions that captivate and engage your audience.</p>
     </div>
  </div>
  <div className="sm:flex sm:flex-row overflow-hidden ">

    {ServicesItems.map(({id,title,desc,buttonText,})=>
      (
        <div className="p-10 flex flex-col gap-1 border border-[#262626] sm:w-[2000px]">
        <div className="flex flex-row justify-center items-center mb-6 h-[68px] w-[68px] rounded-lg bg-gradient-to-b from-[#242424] to-[#242424]">

          {
            id===1?<HiPaintBrush color="#9EFF00" fontSize= "1.75rem"/>: id===2?<HiPuzzlePiece color="#9EFF00" fontSize= "1.75rem"/>:<MdManageAccounts color="#9EFF00" fontSize= "1.80rem"/>
          }
          
 
        </div>
        
        <div className=" sm:h-[350px] h-[300px] overflow-hidden 
        md:mask-linear md:mask-dir-to-b 
        sm:mask-linear sm:mask-from-50 mask-to-[0.1]">
        <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
        <p className="text-[#e6e6e6b6] ">{desc}</p>
  
        </div>
        <button className="rounded-md h-[52px] w-full font-semibold text-[#E6E6E6] bg-[#262626]">{buttonText}</button>
      </div>
      ))}

  </div>
</div>


  )
}

export default Services
