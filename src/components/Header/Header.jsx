import React, { useState } from "react";
import { Link } from "react-router-dom";
import mail_icon from "../../assets/image/mail.svg";
import logo from "../../assets/image/logo.svg";
import call_icon from "../../assets/image/call-ico.svg";
import ornament_icon from "../../assets/image/ornament.svg";
import menu_icon from "../../assets/image/menu_icon.svg";
import close_icon from "../../assets/image/close_icon.svg";
import "./header.css";

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const handleNavClick = () => {
        setIsNavOpen(false); // Close the menu when a menu item is clicked
    };

    return (
        <header className="main-header container">
            {/* Top Bar for Mobile */}
            <div className="top-bar d-lg-none d-flex justify-content-between align-items-center py-3">
                {/* Logo and Menu Icon */}
                <div className="d-flex align-items-center navbar_menu_icon">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={toggleNav}
                        aria-controls="navbarNav"
                        aria-expanded={isNavOpen}
                        aria-label="Toggle navigation"
                    >
                        <img
                            src={isNavOpen ? close_icon : menu_icon}
                            alt={isNavOpen ? "Close Menu" : "Open Menu"}
                            className="menu-toggle-icon"
                        />
                    </button>
                </div>
            </div>

            {/* Top Bar for Desktop */}
            <div className="top-bar  d-flex justify-content-between align-items-center py-3">
                {/* Left Links */}
                <div className="left-links d-flex align-items-center col-lg-4 gap-4 gap-md-3">
                    <Link to=""><span>EN</span></Link>
                    <Link to=""><img src={mail_icon} alt="email" /></Link>
                    <Link to="/newsletter">NEWSLETTER</Link>
                    <Link to="/resorts">RESORTS</Link>
                </div>

                {/* Logo */}
                <div className="col-lg-4 justify-content-center d-none d-lg-flex">
                    <Link className="navbar-brand mx-auto logo" to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>

                {/* Right Links */}
                <div className="right-links col-lg-4 d-flex align-items-center justify-content-end gap-3">
                    <Link to="">
                        <img src={call_icon} alt="call" />
                        <span>(987) 654-3210</span>
                    </Link>
                </div>
            </div>

            {/* Navigation Bar */}
            <nav className="navbar navbar-expand-lg px-4">
                <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`} id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/" onClick={handleNavClick}>HOME</Link>
                        </li>
                        <img src={ornament_icon} alt="icon" />
                        <li className="nav-item">
                            <Link className="nav-link" to="/services" onClick={handleNavClick}>OUR SERVICES</Link>
                        </li>
                        <img src={ornament_icon} alt="icon" />
                        <li className="nav-item">
                            <Link className="nav-link" to="/accommodation" onClick={handleNavClick}>ACCOMMODATION</Link>
                        </li>
                        <img src={ornament_icon} alt="icon" />
                        <li className="nav-item">
                            <Link className="nav-link" to="/blog" onClick={handleNavClick}>BLOG & NEWS</Link>
                        </li>
                        <img src={ornament_icon} alt="icon" />
                        <li className="nav-item dropdown  d-lg-block">
                            <Link
                                className="nav-link dropdown-toggle"
                                to="#"
                                id="pagesDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                PAGES
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="pagesDropdown">
                                <li><Link className="dropdown-item" to="/testimonials">Testimonials</Link></li>
                                <li><Link className="dropdown-item" to="/pricing">Pricing</Link></li>
                                <li><Link className="dropdown-item" to="/faq">FAQ</Link></li>
                                <li><Link className="dropdown-item" to="/404">404</Link></li>
                                <li><Link className="dropdown-item" to="/coming-soon">Coming Soon</Link></li>
                                <li><Link className="dropdown-item" to="/popup-banner">Popup Banner</Link></li>
                            </ul>
                        </li>
                        <img src={ornament_icon} alt="icon" />
                        <li className="nav-item">
                            <Link className="nav-link" to="/events" onClick={handleNavClick}>EVENTS</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
