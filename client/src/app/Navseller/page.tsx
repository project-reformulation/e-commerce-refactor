"use client"
import React from 'react';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useNavigate } from "react-router-dom";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Nav: React.FC = () => {
//   const navigate = useNavigate();

  return (
    <>
      {/* THE Nav bar */}
      <div style={{ marginTop: "1%", marginLeft: "8.4%" }} className="  justify-center items-center gap-[9.25rem] inline-flex">
        <div className="justify-center items-start gap-[11.8rem] flex">
          <div className="w-[7.3rem] h-6 justify-center items-center flex">
            <div className="text-black text-2xl font-bold font-['Inter'] leading-normal tracking-wide">
              SELLER
            </div>
          </div>
          <div className="justify-start items-start gap-12 flex" style={{ cursor: 'pointer' }} >
            <div className="flex-col justify-center items-center inline-flex">
              <div className="text-center text-black text-base font-normal font-['Poppins'] leading-normal" onClick={() => { navigate('/Seller/ProductList') }}>
                Product
              </div>
              <div className="w-12 h-[0px] opacity-50 justify-center items-center inline-flex">
                <div className="w-12 h-[0px] border border-black"></div>
              </div>
            </div>

            <div className="w-12 h-6 justify-center items-center flex">
              <div className="text-center text-black text-base font-normal font-['Poppins'] leading-normal" onClick={() => { navigate("/Seller/AddProduct") }}>
                Add
              </div>
            </div>
            <div className="w-12 h-6 justify-center items-center flex">
              <div className="text-center text-black text-base font-normal font-['Poppins'] leading-normal" onClick={() => { navigate('/Seller/Contact') }}>
                Contact
              </div>
            </div>
          </div>
        </div>
        <div className="justify-center items-center gap-6 flex">
          <div className="pl-5 pr-3 py-[7px] bg-neutral-100 rounded flex-col justify-center items-center gap-2.5 inline-flex">
            <div className="justify-center items-center gap-[34px] inline-flex">
              <input className="opacity-50 text-black text-xs font-normal font-['Poppins'] leading-[18px] pl-5 pr-3 py-[7px] bg-neutral-100 rounded flex-col justify-center items-center gap-2.5 inline-flex" type="text" id="lname" name="lname" placeholder="What are you looking for?" />
              <button>
              </button>
            </div>
          </div>
          <div className="justify-center items-center gap-4 flex">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  {/* <box-icon name='user'></box-icon> */}
                  <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Account settings
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Support
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          License
                        </a>
                      )}
                    </Menu.Item>
                    <form method="POST" action="#">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            type="submit"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block w-full px-4 py-2 text-left text-sm'
                            )}
                          >
                            Sign out
                          </button>
                        )}
                      </Menu.Item>
                    </form>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
