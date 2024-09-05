import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './authContext';

const ProtectedRoute = ({ children }) => {
  const { userLoggedIn } = useAuth();  // Accessing the correct state

  if (!userLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;