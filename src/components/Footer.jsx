import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 footer-contact">
              <h3>MicroSysLogic</h3>
              <p style={{ fontFamily: "'Poppins', sans-serif" }}>
                T-Hub, Hyderabad, Telangana, India<br />
                HSR Layout, Bangalore, Karnataka, India 560102 <br /><br />
                <strong>Phone:</strong> +91 9876543210<br />
                <strong>Email:</strong> info@microsyslogic.com<br />
              </p>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="/about">About us</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <Link to="/products/manufacturing">Manufacturing</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="/products/ai">AI Solutions</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="/products/defense">Defense</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="/products/renewable">Renewable Energy</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="/products/hospitals">Smart Hospitals</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="/products/customization">Customization</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container d-md-flex py-4">
        <div className="me-md-auto text-center text-md-start">
          <div className="copyright">
            &copy; Copyright <strong><span>MicroSysLogic</span></strong>. All Rights Reserved
          </div>
        </div>
        <div className="social-links text-center text-md-end pt-3 pt-md-0">
          <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
          <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
          <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
