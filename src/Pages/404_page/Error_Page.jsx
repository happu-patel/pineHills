import React from 'react'
import './Error_page.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'

const Error_Page = () => {
    return (
        <div className='erroe_main'>
            <Header />
            <div className="brown_div">
                <div className='container'>
                    <div className='number_txt'>
                        404
                    </div>
                    <div className='error_msg'>
                        Opps! Something Went Wrong
                    </div>
                    <div className='sub_msg'>
                        We can’t seem to find the page you are looking for
                    </div>
                    <div className='back_home_btn'>
                        <Link to='/' ><button>Back Home</button></Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Error_Page
