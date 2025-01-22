import React from 'react'
import './about.css'
import squre_icon from '../../assets/image/squre.svg';
import resort_img from '../../assets/image/resort_img.jpg'
import resort_img1 from '../../assets/image/resort_img1.jpg'
import play_circle from '../../assets/image/PlayCircle.svg'
import ornament_icon from '../../assets/image/ornament.svg'
import white_logo from '../../assets/image/footer_logo.svg'
import ph_logo from '../../assets/image/PH.png'
import PineHillGallery from '../../components/About_slider/PineHillGallery';
import guest_served from '../../assets/image/guest_served2.svg';
import villa from '../../assets/image/villa.svg'
import location from '../../assets/image/location_2.svg'
import hotel from '../../assets/image/hotel.svg'
import resort from '../../assets/image/reasot.svg'
import hotel_travel from '../../assets/image/hotel_Travel.svg'
import pool from '../../assets/image/pool.svg'
import restaurant from '../../assets/image/restaurant.svg'
import bathtub from '../../assets/image/bathtub.svg'
import gym from '../../assets/image/gym.svg'
import events from '../../assets/image/event.svg'
import wedding from '../../assets/image/wedding.svg'
import family from '../../assets/image/family.svg'

const About = () => {
  return (
    <>
      <section className="contact_pine">
        <div className="container text-white">
          <div className='title_part p-0'>
            <img src={squre_icon} />
            <span className="section-title px-2">
              ABOUT US
            </span>
            <img src={squre_icon} />
          </div>
          <h1 className="contact_head">Uncover the Heart of Pine Hill <br /> Where Luxury Meets Nature</h1>
          <p className="breadcrumb">
            <span className='me-3'>Home</span> / <span className='ms-3'>ABOUT US</span>
          </p>
        </div>
      </section>
      <section className='our_info'>
        <div className="container">
          <div className="row gx-5">
            {/* Left Column */}
            <div className="col-md-6">
              <div className="video-box position-relative">
                {/* <h1 className="background-text">OUR STORY</h1> */}
                <img src={resort_img} alt="Video Thumbnail"
                  className="img-fluid" />
                <div class="border-overlay"></div>
                <div className="play-icon">
                  <img src={play_circle} alt="" />
                </div>
              </div>
              <div className='title_part'>
                <img src={ornament_icon} />
                <span className="section-title px-2">
                  Our Legacy
                </span>
                <img src={ornament_icon} />
              </div>
              <h2>From Humble Beginnings To A Premier Mountain Retreat</h2>
              <p>
                Pine Hills Resort started as a small family-owned getaway nestled in the heart of the mountains. Over the years, we’ve grown into a luxurious resort, while staying true to our roots and the natural beauty that surrounds us.
              </p>
              <hr className='info_hr'></hr>
              <div className="stats d-flex justify-content-between">
                {/* Stat 1 */}
                <div className="stat-box">
                  <div className="icon-box">
                    <img src={guest_served} alt="" />
                  </div>
                  <div className="text-box d-flex flex-column">
                    <h3>150 K+</h3>
                    <p>Guest Served</p>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="stat-box">
                  <div className="icon-box">
                    <img src={villa} alt="" />

                  </div>
                  <div className="text-box d-flex flex-column">
                    <h3>25</h3>
                    <p>Villas & Resorts</p>
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="stat-box">
                  <div className="icon-box">
                    <img src={location} alt="" />
                  </div>
                  <div className="text-box d-flex flex-column">
                    <h3>12+</h3>
                    <p>Locations</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column */}
            <div className="col-md-6 right_col">
              <div className='title_part'>
                <img src={ornament_icon} />
                <span className="section-title px-2">
                  Who we are
                </span>
                <img src={ornament_icon} />
              </div>
              <h2>Gateway To Tranquility And Luxury In The Mountains</h2>
              <p>
                Pine Hills Resort is more than just a place to stay; it’s an escape into nature’s embrace, where comfort meets adventure. Nestled in the breathtaking mountains, we offer a unique combination of luxury accommodations, exceptional service, and a variety of activities for every traveler.
              </p>
              <hr className='info_hr'></hr>
              <div className="image-box">
                <img src={resort_img1} alt="Video Thumbnail"
                  className="img-fluid" />
                <div class="border_info"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="lodging container">
        <div className='title_part text-center'>
          <img src={ornament_icon} />
          <span className="section-title px-2">
            MORE WAYS TO STAY
          </span>
          <img src={ornament_icon} />
        </div>
        <h2 className="main-title text-center">Expand Your Lodging Choices</h2>
        <p className="description text-center">
          Whether you're seeking the cozy charm of a rustic cabin, the elegance of a
          luxury suite, or the <br /> spacious comfort of a family villa, we have the
          perfect lodging option for you.
        </p>
        <div className="options-container">
          <div className="option-card">
            <div className="icon-placeholder">
              <img src={hotel} alt="" />
            </div>
            <img src={ornament_icon} className='icon_orn' />
            <h4 className="option-title">HOTEL & RESORT</h4>
            <p className="option-description">
              Enjoy top-tier comfort and service in premium accommodations.
            </p>
          </div>
          <div className="option-card">
            <div className="icon-placeholder">
              <img src={villa} alt='' />
            </div>
            <img src={ornament_icon} className='icon_orn' />
            <h4 className="option-title">HOMES & VILLAS</h4>
            <p className="option-description">
              Relax in spacious, private homes perfect for families and groups.
            </p>
          </div>
          <div className="option-card">
            <div className="icon-placeholder">
              <img src={resort} alt='' />
            </div>
            <img src={ornament_icon} className='icon_orn' />
            <h4 className="option-title">INCLUSIVE RESORT</h4>
            <p className="option-description">
              All-inclusive stays with everything you need for a stress-free
              getaway.
            </p>
          </div>
          <div className="option-card">
            <div className="icon-placeholder">
              <img src={hotel_travel} alt="" />
            </div>
            <img src={ornament_icon} className='icon_orn' />
            <h4 className="option-title">HOTEL & TRAVEL</h4>
            <p className="option-description">
              Convenient packages combining your hotel stay with travel options.
            </p>
          </div>
        </div>
      </div>
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
                                                   <div class="col-lg-2 d-flex justify-content-center align-items-center">
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
      <div className='pine_slider pb-0'>
        <PineHillGallery />
      </div>
      <section className='detail_resort mt-4'>
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
    </>
  )
}

export default About