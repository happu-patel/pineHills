import React from 'react'
import './home.css'
import squre_icon from '../assets/image/squre.svg'
import BookingSection from '../components/Booking/BookingSection'
import resort_img from '../assets/image/resort_img.jpg'
import resort_img1 from '../assets/image/resort_img1.jpg'
import play_circle from '../assets/image/PlayCircle.svg'
import ornament_icon from '../assets/image/ornament.svg'

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
            <div className="container  our_info">
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

        </>
    )
}

export default Home