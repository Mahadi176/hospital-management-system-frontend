import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Tests", path: "/diagnostics" },
    { name: "Dashboard (Admin)", path: "/dashboard" },
  ];

  // Helper function to apply active/inactive styles
  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors hover:text-blue-500 ${
      isActive
        ? "text-blue-600 border-b-2 border-blue-600 pb-1"
        : "text-gray-600"
    }`;
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo/Brand */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-800 flex items-center"
        >
          <span className="mr-2">⚕️</span> HMS
        </Link>

        {/* Main Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <NavLink key={item.name} to={item.path} className={navLinkClass}>
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          <Link
            to="/login"
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
