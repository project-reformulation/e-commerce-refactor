"use client"
import Link from 'next/link';
import React, {useEffect, useState } from 'react'
import { useRouter } from "next/navigation";
import  { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import axios from 'axios';
import {motion,AnimatePresence} from "framer-motion";

const login = () => {
    const router = useRouter()
    const [email,setEmail]=useState<string>("")
    const [password,setPassword]=useState<any>()
    const [token,setToken]=useState<any>()
    const [user, setUser] = useState<any>() 
    const [role,setRole]=useState<'user'|'seller'|"admin">('user') 


console.log(user,"the token decoded");

Cookies.set('token', token, { expires: 7, secure: true });
const header={
  headers: {
        Authorization : `Bearer ${token}`
    }
   
}
console.log(header,"this is header");
const sajl=()=>{  
        axios.post("http://localhost:8000/auth/login",{
           email: email,
           password: password
       },header
        ).then((response)=>{
          const {token,id}=response.data
          console.log(role,"my role");
           setToken(response.data.token)
           const tkn = jwtDecode(response.data.token) as { iduser: string }; 
           setUser(tkn)
           })
           if (role === 'admin') {
            return <Link href="/Admin/All"></Link>;
          } else if (role === 'user') {
            console.log('user is already', user);
            return <Link href={`/:${user.iduser}`}></Link>;
          } else if (role === 'seller') {
            return <Link href="/Seller"></Link>;
          } else {
            return <Link href="/"></Link>;
          }          
         }
     
       

useEffect(() => {
   const allCookies = Cookies.get("token");
   console.log('All Cookies:', allCookies);
 }, []);

  return (
   

    <div>
      <div className="SignUp w-full  bg-white" >
 
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
      Log in to Exclusive 🔓
      </motion.div>
    </AnimatePresence>

      </div>
      <div className="Frame758 flex-col justify-start items-center gap-10 flex">
        <div className="Frame757 flex-col justify-start items-start gap-10 flex">
       
    <div className="flex-col justify-start items-start gap-2 flex">
      <div className="opacity-40 text-black text-base font-normal font-['Poppins'] leading-normal"></div>
     
      <label        htmlFor="email"
                    className="block mb-2 text-sm font-medium  dark:text-white" >
                    E-mail
                  </label>
     
      <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    onChange={(e)=>{setEmail(e.target.value)}}
                  />
    </div> 
    <div className="flex-col justify-start items-start gap-2 flex">
      <div className="opacity-40 text-black text-base font-normal font-['Poppins'] leading-normal"></div>
      <label
                    htmlFor="password"
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
                    onChange={(e)=>{setPassword(e.target.value)}}
                  />
    </div>
        </div>
        <div className="Frame752 flex-col justify-start items-start gap-4 flex">
        <button className="Button px-[122px] py-4 bg-red-500 rounded justify-center items-center gap-2.5 inline-flex" onClick={()=> sajl()  } >
  <div className="ViewAllProducts text-neutral-50 text-base font-medium font-['Poppins'] leading-normal">
  Login 
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

export default login


