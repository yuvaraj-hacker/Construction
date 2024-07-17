// src/App.js
import React from 'react';
import {  Route, Routes, BrowserRouter } from 'react-router-dom';
import Sidebar from '../Home/Sidebar';
import CreateBlog from '../Home/CreateBlog';
import ViewBlog from '../Home/ViewBlog';


const BlogMain = () => {
  return (
    <BrowserRouter>
    <Router>
      <Sidebar />
      <Routes>
      
        <Route path="/Cre" element={<CreateBlog/>} />
        <Route path="/Dashboard" element={<ViewBlog/>} />
      </Routes>
    </Router>
    </BrowserRouter>
  );
};

export default BlogMain;
