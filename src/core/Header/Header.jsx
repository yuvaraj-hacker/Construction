import { Link } from "react-router-dom";
import ContactPage from "../../components/HomePage/ContactPage";

export default function Header() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src="\src\assets\images\darna.png" />
        </div>
        <nav>
          <Link to="/" className="box">
            {" "}
            HOME
          </Link>
          <a href="#projects" className="box">
            {" "}
            PROJECTS
          </a>
          <a href="#" className="box">
            {" "}
            SHOP
          </a>
          <a href="#" className="box">
            {" "}
            BLOG
          </a>
          <a href="#" className="box">
            SHORTCODES
          </a>
          <Link  to="/reac" className="box">         
            CONTACT US
          </Link>
        </nav>
        <div className="hamburger-menu">&#9776;</div>
      </div>
    </>
  );
}
