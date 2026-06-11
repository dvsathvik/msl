import React, { useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Customization = () => {
  const { productId } = useParams();

  // Refs for scrolling
  const faceRef = useRef(null);
  const droneRef = useRef(null);
  const visionRef = useRef(null);

  useEffect(() => {
    if (productId === 'face' && faceRef.current) {
      faceRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if ((productId === 'drone' || productId === 'thermal') && droneRef.current) {
      droneRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if ((productId === 'dehaze' || productId === 'defect' || productId === 'other') && visionRef.current) {
      visionRef.current.scrollIntoView({ behavior: 'smooth' });
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
            <span style={{ color: '#ffffff', fontWeight: '500' }}>Customization</span>
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
          {/* Slide 1 - Edge AI / Face Analytics */}
          <SwiperSlide className="hero-slide slide-1">
            <div className="container hero-content">
              <div className="hero-grid">
                <div className="hero-text">
                  <span className="hero-tag" style={{ color: '#1a2a4a', border: '1px solid #e2e8f0', background: '#f8fafc' }}>EDGE AI • CUSTOMIZATION</span>
                  <h1 className="msl-navy">Face Analytics on <br/><span className="msl-solid-highlight">Broadcom Soc</span></h1>
                  <p className="msl-text-body">Customer Centric Edge AI Solutions for identity and security.</p>
                  <div className="hero-mini-features">
                    <span>Low Power</span>
                    <span>High FPS</span>
                    <span>Hardware Optimized</span>
                    <span>Edge Processing</span>
                  </div>
                  <div className="hero-buttons">
                    <a href="#face" onClick={(e) => { e.preventDefault(); faceRef.current?.scrollIntoView({ behavior: 'smooth' }); }} className="hero-btn primary-btn msl-btn-primary">Explore Solution</a>
                  </div>
                </div>
                <div className="hero-image-col">
                  <div className="hero-image-panel" style={{ background: '#0f172a' }}>
                    <img src="/assets/img/hero/ai-chip.webp" alt="Face Analytics SoC" style={{ opacity: 0.9 }} />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 - Drone / Thermal */}
          <SwiperSlide className="hero-slide slide-2">
            <div className="container hero-content">
              <div className="hero-grid">
                <div className="hero-text">
                  <span className="hero-tag" style={{ color: '#1a2a4a', border: '1px solid #e2e8f0', background: '#f8fafc' }}>UAV • THERMAL VISION</span>
                  <h1 className="msl-navy">Drone Vehicle & <br/><span className="msl-solid-highlight">Thermal Detection</span></h1>
                  <p className="msl-text-body">Advanced tracking payloads for autonomous operations.</p>
                  <div className="hero-mini-features">
                    <span>Onboard Analytics</span>
                    <span>Distance Calc</span>
                    <span>Thermal Imaging</span>
                    <span>Object Tracking</span>
                  </div>
                  <div className="hero-buttons">
                    <a href="#drone" onClick={(e) => { e.preventDefault(); droneRef.current?.scrollIntoView({ behavior: 'smooth' }); }} className="hero-btn primary-btn msl-btn-primary">Explore Solution</a>
                  </div>
                </div>
                <div className="hero-image-col">
                  <div className="hero-image-panel" style={{ background: '#0f172a' }}>
                    <img src="/assets/img/hero/defense1.webp" alt="Drone Vision" style={{ opacity: 0.9 }} />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 - Advanced Vision */}
          <SwiperSlide className="hero-slide slide-3">
            <div className="container hero-content">
              <div className="hero-grid">
                <div className="hero-text">
                  <span className="hero-tag" style={{ color: '#1a2a4a', border: '1px solid #e2e8f0', background: '#f8fafc' }}>COMPUTER VISION • CUSTOM</span>
                  <h1 className="msl-navy">Dehaze & Defect <br/><span className="msl-solid-highlight">Detection AI</span></h1>
                  <p className="msl-text-body">Enhancing visual clarity and automating quality control.</p>
                  <div className="hero-mini-features">
                    <span>Fog Removal</span>
                    <span>Snow Removal</span>
                    <span>Defect Detection</span>
                    <span>Real-time Filtering</span>
                  </div>
                  <div className="hero-buttons">
                    <a href="#vision" onClick={(e) => { e.preventDefault(); visionRef.current?.scrollIntoView({ behavior: 'smooth' }); }} className="hero-btn primary-btn msl-btn-primary">Explore Solution</a>
                  </div>
                </div>
                <div className="hero-image-col">
                  <div className="hero-image-panel" style={{ background: '#0f172a' }}>
                    <img src="/assets/img/hero/4.webp" alt="Advanced Vision" style={{ opacity: 0.9 }} />
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
            PRODUCT 1: Face Analytics
        ========================================= */}
        <section id="face" ref={faceRef} style={{ background: '#f8fafc', paddingBottom: '60px' }}>
          
          <div className="caution-stripe msl-bg-navy" style={{ padding: '60px 0', borderBottom: '4px solid #c0001a', marginBottom: '40px' }}>
            <div className="container text-center position-relative" style={{ zIndex: 1 }}>
              <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '30px', marginBottom: '20px' }}>
                Custom Solution 01
              </span>
              <h2 style={{ color: '#fff', fontSize: '36px', fontWeight: '800', marginBottom: '15px' }}>
                Face Analytics on Broadcom SoC
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '18px', maxWidth: '800px', margin: '0 auto', fontWeight: '300' }}>
                <strong style={{color: '#fff', fontWeight: '600'}}>Hardware-Optimized Edge AI.</strong><br/>
                Deploying complex neural networks natively on System-on-Chip architectures.
              </p>
            </div>
          </div>

          <div className="container" data-aos="fade-up">
            <div style={{ background: '#fff', borderRadius: '24px', padding: '40px', boxShadow: '0 10px 40px rgba(0,0,0,0.04)' }}>
              
              <div className="row g-5 align-items-center">
                
                <div className="col-lg-6">
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#1a2a4a', color: '#fff', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '25px' }}>
                    <i className="bx bx-microchip"></i> EDGE AI
                  </div>
                  <h3 className="msl-navy" style={{ fontSize: '28px', fontWeight: '800', marginBottom: '20px' }}>
                    Maximum Performance, Minimal Power
                  </h3>
                  <p className="msl-text-body" style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '30px' }}>
                    By porting our advanced face analytics models directly to the Broadcom SoC platform, we eliminate the need for cloud servers. This means instantaneous facial recognition, emotion detection, and tracking directly at the edge, ideal for smart cameras and localized access control.
                  </p>
                  
                  <div style={{ background: '#fff', borderLeft: '4px solid #c0001a', padding: '20px', borderRadius: '0 8px 8px 0', boxShadow: '0 2px 15px rgba(0,0,0,0.03)', marginBottom: '30px' }}>
                    <h6 style={{ color: '#1a2a4a', fontWeight: '700', fontSize: '15px', marginBottom: '10px' }}>The Problem We Solve</h6>
                    <ul style={{ paddingLeft: '20px', color: '#4a5568', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                      <li>High latency and bandwidth costs associated with cloud AI processing</li>
                      <li>Data privacy concerns when sending video streams off-premises</li>
                      <li>High power consumption of traditional GPU-based edge devices</li>
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
                        <i className="bx bx-bolt-circle" style={{ fontSize: '36px', color: '#c0001a', marginBottom: '15px', display: 'block' }}></i>
                        <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '16px', marginBottom: '10px' }}>Ultra-Low Latency</h5>
                        <p className="msl-text-body" style={{ fontSize: '14px', margin: 0, lineHeight: '1.5', flexGrow: 1 }}>Processing frames in milliseconds entirely on the local device.</p>
                        <div><span className="ai-tag"><i className="bx bx-check-circle" style={{ marginRight: '4px' }}></i> Real-Time</span></div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="ai-feature-card">
                        <i className="bx bx-shield-quarter" style={{ fontSize: '36px', color: '#c0001a', marginBottom: '15px', display: 'block' }}></i>
                        <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '16px', marginBottom: '10px' }}>Data Privacy</h5>
                        <p className="msl-text-body" style={{ fontSize: '14px', margin: 0, lineHeight: '1.5', flexGrow: 1 }}>No images leave the device; only metadata (like ID or access logs) is transmitted.</p>
                        <div><span className="ai-tag"><i className="bx bx-check-circle" style={{ marginRight: '4px' }}></i> GDPR Ready</span></div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            PRODUCT 2: Drone & Thermal Detection
        ========================================= */}
        <section id="drone" ref={droneRef} style={{ background: '#f8fafc', paddingBottom: '60px' }}>
          
          <div className="caution-stripe msl-bg-navy" style={{ padding: '60px 0', borderBottom: '4px solid #c0001a', marginBottom: '40px' }}>
            <div className="container text-center position-relative" style={{ zIndex: 1 }}>
              <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '30px', marginBottom: '20px' }}>
                Custom Solution 02
              </span>
              <h2 style={{ color: '#fff', fontSize: '36px', fontWeight: '800', marginBottom: '15px' }}>
                Drone Vehicle & Thermal Detection
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '18px', maxWidth: '800px', margin: '0 auto', fontWeight: '300' }}>
                <strong style={{color: '#fff', fontWeight: '600'}}>Vision for the Skies.</strong><br/>
                Onboard AI payloads designed to detect and track vehicles and measure distances via thermal imaging.
              </p>
            </div>
          </div>

          <div className="container" data-aos="fade-up">
            <div style={{ background: '#fff', borderRadius: '24px', padding: '40px', boxShadow: '0 10px 40px rgba(0,0,0,0.04)' }}>
              
              <div className="row g-5 align-items-center">
                
                <div className="col-lg-6">
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#1a2a4a', color: '#fff', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '25px' }}>
                    <i className="bx bx-target-lock"></i> UAV SYSTEMS
                  </div>
                  <h3 className="msl-navy" style={{ fontSize: '28px', fontWeight: '800', marginBottom: '20px' }}>
                    Autonomous Tracking & Ranging
                  </h3>
                  <p className="msl-text-body" style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '30px' }}>
                    Drones require lightweight, fast processing for autonomous operations. We custom-build AI pipelines that allow drones to identify vehicles from high altitudes and use thermal camera integrations to calculate exact distances to targets, day or night.
                  </p>
                  
                  <div style={{ background: '#fff', borderLeft: '4px solid #c0001a', padding: '20px', borderRadius: '0 8px 8px 0', boxShadow: '0 2px 15px rgba(0,0,0,0.03)', marginBottom: '30px' }}>
                    <h6 style={{ color: '#1a2a4a', fontWeight: '700', fontSize: '15px', marginBottom: '10px' }}>The Problem We Solve</h6>
                    <ul style={{ paddingLeft: '20px', color: '#4a5568', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                      <li>Inability to identify assets at night or through foliage</li>
                      <li>Heavy processing units draining drone battery life</li>
                      <li>Inaccurate distance estimation from aerial perspectives</li>
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
                        <i className="bx bx-car" style={{ fontSize: '36px', color: '#c0001a', marginBottom: '15px', display: 'block' }}></i>
                        <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '16px', marginBottom: '10px' }}>Vehicle Detection</h5>
                        <p className="msl-text-body" style={{ fontSize: '14px', margin: 0, lineHeight: '1.5', flexGrow: 1 }}>Highly accurate models trained specifically for top-down aerial perspectives.</p>
                        <div><span className="ai-tag"><i className="bx bx-check-circle" style={{ marginRight: '4px' }}></i> High Accuracy</span></div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="ai-feature-card">
                        <i className="bx bx-ruler" style={{ fontSize: '36px', color: '#c0001a', marginBottom: '15px', display: 'block' }}></i>
                        <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '16px', marginBottom: '10px' }}>Thermal Ranging</h5>
                        <p className="msl-text-body" style={{ fontSize: '14px', margin: 0, lineHeight: '1.5', flexGrow: 1 }}>Algorithmically calculates distance and dimensions using thermal signatures.</p>
                        <div><span className="ai-tag"><i className="bx bx-check-circle" style={{ marginRight: '4px' }}></i> Night Ops Ready</span></div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>


        {/* =========================================
            PRODUCT 3: Advanced Vision
        ========================================= */}
        <section id="vision" ref={visionRef} style={{ background: '#f8fafc', paddingBottom: '60px' }}>
          
          <div className="caution-stripe msl-bg-navy" style={{ padding: '60px 0', borderBottom: '4px solid #c0001a', marginBottom: '40px' }}>
            <div className="container text-center position-relative" style={{ zIndex: 1 }}>
              <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '30px', marginBottom: '20px' }}>
                Custom Solution 03
              </span>
              <h2 style={{ color: '#fff', fontSize: '36px', fontWeight: '800', marginBottom: '15px' }}>
                Dehaze & Defect Detection AI
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '18px', maxWidth: '800px', margin: '0 auto', fontWeight: '300' }}>
                <strong style={{color: '#fff', fontWeight: '600'}}>Crystal Clear Computer Vision.</strong><br/>
                Image enhancement algorithms and precise manufacturing defect identification.
              </p>
            </div>
          </div>

          <div className="container" data-aos="fade-up">
            <div style={{ background: '#fff', borderRadius: '24px', padding: '40px', boxShadow: '0 10px 40px rgba(0,0,0,0.04)' }}>
              
              <div className="row g-5 align-items-center">
                
                <div className="col-lg-6">
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#1a2a4a', color: '#fff', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '25px' }}>
                    <i className="bx bx-scan"></i> COMPUTER VISION
                  </div>
                  <h3 className="msl-navy" style={{ fontSize: '28px', fontWeight: '800', marginBottom: '20px' }}>
                    Seeing Through the Noise
                  </h3>
                  <p className="msl-text-body" style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '30px' }}>
                    Whether you are trying to navigate a vehicle through heavy fog/snow, or identifying microscopic cracks in a manufacturing assembly line, our specialized Computer Vision networks clean the image data and highlight exactly what you need to see.
                  </p>
                  
                  <div style={{ background: '#fff', borderLeft: '4px solid #c0001a', padding: '20px', borderRadius: '0 8px 8px 0', boxShadow: '0 2px 15px rgba(0,0,0,0.03)', marginBottom: '30px' }}>
                    <h6 style={{ color: '#1a2a4a', fontWeight: '700', fontSize: '15px', marginBottom: '10px' }}>The Problem We Solve</h6>
                    <ul style={{ paddingLeft: '20px', color: '#4a5568', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                      <li>Camera blindness during adverse weather conditions (Fog, Snow)</li>
                      <li>Human error in manual quality assurance on assembly lines</li>
                      <li>High false-positive rates in generic defect detection software</li>
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
                        <i className="bx bx-cloud-light-rain" style={{ fontSize: '36px', color: '#c0001a', marginBottom: '15px', display: 'block' }}></i>
                        <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '16px', marginBottom: '10px' }}>Dehaze / Defog</h5>
                        <p className="msl-text-body" style={{ fontSize: '14px', margin: 0, lineHeight: '1.5', flexGrow: 1 }}>Deep learning filters that remove environmental noise to restore visual clarity in real-time.</p>
                        <div><span className="ai-tag"><i className="bx bx-check-circle" style={{ marginRight: '4px' }}></i> Clear Vision</span></div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="ai-feature-card">
                        <i className="bx bx-search-alt" style={{ fontSize: '36px', color: '#c0001a', marginBottom: '15px', display: 'block' }}></i>
                        <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '16px', marginBottom: '10px' }}>Defect Detection</h5>
                        <p className="msl-text-body" style={{ fontSize: '14px', margin: 0, lineHeight: '1.5', flexGrow: 1 }}>Custom-trained models to spot scratches, dents, or misalignments instantly.</p>
                        <div><span className="ai-tag"><i className="bx bx-check-circle" style={{ marginRight: '4px' }}></i> Quality Assurance</span></div>
                      </div>
                    </div>
                  </div>
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
              <h3 style={{ color: '#ffffff', fontSize: '36px', fontWeight: '800', marginBottom: '20px', textTransform: 'none' }}>Need a Custom AI Solution?</h3>
              <p style={{ color: '#cbd5e1', maxWidth: '650px', margin: '0 auto 40px', fontSize: '18px', lineHeight: '1.6' }}>
                We build tailored neural networks and embedded edge architectures for your unique use cases.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                <a href="#contact" style={{ background: '#c0001a', color: '#fff', padding: '15px 40px', borderRadius: '30px', fontWeight: '700', fontSize: '16px', textDecoration: 'none', transition: 'background 0.3s ease' }}>
                  Discuss Your Project
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default Customization;
