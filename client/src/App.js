import React from 'react';
import Header from './components/Header';
import "bootstrap/dist/css/bootstrap.css";
import "./assets/styles/css/main.css";
import HomeScreen from './screen/HomeScreen/HomeScreen';
import Footer from "./components/Footer";

import {Route, Routes} from 'react-router-dom';

const App = () => {
    return (
      <>
        <Header />
        <main className='container-fluid'>
            <Routes>
              <Route path="/"  element={<HomeScreen />}/>
            </Routes>
        </main>
        <Footer />
      </>
    );
};

export default App;