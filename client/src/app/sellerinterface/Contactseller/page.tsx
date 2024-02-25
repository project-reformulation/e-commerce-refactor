import React from "react";
import { CiMail } from "react-icons/ci";
import { IoCallOutline, IoSendOutline } from "react-icons/io5";

const ContactSeller: React.FC = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="w-[1369px] h-[558px] shadow flex gap-8">
        <div className="flex flex-col gap-6 bg-white shadow p-2">
          <div className="text-xl font-bold flex items-center gap-2">
            <div className="bg-[#DB4444] w-10 h-10 flex items-center justify-center rounded-full">
              <IoCallOutline color="white" />
            </div>
            Call To Us
          </div>
          <p>We are available 24/7, 7 days a week.</p>
          <p>Phone: +8801611112222</p>
          <hr />
          <div className="text-xl font-bold flex items-center gap-2">
            <div className="bg-[#DB4444] w-10 h-10 flex items-center justify-center rounded-full">
              <CiMail color="white" />
            </div>
            Write To Us
          </div>
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p>
            Emails: <br />
            customer@exclusive.com
            <br />
            support@exclusive.com
          </p>
        </div>
        <div className="flex flex-col gap-6 bg-white shadow p-8 h-full">
          <div className="grid grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-[#F5F5F5] h-12 w-64 p-2 outline-none"
            />
            <input
              type="text"
              placeholder="Your Email "
              className="bg-[#F5F5F5] h-12 w-64 p-2 outline-none"
            />
            <input
              type="text"
              placeholder="Your Phone"
              className="bg-[#F5F5F5] h-12 w-64 p-2 outline-none"
            />
          </div>
          <textarea
            placeholder="Your Massage"
            className="bg-[#F5F5F5] h-65 w-full p-2 outline-none"
          />
          <div className="w-full flex justify-end">
            <button className="h-14 w-60 bg-[#DB4444] text-white flex items-center gap-2 justify-center p-4">
              Send Message
              <IoSendOutline />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSeller;
