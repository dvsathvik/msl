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
          <Link to="/" className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src="/assets/img/companies/logo.webp" alt="MicroSysLogic Logo" />
            <span className="logo-text">MicroSysLogic</span>
          </Link>

          {/* Standard Links */}
          <div className="top-links" style={{ alignItems: 'center' }}>
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</Link>
            <Link to="/about">About us</Link>

            <div className="nav-dropdown">
              <Link to="/products/defense">Defense</Link>
              <div className="nav-dropdown-menu">

                <Link to="/products/defense/t90"><i className="bi bi-broadcast"></i> T90’s V2V RF Comm. & Automation</Link>
                <Link to="/products/defense/g3000"><i className="bi bi-airplane"></i> Flight control Monitor Device</Link>
                <Link to="/products/defense/locker"><i className="bi bi-safe"></i> Smart AI locker</Link>
                <Link to="/products/defense/video"><i className="bi bi-camera-reels"></i> Secure Handheld Communicator</Link>
                <Link to="/products/defense/soc-modernization"><i className="bi bi-cpu"></i> Legacy to Latest SOC Modernization</Link>
                <Link to="/products/defense/ai-security"><i className="bi bi-shield-lock"></i> AI Secured Zones Monitoring System</Link>
              </div>
            </div>

            <div className="nav-dropdown">
              <Link to="/products/ai">AI</Link>
              <div className="nav-dropdown-menu">
                <Link to="/products/ai/surveillance"><i className="bi bi-camera-video"></i> AI High Security Surveillance</Link>
                <Link to="/products/ai/traffic"><i className="bi bi-stoplights"></i> AI High Traffic Signaling System</Link>
                <Link to="/products/ai/tender"><i className="bi bi-file-earmark-text"></i> AI Tender/Bidding Solution</Link>
              </div>
            </div>

            <div className="nav-dropdown">
              <Link to="/products/renewable">Renewable Energy</Link>
              <div className="nav-dropdown-menu">
                <Link to="/products/renewable/solar"><i className="bi bi-brightness-high"></i> Smart Solar Energy Systems</Link>
              </div>
            </div>

            <div className="nav-dropdown">
              <Link to="/products/hospitals">Smart Hospitals</Link>
              <div className="nav-dropdown-menu">
                <Link to="/products/hospitals/automation"><i className="bi bi-hospital"></i> Smart Hospital IOT Automation & Monitoring System</Link>
                <Link to="/products/hospitals/locker"><i className="bi bi-shield-lock"></i> AI Secured Locker Systems for Drugs</Link>
                <Link to="/products/hospitals/asset"><i className="bi bi-box-seam"></i> Asset Management</Link>
                <Link to="/products/hospitals/nurse-tablet"><i className="bi bi-tablet"></i> Smart AI Locker for Nurse Tablets</Link>
                <Link to="/products/hospitals/impress-stock"><i className="bi bi-inboxes"></i> Impress Stock AI Medicine Access</Link>
              </div>
            </div>

            <div className="nav-dropdown">
              <Link to="/products/manufacturing">Manufacturing Automations</Link>
              <div className="nav-dropdown-menu">
                <Link to="/products/manufacturing/iot"><i className="bi bi-cpu"></i> Industrial IOT</Link>
                <Link to="/products/manufacturing/mining"><i className="bi bi-shield-fill-exclamation"></i> Safety Mining</Link>
                <Link to="/products/manufacturing/lift"><i className="bi bi-arrow-up-square"></i> Multi Escalators & lift failures Identification</Link>
              </div>
            </div>

            <div className="nav-dropdown">
              <Link to="/products/customization">Customization</Link>
              <div className="nav-dropdown-menu">
                <Link to="/products/customization/face"><i className="bi bi-person-bounding-box"></i> Face Analytics on Broadcom Soc Platform</Link>
                <Link to="/products/customization/drone"><i className="bi bi-bullseye"></i> Onboard Vehicle Detection for Drones</Link>
                <Link to="/products/customization/thermal"><i className="bi bi-thermometer-half"></i> Thermal camera distance Detection</Link>
                <Link to="/products/customization/dehaze"><i className="bi bi-cloud-haze"></i> Dehaze / Snow-Fog Removal</Link>
                <Link to="/products/customization/defect"><i className="bi bi-search"></i> Product Defect Detect</Link>

              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="top-actions">
            <div className="nav-dropdown" style={{ height: 'auto', margin: 0 }}>
              <button className="srch-btn" aria-label="Explore Menu">
                <i className="bi bi-list" aria-hidden="true" style={{ fontSize: '24px' }}></i>
              </button>
              <div className="nav-dropdown-menu" style={{ left: 'auto', right: 0, top: 'calc(100% + 15px)', minWidth: '220px' }}>
                <Link to="/contact"><i className="bi bi-envelope"></i> Contact us</Link>
                <Link to="#" onClick={(e) => e.preventDefault()}><i className="bi bi-file-earmark-arrow-down"></i> Brochure</Link>
              </div>
            </div>
          </div>

        </div>
      </div>



    </header>
  );
};

export default Header;

