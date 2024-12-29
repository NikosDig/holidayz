import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                <Link to="/profile">Profile</Link>
                </li>
                <li>
                <Link to="/venues">Venues</Link></li>
            </ul>
        </nav>
    )
}


export default Nav;