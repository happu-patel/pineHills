import React, { useState } from "react";
import './blog.css'
import ornament_icon from '../../assets/image/ornament.svg'
import squre_icon from '../../assets/image/squre.svg';
import { Link, useNavigate } from "react-router-dom";
import family_img from '../../assets/image/family_img.jpg';
import hotel_img from '../../assets/image/hotel_img.jpg';
import summer from '../../assets/image/sumer_sale.jpg';
import hills from '../../assets/image/mountain_view.jpg';
import wellness from '../../assets/image/new_wellness.jpg';
import famili_fun from '../../assets/image/famili_fun.jpg';
import caluter from '../../assets/image/caluter.jpg';
import wedding_decor from '../../assets/image/wedding_decor.jpg';
import chief_dish from '../../assets/image/chef_dish.jpg';
import landscape from '../../assets/image/landscape_view.jpg';
import wellness_new from '../../assets/image/wellness.jpg';

const blogPosts = [
    { id:1, title: "Pine Hills Unveils New Luxury Villas With Stunning Mountain Views", date: "July 20, 2024", image: hills },
    { id:2, title: "Special Offer: Save 20% On All Bookings At Pine Hills This Summer!", date: "July 19, 2024", image: summer },
    { id:3, title: "Pine Hills Announces Exciting New Wellness Retreat Program", date: "July 18, 2024", image: wellness },
    { id:4, title: "Pine Hill Resort Offers Fun For The Whole Family!", date: "July 17, 2024", image: famili_fun },
    { id:5, title: "Enhance Your Stay With Day Trips To Nearby Cultural Attractions", date: "July 16, 2024", image: caluter },
    { id:6, title: "Get Tips And Inspiration For Your Dream Wedding At Pine Hill", date: "July 15, 2024", image: wedding_decor },
    { id:7, title: "Check Out Our Chef's Top Five Dishes That Showcase The Flavors", date: "July 14, 2024", image: chief_dish },
    { id:8, title: "Experience Our Infinity Pool Offering Breathtaking Landscape Views", date: "July 13, 2024", image: landscape },
    { id:9, title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024", image: wellness_new },
    { id:10, title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024", image: wellness_new },
    { id:11, title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024", image: wellness_new },
    { id:12, title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024", image: wellness_new },
    { id:13, title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024", image: wellness_new },
    { id:14, title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024", image: wellness_new },
    { id:15, title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024", image: wellness_new },
    { id:16, title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024", image: wellness_new },
    { id:17, title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024", image: wellness_new },
    { id:18, title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024", image: wellness_new },
    { id:19, title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024", image: wellness_new },
    { id:20, title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024", image: wellness_new },
    { id:21, title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024", image: wellness_new },
    { id:22, title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024", image: wellness_new },
    { id:23, title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024", image: wellness_new },
    { id:24, title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024", image: wellness_new },
    { id:25, title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024", image: wellness_new },
    { id:26, title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024", image: wellness_new },
    { id:27, title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024", image: wellness_new },
    { id:28, title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024", image: wellness_new },
    { id:29, title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024", image: wellness_new },
    { id:30, title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024", image: wellness_new },
    { id:31, title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024", image: wellness_new },
    { id:32, title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024", image: wellness_new },
    { id:33, title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024", image: wellness_new },
    { id:34, title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024", image: wellness_new },
    { id:35, title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024", image: wellness_new },
    { id:36, title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024", image: wellness_new },
    { id:37, title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024", image: wellness_new },
    { id:38, title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024", image: wellness_new },
    { id:39, title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024", image: wellness_new },
    { id:40, title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024", image: wellness_new },
    { id:41, title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024", image: wellness_new },
    { id:42, title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024", image: wellness_new },
    { id:43, title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024", image: wellness_new },
    { id:44, title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024", image: wellness_new },

].sort((a, b) => new Date(b.date) - new Date(a.date));

const BlogList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 9;

    // Calculate current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

    const totalPages = Math.ceil(blogPosts.length / postsPerPage);

    // Generate the pagination buttons with ellipsis
    const renderPagination = () => {
        const pages = [];
        const maxPageDisplay = 3;

        // Prev button (always shown, but disabled on the first page)
        pages.push(
            <li key="prev" className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                <button
                    className="page-link"
                    onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    &lt;
                </button>
            </li>
        );

        if (totalPages <= maxPageDisplay + 2) {
            // Display all pages if total pages are small
            for (let i = 1; i <= totalPages; i++) {
                pages.push(
                    <li key={i} className={`page-item ${currentPage === i ? "active" : ""}`}>
                        <button className="page-link" onClick={() => setCurrentPage(i)}>
                            {i}
                        </button>
                    </li>
                );
            }
        } else {
            // Display with ellipsis
            if (currentPage <= maxPageDisplay) {
                // Show the first few pages
                for (let i = 1; i <= maxPageDisplay; i++) {
                    pages.push(
                        <li key={i} className={`page-item ${currentPage === i ? "active" : ""}`}>
                            <button className="page-link" onClick={() => setCurrentPage(i)}>
                                {i}
                            </button>
                        </li>
                    );
                }
                pages.push(<li key="dots" className="page-item disabled"><span className="page-link">...</span></li>);
                pages.push(
                    <li key={totalPages} className="page-item">
                        <button className="page-link" onClick={() => setCurrentPage(totalPages)}>
                            {totalPages}
                        </button>
                    </li>
                );
            } else if (currentPage > maxPageDisplay && currentPage < totalPages - 1) {
                pages.push(
                    <li key={1} className="page-item">
                        <button className="page-link" onClick={() => setCurrentPage(1)}>
                            1
                        </button>
                    </li>
                );
                pages.push(<li key="dots-start" className="page-item disabled"><span className="page-link">...</span></li>);

                for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                    pages.push(
                        <li key={i} className={`page-item ${currentPage === i ? "active" : ""}`}>
                            <button className="page-link" onClick={() => setCurrentPage(i)}>
                                {i}
                            </button>
                        </li>
                    );
                }
                pages.push(<li key="dots-end" className="page-item disabled"><span className="page-link">...</span></li>);
                pages.push(
                    <li key={totalPages} className="page-item">
                        <button className="page-link" onClick={() => setCurrentPage(totalPages)}>
                            {totalPages}
                        </button>
                    </li>
                );
            } else {
                // Show the last few pages
                pages.push(
                    <li key={1} className="page-item">
                        <button className="page-link" onClick={() => setCurrentPage(1)}>
                            1
                        </button>
                    </li>
                );
                pages.push(<li key="dots" className="page-item disabled"><span className="page-link">...</span></li>);
                for (let i = totalPages - maxPageDisplay + 1; i <= totalPages; i++) {
                    pages.push(
                        <li key={i} className={`page-item ${currentPage === i ? "active" : ""}`}>
                            <button className="page-link" onClick={() => setCurrentPage(i)}>
                                {i}
                            </button>
                        </li>
                    );
                }
            }
        }

        // Next button (always shown, but disabled on the last page)
        pages.push(
            <li key="next" className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                <button
                    className="page-link"
                    onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    &gt;
                </button>
            </li>
        );

        return pages;
    };

    const navigate = useNavigate();

    return (
        <>
            <section className="contact_pine">
                <div className="container text-white">
                    <div className='title_part p-0'>
                        <img src={squre_icon} />
                        <span className="section-title px-2">
                            PINE HILL UPDATE
                        </span>
                        <img src={squre_icon} />
                    </div>
                    <h1 className="contact_head">Stay Informed with
                        <br /> Our Latest Blog Posts</h1>
                    <p className="breadcrumb">
                        <Link to='/' className='me-3'>HOME</Link> / <Link to='/blog' className='ms-3'>BLOG & NEWS</Link>
                    </p>
                </div>
            </section>
            <div className="news-section blog_new_part container text-center my-3">
                <div className='title_part text-center'>
                    <img src={ornament_icon} />
                    <span className="section-title px-2">
                        Latest Insight & Updates
                    </span>
                    <img src={ornament_icon} />
                </div>
                <h2 className="main-title text-center">Keep Updated With <br /> The Latest News And Trends</h2>
                <p className="description text-center">
                    Stay informed with our latest news and updates. From exciting new resort openings and special offers <br />
                    to important announcements and upcoming events.
                </p>
                <div className="row mt-4">
                    <div className="col-md-6">
                        <div className="news-card">
                            <div className="news-image-placeholder">
                                <img src={hotel_img} alt="pine_hill" />
                            </div>
                            <h5 className="mt-3">
                                Announce That Pine Hill Resort Has Been Recognized With The "Best Luxury Resort" Award At The
                                International Travel Awards 2024!
                            </h5>
                            <p className="text-muted">July 29, 2024</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="news-card">
                            <div className="news-image-placeholder">
                                <img src={family_img} alt="family_pakages" />
                            </div>
                            <h5 className="mt-3">
                                Pine Hill Resort Is Now Offering Exclusive Family Adventure Packages, Perfect For Creating
                                Unforgettable Memories Together.
                            </h5>
                            <p className="text-muted">July 29, 2024</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <hr className="blog_hr" />
            </div>
            <section className="blog">
                <div className="container">
                    <h3 className="text-center main_blog_title my-4">Previous Blog Posts</h3>
                    <div className="row">
                        {currentPosts.map((post, index) => (
                            <div className="col-md-4 main_card col-sm-12 col-lg-4" key={index}
                                onClick={() => navigate(`/blog/${post.id}`)}
                                style={{ cursor: 'pointer' }}>
                                <div className="card text-center">
                                    {/* Placeholder for Image */}
                                    <div className="placeholder_img"><img src={post.image} alt="post_image"/></div>
                                    <div className="card-body p-0">
                                        <h5 className="card-title">{post.title}</h5>
                                        <p className="card-text">{post.date}</p>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>

                    {/* Pagination */}
                    <nav>
                        <ul className="pagination justify-content-center">{renderPagination()}</ul>
                    </nav>
                </div>
            </section>

        </>
    );
};

export default BlogList;
