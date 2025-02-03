import React from 'react';
import './contact.css';
import squre_icon from '../../assets/image/squre.svg';
import ornament_icon from '../../assets/image/ornament.svg';
import locationIcon from '../../assets/image/location_icon.svg';
import callIcon from '../../assets/image/call_icon_c.svg';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <>
            <section className="contact_pine">
                <div className="container text-white">
                    <div className='title_part p-0'>
                        <img src={squre_icon} />
                        <span className="section-title px-2">
                            PINE HILL CONTACT
                        </span>
                        <img src={squre_icon} />
                    </div>
                    <h1 className="contact_head">Connect With Us For Personalized<br />Support And Assistance</h1>
                    <p className="breadcrumb">
                        <Link to='/' className='me-3'>Home</Link> / <Link to='/contact' className='ms-3'>Contact Us</Link>
                    </p>
                </div>
            </section>

            <section className="contact_section_wrapper py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-lg-7 bg-gray col-sm-12"></div>
                        <div className="col-md-5 col-lg-5 col-sm-12">
                            <div className="form-container shadow bg-white">
                                <div className='title_part p-0 text-center'>
                                    <img src={ornament_icon} />
                                    <span className="section-title px-2 ">
                                        GET IN TOUCH
                                    </span>
                                    <img src={ornament_icon} />
                                </div>
                                <h2 className="main-title text-center">Feel Free To Drop Us A Message</h2>
                                <p className="text-center mb-4 description">
                                    Do you have anything in your brain to let us know? Kindly don’t falter to connect to us through our contact form.
                                </p>
                                <hr class="styled-hr" />
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label visually-hidden">Full Name</label>
                                        <input type="text" id="name" className="form-control" placeholder="Full Name" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label visually-hidden">Email Address</label>
                                        <input type="email" id="email" className="form-control" placeholder="Email Address" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="message" className="form-label visually-hidden">Your Message</label>
                                        <textarea id="message" className="form-control" rows="4" placeholder="Your Message"></textarea>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" id="save-info" className="form-check-input" />
                                        <label htmlFor="save-info" className="form-check-label">
                                            Save my name, email, and website in this browser for the next time I comment.
                                        </label>
                                    </div>
                                    <div className="text-center sub_button">
                                        <button type="submit" className="submit_btn">
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-info ">
                <div className="container">
                    <div className="row text-center align-items-center">
                        {/* Office Address */}
                        <div className="col-md-4 border-end">
                            <div className="contact-item d-flex align-items-start">
                                <div className="icon">
                                    <img src={locationIcon} alt="Location" className="icon-img" width={23} />
                                </div>
                                <div className="contact_content">
                                    <h5>Office Address</h5>
                                    <p>B - 562, MALLIN STREET NEW</p>
                                    <p>YORK, WEST COL, NY 100 254</p>
                                </div>
                            </div>
                        </div>


                        {/* Phone Number */}
                        <div className="col-md-4 border-end contact-column-middle">
                            <div className="contact-item d-flex align-items-start">
                                <div className="icon">
                                    <img src={callIcon} alt="Call" className="icon-img" />
                                </div>
                                <div className="contact_content">
                                    <h5>Phone Number</h5>
                                    <p>(987) 654-3210 (ADMIN)</p>
                                    <p>(987) 234-4567 (CS)</p>
                                </div>
                            </div>
                        </div>

                        {/* Email Address */}
                        <div className="col-md-4 contact-column-middle">
                            <div className="contact-item d-flex align-items-start">
                                <div className="icon">
                                    <img src={locationIcon} alt="Email" className="icon-img" width={23} />
                                </div>
                                <div className="contact_content">
                                    <h5>Email Address</h5>
                                    <p>PINEHILLSSUPPORT@PINEHILLS<br />.COM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='grey_area mt-4'>

            </section>
        </>
    );
};

export default Contact;
