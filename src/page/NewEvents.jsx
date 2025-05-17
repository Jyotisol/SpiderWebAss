import React, { useState } from 'react';

const meetingRooms = [
  { name: 'Meeting Room 1', positions: 12, start: '12 Jan, 2023', end: '15 Jan, 2023' },
  { name: 'Meeting Room 2', positions: 12, start: '12 Jan, 2023', end: '15 Jan, 2023' },
  { name: 'Meeting Room 3', positions: 12, start: '12 Jan, 2023', end: '15 Jan, 2023' },
  { name: 'Meeting Room 4', positions: 12, start: '12 Jan, 2023', end: '15 Jan, 2023' },
  { name: 'Meeting Room 5', positions: 12, start: '12 Jan, 2023', end: '15 Jan, 2023' },
];

const positionsData = Array(5).fill({
  position: 'Camera 1 (Video)',
  time: '9 am - 7 pm',
  info: 'LP default',
  quantity: 20,
});

export default function EventDetails() {
  const [selectedRoom, setSelectedRoom] = useState('Meeting Room 1');

  return (
    <div className="min-h-screen "
     style={{
        backgroundImage: `
          linear-gradient(to bottom, #15122C 0%, #1B2D6B 50%),
          linear-gradient(to bottom left, transparent 0%, transparent 50%, #000304 100%),
          linear-gradient(to bottom right, transparent 0%, transparent 50%, #2B3354 100%)
        `,
      }}
      >
      <div className="max-w-8xl mx-auto bg-[#1A1A2E] border border-[#D175B6] rounded-lg shadow-lg p-6 mr-3 ml-3 bg-gradient-to-br from-[#1A1A2E] to-[#2E2E4E]">
        {/* Header */}
        <div className="justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            <button className="text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <h1 className="text-2xl font-semibold text-white">
              Event Name (Venue Details)
            </h1>
          </div>
          <div className="mt-2">
            <button className="text-white border border-[#D175B6] rounded-l-lg px-4 py-2 text-sm hover:bg-[#D175B6]">
              Event Details
            </button>
            <button className="text-white border border-[#D175B6] px-4 py-2 text-sm hover:bg-[#D175B6]">
              Assign Coordinator/Coordinator
            </button>
            <button className="text-white border border-[#D175B6] px-4 py-2 text-sm hover:bg-[#D175B6]">
              Session Management
            </button>
            <button className="text-white border border-[#D175B6] rounded-r-lg px-4 py-2 text-sm hover:bg-[#D175B6]">
              Generate SOW
            </button>
          </div>
        </div>

        {/* Event Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Assign Coordinator</h2>
            <select className="w-full bg-[#2E2E4E] text-white border border-gray-600 rounded-lg p-2 mb-4">
              <option>Search Coordinator</option>
            </select>
            <button className="text-white border border-white rounded-lg px-4 py-2 text-sm hover:bg-purple-700">
              Add New Coordinator
            </button>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Event Name (Venue Here)</h2>
            <p className="text-gray-400 mb-2">Start: 12-12-2023</p>
            <p className="text-gray-400 mb-2">Ends: 15-12-2023</p>
            <p className="text-gray-400">
              Venue Address: Some Location 12, Name Here, City, State
            </p>
          </div>
        </div>

        {/* Meeting Rooms and Positions */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-6">
          {/* Meeting Rooms */}
          <div className="md:col-span-1">
            <h2 className="text-lg font-semibold text-white mb-4">Assign Contractor</h2>
            <div className="space-y-2">
              {meetingRooms.map((room) => (
                <button
                  key={room.name}
                  onClick={() => setSelectedRoom(room.name)}
                  className={`w-full text-left p-3 rounded-lg border border-gray-600 text-white ${
                    selectedRoom === room.name ? 'bg-[#D175B6]' : 'bg-[#2E2E4E]'
                  } hover:bg-pink-700`}
                >
                  <p className="font-semibold">{room.name}</p>
                  <p className="text-sm text-gray-400">{room.positions} Positions</p>
                  <p className="text-sm text-gray-400">
                    Start from {room.start} - Ends at {room.end}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Positions Table */}
          <div className="md:col-span-2">
            <h2 className="text-lg font-semibold text-white mb-4">Positions</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-white">
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="p-3 text-left">Position</th>
                    <th className="p-3 text-left">Time</th>
                    <th className="p-3 text-left">Info</th>
                    <th className="p-3 text-left">Quantity</th>
                    <th className="p-3 text-left"></th>
                  </tr>
                </thead>
                <tbody>
                  {positionsData.map((position, index) => (
                    <tr key={index} className="border-b border-gray-600">
                      <td className="p-3">{position.position}</td>
                      <td className="p-3">{position.time}</td>
                      <td className="p-3">{position.info}</td>
                      <td className="p-3">{position.quantity}</td>
                      <td className="p-3">
                        <select className="bg-[#2E2E4E] text-white border border-gray-600 rounded-lg p-1">
                          <option>Select Contractor</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Carousel Dots */}
            <div className="flex justify-center mt-4 space-x-2">
              <button className="w-3 h-3 bg-gray-600 rounded-full"></button>
              <button className="w-3 h-3 bg-pink-600 rounded-full"></button>
              <button className="w-3 h-3 bg-gray-600 rounded-full"></button>
            </div>
          </div>
        </div>

        {/* Save Edit Button */}
        <div className="flex justify-end mt-6">
          <button className="bg-pink-600 text-white rounded-lg px-6 py-2 hover:bg-pink-700">
            Save Edit
          </button>
        </div>
      </div>
    </div>
  );
}