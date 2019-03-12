import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';


import '../../css/header.css';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="header-top">
                    <div className="social-links">
                        <Link to="/"><i className="fab fa-facebook-f"></i> </Link>
                        <Link to="/"><i className="fab fa-youtube"></i> </Link>
                        <Link to="/"><i className="fab fa-instagram"></i> </Link>
                        <NavLink to="/contact"> <i className="fas fa-mobile-alt"></i> </NavLink>
                    </div>
                    <div className="logo">
                        <NavLink to="/">Walk me out!</NavLink>
                    </div>
                    <div className="user-nav">
                        <NavLink to="/register"> Register</NavLink>
                        <NavLink to="/login"> Login</NavLink>
                    </div>

                </div>
                <nav className="main-navigation">
                    <div className="site-nav">
                        <NavLink to="/about"> About Us</NavLink>
                        <NavLink to="/services"> Services</NavLink>
                        <NavLink to="/contact"> Contact</NavLink>
                    </div>


                </nav>
            </header>

        )
    }
}

export default Header;