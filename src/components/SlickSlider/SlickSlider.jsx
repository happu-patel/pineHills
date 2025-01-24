import React from 'react';
import Slider from 'react-slick';
import './SlickSlider.css'; // Custom CSS file (optional)
import golder_sunset from '../../assets/image/golder_sunset.jpg'

const SlickSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "170px",
    arrows: false, // Set to true if you want arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "30px", // Increase padding for larger screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "20px", // Adjust for tablets
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "10px", // Adjust for mobile
        },
      },
    ],
  };

  const slides = [
    {
      id: 1,
      text: 'Misty Hills Haven',
      description:
        'Nestled in the tranquil mist of rolling hills, this villa provides a peaceful \n retreat with panoramic vistas.',
      className: 'misty-hills-slide'
    },
    {
      id: 2,
      text: 'Serene Lakeside Escape',
      description:
        'Experience ultimate relaxation at this lakeside retreat with breathtaking \n views and serene surroundings.',
      className: 'lakeside-slide'
    },
    {
      id: 3,
      text: 'Golden Sunset Retreat',
      description:
        'Enjoy the magical sunsets and warm ambiance at this luxurious getaway destination.',
      className: 'sunset-slide'
    },
  ];

  return (
    <section className='home_slide'>
      <div className="slider-container">
        <Slider {...settings}>
          {slides.map((slide) => (
            <div
              key={slide.id}
              className={slide.className}
              style={{
                height: '500px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'end',
                alignItems: 'center',
                textAlign: 'center',
                color: '#fff',
                padding: '20px',
              }}
            >
              <h2>{slide.text}</h2>
              <p>{slide.description}</p>
              <button>
                View Villa
              </button>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SlickSlider;
