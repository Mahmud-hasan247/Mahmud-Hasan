import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import mahmud from '../Images/mahmud.jpg';

const About = () => {
    return (
        <>
        <div className="row pt-5">
            <div className="col-md-6 pt-5">
                {/* <img className='img-fluid  h-25 w-30 rounded-circle ' src={mahmud} alt=""/> */}
                <h1>Mahmud Hasan</h1>
                <h3>A full stack web developer</h3>
                <p>I’m a web developer. I build modern web application using most popular web technologies. </p>
            </div>
            <div className="col-md-6 pl-5 pt-5">
                <h2>Skills</h2>
                <strong>JavaScript</strong>

            </div>
        </div>
        </>
    );
};

export default About;