import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateBlog from "../AdShared/CreateBlog";
import ViewBlog from "../AdShared/ViewBlog";
import DashBoard from "../AdShared/DashBoard";
import AdMain from "../AdCore/AdMain";
// import Sidebar from "../AdShared/SideBar";

function AdRouter() {
  return (
    <>
      <Routes>
        <Route element={<AdMain />}>
      

          <Route path="/Create" element={<CreateBlog />} />
          <Route path="/View" element={<ViewBlog />} />
          <Route path="/dashboard" element={<DashBoard />} />
         
        </Route>
     
      </Routes>
    </>
  );
}

export default AdRouter;

// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Sidebar from '../AdShared/Sidebar';
// import DashBoard from '../AdShared/DashBoard';
// import CreateBlog from '../AdShared/CreateBlog';
// import ViewBlog from '../AdShared/ViewBlog';

// const AdRouter = () => {
//     return (
//         <Router>
//             <div style={{ display: 'flex' }}>
//                 <Sidebar/>
//                 <div style={{ marginLeft: '250px', padding: '20px' }}>
//                     <Switch>
//                         <Route path="/Dash" component={<DashBoard/>} />
//                         <Route path="/Create" component={<CreateBlog/>} />
//                         <Route path="/View" component={<ViewBlog/>} />
//                     </Switch>
//                 </div>
//             </div>
//         </Router>
//     );
// };

// export default AdRouter;
