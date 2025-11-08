import React, { useState, useEffect } from "react";
import api from "../api/axiosInstance";
import DoctorCard from "../components/DoctorCard";

const Home = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        // Replace '/doctors' with your actual doctors endpoint
        const response = await api.get("/doctors");
        setDoctors(response.data);
      } catch (err) {
        console.error("Failed to fetch doctors:", err);
        setError("Failed to load doctor data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  if (loading) return <div className="text-center p-8">Loading doctors...</div>;
  if (error) return <div className="text-center p-8 text-red-500">{error}</div>;
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">
        Our Medical Experts 🩺
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default Home;
