import React from 'react';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

export default function Pagination() {
  return (
    <div className="flex items-center justify-center p-4 space-x-2 text-pink-500 bg-[#07050B] md:p-6">
      <button>
        <ChevronLeftIcon className="w-5 h-5" />
      </button>
      {[1, 2, 3, 4].map(n => (
        <button
          key={n}
          className={`px-3 py-1 rounded-full ${n === 1 ? 'bg-pink-500 text-white' : 'text-pink-500'}`}
        >
          {n}
        </button>
      ))}
      <button>
        <ChevronRightIcon className="w-5 h-5" />
      </button>
    </div>
  );
}