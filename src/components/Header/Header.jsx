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
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileView, setIsMobileView] = useState(window.innerWidth < 992);

    // Handle window resize
    React.useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth < 992);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
        // Close dropdown when closing mobile menu
        if (isNavOpen) {
            setIsDropdownOpen(false);
        }
    };

    const toggleDropdown = (e) => {
        e.preventDefault();
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleNavClick = () => {
        if (isMobileView) {
            setIsNavOpen(false);
        }
        setIsDropdownOpen(false);
    };

    // Close dropdown when clicking outside (desktop only)
    React.useEffect(() => {
        if (!isMobileView) {
            const closeDropdown = (e) => {
                if (!e.target.closest('.dropdown')) {
                    setIsDropdownOpen(false);
                }
            };
            document.addEventListener('click', closeDropdown);
            return () => document.removeEventListener('click', closeDropdown);
        }
    }, [isMobileView]);

    return (
        <header className="main-header container">
            {/* Top Bar for Mobile */}
            <div className="top-bar d-lg-none d-flex justify-content-between align-items-center py-3">
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
            <div className="top-bar d-flex justify-content-between align-items-center py-3 mobile_top">
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
            <nav className={`navbar navbar-expand-lg px-4 ${isNavOpen ? 'mobile-nav-open' : ''}`}>
                <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`} id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/" onClick={handleNavClick}>HOME</Link>
                        </li>
                        <img src={ornament_icon} alt="icon" className="d-none d-lg-block" />
                        <li className="nav-item">
                            <Link className="nav-link" to="/services" onClick={handleNavClick}>OUR SERVICES</Link>
                        </li>
                        <img src={ornament_icon} alt="icon" className="d-none d-lg-block" />
                        <li className="nav-item">
                            <Link className="nav-link" to="/accommodation" onClick={handleNavClick}>ACCOMMODATION</Link>
                        </li>
                        <img src={ornament_icon} alt="icon" className="d-none d-lg-block" />
                        <li className="nav-item">
                            <Link className="nav-link" to="/blog" onClick={handleNavClick}>BLOG & NEWS</Link>
                        </li>
                        <img src={ornament_icon} alt="icon" className="d-none d-lg-block" />
                        <li className="nav-item dropdown">
                            <a
                                className={`nav-link dropdown-toggle ${isDropdownOpen ? '' : ''}`}
                                href="#"
                                onClick={toggleDropdown}
                                role="button"
                                style={{ color: isDropdownOpen ? '#000' : 'inherit' }}
                                aria-expanded={isDropdownOpen}
                            >
                                PAGES
                            </a>
                            <ul className={`dropdown-menu ${isDropdownOpen ? "show" : ""} ${isMobileView ? 'mobile-dropdown' : ''}`}>
                                <li><Link className="dropdown-item" to="/testimonials" onClick={handleNavClick}>Testimonials</Link></li>
                                <li><Link className="dropdown-item active" to="/pricing" onClick={handleNavClick}>Pricing</Link></li>
                                <li><Link className="dropdown-item" to="/faq" onClick={handleNavClick}>FAQ</Link></li>
                                <li><Link className="dropdown-item" to="/404" onClick={handleNavClick}>404</Link></li>
                                <li><Link className="dropdown-item" to="/coming-soon" onClick={handleNavClick}>Coming Soon</Link></li>
                                <li><Link className="dropdown-item" to="/popup-banner" onClick={handleNavClick}>Popup Banner</Link></li>
                            </ul>
                        </li>
                        <img src={ornament_icon} alt="icon" className="d-none d-lg-block" />
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