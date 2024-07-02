import React from 'react';

const Button = (
  { id = 0, width = 'full', bgColor = '#242424', text = 'Button' }:
  { id?: number; width?: string; text?: string; bgColor?: string }
) => {
  let buttonClass = 'z-10 h-[52px] rounded-lg ';

  switch (id) {
    case 1:
      buttonClass += `w-[103px] border border-[#333333] bg-[#9EFF00] font-semibold text-black`;
      break;
    case 2:
      buttonClass += `w-[103px] border border-[#333333] bg-[#2424245d] text-white backdrop-blur-sm`;
      break;
    default:
      buttonClass += `w-full border-none bg-${bgColor} text-white backdrop-blur-sm`;
      break;
  }

  return (
    <div>
      <button className={buttonClass}>{text}</button>
    </div>
  );
}

export default Button;
