// src/App.js
import React, { useState, useEffect } from 'react';
   import BlogPost from '../Home/BlogPost.jsx';
   import BlogForm from '../Home/BlogForm.jsx';
   import '../Home/BlogForm.css';


const App = () => {
  const [posts, setPosts] = useState([]);

  // Load posts from localStorage when the app initializes
  useEffect(() => {
    const storedPosts = localStorage.getItem('posts');
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    }
  }, []);

  // Save posts to localStorage whenever the posts state changes
  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  const deletePost = (indexToDelete) => {
    setPosts(posts.filter((_, index) => index !== indexToDelete));
  };

  return (
    <>
   <br/>
   <br/>
   <br/>
   <br/>
   
    <div className="App">
      <p className="app1">My Blog</p>
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
    </>
  );
};

export default App;
