import React from 'react';
import { useLocation } from 'react-router-dom';
import './CreateProfile.css';

function CreateProfile() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const userType = params.get('userType');

  return (
    <div className="create-profile">
      {userType === 'client' ? (
        <div>
          <h2>Sign Up as a Client</h2>
          <form>
            <label>Name:</label>
            <input type="text" name="name" required />
            <label>Email:</label>
            <input type="email" name="email" required />
            <label>Password:</label>
            <input type="password" name="password" required />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      ) : (
        <div>
          <h2>Sign Up as a Service Provider</h2>
          <form>
            <label>Name:</label>
            <input type="text" name="name" required />
            <label>Email:</label>
            <input type="email" name="email" required />
            <label>Password:</label>
            <input type="password" name="password" required />
            <label>Service:</label>
            <input type="text" name="service" required />
            <label>Experience:</label>
            <input type="text" name="experience" required />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default CreateProfile;
