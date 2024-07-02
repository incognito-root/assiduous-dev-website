"use client";

import React, { useState } from 'react';
import { FAQItems } from '@/data'; // Assuming FAQItems is imported from a data source

const FAQ = () => {
  // State to keep track of expanded FAQs
  const [expandedFAQs, setExpandedFAQs] = useState<{ [key: number]: boolean }>({});

  // Function to toggle the FAQ
  const toggleFAQ = (index: number) => {
    setExpandedFAQs(prevState => ({
      ...prevState,
      [index]: !prevState[index] // Toggle the state for the clicked FAQ
    }));
  };

  return (
    <div className="h-full w-full bg-[#1A1A1A]">
      <div className="flex flex-col justify-center items-center sm:w-full sm:h-[280px] h-[150px] px-5 bg-cover bg-center" style={{ backgroundImage: "url('Services.svg')" }}>
        <div className="flex flex-col justify-center items-center gap-3">
          <h2 className="text-center text-white font-semibold sm:text-4xl text-2xl">Frequently Asked Questions</h2>
          <p className="text-[#E6E6E6] text-center sm:text-base text-sm">
            Still have any questions? Contact our Team via hello@AssiduousDev.com.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center py-10  px-5 mx-auto max-w-7xl ">
        {FAQItems.map(({ id, Question, Answer }) => (
          <div key={id} className="border border-l-[#262626] p-3 faq-item flex flex-col w-full sm:w-[calc(50%-20px)]">
            <div className="flex justify-between items-center gap-4 sm:gap-6">
              <div className="flex justify-center items-center text-[#9EFF00] w-[62px] h-[62px] bg-[#262626] border border-[#1313139f] rounded-md text-[28px] font-semibold">
                0{id}
              </div>
              <div className="flex-1 py-3">
                <h3 className={`text-[16px] ${expandedFAQs[id] ? 'text-[#C5FF66]' : 'text-white'}`}>{Question}</h3>
              </div>
              <img
                className="cursor-pointer w-6 h-6 sm:w-8 sm:h-8"
                src={expandedFAQs[id] ? "FAQ_cross.svg" : "FAQ_plus.svg"}
                alt={expandedFAQs[id] ? "FAQ PLUS" : "FAQ CROSS"}
                onClick={() => toggleFAQ(id)}
              />
            </div>
            <div className={`flex flex-wrap hidden-content ${expandedFAQs[id] ? 'expanded' : ''}`}>
              <p className="ml-[84px] whitespace-pre-line text-[14px] text-[#E6E6E6] font-light">
                {Answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
