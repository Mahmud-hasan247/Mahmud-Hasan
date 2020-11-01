import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="container">
            <nav class="navbar  navbar-expand-lg navbar-light pt-3">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon light"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                        <Link to='/home'><a class="color-white ml-5 active" >Home<span class="sr-only">(current)</span></a></Link>
                        <Link to='/project'><a className='ml-5' >Projects</a></Link>
                        <Link to='/blog'><a className='ml-5' >Blog</a></Link>
                        <Link to='/about'><a className='ml-5' >About</a></Link>
                        <Link to='/contact'><a className='ml-5'>Contact</a></Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;