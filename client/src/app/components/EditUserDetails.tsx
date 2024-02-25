"use client";
import React, { FC } from "react";
import AnimateHeight, { Height } from "react-animate-height";
import { useForm } from "react-hook-form";
import { User } from "../types/types";

interface Props {
  height: Height;
  data: User;
  close: () => void;
}

const EditUserDetails: FC<Props> = ({ height, close, data }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = handleSubmit(async (e: Partial<User>) => {
    console.log(e);
  });

  return (
    <div className="mb-3">
      <AnimateHeight id="example-panel" duration={500} height={height}>
        <div className="w-full flex flex-col items-center justify-center h-full">
          <div className="flex flex-col w-[700px]">
            <div className="w-full flex justify-between py-6">
              <h1 className="font-bold">Edit User</h1>
            </div>
            <form onSubmit={onSubmit}>
              <div className="w-full flex gap-4">
                <div className="w-1/2 flex flex-col gap-4">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    defaultValue={data?.firstName}
                    className="w-full h-12 p-2 border border-gray-200 rounded bg-[#F5F5F5] outline-none"
                    {...register("firstName", { required: true })}
                  />
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    defaultValue={data?.lastName}
                    className="w-full h-12 p-2 border border-gray-200 rounded bg-[#F5F5F5] outline-none"
                    {...register("lastName", { required: true })}
                  />
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    id="email"
                    defaultValue={data?.email}
                    className="w-full h-12 p-2 border border-gray-200 rounded bg-[#F5F5F5] outline-none"
                    {...register("email", { required: true })}
                  />
                  <label htmlFor="password">password</label>
                  <input
                    type="password"
                    id="password"
                    className="w-full h-12 p-2 border border-gray-200 rounded bg-[#F5F5F5] outline-none"
                    {...register("password", { required: true })}
                  />
                </div>
              </div>

              <div className="w-full flex justify-end">
                <button className="w-32 h-12 bg-green-500 text-white rounded-md">
                  Edit
                </button>

                <button
                  className="w-32 h-12 bg-red-500 text-white rounded-md ml-4"
                  onClick={close}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </AnimateHeight>
    </div>
  );
};

export default EditUserDetails;
