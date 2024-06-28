import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/Maisha.png";
import '../Styles/Navbar.css';

const Navbar = () => {
    return (
        <header className="navbar">
            <nav className="nav-container">
                <div className="logo-container">
                    <img src={Logo} alt="Maisha Logo" className="logo" />
                </div>
                <ul className="nav-links">
                    <li><Link to="/" className="nav-link">Home</Link></li>
                    <li><Link to="/shop" className="nav-link">Shop</Link></li>
                    <li><Link to="/categories" className="nav-link">Categories</Link></li>
                    <li><Link to="/checkout" className="nav-link">Checkout</Link></li>
                    <li><Link to="/myaccount" className="nav-link">My Account</Link></li>
                    <li><Link to="/contactus" className="nav-link">Contact Us</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
