// src/App.js
import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import '../Home/Login.css';

function MainForm() {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <div className="app">
      <h1>{isRegistering ? 'Register' : 'Login'}</h1>
      {isRegistering ? <RegisterForm /> : <LoginForm />}
      <button onClick={() => setIsRegistering(!isRegistering)}>
        {isRegistering ? 'Already have an account? Login' : 'Don\'t have an account? Register'}
      </button>
    </div>
  );
}

export default MainForm;
