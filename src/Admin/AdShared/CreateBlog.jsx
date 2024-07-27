import React, { useState, useRef } from "react";
import axios from "axios";
import SunEditor from "suneditor-react";
import 'suneditor/dist/css/suneditor.min.css'; // Import SunEditor styles
import './ViewBlog.css';

function CreateBlog() {
  const [formData, setFormData] = useState({ title: "", content: "", date: "", name: "" });
  const [error, setError] = useState("");
  const editorRef = useRef(); // Create a ref for the SunEditor instance

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleContentChange = (content) => {
    setFormData((prevState) => ({ ...prevState, content }));
  };

  const publishPost = () => {
    const { title, content, date, name } = formData;
    if (title && content && date && name) {
      axios
        .post("http://localhost:4000/api/apiBlog", { ...formData, published: true })
        .then(() => {
          setFormData({ title: "", content: "", date: "", name: "" });
          alert("Post published successfully!");
        })
        .catch((error) => setError("Error publishing post"));
    } else {
      setError("Please fill in all fields.");
    }
  };

  // Callback function to receive the SunEditor instance
  const getSunEditorInstance = (sunEditor) => {
    editorRef.current = sunEditor;
  };

  return (
    <div className="blogs2">
      <div className="fon3">
        <div className="create-blog-container">
          <h2 className="head0">Create a New Blog</h2>
          {error && <p className="error">{error}</p>}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            className="nameInput"
          />
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Title"
            className="titleInput"
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            className="dateInput"
          />
          <SunEditor
            setContents={formData.content}
            onChange={handleContentChange}
            getSunEditorInstance={getSunEditorInstance} // Pass the callback function
            setOptions={{
              height: 400,
              buttonList: [
                ['undo', 'redo', 'bold', 'italic', 'underline', 'strike', 'subscript', 'superscript'],
                ['font', 'fontSize', 'formatBlock'],
                ['paragraphStyle', 'blockquote'],
                ['fontColor', 'hiliteColor', 'textStyle'],
                ['removeFormat'],
                '/',
                ['outdent', 'indent'],
                ['align', 'horizontalRule', 'list', 'table'],
                ['link', 'image', 'video'],
                ['fullScreen', 'showBlocks', 'codeView'],
                ['preview', 'print']
              ]
            }}
          
            defaultValue="<p>Welcome to the blog editor!</p>" // Set default value
            width="100%" // Set width
            height="400px" // Set height
          />
          <button onClick={publishPost} className="createPostButton">
            Publish Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateBlog;



