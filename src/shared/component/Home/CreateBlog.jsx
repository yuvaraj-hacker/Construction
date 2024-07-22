import React, { useState, useRef, useMemo, useEffect } from "react";
import axios from "axios";
import Sidebar from "../Home/Sidebar";
import "../Home/ViewBlog.css";
import JoditEditor from "jodit-react";

function CreateBlog() {
  const editor = useRef(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [posts, setPosts] = useState([]);
  const placeholder = "Start typing...";

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: placeholder,
    }),
    [placeholder]
  );

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/apiBlog")
      .then((response) => setPosts(response.data))
      .catch((error) => console.log(error));
  }, []);

  const createPost = () => {
    if (title && content && date) {
      const newPost = { title, content, date };
      axios
        .post("http://localhost:4000/api/apiBlog", newPost)
        .then((response) => {
          setPosts([...posts, response.data]);
          setTitle("");
          setContent("");
          setDate("");
        })
        .catch((error) => console.log(error));
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="blogs2">
      <div>
        <Sidebar />
      </div>

      <div className="fon3">
        <div className="create-blog-container">
          <h2 className="head0">Create a New Blog Post</h2>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="titleInput"
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="dateInput"
          />
          <JoditEditor
            ref={editor}
            value={content}
            config={config}
            tabIndex={1}
            onBlur={(newContent) => setContent(newContent)}
            onChange={(newContent) => {}}
          />
          <button onClick={createPost} className="createPostButton">
            Create Post
          </button>
        </div>
        <div className="post-list">
          <h2 className="createPostButton">Blog Posts</h2>
          {posts.map((post, index) => (
            <div key={index} className="post">
              <h3 className="head4">{post.title}</h3>
              <p>
                <strong>Date:</strong> {post.date}
              </p>
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CreateBlog;
