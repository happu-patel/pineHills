import React from 'react'
import './testimonial.css'
import squre_icon from '../../assets/image/squre.svg';
import ornament_icon from '../../assets/image/ornament.svg'
import markicon from '../../assets/image/testimonal_pg.svg';
import testimonial_icon from '../../assets/image/testimonial_icon.svg'

const testimonialsData = [
    {
        name: "Emily Carter",
        title: "Graphic Designer",
        text: "Pine Hill Resort is a hidden gem! The views are stunning, and the staff goes above and beyond to ensure a memorable stay. The Premium Retreat Plan was worth every penny!.",
        image: markicon
    },
    {
        name: "James Miller",
        title: "Software Engineer",
        text: "I’ve stayed at many resorts, but Pine Hill stands out for its perfect blend of nature and luxury. The tranquility of the surroundings combined with top-notch amenities experience.",
        image: markicon

    },
    {
        name: "Sophia Reed",
        title: "Travel Photographer",
        text: "From the moment we arrived, everything was perfect. The villa was beautifully decorated, and the private pool was a dream come true. The Premium Retreat Plan was worth every penny!",
        image: markicon

    },
    {
        name: "Olivia Parker",
        title: "Interior Designer",
        text: "The attention to detail at Pine Hill Resort is incredible. From the elegant interiors to the breathtaking landscapes, every aspect of our stay was thoughtfully curated.",
        image: markicon

    },
    {
        name: "Liam Davis",
        title: "Financial Advisor",
        text: "Our stay at Pine Hill was nothing short of extraordinary. The service was impeccable, and the resort’s amenities were top-tier. Highly recommend the Luxury Indulgence Plan!",
        image: markicon

    },
    {
        name: "Ava Mitchell",
        title: "Event Planner",
        text: "Pine Hill Resort was the perfect escape. The gardens are stunning, and the Spa is a must-visit. I left feeling completely rejuvenated. Highly recommend the Luxury Indulgence Plan!",
        image: markicon

    },
    {
        name: "Ethan Brooks",
        title: "Architect",
        text: "As someone who appreciates design, I was blown away by the architecture and layout of Pine Hill Resort. It’s clear that every aspect has been carefully considered.",
        image: markicon

    },
    {
        name: "Mia Collins",
        title: "Chef",
        text: "Pine Hill Resort is a paradise for nature lovers. The surrounding scenery is breathtaking, and the resort itself is a peaceful retreat from the everyday  hustle.",
        image: markicon

    },
    {
        name: "Jessica Thompson",
        title: "Travel Blogger",
        text: "The dining experience at Pine Hill Resort was phenomenal. The culinary team delivered an exquisite mix of local flavors and gourmet dishes. Can’t wait to return!",
        image: markicon

    },
];
const Testimonial = () => {

    return (
        <>
            <section className="contact_pine">
                <div className="container text-white">
                    <div className='title_part p-0'>
                        <img src={squre_icon} />
                        <span className="section-title px-2">
                            PINE HILL TESTIMONIAL
                        </span>
                        <img src={squre_icon} />
                    </div>
                    <h1 className="contact_head">Authentic Guest Experiences And <br />Reviews from Our Visitors</h1>
                    <p className="breadcrumb">
                        <span className='me-3'>HOME</span> / <span className='ms-3'>TESTIMONIAL</span>
                    </p>
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
                    <div className='testimonial_part faq_testimonial'>
                        <div className="testimonial-box">
                            <div className="content">
                                <div className="content_title">
                                    <h3>Emily Johnson</h3>
                                    <p className='title'>Marketing Manager. Rui Company</p>
                                </div>

                                <div className="quote-container">
                                    <span className="quote-mark"><img src={markicon} /></span>
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
                                    <span className="quote-mark"><img src={markicon} /></span>
                                    <p className="quote-text">
                                        Our experience at the Highland Peaks Retreat exceeded all expectations. The serene mountain views and elegant design provided the perfect.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className='grey_part'></section>
            <section className='testimonial_area'>
                <div className="container my-5">
                    <div className="row">
                        {testimonialsData.map((testimonial, index) => (
                            <div className="col-md-4 mb-4" key={index}>
                                <div className="card text-center">
                                    <div className="avatar-container">
                                        <div className="avatar-circle">
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="avatar-img"
                                            />
                                        </div>
                                    </div>
                                    <div className="card-body">

                                        <h5 className="card-title">{testimonial.name}</h5>
                                        <p className="card-subtitle">{testimonial.title}</p>
                                        <img src={ornament_icon} alt='ornament_icon' />
                                        <p className="card-text">{testimonial.text}</p>
                                        <hr className='styled-hr' />
                                    </div>
                                </div>
                            </div>
                        ))}
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
        </>
    )
}

export default Testimonial