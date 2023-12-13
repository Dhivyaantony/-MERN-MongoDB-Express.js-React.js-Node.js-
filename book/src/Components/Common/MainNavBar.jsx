import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; 
import './nav.css';
import logo from '../../asset/logo.jpg';
//import { setUserDetails } from '../../toolkit/userSlice';

export default function NavBar() {
  const userDetails = useSelector(state => state.user.userDetails);

  const handleLogout = () => {
  
    console.log('Logout button clicked');
  };

  return (
    <div>
      <header>
        <nav>
          <div className="logo"></div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/AddNewCourt">New Court</Link></li>

            <li><Link to="/booking">Book a Turf</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <div className="user-details">
            
              <p>Welcome,{userDetails.fName}</p>
            
          </div>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </nav>
      </header>

      <section className="hero">
        <h1>Welcome to Your Turf Booking Site</h1>
        <p>Book the best turfs for your sports activities!</p>
        <Link to="/booking" className="cta-button">Book Now</Link>
      </section>


      <footer>
        <p>&copy; 2023 Your Turf Booking Site. All rights reserved.</p>
      </footer>
    </div>
  );
}
