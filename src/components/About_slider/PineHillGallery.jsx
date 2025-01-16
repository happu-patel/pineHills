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
        slidesToShow: 3, // Show 3 slides at a time
        slidesToScroll: 1, // Scroll one slide at a time
        arrows: false,
        responsive: [
            {
                breakpoint: 1024, // For screens smaller than 1024px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768, // For screens smaller than 768px
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
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
                    rom breathtaking landscapes to intimate gatherings, explore the essence of Pine Hill and envision <br/> your own extraordinary escape.
                </p>
            </div>
            <Slider {...settings} className="slider-container mt-4">
                <div className="slider-item">
                    <div className="slider-content">
                        <p>Slide 1</p>
                    </div>
                </div>
                <div className="slider-item">
                    <div className="slider-content">
                        <p>Slide 2</p>
                    </div>
                </div>
                <div className="slider-item">
                    <div className="slider-content">
                        <p>Slide 3</p>
                    </div>
                </div>
            </Slider>
        </>
    );
};

export default PineHillGallery;
