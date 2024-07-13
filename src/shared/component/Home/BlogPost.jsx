// src/Home/BlogPost.jsx
import React from 'react';

const BlogPost = ({ title, content, image, date, onDelete }) => {
  return (
    <div className="blog-post">
      {image && <img src={image} alt={title} />}
      <h2>{title}</h2>
      <p>{content}</p>
      <small>{date}</small>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default BlogPost;
