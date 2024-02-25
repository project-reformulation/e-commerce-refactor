"use client"
import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';



const stripePromise = loadStripe('pk_test_51Omhv9KsHXwJjYA4fmqh8oLOVUOj2ZRLdrJxwCyo4WyT0PWRBAP00LssCEIhGNgGxgiSSLFOklGaLfPllpD4HCfy00JMP2R94P');

const Payment = () => {

  return (
    <div>

    <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
  <img
    src="https://images.ctfassets.net/fzn2n1nzq965/6JEjxpwMd1OIIk6RosReNU/3d5c5f5217a7cce4af750ebfe599b6fc/Payments-social-card.png?q=80"
    className="max-w-xs w-[250px] transition duration-300 ease-in-out hover:scale-110"
    />

</div>

</div>    
  );
};
export default Payment;