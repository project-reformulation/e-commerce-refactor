import React from "react";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { FaCamera } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
import { SiYoutubegaming } from "react-icons/si";
import { IconContext } from "react-icons";

const Categories: React.FC = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}>
      <div className="flex-col justify-start items-start gap-[60px] inline-flex">
        <div className="justify-start items-end gap-[691px] inline-flex">
          <div className="flex-col justify-start items-start gap-5 inline-flex">
            <div className="justify-start items-center gap-4 inline-flex">
              <div className="w-5 h-10 flex-col justify-center items-center inline-flex">
                <div className="w-5 h-10 bg-red-500 rounded"></div>
              </div>
              <div className="text-red-500 text-base font-semibold font-['Poppins'] leading-tight">Categories</div>
            </div>
            <div className="text-black text-4xl font-semibold font-['Inter'] leading-[48px] tracking-wider">Browse By Category</div>
          </div>
          <div className="justify-start items-start gap-2 flex">
            <div className="w-[46px] h-[46px] relative">
              <div className="w-[46px] h-[46px] left-0 top-0 absolute bg-neutral-100 rounded-full"></div>
              <div className="w-6 h-6 px-1 py-[5px] left-[11px] top-[11px] absolute justify-center items-center inline-flex">
                <IoPhonePortraitOutline />
              </div>
            </div>
            <div className="w-[46px] h-[46px] relative">
              <div className="w-[46px] h-[46px] left-0 top-0 absolute bg-neutral-100 rounded-full"></div>
              <div className="w-6 h-6 pl-[3.50px] pr-1 py-[5px] left-[11px] top-[11px] absolute justify-center items-center inline-flex">
                <HiOutlineComputerDesktop />
              </div>
              </IconContext.Provider>

</div>
<div className="text-black text-base font-normal font-['Poppins'] leading-normal">Computers</div>
</div>
<div className="w-[170px] h-[145px] pl-[34px] pr-[35px] pt-[25px] pb-6 rounded border border-black border-opacity-30 flex-col justify-center items-center gap-4 inline-flex">
<div className="w-14 h-14 relative flex-col justify-center items-start flex">

      <IconContext.Provider value={{size: "3em"  }}>
      <BsSmartwatch />
 </IconContext.Provider>
      
  
</div>
<div className="text-black text-base font-normal font-['Poppins'] leading-normal">SmartWatch</div>
</div>
<div className="w-[170px] h-[145px] pl-[51px] pr-[52px] pt-[25px] pb-6 bg-red-500 rounded shadow flex-col justify-center items-center gap-4 inline-flex">
<div className="w-14 h-14 relative flex-col justify-center  flex">
<IconContext.Provider value={{size: "3em" , color:"white" }}>
<FaCamera />
 </IconContext.Provider>
      
</div>
<div className="text-neutral-50 text-base font-normal font-['Poppins'] leading-normal">Camera</div>

</div>
<div className="w-[170px] h-[145px] pl-[34px] pr-[35px] pt-[25px] pb-6 rounded border border-black border-opacity-30 flex-col justify-center items-center gap-4 inline-flex">
<div className="w-14 h-14 relative flex-col justify-center items-start flex">
<IconContext.Provider value={{size: "3em"  }}>
<FaHeadphones />                 
  </IconContext.Provider>
</div>
<div className="text-black text-base font-normal font-['Poppins'] leading-normal">HeadPhones</div>
</div>
<div className="w-[170px] h-[145px] pl-[53px] pr-[52px] pt-[25px] pb-6 rounded border border-black border-opacity-30 flex-col justify-center items-center gap-4 inline-flex">
<div className="w-14 h-14 relative flex-col justify-start items-start flex">
<IconContext.Provider value={{size: "3em"  }}>
<SiYoutubegaming />
  </IconContext.Provider>
</div>
<div className="text-black text-base font-normal font-['Poppins'] leading-normal">Gaming</div>
</div>
</div>
</div>

  );
};

export default Categories;




      
                 
     
