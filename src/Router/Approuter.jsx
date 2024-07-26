import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../core/Main/Main";
import Homepage from "../components/HomePage/Homepage";
import ContactPage from "../components/HomePage/ContactPage";
import BlogPage from "../components/HomePage/BlogPage";
import ShortCodes from "../components/HomePage/ShortCodes";
import Shop from "../components/HomePage/ShopPage";
import ProjectPage from "../components/HomePage/ProjectPage";
import Login from "../shared/component/Home/Login";
import Register from "../shared/component/Home/Register";
import { AuthProvider } from "../shared/component/Home/Authcontext";

import AdRouter from "../Admin/AdRouter/AdRouter";
import Admin from "../shared/component/Home/Admin";
import Blog from "../shared/component/Home/Blog";



export default function Approuter() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<Main />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/Reac" element={<ContactPage />} />
            <Route path=" " element={<BlogPage />} />
            <Route path="/Short" element={<ShortCodes />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/Project" element={<ProjectPage />} />
            <Route path="/Posts" element={<Blog/>}/>
            {/* <Route path="/Blog" element={<Sidebar />} /> */}
            {/* <Route path="/Cre" element={<CreateBlog />} />
            <Route path="/Dashboard" element={<ViewBlog />} /> */}
            <Route path="/Login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route path="/Admin" element={<Admin />} />

          <Route path="/Dash/*" element={<AdRouter />} />
          {/* <Route path="/Create" element={<CreateBlog />} />
          <Route path="/View" element={<ViewBlog />} />
          <Route path="/Dash" element={<DashBoard />} /> */}
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
