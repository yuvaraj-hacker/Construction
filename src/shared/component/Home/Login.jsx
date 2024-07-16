// src/components/Login.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../Home/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        Email: email,
        Password: password,
      });

      if (response.data.token) {
        setSuccess("Successfully logged in");
        setError("");
        // Save the token in localStorage or a global state
        localStorage.setItem("token", response.data.token);
        // Redirect to another page or update the UI
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("An error occurred. Please try again.");
      }
      setSuccess("");
    }
  };

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="login2">
        <div className="login-container">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "green" }}>{success}</p>}
          <div className="register-link">
            <p>
              Don't have an account? <Link to="/Register">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
