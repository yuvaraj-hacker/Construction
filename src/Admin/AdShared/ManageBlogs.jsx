import React, { useState, useEffect } from "react";
import axios from "axios";
import './ViewBlog.css';

function ManageBlogs() {
  const [posts, setPosts] = useState([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    axios
      .get("http://localhost:4000/api/apiBlog?published=true")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error("Error fetching posts:", error));
  };

  const deletePost = (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      axios
        .delete(`http://localhost:4000/api/apiBlog/${id}`)
        .then(() => {
          console.log("Post deleted successfully");
          fetchPosts(); // Refresh the list of posts
        })
        .catch((error) => console.error("Error deleting post:", error));
    }
  };

  const openEditModal = (post) => {
    console.log("Opening edit modal for post:", post);
    setCurrentPost(post);
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
    setCurrentPost(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const saveChanges = (e) => {
    e.preventDefault();
    if (currentPost && currentPost._id) {
      console.log("Saving changes for post:", currentPost);
      axios
        .put(`http://localhost:4000/api/apiBlog/${currentPost._id}`, currentPost)
        .then(() => {
          console.log("Post updated successfully");
          fetchPosts();
          closeEditModal();
        })
        .catch((error) => console.error("Error updating post:", error));
    } else {
      console.error("Error: Current post is missing an ID or data.", currentPost);
    }
  };

  return (
    <div className={`manage-blogs ${editModalOpen ? "blur-background" : ""}`}>
      <h2 className="header">Manage Blog Posts</h2>
      <table className="posts-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post._id}>
              <td>{post.title}</td>
              <td>{post.date}</td>
              <td>
                <button onClick={() => openEditModal(post)} className="edit-button">Edit</button>
                <button onClick={() => deletePost(post._id)} className="delete-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editModalOpen && currentPost && (
        <div className="edit-modal">
          <div className="modal-content">
            <span className="close" onClick={closeEditModal}>&times;</span>
            <h3 className="edit2">Edit Post</h3>
            <form   className="fonte" onSubmit={saveChanges}> 
              <label>
                Title:
                <input type="text" name="title" value={currentPost.title} onChange={handleInputChange} />
              </label>
              <label>
                Content:
                <textarea name="content" value={currentPost.content} onChange={handleInputChange}></textarea>
              </label>
              <button type="submit">Save Changes</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ManageBlogs;
