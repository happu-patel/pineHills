import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Aboutus from './Pages/Aboutus';
import './App.css'
import Home from './Pages/Home';
import Footer from './components/Footer/Footer';
import Contact from './Pages/contact/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
