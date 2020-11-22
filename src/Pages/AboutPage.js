import React from 'react';
import About from '../About/About';
import Navbar from '../Components/Navbar/Navbar';

const AboutPage = () => {
    return (
        <div className="pages-bg">
            <div className="container">
            <Navbar/>
            <About/>
        </div>
        </div>
    );
};

export default AboutPage;