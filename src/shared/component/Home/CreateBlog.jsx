import React, { useState } from "react";
import Sidebar from "../Home/Sidebar";
import "../Home/ViewBlog.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function CreateBlog() {
  const [value, setValue] = useState("");
  return (
    <>
      <div className="blogs2">
        <div>
          <Sidebar />
        </div>
        
        <div className="snow9">
          <ReactQuill theme="snow" value={value} onchange={setValue} />
        </div>
      </div>
    </>
  );
}

export default CreateBlog;
