import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './MainLayout.jsx';
import EventTable from './Component/EventTable';
import EventDetails from './page/NewEvents.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<EventTable />} />
          <Route path="new-Requests" element={<EventDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}