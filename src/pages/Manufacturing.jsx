import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SafeLoadAntiLeakage from '../components/SafeLoadAntiLeakage';

const Manufacturing = () => {
  const { productId } = useParams();
  
  // Refs for scrolling
  const iotRef = useRef(null);
  const miningRef = useRef(null);
  const liftRef = useRef(null);

  useEffect(() => {
    // Scroll to section based on productId
    const scrollToSection = () => {
      let targetRef = null;
      if (productId === 'iot') targetRef = iotRef;
      else if (productId === 'mining') targetRef = miningRef;
      else if (productId === 'lift') targetRef = liftRef;
      
      if (targetRef && targetRef.current) {
        setTimeout(() => {
          targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      } else {
        window.scrollTo(0, 0);
      }
    };

    scrollToSection();
  }, [productId]);

  return (
    <>
      <style>
        {`
          /* Strict overrides for this page to match brand guidelines */
          .msl-crimson { color: #c0001a !important; }
          .msl-navy { color: #1a2a4a !important; }
          .msl-bg-navy { background-color: #1a2a4a !important; }
          .msl-bg-gray { background-color: #f5f6f8 !important; }
          .msl-text-body { color: #4a5568 !important; }
          
          /* Override gradients from global CSS */
          .hero-text h1 span.msl-solid-highlight {
            background: none !important;
            -webkit-text-fill-color: initial !important;
            color: #c0001a !important;
          }
          
          /* Override primary button color */
          .msl-btn-primary {
            background: #c0001a !important;
            border-color: #c0001a !important;
            box-shadow: 0 4px 14px rgba(192, 0, 26, 0.2) !important;
          }
          .msl-btn-primary:hover {
            background: #a00015 !important;
            transform: scale(1.03) !important;
            box-shadow: 0 6px 20px rgba(192, 0, 26, 0.3) !important;
          }

          .breadcrumb-link {
            color: #a0aec0;
            text-decoration: none;
            transition: color 0.2s;
          }
          .breadcrumb-link:hover {
            color: #ffffff;
          }

          /* Title case enforcement */
          .title-case {
            text-transform: none !important;
          }

          /* Subtle lift on hover for cards */
          .lift-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .lift-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 24px rgba(0,0,0,0.08) !important;
          }

          /* IIoT Flowchart Styles */
          .iiot-flow {
            display: flex;
            flex-direction: column;
            gap: 15px;
          }
          @media (min-width: 1200px) {
            .iiot-flow {
              flex-direction: row;
              align-items: stretch;
            }
          }
          .iiot-node {
            flex: 1;
            background: #ffffff;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0,0,0,0.03);
            display: flex;
            flex-direction: column;
            transition: transform 0.3s ease, border-color 0.3s ease;
          }
          .iiot-node:hover {
            transform: translateY(-5px);
            border-color: #c0001a;
          }
          .iiot-node-header {
            background: #1a2a4a;
            color: #ffffff;
            padding: 12px 10px;
            text-align: center;
            font-weight: 700;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          .iiot-node-body {
            padding: 15px;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
          }
          .iiot-list {
            list-style: none;
            padding: 0;
            margin: 0;
            text-align: left;
            width: 100%;
          }
          .iiot-list li {
            margin-bottom: 8px;
            font-size: 13px;
            color: #4a5568;
            display: flex;
            align-items: flex-start;
            gap: 8px;
          }
          .iiot-list li i {
            color: #c0001a;
            margin-top: 3px;
          }
          .industry-card-footer {
            background: #f8fafc;
            border-top: 1px solid #e2e8f0;
            padding: 15px;
            font-size: 12px;
            font-weight: 600;
            color: #1a2a4a;
            text-align: center;
            border-bottom-left-radius: 16px;
            border-bottom-right-radius: 16px;
          }
          .iiot-node:hover {
            transform: translateY(-5px);
            border-color: #c0001a;
            box-shadow: 0 0 15px rgba(192,0,26,0.3) !important;
          }
          
          /* Industrial Grid Pattern */
          .industrial-grid {
            background-image: 
              linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
            background-size: 30px 30px;
          }

          /* Caution Stripe Pattern */
          .caution-stripe {
            position: relative;
            overflow: hidden;
          }
          .caution-stripe::after {
            content: '';
            position: absolute;
            top: 0; right: 0; bottom: 0;
            width: 150px;
            background: repeating-linear-gradient(
              45deg,
              rgba(192, 0, 26, 0.1),
              rgba(192, 0, 26, 0.1) 10px,
              transparent 10px,
              transparent 20px
            );
            pointer-events: none;
          }

          /* Staggered Hero Animations */
          @keyframes fadeUpAnim {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .swiper-slide-active .hero-tag { animation: fadeUpAnim 0.6s ease forwards 0.2s; opacity: 0; }
          .swiper-slide-active h1 { animation: fadeUpAnim 0.6s ease forwards 0.4s; opacity: 0; }
          .swiper-slide-active p { animation: fadeUpAnim 0.6s ease forwards 0.6s; opacity: 0; }
          .swiper-slide-active .hero-mini-features { animation: fadeUpAnim 0.6s ease forwards 0.8s; opacity: 0; }
          .swiper-slide-active .hero-buttons { animation: fadeUpAnim 0.6s ease forwards 1.0s; opacity: 0; }

          /* Lift Control Panel Styles */
          @keyframes blink {
            0% { opacity: 1; box-shadow: 0 0 8px #10b981; }
            50% { opacity: 0.4; box-shadow: 0 0 2px #10b981; }
            100% { opacity: 1; box-shadow: 0 0 8px #10b981; }
          }
          .status-indicator {
            width: 10px; height: 10px;
            background: #10b981;
            border-radius: 50%;
            display: inline-block;
            animation: blink 2s infinite ease-in-out;
            position: absolute;
            top: 20px;
            right: 20px;
          }
          .control-panel-card {
            border-top: 4px solid #94a3b8 !important;
            background: linear-gradient(to bottom, #ffffff 0%, #f8fafc 100%) !important;
            position: relative;
          }
        `}
      </style>

      {/* Breadcrumb */}
      <div style={{ background: '#1a2a4a', paddingTop: '135px', paddingBottom: '15px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <span style={{ color: '#a0aec0', fontSize: '13px', fontFamily: 'Inter, sans-serif' }}>
            <Link to="/" className="breadcrumb-link">Home</Link> <span style={{ margin: '0 8px' }}>&gt;</span> 
            <span>Products</span> <span style={{ margin: '0 8px' }}>&gt;</span> 
            <span style={{ color: '#ffffff', fontWeight: '500' }}>Manufacturing Automations</span>
          </span>
        </div>
      </div>

      {/* Hero Slider */}
      <section id="hero-slider" className="heroSwiper msl-bg-navy industrial-grid" style={{ paddingTop: '30px', paddingBottom: '60px' }}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          loopedSlides={3}
          speed={900}
          slidesPerView="auto"
          centeredSlides={true}
          spaceBetween={30}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ el: '.hero-pagination', clickable: true }}
          navigation={{ nextEl: '.hero-next', prevEl: '.hero-prev' }}
        >
          {/* Slide 1 - IoT */}
          <SwiperSlide className="hero-slide slide-7">
            <div className="container hero-content">
              <div className="hero-grid">
                <div className="hero-text">
                  <span className="hero-tag" style={{ color: '#1a2a4a', border: '1px solid #e2e8f0', background: '#f8fafc' }}>MANUFACTURING • IOT</span>
                  <h1 className="msl-navy">Industrial IoT <br/><span className="msl-solid-highlight">Automation</span></h1>
                  <p className="msl-text-body">Intelligent Connectivity, Real-time Monitoring, Data-driven Automation, and Operational Excellence.</p>
                  <div className="hero-mini-features">
                    <span>Intelligent Connectivity</span>
                    <span>Real-time Monitoring</span>
                    <span>Data-driven Automation</span>
                    <span>Operational Excellence</span>
                  </div>
                  <div className="hero-buttons">
                    <a href="#iot" onClick={(e) => { e.preventDefault(); iotRef.current?.scrollIntoView({ behavior: 'smooth' }); }} className="hero-btn primary-btn msl-btn-primary">Explore Platform</a>
                  </div>
                </div>
                <div className="hero-image-col">
                  <div className="hero-image-panel" style={{ background: '#0f172a' }}>
                    <img src="/assets/img/mfg-slider-1.png" alt="Industrial IoT" style={{ opacity: 0.9 }} />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 - Mining */}
          <SwiperSlide className="hero-slide slide-8">
            <div className="container hero-content">
              <div className="hero-grid">
                <div className="hero-text">
                  <span className="hero-tag" style={{ color: '#1a2a4a', border: '1px solid #e2e8f0', background: '#f8fafc' }}>SAFETY MINING • AI</span>
                  <h1 className="msl-navy">SafeLoad <br/><span className="msl-solid-highlight">Telematics</span></h1>
                  <p className="msl-text-body">Coal theft prevention, fleet productivity, and haul cycle optimization for the mining industry.</p>
                  <div className="hero-mini-features">
                    <span>Coal Theft Prevention</span>
                    <span>Fleet Productivity</span>
                    <span>Haul Cycle Optimization</span>
                    <span>Reckless Driving Control</span>
                  </div>
                  <div className="hero-buttons">
                    <a href="#mining" onClick={(e) => { e.preventDefault(); miningRef.current?.scrollIntoView({ behavior: 'smooth' }); }} className="hero-btn primary-btn msl-btn-primary">Explore SafeLoad</a>
                  </div>
                </div>
                <div className="hero-image-col">
                  <div className="hero-image-panel" style={{ background: '#0f172a' }}>
                    <img src="/assets/img/mfg-slider-2.png" alt="SafeLoad" style={{ opacity: 0.9 }} />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 - Lifts */}
          <SwiperSlide className="hero-slide slide-9">
            <div className="container hero-content">
              <div className="hero-grid">
                <div className="hero-text">
                  <span className="hero-tag" style={{ color: '#1a2a4a', border: '1px solid #e2e8f0', background: '#f8fafc' }}>INFRASTRUCTURE • IOT</span>
                  <h1 className="msl-navy">Escalator & Lift <br/><span className="msl-solid-highlight">Diagnostics</span></h1>
                  <p className="msl-text-body">Continuous cloud monitoring to identify multi-escalator and lift failures for rapid rectification.</p>
                  <div className="hero-mini-features">
                    <span>Continuous Cloud Monitoring</span>
                    <span>Instant Identification</span>
                    <span>Rapid Rectification</span>
                    <span>Automated Alerts</span>
                  </div>
                  <div className="hero-buttons">
                    <a href="#lift" onClick={(e) => { e.preventDefault(); liftRef.current?.scrollIntoView({ behavior: 'smooth' }); }} className="hero-btn primary-btn msl-btn-primary">Explore Diagnostics</a>
                  </div>
                </div>
                <div className="hero-image-col">
                  <div className="hero-image-panel" style={{ background: '#0f172a' }}>
                    <img src="/assets/img/mfg-slider-3.png" alt="Diagnostics" style={{ opacity: 0.9 }} />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <div className="hero-controls-wrapper">
            <div className="hero-pagination" style={{ '--swiper-pagination-color': '#c0001a' }}></div>
            <div className="hero-navigation">
              <div className="hero-prev"><i className="bi bi-chevron-left"></i></div>
              <div className="hero-next"><i className="bi bi-chevron-right"></i></div>
            </div>
          </div>
        </Swiper>
      </section>

      {/* Main Content Area */}
      <main id="main" className="msl-bg-gray">
        
        {/* Section 1: Industrial IoT */}
        <section id="iot" ref={iotRef} style={{ background: '#f8fafc', paddingBottom: '80px' }}>
          
          {/* PRODUCT 01 UNIFIED HEADER */}
          <div className="caution-stripe msl-bg-navy" style={{ padding: '60px 0', borderBottom: '4px solid #c0001a', marginBottom: '60px' }}>
            <div className="container text-center position-relative" style={{ zIndex: 1 }}>
              <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '30px', marginBottom: '20px' }}>
                Product 01
              </span>
              <h2 style={{ color: '#fff', fontSize: '36px', fontWeight: '800', marginBottom: '15px' }}>
                Industrial IoT Automation Solutions
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '16px', maxWidth: '800px', margin: '0 auto' }}>
                Intelligent Connectivity | Real-time Monitoring | Data-driven Automation | Operational Excellence
              </p>
            </div>
          </div>

          {/* CONTENT CONTAINER */}
          <div className="container" data-aos="fade-up">
            <div style={{ background: '#fff', borderRadius: '24px', padding: '50px', boxShadow: '0 10px 40px rgba(0,0,0,0.04)' }}>

          {/* BLOCK 2: MANUFACTURING OVERVIEW CARD */}
          <div>
            <div>
              <div className="lift-card" style={{ background: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', padding: '40px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
                <div className="row g-5">
                  {/* LEFT COLUMN */}
                  <div className="col-lg-6">
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#1a2a4a', color: '#fff', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '25px' }}>
                      <i className="bx bx-buildings"></i> MANUFACTURING
                    </div>
                    {/* Robot Arm Image */}
                    <img src="/assets/img/mfg-robot-arm.png" alt="Manufacturing Robot Arm" style={{ width: '100%', height: '260px', objectFit: 'cover', borderRadius: '12px', border: '1px solid #cbd5e1' }} />
                  </div>

                  {/* RIGHT COLUMN */}
                  <div className="col-lg-6">
                    <h3 className="msl-navy" style={{ fontSize: '22px', fontWeight: '800', marginBottom: '30px' }}>Key Capabilities</h3>
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                          <i className="bx bxs-circle" style={{ fontSize: '18px', color: '#c0001a' }}></i>
                          <span style={{ fontSize: '14px', color: '#1a2a4a', fontWeight: '700' }}>Machine Monitoring</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                          <i className="bx bxs-circle" style={{ fontSize: '18px', color: '#c0001a' }}></i>
                          <span style={{ fontSize: '14px', color: '#1a2a4a', fontWeight: '700' }}>Production Tracking</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                          <i className="bx bxs-circle" style={{ fontSize: '18px', color: '#c0001a' }}></i>
                          <span style={{ fontSize: '14px', color: '#1a2a4a', fontWeight: '700' }}>OEE Improvement</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <i className="bx bxs-circle" style={{ fontSize: '18px', color: '#c0001a' }}></i>
                          <span style={{ fontSize: '14px', color: '#1a2a4a', fontWeight: '700' }}>Quality Assurance</span>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                          <i className="bx bxs-circle" style={{ fontSize: '18px', color: '#c0001a' }}></i>
                          <span style={{ fontSize: '14px', color: '#1a2a4a', fontWeight: '700' }}>Predictive Maintenance</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                          <i className="bx bxs-circle" style={{ fontSize: '18px', color: '#c0001a' }}></i>
                          <span style={{ fontSize: '14px', color: '#1a2a4a', fontWeight: '700' }}>Process Optimization</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <i className="bx bxs-circle" style={{ fontSize: '18px', color: '#c0001a' }}></i>
                          <span style={{ fontSize: '14px', color: '#1a2a4a', fontWeight: '700' }}>Energy Monitoring</span>
                        </div>
                      </div>
                      <div className="col-12 mt-4">
                        <div style={{ background: '#f5f6f8', borderRadius: '8px', padding: '15px', textAlign: 'center', color: '#1a2a4a', fontSize: '14px', fontWeight: '600' }}>
                          <i className="bx bx-target-lock msl-crimson" style={{ marginRight: '5px' }}></i> Increase Productivity &nbsp;|&nbsp; Reduce Downtime &nbsp;|&nbsp; Improve Quality
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

              <hr style={{ borderColor: '#e2e8f0', margin: '40px 0' }} />

              {/* BLOCK 3: IIoT SOLUTION ARCHITECTURE */}
              <div>
                <div>
              <div className="text-center mb-5">
                <div style={{ display: 'inline-block', background: '#1a2a4a', color: '#fff', padding: '6px 20px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase' }}>
                  IIoT SOLUTION ARCHITECTURE
                </div>
              </div>
              
              <div className="row g-4 align-items-stretch text-center position-relative">
                {[
                  {
                    header: 'FIELD DEVICES & SENSORS',
                    icon: 'bx-devices',
                    bullets: ['Temperature & Pressure', 'Vibration & Humidity', 'Flow, Energy & Level'],
                    arrow: 'single'
                  },
                  {
                    header: 'IIoT NODES (EDGE)',
                    icon: 'bx-server',
                    bullets: ['Data Acquisition', 'Edge Processing', 'Local Intelligence'],
                    arrow: 'single'
                  },
                  {
                    header: 'REPEATER (RF)',
                    icon: 'bx-broadcast',
                    bullets: ['Extend Range', 'Reliable Communication', 'RF Signal Boost'],
                    arrow: 'single'
                  },
                  {
                    header: 'GATEWAY',
                    icon: 'bx-transfer-alt',
                    bullets: ['Data Aggregation', 'Protocol Conversion', '4G / WiFi / Ethernet'],
                    arrow: 'single'
                  },
                  {
                    header: 'CLOUD / LOCAL SERVER',
                    icon: 'bx-cloud',
                    bullets: ['Data Processing & Storage', 'Analytics & AI', 'Remote Access'],
                    arrow: 'single'
                  },
                  {
                    header: 'DASHBOARD & ALERTS',
                    icon: 'bx-bar-chart-alt-2',
                    bullets: ['Web Dashboard', 'Mobile App', 'Email / SMS Alerts'],
                    arrow: 'none'
                  }
                ].map((node, idx) => (
                  <div className="col-lg-2 col-md-4 col-sm-12 position-relative" key={idx}>
                    <div className="lift-card" style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden', height: '100%', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
                      <div style={{ background: '#1a2a4a', color: '#fff', fontSize: '11px', fontWeight: '700', padding: '10px 5px', textTransform: 'uppercase' }}>
                        {node.header}
                      </div>
                      <div style={{ padding: '20px 10px' }}>
                        <i className={`bx ${node.icon}`} style={{ fontSize: '32px', color: '#c0001a', marginBottom: '15px' }}></i>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'left' }}>
                          {node.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} style={{ fontSize: '12px', color: '#4a5568', marginBottom: '8px', display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                              <span style={{ color: '#a0aec0' }}>•</span> {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {/* SVG Arrows visible only on large screens */}
                    {node.arrow !== 'none' && (
                      <div className="d-none d-lg-block" style={{ position: 'absolute', right: '-12px', top: '50%', transform: 'translateY(-50%)', zIndex: 10 }}>
                        {node.arrow === 'single' ? (
                          <svg width="24" height="20" viewBox="0 0 24 20">
                            <line x1="0" y1="10" x2="20" y2="10" stroke="#c0001a" strokeWidth="2" strokeDasharray="3 3" />
                            <polyline points="15,5 21,10 15,15" fill="none" stroke="#c0001a" strokeWidth="2" />
                          </svg>
                        ) : (
                          <svg width="24" height="20" viewBox="0 0 24 20">
                            <polyline points="9,5 3,10 9,15" fill="none" stroke="#c0001a" strokeWidth="2" />
                            <line x1="3" y1="10" x2="21" y2="10" stroke="#c0001a" strokeWidth="2" strokeDasharray="3 3" />
                            <polyline points="15,5 21,10 15,15" fill="none" stroke="#c0001a" strokeWidth="2" />
                          </svg>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

              <hr style={{ borderColor: '#e2e8f0', margin: '40px 0' }} />

              {/* BLOCK 4: KEY BENEFITS + ONE PLATFORM STRIP */}
              <div>
                <div>
              
              {/* PART A - KEY BENEFITS ROW REDESIGN */}
              <div className="lift-card" style={{ background: 'linear-gradient(135deg, #1a2a4a 0%, #0f172a 100%)', borderRadius: '20px', padding: '40px', position: 'relative', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                {/* Glow Effect */}
                <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', background: '#c0001a', filter: 'blur(80px)', opacity: '0.4', borderRadius: '50%' }}></div>
                <div style={{ position: 'absolute', bottom: '-50px', left: '-50px', width: '150px', height: '150px', background: '#3b82f6', filter: 'blur(80px)', opacity: '0.2', borderRadius: '50%' }}></div>
                
                <div className="row align-items-center position-relative" style={{ zIndex: 1 }}>
                  <div className="col-lg-3 text-center text-lg-start mb-4 mb-lg-0">
                    <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '50px', height: '50px', background: 'rgba(192,0,26,0.2)', borderRadius: '12px', color: '#ff6b7a', fontSize: '24px', marginBottom: '15px' }}>
                      <i className="bx bx-award"></i>
                    </div>
                    <h4 style={{ color: '#fff', fontWeight: '800', fontSize: '24px', margin: 0 }}>Business<br/>Impact</h4>
                  </div>
                  <div className="col-lg-9">
                    <div className="row g-3">
                      {[
                        { icon: 'bx-time-five', text: 'Real-time Monitoring' },
                        { icon: 'bx-wrench', text: 'Predictive Maintenance' },
                        { icon: 'bx-trending-up', text: 'Improve Efficiency' },
                        { icon: 'bx-down-arrow-circle', text: 'Reduce Downtime' },
                        { icon: 'bx-layer', text: 'Optimize Resources' },
                        { icon: 'bx-pie-chart-alt', text: 'Data-driven Decisions' },
                        { icon: 'bx-shield-quarter', text: 'Scalable & Secure' },
                        { icon: 'bx-dollar-circle', text: 'Lower Cost' }
                      ].map((benefit, index) => (
                        <div className="col-md-3 col-sm-6" key={index}>
                          <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '15px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', transition: 'all 0.3s ease', height: '100%', cursor: 'default' }} onMouseEnter={(e) => {e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';}} onMouseLeave={(e) => {e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none';}}>
                            <i className={`bx ${benefit.icon}`} style={{ color: '#ff6b7a', fontSize: '24px', marginBottom: '10px' }}></i>
                            <span style={{ color: '#e2e8f0', fontSize: '13px', fontWeight: '600', lineHeight: '1.4' }}>{benefit.text}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* PART B - ONE PLATFORM STRIP */}
              <div className="lift-card" style={{ background: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0', padding: '35px 40px', marginTop: '24px' }}>
                <div className="row align-items-center">
                  <div className="col-lg-3 text-center text-lg-start mb-4 mb-lg-0" style={{ borderRight: '1px solid #cbd5e1' }}>
                    <div style={{ color: '#1a2a4a', fontSize: '15px', fontWeight: '800' }}>ONE PLATFORM.</div>
                    <div style={{ color: '#c0001a', fontSize: '15px', fontWeight: '800' }}>MANY INDUSTRIES.</div>
                  </div>
                  <div className="col-lg-9">
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', textAlign: 'center' }}>
                      {[
                        { icon: 'bx-plug', text: 'Plug & Play Deployment' },
                        { icon: 'bx-lock-alt', text: 'Secure Data Transmission' },
                        { icon: 'bx-brain', text: 'Edge Intelligence & Analytics' },
                        { icon: 'bx-network-chart', text: 'Multi-protocol Support' },
                        { icon: 'bx-expand-alt', text: 'Scalable Across Industries' },
                        { icon: 'bx-support', text: '24/7 Monitoring & Support' }
                      ].map((item, index) => (
                        <React.Fragment key={index}>
                          <div style={{ flex: '1 1 12%', minWidth: '100px' }}>
                            <i className={`bx ${item.icon}`} style={{ fontSize: '32px', color: '#c0001a', marginBottom: '10px' }}></i>
                            <div style={{ fontSize: '13px', color: '#1a2a4a', fontWeight: '700', lineHeight: '1.3', padding: '0 5px' }}>{item.text}</div>
                          </div>
                          {index < 5 && (
                            <div className="d-none d-lg-block" style={{ width: '1px', background: '#cbd5e1', height: '50px' }}></div>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Safety Mining */}
        <section id="mining" ref={miningRef} style={{ background: '#f8fafc', paddingBottom: '80px' }}>
          
          {/* PRODUCT 02 UNIFIED HEADER */}
          <div className="caution-stripe msl-bg-navy" style={{ padding: '60px 0', borderBottom: '4px solid #c0001a', marginBottom: '60px' }}>
            <div className="container text-center position-relative" style={{ zIndex: 1 }}>
              <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '30px', marginBottom: '20px' }}>
                Product 02
              </span>
              <h2 style={{ color: '#fff', fontSize: '36px', fontWeight: '800', marginBottom: '15px' }}>
                SafeLoad Telematics Platform
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '16px', maxWidth: '800px', margin: '0 auto' }}>
                AI-powered telematics to prevent coal theft, control reckless driving, and enable emergency response across mining fleet operations.
              </p>
            </div>
          </div>

          <SafeLoadAntiLeakage />
        </section>

        {/* Section 3: Escalator/Lifts */}
        <section id="lift" ref={liftRef} style={{ background: '#f8fafc', paddingBottom: '80px' }}>
          
          {/* PRODUCT 03 UNIFIED HEADER */}
          <div className="caution-stripe msl-bg-navy" style={{ padding: '60px 0', borderBottom: '4px solid #c0001a', marginBottom: '60px' }}>
            <div className="container text-center position-relative" style={{ zIndex: 1 }}>
              <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '30px', marginBottom: '20px' }}>
                Product 03
              </span>
              <h2 style={{ color: '#fff', fontSize: '36px', fontWeight: '800', marginBottom: '15px' }}>
                Escalator & Lift Diagnostics
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '16px', maxWidth: '800px', margin: '0 auto' }}>
                Complete hardware and cloud integration for real-time monitoring of escalator and lift health parameters.
              </p>
            </div>
          </div>

          <div className="container" data-aos="fade-up">
            <div style={{ background: '#fff', borderRadius: '24px', padding: '50px', boxShadow: '0 10px 40px rgba(0,0,0,0.04)' }}>

            <div className="row g-4 justify-content-center">
              <div className="col-md-6 col-lg-3">
                <div className="capability-card lift-card control-panel-card" style={{ padding: '30px', background: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', height: '100%' }}>
                  <div className="status-indicator"></div>
                  <div style={{ marginBottom: '20px' }}><i className="bx bx-microchip" style={{ fontSize: '32px', color: '#c0001a', background: '#1a2a4a', padding: '12px', borderRadius: '10px', boxShadow: '0 0 10px rgba(192,0,26,0.3)' }}></i></div>
                  <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '18px', marginBottom: '15px' }}>HW @ Escalator</h5>
                  <p className="msl-text-body" style={{ fontSize: '14px', lineHeight: '1.6', margin: 0 }}>Microcontroller-based hardware communicates with Escalator Control ports to identify and read all fault information locally.</p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="capability-card lift-card control-panel-card" style={{ padding: '30px', background: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', height: '100%' }}>
                  <div className="status-indicator"></div>
                  <div style={{ marginBottom: '20px' }}><i className="bx bx-cloud" style={{ fontSize: '32px', color: '#c0001a', background: '#1a2a4a', padding: '12px', borderRadius: '10px', boxShadow: '0 0 10px rgba(192,0,26,0.3)' }}></i></div>
                  <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '18px', marginBottom: '15px' }}>IoT Cloud</h5>
                  <p className="msl-text-body" style={{ fontSize: '14px', lineHeight: '1.6', margin: 0 }}>Acts as a remote data maintenance bridge to securely store continuous data between Hardware at Lift Controller & Control Room.</p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="capability-card lift-card control-panel-card" style={{ padding: '30px', background: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', height: '100%' }}>
                  <div className="status-indicator"></div>
                  <div style={{ marginBottom: '20px' }}><i className="bx bx-monitor" style={{ fontSize: '32px', color: '#c0001a', background: '#1a2a4a', padding: '12px', borderRadius: '10px', boxShadow: '0 0 10px rgba(192,0,26,0.3)' }}></i></div>
                  <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '18px', marginBottom: '15px' }}>HW @ Control Room</h5>
                  <p className="msl-text-body" style={{ fontSize: '14px', lineHeight: '1.6', margin: 0 }}>Continuously reads data from the Cloud and displays the exact fault information on LED displays, triggering alarms when needed.</p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="capability-card lift-card control-panel-card" style={{ padding: '30px', background: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', height: '100%' }}>
                  <div className="status-indicator"></div>
                  <div style={{ marginBottom: '20px' }}><i className="bx bx-bell" style={{ fontSize: '32px', color: '#c0001a', background: '#1a2a4a', padding: '12px', borderRadius: '10px', boxShadow: '0 0 10px rgba(192,0,26,0.3)' }}></i></div>
                  <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '18px', marginBottom: '15px' }}>Alerts & Rectification</h5>
                  <p className="msl-text-body" style={{ fontSize: '14px', lineHeight: '1.6', margin: 0 }}>Buzzer generates alert for RED LED status. Service initiation switch begins the fault rectification process (indicated by YELLOW LED).</p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </section>

        {/* Dedicated CTA Section */}
        <section id="contact" style={{ padding: '80px 0', background: '#ffffff' }}>
          <div className="container" data-aos="fade-up">
            <div style={{ background: '#1a2a4a', padding: '70px 40px', borderRadius: '24px', textAlign: 'center' }}>
              <h3 style={{ color: '#ffffff', fontSize: '36px', fontWeight: '800', marginBottom: '20px', textTransform: 'none' }}>Ready to Accelerate Your Manufacturing?</h3>
              <p style={{ color: '#cbd5e1', maxWidth: '650px', margin: '0 auto 40px', fontSize: '18px', lineHeight: '1.6' }}>
                Implement intelligent automation, telematics, and predictive maintenance in your industrial environments today.
              </p>
              <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                <Link to="/contact" className="hero-btn primary-btn msl-btn-primary" style={{ padding: '16px 36px', fontSize: '16px' }}>Contact Our Engineers</Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default Manufacturing;
