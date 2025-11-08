import React from "react";
import "./Footer.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaPinterestP } from "react-icons/fa";
import logo from "/images/Mohh logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo + Description */}
        <div className="footer-section about">
          <img src={logo} alt="MOHH Logo" className="footer-logo" />
          <p>
            Our motto at MOHH Interiors is to give shape to your dreams. We are
            committed to shaping dream spaces with interiors that are both
            aesthetic and functional. Our team of experts puts their hearts and
            soul into executing time-bound, cost-effective projects to
            personalize them to your choice.
          </p>
        </div>

        {/* Company */}
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li>Design Process</li>
            <li>Press</li>
          </ul>
        </div>

        {/* Explore */}
        <div className="footer-section">
          <h3>Explore</h3>
          <ul>
            <li>Refer And Earn</li>
            <li>Looks</li>
            <li>About Us</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p><FaPhoneAlt className="icon" /> +91 9989621171</p>
          <p><FaEnvelope className="icon" /> Get a Quote</p>
          <p>
            <FaMapMarkerAlt className="icon" /> Flat no.3, First Floor, H.no.
            6-3-347/22/2 Ishwarya Nilayam, Dwarakpuri Colony, Irram Manzil
            Colony, Punjagutta, Hyderabad, Telangana 500082
          </p>

          <div className="social-icons">
            <FaLinkedinIn />
            <FaInstagram />
            <FaPinterestP />
            <FaFacebookF />
            <FaYoutube />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 MOHH Interiors. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
