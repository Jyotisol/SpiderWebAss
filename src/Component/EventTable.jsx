import React from 'react';

import { EyeIcon } from '@heroicons/react/outline';
import Pagination from './Pagination';

const rows = Array.from({ length: 12 }).map((_, i) => ({
  name: 'Filled Name',
  start: 'Jan 12, 2024',
  end: 'Jan 14, 2024',
  client: 'Muhammad Asad',
  contact: '+1 234 566 7890',
  venue: 'Lorem Ipsum Dolor Sit Amet'
}));

export default function EventTable() {
  return (
    <>
      {/* Desktop View */}
      <div className="hidden border border-[#D175B6] rounded-md shadow-lg md:block ml-3 mr-3 bg-gradient-to-br from-[#1A1A2E] to-[#2E2E4E]">
        {/* Header Section */}
        <div className="flex items-center justify-between p-4 mb-6">
          <h1 className="text-2xl font-semibold text-white">Event Requests</h1>
          <div className="flex items-center space-x-4">
            {/* Plus Button (Left of Search) */}
            <button className="px-4 py-2 text-white bg-pink-600 rounded-lg hover:bg-pink-500">
              +
            </button>
            {/* Search Field with Icon Inside */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search here"
                className="w-64 px-3 py-2 text-white placeholder-gray-400 bg-transparent border rounded-lg shadow-2xl"
              />
              <button className="absolute text-gray-400 transform -translate-y-1/2 right-3 top-1/2">
                🔍
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <table className="w-full border-collapse table-auto">
          <thead>
            <tr className="text-left border-b border-pink-500 bg-[#D175B6]">
              <th className="p-2 text-white">Event Name</th>
              <th className="p-2 text-white">Event Start</th>
              <th className="p-2 text-white">Event End</th>
              <th className="p-2 text-white">Client Name</th>
              <th className="p-2 text-white">Contact Info</th>
              <th className="p-2 text-white">Venue</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx} className="border-b border-purple-700 hover:bg-purple-800">
                <td className="flex items-center p-2 text-white">
                  <EyeIcon className="w-5 h-5 mr-2 text-pink-500" />
                  {row.name}
                </td>
                <td className="p-2 text-white">{row.start}</td>
                <td className="p-2 text-white">{row.end}</td>
                <td className="p-2 text-white">{row.client}</td>
                <td className="p-2 text-white">{row.contact}</td>
                <td className="p-2 text-white">{row.venue}</td>
              </tr>
            ))}
          </tbody>
        </table>
         <Pagination />
      </div>

      {/* Mobile View */}
      <div className="space-y-4 md:hidden">
        {rows.slice(0, 5).map((row, idx) => (
          <div key={idx} className="p-4 bg-purple-800 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-semibold text-white">{row.name}</h2>
              <span className="text-sm text-pink-400">Details</span>
            </div>
            <p className="text-sm text-white">Start: {row.start}</p>
            <p className="text-sm text-white">Ends: {row.end}</p>
            <p className="mt-2 text-sm text-white">Venue: {row.venue}</p>
          </div>
        ))}
      <Pagination />
      </div>
    </>
  );
}