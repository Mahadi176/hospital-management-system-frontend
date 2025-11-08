import React from "react";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-8 h-screen">
      <div className="md:col-span-2 border border-red-800 p-4">side</div>
      <div className="md:col-span-6 border border-green-800 p-4">main</div>
    </div>
  );
};

export default Dashboard;
