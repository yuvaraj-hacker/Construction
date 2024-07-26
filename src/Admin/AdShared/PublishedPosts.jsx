import React, { useState, useEffect } from "react";
import axios from "axios";
import './ViewBlog.css';

function PublishedPosts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [expandedPostId, setExpandedPostId] = useState(null);
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/apiBlog?published=true")
      .then((response) => setPosts(response.data))
      .catch(() => setError("Error fetching posts"));
  }, []);

  const toggleExpandPost = (postId) => {
    if (expandedPostId === postId) {
      setExpandedPostId(null);
      setModalContent(null);
    } else {
      setExpandedPostId(postId);
      setModalContent(posts.find(post => post._id === postId)); // Find and set the correct post
    }
  };

  const truncateContent = (content, limit) => {
    return content.length > limit ? content.substring(0, limit) + "..." : content;
  };

  const closeModal = () => {
    setModalContent(null);
    setExpandedPostId(null);
  };

  return (
    <div className="post-list">
      <h2 className="header">Published Blog Posts</h2>
      {error && <p className="error">{error}</p>}
      <div className="posts-container">
        {posts.map((post) => (
          <div key={post._id} className="post-card">
            <h3 className="post-title">{post.title}</h3>
            <p className="post-date"><strong>Date:</strong> {post.date}</p>
            <div 
              className="post-content" 
              dangerouslySetInnerHTML={{ __html: expandedPostId === post._id ? post.content : truncateContent(post.content, 100) }} 
            />
            <button className="read-more-button" onClick={() => toggleExpandPost(post._id)}>
              {expandedPostId === post._id ? "Show Less" : "Read More"}
            </button>
          </div>
        ))}
      </div>

      {modalContent && (
        <div className="modal" style={{ display: 'block' }}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h3 className="post-title">{modalContent.title}</h3>
            <p className="post-date"><strong>Date:</strong> {modalContent.date}</p>
            <div className="post-content" dangerouslySetInnerHTML={{ __html: modalContent.content }} />
          </div>
        </div>
      )}
    </div>
  );
}

export default PublishedPosts;
