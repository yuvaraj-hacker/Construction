// src/Home/BlogPost.jsx
import React from 'react';

const BlogPost = ({ title, content, image, date, onDelete }) => {
  return (
    <div className="blog-post">
      {image && <img   className='sde1'  src={image} alt={title} />}
      <p className='nan2'>{title}</p>
      <p  className='nan1'>{content}</p>
      <small className='nan3'>{date}</small>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default BlogPost;
