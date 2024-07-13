// src/Home/BlogForm.jsx
import React, { useState } from 'react';

const BlogForm = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date().toLocaleString();
    addPost({ title, content, image, date });
    setTitle('');
    setContent('');
    setImage(null);
  };

  return (
    <div>
      
   
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input className='title4'
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Content:</label>
        <textarea className="area1"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Image:</label>
        <input
          type="file"
          onChange={handleImageChange}
          accept="image/*"
        />
      </div>
      <button className="button8"   type="submit">Add Post</button>
    </form>
    </div>
  );
};

export default BlogForm;
