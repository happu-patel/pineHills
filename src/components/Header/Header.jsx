// components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import mail_icon from '../../assets/image/mail.svg';
import logo from '../../assets/image/logo.svg';
import call_icon from '../../assets/image/call-ico.svg';
import menu_icon from '../../assets/image/ornament.svg'
import './header.css';

const Header = () => {
    return (
        <header className="main-header container">
            {/* Top Bar */}
            <div className="top-bar d-flex justify-content-between align-items-center py-3">
                <div className="left-links d-flex align-items-center col-lg-4 gap-4">
                    <span className="">EN</span>
                    <img className="" src={mail_icon} alt='email' />
                    <Link to="/newsletter" className="">NEWSLETTER</Link>
                    <Link to="/resorts">RESORTS</Link>
                </div>
                <div className='col-lg-4 justify-content-center d-flex'>
                <Link className="navbar-brand mx-auto logo" to="/">
                    <img src={logo} alt='logo' />
                </Link>
                </div>
                <div className="right-links col-lg-4 d-felx text-end">
                    <div className='d-flex flex-col gap-2 text-end justify-content-end'>
                        <img src={call_icon} alt='call' />
                        <span>(987) 654-3210</span>
                    </div>
                  
                </div>
            </div>

            {/* Navigation Bar */}
            <nav className="navbar navbar-expand-lg px-4">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">HOME</Link>
                        </li>
                        <img src={menu_icon} alt='icon' />
                        <li className="nav-item">
                            <Link className="nav-link" to="/services">OUR SERVICES</Link>
                        </li>
                        <img src={menu_icon} alt='icon' />
                        <li className="nav-item">
                            <Link className="nav-link" to="/accommodation">ACCOMMODATION</Link>
                        </li>
                        <img src={menu_icon} alt='icon' />
                        <li className="nav-item">
                            <Link className="nav-link" to="/blog">BLOG & NEWS</Link>
                        </li>
                        <img src={menu_icon} alt='icon' />
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="pagesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                PAGES
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="pagesDropdown">
                                <li><Link className="dropdown-item" to="/testimonials">Testimonials</Link></li>
                                <li><Link className="dropdown-item active" to="/pricing">Pricing</Link></li>
                                <li><Link className="dropdown-item" to="/faq">FAQ</Link></li>
                                <li><Link className="dropdown-item" to="/faq">404</Link></li>
                                <li><Link className="dropdown-item" to="/faq">Coming Soon</Link></li>
                                <li><Link className="dropdown-item" to="/faq">Popup Banner</Link></li>
                            </ul>
                        </li>
                        <img src={menu_icon} alt='icon' />
                        <li className="nav-item">
                            <Link className="nav-link" to="/events">EVENTS</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
