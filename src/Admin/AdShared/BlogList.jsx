import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./ViewBlog.css"; // Import custom CSS for styling
import { Link } from 'react-router-dom';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/blogs');
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="blog-list-container">
      <h2>Blog Posts</h2>
      {blogs.map((blog, index) => (
        <div key={index} className="blog-card">
          <h3>{blog.title}</h3>
          <p>{blog.date}</p>
          <p>{blog.name}</p>
          <div dangerouslySetInnerHTML={{ __html: blog.content.substring(0, 100) + '...' }} />
          <Link to={`/blogs/${index}`} className="read-more">Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
