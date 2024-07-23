// import React, { useState } from 'react';
// import axios from 'axios';
// import { API_URL } from '../utils/api';
// import './Login.css';
// import { Link, useNavigate } from 'react-router-dom';

// const Register = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [otp, setOtp] = useState('');
//   const [showOtpField, setShowOtpField] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState(false);
//   const navigate = useNavigate();

//   const handleRegister = async () => {
//     try {
//       const response = await axios.post(`${API_URL}/api/apiregister`, {
//         Email: email,
//         Password: password,
//       });

//       if (response.data.message) {
//         setShowOtpField(true);
//         setSuccess(true);
//         alert('OTP sent to your email. Check your inbox.');
//       } else {
//         setError(response.data.message);
//       }
//     } catch (error) {
//       console.error('Error during registration:', error.message);
//       setError('An error occurred during registration. Please try again.');
//     }
//   };

//   const handleOtpVerification = async () => {
//     try {
//       const otpResponse = await axios.put(`${API_URL}/api/apiverifyOTP`, {
//         Email: email,
//         OTP: otp,
//       });

//       if (otpResponse.data.message) {
//         navigate('/login_page');
//         alert('Registration successful. You can now log in.');
//       } else {
//         setError(otpResponse.data.message);
//       }
//     } catch (error) {
//       console.error('Error during OTP verification:', error.message);
//       setError('An error occurred during OTP verification. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <div className="register-container">
//         <div className="register-form">
//           <h2 className='register-title'>Register</h2>
//           {error && <div className="text-red-700 error-message">{error}</div>}
//           {success && (
//             <div className="text-green-700 success-message">
//               Registration successful. Please check your email for the OTP.
//             </div>
//           )}
//           <input
//             type="email"
//             placeholder="Email"
//             className="input-field"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="input-field"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
          
//           <button className="register-button" onClick={handleRegister}>
//             Register
//           </button>
//           <p className="login-link">
//             Already have an account? <Link to="/Login">Login</Link>
//           </p>
//           {showOtpField && (
//             <>
//               <input
//                 type="text"
//                 className="input-field"
//                 placeholder="OTP"
//                 value={otp}
//                 onChange={(e) => setOtp(e.target.value)}
//               />
//               <button className="register-button" onClick={handleOtpVerification}>
//                 Verify OTP
//               </button>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;












import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../utils/api';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpField, setShowOtpField] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const payload = { Email: email, Password: password , Username : username};
      console.log('Request Payload:', payload);
      const response = await axios.post(`${API_URL}/api/apiregister`, payload);

      if (response.data.message) {
        setShowOtpField(true);
        setSuccess(true);
        alert('OTP sent to your email.Check your inbox.');
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.error('Error during registration:', error.message);
      setError('An error occurred during registration. Please try again.');
      
    }
  };

  const handleOtpVerification = async () => {
    try {
      const otpResponse = await axios.put(`${API_URL}/api/apiverifyOTP`, {
        Email: email,
        OTP: otp,
      });

      if (otpResponse.data.message) {
        navigate('/Login');
        alert('Registration successful. You can now log in.');
      } else {
        setError(otpResponse.data.message);
      }
    } catch (error) {
      console.error('Error during OTP verification:', error.message);
      setError('An error occurred during OTP verification. Please try again.');
    }
  };

  return (
    <div>
      <div className="register-container">
        <div className="register-form">
          <h2 className='hah1'>Register</h2>
          {error && <div className="text-red-700 error-message">{error}</div>}
          {success && (
            <div className="text-green-700 success-message">
              Registration successful. Please check your email for the OTP.
            </div>
          )}
           <input
            type="text"
            placeholder="Username"
            className="input-field"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
          <button className="register-button" onClick={handleRegister}>
            Register
          </button>
          <p className="login-link">
            Already have an account? <Link to="/Login">Login</Link>
          </p>
          {showOtpField && (
            <>
              <input
                type="text"
                className="input-field"
                placeholder="OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <button className="register-button" onClick={handleOtpVerification}>
                Verify OTP
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
