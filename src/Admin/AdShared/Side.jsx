// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Sidebar.css'; // Assuming you have a CSS file for styling

// const SideBar = () => {
//     return (
//         <div className="sidebar">
//             <h2>Admin Dashboard</h2>
//             <ul>
//                 <li>
//                     <Link to="/Dash">Dashboard</Link>
//                 </li>
//                 <li>
//                     <Link to="/Create">Create Blog</Link>
//                 </li>
//                 <li>
//                     <Link to="/View">View Blog</Link>
//                 </li>
//             </ul>
//         </div>
//     );
// };

// export default SideBar;

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.css";

const Side = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here
    // For example, clear user session or authentication state
    navigate("/");
  };

  return (
    <div className="sidebar">
      <img src="../images/darna.png"   alt="darna"/>
      <ul className="mt-12">
        <p className="casd">
          <Link to="/Dash/dashboard">Dashboard</Link>
        </p>
        <p className="casd">
          <Link to="/Dash/Create">Create Blog</Link>
        </p>
        <p className="casd">
          <Link to="/Dash/View">View Blog</Link>
        </p>
        <li>
          <button
            onClick={handleLogout}
            className=" hover:bg-red-600 text-start casd1"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Side;
