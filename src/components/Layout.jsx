
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Main Content Area - Renders the current page */}
      <main className="flex-grow container mx-auto px-4 py-6">
        <Outlet />
      </main>

      {/* Basic Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; {new Date().getFullYear()} HMS | Hospital Management System. Developed By Mahadi & Mehadi</p>
      </footer>
    </div>
    );
};

export default Layout;