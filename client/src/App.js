import React from 'react';
import {Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';

import LandingPage from './pages/LandingPage';
import AboutSection from './pages/AboutPage';
import ContactSection from './pages/ContactPage';

const App = () => {
    return (
        <div className="container">
            <NavBar/> 
            <Routes>
            </Routes>

            <LandingPage />
            <AboutSection />
            <ContactSection />
        </div>
    );
};

export default App;