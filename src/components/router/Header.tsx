import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import logo from "./../images"


function Header() {
    return (
        <header>
            <div>
                <Link to="/">
                    <img src={logo} alt="Company Logo" style={{ width: '60px', height: 'auto' }} /> 
                </Link>
            </div>
            <Nav/>
        </header>
    );
}

export default Header;