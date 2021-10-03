import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container ">
          <div className="header-section">
          <h1><span>Language</span> School</h1>
          </div>
            
          <div>
              
           <nav className="nav-bar">
                <NavLink to="/home" className="main-nav">HOME</NavLink>
                <NavLink to="/courses" className="main-nav">COURSES</NavLink>
                <NavLink to="/about" className="main-nav">ABOUT</NavLink>
                <NavLink to="/contacts" className="main-nav">CONTACTS</NavLink>
            </nav>
           
          </div>
            
        </div>
    );
};

export default Header;



// import { BrowserRouter, Switch, Route } from 'react-router-dom';