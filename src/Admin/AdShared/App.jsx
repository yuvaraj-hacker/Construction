import React, { useState } from 'react';
import { BrowserRouter as  Route,  Routes } from 'react-router-dom';
import CreateBlog from './CreateBlog';
import BlogList from './BlogList';
import BlogDetails from './BlogDetails';

const App = () => {
  const [blogs, setBlogs] = useState([]);

  const addBlog = (newBlog) => {
    setBlogs([...blogs, newBlog]);
  };

  return (
    <Routes>
        <Route path="/" exact>
          <BlogList blogs={blogs} />
        </Route>
        <Route path="/create">
          <CreateBlog addBlog={addBlog} />
        </Route>
        <Route path="/blogs/:id">
          <BlogDetails blogs={blogs} />
        </Route>
   </Routes>
  );
};

export default App;



