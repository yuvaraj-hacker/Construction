// src/App.js
 import React, { useState } from 'react';
 import BlogPost from '../Home/BlogPost.jsx';
 import BlogForm from '../Home/BlogForm.jsx';
 import '../Home/BlogForm.css';



const App = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  return (
    <div className="App">
      <h1>My Blog</h1>
      <BlogForm addPost={addPost} />
      <div className="posts">
        {posts.map((post, index) => (
          <BlogPost key={index} title={post.title} content={post.content} image={post.image} />
        ))}
      </div>
    </div>
  );
};

export default App;
