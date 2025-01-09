import React from 'react'
import './home.css'
import squre_icon from '../assets/image/squre.svg'
import BookingSection from '../components/Booking/BookingSection'

const Home = () => {
    return (
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
    )
}

export default Home