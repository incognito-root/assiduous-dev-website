import React from "react";

const Button = ({
  id,
  width,
  bgColor,
  text,
}: {
  id?: number;
  width?: string;
  text?: string;
  bgColor?: string;
}) => {
  let buttonClass = "";

  if (id === 1) {
    buttonClass = `z-10 h-[52px] w-[${
      width ? width : "113px"
    }] rounded-lg border border-[#333333] bg-[#9EFF00] font-semibold text-black`;
  } else if (id === 2) {
    buttonClass = `backdrop-blur-sm z-10 h-[52px] w-${width} rounded-lg border border-[#333333] bg-[#2424245d] text-whi`;
  } else {
    buttonClass = `backdrop-blur-sm z-10 h-[52px] w-[${
      width ? width : "[130px]"
    }] rounded-lg border border-none bg-${bgColor} text-white`;
  }

  return (
    <div>
      <button className={buttonClass}>{text}</button>
    </div>
  );
};

export default Button;
