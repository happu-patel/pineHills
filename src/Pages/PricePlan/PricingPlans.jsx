import React from "react";
import './pricingplans.css'
import ornament_icon from '../../assets/image/ornament.svg'
import squre_icon from '../../assets/image/squre.svg';
import check_circle from '../../assets/image/check-circle.svg';
import dark_check_circle from '../../assets/image/dark_check_icon.svg';
import events from '../../assets/image/event.svg'
import wedding from '../../assets/image/wedding.svg'
import family from '../../assets/image/family.svg'
import pool from '../../assets/image/pool.svg'
import restaurant from '../../assets/image/restaurant.svg'
import bathtub from '../../assets/image/bathtub.svg'
import gym from '../../assets/image/gym.svg'

const PricingPlans = () => {
    return (
        <div className="pricing_plan">
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
                        <div className="col-md-4 card_padding">
                            <div className="card shadow-sm white_card mb_mobile">
                                <div className="card-body">
                                    <h5 className="card_title1_black card_title1">CLASSIC ESCAPE</h5>
                                    <h3 className="card-price text-dark">$299<span className="text_night">/night</span></h3>
                                    <p className="card-text card-text1">
                                        Ideal for a quick getaway, offering comfort and essential amenities in a serene setting.
                                    </p>
                                    <hr className="price_hr text-dark" />
                                    <p className="text-center feature_txt text-dark">Features</p>
                                    <ul className="list-unstyled feature_list text-dark">
                                        <li><img src={dark_check_circle} alt="check_icon" className="check_icon" />Cozy King Bed Suite</li>
                                        <li><img src={dark_check_circle} alt="check_icon" className="check_icon" />Complimentary Breakfast</li>
                                        <li><img src={dark_check_circle} alt="check_icon" className="check_icon" />Access to Fitness Center</li>
                                        <li><img src={dark_check_circle} alt="check_icon" className="check_icon" />In-Room Wi-Fi</li>
                                        <li><img src={dark_check_circle} alt="check_icon" className="check_icon" />Private Balcony with Garden View</li>
                                    </ul>
                                    <hr className="price_hr text-dark" />
                                    <button className="start_btn_white">Get Started</button>
                                </div>
                            </div>
                        </div>

                        {/* Premium Retreat */}
                        <div className="col-md-4">
                            <div className="card border-dark shadow-sm  black-card mb_mobile">
                                <div className="card-body">
                                    <div className="card-title pt-0">
                                        <img src={ornament_icon} />
                                        <span className="section-title px-2">
                                            RECOMMENDED
                                        </span>
                                        <img src={ornament_icon} />
                                    </div>
                                    <div className="premium_title">
                                        <h3 className="card_title1">Premium Retreat</h3>
                                    </div>
                                    <h3 className="card-price">$499 <span className="text_night">/night</span></h3>
                                    <p className="card-text">
                                        The perfect balance of luxury and value, designed for those seeking an elevated resort.
                                    </p>
                                    <hr className="price_hr" />
                                    <p className="text-center feature_txt">Features</p>
                                    <ul className="list-unstyled feature_list">
                                        <li><img src={check_circle} alt="check_icon" className="check_icon" />Spacious King Bed Suite with Ocean View</li>
                                        <li><img src={check_circle} alt="check_icon" className="check_icon" />Private Balcony with Outdoor Seating</li>
                                        <li><img src={check_circle} alt="check_icon" className="check_icon" />Complimentary Breakfast and Dinner</li>
                                        <li><img src={check_circle} alt="check_icon" className="check_icon" />Access to Spa and Wellness Center</li>
                                        <li><img src={check_circle} alt="check_icon" className="check_icon" />In-Room Wi-Fi and Entertainment System</li>
                                        <li><img src={check_circle} alt="check_icon" className="check_icon" />Priority Booking for Resort Activities</li>
                                    </ul>
                                    <hr className="price_hr" />
                                    <button className="start_btn">Get Started</button>
                                </div>
                            </div>
                        </div>

                        {/* Luxury Indulgence */}
                        <div className="col-md-4 card_padding">
                            <div className="card  shadow-sm  white_card">
                                <div className="card-body">
                                    <h5 className="card_title1_black card_title1">LUXURY INDULGENCE</h5>
                                    <h3 className="card-price text-dark">$799<span className="text_night">/night</span></h3>
                                    <p className="card-text card-text1">
                                        Our most exclusive package, tailored for a truly luxurious and indulgent stay.
                                    </p>
                                    <hr className="price_hr text-dark" />
                                    <p className="text-center feature_txt text-dark">Features</p>
                                    <ul className="list-unstyled feature_list text-dark">
                                        <li><img src={dark_check_circle} alt="check_icon" className="check_icon" />Exclusive Villa with Private Pool</li>
                                        <li><img src={dark_check_circle} alt="check_icon" className="check_icon" />Personalized Butler Service</li>
                                        <li><img src={dark_check_circle} alt="check_icon" className="check_icon" /> Private Dining Experience</li>
                                        <li><img src={dark_check_circle} alt="check_icon" className="check_icon" /> Full Access to All Resort Facilities</li>
                                        <li><img src={dark_check_circle} alt="check_icon" className="check_icon" /> Complimentary In-Room Massage</li>
                                    </ul>
                                    <hr className="price_hr text-dark" />
                                    <button className="start_btn_white">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="service">
                <div class="container service_sec">
                    <div class="our_service_box">
                        <div class="d-flex">
                            <div class="col-lg-7 p-0">
                                <div class="service_data">
                                    <div class="service_data_sec">
                                        <div className="title_part p-0">
                                            <img src={ornament_icon} alt="Ornament Icon" />
                                            <span className="section-title px-2">OUR SERVICES</span>
                                            <img src={ornament_icon} alt="Ornament Icon" />
                                        </div>
                                        <h1 className='main-title pb-4'>Exceptional Service <br /> For An Unforgettable Stay</h1>

                                        <div class="service_data_box">
                                            <div class="row">
                                                <div class="col-lg-2 d-flex  align-items-center">
                                                    <div class="black_box">
                                                        <img src={events} alt="" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-10 box_data">
                                                    <h5>meeting & events</h5>
                                                    <p>Seamlessly host your event with our versatile spaces and expert support.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="service_data_box">
                                            <div class="row">
                                                <div class="col-lg-2 d-flex align-items-center">
                                                    <div class="black_box">
                                                        <img src={wedding} alt="" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-10 box_data">
                                                    <h5>wedding & romantic moments</h5>
                                                    <p>Create unforgettable memories with our elegant venues and personalized services.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="service_data_box">
                                            <div class="row">
                                                <div class="col-lg-2 d-flex align-items-center">
                                                    <div class="black_box">
                                                        <img src={family} alt="" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-10 box_data">
                                                    <h5>family holidays</h5>
                                                    <p>Enjoy a fun and relaxing family getaway with activities and accommodations for all ages.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class=" bg-black ms-0">
                                    <div class="black_box_detail d-flex">
                                        <div className='contain_p col-lg-8'>
                                            Our range of premium services is designed to make your stay as enjoyable and stress free as possible.
                                        </div>
                                        <button className='col-lg-4'>
                                            BOOK NOW
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-5 service_blank">
                                <div class="service_black_sec">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container Amenities">
                <div className="row">
                    <div className="col-lg-8 Amenities_box">
                        <div className="row g-3 mb-3">

                            <div className="col-lg-7">
                                <div className="Amenities_box_data pool_bg">
                                    <div>
                                        <div className="Amenities_icon">
                                            <img src={pool} alt="" />
                                        </div>
                                        <h1>PRIVATE POOL</h1>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-5">
                                <div className="Amenities_box_data res_bg">
                                    <div>
                                        <div className="Amenities_icon">
                                            <img src={restaurant} alt="" />

                                        </div>
                                        <h1>RESTAURANT</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row g-3 mb-3">
                            <div className="col-lg-5">
                                <div className="Amenities_box_data spa_bg">
                                    <div>
                                        <div className="Amenities_icon">
                                            <img src={bathtub} alt="" />

                                        </div>
                                        <h1>SPA SERVICE</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="Amenities_box_data gym_bg">
                                    <div>
                                        <div className="Amenities_icon">
                                            <img src={gym} alt="" />

                                        </div>
                                        <h1>QUALITY GYM</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="amenities-card">
                            <div className="card-content text-center">
                                <div className='title_part text-center'>
                                    <img src={ornament_icon} />
                                    <span className="section-title px-2 pb-1" style={{ color: '#B7A18B' }}>
                                        AMENITIES
                                    </span>
                                    <img src={ornament_icon} />
                                </div>

                                <h2 className="amenities-heading">We Offer You <br /> Luxurious Amenities</h2>
                                <p className="amenities-text">
                                    Indulge in unparalleled luxury with our top-tier amenities.
                                    From private pools and fully equipped kitchens to personalized concierge services and elegant interiors.
                                </p>
                                <a href="#" className="read-more-btn">Read More</a>
                            </div>
                            <div className="b_white">
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PricingPlans;
