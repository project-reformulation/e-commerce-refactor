"use client";//to give access to the user to interact with pages
import axios, { AxiosError } from "axios";
import Link from 'next/link'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SignUp() {
    const [name,setName]=useState<string>("")
    const [email,setEmail]=useState<string>("")
    const [password,setPassword]=useState<string>("")
    const [role,setRole]=useState<'user'|'seller'>('user') 



    const sign = () => {
        axios.post(
          "http://localhost:8000/auth/signup",
          {
            name: name,
            email: email,
            password: password,
            role: role,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
          .then((res) => {
            console.log(res, "successfully");
          })
          .catch((err) => {
            console.log(err);
          });
      };
      
        return (
         
          <div>
         
            <div className="SignUp w-full   bg-white">
       
        
        <div className="Line3 w-full h-0 left-0   justify-center items-center inline-flex">
          <div className="Line3 w-full h-[0px] origin-top-left rotate-180 opacity-30 border border-black"></div>
        </div>
        <div className="Frame760  justify-around   items-center flex">
          <div className="SideImage rounded-tr rounded-br justify-end items-center flex">
            <img className="DlBeatsnoop1 w-full h-1/4" src="https://media.istockphoto.com/id/1213907347/vector/3d-smartphone-online-shopping-concepts.jpg?s=612x612&w=0&k=20&c=aTMEyPgfWIdltv0uQoZa_QkgMoitcZDaHaSQOX3L47A=" />
          </div>
          <div className="Frame759 flex-col justify-start items-start gap-12 flex">
            <div className="Frame753 flex-col justify-start items-start gap-6 flex">

    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0, y: -20 }}
        className="CreateAnAccount text-black text-4xl font-medium font-['Inter'] leading-[30px] tracking-wider"
      >
        Create an account 🔒
      </motion.div>
    </AnimatePresence>

            </div>
            <div className="Frame758 flex-col justify-start items-center gap-10 flex">
              <div className="Frame757 flex-col justify-start items-start gap-10 flex">
              <div className="flex-col justify-start items-start gap-2 flex">
            <div className="opacity-40 text-black text-base font-normal font-['Poppins'] leading-normal"></div>
            <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                   Name
                  </label>
            
            
            <input
                    type="text"
                    name="text"
                    id="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
          </div>
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className="opacity-40 text-black text-base font-normal font-['Poppins'] leading-normal"></div>
            <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    E-mail
                  </label>
            
            <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
          </div>
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className="opacity-40 text-black text-base font-normal font-['Poppins'] leading-normal"></div>
            <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
          </div>
          <div className="flex-col justify-start items-start gap-2 flex">
        <div className="opacity-40 text-black text-base font-normal font-['Poppins'] leading-normal">Role</div>
        
        <div className="flex items-center gap-4">
          
          
          <label className="radio-container">
            User
            <input
              type="checkbox"
              name="role"
              value="user"
              checked={role === "user"}
              onChange={() => setRole("user")}
            />
            <span className="checkmark"></span>
          </label>
          
          <label className="radio-container">
            Seller
            <input
              type="checkbox"
              name="role"
              value="seller"
              checked={role === "seller"}
              onChange={() => setRole("seller")}
            />
            <span className="checkmark"></span>
          </label>
        </div>
      </div>
      
      
              </div>
              <div className="Frame752 flex-col justify-start items-start gap-4 flex">
              <button className="Button px-[122px] py-4 bg-red-500 rounded justify-center items-center gap-2.5 inline-flex" onClick={() =>
                 { sign()}}>
                  
        <div className="ViewAllProducts text-neutral-50 text-base font-medium font-['Poppins'] leading-normal">
        <Link href="/comp/Login">Create Account</Link>
        </div>
      </button> 
      
              </div>
            </div>
          </div>
        </div>
        
      </div>
   
          </div>
         
        )
      
        }











































































