import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:8000/api/v1/auth/logout', {}, { withCredentials: true });
      navigate('/auth/login');
    } catch (error) {
      alert('Logout failed');
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Welcome to Dashboard</h2>
        <button
          onClick={handleLogout}
          className="w-full p-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;