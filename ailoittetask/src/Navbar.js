import React from 'react';
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar">
                <a href="/">mapbox</a>
                <ul>
                    <li>Products</li>
                    <li>Solutions</li>
                    <li>Developers</li>
                    <li>Company</li>
                    <li>Pricing</li>
                    <li>Blog</li>
                </ul>
                <div className="auth-buttons">
                    <a href="/">Log in</a>
                    <a className="active" href="/">Sign up</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
