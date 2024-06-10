// src/pages/LogOut.js
import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';

const LogOut = () => {
  const handleLogOut = async () => {
    try {
      await signOut(auth);
      alert('User logged out successfully');
    } catch (error) {
      alert(error.message);
    }
  };

  return <button onClick={handleLogOut}>Log Out</button>;
};

export default LogOut;
