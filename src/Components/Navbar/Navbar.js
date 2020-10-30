import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg pt-3">
                <div class="collapse justify-content-end navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to='/home'><a class="nav-link color-white active" >Home<span class="sr-only">(current)</span></a></Link>
                        <Link to='/project'><a class="nav-link" >Projects</a></Link>
                        <Link to='/blog'><a class="nav-link">Blog</a></Link>
                        <Link to='/about'><a class="nav-link" >About</a></Link>
                        <Link to='/contact'><a class="nav-link" >Contact</a></Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;