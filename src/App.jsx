// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Diagnostics from "./pages/Diagnostics";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import DiagnosticsTests from "./pages/DiagnosticsTests";
import Doctors from "./pages/Doctors";
import Stats from "./pages/Stats";
import Users from "./pages/Users";

function App() {
  // Simple check for admin role (In a real app, this would come from Auth context)
  const isAdmin = true; // Set to true for initial testing

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Public Pages */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="diagnostics" element={<Diagnostics />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

          {/* Admin Protected Dashboard with Dynamic Routing */}
          <Routes>
            <Route
              path="dashboard"
              element={
                isAdmin ? (
                  <Dashboard />
                ) : (
                  <p className="p-8 text-center text-red-500">Access Denied</p>
                )
              }
            >
              <Route
                index
                element={
                  <p className="p-4">Welcome Admin! Select an action.</p>
                }
              />
              <Route path="stats" element={<Stats />} />
              <Route path="doctors" element={<Doctors />} />
              <Route path="users" element={<Users />} />
              <Route path="diagnostics-tests" element={<DiagnosticsTests />} />
            </Route>

            {/* Redirect unknown routes */}
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>

          {/* 404/Not Found Page (Optional) */}
          <Route
            path="*"
            element={
              <h1 className="text-4xl p-10 text-center">404 Not Found</h1>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
