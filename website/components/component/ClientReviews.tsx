/* eslint-disable react/jsx-key */
import React from "react";
import { ClientReviewItems } from "@/data";
import Button from "./Button";

const ClientReviews = () => {
  return (
    <div className="h-full w-full bg-[#1A1A1A]">
      <div
        className="flex flex-col justify-center items-center sm:w-full sm:h-[280px] h-[150px] px-5 bg-cover bg-center"
        style={{ backgroundImage: "url('Services.svg')" }}
      >
        <div className="flex flex-col justify-center items-center gap-3">
          <h2 className="text-center text-white font-semibold sm:text-4xl text-2xl">
            What our Clients say About us
          </h2>
          <p className="text-[#E6E6E6] text-center sm:text-base text-sm">
            Transform your brand with our innovative digital solutions that
            captivate and engage your audience.
          </p>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 sm:grid-rows-2 ">
        {ClientReviewItems.map(
          ({
            id,
            reviewHighlight,
            reviewBody,
            clientName,
            clientDesignation,
            buttonLink,
            buttonText,
            imagePath,
          }) => (
            <div className="p-10 flex flex-col justify-between gap-5 border border-[#262626] h-full">
              <div>
                <h1 className="text-[#D8FF99] xl:text-[24px] sm:text-[20px] text-[18px] sm:h-[120px] max-sm:mb-2">
                  {reviewHighlight}
                </h1>
                <p className="text-[#E6E6E6] sm:text-[18px] text-[14px]">
                  {reviewBody}
                </p>
              </div>

              <div
                className="flex justify-between items-center w-full p-5 gap-2.5 border border-[#262626] rounded-lg "
              >
                <div className="flex w-full">
                  <img
                    src={imagePath}
                    alt="client picture"
                    className="w-[60px] h-[60px] rounded-lg"
                  />

                  <div className="flex flex-col px-3 py-1 ">
                    <p className="max-sm:text-[16px] text-[18px]">{clientName}</p>
                    <p className="text-[#E6E6E6] text-[14px]">
                      {clientDesignation}
                    </p>
                  </div>
                </div>
                <div className="max-md:hidden w-1/4">
                <Button id={3} width='full' text='View
                ' bgColor='[#262626]'></Button>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ClientReviews;
