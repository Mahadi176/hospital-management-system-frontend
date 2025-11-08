import React, { useEffect, useState } from "react";
import api from "../api/axiosInstance";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Fetch doctors from API
    api
      .get("/doctors")
      .then((res) => setDoctors(Array.isArray(res.data) ? res.data : []))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="overflow-x-auto p-4">
      <h2 className="text-xl font-bold mb-4">Doctors</h2>

      <table className="min-w-full bg-white border border-gray-200 shadow rounded">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left p-3 border-b">ID</th>
            <th className="text-left p-3 border-b">Doctor Name</th>
            <th className="text-left p-3 border-b">Specialty</th>
            <th className="text-left p-3 border-b">Hospital Name</th>
          </tr>
        </thead>
        <tbody>
          {doctors.length > 0 ? (
            doctors.map((doctor) => (
              <tr key={doctor.id} className="hover:bg-gray-50">
                <td className="p-3 border-b">{doctor.id}</td>
                <td className="p-3 border-b">{doctor.name}</td>
                <td className="p-3 border-b">{doctor.specialty}</td>
                <td className="p-3 border-b">{doctor.hospital}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="p-3 text-center text-gray-500">
                No doctors found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Doctors;
