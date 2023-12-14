import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './nav.css'; 
import { setUserDetails } from '../../toolkit/userSlice';

const NavBar = () => {
  const userDetails = useSelector((state) => state.user.userDetails);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add your logout logic here
    console.log('Logout button clicked');
  };

  const handleNavigation = (path) => {
    // Use the navigate function to programmatically navigate
    navigate(path);
  };

  return (
    <div>
      <header>
        <nav>
          <div className="logo"></div>
          <ul className="nav-links">
            <li onClick={() => handleNavigation('/')}>Home</li>
            <li onClick={() => handleNavigation('/AddFormCourt')}>New Court</li>
            <li onClick={() => handleNavigation('/about')}>About Us</li>
            <li onClick={() => handleNavigation('/contact')}>Contact</li>
          </ul>
          <div className="user-details">
            {userDetails && (
              <p>Welcome, {userDetails.fName}</p>
            )}
          </div>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </nav>
      </header>

      <section className="hero">
        <h1>Welcome to Your Turf Booking Site</h1>
        <p>Book the best turfs for your sports activities!</p>
      </section>


      <footer>
        <p>&copy; 2023 Your Turf Booking Site. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default NavBar;
