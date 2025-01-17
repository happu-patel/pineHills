import React from 'react';
import Slider from 'react-slick';
import './SlickSlider.css'; // Custom CSS file (optional)

const SlickSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "170px",
    arrows: false, // Set to true if you want arrows

  };

  const slides = [
    {
      id: 1,
      text: 'Misty Hills Haven',
      description:
        'Nestled in the tranquil mist of rolling hills, this villa provides a peaceful retreat with panoramic vistas.',
      bgColor: '#808080', // Gray background
    },
    {
      id: 2,
      text: 'Serene Lakeside Escape',
      description:
        'Experience ultimate relaxation at this lakeside retreat with breathtaking views and serene surroundings.',
      bgColor: '#4a90e2', // Blue background
    },
    {
      id: 3,
      text: 'Golden Sunset Retreat',
      description:
        'Enjoy the magical sunsets and warm ambiance at this luxurious getaway destination.',
      bgColor: '#f5a623', // Golden orange background
    },
  ];

  return (
    <section className='home_slide'>
      <div className="slider-container">
        <Slider {...settings}>
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="slider-item"
              style={{
                backgroundColor: '#666',
                height: '500px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                color: '#fff',
                padding: '20px',
              }}
            >
              <h2 style={{ fontSize: '2rem', margin: '10px 0' }}>{slide.text}</h2>
              <p style={{ fontSize: '1.2rem', margin: '10px 0' }}>{slide.description}</p>
              <button
                style={{
                  marginTop: '20px',
                  padding: '10px 20px',
                  border: '1px solid #fff',
                  backgroundColor: '#666',
                  color: '#fff',
                  cursor: 'pointer',
                  fontSize: '1rem',
                }}
              >
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
