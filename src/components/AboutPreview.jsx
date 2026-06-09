import React from 'react';
import { Link } from 'react-router-dom';

const AboutPreview = () => {
  return (
    <section id="about" className="about section-bg">
      <div className="container" data-aos="fade-up">
        <div className="row no-gutters">
          <div className="content col-xl-5 d-flex align-items-stretch">
            <div className="content">
              <h3>About Us</h3>
              <p>
                MicroSysLogic Technologies started with the aim to build R&D Solutions and Customer services in the Semiconductor/IoT/Automotive industries. The major focus of MicroSysLogic is Embedded SW Development, Home Appliances, Security Solutions, Industrial Electronics, Automotive and IoT solutions
              </p>
              <Link to="/about" className="about-btn"><span>About us</span> <i className="bx bx-chevron-right"></i></Link>
            </div>
          </div>
          <div className="col-xl-7 d-flex align-items-stretch">
            <div className="icon-boxes d-flex flex-column justify-content-center">
              <div className="row">
                <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                  <i className="bx bx-receipt"></i>
                  <h4>End to End IoT Services</h4>
                  <p>We provide one-stop solution to address all aspects of HW Design/SW solutions </p>
                </div>
                <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                  <i className="bx bx-cube-alt"></i>
                  <h4>Embedded & Platform Software Services</h4>
                  <p>We equipped to address all your DSP, AI, Embedded and Platform SW design Services</p>
                </div>
                <div className="col-md-12 icon-box" data-aos="fade-up" data-aos-delay="400">
                  <i className="bx bx-shield"></i>
                  <h4>Software and Cloud Solutions</h4>
                  <p>Provide a wide range of services on Embedded Cloud solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
