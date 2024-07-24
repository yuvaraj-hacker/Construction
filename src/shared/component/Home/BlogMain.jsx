// src/App.js
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Sidebar from "../../../Admin/AdShared/Side";
import CreateBlog from "../../../Admin/AdShared/CreateBlog";
import ViewBlog from "../../../Admin/AdShared/ViewBlog";

const BlogMain = () => {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/Cre" element={<CreateBlog />} />
        <Route path="/Dashboard" element={<ViewBlog />} />
      </Routes>
    </BrowserRouter>
  );
};

export default BlogMain;
