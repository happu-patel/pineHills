import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/contact/Contact";
import Facilities from "./Pages/Facilities/Facilities";
import Faq from "./Pages/Faq/Faq";
import Testimonial from "./Pages/Testimonial/Testimonial";
import BlogList from "./Pages/Blog/BlogList";
import BlogDetail from "./components/BlogDetail/BlogDetail";
import PricingPlans from "./Pages/PricePlan/PricingPlans";
import Villas from "./Pages/Villas/Villas";
import Our_staff from "./Pages/Our_staff/Our_staff";
import NotFound from "./Pages/Notfound/NotFound";
import Error_Page from "./Pages/404_page/Error_Page";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Header />
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Header />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/facilities"
          element={
            <>
              <Header />
              <Facilities />
              <Footer />
            </>
          }
        />
        <Route
          path="/faq"
          element={
            <>
              <Header />
              <Faq />
              <Footer />
            </>
          }
        />
        <Route
          path="/testimonial"
          element={
            <>
              <Header />
              <Testimonial />
              <Footer />
            </>
          }
        />
        <Route
          path="/blog"
          element={
            <>
              <Header />
              <BlogList />
              <Footer />
            </>
          }
        />
        <Route
          path="/blog/:id"
          element={
            <>
              <Header />
              <BlogDetail />
              <Footer />
            </>
          }
        />
        <Route
          path="/villa"
          element={
            <>
              <Header />
              <Villas />
              <Footer />
            </>
          }
        />
        <Route
          path="/pricing"
          element={
            <>
              <Header />
              <PricingPlans />
              <Footer />
            </>
          }
        />
        <Route
          path="/our_staff"
          element={
            <>
              <Header />
              <Our_staff />
              <Footer />
            </>
          }
        />
        <Route path="*" element={<Error_Page />} />
      </Routes>
    </Router>
  );
}

export default App;
