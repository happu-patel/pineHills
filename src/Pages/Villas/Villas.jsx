import React from 'react'
import './villa.css'
import squre_icon from '../../assets/image/squre.svg';
import SlickSlider from '../../components/SlickSlider/SlickSlider';
import ornament_icon from '../../assets/image/ornament.svg'
import testimonial_icon from '../../assets/image/testimonial_icon.svg'
import white_logo from '../../assets/image/footer_logo.svg'
import ph_logo from '../../assets/image/PH.png'
import TestimonialSection from '../../components/Testimonial/TestimonialSection';
import events from '../../assets/image/event.svg'
import wedding from '../../assets/image/wedding.svg'
import family from '../../assets/image/family.svg'
import villa_img1 from '../../assets/image/villas_1.jpg'
import villa_img2 from '../../assets/image/villas_2.jpg'
import villa_img3 from '../../assets/image/villas_3.jpg'
import villa_img4 from '../../assets/image/villas_4.jpg'
import villa_img5 from '../../assets/image/villas_5.jpg'
import villa_img6 from '../../assets/image/villas_6.jpg'
import villa_img7 from '../../assets/image/villas_7.jpg'
import villa_img8 from '../../assets/image/villas_8.jpg'

const villas = [
    {
        name: "The Summit Villa",
        description: "Nestled in the tranquil midst of rolling hills, this villa provides a peaceful retreat with panoramic vistas.",
        image: villa_img1
    },
    {
        name: "The Serenity Haven",
        description: "Nestled in the tranquil midst of rolling hills, this villa provides a peaceful retreat with panoramic vistas.",
        image: villa_img2
    },
    {
        name: "The Luxe Pavilion",
        description: "Nestled in the tranquil midst of rolling hills, this villa provides a peaceful retreat with panoramic vistas.",
        image: villa_img3
    },
    {
        name: "The Tranquil Hideaway",
        description: "Nestled in the tranquil midst of rolling hills, this villa provides a peaceful retreat with panoramic vistas.",
        image: villa_img4
    },
    {
        name: "The Elegance Residence",
        description: "Nestled in the tranquil midst of rolling hills, this villa provides a peaceful retreat with panoramic vistas.",
        image: villa_img5

    },
    {
        name: "The Horizon Villa",
        description: "Nestled in the tranquil midst of rolling hills, this villa provides a peaceful retreat with panoramic vistas.",
        image: villa_img6

    },
    {
        name: "The Garden Escape",
        description: "Nestled in the tranquil midst of rolling hills, this villa provides a peaceful retreat with panoramic vistas.",
        image: villa_img7

    },
    {
        name: "The Sunset Retreat",
        description: "Nestled in the tranquil midst of rolling hills, this villa provides a peaceful retreat with panoramic vistas.",
        image: villa_img8

    },
];

const Villas = () => {
    return (
        <div className='villas_page'>
            <section className="contact_pine">
                <div className="container text-white">
                    <div className='title_part p-0'>
                        <img src={squre_icon} />
                        <span className="section-title px-2">
                            PINE HILL VILLAS
                        </span>
                        <img src={squre_icon} />
                    </div>
                    <h1 className="contact_head">Luxurious Villas For <br />Your Private Sanctuary Awaits</h1>
                    <p className="breadcrumb">
                        <span className='me-3'>HOME</span> / <span className='ms-3'>OUR VILLAS</span>
                    </p>
                </div>
            </section>


            <section className="escape_villa">
                <div className="container">
                    <div className="hero-container d-block d-lg-flex">
                        <div className="col-md-12 col-sm-12 col-lg-8">
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
                        <div className="col-md-12 col-sm-12 col-lg-4 text-end d-flex align-items-end justify-content-end">
                            <button className="discover_btn">DISCOVER MORE</button>
                        </div>
                    </div>
                </div>
            </section>
            <SlickSlider />
            <div className='container mid_text_area'>
                <h4 className='middle_text'>At Pine Hill Resort, our exquisite villas offer the perfect blend of luxury and <br /> privacy. Each villa is thoughtfully designed to provide an unparalleled <br /> retreat, combining elegant interiors with stunning natural surroundings.<br /> Whether you seek a serene escape or a lavish setting for a special occasion.</h4>
            </div>
            <section className="villas_pag">
                <div className="container">
                    <div className="row">
                        {villas.map((villa, index) => (
                            <div
                                className={`col-md-6 ${index % 2 !== 0 ? "offset-top" : ""}`}
                                key={index}
                            >
                                <div className="villa-wrapper">
                                    <img
                                        className="villa-image"
                                        src={villa.image}
                                        alt={`${villa.name} image`}
                                        style={{ width: '100%', objectFit: 'cover' }}
                                    />
                                    <div className="card villa-card text-center">
                                        <div className="card-body">
                                            <h5 className="card-title">{villa.name}</h5>
                                            <hr className='styled-hr' />
                                            <p className="card-text">{villa.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
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
                                                    <div class="black_box">
                                                        <img src={events} alt="" />
                                                    </div>
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
                                                    <div class="black_box">
                                                        <img src={wedding} alt="" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-10 box_data">
                                                    <h5>wedding & romantic moments</h5>
                                                    <p>Create unforgettable memories with our elegant venues and personalized services.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="service_data_box">
                                            <div class="row">
                                                <div class="col-lg-2 d-flex align-items-center">
                                                    <div class="black_box">
                                                        <img src={family} alt="" />
                                                    </div>
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
            <TestimonialSection />
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
        </div>
    )
}

export default Villas