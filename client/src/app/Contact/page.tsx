import React from 'react';
import Nav from '../Nav/page';
import Footer from '../Footer/page';

function Contact(): JSX.Element {
  return (
    <>
      <Nav />
      <div className="w-[1169px] h-[558px] relative">
        <div className="w-[130px] h-[21px] left-0 top-0 absolute justify-start items-center gap-3 inline-flex">
          <div className="opacity-50 text-black text-sm font-normal font-['Poppins'] leading-[21px]">Home</div>
          <div className="w-[13.19px] h-[0px] origin-top-left rotate-[117.05deg] border border-black border-opacity-50"></div>
          <div className="text-black text-sm font-normal font-['Poppins'] leading-[21px]">Contact</div>
        </div>
        <div className="w-[800px] h-[457px] pl-[31px] pr-8 py-10 left-[369px] top-[101px] absolute bg-white rounded shadow justify-center items-center inline-flex">
          <div className="self-stretch flex-col justify-start items-end gap-8 inline-flex">
            <div className="justify-start items-start gap-4 inline-flex">
              <div className="w-[235px] h-[50px] relative">
                <div className="w-[235px] h-[50px] left-0 top-0 absolute bg-neutral-100 rounded" />
                <div className="left-[16px] top-[13px] absolute opacity-50"><span className="text-black text-base font-normal font-['Poppins'] leading-normal">Your Name </span><span className="text-red-500 text-base font-normal font-['Poppins'] leading-normal">*</span></div>
              </div>
              <div className="w-[235px] h-[50px] relative">
                <div className="w-[235px] h-[50px] left-0 top-0 absolute bg-neutral-100 rounded" />
                <div className="left-[16px] top-[13px] absolute opacity-50"><span className="text-black text-base font-normal font-['Poppins'] leading-normal">Your Email </span><span className="text-red-500 text-base font-normal font-['Poppins'] leading-normal">*</span></div>
              </div>
              <div className="w-[235px] h-[50px] relative">
                <div className="w-[235px] h-[50px] left-0 top-0 absolute bg-neutral-100 rounded" />
                <div className="left-[16px] top-[13px] absolute opacity-50"><span className="text-black text-base font-normal font-['Poppins'] leading-normal">Your Phone </span><span className="text-red-500 text-base font-normal font-['Poppins'] leading-normal">*</span></div>
              </div>
            </div>
            <div className="w-[737px] h-[207px] relative">
              <div className="w-[737px] h-[207px] left-0 top-0 absolute bg-neutral-100 rounded" />
              <div className="left-[16px] top-[13px] absolute opacity-50 text-black text-base font-normal font-['Poppins'] leading-normal">Your Message</div>
            </div>
            <div className="px-12 py-4 bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
              <div className="text-neutral-50 text-base font-medium font-['Poppins'] leading-normal">Send Message</div>
            </div>
          </div>
        </div>
        <div className="w-[340px] h-[457px] px-[35px] pt-10 pb-[51px] left-0 top-[101px] absolute bg-white rounded shadow flex-col justify-start items-center inline-flex">
          <div className="self-stretch flex-col justify-start items-start gap-8 inline-flex">
            <div className="flex-col justify-start items-start gap-6 flex">
              <div className="justify-start items-center gap-4 inline-flex">
                <div className="w-10 h-10 p-2.5 bg-red-500 rounded-[31px] justify-center items-center flex" />
                <div className="text-black text-base font-medium font-['Poppins'] leading-normal">Call Us</div>
              </div>
              <div className="flex-col justify-start items-start gap-4 flex">
                <div className="w-[262px] text-black text-sm font-normal font-['Poppins'] leading-[21px]">We are available 24/7, 7 days a week.</div>
                <div className="text-black text-sm font-normal font-['Poppins'] leading-[21px]">Phone: +8801611112222</div>
              </div>
            </div>
            <div className="w-[270px] h-[0px] opacity-50 justify-center items-center inline-flex">
              <div className="w-[270px] h-[0px] border border-black"></div>
            </div>
            <div className="flex-col justify-start items-start gap-6 flex">
              <div className="justify-start items-center gap-4 inline-flex">
                <div className="w-10 h-10 px-2.5 py-[13px] bg-red-500 rounded-[43px] justify-center items-center flex" />
                <div className="text-black text-base font-medium font-['Poppins'] leading-normal">Write to Us</div>
              </div>
              <div className="flex-col justify-start items-start gap-4 flex">
                <div className="w-[250px] text-black text-sm font-normal font-['Poppins'] leading-[21px]">Fill out our form and we will contact you within 24 hours.</div>
                <div className="text-black text-sm font-normal font-['Poppins'] leading-[21px]">Email: customer@exclusive.com</div>
                <div className="text-black text-sm font-normal font-['Poppins'] leading-[21px]">Email: support@exclusive.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
