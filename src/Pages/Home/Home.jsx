import React from 'react'
import './home.css'
import squre_icon from '../../assets/image/squre.svg'
import BookingSection from '../../components/Booking/BookingSection'
import resort_img from '../../assets/image/resort_img.jpg'
import resort_img1 from '../../assets/image/resort_img1.jpg'
import play_circle from '../../assets/image/PlayCircle.svg'
import ornament_icon from '../../assets/image/ornament.svg'
import white_logo from '../../assets/image/footer_logo.svg'
import ph_logo from '../../assets/image/PH.png'
import testimonial_icon from '../../assets/image/testimonial_icon.svg'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SlickSlider from '../../components/SlickSlider/SlickSlider'

const Home = () => {
    return (
        <>
            <div className="banner-wrapper">
                <section className='home-banner'>
                    <div className="banner-content text-center">
                        <div className="reconnect-text">
                            <img src={squre_icon} alt='squre' /> RECONNECT WITH NATURE <img src={squre_icon} alt='squre' />
                        </div>
                        <h1 className="luxury-title">
                            Luxury Hotel<br />
                            Upper Westside NYC
                        </h1>
                        <p className="banner-subtitle">
                            ESCAPE TO PINE HILLS RESORT WHERE LUXURY MEETS NATURE'S MAJESTY
                        </p>
                        <button className="view-facilities-btn">
                            VIEW FACILITIES
                        </button>
                    </div>
                    <div className="container">
                        <div className="booking-section">
                            <BookingSection />
                        </div>
                    </div>
                </section>
            </div>
            <section className='our_info'>
                <div className="container">
                    <div className="row gx-5">
                        {/* Left Column */}
                        <div className="col-md-6">
                            <div className="video-box position-relative">
                                {/* <h1 className="background-text">OUR STORY</h1> */}
                                <img src={resort_img} alt="Video Thumbnail"
                                    className="img-fluid" />
                                <div className="play-icon">
                                    <img src={play_circle} alt="" />
                                </div>
                            </div>
                            <div className='title_part'>
                                <img src={ornament_icon} />
                                <span className="section-title px-2">
                                    Our Legacy
                                </span>
                                <img src={ornament_icon} />
                            </div>
                            <h2>From Humble Beginnings To A Premier Mountain Retreat</h2>
                            <p>
                                Pine Hills Resort started as a small family-owned getaway nestled in the heart of the mountains. Over the years, we’ve grown into a luxurious resort, while staying true to our roots and the natural beauty that surrounds us.
                            </p>
                            <div className="stats d-flex justify-content-between">
                                {/* Stat 1 */}
                                <div className="stat-box">
                                    <div className="icon-box">
                                        {/* <img src="/path-to-your-image/icon1.png" alt="Icon 1" /> */}
                                    </div>
                                    <div className="text-box d-flex flex-column">
                                        <h3>150 K+</h3>
                                        <p>Guest Served</p>
                                    </div>
                                </div>

                                {/* Stat 2 */}
                                <div className="stat-box">
                                    <div className="icon-box">
                                        {/* <img src="/path-to-your-image/icon2.png" alt="Icon 2" /> */}
                                    </div>
                                    <div className="text-box d-flex flex-column">
                                        <h3>25</h3>
                                        <p>Villas & Resorts</p>
                                    </div>
                                </div>

                                {/* Stat 3 */}
                                <div className="stat-box">
                                    <div className="icon-box">
                                        {/* <img src="/path-to-your-image/icon3.png" alt="Icon 3" /> */}
                                    </div>
                                    <div className="text-box d-flex flex-column">
                                        <h3>12+</h3>
                                        <p>Locations</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Right Column */}
                        <div className="col-md-6 right_col">
                            <div className='title_part'>
                                <img src={ornament_icon} />
                                <span className="section-title px-2">
                                    Who we are
                                </span>
                                <img src={ornament_icon} />
                            </div>
                            <h2>Gateway To Tranquility And Luxury In The Mountains</h2>
                            <p>
                                Pine Hills Resort is more than just a place to stay; it’s an escape into nature’s embrace, where comfort meets adventure. Nestled in the breathtaking mountains, we offer a unique combination of luxury accommodations, exceptional service, and a variety of activities for every traveler.
                            </p>
                            <div className="image-box">
                                <img src={resort_img1} alt="Video Thumbnail"
                                    className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="lodging container">
                <div className='title_part text-center'>
                    <img src={ornament_icon} />
                    <span className="section-title px-2">
                        MORE WAYS TO STAY
                    </span>
                    <img src={ornament_icon} />
                </div>
                <h2 className="main-title text-center">Expand Your Lodging Choices</h2>
                <p className="description text-center">
                    Whether you're seeking the cozy charm of a rustic cabin, the elegance of a
                    luxury suite, or the <br /> spacious comfort of a family villa, we have the
                    perfect lodging option for you.
                </p>
                <div className="options-container">
                    <div className="option-card">
                        <div className="icon-placeholder"></div>
                        <img src={ornament_icon} className='icon_orn' />
                        <h4 className="option-title">HOTEL & RESORT</h4>
                        <p className="option-description">
                            Enjoy top-tier comfort and service in premium accommodations.
                        </p>
                    </div>
                    <div className="option-card">
                        <div className="icon-placeholder"></div>
                        <img src={ornament_icon} className='icon_orn' />
                        <h4 className="option-title">HOMES & VILLAS</h4>
                        <p className="option-description">
                            Relax in spacious, private homes perfect for families and groups.
                        </p>
                    </div>
                    <div className="option-card">
                        <div className="icon-placeholder"></div>
                        <img src={ornament_icon} className='icon_orn' />
                        <h4 className="option-title">INCLUSIVE RESORT</h4>
                        <p className="option-description">
                            All-inclusive stays with everything you need for a stress-free
                            getaway.
                        </p>
                    </div>
                    <div className="option-card">
                        <div className="icon-placeholder"></div>
                        <img src={ornament_icon} className='icon_orn' />
                        <h4 className="option-title">HOTEL & TRAVEL</h4>
                        <p className="option-description">
                            Convenient packages combining your hotel stay with travel options.
                        </p>
                    </div>
                </div>
            </div>
            <section className='detail_resort'>
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

            <section className="escape_villa">
                <div className="container">
                    <div className="hero-container d-flex">
                        <div className="col-md-8">
                            <div className="title_part p-0">
                                <img src={ornament_icon} alt="Ornament Icon" />
                                <span className="section-title px-2">ESCAPE TO LUXURY VILLAS</span>
                                <img src={ornament_icon} alt="Ornament Icon" />
                            </div>
                            <h2 className="main-title">
                                Explore Our Best Villas For An Unforgettable Vacation
                            </h2>
                            <div className="des_btn">
                                <p className="description">
                                    Experience the perfect blend of privacy and comfort in our exquisite villas. Each villa offers spacious living areas, modern amenities, and breathtaking surroundings, making it an ideal retreat for families.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 text-end d-flex align-items-end justify-content-end">
                            <button className="discover_btn">DISCOVER MORE</button>
                        </div>
                    </div>
                </div>
            </section>
            <div className='container'>
                <SlickSlider />
            </div>
            {/* chhose us */}
            <div className="container my-5">
                <div className="row gap-5">
                    {/* Left Column */}
                    <div className="col-md-5 col-lg-5 left_side">
                        <div className='title_part p-0'>
                            <img src={ornament_icon} />
                            <span className="section-title px-2">
                                WHY CHOOSE US
                            </span>
                            <img src={ornament_icon} />
                        </div>
                        <h2 className="main-title">Reasons To Make Pine Hills As Place Tranquility</h2>
                        <p className="description">
                            From our luxurious accommodations to our personalized services, we ensure every detail is tailored to your needs.
                        </p>
                        <div className="why-choose-us-features">
                            {[
                                { title: 'Beautiful Architecture', text: 'Stunning designs that harmonize with nature, combining elegance and functionality.' },
                                { title: 'Exclusive Amenities', text: 'Access private pools, spa services, and gourmet dining for a truly luxurious stay.' },
                                { title: 'Best Price Guarantee', text: 'Get the highest quality stay at the most competitive rates with our best price guarantee.' },
                                { title: 'Unparalleled Service', text: 'Receive personalized, attentive service for an effortless and memorable experience.' }
                            ].map((feature, index) => (
                                <div key={index} className="feature-item d-flex align-items-start">
                                    <div className="feature-icon"></div>
                                    <div className="feature-content">
                                        <h5>{feature.title}</h5>
                                        <p>{feature.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="col-md-7 col-lg-7 position-relative right_side">
                        <div className="testimonial-section">
                            <div className="testimonial-container">
                                {/* Left image section */}
                                <div className="image-left"></div>

                                {/* Right content section */}
                                <div className="content-right">
                                    <div className="testimonial-card">
                                        <div className="author-info">
                                            <h3 className="author-name">ADAM JOHNSON</h3>
                                            <p className="author-title">CEO PINE HILLS</p>
                                        </div>
                                        <div className="testimonial-text">
                                            <p>Pine Hills Resort started as a small family-owned getaway nestled in the heart of the mountains. Over the years</p>
                                            <span className="quote-mark">“</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <section className="container Amenities">
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
                                                    <div class="black_box"></div>
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
                                                    <div class="black_box"></div>
                                                </div>
                                                <div class="col-lg-10 box_data">
                                                    <h5>wedding & romantic moments</h5>
                                                    <p>Create unforgettable memories with our elegant venues and personalized services.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="service_data_box">
                                            <div class="row">
                                                <div class="col-lg-2 d-flex justify-content-center align-items-center">
                                                    <div class="black_box"></div>
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

            <div className='testimonial-sec'>
                <div className='container'>
                    <div className='title_part text-center'>
                        <img src={ornament_icon} />
                        <span className="section-title px-2">
                            Testimonials
                        </span>
                        <img src={ornament_icon} />
                    </div>
                    <h2 className="main-title text-center">They Were happy with our service</h2>
                    <p className='description text-center'>Read firsthand accounts of unforgettable experiences, exceptional service, and unparalleled comfort.<br /> Our testimonials highlight the unique aspects of our accommodations and the memorable moments.</p>
                    <div className='testimonial_part'>
                        <div className="testimonial-box">
                            <div className="content">
                                <div className="content_title">
                                    <h3>Emily Johnson</h3>
                                    <p className='title'>Marketing Manager. Rui Company</p>
                                </div>

                                <div className="quote-container">
                                    <span className="quote-mark"><img src={testimonial_icon} /></span>
                                    <p className="quote-text">
                                        Staying at the Oceanfront Paradise Villa was an absolute dream. The view was breathtaking, and the private pool was the perfect spot.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-box">
                            <div className="content">
                                <div className="content_title">
                                    <h3>David Lee</h3>
                                    <p className='title'>Financial Analyst, Rui Company</p>
                                </div>
                                <div className="quote-container">
                                    <span className="quote-mark"><img src={testimonial_icon} /></span>
                                    <p className="quote-text">
                                        Our experience at the Highland Peaks Retreat exceeded all expectations. The serene mountain views and elegant design provided the perfect.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="news-section">
                <div class="container py-5">
                    <div class="text-center mb-5">
                        <small class="title"><img src={ornament_icon} /><span className="section-title px-2">
                            OUR News
                        </span><img src={ornament_icon} /></small>
                        <h2 class="news_head">Keep Updated With <br /> The Latest News And Trends</h2>
                        <p class=" description">
                            Stay informed with our latest news and updates. From exciting new resort openings and special offers <br />
                            to important announcements and upcoming events.
                        </p>
                    </div>
                    <div class="row g-4">
                        <div class="col-md-4">
                            <div class="img_div">
                                <img src={resort_img} class="card-img-top" alt="Luxury Villas" />
                                <div class="card-body text-center">
                                    <h5 class="card-title">Pine Hills Unveils New Luxury Villas With Stunning Mountain Views</h5>
                                    <p class="card-text text-muted">July 22, 2024</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="img_div">
                                <img src={resort_img}
                                    class="card-img-top" alt="Special Offer" />
                                <div class="card-body text-center">
                                    <h5 class="card-title">Special Offer: Save 20% On All Bookings At Pine Hills This Summer!</h5>
                                    <p class="card-text text-muted">July 20, 2024</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="img_div">
                                <img src={resort_img} class="card-img-top" alt="Wellness Retreat" />
                                <div class="card-body text-center">
                                    <h5 class="card-title">Pine Hills Announces Exciting New Wellness Retreat Program</h5>
                                    <p class="card-text text-muted">July 25, 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Home