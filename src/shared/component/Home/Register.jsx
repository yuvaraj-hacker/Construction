import React, { useState } from "react";
import axios from "axios";
import "../Home/Login.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1); // Step 1 for registration, Step 2 for OTP verification

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/register", {
        Username: email.split("@")[0], // Assuming Username is derived from email
        Email: email,
        Password: password,
      });

      if (response.data.message === "OTP sent to email") {
        setStep(2); // Move to OTP verification step
      }
    } catch (error) {
      console.error("Error registering user:", error);
      alert("Registration failed. Please try again.");
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/verifyOtp", {
        Email: email,
        Otp: otp,
        Username: email.split("@")[0],
        Password: password,
      });

      if (response.data.message === "OTP verified and user updated") {
        alert("Registration successful!");
        setStep(1); // Reset form or navigate to login
      } else {
        alert("Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      alert("OTP verification failed. Please try again.");
    }
  };

  return (
    <>
   <br/>
   <br/>
   <br/>
   <br/>
   
    <div className="login2">
      <div className="register-container">
        <h2>{step === 1 ? "Register" : "Verify OTP"}</h2>
        {step === 1 ? (
          <form onSubmit={handleRegisterSubmit}>
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
            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password:</label>
              <input
                type="password"
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Register</button>
          </form>
        ) : (
          <form onSubmit={handleOtpSubmit}>
            <div className="form-group">
              <label htmlFor="otp">OTP:</label>
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
            </div>
            <button type="submit">Verify OTP</button>
          </form>
        )}
      </div>
    </div>
    </>
  );
};

export default Register;
