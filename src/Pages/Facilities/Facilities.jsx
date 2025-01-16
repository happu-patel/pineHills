import React from 'react';
import './facilities.css';
import squre_icon from '../../assets/image/squre.svg';
import ornament_icon from '../../assets/image/ornament.svg';
import white_logo from '../../assets/image/footer_logo.svg'
import ph_logo from '../../assets/image/PH.png'

const Facilities = () => {
    return (
        <>
            <section className="contact_pine">
                <div className="container text-white">
                    <div className='title_part p-0'>
                        <img src={squre_icon} />
                        <span className="section-title px-2">
                            PINE HILL FACILITIES
                        </span>
                        <img src={squre_icon} />
                    </div>
                    <h1 className="contact_head">Stay With World-Class Facilities At <br /> Pine Hill Resort</h1>
                    <p className="breadcrumb">
                        <span className='me-3'>Home</span> / <span className='ms-3'>OUR FACILITIES</span>
                    </p>
                </div>
            </section>
            <section className="highlights_resort">
                <div className="container">
                    <div className="d-flex detail_sec">
                        <div className="detail_side left_head col-lg-5">
                            <h3>
                                Highlights The Quality Of The <br /> Amenities At Pine Hill Resort.
                            </h3>
                            <p>
                                From luxurious rooms and rejuvenating spa services to world-class dining and
                                recreational activities, our facilities are designed to provide you with a memorable
                                and relaxing stay.
                            </p>
                            <p>
                                Explore each facility to see how we blend comfort, elegance, and convenience to
                                enhance your experience.
                            </p>
                        </div>
                        <div className="img_side col-lg-7">
                            <div className="image-layer first"></div>
                            <div className="image-layer second"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='seprate_text pt-5'>
                <div className='container'>
                    <div className='right_head text-center'>
                        <p>Our world-class amenities are designed to cater to every need and desire,<br /> ensuring your stay is nothing short of extraordinary. Whether you’re here to <br />relax, rejuvenate, or indulge, our resort offers a diverse range of top-notch <br />facilities to enhance your getaway.</p>
                    </div>
                </div>
            </section>
            <section className="container Amenities pb-0">
                <div className="row">
                    <div className="col-lg-8 Amenities_box">
                        <div className="row g-3 mb-3">

                            <div className="col-lg-7">
                                <div className="Amenities_box_data">
                                    <div>
                                        <div className="Amenities_icon"></div>
                                        <h1>PRIVATE POOL</h1>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-5">
                                <div className="Amenities_box_data">
                                    <div>
                                        <div className="Amenities_icon"></div>
                                        <h1>RESTAURANT</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row g-3 mb-3">
                            <div className="col-lg-5">
                                <div className="Amenities_box_data">
                                    <div>
                                        <div className="Amenities_icon"></div>
                                        <h1>SPA SERVICE</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="Amenities_box_data">
                                    <div>
                                        <div className="Amenities_icon"></div>
                                        <h1>QUALITY GYM</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4" style={{ paddingLeft: '5px' }}>
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
            <section className="container amenities_box2">
                <div className="row">
                    <div className="col-lg-12 Amenities_box">
                        <div className="row g-3 mb-3">

                            <div className="col-lg-8">
                                <div className="Amenities_box_data">
                                    <div>
                                        <div className="Amenities_icon"></div>
                                        <h1>BEACHFRONT ACCESS</h1>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="Amenities_box_data">
                                    <div>
                                        <div className="Amenities_icon"></div>
                                        <h1>FREE INTERNENT</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row g-3 mb-3">
                            <div className="col-lg-4">
                                <div className="Amenities_box_data">
                                    <div>
                                        <div className="Amenities_icon"></div>
                                        <h1>LAUNDRY SERVICE</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="Amenities_box_data">
                                    <div>
                                        <div className="Amenities_icon"></div>
                                        <h1>KIDS' CLUB</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='detail_palce'>
                <div className='container'>
                    <div className='heading_part d-flex'>
                        <div className='left_head col-lg-7'>
                            <h3>Awesome Place And What Improves It,<br /> Explore The Radiance. An Uncommon Place <br /> Where Nature And Man Exist In Agreement</h3>
                        </div>
                        <div className='right_head col-lg-5'>
                            <p>At Pine Hill Resort, every corner reflects our commitment to blending the splendor of nature with luxurious, thoughtfully designed spaces.</p>
                            <p>From serene landscapes to expertly crafted amenities, experience a setting that celebrates the seamless coexistence of elegance and the  environment. Embrace the radiance of a truly exceptional retreat where every detail enhances the tranquil balance between the natural world and sophisticated comfort.</p>
                        </div>
                    </div>
                    <div className='boxes_area'>
                        <div className='d-flex boxes_gap row'>
                            <div className='boxes col-lg-3'>
                            </div>
                            <div className='boxes col-lg-3'>
                            </div>
                            <div className='boxes col-lg-3'>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='detail_resort mt-4'>
                <div className="container main_part">
                    {/* Left Section */}
                    <div className="left-section">
                        <img src={white_logo} alt='logo' className='logo_sec' />
                        <div className="feature">
                            <h4>FIVE STARS RESORT</h4>
                            <p>Unmatched luxury and elegance throughout.</p>
                        </div>
                        <div className="feature">
                            <h4>FIVE-STAR FACILITIES</h4>
                            <p>Top-tier amenities for ultimate comfort.</p>
                        </div>
                        <div className="feature">
                            <h4>GREAT CUSTOMER SERVICE</h4>
                            <p>Exceptional care and personalized attention guaranteed.</p>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="right-section">
                        <img src={ph_logo} />
                        <h2>SPACIOUS <br /> STAYS AWAY FROM<br /> THE CITY</h2>
                        <hr className="styled-hr" />
                        <p>
                            Indulge in breathtaking views of<br /> Table Mountain and our harbor from<br />
                            Cape Town's largest hotel rooms and <br />suites.
                        </p>
                        <button>LEARN MORE</button>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Facilities