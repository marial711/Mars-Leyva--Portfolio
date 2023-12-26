import React from 'react';
import NavBar from './components/NavBar';
import "bootstrap/dist/css/bootstrap.css";
import "./assets/styles/css/main.css";

import LandingPage from './pages/LandingPage';
import AboutSection from './pages/AboutPage';
import ContactSection from './pages/ContactPage';
import Footer from "./components/Footer";

import {Route, Routes} from 'react-router-dom';

const App = () => {
    return (
      <div >
        <NavBar />
        <div className='container-fluid'>
            <Routes>
              <Route path="/#home"  element={<LandingPage/>}/>
              <Route path="/#about" element={<AboutSection />} />
              <Route path="/#contact" element={<ContactSection /> }/>
            </Routes>
          <LandingPage />
          <AboutSection />
          <ContactSection/>
        </div>
        <Footer />
      </div>
    );
};

export default App;