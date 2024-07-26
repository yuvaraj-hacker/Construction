import React, { useState, useEffect } from "react";
import "../Home/Blog.css";
import { FiEdit } from "react-icons/fi";
import axios from "axios";
import Login from "./Login"; // Import Login component

function Blog() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [showLogin, setShowLogin] = useState(false); // State to show/hide login modal

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/apiBlog?published=true")
      .then((response) => setPosts(response.data))
      .catch(() => setError("Error fetching posts"));
  }, []);

  const toggleLoginModal = () => {
    setShowLogin(!showLogin);
  };

  return (
    <>
      {showLogin && (
        <div className="modal-background">
          <div className="modal-content">
            <Login />
            <button className="close-modal" onClick={toggleLoginModal}>
              Close
            </button>
          </div>
        </div>
      )}
      <div className={`blog-container ${showLogin ? "blur" : ""}`}>
        <br />
        <br />
        <br />
        <br />
        
        <div className="mand">
     
          <div className="post-list1">
         
            {error && <p className="error1">{error}</p>}
            <div className="posts-container1">
              {posts.map((post, index) => (
                <div key={index} className="post-card1">
                  <h3 className="post-title1">{post.title}</h3>
                  <p className="post-date1">
                    <strong>Date:</strong> {post.date}
                  </p>
                  <div
                    className="post-content1"
                    dangerouslySetInnerHTML={{
                      __html: post.content,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="fasd1">
              <input
                className="width"
                type="text"
                name="Search"
                placeholder="Write your blog"
              />
              <FiEdit className="fasd2" onClick={toggleLoginModal} />
            </div>

           
            <p className="link1"> Stay Connected </p>
            <div className="lorem1">
              <a href="https://in.linkedin.com/">
                <img className="mail1" src="images/icons8-linked-in-48.png" />
              </a>
              <a href="https://in.linkedin.com/">
                <img className="mail1" src="images/icons8-facebook-48.png" />
              </a>
              <a href="https://twitter.com/?lang=en">
                <img className="mail1" src="images/icons8-twitter-60.png" />
              </a>
            </div>
            <div className="dot1">
              <a href="https://mail.google.com/mail/">
                <img className="mail2" src="images/icons8-email-64.png" />
              </a>
              <p className="link1">Subscribe to this blog</p>
            </div>
            <input
              className="faf1"
              type="text"
              name="Search"
              placeholder="Enter Your Email Address.... "
            />
            <br />
            <button className="got1">SUBSCRIBE</button>
            <br />
            <br />

           
          
            <div>
              <p className="link1">Recent Updates </p>
              <br />
              <p className="fast1">
                Projections for retail leasing
                <br />
                growth in 2024
              </p>
              <br />

              <p className="fast1">
                Experion makes another major
                <br /> acquisition in Gurugram <br />
                for Rs 400 crore
              </p>
              <br />
              <p className="fast1">
                Samruddhi Expressway tunnel
                <br />
                in Maharashtra secured with <br />
                advanced fire protection <br />
                system from Danfoss
              </p>
            </div>
            <br />
            <br />
            <div>
              <p className="link1">TOP NEWS</p>
            </div>
            <br />
            <br />

            <div className="wear">
              <div className="wear2">
                <img className="tap1" src="images/wear1.jpg" />
                <p className="small1">
                  JULY 24, 2015
                  <br />
                  Madrid's Photographer{" "}
                </p>
              </div>
              <div className="wear2">
                <img className="tap1" src="images/wear2.jpg" />
                <p className="small1">
                  JULY 24, 2015
                  <br />
                  Madrid's Photographer{" "}
                </p>
              </div>
              <div className="wear2">
                <img className="tap1" src="images/wear3.jpg" />
                <p className="small1">
                  JULY 24, 2015
                  <br />
                  Madrid's Photographer{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
