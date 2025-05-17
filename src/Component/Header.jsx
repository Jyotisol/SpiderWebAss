import React from 'react';

import logo from '../assets/bitcoin-01.png';
import Image from "../assets/Ellipse 1.png"
import { Bars3Icon, BellIcon, InformationCircleIcon } from '@heroicons/react/24/outline';
export default function Header({ setSidebarOpen }) {
  return (
    <div className="w-full bg-gradient-to-r from-[#07050B] to-[#4D377A]">
      {/* Mobile Header */}
     
      <header className="flex items-center justify-between p-4 md:hidden">
      <div className='flex items-center gap-3'>
       <div className="text-3xl font-bold text-white">
          <img src={logo} alt="logo" className="h-10" />
        </div>
        <div>
        <button onClick={() => setSidebarOpen(true)}>
          <Bars3Icon className="w-6 h-6 text-white" />

        </button>
        </div>
          </div>
          <div className='flex items-center'>
        <div className="flex items-center justify-end space-x-3">
          <InformationCircleIcon className="w-6 h-6 text-white" />
          <BellIcon className="w-6 h-6 text-white" />
          <img
            src={Image}
            alt="avatar"
            className="w-10 h-8 rounded-full"
          />
        </div>
        <div>
              <div className="text-sm text-green-400">Hi, Jyoti</div>
              <div className="text-xs text-gray-400">welcome back!</div>
            </div>
          </div>
      </header>

      {/* Desktop Header */}
      <header className="items-center justify-between hidden p-6 md:flex">
        <div className="text-3xl font-bold text-white">
          <img src={logo} alt="logo" className="h-10" />
        </div>
        <div className="flex items-center space-x-4">
          <InformationCircleIcon className="w-6 h-6 text-white" />
          <BellIcon className="w-6 h-6 text-white" />
          <div className="flex items-center space-x-2">
            <img
              src={Image}
              alt="avatar"
              className="w-10 h-10"
            />
            <div>
              <div className="text-sm text-green-400">Hi, Jyoti</div>
              <div className="text-xs text-gray-400">welcome back!</div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}