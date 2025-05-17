import React, { useState } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Header from './Component/Header';
import Sidebar from './Component/SideBar';
import EventTable from './Component/EventTable';
import EventDetails from './page/NewEvents';

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-[#07050B] to-[#4D377A] "
    >
      {/* Header */}
      <Header setSidebarOpen={setSidebarOpen} />

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Routed Content */}
        <div className="flex flex-1 overflow-hidden"
       style={{
        backgroundImage: `
          linear-gradient(to bottom, #15122C 0%, #1B2D6B 50%),
          linear-gradient(to bottom left, transparent 0%, transparent 50%, #000304 100%),
          linear-gradient(to bottom right, transparent 0%, transparent 50%, #2B3354 100%)
        `,
      }} >
                {/* Main Content */}
                <div className="flex-1 overflow-auto">
                  <Outlet />
                </div>
              </div>
      </div>
    </div>
  );
}