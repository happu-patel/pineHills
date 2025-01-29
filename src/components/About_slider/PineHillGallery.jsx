import React from "react";
import Slider from "react-slick";
import './pinehill.css';
import ornament_icon from '../../assets/image/ornament.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PineHillGallery = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1, // Show 3 slides at a time
        slidesToScroll: 1, // Scroll one slide at a time
        arrows: false,
        centerMode: true,
        centerPadding: "400px",
        responsive: [
            {
                breakpoint: 1199, // For screens smaller than 1024px
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    centerPadding: "0px",
                    dots: true,
                },
            },
            {
                breakpoint: 1024, // For screens smaller than 1024px
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    centerPadding: "0px",
                    dots: true,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    centerPadding: "0px",
                    dots: false,
                }
            },
            {
                breakpoint: 768, // For screens smaller than 768px
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "0px",
                },
            },
        ],
    };

    return (
        <div className="about_slide">
            <div className="container text-center">
                <div className='title_part p-0'>
                    <img src={ornament_icon} />
                    <span className="section-title px-2">
                        PINE HILL GALLERISES
                    </span>
                    <img src={ornament_icon} />
                </div>
                <h2 className="main-title">Captured Moments With Pine Hill <br /> Through Our Lens</h2>
                <p className="description">
                    rom breathtaking landscapes to intimate gatherings, explore the essence of Pine Hill and envision <br /> your own extraordinary escape.
                </p>
            </div>
            <Slider {...settings} className="slider-container mt-4">
                <div className="slider-item slide1_img">
                    <div className="slider-content">
                    </div>
                </div>
                <div className="slider-item slide2_img">
                    <div className="slider-content">

                    </div>
                </div>
                <div className="slider-item slide3_img">
                    <div className="slider-content">

                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default PineHillGallery;
