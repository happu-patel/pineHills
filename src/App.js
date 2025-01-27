import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.css'
import Home from './Pages/Home/Home';
import Footer from './components/Footer/Footer';
import Contact from './Pages/contact/Contact';
import About from './Pages/About/About';
import Facilities from './Pages/Facilities/Facilities';
import Faq from './Pages/Faq/Faq';
import Testimonial from './Pages/Testimonial/Testimonial';
import BlogList from './Pages/Blog/BlogList';
import BlogDetail from './components/BlogDetail/BlogDetail';
import PricingPlans from './Pages/PricePlan/PricingPlans';
import Villas from './Pages/Villas/Villas';
import Our_staff from './Pages/Our_staff/Our_staff';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';

function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/faq" element={<Faq />} />
          <Route path='/testimonial' element={<Testimonial />} />
          <Route path='/blog' element={<BlogList />} />
          <Route path='/blog/:id' element={<BlogDetail />} />
          <Route path='/villa' element={<Villas />} />
          <Route path='/pricing' element={<PricingPlans />} />
          <Route path='/our_staff' element={<Our_staff />} />
        </Routes>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
