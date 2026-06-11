import React, { useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SmartHospitals = () => {
  const { productId } = useParams();

  // Refs for scrolling
  const automationRef = useRef(null);
  const lockerRef = useRef(null);
  const assetRef = useRef(null);

  useEffect(() => {
    if (productId === 'automation' && automationRef.current) {
      automationRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (productId === 'locker' && lockerRef.current) {
      lockerRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (productId === 'asset' && assetRef.current) {
      assetRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo(0, 0);
    }
  }, [productId]);

  return (
    <>
      <style>
        {`
          .industrial-grid {
            background-image: 
              linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
            background-size: 30px 30px;
          }
          .caution-stripe {
            position: relative;
            overflow: hidden;
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

          .msl-bg-navy { background-color: #1a2a4a; }
          .msl-bg-gray { background-color: #f8fafc; }
          .msl-navy { color: #1a2a4a; }
          .msl-crimson { color: #c0001a; }
          .msl-text-body { color: #4a5568; }

          /* Override gradients from global CSS */
          .hero-text h1 span.msl-solid-highlight {
            background: none !important;
            -webkit-text-fill-color: initial !important;
            color: #c0001a !important;
          }
          
          .ai-feature-card {
            background: #fff;
            padding: 30px 25px;
            border-radius: 16px;
            border: 1px solid #e2e8f0;
            box-shadow: 0 4px 15px rgba(0,0,0,0.03);
            height: 100%;
            display: flex;
            flex-direction: column;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .ai-feature-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.08);
          }
          .ai-tag {
            background: rgba(192,0,26,0.1);
            color: #c0001a;
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 700;
            display: inline-block;
            margin-top: 20px;
          }
          .breadcrumb-link {
            color: #a0aec0;
            text-decoration: none;
            transition: color 0.2s;
          }
          .breadcrumb-link:hover {
            color: #ffffff;
          }
        `}
      </style>

      {/* Breadcrumb */}
      <div style={{ background: '#1a2a4a', paddingTop: '75px', paddingBottom: '15px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <span style={{ color: '#a0aec0', fontSize: '13px', fontFamily: 'Inter, sans-serif' }}>
            <Link to="/" className="breadcrumb-link">Home</Link> <span style={{ margin: '0 8px' }}>&gt;</span> 
            <span>Products</span> <span style={{ margin: '0 8px' }}>&gt;</span> 
            <span style={{ color: '#ffffff', fontWeight: '500' }}>Smart Hospitals</span>
          </span>
        </div>
      </div>

      {/* Hero Slider */}
      <section id="hero-slider" className="heroSwiper msl-bg-navy industrial-grid" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
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
          {/* Slide 1 - IOT Automation */}
          <SwiperSlide className="hero-slide slide-1">
            <div className="container hero-content">
              <div className="hero-grid">
                <div className="hero-text">
                  <span className="hero-tag" style={{ color: '#1a2a4a', border: '1px solid #e2e8f0', background: '#f8fafc' }}>HEALTHCARE • IOT</span>
                  <h1 className="msl-navy">Hospital IOT <br/><span className="msl-solid-highlight">Automation</span></h1>
                  <p className="msl-text-body">Smart automation and continuous monitoring for modern hospitals.</p>
                  <div className="hero-mini-features">
                    <span>Centralized Control</span>
                    <span>Energy Efficiency</span>
                    <span>Monitoring</span>
                    <span>Smart Alerts</span>
                  </div>
                  <div className="hero-buttons">
                    <a href="#automation" onClick={(e) => { e.preventDefault(); automationRef.current?.scrollIntoView({ behavior: 'smooth' }); }} className="hero-btn primary-btn msl-btn-primary">Explore Solution</a>
                  </div>
                </div>
                <div className="hero-image-col">
                  <div className="hero-image-panel" style={{ background: '#0f172a' }}>
                    <img src="/assets/img/hero/iot.webp" alt="Smart Hospital IOT" style={{ opacity: 0.9 }} />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 - AI Locker */}
          <SwiperSlide className="hero-slide slide-2">
            <div className="container hero-content">
              <div className="hero-grid">
                <div className="hero-text">
                  <span className="hero-tag" style={{ color: '#1a2a4a', border: '1px solid #e2e8f0', background: '#f8fafc' }}>HEALTHCARE • SECURITY</span>
                  <h1 className="msl-navy">AI Secured <br/><span className="msl-solid-highlight">Locker Systems</span></h1>
                  <p className="msl-text-body">Special drug placing and secure automated dispensing.</p>
                  <div className="hero-mini-features">
                    <span>Biometric Access</span>
                    <span>Drug Tracking</span>
                    <span>Compliance</span>
                    <span>Audit Logs</span>
                  </div>
                  <div className="hero-buttons">
                    <a href="#locker" onClick={(e) => { e.preventDefault(); lockerRef.current?.scrollIntoView({ behavior: 'smooth' }); }} className="hero-btn primary-btn msl-btn-primary">Explore Solution</a>
                  </div>
                </div>
                <div className="hero-image-col">
                  <div className="hero-image-panel" style={{ background: '#0f172a' }}>
                    <img src="/assets/img/hero/AI-locker.webp" alt="AI Secured Locker" style={{ opacity: 0.9 }} />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 - Asset Management */}
          <SwiperSlide className="hero-slide slide-3">
            <div className="container hero-content">
              <div className="hero-grid">
                <div className="hero-text">
                  <span className="hero-tag" style={{ color: '#1a2a4a', border: '1px solid #e2e8f0', background: '#f8fafc' }}>HEALTHCARE • OPERATIONS</span>
                  <h1 className="msl-navy">Intelligent <br/><span className="msl-solid-highlight">Asset Management</span></h1>
                  <p className="msl-text-body">Track, monitor, and optimize hospital equipment usage in real time.</p>
                  <div className="hero-mini-features">
                    <span>Location Tracking</span>
                    <span>Utilization Rates</span>
                    <span>Maintenance</span>
                    <span>Loss Prevention</span>
                  </div>
                  <div className="hero-buttons">
                    <a href="#asset" onClick={(e) => { e.preventDefault(); assetRef.current?.scrollIntoView({ behavior: 'smooth' }); }} className="hero-btn primary-btn msl-btn-primary">Explore Solution</a>
                  </div>
                </div>
                <div className="hero-image-col">
                  <div className="hero-image-panel" style={{ background: '#0f172a' }}>
                    <img src="/assets/img/hero/8.webp" alt="Asset Management" style={{ opacity: 0.9 }} />
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

      <main id="main" className="msl-bg-gray">
        
        {/* =========================================
            PRODUCT 1: IOT Automation
        ========================================= */}
        <section id="automation" ref={automationRef} style={{ background: '#f8fafc', paddingBottom: '60px' }}>
          
          <div className="caution-stripe msl-bg-navy" style={{ padding: '60px 0', borderBottom: '4px solid #c0001a', marginBottom: '40px' }}>
            <div className="container text-center position-relative" style={{ zIndex: 1 }}>
              <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '30px', marginBottom: '20px' }}>
                Product 01
              </span>
              <h2 style={{ color: '#fff', fontSize: '36px', fontWeight: '800', marginBottom: '15px' }}>
                Smart Hospital IOT Automation
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '18px', maxWidth: '800px', margin: '0 auto', fontWeight: '300' }}>
                <strong style={{color: '#fff', fontWeight: '600'}}>A Connected Ecosystem for Better Care.</strong><br/>
                Monitor and control critical hospital environments through advanced IoT networks.
              </p>
            </div>
          </div>

          <div className="container" data-aos="fade-up">
            <div style={{ background: '#fff', borderRadius: '24px', padding: '40px', boxShadow: '0 10px 40px rgba(0,0,0,0.04)' }}>
              
              <div className="row g-5 align-items-center">
                
                <div className="col-lg-6">
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#1a2a4a', color: '#fff', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '25px' }}>
                    <i className="bx bx-hospital"></i> INFRASTRUCTURE
                  </div>
                  <h3 className="msl-navy" style={{ fontSize: '28px', fontWeight: '800', marginBottom: '20px' }}>
                    Transforming Patient Environments
                  </h3>
                  <p className="msl-text-body" style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '30px' }}>
                    Modern healthcare demands precision. Our IoT Automation system connects environmental controls, critical equipment power monitoring, and ambient room conditions into a single, intelligent dashboard.
                  </p>
                  
                  <div style={{ background: '#fff', borderLeft: '4px solid #c0001a', padding: '20px', borderRadius: '0 8px 8px 0', boxShadow: '0 2px 15px rgba(0,0,0,0.03)', marginBottom: '30px' }}>
                    <h6 style={{ color: '#1a2a4a', fontWeight: '700', fontSize: '15px', marginBottom: '10px' }}>The Problem We Solve</h6>
                    <ul style={{ paddingLeft: '20px', color: '#4a5568', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                      <li>Inconsistent temperatures in critical care units and labs</li>
                      <li>High energy wastage in unoccupied zones</li>
                      <li>Manual monitoring of environmental sensors taking up staff time</li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-6">
                  <h3 className="msl-navy" style={{ fontSize: '28px', fontWeight: '800', marginBottom: '30px' }}>
                    What You Get
                  </h3>
                  <div className="row g-4">
                    <div className="col-sm-6">
                      <div className="ai-feature-card">
                        <i className="bx bx-slider" style={{ fontSize: '36px', color: '#c0001a', marginBottom: '15px', display: 'block' }}></i>
                        <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '16px', marginBottom: '10px' }}>Centralized Control</h5>
                        <p className="msl-text-body" style={{ fontSize: '14px', margin: 0, lineHeight: '1.5', flexGrow: 1 }}>Manage HVAC, lighting, and power across the entire facility from one screen.</p>
                        <div><span className="ai-tag"><i className="bx bx-check-circle" style={{ marginRight: '4px' }}></i> Dashboard</span></div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="ai-feature-card">
                        <i className="bx bx-leaf" style={{ fontSize: '36px', color: '#c0001a', marginBottom: '15px', display: 'block' }}></i>
                        <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '16px', marginBottom: '10px' }}>Energy Efficiency</h5>
                        <p className="msl-text-body" style={{ fontSize: '14px', margin: 0, lineHeight: '1.5', flexGrow: 1 }}>Automated routines reduce power consumption during low-occupancy hours.</p>
                        <div><span className="ai-tag"><i className="bx bx-check-circle" style={{ marginRight: '4px' }}></i> Green Tech</span></div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="ai-feature-card">
                        <i className="bx bx-pulse" style={{ fontSize: '36px', color: '#c0001a', marginBottom: '15px', display: 'block' }}></i>
                        <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '16px', marginBottom: '10px' }}>Continuous Monitoring</h5>
                        <p className="msl-text-body" style={{ fontSize: '14px', margin: 0, lineHeight: '1.5', flexGrow: 1 }}>24/7 logging of environmental conditions for regulatory compliance.</p>
                        <div><span className="ai-tag"><i className="bx bx-check-circle" style={{ marginRight: '4px' }}></i> Compliant</span></div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="ai-feature-card">
                        <i className="bx bx-bell" style={{ fontSize: '36px', color: '#c0001a', marginBottom: '15px', display: 'block' }}></i>
                        <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '16px', marginBottom: '10px' }}>Smart Alerts</h5>
                        <p className="msl-text-body" style={{ fontSize: '14px', margin: 0, lineHeight: '1.5', flexGrow: 1 }}>Instant notifications if critical parameters (like freezer temperatures) deviate.</p>
                        <div><span className="ai-tag"><i className="bx bx-check-circle" style={{ marginRight: '4px' }}></i> Proactive</span></div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            PRODUCT 2: AI Secured Locker Systems
        ========================================= */}
        <section id="locker" ref={lockerRef} style={{ background: '#f8fafc', paddingBottom: '60px' }}>
          
          <div className="caution-stripe msl-bg-navy" style={{ padding: '60px 0', borderBottom: '4px solid #c0001a', marginBottom: '40px' }}>
            <div className="container text-center position-relative" style={{ zIndex: 1 }}>
              <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '30px', marginBottom: '20px' }}>
                Product 02
              </span>
              <h2 style={{ color: '#fff', fontSize: '36px', fontWeight: '800', marginBottom: '15px' }}>
                AI Secured Locker Systems
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '18px', maxWidth: '800px', margin: '0 auto', fontWeight: '300' }}>
                <strong style={{color: '#fff', fontWeight: '600'}}>Strict Control for Special Drugs.</strong><br/>
                Biometric dispensing systems designed specifically for controlled substances.
              </p>
            </div>
          </div>

          <div className="container" data-aos="fade-up">
            <div style={{ background: '#fff', borderRadius: '24px', padding: '40px', boxShadow: '0 10px 40px rgba(0,0,0,0.04)' }}>
              
              <div className="row g-5 align-items-center">
                
                <div className="col-lg-6">
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#1a2a4a', color: '#fff', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '25px' }}>
                    <i className="bx bx-shield-plus"></i> PHARMACY
                  </div>
                  <h3 className="msl-navy" style={{ fontSize: '28px', fontWeight: '800', marginBottom: '20px' }}>
                    Automated & Secure Drug Placing
                  </h3>
                  <p className="msl-text-body" style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '30px' }}>
                    Hospitals face strict regulations regarding the storage and dispensing of special drugs. Our AI Secured Lockers utilize advanced facial recognition and AI to ensure that only authorized personnel can access controlled substances, automatically updating inventory systems in real-time.
                  </p>
                  
                  <div style={{ background: '#fff', borderLeft: '4px solid #c0001a', padding: '20px', borderRadius: '0 8px 8px 0', boxShadow: '0 2px 15px rgba(0,0,0,0.03)', marginBottom: '30px' }}>
                    <h6 style={{ color: '#1a2a4a', fontWeight: '700', fontSize: '15px', marginBottom: '10px' }}>The Problem We Solve</h6>
                    <ul style={{ paddingLeft: '20px', color: '#4a5568', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                      <li>Misappropriation or theft of highly controlled medical substances</li>
                      <li>Inaccurate manual inventory tracking leading to discrepancies</li>
                      <li>Lack of definitive proof of who accessed medication cabinets</li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-6">
                  <h3 className="msl-navy" style={{ fontSize: '28px', fontWeight: '800', marginBottom: '30px' }}>
                    What You Get
                  </h3>
                  <div className="row g-4">
                    <div className="col-sm-6">
                      <div className="ai-feature-card">
                        <i className="bx bx-fingerprint" style={{ fontSize: '36px', color: '#c0001a', marginBottom: '15px', display: 'block' }}></i>
                        <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '16px', marginBottom: '10px' }}>Biometric Access</h5>
                        <p className="msl-text-body" style={{ fontSize: '14px', margin: 0, lineHeight: '1.5', flexGrow: 1 }}>Facial or fingerprint recognition ensures identity-verified dispensing.</p>
                        <div><span className="ai-tag"><i className="bx bx-check-circle" style={{ marginRight: '4px' }}></i> Zero Key-Sharing</span></div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="ai-feature-card">
                        <i className="bx bx-data" style={{ fontSize: '36px', color: '#c0001a', marginBottom: '15px', display: 'block' }}></i>
                        <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '16px', marginBottom: '10px' }}>Drug Tracking</h5>
                        <p className="msl-text-body" style={{ fontSize: '14px', margin: 0, lineHeight: '1.5', flexGrow: 1 }}>Sensors track exactly which compartment was opened and which drug removed.</p>
                        <div><span className="ai-tag"><i className="bx bx-check-circle" style={{ marginRight: '4px' }}></i> Granular</span></div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="ai-feature-card">
                        <i className="bx bx-file" style={{ fontSize: '36px', color: '#c0001a', marginBottom: '15px', display: 'block' }}></i>
                        <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '16px', marginBottom: '10px' }}>Automated Audits</h5>
                        <p className="msl-text-body" style={{ fontSize: '14px', margin: 0, lineHeight: '1.5', flexGrow: 1 }}>Generates instant, immutable compliance reports for hospital administration.</p>
                        <div><span className="ai-tag"><i className="bx bx-check-circle" style={{ marginRight: '4px' }}></i> Audit-Ready</span></div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="ai-feature-card">
                        <i className="bx bx-lock" style={{ fontSize: '36px', color: '#c0001a', marginBottom: '15px', display: 'block' }}></i>
                        <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '16px', marginBottom: '10px' }}>Tamper Alarms</h5>
                        <p className="msl-text-body" style={{ fontSize: '14px', margin: 0, lineHeight: '1.5', flexGrow: 1 }}>Triggers immediate security alerts upon forceful entry attempts.</p>
                        <div><span className="ai-tag"><i className="bx bx-check-circle" style={{ marginRight: '4px' }}></i> Highly Secure</span></div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>


        {/* =========================================
            PRODUCT 3: Asset Management
        ========================================= */}
        <section id="asset" ref={assetRef} style={{ background: '#f8fafc', paddingBottom: '60px' }}>
          
          <div className="caution-stripe msl-bg-navy" style={{ padding: '60px 0', borderBottom: '4px solid #c0001a', marginBottom: '40px' }}>
            <div className="container text-center position-relative" style={{ zIndex: 1 }}>
              <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '30px', marginBottom: '20px' }}>
                Product 03
              </span>
              <h2 style={{ color: '#fff', fontSize: '36px', fontWeight: '800', marginBottom: '15px' }}>
                Intelligent Asset Management
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '18px', maxWidth: '800px', margin: '0 auto', fontWeight: '300' }}>
                <strong style={{color: '#fff', fontWeight: '600'}}>Never Lose Critical Equipment Again.</strong><br/>
                Real-time tracking and utilization monitoring for high-value hospital assets.
              </p>
            </div>
          </div>

          <div className="container" data-aos="fade-up">
            <div style={{ background: '#fff', borderRadius: '24px', padding: '40px', boxShadow: '0 10px 40px rgba(0,0,0,0.04)' }}>
              
              <div className="row g-5 align-items-center">
                
                <div className="col-lg-6">
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#1a2a4a', color: '#fff', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '25px' }}>
                    <i className="bx bx-map-pin"></i> TRACKING
                  </div>
                  <h3 className="msl-navy" style={{ fontSize: '28px', fontWeight: '800', marginBottom: '20px' }}>
                    Visibility Across Every Department
                  </h3>
                  <p className="msl-text-body" style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '30px' }}>
                    From portable ultrasound machines to IV pumps, hospital equipment frequently goes missing or sits idle while another department urgently needs it. Our IoT-based Asset Management system provides a live map of your inventory.
                  </p>
                  
                  <div style={{ background: '#fff', borderLeft: '4px solid #c0001a', padding: '20px', borderRadius: '0 8px 8px 0', boxShadow: '0 2px 15px rgba(0,0,0,0.03)', marginBottom: '30px' }}>
                    <h6 style={{ color: '#1a2a4a', fontWeight: '700', fontSize: '15px', marginBottom: '10px' }}>The Problem We Solve</h6>
                    <ul style={{ paddingLeft: '20px', color: '#4a5568', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                      <li>Nurses wasting valuable time searching for misplaced equipment</li>
                      <li>Over-purchasing assets because current utilization rates are unknown</li>
                      <li>Missing maintenance schedules due to untrackable asset movement</li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-6">
                  <h3 className="msl-navy" style={{ fontSize: '28px', fontWeight: '800', marginBottom: '30px' }}>
                    What You Get
                  </h3>
                  <div className="row g-4">
                    <div className="col-sm-6">
                      <div className="ai-feature-card">
                        <i className="bx bx-radar" style={{ fontSize: '36px', color: '#c0001a', marginBottom: '15px', display: 'block' }}></i>
                        <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '16px', marginBottom: '10px' }}>Location Tracking</h5>
                        <p className="msl-text-body" style={{ fontSize: '14px', margin: 0, lineHeight: '1.5', flexGrow: 1 }}>Live indoor positioning system mapping exact equipment locations.</p>
                        <div><span className="ai-tag"><i className="bx bx-check-circle" style={{ marginRight: '4px' }}></i> Fast Retrieval</span></div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="ai-feature-card">
                        <i className="bx bx-pie-chart-alt" style={{ fontSize: '36px', color: '#c0001a', marginBottom: '15px', display: 'block' }}></i>
                        <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '16px', marginBottom: '10px' }}>Utilization Rates</h5>
                        <p className="msl-text-body" style={{ fontSize: '14px', margin: 0, lineHeight: '1.5', flexGrow: 1 }}>Analytics on how often equipment is used to prevent over-purchasing.</p>
                        <div><span className="ai-tag"><i className="bx bx-check-circle" style={{ marginRight: '4px' }}></i> Save Budget</span></div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="ai-feature-card">
                        <i className="bx bx-wrench" style={{ fontSize: '36px', color: '#c0001a', marginBottom: '15px', display: 'block' }}></i>
                        <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '16px', marginBottom: '10px' }}>Maintenance Sync</h5>
                        <p className="msl-text-body" style={{ fontSize: '14px', margin: 0, lineHeight: '1.5', flexGrow: 1 }}>Automatically tracks usage hours and alerts engineering for preventive service.</p>
                        <div><span className="ai-tag"><i className="bx bx-check-circle" style={{ marginRight: '4px' }}></i> Better Lifespan</span></div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="ai-feature-card">
                        <i className="bx bx-door-open" style={{ fontSize: '36px', color: '#c0001a', marginBottom: '15px', display: 'block' }}></i>
                        <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '16px', marginBottom: '10px' }}>Loss Prevention</h5>
                        <p className="msl-text-body" style={{ fontSize: '14px', margin: 0, lineHeight: '1.5', flexGrow: 1 }}>Geofencing triggers alerts if an asset leaves its designated ward or building.</p>
                        <div><span className="ai-tag"><i className="bx bx-check-circle" style={{ marginRight: '4px' }}></i> Geofencing</span></div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <hr style={{ borderColor: '#e2e8f0', margin: '30px 0' }} />

              <div className="row align-items-center">
                <div className="col-lg-8 mb-3 mb-lg-0">
                  <h6 style={{ color: '#1a2a4a', fontWeight: '700', fontSize: '14px', marginBottom: '10px', textTransform: 'uppercase' }}>Ideal For:</h6>
                  <p style={{ fontSize: '14px', color: '#4a5568', margin: 0 }}>General Hospitals • Intensive Care Units • Specialized Clinics • Pharmacy Networks</p>
                </div>
                <div className="col-lg-4 text-start text-lg-end">
                  <a href="#contact" style={{ display: 'inline-block', background: '#c0001a', color: '#fff', padding: '12px 24px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none', fontSize: '14px' }}>Smart Upgrade →</a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================
            CTA SECTION
        ========================================= */}
        <section id="contact" style={{ padding: '60px 0', background: '#ffffff' }}>
          <div className="container" data-aos="fade-up">
            <div style={{ background: '#1a2a4a', padding: '80px 40px', borderRadius: '24px', textAlign: 'center' }}>
              <h3 style={{ color: '#ffffff', fontSize: '36px', fontWeight: '800', marginBottom: '20px', textTransform: 'none' }}>Ready to Modernize Your Healthcare Facility?</h3>
              <p style={{ color: '#cbd5e1', maxWidth: '650px', margin: '0 auto 40px', fontSize: '18px', lineHeight: '1.6' }}>
                Implement intelligent, highly secure, and efficient solutions for your hospital today.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                <a href="#contact" style={{ background: '#c0001a', color: '#fff', padding: '15px 40px', borderRadius: '30px', fontWeight: '700', fontSize: '16px', textDecoration: 'none', transition: 'background 0.3s ease' }}>
                  Talk to a Specialist
                </a>
                <a href="#demo" style={{ background: 'transparent', color: '#fff', border: '2px solid #fff', padding: '13px 40px', borderRadius: '30px', fontWeight: '700', fontSize: '16px', textDecoration: 'none', transition: 'background 0.3s ease' }}>
                  Request a Demo
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default SmartHospitals;
