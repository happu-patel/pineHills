import React from 'react';
import { Link } from 'react-router-dom';
import instagram from '../../assets/image/instagram.svg';
import linkdin from '../../assets/image/linkdin.svg';
import fb from '../../assets/image/fb.svg';
import twitter from '../../assets/image/twitter.svg';
import footer_logo from '../../assets/image/footer_logo.svg';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-leaf"></div>
            <div className="footer-leaf second-leaf"></div>
            <div className="container">
                {/* Newsletter Section */}
                <div className="newsletter-section">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-5">
                            <h4>GET UP TO $100 OFF YOUR FIRST STAY WHEN YOU SIGN UP FOR EMAILS!</h4>
                            <p>Sign up for our emails and enjoy up to $100 off your first stay at Pine Hills! Stay updated with our latest offers, exclusive deals, and exciting news.</p>
                        </div>
                        <div className="col-lg-6">
                            <div className="newsletter-signup">
                                <h3>Sign Up Our Newsletter</h3>
                                <div className="input-group">
                                    <input type="email" placeholder="Enter your email address" className="form-control" />
                                    <button className="btn-signup">SIGN UP</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Main Section */}
                <div className="footer-main-section">
                    <div className="footer-links">
                        <div className="footer-column">
                            <h5>QUICK MENU</h5>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/service">Service</Link></li>
                                <li><Link to="/portfolio">Portfolio</Link></li>
                                <li><Link to="/product">Product</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/faq">FAQ</Link></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h5>TERM & CONDITION</h5>
                            <ul>
                                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                                <li><Link to="/bookings">Bookings & Cancellations</Link></li>
                                <li><Link to="/terms">Website Terms</Link></li>
                                <li><Link to="/product">Product</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/faq">FAQ</Link></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h5>COMPANY</h5>
                            <ul>
                                <li><Link to="/about">About Company</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                                <li><Link to="/terms">Terms & Condition</Link></li>
                                <li><Link to="/privacy">Privacy & Policy</Link></li>
                                <li><Link to="/help">Help Center</Link></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h5>CONTACT</h5>
                            <ul className="contact-info">
                                <li>Phone: (987) 654-3210</li>
                                <li>Email: pinehillssupport@pinehills.<br />com</li>
                                <li>Address: 123 Main Street, Suite 101 Cityville, CA 90001</li>
                            </ul>
                        </div>
                    </div>

                    {/* Footer Bottom Section */}
                    <div className="footer-bottom">
                        <div className="footer-logo">
                            <Link to={"/"}>
                                <img src={footer_logo} alt="" />
                            </Link>
                        </div>
                        <div className="social-links">
                            <a href="#"><img src={instagram} alt="Instagram" /></a>
                            <a href="#"><img src={linkdin} alt="LinkedIn" /></a>
                            <a href="#"><img src={fb} alt="Facebook" /></a>
                            <a href="#"><img src={twitter} alt="Twitter" /></a>
                        </div>
                        <div className="footer-policy-links">
                            <Link to="/terms">Terms of Use</Link>
                            <Link to="/privacy">Privacy Notice</Link>
                            <Link to="/accessibility">Accessibility</Link>
                        </div>
                    </div>
                </div>
                <div className='end_title'>
                    <div className='container'>
                        <div className='sub_titile'>
                            <p>2024 © Pine Hills Limited. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
