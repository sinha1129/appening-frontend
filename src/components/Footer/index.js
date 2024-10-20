import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import "./index.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="items-container">
        <div className="footer-items">
          <h1 className="footer-heading">Quick Links</h1>
          <a className="links">Who We Are</a>
          <a className="links">What We Treat</a>
          <a className="links">Services</a>
          <a>Contact Us</a>
        </div>
        <div className="footer-items">
          <h1 className="footer-heading">Resources</h1>
          <a className="links">FAQs</a>
          <a className="links">Blog</a>
          <a className="links">Fees and Insurance</a>
        </div>
        <div className="footer-items">
          <h1 className="footer-heading">Legal</h1>
          <a className="links">Terms</a>
          <a className="links">Privacy</a>
          <a className="links">ReTrun Policy</a>
          <a className="links">Cookie Settings</a>
        </div>
        <div className="footer-items">
          <h1 className="footer-heading">Business Hours</h1>
          <p className="links">Monday - Thursday</p>
          <p className="links">9:00 AM - 4:00 PM</p>
          <h1 className="footer-heading">For Careers</h1>
          <p className="links">Intrested in joining the psychiatry Team?</p>
          <p className="links">Career@psychiatry.com</p>
        </div>
        <div className="contact-container">
          <h1 className="footer-heading">Locate us</h1>
          <p className="links">
            1820 E Ray Road, STE A107, Chandler, Arizona 85225
          </p>
          <p className="links">Phone: 480-526-9292</p>
          <h1 className="footer-heading">Follow us</h1>
          <div className="social-media">
            <div className="platform">
              <FaInstagram />
            </div>
            <div className="platform">
              <FaFacebookSquare />
            </div>
            <div className="platform">
              <FaTwitter />
            </div>
            <div className="platform">
              <FaTiktok />
            </div>
            <div className="platform">
              <FaLinkedin />
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-container"> 
      <hr className="footer-line" />
      <p className="copy-right">© 2024 Psychiatry. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
