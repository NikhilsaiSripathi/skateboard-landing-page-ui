import React from 'react';
import './Header.css';
import dribbbleLogo from '../../assets/images/dribbble-logo.png'; 
import { FaHeart, FaBookmark } from 'react-icons/fa'; 

const Header = () => {
  return (
    <header className="header">
      <nav className="nav-container">
        <ul className="nav-list">
          <li><a href="#find-designers" aria-label="Find designers">Find designers ▾</a></li>
          <li><a href="#inspiration" aria-label="Inspiration">Inspiration</a></li>
          <li><a href="#jobs" aria-label="Find jobs">Jobs</a></li>
          <li><a href="#go-pro" aria-label="Go Pro">Go Pro</a></li>
        </ul>

        <div className="logo-container">
          <img src={dribbbleLogo} alt="Dribbble Logo" className="logo" />
        </div>

        <div className="nav-actions">
          <div className="search-bar">
            <i className="fas fa-search search-icon" aria-hidden="true"></i>
            <input type="text" placeholder="Search..." aria-label="search" />
          </div>
          <button className="login-btn" aria-label="Log in">Log in</button>
          <button className="signup-btn" aria-label="Sign up">Sign up</button>
        </div>
      </nav>

      <div className="header-content">
        <h1 className="title">Skateboard landing page ui</h1>
        <div className="user-info">
          
        </div>

        <div className="action-buttons">
          <FaHeart className="icon" />
          <FaBookmark className="icon" />
          <button className="get-in-touch">Get in touch</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
