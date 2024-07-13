// src/components/BlogPost.js
import React from 'react';

const BlogPost = ({ title, content, image }) => {
  return (
    <div className="blog-post">
      {image && <img src={image} alt={title} />}
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default BlogPost;
