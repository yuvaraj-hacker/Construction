import React, { useState, useEffect, useRef } from 'react';
import "../Home/Sidebar.css";
import {
    FaBars,
    FaRegChartBar,
    FaCommentAlt
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef(null);

    const toggle = () => setIsOpen(!isOpen);

    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const menuItem = [
        {
            path: "/Cre",
            name: "Create Blog",
            icon: <FaRegChartBar />
          
        },
        {
            path: "/Dashboard",
            name: "View Blog",
            icon: <FaCommentAlt />
        }
    ];

    return (
        <div className="container">
            <div ref={sidebarRef} style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
                <div className="top_section">
                    <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" >
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;
