// src/App.js
import React, { useState, useEffect } from "react";
import BlogPost from "../Home/BlogPost.jsx";
import BlogForm from "../Home/BlogForm.jsx";
import "../Home/BlogForm.css";
import "../Home/Blog.css";

const App = () => {
  const [posts, setPosts] = useState([]);

  // Load posts from localStorage when the app initializes
  useEffect(() => {
    const storedPosts = localStorage.getItem("posts");
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    }
  }, []);

  // Save posts to localStorage whenever the posts state changes
  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  const addPost = (post) => {
    setPosts([post, ...posts]); // Add new post at the beginning of the array
  };

  const deletePost = (indexToDelete) => {
    setPosts(posts.filter((_, index) => index !== indexToDelete));
  };

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <div className="main5">
        <div> 
          <div className="blog">
            <p>
              Federal Construction Contracting{" "}
              <p style={{ color: "orange" }}>Blog</p>
            </p>
          </div>

          <div className="App">
            <BlogForm addPost={addPost} />
            <div className="posts">
              {posts.map((post, index) => (
                <BlogPost
                  key={index}
                  title={post.title}
                  content={post.content}
                  image={post.image}
                  date={post.date}
                  onDelete={() => deletePost(index)}
                />
              ))}
            </div>
          </div>
        </div>
        <div>
          <input
            className="width"
            type="text"
            name="Search"
            placeholder="Search"
          />
          <br />
          <br />
          <p className="link1"> Stay Connected </p>
          <div className="lorem1">
            <a href="https://in.linkedin.com/">
              {" "}
              <img
                className="mail1"
                src="images/icons8-linked-in-48.png"
              />{" "}
            </a>
            <a href="https://in.linkedin.com/">
              {" "}
              <img className="mail1" src="images/icons8-facebook-48.png" />{" "}
            </a>
            <a href="https://twitter.com/?lang=en">
              {" "}
              <img className="mail1" src="images/icons8-twitter-60.png" />{" "}
            </a>
          </div>
          <div className="dot1">
            <a href="https://mail.google.com/mail/">
              <img className="mail2" src="images/icons8-email-64.png" />{" "}
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

          <button className="got2">Blog Authors +</button>
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
    </>
  );
};

export default App;