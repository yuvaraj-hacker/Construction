import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './ViewBlog.css';

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/apiBlog/${id}`)
      .then((response) => setPost(response.data))
      .catch((error) => setError("Error fetching post"));
  }, [id]);

  if (error) {
    return <p className="error">{error}</p>;
  }

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div className="post-detail">
      <h2 className="post-title">{post.title}</h2>
      <p className="post-date"><strong>Date:</strong> {post.date}</p>
      <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}

export default PostDetail;
