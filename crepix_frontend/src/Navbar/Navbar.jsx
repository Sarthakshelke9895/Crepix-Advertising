import React from 'react'
import { useState, useEffect } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll';
import logo from '../Assets/weblogo1.png'
import arrow from '../Assets/arrow.png'
import menu_icon from "../Assets/menu.png";
import close_icon from "../Assets/close.png";


const Navbar = () => {
  const handleEnquiry = () => {
  const message = `Hi, I want to enquire about your car services.`;
  // Replace 919XXXXXXXXX with your full number (country code + number)
  window.open(`https://wa.me/918767143132?text=${encodeURIComponent(message)}`);
};
 const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

const [menuOpen, setMenuOpen] = useState(false)

const toggleMenu = () =>
{
setMenuOpen(!menuOpen)
}

const closeMenu = () =>
{
setMenuOpen(false)
}


  return (
    <div  className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo-and-name"   onClick={() =>
  {
    window.location.reload();
  }}>
            <img src={logo} alt="Logo" className='web-logo' />
            <div className="company-name">
              <h2>Rohan Cab Service</h2>
              <h4>Car | Rental | Sales</h4>
            </div>

      </div>

      <div className="sections-and-book-button">
          <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
            <li>
              <Link
            to="home"
            smooth={true}
            duration={500}
            onClick={closeMenu}
          >
            Home
          </Link>
            </li>
            <li>
              <Link
            to="services"
            smooth={true}
          offset={-90}
            duration={500}
             onClick={closeMenu}
          >
            Services
          </Link>
            </li>
            <li>
              <Link
            to="car"
            smooth={true}
            offset={-80}
            duration={500}
             onClick={closeMenu}
          >
            Cars
          </Link>
            </li>
            <li>
              <Link
            to="reviews"
            smooth={true}
            offset={-80}
            duration={500}
             onClick={closeMenu}
          >
            About
          </Link>
            </li>
            <li>
              <Link
            to="contact"
            smooth={true}
            offset={-80}
            duration={500}
             onClick={closeMenu}
          >
            Contact
          </Link>
            </li>
          </ul>
  
        <button className="book-btn-navbar"  onClick={handleEnquiry}>
          Book Now
          <img src={arrow} alt="Arrow" className='arrow' />
        </button>

          <div className="hamburger" onClick={toggleMenu}>

          <img
            src={menuOpen ? close_icon : menu_icon}
            alt="menu"
          />

        </div>
      </div>

    </div>
  )
}

export default Navbar
