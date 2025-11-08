import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Dashboard = () => {
    const location = useLocation();
  const activePath = location.pathname.split("/").pop();

  const menuItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Stats", path: "/dashboard/stats" },
    { name: "Doctors", path: "/dashboard/doctors" },
    { name: "Users", path: "/dashboard/users" },
    { name: "Diagnostics-Tests", path: "/dashboard/diagnostics-tests" },
  ];
  return (
     <div className="grid grid-cols-1 md:grid-cols-8 h-screen">
      {/* Sidebar */}
      <div className="md:col-span-3 border-r border-gray-300 p-4 bg-gray-100">
        <h1 className="text-xl font-bold mb-6">Menu</h1>
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`block p-2 rounded ${
                  activePath === item.path.split("/").pop()
                    ? "bg-blue-500 text-white"
                    : "hover:bg-blue-200"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="md:col-span-5 p-6 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
