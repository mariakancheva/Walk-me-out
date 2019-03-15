import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../css/header.css';

const Header = (props) => {

    const { loggedIn, isAdmin, logout } = props

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
                    {!loggedIn && <NavLink to="/register"> Register</NavLink>}
                    {!loggedIn && <NavLink to="/login"> Login</NavLink>}
                    {loggedIn && <a href='javascript:void(0)' onClick={logout}>Logout</a>}

                </div>

            </div>
            <nav className="main-navigation">
                <div className="site-nav">
                    {!loggedIn && !isAdmin && <NavLink to="/about"> About Us</NavLink>}
                    {!loggedIn && !isAdmin && <NavLink to="/services"> Services</NavLink>}
                    {!loggedIn && !isAdmin && <NavLink to="/contact"> Contact</NavLink>}

                    {loggedIn && !isAdmin && <NavLink to="/profile">Profile</NavLink>}
                    {loggedIn && !isAdmin && <NavLink to="/dog">Dog</NavLink>}
                    {loggedIn && !isAdmin && <NavLink to="/walk">Walk</NavLink>}

                </div>

            </nav>
        </header>

    )
}

export default Header;