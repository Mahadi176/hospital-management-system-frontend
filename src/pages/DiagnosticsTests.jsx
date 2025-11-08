import React, { useEffect, useState } from "react";
import api from "../api/axiosInstance";

const DiagnosticsTests = () => {
  const [dios, setDios] = useState([]);

  useEffect(() => {
    // Fetch doctors from API
    api
      .get("/diagnosticTests")
      .then((res) => setDios(Array.isArray(res.data) ? res.data : []))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="overflow-x-auto p-4">
      <h2 className="text-xl font-bold mb-4">Doctors</h2>

      <table className="min-w-full bg-white border border-gray-200 shadow rounded">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left p-3 border-b">ID</th>
            <th className="text-left p-3 border-b">Name</th>
            <th className="text-left p-3 border-b">Price</th>
            <th className="text-left p-3 border-b">Description</th>
          </tr>
        </thead>
        <tbody>
          {dios.length > 0 ? (
            dios.map((dio) => (
              <tr key={dio.id} className="hover:bg-gray-50">
                <td className="p-3 border-b">{dio.id}</td>
                <td className="p-3 border-b">{dio.name}</td>
                <td className="p-3 border-b">{dio.price}</td>
                <td className="p-3 border-b">{dio.description}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="p-3 text-center text-gray-500">
                No Test found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DiagnosticsTests;
