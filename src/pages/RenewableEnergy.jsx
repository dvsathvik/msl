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
            transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          }
          .ai-feature-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 35px rgba(0,0,0,0.08);
            border-color: #c0001a;
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
          
          .solar-image-wrapper {
            position: relative;
            border-radius: 24px;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            border: 1px solid rgba(0,0,0,0.05);
          }
          .solar-image-wrapper img {
            width: 100%;
            height: auto;
            display: block;
            transition: transform 0.5s ease;
          }
          .solar-image-wrapper:hover img {
            transform: scale(1.05);
          }
          .solar-overlay-card {
            position: absolute;
            bottom: -20px;
            right: 20px;
            background: #fff;
            padding: 20px;
            border-radius: 16px;
            box-shadow: 0 15px 35px rgba(0,0,0,0.1);
            border-left: 4px solid #c0001a;
            max-width: 250px;
            z-index: 2;
          }
          
          .msl-btn-hover-lift:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(192,0,26,0.4);
            border-color: #fff !important;
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
          {/* Slide 1 - Smart Solar */}
          <SwiperSlide>
            <div className="slider-redesign">
              <div className="slider-wrap">
                <div className="stage">
                  <div className="card">
                    <div className="card-grid">
                      <div className="text-col">
                        <span className="tag">ENERGY &bull; EFFICIENCY</span>
                        <h1>Smart Solar<br/><span>Energy Systems</span></h1>
                        <p className="subtext">Maximize ROI with Panel-Level Intelligence.</p>
                        <div className="cap-grid">
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-sun"></i></span><span className="cap-label">Panel Analysis</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-error-circle"></i></span><span className="cap-label">Fault Ticketing</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-broadcast"></i></span><span className="cap-label">SCADA</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-line-chart"></i></span><span className="cap-label">Efficiency</span></div>
                        </div>
                        <div className="cta-row">
                          <a href="#solar" onClick={(e) => { e.preventDefault(); solarRef.current?.scrollIntoView({ behavior: 'smooth' }); }} className="btn btn-primary">Explore Solution <i className="bx bx-right-arrow-alt"></i></a>
                        </div>
                      </div>
                      <div className="image-col">
                        <div className="image-panel">
                          <img src="/assets/img/renewable_energy/ren_solar.png" alt="Smart Solar Energy" />
                        </div>
                        <div className="spec-chip">
                          <div className="spec-label">Key Differentiator</div>
                          <div className="spec-value">Protects a ~3.5-Year ROI Window</div>
                        </div>
                      </div>
                    </div>
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
        <section id="solar" ref={solarRef} style={{ background: '#f8fafc', paddingBottom: '40px' }}>
          
          <div className="caution-stripe msl-bg-navy" style={{ padding: '40px 0', borderBottom: '4px solid #c0001a', marginBottom: '20px' }}>
            <div className="container text-center position-relative" style={{ zIndex: 1 }}>
              <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '30px', marginBottom: '15px' }}>
                Renewable Energy Solutions
              </span>
              <h2 style={{ color: '#fff', fontSize: '36px', fontWeight: '800', marginBottom: '15px' }}>
                Smart Solar Energy Systems
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '18px', maxWidth: '800px', margin: '0 auto', fontWeight: '300' }}>
                Intelligent SCADA solutions providing panel-level fault analysis for multi-MW scale solar plants to stop power leakage and accelerate your ROI.
              </p>
            </div>
          </div>

          <div className="container" data-aos="fade-up">
            
            {/* SECTION 1: The Problem */}
            <div className="row g-5 align-items-center mb-5" style={{ padding: '20px 0' }}>
              <div className="col-lg-6 order-2 order-lg-1">
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(192, 0, 26, 0.1)', color: '#c0001a', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '20px' }}>
                  <i className="bx bx-error-alt"></i> THE CHALLENGE
                </div>
                <h3 className="msl-navy" style={{ fontSize: '32px', fontWeight: '800', marginBottom: '20px' }}>
                  The Hidden Losses in Solar ROI
                </h3>
                <p className="msl-text-body" style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '20px' }}>
                  Many solar plants—ranging from KW to multi-MW scale—expect an ROI in about 3.5 years. However, due to significant power generation losses and improper analysis, profits are often lower and slower than projected.
                </p>
                <p className="msl-text-body" style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '30px' }}>
                  This problem persists even with most traditional SCADA systems because they rely on <strong>string-level monitoring</strong>, which fails to identify precise issues, resulting in delayed returns and frustrated plant owners.
                </p>
                
                <div style={{ background: '#fff', borderLeft: '4px solid #c0001a', padding: '25px', borderRadius: '0 12px 12px 0', boxShadow: '0 5px 20px rgba(0,0,0,0.03)' }}>
                  <h6 style={{ color: '#1a2a4a', fontWeight: '800', fontSize: '16px', marginBottom: '15px' }}>Common Reasons for Power Leakage:</h6>
                  <ul style={{ paddingLeft: '20px', color: '#4a5568', fontSize: '15px', lineHeight: '1.8', margin: 0 }}>
                    <li>A single faulty panel reduces output of the entire series</li>
                    <li>Loose contact of MC4 cables due to heavy winds</li>
                    <li>Shaded portions of panels stopping power generation</li>
                    <li>Bird droppings and physical damage</li>
                    <li>Delay in resolving issues due to lack of quick fault identification</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2">
                <div className="solar-image-wrapper">
                  <img src="/assets/img/renewable_energy/solar_problem.png" alt="Solar Farm Issue Tracking" />
                  <div className="solar-overlay-card d-none d-md-block">
                    <h6 style={{ color: '#c0001a', fontSize: '14px', fontWeight: '800', margin: '0 0 5px 0' }}>ROI DELAYED</h6>
                    <p style={{ margin: 0, fontSize: '12px', color: '#4a5568', fontWeight: '600' }}>Traditional string-level monitoring misses critical panel faults.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 2: The Solution */}
            <div className="row g-5 align-items-center mb-4" style={{ padding: '30px 0', borderTop: '1px solid #e2e8f0' }}>
              <div className="col-lg-5">
                <div className="solar-image-wrapper">
                  <img src="/assets/img/renewable_energy/solar_scada.png" alt="Smart SCADA Dashboard" />
                  <div className="solar-overlay-card d-none d-md-block" style={{ right: 'auto', left: '20px', borderLeft: 'none', borderRight: '4px solid #1a2a4a' }}>
                    <h6 style={{ color: '#1a2a4a', fontSize: '14px', fontWeight: '800', margin: '0 0 5px 0' }}>PANEL-LEVEL TRACKING</h6>
                    <p style={{ margin: 0, fontSize: '12px', color: '#4a5568', fontWeight: '600' }}>Pinpoint exact failures instantly.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(26, 42, 74, 0.1)', color: '#1a2a4a', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '20px' }}>
                  <i className="bx bx-bulb"></i> THE SOLUTION
                </div>
                <h3 className="msl-navy" style={{ fontSize: '32px', fontWeight: '800', marginBottom: '20px' }}>
                  Intelligent SCADA & Analytics
                </h3>
                <p className="msl-text-body" style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '30px' }}>
                  Our Smart Solar Energy System provides unparalleled visibility into your plant's operations. By combining hardware and advanced software, we move beyond string-level data to analyze the health of every individual panel.
                </p>
                <div className="d-flex gap-3 mb-4">
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(192, 0, 26, 0.1)', color: '#c0001a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', flexShrink: 0 }}>
                    <i className="bx bx-radar"></i>
                  </div>
                  <div>
                    <h5 style={{ color: '#1a2a4a', fontSize: '16px', fontWeight: '800', marginBottom: '5px' }}>Granular Data Analysis</h5>
                    <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>Data analysis is dynamically correlated with live light intensity and temperature readings.</p>
                  </div>
                </div>
                <div className="d-flex gap-3">
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(26, 42, 74, 0.1)', color: '#1a2a4a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', flexShrink: 0 }}>
                    <i className="bx bx-wrench"></i>
                  </div>
                  <div>
                    <h5 style={{ color: '#1a2a4a', fontSize: '16px', fontWeight: '800', marginBottom: '5px' }}>Instant Ticketing for Technicians</h5>
                    <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>Automatically dispatch plant technicians directly to the specific faulty panel, minimizing downtime.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 3: Key Benefits */}
            <div style={{ background: '#fff', borderRadius: '30px', padding: '60px', boxShadow: '0 15px 50px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0', marginBottom: '20px' }}>
              <div className="text-center mb-5">
                <h3 className="msl-navy" style={{ fontSize: '28px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px' }}>
                  Top Features of Our Solution
                </h3>
                <div style={{ width: '60px', height: '4px', background: '#c0001a', margin: '20px auto 0' }}></div>
              </div>
              
              <div className="row g-4">
                {[
                  { icon: 'bx-line-chart', title: 'Maximize Energy Generation', desc: 'Reduce hidden generation losses through continuous monitoring and early fault detection.' },
                  { icon: 'bx-trending-up', title: 'Improve ROI', desc: 'Increase annual energy production and shorten return-on-investment timelines.' },
                  { icon: 'bx-wallet', title: 'Reduce Maintenance Costs', desc: 'Minimize manual inspections with automated fault localization.' },
                  { icon: 'bx-wrench', title: 'Faster Fault Resolution', desc: 'Identify the exact source of issues for quicker maintenance.' },
                  { icon: 'bx-sun', title: 'Increase Plant Availability', desc: 'Keep the solar plant operating at optimal efficiency with proactive maintenance.' },
                  { icon: 'bx-buildings', title: 'Better Asset Management', desc: 'Monitor the health and performance of every critical solar asset.' },
                  { icon: 'bx-time', title: 'Minimize Downtime', desc: 'Reduce unplanned outages through predictive maintenance and intelligent alerts.' },
                  { icon: 'bx-network-chart', title: 'Scalable Monitoring', desc: 'Support solar installations ranging from kilowatt rooftop systems to multi-megawatt utility-scale plants.' }
                ].map((cap, idx) => (
                  <div className="col-lg-3 col-md-6" key={idx}>
                    <div className="ai-feature-card" style={{ padding: '25px 20px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                      <div style={{ width: '48px', height: '48px', minWidth: '48px', borderRadius: '12px', background: 'rgba(192,0,26,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
                        <i className={`bx ${cap.icon}`} style={{ color: '#c0001a', fontSize: '24px' }}></i>
                      </div>
                      <h6 style={{ color: '#1a2a4a', fontSize: '16px', fontWeight: '700', marginBottom: '8px' }}>{cap.title}</h6>
                      <p style={{ color: '#4a5568', fontSize: '13px', margin: 0, lineHeight: '1.5' }}>{cap.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            CTA SECTION & WHY CHOOSE US
        ========================================= */}
        <section id="contact" style={{ padding: '40px 0 80px 0', background: '#f8fafc' }}>
          <div className="container" data-aos="fade-up">
            <div className="row g-0 align-items-stretch" style={{ background: '#1a2a4a', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(26,42,74,0.15)' }}>
              
              {/* Left Side: Why Choose Us */}
              <div className="col-lg-6" style={{ padding: '50px 40px', background: 'rgba(255,255,255,0.03)' }}>
                <h3 style={{ color: '#ffffff', fontSize: '28px', fontWeight: '800', marginBottom: '35px' }}>Why Choose Our Solution</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  {[
                    'Panel-Level Fault Detection',
                    'AI-Powered Predictive Analytics',
                    'Existing SCADA Integration',
                    'Faster Fault Localization',
                    'Intelligent Alerting System',
                    'Multi-Plant Monitoring',
                    'Improved Operational Efficiency',
                    'Enhanced Return on Investment',
                    'Scalable & Secure Architecture'
                  ].map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <i className="bx bx-check-circle" style={{ color: '#c0001a', fontSize: '20px', marginTop: '1px' }}></i>
                      <span style={{ color: '#cbd5e1', fontSize: '14px', fontWeight: '600', lineHeight: '1.4' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side: CTA */}
              <div className="col-lg-6" style={{ padding: '60px 50px', textAlign: 'center', background: '#c0001a', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 style={{ color: '#ffffff', fontSize: '32px', fontWeight: '800', marginBottom: '15px', textTransform: 'none' }}>Ready to Maximize Output?</h3>
                <p style={{ color: 'rgba(255,255,255,0.9)', margin: '0 auto 35px', fontSize: '16px', lineHeight: '1.6' }}>
                  Deploy intelligent monitoring solutions that protect your investments and accelerate your returns.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
                  <a href="#contact" className="msl-btn-hover-lift" style={{ background: '#fff', color: '#c0001a', padding: '15px 35px', borderRadius: '30px', fontWeight: '800', fontSize: '15px', textDecoration: 'none', transition: 'all 0.3s ease', display: 'inline-block' }}>
                    Talk to an Expert
                  </a>
                  <a href="#demo" className="msl-btn-hover-lift" style={{ background: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.5)', padding: '13px 35px', borderRadius: '30px', fontWeight: '800', fontSize: '15px', textDecoration: 'none', transition: 'all 0.3s ease', display: 'inline-block' }}>
                    Request Demo
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default RenewableEnergy;

