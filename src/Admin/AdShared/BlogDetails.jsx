import React from "react";
import { useParams } from "react-router-dom";

const BlogDetails = ({ blogs }) => {
  const { id } = useParams();
  const blog = blogs[id];

  return (
    <div className="blog-details-container">
      <h2>{blog.title}</h2>
      <p>{blog.date}</p>
      <p>{blog.name}</p>
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
    </div>
  );
};

export default BlogDetails;
