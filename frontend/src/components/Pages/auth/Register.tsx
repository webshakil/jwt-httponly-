import React, { useState } from 'react';

import axios from 'axios';
import { Link, useNavigate } from 'react-router';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(
        'http://localhost:8000/api/v1/auth/register',
        { name, email, password },
        { withCredentials: true }
      );
      navigate('/dashboard');
    } catch (error) {
      alert('Registration failed');
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <form onSubmit={handleRegister} className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded"
        />
        <button type="submit" className="w-full p-2 bg-teal-500 text-white rounded hover:bg-teal-600">
          Register
        </button>
        <p className="mt-2">
          Already have an account?{' '}
          <Link to="/auth/login" className="text-teal-500">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
