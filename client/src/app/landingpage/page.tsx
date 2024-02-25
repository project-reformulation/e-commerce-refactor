"use client"
import React from 'react';
import Navbaar from '../Navbargetstarted/page';

const Section: React.FC = () => {
  return (
    <div>
      <Navbaar />
      <br />
      <br />
      <br />
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap -mx-4 pb-28">
              <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
                <div className="max-w-md mx-auto lg:mx-0">
                  <h3 className="max-w-sm font-heading text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                    <span>Ready to get</span><br></br>
                    <span className="font-serif italic">started</span>
                    <span>?</span>
                  </h3>
                  <p className="max-w-sm text-gray-500 mb-16">If you are looking for something to sell or buy, we will give you what you need Go ahead and dive into our exclusive products</p>
                  <div className="sm:flex mb-2 items-center">
                    <input className="w-full mb-3 sm:mb-0 sm:mr-4 pb-4 bg-transparent border-b border-gray-200 text-sm text-gray-900 placeholder-gray-400 outline-none" type="email" placeholder="Enter your email to subscribe to our newsletter" />
                    <button className="relative group inline-block flex-shrink-0 w-full sm:w-auto py-3 px-5 text-sm font-semibold text-orange-50 bg-blue-700 rounded-full overflow-hidden" type="submit">
                      <div className="absolute top-0 right-full w-full h-full bg-sky-400 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                      <span className="relative">Subscribe</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4">
                <img src="https://www.pole-emploi.fr/files/live/sites/PE/files/secteurs-metiers/commerce-vente/E-commerce-850x523.jpg" alt="E-commerce" className="w-full h-auto" />
              </div>
            </div>
            <div className="pt-10 border-t border-gray-200">
              <div className="lg:flex items-center">
                <div className="flex mb-6 lg:mb-0 lg:mr-18 items-center">
                  <a className="inline-block mr-5 hover:bg-orange-50 rounded-md p-1" href="#">
                    <img src="saturn-assets/images/footers/icon-facebook.svg" alt=""/>
                  </a>
                  <a className="inline-block mr-5 hover:bg-orange-50 rounded-md p-1" href="#">
                    <img src="saturn-assets/images/footers/icon-instagram.svg" alt=""/>
                  </a>
                  <a className="inline-block mr-5 hover:bg-orange-50 rounded-md p-1" href="#">
                    <img src="saturn-assets/images/footers/icon-youtube.svg" alt=""/>
                  </a>
                  <a className="inline-block hover:bg-orange-50 rounded-md p-1" href="#">
                    <img src="saturn-assets/images/footers/icon-linkedin.svg" alt=""/>
                  </a>
                </div>
                <div className="flex mb-6 lg:mb-0 items-center">
                  <a className="inline-block mr-4 sm:mr-10 text-sm font-semibold text-gray-500 hover:text-gray-600" href="#">Privacy Policy</a>
                  <a className="inline-block mr-4 sm:mr-10 text-sm font-semibold text-gray-500 hover:text-gray-600" href="#">Terms & Conditions</a>
                  <a className="inline-block text-sm font-semibold text-gray-500 hover:text-gray-600" href="#">Support</a>
                </div>
                <span className="inline-block ml-auto text-sm text-gray-500">© All Rights Reserved</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section;
