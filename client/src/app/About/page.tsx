import React from 'react';
import Nav from '../Nav/page';
import Footer from '../Footer/page';

function About(): JSX.Element {
  return (
    <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" , marginBottom:"150px" }}>
      <Nav />
      <div className="w-[1437px] h-[2905px] relative bg-white">
        <div className="w-[1440px] h-[0px] justify-center items-center inline-flex">
          <div className="w-[1440px] h-[0px] origin-top-left rotate-180 opacity-30 border border-black"></div>
        </div>
        <div className="left-[135px] top-[222px] absolute justify-start items-center gap-3 inline-flex">
          <div className="opacity-50 text-black text-sm font-normal font-['Poppins'] leading-[21px]">Home</div>
          <div className="w-[13.19px] h-[0px] origin-top-left rotate-[117.05deg] border border-black border-opacity-50"></div>
          <div className="text-black text-sm font-normal font-['Poppins'] leading-[21px]">About</div>
        </div>
        <div className="left-[135px] top-[422px] absolute flex-col justify-start items-start gap-10 inline-flex">
          <div className="text-justify text-black text-[54px] font-semibold font-['Inter'] leading-[64px] tracking-[3.24px]">Our Story</div>
          <div className="flex-col justify-start items-start gap-6 flex">
            <div className="w-[525px] text-black text-base font-normal font-['Poppins'] leading-relaxed">Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.</div>
            <div className="w-[505px] text-black text-base font-normal font-['Poppins'] leading-relaxed">Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assortment in categories ranging from consumer.</div>
          </div>
        </div>
        <div className="h-[609px] left-[734px] top-[285px] absolute bg-pink-400 rounded-tl rounded-bl justify-end items-center inline-flex">
          <img className="w-[837px] h-[609px]" src="https://talks.freelancerepublik.com/wp-content/uploads/2021/03/Comment-developper-efficacement-son-activite.jpg" alt="Our Story" />
        </div>
        <div className="left-[135px] top-[1404px] absolute justify-center items-start gap-[30px] inline-flex">
          {/* Profiles */}
        </div>
        <div className="left-[663px] top-[2008px] absolute justify-start items-center gap-3 inline-flex">
          {/* Pagination */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
