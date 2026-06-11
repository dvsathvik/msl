import React, { useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Defense = () => {
  const { productId } = useParams();

  // Refs for scrolling
  const t90Ref = useRef(null);
  const g3000Ref = useRef(null);
  const lockerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (productId === 't90' && t90Ref.current) {
      t90Ref.current.scrollIntoView({ behavior: 'smooth' });
    } else if (productId === 'g3000' && g3000Ref.current) {
      g3000Ref.current.scrollIntoView({ behavior: 'smooth' });
    } else if (productId === 'locker' && lockerRef.current) {
      lockerRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (productId === 'video' && videoRef.current) {
      videoRef.current.scrollIntoView({ behavior: 'smooth' });
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
            <span style={{ color: '#ffffff', fontWeight: '500' }}>Defense</span>
          </span>
        </div>
      </div>

      {/* Hero Slider */}
      <section id="hero-slider" className="heroSwiper msl-bg-navy industrial-grid" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          loopedSlides={4}
          speed={900}
          slidesPerView="auto"
          centeredSlides={true}
          spaceBetween={30}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ el: '.hero-pagination', clickable: true }}
          navigation={{ nextEl: '.hero-next', prevEl: '.hero-prev' }}
        >
          {/* Slide 1 - T90 */}
          <SwiperSlide className="hero-slide slide-1">
            <div className="container hero-content">
              <div className="hero-grid">
                <div className="hero-text">
                  <span className="hero-tag" style={{ color: '#1a2a4a', border: '1px solid #e2e8f0', background: '#f8fafc' }}>DEFENSE • AUTOMATION</span>
                  <h1 className="msl-navy">T90's Vehicles2Vehicles <br/><span className="msl-solid-highlight">RF Comm.</span></h1>
                  <p className="msl-text-body">Secured Convoy Vehicles Comm. & Automation</p>
                  <div className="hero-mini-features">
                    <span>Wireless Tech</span>
                    <span>RFID Based</span>
                    <span>Qt Display</span>
                    <span>Audio Comm</span>
                  </div>
                  <div className="hero-buttons">
                    <a href="#t90" onClick={(e) => { e.preventDefault(); t90Ref.current?.scrollIntoView({ behavior: 'smooth' }); }} className="hero-btn primary-btn msl-btn-primary">Explore Solution</a>
                  </div>
                </div>
                <div className="hero-image-col">
                  <div className="hero-image-panel" style={{ background: '#0f172a' }}>
                    <img src="/assets/img/hero/defense.webp" alt="T90 Communication" style={{ opacity: 0.9 }} />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 - G3000 */}
          <SwiperSlide className="hero-slide slide-2">
            <div className="container hero-content">
              <div className="hero-grid">
                <div className="hero-text">
                  <span className="hero-tag" style={{ color: '#1a2a4a', border: '1px solid #e2e8f0', background: '#f8fafc' }}>AEROSPACE • AVIONICS</span>
                  <h1 className="msl-navy">G3000 Cockpit <br/><span className="msl-solid-highlight">Monitor Device</span></h1>
                  <p className="msl-text-body">High Precision Monitoring for Modern Avionics</p>
                  <div className="hero-mini-features">
                    <span>Embedded Software</span>
                    <span>Real-time OS</span>
                    <span>Critical Systems</span>
                    <span>Integration</span>
                  </div>
                  <div className="hero-buttons">
                    <a href="#g3000" onClick={(e) => { e.preventDefault(); g3000Ref.current?.scrollIntoView({ behavior: 'smooth' }); }} className="hero-btn primary-btn msl-btn-primary">Explore Solution</a>
                  </div>
                </div>
                <div className="hero-image-col">
                  <div className="hero-image-panel" style={{ background: '#0f172a' }}>
                    <img src="/assets/img/hero/defense1.webp" alt="G3000 Cockpit" style={{ opacity: 0.9 }} />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 - AI Locker */}
          <SwiperSlide className="hero-slide slide-3">
            <div className="container hero-content">
              <div className="hero-grid">
                <div className="hero-text">
                  <span className="hero-tag" style={{ color: '#1a2a4a', border: '1px solid #e2e8f0', background: '#f8fafc' }}>DEFENSE • SECURITY</span>
                  <h1 className="msl-navy">SMART AI <br/><span className="msl-solid-highlight">Locker Systems</span></h1>
                  <p className="msl-text-body">AI-driven secure storage for strategic defense facilities</p>
                  <div className="hero-mini-features">
                    <span>Facial Recognition</span>
                    <span>Asset Tracking</span>
                    <span>Alerts</span>
                    <span>High Security</span>
                  </div>
                  <div className="hero-buttons">
                    <a href="#locker" onClick={(e) => { e.preventDefault(); lockerRef.current?.scrollIntoView({ behavior: 'smooth' }); }} className="hero-btn primary-btn msl-btn-primary">Explore Solution</a>
                  </div>
                </div>
                <div className="hero-image-col">
                  <div className="hero-image-panel" style={{ background: '#0f172a' }}>
                    <img src="/assets/img/hero/AI-locker.webp" alt="SMART AI Locker" style={{ opacity: 0.9 }} />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 4 - Video/Voice Streaming */}
          <SwiperSlide className="hero-slide slide-4">
            <div className="container hero-content">
              <div className="hero-grid">
                <div className="hero-text">
                  <span className="hero-tag" style={{ color: '#1a2a4a', border: '1px solid #e2e8f0', background: '#f8fafc' }}>MILITARY • COMMUNICATIONS</span>
                  <h1 className="msl-navy">High Secured Video <br/>& <span className="msl-solid-highlight">Voice Streaming</span></h1>
                  <p className="msl-text-body">Encrypted media streaming for Mining & Military Operations</p>
                  <div className="hero-mini-features">
                    <span>End-to-End Encryption</span>
                    <span>Low Latency</span>
                    <span>Robust</span>
                    <span>Cross-Platform</span>
                  </div>
                  <div className="hero-buttons">
                    <a href="#video" onClick={(e) => { e.preventDefault(); videoRef.current?.scrollIntoView({ behavior: 'smooth' }); }} className="hero-btn primary-btn msl-btn-primary">Explore Solution</a>
                  </div>
                </div>
                <div className="hero-image-col">
                  <div className="hero-image-panel" style={{ background: '#0f172a' }}>
                    <img src="/assets/img/hero/security.webp" alt="High Secured Streaming" style={{ opacity: 0.9 }} />
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
            PRODUCT 1: T90 Vehicles2Vehicles RF Comm.
        ========================================= */}
        <section id="t90" ref={t90Ref} style={{ background: '#f8fafc', paddingBottom: '60px' }}>
          
          <div className="caution-stripe msl-bg-navy" style={{ padding: '60px 0', borderBottom: '4px solid #c0001a', marginBottom: '40px' }}>
            <div className="container text-center position-relative" style={{ zIndex: 1 }}>
              <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '30px', marginBottom: '20px' }}>
                Product 01
              </span>
              <h2 style={{ color: '#fff', fontSize: '36px', fontWeight: '800', marginBottom: '15px' }}>
                T90's Vehicles2Vehicles RF Comm. & Automation
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '18px', maxWidth: '800px', margin: '0 auto', fontWeight: '300' }}>
                <strong style={{color: '#fff', fontWeight: '600'}}>Secured Convoy Vehicles Communication.</strong><br/>
                Advanced Wireless and RFID based communication systems for automated vehicle operations.
              </p>
            </div>
          </div>

          <div className="container" data-aos="fade-up">
            <div style={{ background: '#fff', borderRadius: '24px', padding: '40px', boxShadow: '0 10px 40px rgba(0,0,0,0.04)' }}>
              
              <div className="row g-5 align-items-center">
                
                <div className="col-lg-6">
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#1a2a4a', color: '#fff', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '25px' }}>
                    <i className="bx bx-broadcast"></i> COMMUNICATION
                  </div>
                  <h3 className="msl-navy" style={{ fontSize: '28px', fontWeight: '800', marginBottom: '20px' }}>
                    Seamless and Secure Connectivity
                  </h3>
                  <p className="msl-text-body" style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '30px' }}>
                    Maintain flawless communication within military convoys. Our Vehicles2Vehicles system ensures that every T90 is continuously connected, transferring critical data and audio securely across moving assets.
                  </p>
                  
                  <div style={{ background: '#fff', borderLeft: '4px solid #c0001a', padding: '20px', borderRadius: '0 8px 8px 0', boxShadow: '0 2px 15px rgba(0,0,0,0.03)', marginBottom: '30px' }}>
                    <h6 style={{ color: '#1a2a4a', fontWeight: '700', fontSize: '15px', marginBottom: '10px' }}>The Problem We Solve</h6>
                    <ul style={{ paddingLeft: '20px', color: '#4a5568', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                      <li>Loss of communication during rapid movement of convoy vehicles</li>
                      <li>Insecure data transfers prone to interception</li>
                      <li>Lack of real-time situational awareness for drivers and commanders</li>
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
                        <i className="bx bx-radio-circle-marked" style={{ fontSize: '36px', color: '#c0001a', marginBottom: '15px', display: 'block' }}></i>
                        <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '16px', marginBottom: '10px' }}>Wireless RF Tech</h5>
                        <p className="msl-text-body" style={{ fontSize: '14px', margin: 0, lineHeight: '1.5', flexGrow: 1 }}>Highly resilient radio frequency communication bridging gaps between moving assets.</p>
                        <div><span className="ai-tag"><i className="bx bx-check-circle" style={{ marginRight: '4px' }}></i> Reliable</span></div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="ai-feature-card">
                        <i className="bx bx-microchip" style={{ fontSize: '36px', color: '#c0001a', marginBottom: '15px', display: 'block' }}></i>
                        <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '16px', marginBottom: '10px' }}>RFID Communication</h5>
                        <p className="msl-text-body" style={{ fontSize: '14px', margin: 0, lineHeight: '1.5', flexGrow: 1 }}>Automated vehicle identification and secure token exchange.</p>
                        <div><span className="ai-tag"><i className="bx bx-check-circle" style={{ marginRight: '4px' }}></i> Secured</span></div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="ai-feature-card">
                        <i className="bx bx-desktop" style={{ fontSize: '36px', color: '#c0001a', marginBottom: '15px', display: 'block' }}></i>
                        <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '16px', marginBottom: '10px' }}>Qt Display Tracking</h5>
                        <p className="msl-text-body" style={{ fontSize: '14px', margin: 0, lineHeight: '1.5', flexGrow: 1 }}>Interactive graphical interface for operators to track vehicle status and formation.</p>
                        <div><span className="ai-tag"><i className="bx bx-check-circle" style={{ marginRight: '4px' }}></i> User Friendly</span></div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="ai-feature-card">
                        <i className="bx bx-headphone" style={{ fontSize: '36px', color: '#c0001a', marginBottom: '15px', display: 'block' }}></i>
                        <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '16px', marginBottom: '10px' }}>Audio Communication</h5>
                        <p className="msl-text-body" style={{ fontSize: '14px', margin: 0, lineHeight: '1.5', flexGrow: 1 }}>Crystal clear, encrypted voice transmission over the vehicular network.</p>
                        <div><span className="ai-tag"><i className="bx bx-check-circle" style={{ marginRight: '4px' }}></i> Real-Time</span></div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <hr style={{ borderColor: '#e2e8f0', margin: '30px 0' }} />

              <div className="row align-items-center">
                <div className="col-lg-8 mb-3 mb-lg-0">
                  <h6 style={{ color: '#1a2a4a', fontWeight: '700', fontSize: '14px', marginBottom: '10px', textTransform: 'uppercase' }}>Ideal For:</h6>
                  <p style={{ fontSize: '14px', color: '#4a5568', margin: 0 }}>Armored vehicle convoys • Tactical field deployments • Supply chain protection units</p>
                </div>
                <div className="col-lg-4 text-start text-lg-end">
                  <a href="#contact" style={{ display: 'inline-block', background: '#c0001a', color: '#fff', padding: '12px 24px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none', fontSize: '14px' }}>Connect Your Fleet →</a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================
            PRODUCT 2: G3000 Cockpit Monitor
        ========================================= */}
        <section id="g3000" ref={g3000Ref} style={{ background: '#f8fafc', paddingBottom: '60px' }}>
          
          <div className="caution-stripe msl-bg-navy" style={{ padding: '60px 0', borderBottom: '4px solid #c0001a', marginBottom: '40px' }}>
            <div className="container text-center position-relative" style={{ zIndex: 1 }}>
              <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '30px', marginBottom: '20px' }}>
                Product 02
              </span>
              <h2 style={{ color: '#fff', fontSize: '36px', fontWeight: '800', marginBottom: '15px' }}>
                G3000 Cockpit Monitor Device
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '18px', maxWidth: '800px', margin: '0 auto', fontWeight: '300' }}>
                <strong style={{color: '#fff', fontWeight: '600'}}>High Precision Monitoring for Avionics.</strong><br/>
                Advanced embedded software and reliable display technologies for aerospace applications.
              </p>
            </div>
          </div>

          <div className="container" data-aos="fade-up">
            <div style={{ background: '#fff', borderRadius: '24px', padding: '40px', boxShadow: '0 10px 40px rgba(0,0,0,0.04)' }}>
              
              <div className="row g-5 align-items-center">
                
                <div className="col-lg-6">
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#1a2a4a', color: '#fff', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '25px' }}>
                    <i className="bx bx-paper-plane"></i> AVIONICS
                  </div>
                  <h3 className="msl-navy" style={{ fontSize: '28px', fontWeight: '800', marginBottom: '20px' }}>
                    Safety-Critical Aerospace Displays
                  </h3>
                  <p className="msl-text-body" style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '30px' }}>
                    When lives are on the line at 30,000 feet, there is zero room for error. The G3000 Cockpit Monitor provides pilots with vital flight metrics, driven by our highly optimized Real-Time Operating System and redundant hardware architecture.
                  </p>
                  
                  <div style={{ background: '#fff', borderLeft: '4px solid #c0001a', padding: '20px', borderRadius: '0 8px 8px 0', boxShadow: '0 2px 15px rgba(0,0,0,0.03)', marginBottom: '30px' }}>
                    <h6 style={{ color: '#1a2a4a', fontWeight: '700', fontSize: '15px', marginBottom: '10px' }}>The Problem We Solve</h6>
                    <ul style={{ paddingLeft: '20px', color: '#4a5568', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                      <li>Latency in displaying crucial sensor data</li>
                      <li>System failure in extreme environmental conditions</li>
                      <li>Complex user interfaces that cause cognitive overload during emergencies</li>
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
                        <i className="bx bx-code-block" style={{ fontSize: '36px', color: '#c0001a', marginBottom: '15px', display: 'block' }}></i>
                        <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '16px', marginBottom: '10px' }}>RTOS Integration</h5>
                        <p className="msl-text-body" style={{ fontSize: '14px', margin: 0, lineHeight: '1.5', flexGrow: 1 }}>Running on deterministic Real-Time Operating Systems for guaranteed execution times.</p>
                        <div><span className="ai-tag"><i className="bx bx-check-circle" style={{ marginRight: '4px' }}></i> Zero Latency</span></div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="ai-feature-card">
                        <i className="bx bx-layer" style={{ fontSize: '36px', color: '#c0001a', marginBottom: '15px', display: 'block' }}></i>
                        <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '16px', marginBottom: '10px' }}>BSP & Drivers</h5>
                        <p className="msl-text-body" style={{ fontSize: '14px', margin: 0, lineHeight: '1.5', flexGrow: 1 }}>Custom Board Support Packages ensuring seamless hardware-software handshake.</p>
                        <div><span className="ai-tag"><i className="bx bx-check-circle" style={{ marginRight: '4px' }}></i> Robust</span></div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="ai-feature-card">
                        <i className="bx bx-test-tube" style={{ fontSize: '36px', color: '#c0001a', marginBottom: '15px', display: 'block' }}></i>
                        <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '16px', marginBottom: '10px' }}>Rigorous Testing</h5>
                        <p className="msl-text-body" style={{ fontSize: '14px', margin: 0, lineHeight: '1.5', flexGrow: 1 }}>Automated software testing pipelines to meet DO-178C avionics standards.</p>
                        <div><span className="ai-tag"><i className="bx bx-check-circle" style={{ marginRight: '4px' }}></i> Certified</span></div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="ai-feature-card">
                        <i className="bx bx-tachometer" style={{ fontSize: '36px', color: '#c0001a', marginBottom: '15px', display: 'block' }}></i>
                        <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '16px', marginBottom: '10px' }}>Clear Interface</h5>
                        <p className="msl-text-body" style={{ fontSize: '14px', margin: 0, lineHeight: '1.5', flexGrow: 1 }}>High-visibility displays designed for instant data comprehension by pilots.</p>
                        <div><span className="ai-tag"><i className="bx bx-check-circle" style={{ marginRight: '4px' }}></i> Ergonomic</span></div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <hr style={{ borderColor: '#e2e8f0', margin: '30px 0' }} />

              <div className="row align-items-center">
                <div className="col-lg-8 mb-3 mb-lg-0">
                  <h6 style={{ color: '#1a2a4a', fontWeight: '700', fontSize: '14px', marginBottom: '10px', textTransform: 'uppercase' }}>Ideal For:</h6>
                  <p style={{ fontSize: '14px', color: '#4a5568', margin: 0 }}>Military aircraft manufacturers • Commercial aviation modernization • Defense aerospace contractors</p>
                </div>
                <div className="col-lg-4 text-start text-lg-end">
                  <a href="#contact" style={{ display: 'inline-block', background: '#c0001a', color: '#fff', padding: '12px 24px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none', fontSize: '14px' }}>Upgrade Avionics →</a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================
            PRODUCT 3: SMART AI Locker Systems
        ========================================= */}
        <section id="locker" ref={lockerRef} style={{ background: '#f8fafc', paddingBottom: '60px' }}>
          
          <div className="caution-stripe msl-bg-navy" style={{ padding: '60px 0', borderBottom: '4px solid #c0001a', marginBottom: '40px' }}>
            <div className="container text-center position-relative" style={{ zIndex: 1 }}>
              <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '30px', marginBottom: '20px' }}>
                Product 03
              </span>
              <h2 style={{ color: '#fff', fontSize: '36px', fontWeight: '800', marginBottom: '15px' }}>
                SMART AI Locker Systems For Defence
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '18px', maxWidth: '800px', margin: '0 auto', fontWeight: '300' }}>
                <strong style={{color: '#fff', fontWeight: '600'}}>Impenetrable Asset Storage.</strong><br/>
                Intelligent lockers governed by AI algorithms, facial recognition, and continuous monitoring.
              </p>
            </div>
          </div>

          <div className="container" data-aos="fade-up">
            <div style={{ background: '#fff', borderRadius: '24px', padding: '40px', boxShadow: '0 10px 40px rgba(0,0,0,0.04)' }}>
              
              <div className="row g-5 align-items-center">
                
                <div className="col-lg-6">
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#1a2a4a', color: '#fff', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '25px' }}>
                    <i className="bx bx-shield-quarter"></i> SECURITY
                  </div>
                  <h3 className="msl-navy" style={{ fontSize: '28px', fontWeight: '800', marginBottom: '20px' }}>
                    Safeguarding Critical Assets
                  </h3>
                  <p className="msl-text-body" style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '30px' }}>
                    Defense installations require absolute accountability for weapons, documents, and sensitive materials. Our SMART AI Locker System replaces traditional physical keys with advanced biometric authentication and real-time inventory tracking.
                  </p>
                  
                  <div style={{ background: '#fff', borderLeft: '4px solid #c0001a', padding: '20px', borderRadius: '0 8px 8px 0', boxShadow: '0 2px 15px rgba(0,0,0,0.03)', marginBottom: '30px' }}>
                    <h6 style={{ color: '#1a2a4a', fontWeight: '700', fontSize: '15px', marginBottom: '10px' }}>The Problem We Solve</h6>
                    <ul style={{ paddingLeft: '20px', color: '#4a5568', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                      <li>Misplacement or theft of critical weapons and gear</li>
                      <li>Lack of audit trails for who accessed which locker and when</li>
                      <li>Time-consuming manual sign-out processes</li>
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
                        <i className="bx bx-face" style={{ fontSize: '36px', color: '#c0001a', marginBottom: '15px', display: 'block' }}></i>
                        <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '16px', marginBottom: '10px' }}>Facial Recognition</h5>
                        <p className="msl-text-body" style={{ fontSize: '14px', margin: 0, lineHeight: '1.5', flexGrow: 1 }}>Instant, spoof-proof AI facial authentication for authorized personnel.</p>
                        <div><span className="ai-tag"><i className="bx bx-check-circle" style={{ marginRight: '4px' }}></i> Edge AI</span></div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="ai-feature-card">
                        <i className="bx bx-list-check" style={{ fontSize: '36px', color: '#c0001a', marginBottom: '15px', display: 'block' }}></i>
                        <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '16px', marginBottom: '10px' }}>Audit Trails</h5>
                        <p className="msl-text-body" style={{ fontSize: '14px', margin: 0, lineHeight: '1.5', flexGrow: 1 }}>Immutable logs of every access attempt, success, and duration.</p>
                        <div><span className="ai-tag"><i className="bx bx-check-circle" style={{ marginRight: '4px' }}></i> Accountable</span></div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="ai-feature-card">
                        <i className="bx bx-box" style={{ fontSize: '36px', color: '#c0001a', marginBottom: '15px', display: 'block' }}></i>
                        <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '16px', marginBottom: '10px' }}>Asset Tracking</h5>
                        <p className="msl-text-body" style={{ fontSize: '14px', margin: 0, lineHeight: '1.5', flexGrow: 1 }}>Internal sensors detect exactly which item was removed and when it was returned.</p>
                        <div><span className="ai-tag"><i className="bx bx-check-circle" style={{ marginRight: '4px' }}></i> Smart Inventory</span></div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="ai-feature-card">
                        <i className="bx bx-error-alt" style={{ fontSize: '36px', color: '#c0001a', marginBottom: '15px', display: 'block' }}></i>
                        <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '16px', marginBottom: '10px' }}>Instant Alerts</h5>
                        <p className="msl-text-body" style={{ fontSize: '14px', margin: 0, lineHeight: '1.5', flexGrow: 1 }}>Command center notification for unauthorized attempts or unreturned items.</p>
                        <div><span className="ai-tag"><i className="bx bx-check-circle" style={{ marginRight: '4px' }}></i> Real-Time</span></div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <hr style={{ borderColor: '#e2e8f0', margin: '30px 0' }} />

              <div className="row align-items-center">
                <div className="col-lg-8 mb-3 mb-lg-0">
                  <h6 style={{ color: '#1a2a4a', fontWeight: '700', fontSize: '14px', marginBottom: '10px', textTransform: 'uppercase' }}>Ideal For:</h6>
                  <p style={{ fontSize: '14px', color: '#4a5568', margin: 0 }}>Armories • Intelligence Agencies • Special Forces Bases • Strategic Command Centers</p>
                </div>
                <div className="col-lg-4 text-start text-lg-end">
                  <a href="#contact" style={{ display: 'inline-block', background: '#c0001a', color: '#fff', padding: '12px 24px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none', fontSize: '14px' }}>Secure Your Assets →</a>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* =========================================
            PRODUCT 4: Video and Voice Streaming
        ========================================= */}
        <section id="video" ref={videoRef} style={{ background: '#f8fafc', paddingBottom: '60px' }}>
          
          <div className="caution-stripe msl-bg-navy" style={{ padding: '60px 0', borderBottom: '4px solid #c0001a', marginBottom: '40px' }}>
            <div className="container text-center position-relative" style={{ zIndex: 1 }}>
              <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '30px', marginBottom: '20px' }}>
                Product 04
              </span>
              <h2 style={{ color: '#fff', fontSize: '36px', fontWeight: '800', marginBottom: '15px' }}>
                High Secured Video & Voice Streaming
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '18px', maxWidth: '800px', margin: '0 auto', fontWeight: '300' }}>
                <strong style={{color: '#fff', fontWeight: '600'}}>Uncompromised Tactical Feeds.</strong><br/>
                Deliver mission-critical visuals and communications securely in the harshest environments.
              </p>
            </div>
          </div>

          <div className="container" data-aos="fade-up">
            <div style={{ background: '#fff', borderRadius: '24px', padding: '40px', boxShadow: '0 10px 40px rgba(0,0,0,0.04)' }}>
              
              <div className="row g-5 align-items-center">
                
                <div className="col-lg-6">
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#1a2a4a', color: '#fff', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '25px' }}>
                    <i className="bx bx-camera-movie"></i> TACTICAL MEDIA
                  </div>
                  <h3 className="msl-navy" style={{ fontSize: '28px', fontWeight: '800', marginBottom: '20px' }}>
                    See Everything. Expose Nothing.
                  </h3>
                  <p className="msl-text-body" style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '30px' }}>
                    In both mining and military operations, live visual feedback is critical for commanding officers. We provide a streaming infrastructure built on end-to-end encryption, ensuring that intercepted signals are useless to adversaries, while delivering smooth feeds despite low bandwidth.
                  </p>
                  
                  <div style={{ background: '#fff', borderLeft: '4px solid #c0001a', padding: '20px', borderRadius: '0 8px 8px 0', boxShadow: '0 2px 15px rgba(0,0,0,0.03)', marginBottom: '30px' }}>
                    <h6 style={{ color: '#1a2a4a', fontWeight: '700', fontSize: '15px', marginBottom: '10px' }}>The Problem We Solve</h6>
                    <ul style={{ paddingLeft: '20px', color: '#4a5568', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                      <li>Standard streaming protocols are easily intercepted</li>
                      <li>High latency ruins tactical command decisions</li>
                      <li>Feed drops in areas with degraded network connectivity</li>
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
                        <i className="bx bx-lock-alt" style={{ fontSize: '36px', color: '#c0001a', marginBottom: '15px', display: 'block' }}></i>
                        <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '16px', marginBottom: '10px' }}>Military Encryption</h5>
                        <p className="msl-text-body" style={{ fontSize: '14px', margin: 0, lineHeight: '1.5', flexGrow: 1 }}>AES-256 and proprietary cryptographic layers securing every packet.</p>
                        <div><span className="ai-tag"><i className="bx bx-check-circle" style={{ marginRight: '4px' }}></i> Unhackable</span></div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="ai-feature-card">
                        <i className="bx bx-wifi-off" style={{ fontSize: '36px', color: '#c0001a', marginBottom: '15px', display: 'block' }}></i>
                        <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '16px', marginBottom: '10px' }}>Low Bandwidth Ready</h5>
                        <p className="msl-text-body" style={{ fontSize: '14px', margin: 0, lineHeight: '1.5', flexGrow: 1 }}>Advanced codec compression maintains quality even over weak field networks.</p>
                        <div><span className="ai-tag"><i className="bx bx-check-circle" style={{ marginRight: '4px' }}></i> Optimized</span></div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="ai-feature-card">
                        <i className="bx bx-devices" style={{ fontSize: '36px', color: '#c0001a', marginBottom: '15px', display: 'block' }}></i>
                        <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '16px', marginBottom: '10px' }}>Cross-Platform</h5>
                        <p className="msl-text-body" style={{ fontSize: '14px', margin: 0, lineHeight: '1.5', flexGrow: 1 }}>View feeds simultaneously on command center screens, tablets, and field devices.</p>
                        <div><span className="ai-tag"><i className="bx bx-check-circle" style={{ marginRight: '4px' }}></i> Scalable</span></div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="ai-feature-card">
                        <i className="bx bx-volume-full" style={{ fontSize: '36px', color: '#c0001a', marginBottom: '15px', display: 'block' }}></i>
                        <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '16px', marginBottom: '10px' }}>Voice Integration</h5>
                        <p className="msl-text-body" style={{ fontSize: '14px', margin: 0, lineHeight: '1.5', flexGrow: 1 }}>Synchronized, encrypted two-way voice comms embedded directly in the stream.</p>
                        <div><span className="ai-tag"><i className="bx bx-check-circle" style={{ marginRight: '4px' }}></i> Integrated</span></div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <hr style={{ borderColor: '#e2e8f0', margin: '30px 0' }} />

              <div className="row align-items-center">
                <div className="col-lg-8 mb-3 mb-lg-0">
                  <h6 style={{ color: '#1a2a4a', fontWeight: '700', fontSize: '14px', marginBottom: '10px', textTransform: 'uppercase' }}>Ideal For:</h6>
                  <p style={{ fontSize: '14px', color: '#4a5568', margin: 0 }}>Forward Operating Bases • Drone Command • Deep Underground Mining Operations</p>
                </div>
                <div className="col-lg-4 text-start text-lg-end">
                  <a href="#contact" style={{ display: 'inline-block', background: '#c0001a', color: '#fff', padding: '12px 24px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none', fontSize: '14px' }}>Deploy Secure Streaming →</a>
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
              <h3 style={{ color: '#ffffff', fontSize: '36px', fontWeight: '800', marginBottom: '20px', textTransform: 'none' }}>Ready to Modernize Your Operations?</h3>
              <p style={{ color: '#cbd5e1', maxWidth: '650px', margin: '0 auto 40px', fontSize: '18px', lineHeight: '1.6' }}>
                Implement intelligent, highly secure, and battle-tested solutions for your organization today.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                <a href="#contact" style={{ background: '#c0001a', color: '#fff', padding: '15px 40px', borderRadius: '30px', fontWeight: '700', fontSize: '16px', textDecoration: 'none', transition: 'background 0.3s ease' }}>
                  Talk to an Expert
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

export default Defense;
