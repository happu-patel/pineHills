import React from "react";
import './pricingplans.css'
import ornament_icon from '../../assets/image/ornament.svg'
import squre_icon from '../../assets/image/squre.svg';

const PricingPlans = () => {
    return (
        <>
            <section className="contact_pine">
                <div className="container text-white">
                    <div className='title_part p-0'>
                        <img src={squre_icon} />
                        <span className="section-title px-2">
                            PINE HILL PRICING
                        </span>
                        <img src={squre_icon} />
                    </div>
                    <h1 className="contact_head">Choose The Perfect Plan For Your <br />Stay At Pine Hill Resort</h1>
                    <p className="breadcrumb">
                        <span className='me-3'>HOME</span> / <span className='ms-3'>PRICING PLAN</span>
                    </p>
                </div>
            </section>
            <section className="py-5">
                <div className="container text-center">
                    <div className="text-center mb-5">
                        <div className='title_part p-0'>
                            <img src={ornament_icon} />
                            <span className="section-title px-2">
                                PRICING PLAN
                            </span>
                            <img src={ornament_icon} />
                        </div>
                        <h2 className="main-title">Pine Hill Stay Packages</h2>
                        <p className="description">
                            Whether you're seeking the cozy charm of a rustic cabin, the elegance of a luxury suite, or the <br /> spacious comfort of a family villa, we have the perfect lodging option for you.
                        </p>
                    </div>

                    <div className="row">
                        {/* Classic Escape */}
                        <div className="col-md-4">
                            <div className="card border-light shadow-sm mb-4">
                                <div className="card-body">
                                    <h5 className="card-title">CLASSIC ESCAPE</h5>
                                    <h3 className="card-price text-primary mb-3">$299<span className="small">/night</span></h3>
                                    <p className="card-text text-muted mb-4">
                                        Ideal for a quick getaway, offering comfort and essential amenities in a serene setting.
                                    </p>
                                    <ul className="list-unstyled">
                                        <li>✔ Cozy King Bed Suite</li>
                                        <li>✔ Complimentary Breakfast</li>
                                        <li>✔ Access to Fitness Center</li>
                                        <li>✔ In-Room Wi-Fi</li>
                                        <li>✔ Private Balcony with Garden View</li>
                                    </ul>
                                    <button className="btn btn-primary mt-3">Get Started</button>
                                </div>
                            </div>
                        </div>

                        {/* Premium Retreat */}
                        <div className="col-md-4">
                            <div className="card border-dark shadow-sm mb-4 black-card">
                                <div className="card-body">
                                    <div className="card-title">
                                        <img src={ornament_icon} />
                                        <span className="section-title px-2">
                                            RECOMMENDED
                                        </span>
                                        <img src={ornament_icon} />
                                    </div>
                                    <h3 className="card_title1">Premium Retreat</h3>
                                    <h3 className="card-price text-primary mb-3">$499<span className="small">/night</span></h3>
                                    <p className="card-text text-muted mb-4">
                                        The perfect balance of luxury and value, designed for those seeking an elevated resort experience.
                                    </p>
                                    <ul className="list-unstyled">
                                        <li>✔ Spacious King Bed Suite with Ocean View</li>
                                        <li>✔ Private Balcony with Outdoor Seating</li>
                                        <li>✔ Complimentary Breakfast and Dinner</li>
                                        <li>✔ Access to Spa and Wellness Center</li>
                                        <li>✔ In-Room Wi-Fi and Entertainment System</li>
                                        <li>✔ Priority Booking for Resort Activities</li>
                                    </ul>
                                    <button className="btn btn-dark mt-3">Get Started</button>
                                </div>
                            </div>
                        </div>

                        {/* Luxury Indulgence */}
                        <div className="col-md-4">
                            <div className="card border-light shadow-sm mb-4">
                                <div className="card-body">
                                    <h5 className="card-title">LUXURY INDULGENCE</h5>
                                    <h3 className="card-price text-primary mb-3">$799<span className="small">/night</span></h3>
                                    <p className="card-text text-muted mb-4">
                                        Our most exclusive package, tailored for a truly luxurious and indulgent stay.
                                    </p>
                                    <ul className="list-unstyled">
                                        <li>✔ Exclusive Villa with Private Pool</li>
                                        <li>✔ Personalized Butler Service</li>
                                        <li>✔ Private Dining Experience</li>
                                        <li>✔ Full Access to All Resort Facilities</li>
                                        <li>✔ Complimentary In-Room Massage</li>
                                    </ul>
                                    <button className="btn btn-primary mt-3">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PricingPlans;
