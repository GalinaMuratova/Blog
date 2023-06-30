import React from 'react';
import {Link, NavLink} from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {
    return (
        <div className='header d-flex justify-content-around'>
            <Link to='/' className='blog-logo' />
            <nav className="main-nav">
                <ul className='nav-list'>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/new-post">Add</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contacts">Contacts</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;