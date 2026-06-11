import React, { useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const RenewableEnergy = () => {
  const { productId } = useParams();

  // Refs for scrolling
  const solarRef = useRef(null);

  useEffect(() => {
    if (productId === 'solar' && solarRef.current) {
      solarRef.current.scrollIntoView({ behavior: 'smooth' });
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
            <span style={{ color: '#ffffff', fontWeight: '500' }}>Renewable Energy</span>
          </span>
        </div>
      </div>

      {/* Hero Slider */}
      <section id="hero-slider" className="heroSwiper msl-bg-navy industrial-grid" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          loopedSlides={1}
          speed={900}
          slidesPerView="auto"
          centeredSlides={true}
          spaceBetween={30}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ el: '.hero-pagination', clickable: true }}
          navigation={{ nextEl: '.hero-next', prevEl: '.hero-prev' }}
        >
          {/* Slide 1 - Smart Solar */}
          <SwiperSlide className="hero-slide slide-1">
            <div className="container hero-content">
              <div className="hero-grid">
                <div className="hero-text">
                  <span className="hero-tag" style={{ color: '#1a2a4a', border: '1px solid #e2e8f0', background: '#f8fafc' }}>ENERGY • EFFICIENCY</span>
                  <h1 className="msl-navy">Smart Solar <br/><span className="msl-solid-highlight">Energy Systems</span></h1>
                  <p className="msl-text-body">Maximize ROI with Panel-Level Intelligence.</p>
                  <div className="hero-mini-features">
                    <span>Panel Analysis</span>
                    <span>Fault Ticketing</span>
                    <span>SCADA</span>
                    <span>Real-Time ROI</span>
                  </div>
                  <div className="hero-buttons">
                    <a href="#solar" onClick={(e) => { e.preventDefault(); solarRef.current?.scrollIntoView({ behavior: 'smooth' }); }} className="hero-btn primary-btn msl-btn-primary">Explore Solution</a>
                  </div>
                </div>
                <div className="hero-image-col">
                  <div className="hero-image-panel" style={{ background: '#0f172a' }}>
                    <img src="/assets/img/hero/9.webp" alt="Smart Solar Energy" style={{ opacity: 0.9 }} />
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
            PRODUCT 1: Smart Solar Energy
        ========================================= */}
        <section id="solar" ref={solarRef} style={{ background: '#f8fafc', paddingBottom: '60px' }}>
          
          <div className="caution-stripe msl-bg-navy" style={{ padding: '60px 0', borderBottom: '4px solid #c0001a', marginBottom: '40px' }}>
            <div className="container text-center position-relative" style={{ zIndex: 1 }}>
              <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '30px', marginBottom: '20px' }}>
                Product 01
              </span>
              <h2 style={{ color: '#fff', fontSize: '36px', fontWeight: '800', marginBottom: '15px' }}>
                Smart Solar Energy Systems
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '18px', maxWidth: '800px', margin: '0 auto', fontWeight: '300' }}>
                <strong style={{color: '#fff', fontWeight: '600'}}>Stop Power Leakage. Start Seeing Returns.</strong><br/>
                Intelligent SCADA solutions providing panel-level and string-level fault analysis for multi-MW scale solar plants.
              </p>
            </div>
          </div>

          <div className="container" data-aos="fade-up">
            <div style={{ background: '#fff', borderRadius: '24px', padding: '40px', boxShadow: '0 10px 40px rgba(0,0,0,0.04)' }}>
              
              <div className="row g-5 align-items-center">
                
                <div className="col-lg-6">
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#1a2a4a', color: '#fff', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '25px' }}>
                    <i className="bx bx-sun"></i> SOLAR GRID
                  </div>
                  <h3 className="msl-navy" style={{ fontSize: '28px', fontWeight: '800', marginBottom: '20px' }}>
                    Protecting Your Solar ROI
                  </h3>
                  <p className="msl-text-body" style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '30px' }}>
                    Solar plants expect an ROI in ~3.5 years, but undetected power leakages slow that down significantly. Even a single faulty panel, bird dropping, or loose MC4 cable can throttle an entire string of panels. Our Smart Solar Energy System gives you eyes on the health of every single panel.
                  </p>
                  
                  <div style={{ background: '#fff', borderLeft: '4px solid #c0001a', padding: '20px', borderRadius: '0 8px 8px 0', boxShadow: '0 2px 15px rgba(0,0,0,0.03)', marginBottom: '30px' }}>
                    <h6 style={{ color: '#1a2a4a', fontWeight: '700', fontSize: '15px', marginBottom: '10px' }}>The Problem We Solve</h6>
                    <ul style={{ paddingLeft: '20px', color: '#4a5568', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                      <li>A single faulty/shaded panel reduces the output power of the entire series</li>
                      <li>Legacy SCADA monitors string-level only, masking precise panel issues</li>
                      <li>Physical damages and loose cables delay ROI due to slow fault detection</li>
                    </ul>
                  </div>

                  <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '18px', marginBottom: '15px' }}>How It Works</h5>
                  <p className="msl-text-body" style={{ fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                    Our hardware collects granular data down to the panel level. Intelligent SCADA systems process this data alongside ambient light intensity and temperature, creating an automated ticketing system to dispatch technicians directly to the source of the fault.
                  </p>
                </div>

                <div className="col-lg-6">
                  <h3 className="msl-navy" style={{ fontSize: '28px', fontWeight: '800', marginBottom: '30px' }}>
                    What You Get
                  </h3>
                  <div className="row g-4">
                    <div className="col-sm-6">
                      <div className="ai-feature-card">
                        <i className="bx bx-grid-alt" style={{ fontSize: '36px', color: '#c0001a', marginBottom: '15px', display: 'block' }}></i>
                        <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '16px', marginBottom: '10px' }}>Panel & String Level</h5>
                        <p className="msl-text-body" style={{ fontSize: '14px', margin: 0, lineHeight: '1.5', flexGrow: 1 }}>Deep visibility. We don't just tell you a string is down; we show you which panel.</p>
                        <div><span className="ai-tag"><i className="bx bx-check-circle" style={{ marginRight: '4px' }}></i> Precision</span></div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="ai-feature-card">
                        <i className="bx bx-receipt" style={{ fontSize: '36px', color: '#c0001a', marginBottom: '15px', display: 'block' }}></i>
                        <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '16px', marginBottom: '10px' }}>Automated Ticketing</h5>
                        <p className="msl-text-body" style={{ fontSize: '14px', margin: 0, lineHeight: '1.5', flexGrow: 1 }}>Faults automatically generate tickets for plant technicians, minimizing downtime.</p>
                        <div><span className="ai-tag"><i className="bx bx-check-circle" style={{ marginRight: '4px' }}></i> Auto-Dispatch</span></div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="ai-feature-card">
                        <i className="bx bx-line-chart" style={{ fontSize: '36px', color: '#c0001a', marginBottom: '15px', display: 'block' }}></i>
                        <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '16px', marginBottom: '10px' }}>Advanced Analytics</h5>
                        <p className="msl-text-body" style={{ fontSize: '14px', margin: 0, lineHeight: '1.5', flexGrow: 1 }}>Data correlated with live light intensity and temperature variations.</p>
                        <div><span className="ai-tag"><i className="bx bx-check-circle" style={{ marginRight: '4px' }}></i> Smart Data</span></div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="ai-feature-card">
                        <i className="bx bx-wallet" style={{ fontSize: '36px', color: '#c0001a', marginBottom: '15px', display: 'block' }}></i>
                        <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '16px', marginBottom: '10px' }}>Cost Analysis</h5>
                        <p className="msl-text-body" style={{ fontSize: '14px', margin: 0, lineHeight: '1.5', flexGrow: 1 }}>Dedicated admin and management views breaking down cost impacts per day.</p>
                        <div><span className="ai-tag"><i className="bx bx-check-circle" style={{ marginRight: '4px' }}></i> ROI Focused</span></div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <hr style={{ borderColor: '#e2e8f0', margin: '30px 0' }} />

              <div className="row align-items-center">
                <div className="col-lg-8 mb-3 mb-lg-0">
                  <h6 style={{ color: '#1a2a4a', fontWeight: '700', fontSize: '14px', marginBottom: '10px', textTransform: 'uppercase' }}>Ideal For:</h6>
                  <p style={{ fontSize: '14px', color: '#4a5568', margin: 0 }}>Multi-MW Solar Farms • Commercial Solar Installations • Renewable Energy Portfolios</p>
                </div>
                <div className="col-lg-4 text-start text-lg-end">
                  <a href="#contact" style={{ display: 'inline-block', background: '#c0001a', color: '#fff', padding: '12px 24px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none', fontSize: '14px' }}>Optimize Your Grid →</a>
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
              <h3 style={{ color: '#ffffff', fontSize: '36px', fontWeight: '800', marginBottom: '20px', textTransform: 'none' }}>Maximize Your Renewable Output</h3>
              <p style={{ color: '#cbd5e1', maxWidth: '650px', margin: '0 auto 40px', fontSize: '18px', lineHeight: '1.6' }}>
                Deploy intelligent monitoring solutions that protect your investments.
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

export default RenewableEnergy;
