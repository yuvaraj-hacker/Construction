// src/RegisterForm.js
import React, { useState } from 'react';
import '../Home/Login.css';

function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Register:', { email, password });
  };

  return (
    <>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="register-email">Email:</label>
          <input
            type="email"
            id="register-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="register-password">Password:</label>
          <input
            type="password"
            id="register-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
    </>
  );
}

export default RegisterForm;
