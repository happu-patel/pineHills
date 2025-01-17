import React, { useState } from "react";
import './blog.css'
import ornament_icon from '../../assets/image/ornament.svg'
import squre_icon from '../../assets/image/squre.svg';

const blogPosts = [
    { title: "Pine Hills Unveils New Luxury Villas With Stunning Mountain Views", date: "July 20, 2024" },
    { title: "Special Offer: Save 20% On All Bookings At Pine Hills This Summer!", date: "July 19, 2024" },
    { title: "Pine Hills Announces Exciting New Wellness Retreat Program", date: "July 18, 2024" },
    { title: "Pine Hill Resort Offers Fun For The Whole Family!", date: "July 17, 2024" },
    { title: "Enhance Your Stay With Day Trips To Nearby Cultural Attractions", date: "July 16, 2024" },
    { title: "Get Tips And Inspiration For Your Dream Wedding At Pine Hill", date: "July 15, 2024" },
    { title: "Check Out Our Chef's Top Five Dishes That Showcase The Flavors", date: "July 14, 2024" },
    { title: "Experience Our Infinity Pool Offering Breathtaking Landscape Views", date: "July 13, 2024" },
    { title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024" },
    { title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024" },
    { title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024" },
    { title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024" },
    { title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024" },
    { title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024" },
    { title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024" },
    { title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024" },
    { title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024" },
    { title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024" },
    { title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024" },
    { title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024" },
    { title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024" },
    { title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024" },
    { title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024" },
    { title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024" },
    { title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024" },
    { title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024" },
    { title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024" },
    { title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024" },
    { title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024" },
    { title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024" },
    { title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024" },
    { title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024" },
    { title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024" },
    { title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024" },
    { title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024" },
    { title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024" },
    { title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024" },
    { title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024" },
    { title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024" },
    { title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024" },
    { title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024" },
    { title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024" },
    { title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024" },
    { title: "Thrilled To Launch Our New Wellness Retreat Package", date: "July 12, 2024" },
];

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
                        <span className='me-3'>HOME</span> / <span className='ms-3'>BLOG & NEWS</span>
                    </p>
                </div>
            </section>
            <div className="news-section container text-center my-3">
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
                            <div className="news-image-placeholder"></div>
                            <h5 className="mt-3">
                                Announce That Pine Hill Resort Has Been Recognized With The "Best Luxury Resort" Award At The
                                International Travel Awards 2024!
                            </h5>
                            <p className="text-muted">July 29, 2024</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="news-card">
                            <div className="news-image-placeholder"></div>
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
                            <div className="col-md-4 main_card" key={index}>
                                <div className="card text-center">
                                    {/* Placeholder for Image */}
                                    <div
                                        style={{
                                            width: "400px",
                                            height: "300px",
                                            backgroundColor: "#d3d3d3",
                                            marginBottom: "15px",
                                        }}
                                    ></div>
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
