import React from 'react'

const Button = (
  {id,width,bgColor,text}:
  {id?:number;width?:string;text?:string;bgColor?:string}
) => {
  return (
    <div>
    {id===1?<button className ={`z-10 h-[52px] w-[103px] rounded-lg border border-[#333333] bg-[#9EFF00] font-semibold text-black`}>{text}</button>:id===2?<button className  ={`backdrop-blur-sm z-10 h-[52px] w-${width} rounded-lg border border-[#333333] bg-[#2424245d] text-whi`}>{text}</button>:<button className  ={`backdrop-blur-sm z-10 h-[52px] w-${width} rounded-lg border border-none bg-${bgColor} text-white`}>{text}</button> }


   
   </div>
  )
}

 export default Button