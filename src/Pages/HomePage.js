import React from 'react';
import Footer from '../Components/Footer/Footer';
import Home from '../Components/Home/Home';
import Navbar from '../Components/Navbar/Navbar';
import './HomePage.css';

const HomePage = () => {
    return (
        <div id="background">
            <div className='container' id="transparent">
                <Navbar/>
                <Home />
                {/* <Footer /> */}
            </div>
        </div>
    );
};

export default HomePage;