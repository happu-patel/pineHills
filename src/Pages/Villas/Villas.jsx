import React from 'react'
import './villa.css'
import squre_icon from '../../assets/image/squre.svg';
import SlickSlider from '../../components/SlickSlider/SlickSlider';
import ornament_icon from '../../assets/image/ornament.svg'
import testimonial_icon from '../../assets/image/testimonial_icon.svg'
import white_logo from '../../assets/image/footer_logo.svg'
import ph_logo from '../../assets/image/PH.png'

const villas = [
    {
        name: "The Summit Villa",
        description: "Nestled in the tranquil midst of rolling hills, this villa provides a peaceful retreat with panoramic vistas.",
    },
    {
        name: "The Serenity Haven",
        description: "Nestled in the tranquil midst of rolling hills, this villa provides a peaceful retreat with panoramic vistas.",
    },
    {
        name: "The Luxe Pavilion",
        description: "Nestled in the tranquil midst of rolling hills, this villa provides a peaceful retreat with panoramic vistas.",
    },
    {
        name: "The Tranquil Hideaway",
        description: "Nestled in the tranquil midst of rolling hills, this villa provides a peaceful retreat with panoramic vistas.",
    },
    {
        name: "The Elegance Residence",
        description: "Nestled in the tranquil midst of rolling hills, this villa provides a peaceful retreat with panoramic vistas.",
    },
    {
        name: "The Horizon Villa",
        description: "Nestled in the tranquil midst of rolling hills, this villa provides a peaceful retreat with panoramic vistas.",
    },
    {
        name: "The Garden Escape",
        description: "Nestled in the tranquil midst of rolling hills, this villa provides a peaceful retreat with panoramic vistas.",
    },
    {
        name: "The Sunset Retreat",
        description: "Nestled in the tranquil midst of rolling hills, this villa provides a peaceful retreat with panoramic vistas.",
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
                    <div className="hero-container d-flex justify-content-center text-center">
                        <div className="col-md-12">
                            <div className="title_part p-0">
                                <img src={ornament_icon} alt="Ornament Icon" />
                                <span className="section-title px-2">ESCAPE TO LUXURY VILLAS</span>
                                <img src={ornament_icon} alt="Ornament Icon" />
                            </div>
                            <h2 className="main-title">
                                Explore Our Best Villas For An <br /> Unforgettable Vacation
                            </h2>
                            <div className="des_btn">
                                <p className="description">
                                    Experience the perfect blend of privacy and comfort in our exquisite villas. Each villa offers spacious <br /> living areas, modern amenities, and breathtaking surroundings, making it an ideal retreat for families.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <SlickSlider />
            <div className='container mid_text_area'>
                <h4 className='middle_text'>At Pine Hill Resort, our exquisite villas offer the perfect blend of luxury and <br/> privacy. Each villa is thoughtfully designed to provide an unparalleled <br/> retreat, combining elegant interiors with stunning natural surroundings.<br/> Whether you seek a serene escape or a lavish setting for a special occasion.</h4>
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
                                    <div className="villa-image"></div>
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
                                                    <div class="black_box"></div>
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
                                                    <div class="black_box"></div>
                                                </div>
                                                <div class="col-lg-10 box_data">
                                                    <h5>wedding & romantic moments</h5>
                                                    <p>Create unforgettable memories with our elegant venues and personalized services.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="service_data_box">
                                            <div class="row">
                                                <div class="col-lg-2 d-flex justify-content-center align-items-center">
                                                    <div class="black_box"></div>
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
                    <div className='testimonial_part'>
                        <div className="testimonial-box">
                            <div className="content">
                                <div className="content_title">
                                    <h3>Emily Johnson</h3>
                                    <p className='title'>Marketing Manager. Rui Company</p>
                                </div>

                                <div className="quote-container">
                                    <span className="quote-mark"><img src={testimonial_icon} /></span>
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
                                    <span className="quote-mark"><img src={testimonial_icon} /></span>
                                    <p className="quote-text">
                                        Our experience at the Highland Peaks Retreat exceeded all expectations. The serene mountain views and elegant design provided the perfect.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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