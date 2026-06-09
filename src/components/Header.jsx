import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`new-header-container ${isScrolled ? 'scrolled' : ''}`}>
      
      {/* Top Main Navigation */}
      <div className="header-top">
        <div className="nav-container">
          
          {/* LOGO */}
          <Link to="/" className="nav-logo">
            <img src="/assets/img/logo.png" alt="MicroSysLogic Logo" />
            <span className="logo-text">MicroSysLogic</span>
          </Link>

          {/* Standard Links */}
          <div className="top-links">
            <Link to="/">Home</Link>
            <Link to="/about">About us</Link>
            <Link to="/career">Careers</Link>
            <Link to="/contact">Contact us</Link>
          </div>

          {/* Actions */}
          <div className="top-actions">
            <button className="srch-btn" aria-label="Search">
              <i className="bi bi-search" aria-hidden="true"></i>
            </button>
            <button className="broch-btn">
              <i className="bi bi-file-earmark-arrow-down" aria-hidden="true"></i>
              Brochure
            </button>
          </div>

        </div>
      </div>

      {/* Bottom Product Navigation */}
      <div className="header-bottom">
        <div className="nav-container">
          <div className="product-nav">
            
            <span className="sol-label">PRODUCTS</span>

            <div className="nav-dropdown">
              <Link to="/products/manufacturing">
                <i className="bi bi-gear"></i> Manufacturing Automations
                <i className="bi bi-chevron-down ch-icon"></i>
              </Link>
              <div className="nav-dropdown-menu">
                <Link to="/products/manufacturing/iot"><i className="bi bi-cpu"></i> Industrial IOT</Link>
                <Link to="/products/manufacturing/mining"><i className="bi bi-shield-fill-exclamation"></i> Safety Mining</Link>
                <Link to="/products/manufacturing/lift"><i className="bi bi-arrow-up-square"></i> Multi Escalators & lift failures Identification</Link>
              </div>
            </div>

            <div className="nav-dropdown">
              <Link to="/products/ai">
                <i className="bi bi-cpu"></i> AI Solutions
                <i className="bi bi-chevron-down ch-icon"></i>
              </Link>
              <div className="nav-dropdown-menu">
                <Link to="/products/ai/surveillance"><i className="bi bi-camera-video"></i> AI High Security Surveillance</Link>
                <Link to="/products/ai/traffic"><i className="bi bi-stoplights"></i> AI High Traffic Signaling System</Link>
                <Link to="/products/ai/tender"><i className="bi bi-file-earmark-text"></i> AI Tender/Bidding Solution</Link>
              </div>
            </div>

            <div className="nav-dropdown">
              <Link to="/products/defense">
                <i className="bi bi-shield"></i> Defense
                <i className="bi bi-chevron-down ch-icon"></i>
              </Link>
              <div className="nav-dropdown-menu">
                <Link to="/products/defense/mission"><i className="bi bi-star"></i> Mission critical technology</Link>
                <Link to="/products/defense/t90"><i className="bi bi-broadcast"></i> T90’s Vehicles2Vehicles RF Comm. & Automation</Link>
                <Link to="/products/defense/g3000"><i className="bi bi-airplane"></i> G3000 Cockpit Monitor Device in Avionics</Link>
                <Link to="/products/defense/locker"><i className="bi bi-safe"></i> SMART AI Locker Systems For Defence</Link>
                <Link to="/products/defense/video"><i className="bi bi-camera-reels"></i> High Secured Video and Voice Streaming</Link>
              </div>
            </div>

            <div className="nav-dropdown">
              <Link to="/products/renewable">
                <i className="bi bi-brightness-high"></i> Renewable Energy
                <i className="bi bi-chevron-down ch-icon"></i>
              </Link>
              <div className="nav-dropdown-menu">
                <Link to="/products/renewable/solar"><i className="bi bi-brightness-high"></i> Smart Solar Energy Systems</Link>
              </div>
            </div>

            <div className="nav-dropdown">
              <Link to="/products/hospitals">
                <i className="bi bi-heart-pulse"></i> Smart Hospitals
                <i className="bi bi-chevron-down ch-icon"></i>
              </Link>
              <div className="nav-dropdown-menu">
                <Link to="/products/hospitals/automation"><i className="bi bi-hospital"></i> Smart Hospital IOT Automation & Monitoring System</Link>
                <Link to="/products/hospitals/locker"><i className="bi bi-shield-lock"></i> AI Secured Locker Systems for Drugs</Link>
                <Link to="/products/hospitals/asset"><i className="bi bi-box-seam"></i> Asset Management</Link>
              </div>
            </div>

            <div className="nav-dropdown">
              <Link to="/products/customization">
                <i className="bi bi-sliders"></i> Customization
                <i className="bi bi-chevron-down ch-icon"></i>
              </Link>
              <div className="nav-dropdown-menu">
                <Link to="/products/customization/face"><i className="bi bi-person-bounding-box"></i> Face Analytics on Broadcom Soc Platform</Link>
                <Link to="/products/customization/drone"><i className="bi bi-bullseye"></i> Onboard Vehicle Detection for Drones</Link>
                <Link to="/products/customization/thermal"><i className="bi bi-thermometer-half"></i> Thermal camera distance Detection</Link>
                <Link to="/products/customization/dehaze"><i className="bi bi-cloud-haze"></i> Dehaze / Snow-Fog Removal</Link>
                <Link to="/products/customization/defect"><i className="bi bi-search"></i> Product Defect Detect</Link>
                <Link to="/products/customization/other"><i className="bi bi-grid-3x3-gap"></i> other</Link>
              </div>
            </div>

          </div>
        </div>
      </div>

    </header>
  );
};

export default Header;
