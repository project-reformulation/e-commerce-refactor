import React from "react";
import Slider from "../Slider/page";

function Hero(): JSX.Element {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ marginTop: "3%", marginLeft: "8.4%" }} className="flex-col justify-start items-start gap-4 inline-flex">
        <div className="justify-start items-start gap-[51px] inline-flex">
          <div className="text-center text-black text-base font-normal font-['Poppins'] leading-normal">
            Woman’s Fashion
          </div>
          <div className="w-6 h-6 pl-1.5 pr-[5.27px] pt-2 pb-[8.22px] origin-top-left -rotate-90 justify-center items-center flex"></div>
        </div>
        <div className="justify-start items-start gap-[81px] inline-flex">
          <div className="text-center text-black text-base font-normal font-['Poppins'] leading-normal">
            Men’s Fashion
          </div>
          <div className="w-6 h-6 pl-1.5 pr-[5.27px] pt-2 pb-[8.22px] origin-top-left -rotate-90 justify-center items-center flex"></div>
        </div>
        <div className="text-center text-black text-base font-normal font-['Poppins'] leading-normal">
          Electronics
        </div>
        <div className="text-center text-black text-base font-normal font-['Poppins'] leading-normal">
          Home &amp; Lifestyle
        </div>
        <div className="text-center text-black text-base font-normal font-['Poppins'] leading-normal">
          Medicine
        </div>
        <div className="text-center text-black text-base font-normal font-['Poppins'] leading-normal">
          Sports &amp; Outdoor
        </div>
        <div className="text-center text-black text-base font-normal font-['Poppins'] leading-normal">
          Baby’s &amp; Toys
        </div>
        <div className="text-center text-black text-base font-normal font-['Poppins'] leading-normal">
          Groceries &amp; Pets
        </div>
        <div className="text-center text-black text-base font-normal font-['Poppins'] leading-normal">
          Health &amp; Beauty
        </div>
      </div>
      <Slider />
    </div>
  );
}

export default Hero;
