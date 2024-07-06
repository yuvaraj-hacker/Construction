import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import '../../../src/App.css'



export default function Main () {

    return(
       <>
            <Header/>
            <main>
                 <Outlet/>
            </main>
            <Footer/> 
       </>

       
      

  
       
       
    )
}