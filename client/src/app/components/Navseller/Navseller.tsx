"use client";
import React from "react";
import Link from "next/link";

const Navseller: React.FC = () => {
  //   const navigate = useNavigate();

  return (
    <>
      {/* THE Nav bar */}
      <div
        style={{ marginTop: "1%", marginLeft: "8.4%" }}
        className="justify-center items-center gap-[9.25rem] inline-flex"
      >
        <div className="justify-center items-start gap-[11.8rem] flex">
          <div className="w-[7.3rem] h-6 justify-center items-center flex">
            <div className="text-black text-2xl font-bold leading-normal tracking-wide">
              SELLER
            </div>
          </div>
          <div
            className="justify-start items-start gap-12 flex"
            style={{ cursor: "pointer" }}
          >
            <div className="flex-col justify-center items-center inline-flex">
              <Link href="/HomeSeller">Home</Link>
            </div>
            <div className="flex-col justify-center items-center inline-flex">
              <Link href="/sellerinterface">Products</Link>
            </div>
            <div className="flex-col justify-center items-center inline-flex">
              <Link href="/sellerinterface/profile">Profile</Link>
            </div>

            <div className="w-12 h-6 justify-center items-center flex">
              <Link href="/sellerinterface/Contactseller">Contact</Link>
            </div>
            <div className="w-12 h-6 justify-center items-center flex">
              <Link href="/sellerinterface/StatisticsSeller">Dashbord</Link>
            </div>
            <div className="w-12 h-6 justify-center items-center flex">
              <Link href="/Login">Log  Out</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navseller;
