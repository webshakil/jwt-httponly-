import React, { useEffect } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const result=await axios.get('http://localhost:8000/api/v1/auth/profile', { withCredentials: true });
        console.log("result===>",result.data);
      } catch (error) {
        navigate('/auth/login');
      }
    };
    checkAuth();
  }, [navigate]);

  return <>{children}</>;
};

export default ProtectedRoute;