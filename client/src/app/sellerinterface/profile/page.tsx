"use client";
import { Details } from "@/app/components/Details";
import EditUserDetails from "@/app/components/EditUserDetails";
import { User } from "@/app/types/types";
import React, { useState } from "react";
import { Height } from "react-animate-height";
import { LiaUserEditSolid } from "react-icons/lia";

const data: User = {
  id: "1",
  firstName: "John",
  lastName: "Doe",
  email: "exemple@gmail.com",
};

const Profile = () => {
  const [height, setHeight] = useState<Height>(0);

  return (
    <div className="bg-white rounded-md h-screen">
      <div className="grid md:grid-cols-4 md:p-8 sm:grid-cols-2 grid-cols-1 p-2 gap-4 bg-gray-100 shadow">
        <div className="md:col-span-4 sm:col-span-2 col-span-1 py-4">
          <h1
            className="sm:text-2xl w-52 text-lg font-black text-black flex items-center gap-2 hover:underline cursor-pointer"
            onClick={() => {
              setHeight(height === 0 ? "auto" : 0);
            }}
          >
            User Details <LiaUserEditSolid size={24} />
          </h1>
        </div>
        <Details title="First Name" value={data?.firstName} />
        <Details title="Last Name" value={data?.lastName} />
        <Details title="Email" value={data?.email} />
      </div>

      <EditUserDetails
        height={height}
        close={() => setHeight(height === 0 ? "auto" : 0)}
        data={data}
      />
    </div>
  );
};

export default Profile;
