import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="login">
      <h2>Login</h2>
      <form>
        <label>Email:</label>
        <input type="email" name="email" required />
        <label>Password:</label>
        <input type="password" name="password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
