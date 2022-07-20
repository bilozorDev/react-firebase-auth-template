import React from 'react'
import { UseUserAuthContext } from '../context/UserAuthContext';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({children}) {

  const { currentUser, logOut } = UseUserAuthContext();


   if (!currentUser) {
    return <Navigate to="/" />;
  }
  return children;
  }
    



export default ProtectedRoute