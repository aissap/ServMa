import React from 'react';
import './SignUp.css';

function SignUp() {
  return (
    <div className="sign-up">
      <h2>Sign Up</h2>
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
  );
}

export default SignUp;
