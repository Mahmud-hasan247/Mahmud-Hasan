import React from 'react';
import './Projects.css';
import image1 from '../../Images/creative-agency.PNG';
import image2 from '../../Images/Volunteer-Network.PNG';
import image3 from '../../Images/Travel-guru.PNG';
import image4 from '../../Images/E-school.PNG';

const Projects = () => {
    return (
        <div>
            <h1 className="text-center pt-3 pb-3">Some of my recent projects</h1>
            <div className="team-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="box">
                                <div className="profile-box">
                                    <div className="img-area">
                                        <img className='project-img' src={image1} alt="" />
                                    </div>
                                    <div className="img-text">
                                        <h1>Creative Agency</h1>
                                        <h2>A full stack and responsive service seller web application</h2>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, incidunt illum placeat ut vitae corporis!</p>
                                        <i className="fa fa-github"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="box">
                                <div className="profile-box">
                                    <div className="img-area">
                                        <img  className='project-img' src={image2} alt="" />
                                    </div>
                                    <div className="img-text">
                                        <h1>Volunteer Network</h1>
                                        <h2>A full stack social event management web application</h2>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, incidunt illum placeat ut vitae corporis!</p>
                                        <i className="fa fa-github"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ marginTop: '320px' , marginBottom: '20px'}} className="col-md-6">
                            <div className="box">
                                <div className="profile-box">
                                    <div className="img-area">
                                        <img  className='project-img' src={image3} alt="" />
                                    </div>
                                    <div className="img-text">
                                        <h1>Travel Guru</h1>
                                        <h2>A travel management web application</h2>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, incidunt illum placeat ut vitae corporis!</p>
                                        <i className="fa fa-github"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ marginTop: '320px', marginBottom: '20px'}} className="col-md-6">
                            <div className="box">
                                <div className="profile-box">
                                    <div className="img-area">
                                        <img className='project-img'  src={image4} alt="" />
                                    </div>
                                    <div className="img-text">
                                        <h1>Travel Guru</h1>
                                        <h2>A travel management web application</h2>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, incidunt illum placeat ut vitae corporis!</p>
                                        <i className="fa fa-youtube"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div class="card-group mt-3">
                <div class="card">
                    <img src={image1} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h3 class="card-title">Creative Agency</h3>
                        <h6>A full Stack and responsive service seller web application</h6>
                    </div>
                    <div class="card-footer d-flex">
                        <button className='btn mr-3 btn-success'><a href="https://creative-agency-391a7.web.app/" target="_blank">Visit website</a></button>
                        <button className='btn ml-5  btn-primary'><a href="https://github.com/Mahmud-hasan247/travel-guru" target="_blank">View code</a></button>
                    </div>
                </div>
                <div class="card">
                    <img src={image2} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h3 class="card-title">Volunteer Network</h3>
                        <h6>A full stack Social event management application</h6>
                    </div>
                    <div class="card-footer d-flex">
                        <button className='btn btn-success mr-3'><a href="https://volunteer-network-a05f8.web.app/" target="_blank">Visit website</a></button>
                        <button className='btn btn-primary ml-5'><a  href="https://github.com/Mahmud-hasan247/travel-guru" target="_blank">View code</a></button>
                    </div>
                </div>
                <div class="card">
                    <img src={image3} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h3 class="card-title">Travel Guru</h3>
                        <h6 class="card-text">A travel management application</h6>
                    </div>
                    <div class="card-footer justify-content-around">
                        <button className='btn btn-success'><a className="" href="https://angry-allen-78e7c5.netlify.app" target="_blank">Visit website</a></button>
                        <button  className="btn btn-primary"><a href="https://github.com/Mahmud-hasan247/travel-guru" target="_blank">View code</a></button>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Projects;