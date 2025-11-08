import React, { useEffect, useState } from 'react';
import api from '../api/axiosInstance';

const Users = () => {
    const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch doctors from API
    api
      .get("/users")
      .then((res) => setUsers(Array.isArray(res.data) ? res.data : []))
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
            <th className="text-left p-3 border-b">Email</th>
            <th className="text-left p-3 border-b">Type</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="p-3 border-b">{user.id}</td>
                <td className="p-3 border-b">{user.name}</td>
                <td className="p-3 border-b">{user.email}</td>
                <td className="p-3 border-b">{user.role}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="p-3 text-center text-gray-500">
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    );
};

export default Users;