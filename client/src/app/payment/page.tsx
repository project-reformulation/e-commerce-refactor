"use client"
import React from 'react'
import Strip from './stripe'
import { useState } from 'react'
import { motion,useAnimation } from 'framer-motion'

const payment = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [verificationCode, setVerificationCode] = useState('');


  return (
  <div>
       
    <div className="w-full h-screen flex flex-col items-center justify-between bg-white bg-opacity-70 py-8">
        <div className="flex-1 flex flex-col items-center justify-center">
            <div className="bg-white bg-opacity-10 px-4 py-2 rounded-xl flex items-center justify-center text-red-600 space-x-2 lg:space-x-4">
                <span className="text-xl lg:text-2x2 xl:text-3xl font-family cursive">Select Your Payment Method</span>
            </div>

            <div className="flex ml-[100px] mt-[30px]">
                <form className="w-full flex items-center">
                <img
              src="https://www.pngall.com/wp-content/uploads/2016/07/Mastercard-Download-PNG.png"
              alt="Mastercard"
              className="max-w-xs w-[250px] transition duration-300 ease-in-out hover:scale-110"
            />
            <img
              src="https://1000logos.net/wp-content/uploads/2017/06/VISA-Logo-1976.png"
              alt="VISA"
              className="max-w-xs w-[250px] transition duration-300 ease-in-out hover:scale-110"
            />
      <Strip/>

      </form>
      </div>
            </div>
            <div className="card-input-container">
  <div className="card-input-group">
      <h3><i>Card Number:</i></h3>
            <input
              type="text"
              className="shadow border rounded ml-[10px]"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </div>
        
            <h3><i>Verification Code:</i></h3>
            <input
              type="text"
              className="shadow border rounded ml-[10px]"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
            />
          </div> 
          </div>
          
    </div>
       
        
  )
}
export default payment






