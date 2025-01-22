import React, { useState } from 'react';
import './faq.css';
import squre_icon from '../../assets/image/squre.svg';
import ornament_icon from '../../assets/image/ornament.svg'
import arrow_down from '../../assets/image/arrow_down.svg'
import arrow_right from '../../assets/image/arrow_right.svg'
import testimonial_icon from '../../assets/image/testimonial_icon.svg'
import architure from '../../assets/image/architure.svg'
import amenities from '../../assets/image/amenities.svg'
import best_price from '../../assets/image/best_price.svg'
import service from '../../assets/image/service.svg'
import TestimonialSection from '../../components/Testimonial/TestimonialSection';
import pool from '../../assets/image/pool.svg'
import restaurant from '../../assets/image/restaurant.svg'
import bathtub from '../../assets/image/bathtub.svg'
import gym from '../../assets/image/gym.svg'

const Faq = () => {
    // State to manage the active FAQ
    const [activeFaq, setActiveFaq] = useState('');

    const toggleFaq = (faqId) => {
        setActiveFaq(activeFaq === faqId ? null : faqId);
    };

    return (
        <>
            <section className="contact_pine">
                <div className="container text-white">
                    <div className='title_part p-0'>
                        <img src={squre_icon} />
                        <span className="section-title px-2">
                            FREQUENTLY ASKED QUESTIONS
                        </span>
                        <img src={squre_icon} />
                    </div>
                    <h1 className="contact_head">Everything You Need <br />to Know for a Perfect Stay</h1>
                    <p className="breadcrumb">
                        <span className='me-3'>Home</span> / <span className='ms-3'>FAQ</span>
                    </p>
                </div>
            </section>
            <section className="faq-section">
                <div className="container">
                    <div className="text-center mb-5">
                        <div className='title_part p-0'>
                            <img src={ornament_icon} />
                            <span className="section-title px-2">
                                YOUR QUESTIONS, ANSWERED
                            </span>
                            <img src={ornament_icon} />
                        </div>
                        <h2 className="main-title">Pine Hill Resort Book</h2>
                        <p className="description">
                            Whether you're curious about our amenities, booking process, or special services, you'll <br />
                            find everything you need right here.
                        </p>
                    </div>
                </div>
                <section className='faq_area'>
                    <div className="container">
                        <div className="row faq_row">
                            {/* Left Column */}
                            <div className="col-lg-6">
                                <div className="faq-card">
                                    <h3>General Information FAQ</h3>
                                    <p>
                                        Find answers to the most common questions about Pine Hill Resort. Whether you're
                                        curious about our facilities, policies, or general inquiries, this section covers
                                        everything you need to know.
                                    </p>
                                    <hr className="styled-hr" />
                                    {[
                                        {
                                            id: 'faq1',
                                            question: 'What amenities are included in the rooms?',
                                            answer:
                                                'Our rooms come equipped with screen TV, complimentary WiFi, a minibar, luxury toiletries, and a private balcony. Each room includes a coffee maker and a safe for your valuables.',
                                        },
                                        {
                                            id: 'faq2',
                                            question: 'Do you offer airport transportation?',
                                            answer: 'Yes, we offer airport transportation for our guests upon request.',
                                        },
                                        {
                                            id: 'faq3',
                                            question: 'Are pets allowed at Pine Hill Resort?',
                                            answer: 'Pets are allowed in designated areas of the resort. Restrictions may apply.',
                                        },
                                        {
                                            id: 'faq4',
                                            question: 'Is parking available at the resort?',
                                            answer: 'yes',
                                        },
                                        {
                                            id: 'faq5',
                                            question: 'What time is check-in and check-out?',
                                            answer: ' late afternoon, around 3:00 PM to 4:00 PM, and check-out times are in the morning, usually around 11:00 AM',
                                        }
                                    ].map((item) => (
                                        <div className="faq-item" key={item.id}>
                                            <button
                                                className={`faq-question ${activeFaq === item.id ? 'active' : ''}`}
                                                onClick={() => toggleFaq(item.id)}
                                            >
                                                {item.question}
                                                <span className="icon">
                                                    {activeFaq === item.id ? <img src={arrow_down} alt='arrows' /> : <img src={arrow_right} alt='arrows' />}
                                                </span>
                                            </button>
                                            {activeFaq === item.id && <div className="faq-answer">{item.answer}</div>}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="col-lg-6">
                                <div className="faq-card">
                                    <h3>Payment And Booking FAQ</h3>
                                    <p>
                                        Get the details you need about booking your stay and payment options at Pine Hill
                                        Resort. This section addresses common questions regarding reservations,
                                        cancellations, and payment methods.
                                    </p>
                                    <hr className="styled-hr" />
                                    {[
                                        {
                                            id: 'faq6',
                                            question: 'What payment methods are accepted?',
                                            answer: 'We accept all major credit cards, debit cards, and online payment methods.',
                                        },
                                        {
                                            id: 'faq7',
                                            question: 'Is a deposit required when booking?',
                                            answer:
                                                'A small deposit is required to secure your booking. This deposit will be deducted from the final bill.',
                                        },
                                        {
                                            id: 'faq8',
                                            question: 'Can I modify or cancel my reservation?',
                                            answer:
                                                'Yes, reservations can be modified or canceled up to 48 hours before your check-in date without penalty. After this period, a cancellation fee may apply.',
                                        },
                                        {
                                            id: 'faq9',
                                            question: 'What is the resort’s cancellation policy?',
                                            answer: 'The resort allows free cancellation up to 48 hours before check-in. After that, a cancellation fee may apply.'
                                        },
                                        {
                                            id: 'faq10',
                                            question: 'Do you offer any packages or discounts?',
                                            answer: 'Yes, we offer seasonal packages and special discounts for extended stays, group bookings, and early reservations. Please check our website or contact us directly for the latest offers'
                                        }
                                    ].map((item) => (
                                        <div className="faq-item" key={item.id}>
                                            <button
                                                className={`faq-question ${activeFaq === item.id ? 'active' : ''}`}
                                                onClick={() => toggleFaq(item.id)}
                                            >
                                                {item.question}
                                                <span className="icon">
                                                    {activeFaq === item.id ? <img src={arrow_down} alt='arrows' /> : <img src={arrow_right} alt='arrows' />}
                                                </span>
                                            </button>
                                            {activeFaq === item.id && <div className="faq-answer">{item.answer}</div>}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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
                                { title: 'Beautiful Architecture', text: 'Stunning designs that harmonize with nature, combining elegance and functionality.', icon: architure },
                                { title: 'Exclusive Amenities', text: 'Access private pools, spa services, and gourmet dining for a truly luxurious stay.', icon: amenities },
                                { title: 'Best Price Guarantee', text: 'Get the highest quality stay at the most competitive rates with our best price guarantee.', icon: best_price },
                                { title: 'Unparalleled Service', text: 'Receive personalized, attentive service for an effortless and memorable experience.', icon: service }
                            ].map((feature, index) => (
                                <div key={index} className="feature-item d-flex align-items-start">

                                    <div className="feature-icon">
                                        <img src={feature.icon} alt={`${feature.title} Icon`} />
                                    </div>

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
            <TestimonialSection />
        </>
    );
};

export default Faq;
