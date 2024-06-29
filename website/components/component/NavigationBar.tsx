'use client';

import React, { useState, useEffect } from 'react';
import Button from './Button';

const NavigationBar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const handleClick = () => {
    setIsNavVisible(!isNavVisible);
  };

  useEffect(() => {
    if (isNavVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isNavVisible]);

  return (
    <nav className='relative flex justify-between items-center w-[100%] bg-[#1A1A1A] py-4 max-md:px-5'>
      <div className='z-[61] flex'>
        <img className="w-14" src="Logo.svg" alt="Logo" />
      </div>
      <div
        className={`absolute z-50 md:static bg-[#1A1A1A] md:min-h-fit min-h-[100vh] left-0 ${
          isNavVisible ? 'top-[9%]' : 'top-[-1000%]'
        } w-[100%] flex justify-center items-center px-5 transition-top duration-500 ease-in-out`}
        style={{ transitionProperty: 'top' }}
      >
        <ul className='nav-links flex flex-col md:flex-row items-center md:gap-[3vw] gap-6'>
          <li>
            <a className='hover:text-[#9EFF00]' href="#">Home</a>
          </li>
          <li>
            <a className='hover:text-[#9EFF00]' href="#">Services</a>
          </li>
          <li>
            <a className='hover:text-[#9EFF00]' href="#">Work</a>
          </li>
          <li>
            <a className='hover:text-[#9EFF00]' href="#">Process</a>
          </li>
          <li>
            <a className='hover:text-[#9EFF00]' href="#">About</a>
          </li>
        </ul>
      </div>
      <div className='z-[61] flex items-center gap-6'>
        <Button id={1} width='[103px]' text='Contact Us' />
        <img
          onClick={handleClick}
          className="md:hidden cursor-pointer"
          src={isNavVisible ? "Burger.svg" : "closebtn.svg"}
          alt="menu button"
        />
      </div>
    </nav>
  );
}

export default NavigationBar;
