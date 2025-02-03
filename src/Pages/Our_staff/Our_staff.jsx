import React from 'react'
import './our_staff.css'
import squre_icon from '../../assets/image/squre.svg';
import ornament_icon from '../../assets/image/ornament.svg';
import testimonial_icon from '../../assets/image/testimonal_pg.svg'
import staff_1 from '../../assets/image/staff_1.jpg';
import staff_2 from '../../assets/image/staff_2.jpg';
import staff_3 from '../../assets/image/staff_3.jpg';
import staff_4 from '../../assets/image/staff_4.jpg';
import staff_5 from '../../assets/image/staff_5.jpg';
import staff_6 from '../../assets/image/staff_6.jpg';
import { Link } from 'react-router-dom';

const teamMembers = [
    { name: "Rachel Adams", title: "General Manager", image: staff_1 },
    { name: "David Nguyen", title: "Food and Beverage Manager", image: staff_2 },
    { name: "Sarah Lewis", title: "Front Office Manager", image: staff_3 },
    { name: "Michael Ramirez", title: "Head of Maintenance", image: staff_4 },
    { name: "Emma Patel", title: "Marketing Director", image: staff_5 },
    { name: "Mariam Turner", title: "Human Resources Manager", image: staff_6 },
];

const Our_staff = () => {
    return (

        <div className='our_staff'>
            <section className="contact_pine">
                <div className="container text-white">
                    <div className='title_part p-0'>
                        <img src={squre_icon} />
                        <span className="section-title px-2">
                            PINE HILL TEAM
                        </span>
                        <img src={squre_icon} />
                    </div>
                    <h1 className="contact_head">Meet the Dedicated Team Behind <br />Your Unforgettable Stay</h1>
                    <p className="breadcrumb">
                        <Link to='/' className='me-3'>HOME</Link> / <Link className='ms-3' to='/our_staff'>OUR STAFF</Link>
                    </p>
                </div>
            </section>
            <section className='guest_rew'>
                <div className="container text-center">
                    <div className="text-center mb-5">
                        <div className='title_part p-0'>
                            <img src={ornament_icon} />
                            <span className="section-title px-2">
                                GUEST REVIEWS
                            </span>
                            <img src={ornament_icon} />
                        </div>
                        <h2 className="main-title">They Were Happy With Our Service</h2>
                        <p className="description">
                            Read firsthand accounts of unforgettable experiences, exceptional service, and unparalleled comfort.<br /> Our testimonials highlight the unique aspects of our accommodations and the memorable moments.
                        </p>
                    </div>
                </div>
                <div className="guest-review-container">
                    <div className='container'>
                        <div className="row align-items-center">
                            <div className="col-md-5">
                                <div className='name_author text-right'>
                                    <h4 className="guest-name">Adam Johnson</h4>
                                    <p className="guest-role">CEO PINE HILLS</p>
                                </div>
                                <div className="quote-container">
                                    <span className="quote-mark"><img src={testimonial_icon} alt='testimonial_icon'/></span>
                                    <p className="quote-text">
                                        Pine Hills Resort started as a small family-owned getaway nestled in the heart of the mountains. Over the years
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="image-placeholder"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='middle_text'>
                <div className='container text-center'>
                    <h4>At Pine Hill Resort, our exquisite villas offer the perfect blend of luxury and <br /> privacy. Each villa is thoughtfully designed to provide an unparalleled <br /> retreat, combining elegant interiors with stunning natural surroundings.<br /> Whether you seek a serene escape or a lavish setting for a special occasion.</h4>
                </div>
            </div>
            <div className="container my-5">
                <div className="row">
                    {teamMembers.map((member, index) => (
                        <div className="col-md-4 col-sm-6 mb-4" key={index}>
                            <div className="card team-card">
                                <img src={member.image} alt={member.name} className="team-img" />
                                <div className="card-body text-center pb-0">
                                    <h5 className="card-title">
                                        <img src={ornament_icon} /> {member.name} <img src={ornament_icon} />
                                    </h5>
                                    <p className="card-text">{member.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Our_staff