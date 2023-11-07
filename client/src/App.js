import React from 'react';
import NavBar from './components/NavBar';
import "bootstrap/dist/css/bootstrap.css";

import LandingPage from './pages/LandingPage';
import AboutSection from './pages/AboutPage';
import ContactSection from './pages/ContactPage';
import BlogSection from "./pages/BlogPage";
import LoginSection from "./pages/Login"

import {Route, Routes} from 'react-router-dom';

const App = () => {
    return (
      <>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/contact" element={<ContactSection />} />
            <Route path="/blog" element={<BlogSection />} />
            <Route path="/login" element={<LoginSection />} />
          </Routes>
        </div>
      </>
    );
};

export default App;