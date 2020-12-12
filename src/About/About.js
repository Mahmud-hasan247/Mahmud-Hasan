import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import mahmud from '../Images/Mahmud Hasan.jpg';


const About = () => {
    return (
        <>
            <div className="row pt-3">
                <div className="col-md-6 pt-3">
                    <img className='img-fluid myPic rounded-circle ' src={mahmud} alt="" />
                    <h1>Mahmud Hasan</h1>
                    <h3>A full stack web developer</h3>
                    <p>I’m a web developer. I build modern web application using most popular web technologies. </p>
                    <Link to='/project'><a type="button" class="m-1 btn 
                    btn-outline-success">Projects</a></Link>
                    <a type="button" href='https://github.com/Mahmud-hasan247' target='_blank' class="m-1 btn btn-outline-success">Github</a>
                    <a type="button" href='https://www.linkedin.com/in/mahmudhasan247/' target="_blank" class="m-1 btn btn-outline-success">LinkedIn</a>

                </div>
                <div className="col-md-6 pl-5 pt-3">
                    <h2>Skills</h2>
                    <div className="underline"></div>
                    <br />
                    <h4 className='ml-3 mt-3'>Expertise</h4>
                    <div className="underline"></div>
                    <div className="d-flex">
                        <p className='skills'>JavaScript</p>
                        <p className='skills'>ReactJS</p>
                        <p className='skills'>ES6</p>
                        <p className='skills'>React Router</p>
                    </div>
                    <div className="d-flex">
                        <p className='skills'>HTML5</p>
                        <p className='skills'>CSS3</p>
                        <p className='skills'>Bootstrap</p>
                    </div>
                    <h4 className='ml-3 mt-3'>Comfortable</h4>
                    <div className="underline"></div>
                    <div className="d-flex">
                        <p className='skills'>Node.JS</p>
                        <p className='skills'>Express</p>
                        <p className='skills'>MongoDB</p>
                    </div>

                    <h4 className='ml-3 mt-3'>Familiar</h4>
                    <div className="underline"></div>
                    <div className="d-flex">
                        <p className='skills'>Material UI</p>
                        <p className='skills'>Redux</p>
                        <p className='skills'>Python</p>
                    </div>

                    <h4 className='ml-3 mt-3'>Tools</h4>
                    <div className="underline"></div>
                    <div className="d-flex">
                        <p className='skills'>VS Code</p>
                        <p className='skills'>Firebase</p>
                        <p className='skills'>Netlify</p>
                        <p className='skills'>Heroku</p>
                    </div>

                    <p className='skills'>Github</p>

                </div>
            </div>
        </>
    );
};

export default About;