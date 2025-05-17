import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDownIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import line from "../assets/Vector.png";

const sidebarItems = [
  { label: 'Events', sub: ['New Requests', 'Estimate', 'Events', 'Partial Requests'] },
  { label: 'Positions' },
  { label: 'Contractors' },
  { label: 'Users', sub: ['Admins', 'Clients', 'Coordinators'] },
  { label: 'Profile' }
];

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const [openMenus, setOpenMenus] = useState({});
  const navigate = useNavigate();

  const toggleMenu = (label) => {
    setOpenMenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const handleSubItemClick = (sub) => {
    if (sub === 'New Requests') {
      navigate('/new-requests');
    }
    
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="flex-col hidden w-64 p-5 md:flex bg-gradient-to-r from-[#070413] to-[#101437] border-gradient border border-[#D175B6] rounded-md shadow-lg ml-3">
        <nav className="flex-1 space-y-4">
          {sidebarItems.map((item) => (
            <div key={item.label}>
              <button
                onClick={() => item.sub && toggleMenu(item.label)}
                className="flex items-center justify-between w-full px-3 py-2 text-lg font-semibold text-white rounded-lg hover:border border-[#D175B6]"
              >
                <span>{item.label}</span>
                {item.sub && (
                  <ChevronDownIcon
                    className={`w-5 h-5 transform transition-transform ${
                      openMenus[item.label] ? 'rotate-180' : ''
                    }`}
                  />
                )}
              </button>
              {item.sub && openMenus[item.label] && (
                <div className="mt-1 ml-4 space-y-1">
                  {item.sub.map((sub) => (
                    <button
                      key={sub}
                      onClick={() => handleSubItemClick(sub)}
                      className={`relative flex items-center w-full px-3 py-2 text-sm text-gray-400 rounded-lg hover:border border-[#D175B6] text-left ${
                        sub === 'Admins' ? 'border border-[#D175B6]' : ''
                      }`}
                    >
                      <img src={line} alt="line" className="w-4 h-4 mr-2" />
                      <span>{sub}</span>
                      {sub === 'Admins' && (
                        <span className="absolute flex items-center justify-center w-5 h-5 text-xs font-bold text-white transform -translate-y-1/2 bg-blue-500 rounded-full right-3 top-1/2">
                          S
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <button className="flex items-center px-3 py-2 mt-auto text-white rounded-lg bg-gradient-to-r from-pink-600 to-pink-400">
          <ArrowLeftIcon className="w-5 h-5 mr-2" /> Logout
        </button>
      </aside>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 flex md:hidden">
          <div className="w-64 p-4 bg-[#1A1A2E] border-gradient">
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-2 mb-6 bg-purple-700 rounded-full"
            >
              <ArrowLeftIcon className="w-5 h-5 text-white" />
            </button>
            <nav className="space-y-4">
              {sidebarItems.map((item) => (
                <div key={item.label}>
                  <button
                    onClick={() => item.sub && toggleMenu(item.label)}
                    className="flex items-center justify-between w-full px-3 py-2 text-lg font-semibold text-white rounded-lg hover:border border-[#D175B6]"
                  >
                    <span>{item.label}</span>
                    {item.sub && (
                      <ChevronDownIcon
                        className={`w-5 h-5 transform transition-transform ${
                          openMenus[item.label] ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </button>
                  {item.sub && openMenus[item.label] && (
                    <div className="mt-1 ml-4 space-y-1">
                      {item.sub.map((sub) => (
                        <button
                          key={sub}
                          onClick={() => handleSubItemClick(sub)}
                          className={`relative flex items-center w-full px-3 py-1 text-sm text-gray-400 rounded-lg hover:border border-[#D175B6] text-left ${
                            sub === 'Admins' ? 'bg-purple-700' : ''
                          }`}
                        >
                          <img src={line} alt="line" className="w-4 h-4 mr-2" />
                          <span>{sub}</span>
                          {sub === 'Admins' && (
                            <span className="absolute flex items-center justify-center w-5 h-5 text-xs font-bold text-white transform -translate-y-1/2 bg-blue-500 rounded-full right-3 top-1/2">
                              S
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <button className="flex items-center px-3 py-2 mt-6 text-white rounded-lg bg-gradient-to-r from-pink-600 to-pink-400">
              <ArrowLeftIcon className="w-5 h-5 mr-2" /> Logout
            </button>
          </div>
          <div className="flex-1" onClick={() => setSidebarOpen(false)} />
        </div>
      )}
    </>
  );
}