import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './testimonialsec.css'; // Ensure this file contains your styles
import ornament_icon from '../../assets/image/ornament.svg'
import testimonial_icon from '../../assets/image/testimonal_pg.svg' // Ensure you have this import

const TestimonialSection = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [
            {
                breakpoint: 1467,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                    arrows: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                    arrows: true,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    arrows: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    arrows: true,
                }
            }
        ]
    };

    const testimonials = [
        {
            name: "Emily Johnson",
            title: "Marketing Manager, Rui Company",
            quote: "Staying at the Oceanfront Paradise Villa was an absolute dream. The view was \n breathtaking, and the private pool was the perfect spot."
        },
        {
            name: "David Lee",
            title: "Financial Analyst, Rui Company",
            quote: "Our experience at the Highland Peaks Retreat exceeded all expectations. The serene mountain views and elegant design provided the perfect."
        },
        {
            name: "Sarah Williams",
            title: "Creative Director",
            quote: "Staying at the Oceanfront Paradise Villa was an absolute dream. The view was \n breathtaking, and the private pool was the perfect spot."
        }
    ];

    return (
        <div className="testimonial-section1">
            <div className="testimonial-container1">
                <div className="title_part text-center">
                    <img src={ornament_icon} alt="Ornament Icon" />
                    <span className="section-title px-2">Testimonials</span>
                    <img src={ornament_icon} alt="Ornament Icon" />
                </div>
                <h2 className="main-title text-center">
                    They Were happy with our service
                </h2>
                <p className="description text-center">
                    Read firsthand accounts of unforgettable experiences, exceptional
                    service, and unparalleled comfort.<br />
                    Our testimonials highlight the unique aspects of our accommodations
                    and the memorable moments.
                </p>

                <div className="testimonial-slider-part">
                    <div className="slider-container1 container">
                        <Slider {...settings}>
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="testimonial-box">
                                    <div className="content">
                                        <div className="content_title">
                                            <h3>{testimonial.name}</h3>
                                            <p className="title">{testimonial.title}</p>
                                        </div>
                                        <div className="quote-container">
                                            <span className="quote-mark">
                                                <img src={testimonial_icon} alt="Quote Icon" />
                                            </span>
                                            <p className="quote-text">{testimonial.quote}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;
