import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../core/Main/Main";
import Homepage from "../components/HomePage/Homepage";


import ContactPage from "../components/HomePage/ContactPage";
import BlogPage from "../components/HomePage/BlogPage";

export default function Approuter () {

    return(
       <BrowserRouter>
       <Routes>
        <Route element={<Main/>}>
         <Route path="/" element={<Homepage/>}/>
         <Route path="/Reac" element={<ContactPage/>}/>
         <Route path="/Blog" element={<BlogPage/>}/>
         
        </Route>
       </Routes>
       </BrowserRouter>



     
    )
}