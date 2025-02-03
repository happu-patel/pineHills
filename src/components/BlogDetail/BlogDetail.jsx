// BlogDetail.js
import React, { useEffect, useState } from 'react';
import './blogdetail.css';
import { useNavigate, useParams } from 'react-router-dom';
import ornament_icon from '../../assets/image/ornament.svg';
import blog_fb from '../../assets/image/blog_fb.svg';
import blog_tw from '../../assets/image/blog_tw.svg';
import blog_ins from '../../assets/image/blog_ins.svg';
import blog_yt from '../../assets/image/blog_yt.svg';
import blog_grey from '../../assets/image/blog_grey_img.png';
import blog_grey2 from '../../assets/image/blog_grey_2.png';
import hills from '../../assets/image/mountain_view.jpg';
import summer from '../../assets/image/sumer_sale.jpg';
import wellness from '../../assets/image/new_wellness.jpg';


const BlogDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [post, setPost] = useState(null);

    // Simulating fetching post data
    useEffect(() => {
        // Using the blogPosts data from your existing array
        const blogPosts = [
            {
                id: 1,
                date: 'july 20 2024',
                title: "Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit.",
                image: hills,
                content: "Bibendum leo, sapien, nisl bibendum. Ultricies urna ultricies risus, at. Risus tincidunt netus et pellentesque maecenas pulvinar. Arcu duis tortor turpis nunc, nunc est blandit. Vel volutpat purus mauris condimentum amet tellus scelerisque semper blandit. Feugiat accumsan blandit acu, integer faucibus. At cursus elit hac vitae nec tortor iaculis viverra. Sem aliquet vulputate metus tristique sem commodo faucibus. Sagittis sittis eget at sit posuere est at. Eget eget id iaculis at est cras tristique sit. Nunc sem magna morbi vitae tempus sed consequat. Urna tellus id tique mattis molestie lectus imperdiet. Facilisi suscipit mauris nisl nibh felis pellentesque. Tempus et vitae, at quis nisl enim molestie felis. Tincidunt ornare facilisis interdum ipsum.",
                sections: [
                    {
                        id: 1,
                        title: "Lorem Ipsum Dolor Sit Amet, Consec Tetuer.",
                        content: "Bibendum sit pharetra vitae pellentesque sodales neque mollis oci, purus. Feugiat volutp eu velit purus enim cum. Eu ipsum vierra isse placerat leo. Libero vel mi porttitor luctus viverra a vel veicula ultricies. Tellus egestas ac in sit et quis vitae. Metus auctor.",
                        title1: "Lorem Ipsum Dolor Sit Amet, Consec Tetuer.",
                        content1: "Bibendum sit pharetra vitae pellentesque sodales neque mollis oci, purus. Feugiat volutp eu velit purus enim cum. Eu ipsum vierra isse placerat leo. Libero vel mi porttitor luctus viverra a vel veicula ultricies. Tellus egestas ac in sit et quis vitae. Metus auctor."
                    },
                ],
                middleSection: {
                    content: "Bibendum sit pharetra vitae pellentesque sodales neque mollis orci, purus. Feugiat volutpat eu velit purus enim cum. Eu ipsum viverra sudisse placerat leo. Libero vel mi porttitor luctus viverra a vel vehicula ultricies. Tellus egestas ac in sit et quis vitae. Metus auctor aliquam id cursus quam tempor vulputate cursus."
                },
                bottomSection: {
                    title: "Lorem Ipsum Dolor Sit Amet, Consec Tetuer.",
                    content: "Bibendum sit pharetra vitae pellentesque sodales neque mollis oci, purus. Feugiat volutp eu velit purus enim cum. Eu ipsum vierra isse placerat leo. Libero vel mi porttitor luctus viverra a vel veicula ultricies. Tellus egestas ac in sit et quis vitae. Metus auctor. Bibendum sit pharetra vitae pellentesque sodales neque mollis oci, purus. Feugiat volutp eu velit purus enim cum. Eu ipsum vierra isse placerat leo. Libero vel mi porttitor luctus viverra a vel"
                }
            },
            {
                id: 2,
                date: 'july 19 2024',
                image: summer,
                title: "Lorem Ipsum Dolor Sit Amet, Consec Tetuer.",
                content: "Bibendum sit pharetra vitae pellentesque sodales neque mollis oci, purus. Feugiat volutp eu velit purus enim cum. Eu ipsum vierra isse placerat leo. Libero vel mi porttitor luctus viverra a vel veicula ultricies. Tellus egestas ac in sit et quis vitae. Metus auctor.",
                sections: [
                    {
                        id: 1,
                        title: "Lorem Ipsum Dolor Sit Amet, Consec Tetuer.",
                        content: "Bibendum sit pharetra vitae pellentesque sodales neque mollis oci, purus. Feugiat volutp eu velit purus enim cum. Eu ipsum vierra isse placerat leo. Libero vel mi porttitor luctus viverra a vel veicula ultricies. Tellus egestas ac in sit et quis vitae. Metus auctor.",
                        title1: "Lorem Ipsum Dolor Sit Amet, Consec Tetuer.",
                        content1: "Bibendum sit pharetra vitae pellentesque sodales neque mollis oci, purus. Feugiat volutp eu velit purus enim cum. Eu ipsum vierra isse placerat leo. Libero vel mi porttitor luctus viverra a vel veicula ultricies. Tellus egestas ac in sit et quis vitae. Metus auctor."
                    }
                ],
                middleSection: {
                    content: "Bibendum sit pharetra vitae pellentesque sodales neque mollis orci, purus. Feugiat volutpat eu velit purus enim cum. Eu ipsum viverra sudisse placerat leo. Libero vel mi porttitor luctus viverra a vel vehicula ultricies. Tellus egestas ac in sit et quis vitae. Metus auctor aliquam id cursus quam tempor vulputate cursus."
                },
                bottomSection: {
                    title: "Lorem Ipsum Dolor Sit Amet, Consec Tetuer.",
                    content: "Bibendum sit pharetra vitae pellentesque sodales neque mollis oci, purus. Feugiat volutp eu velit purus enim cum. Eu ipsum vierra isse placerat leo. Libero vel mi porttitor luctus viverra a vel veicula ultricies. Tellus egestas ac in sit et quis vitae. Metus auctor. Bibendum sit pharetra vitae pellentesque sodales neque mollis oci, purus. Feugiat volutp eu velit purus enim cum. Eu ipsum vierra isse placerat leo. Libero vel mi porttitor luctus viverra a vel"
                }
            },
            {
                id: 3,
                date: 'july 18 2024',
                image: wellness,
                title: "Lorem Ipsum Dolor Sit Amet, Consec Tetuer.",
                content: "Bibendum sit pharetra vitae pellentesque sodales neque mollis oci, purus. Feugiat volutp eu velit purus enim cum. Eu ipsum vierra isse placerat leo. Libero vel mi porttitor luctus viverra a vel veicula ultricies. Tellus egestas ac in sit et quis vitae. Metus auctor.",
                sections: [
                    {
                        id: 1,
                        title: "Lorem Ipsum Dolor Sit Amet, Consec Tetuer.",
                        content: "Bibendum sit pharetra vitae pellentesque sodales neque mollis oci, purus. Feugiat volutp eu velit purus enim cum. Eu ipsum vierra isse placerat leo. Libero vel mi porttitor luctus viverra a vel veicula ultricies. Tellus egestas ac in sit et quis vitae. Metus auctor.",
                        title1: "Lorem Ipsum Dolor Sit Amet, Consec Tetuer.",
                        content1: "Bibendum sit pharetra vitae pellentesque sodales neque mollis oci, purus. Feugiat volutp eu velit purus enim cum. Eu ipsum vierra isse placerat leo. Libero vel mi porttitor luctus viverra a vel veicula ultricies. Tellus egestas ac in sit et quis vitae. Metus auctor."
                    }
                ],
                middleSection: {
                    content: "Bibendum sit pharetra vitae pellentesque sodales neque mollis orci, purus. Feugiat volutpat eu velit purus enim cum. Eu ipsum viverra sudisse placerat leo. Libero vel mi porttitor luctus viverra a vel vehicula ultricies. Tellus egestas ac in sit et quis vitae. Metus auctor aliquam id cursus quam tempor vulputate cursus."
                },
                bottomSection: {
                    title: "Lorem Ipsum Dolor Sit Amet, Consec Tetuer.",
                    content: "Bibendum sit pharetra vitae pellentesque sodales neque mollis oci, purus. Feugiat volutp eu velit purus enim cum. Eu ipsum vierra isse placerat leo. Libero vel mi porttitor luctus viverra a vel veicula ultricies. Tellus egestas ac in sit et quis vitae. Metus auctor. Bibendum sit pharetra vitae pellentesque sodales neque mollis oci, purus. Feugiat volutp eu velit purus enim cum. Eu ipsum vierra isse placerat leo. Libero vel mi porttitor luctus viverra a vel"
                }
            },
        ];


        const foundPost = blogPosts.find(post => post.id === parseInt(id));
        setPost(foundPost);
    }, [id]);

    // Show loading state while post is being fetched
    if (!post) {
        return (
            <div className="container text-center my-5">
                <h2>Loading...</h2>
            </div>
        );
    }

    return (
        <>
            <section className="blog_detail">
                <div className="container text-white">
                    <h1 className="blog_detail_head text-center">Announce That Pine Hill Resort Has Been Recognized <br /> With The "Best Luxury Resort" Award At The <br />International Travel Awards 2024!</h1>
                    <p className="blog_breadcrumb text-center">
                        <span className='me-3 cursor-pointer' onClick={() => navigate('/')}>HOME</span> /
                        <span className='mx-3 cursor-pointer' onClick={() => navigate('/blog')}>BLOG & NEWS</span> /
                        <span className='ms-3'>SINGLE POST</span>
                    </p>
                </div>
            </section>

            <div className="container blog-detail-content my-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="blog-featured-image mb-4"

                            style={{
                                width: "100%",
                                height: "500px",
                            }}>
                            <img src={post.image} alt='hills' height={500} width={'100%'}/>
                        </div>

                        <div className="post-meta mb-4 text-muted d-flex justify-content-between">
                            <div className='post_date'>
                                <span className="me-3">{post.date}</span>
                                <span>-NO COMMENTS</span>
                            </div>
                            <div className='share_social'>
                                <div className='d-flex gap-3 align-items-center'>
                                    <h5 className='mb-0'>SHARE THIS :</h5>
                                    <img src={blog_fb} alt='blog_fb' />
                                    <img src={blog_tw} alt='blog_tw' />
                                    <img src={blog_ins} alt='blog_ins' />
                                    <img src={blog_yt} alt='blog_yt' />

                                </div>
                            </div>
                        </div>
                        <hr />
                        <h1 className="blog-title">{post.title}</h1>
                        <p className='blog_content'>{post.content}</p>
                        {post.sections.map((section, index) => (
                            <div key={section.id} className="row align-items-center gap-5 blog_post_sec">
                                {/* Text Content */}
                                <div className={`col-lg-6 col-md-6 ${index % 2 !== 0 ? 'order-lg-2' : ''}`}>
                                    {/* First Title and Content */}
                                    <div className="mb-4">
                                        <h3 className="blog-title">{section.title}</h3>
                                        <p className="blog_content">{section.content}</p>
                                    </div>
                                    <div className="mb-4">
                                        <h3 className="blog-title">{section.title1}</h3>
                                        <p className="blog_content">{section.content1}</p>
                                    </div>
                                </div>

                                {/* Image */}
                                <div className={`col-lg-5 ps-5 col-md-5 blog_post_gry_sec ${index % 2 !== 0 ? 'order-lg-1' : ''}`}>
                                    <img src={blog_grey} alt='blog_gry' />
                                </div>
                            </div>
                        ))}

                        <div className='row middle_Sec'>
                            <div className='col-lg-12'>
                                <p className='blog_content'>{post.middleSection.content}</p>
                            </div>
                        </div>

                        {/* Bottom Section */}
                        <div className="row g-4 align-items-start bottom_Sec">
                            {/* Image on the left */}
                            <div className="col-md-6 col-lg-6">
                                <img src={blog_grey2} alt='blog_gray2' />
                            </div>
                            {/* Text on the right */}
                            <div className="col-md-6 col-lg-6">
                                <h3 className="blog-title">{post.bottomSection.title}</h3>
                                <p className="blog_content">{post.bottomSection.content}</p>
                            </div>
                        </div>

                        <hr className='blog_hr' />
                        <div className="post-meta blog_has text-muted d-flex justify-content-between">
                            <div className='has_tag'>
                                <span>#BUSINESS,</span>
                                <span>#TRAVEL,</span>
                                <span>#RESORT,</span>
                                <span>#HOLIDAY,</span>
                                <span>#LUXURY,</span>
                            </div>
                            <div className='share_social'>
                                <div className='d-flex gap-3 align-items-center'>
                                    <h5 className='mb-0 has_tag'>SHARE THIS :</h5>
                                    <img src={blog_fb} alt='blog_fb' />
                                    <img src={blog_tw} alt='blog_tw' />
                                    <img src={blog_ins} alt='blog_ins' />
                                    <img src={blog_yt} alt='blog_yt' />

                                </div>
                            </div>

                        </div>
                        <hr className='blog_hr' />
                    </div>


                </div>
            </div>

            <section className='blog_form'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-6">
                            <div className="form-container bg-white">
                                <div className='title_part p-0 text-center'>
                                    <img src={ornament_icon} />
                                    <span className="section-title px-2 ">
                                        COMMENT
                                    </span>
                                    <img src={ornament_icon} />
                                </div>
                                <h2 className="main-title text-center">Leave A Reply</h2>
                                <p className="text-center mb-4 description">
                                    Your email address will not be published. Required fields ar
                                </p>
                                <hr class="styled-hr" />
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label visually-hidden">Full Name</label>
                                        <input type="text" id="name" className="form-control" placeholder="Full Name" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label visually-hidden">Email Address</label>
                                        <input type="email" id="email" className="form-control" placeholder="Email Address" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="message" className="form-label visually-hidden">Your Message</label>
                                        <textarea id="message" className="form-control" rows="4" placeholder="Your Message"></textarea>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" id="save-info" className="form-check-input" />
                                        <label htmlFor="save-info" className="form-check-label blog_label">
                                            Save my name, email, and website in this browser for the next time I comment.
                                        </label>
                                    </div>
                                    <div className="text-center sub_button">
                                        <button type="submit" className="submit_btn">
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="news-section blog_news_section">
                <div class="container py-5">
                    <div class="text-center mb-5">
                        <small class="title"><img src={ornament_icon} /><span className="section-title px-2">
                            RELATED NEWS
                        </span><img src={ornament_icon} /></small>
                        <h2 class="news_head">Stay Updated With Us</h2>
                        <p class=" description">
                            Stay informed with our latest news and updates. From exciting new resort openings and special offers <br />
                            to important announcements and upcoming events.
                        </p>
                    </div>
                    <div class="row g-4">
                        <div class="col-md-4">
                            <div class="img_div">
                                <img src={blog_grey2} class="card-img-top" alt="Luxury Villas" />
                                <div class="card-body text-center">
                                    <h5 class="card-title">Pine Hills Unveils New Luxury Villas With Stunning Mountain Views</h5>
                                    <p class="card-text text-muted">July 22, 2024</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="img_div">
                                <img src={blog_grey2}
                                    class="card-img-top" alt="Special Offer" />
                                <div class="card-body text-center">
                                    <h5 class="card-title">Special Offer: Save 20% On All Bookings At Pine Hills This Summer!</h5>
                                    <p class="card-text text-muted">July 20, 2024</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="img_div">
                                <img src={blog_grey2} class="card-img-top" alt="Wellness Retreat" />
                                <div class="card-body text-center">
                                    <h5 class="card-title">Pine Hills Announces Exciting New Wellness Retreat Program</h5>
                                    <p class="card-text text-muted">July 25, 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogDetail;