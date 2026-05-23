import React from "react";
import { Link } from "react-scroll";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-about">

          <h2>
            Rohan Cab Service
          </h2>

          <p>
            Reliable and professional car rental services for daily travel,
            airport transfers, corporate trips, and special events.
          </p>

        </div>

        <div className="footer-links">

          <h3>
            Quick Links
          </h3>

          <ul>

            <li>
              <Link
              to="home"
              smooth={true}
              duration={500}
              offset={-82}
            >
              Home
            </Link>
            </li>

            <li>
              <Link
              to="services"
              smooth={true}
              duration={500}
              offset={-90}
            >
              Services
            </Link>
            </li>

            <li>
              <Link
              to="car"
              smooth={true}
              duration={500}
              offset={-80}
            > 
              Cars
            </Link>
            </li>

            <li>
              <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
            >
              Contact
            </Link>
            </li>

          </ul>

        </div>

        <div className="footer-services">

          <h3>
            Our Services
          </h3>

          <ul>

            <li>
                          <Link
              to="services"
              smooth={true}
              duration={500}
              offset={-90}
            >
            Local City Travel
            </Link>
            </li>

            <li>
              <Link
              to="services"
              smooth={true}
              duration={500}
              offset={-90}
            >
              Airport Pickup & Drop
            </Link>
            </li>

            <li>
              <Link
              to="services"
              smooth={true}
              duration={500}
              offset={-90}
            >
              Outstation Travel
            </Link>
            </li>

            <li>
              <Link
              to="services"
              smooth={true}
              duration={500}
              offset={-90}
            >
              Corporate Travel
            </Link>
            </li>

          </ul>

        </div>

        <div className="footer-contact">

          <h3>
            Contact
          </h3>

          <p>
            Dhayreshwar Mandir, Benkar Nagar, Dhayari, Pune, Maharashtra 411041
          </p>

          <p>
           +91 9960161934 <br />
           +91 8767143132
          </p>

          <p>
          rohancarenterprises@gmail.com
          </p>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Rohan Cars Enterprises. All rights reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;
