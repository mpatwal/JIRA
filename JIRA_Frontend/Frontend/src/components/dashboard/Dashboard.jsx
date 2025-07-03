// Dashboard.jsx
import React from 'react';

const Dashboard = () => {
  const token = localStorage.getItem("token"); // ✅ Access JWT token if needed

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-100">
      <h1 className="text-4xl font-bold mb-4 text-green-800">Welcome to Dashboard</h1>
    </div>
  );
};

export default Dashboard;
