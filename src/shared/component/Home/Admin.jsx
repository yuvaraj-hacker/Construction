// import React, { Component } from 'react';
// import '../Home/Admin.css'; // Ensure the path is correct
// import { Navigate } from 'react-router-dom';

// class Admin extends Component {
//   state = {
//     name: '',
//     email: '', // Default email
//     password: '', // Default password
//   };

//   handleChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log(this.state);

//  Navigate ('/')
//   };

//   render() {
//     return (
//       <div className="admin-form-container">
//         <form className="admin-form" onSubmit={this.handleSubmit}>
//           <h2 className="form-title">Admin Form</h2>
//           <div className="form-group">
//             <label htmlFor="name" className="form-label">
//               Name:
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               className="form-input"
//               value={this.state.name}
//               onChange={this.handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email" className="form-label">
//               Email:
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               className="form-input"
//                  placeholder='mail'
//               value={this.state.email}
//               onChange={this.handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password" className="form-label">
//               Password:
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               className="form-input"
//               placeholder='password'
//               value={this.state.password}
//               onChange={this.handleChange}
//               required
//             />
//           </div>
//           <button type="submit" className="submit-button">
//             Submit
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// export default Admin;


import React, { Component } from 'react';
import '../Home/Admin.css'; // Ensure the path is correct
import { Navigate } from 'react-router-dom';

class Admin extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    submitted: false, // State to track if the form has been submitted
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(this.state);
    
    // Set submitted to true to trigger redirection
    this.setState({ submitted: true });
  };

  render() {
    // Redirect to home page if the form has been submitted
    if (this.state.submitted) {
      return <Navigate to="/Dash/dashboard" />;
    }

    return (
      <div className="admin-form-container">
        <form className="admin-form" onSubmit={this.handleSubmit}>
          <h2 className="form-title">Admin Form</h2>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              placeholder='mail'
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-input"
              placeholder='password'
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Admin;
