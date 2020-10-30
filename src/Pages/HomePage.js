import React from 'react';
import Footer from '../Components/Footer/Footer';
import Home from '../Components/Home/Home';
import './HomePage.css';

const HomePage = () => {
    return (
        <div id="background">
            <div className='container' id="transparent">
                <Home />
                {/* <Footer /> */}
            </div>
        </div>
    );
};

export default HomePage;