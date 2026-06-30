import PageBreadcrumb from '../components/PageBreadcrumb';
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
      {/* Breadcrumb */}
      <PageBreadcrumb productName="Manufacturing Automations" />

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
          {/* Slide 1 - IoT */}
          <SwiperSlide>
            <div className="slider-redesign">
              <div className="slider-wrap">
                <div className="stage">
                  <div className="card">
                    <div className="card-grid">
                      <div className="text-col">
                        <span className="tag">MANUFACTURING &bull; IOT</span>
                        <h1>Industrial IoT<br/><span>Automation</span></h1>
                        <p className="subtext">Intelligent Connectivity, Real-time Monitoring, and Data-driven Automation.</p>
                        <div className="cap-grid">
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-wifi"></i></span><span className="cap-label">Connectivity</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-cctv"></i></span><span className="cap-label">Monitoring</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-cog"></i></span><span className="cap-label">Automation</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-data"></i></span><span className="cap-label">Data-Driven</span></div>
                        </div>
                        <div className="cta-row">
                          <a href="#iot" onClick={(e) => { e.preventDefault(); iotRef.current?.scrollIntoView({ behavior: 'smooth' }); }} className="btn btn-primary">Explore Platform <i className="bx bx-right-arrow-alt"></i></a>
                        </div>
                      </div>
                      <div className="image-col">
                        <div className="image-panel">
                          <img src="/assets/img/manufacturing_automations/mfg_iot.webp" alt="Industrial IoT" />
                        </div>
                        <div className="spec-chip">
                          <div className="spec-label">Key Differentiator</div>
                          <div className="spec-value">Real-Time, Floor-Wide Visibility</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 - Mining */}
          <SwiperSlide>
            <div className="slider-redesign">
              <div className="slider-wrap">
                <div className="stage">
                  <div className="card">
                    <div className="card-grid">
                      <div className="text-col">
                        <span className="tag">MINING &bull; TELEMATICS</span>
                        <h1>SafeLoad<br/><span>Telematics</span></h1>
                        <p className="subtext">Comprehensive fleet tracking, geo-fencing, and driver behavior analysis.</p>
                        <div className="cap-grid">
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-map-alt"></i></span><span className="cap-label">GPS Tracking</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-shield-quarter"></i></span><span className="cap-label">Geo-Fencing</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-car"></i></span><span className="cap-label">Driver Safety</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-bar-chart"></i></span><span className="cap-label">Analytics</span></div>
                        </div>
                        <div className="cta-row">
                          <a href="#mining" onClick={(e) => { e.preventDefault(); miningRef.current?.scrollIntoView({ behavior: 'smooth' }); }} className="btn btn-primary">Explore Solution <i className="bx bx-right-arrow-alt"></i></a>
                        </div>
                      </div>
                      <div className="image-col">
                        <div className="image-panel">
                          <img src="/assets/img/manufacturing_automations/mfg_safeload.webp" alt="SafeLoad Telematics" />
                        </div>
                        <div className="spec-chip">
                          <div className="spec-label">Key Differentiator</div>
                          <div className="spec-value">Built to Stop Coal Theft</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 - Lifts */}
          <SwiperSlide>
            <div className="slider-redesign">
              <div className="slider-wrap">
                <div className="stage">
                  <div className="card">
                    <div className="card-grid">
                      <div className="text-col">
                        <span className="tag">ESCALATOR &bull; LIFTS</span>
                        <h1>Escalator &amp; Lift<br/><span>Diagnostics</span></h1>
                        <p className="subtext">24/7 predictive maintenance and fault detection for critical vertical transport.</p>
                        <div className="cap-grid">
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-time"></i></span><span className="cap-label">24/7 Monitoring</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-bell"></i></span><span className="cap-label">Instant Alerts</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-line-chart"></i></span><span className="cap-label">Predictive</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-check-shield"></i></span><span className="cap-label">Safety First</span></div>
                        </div>
                        <div className="cta-row">
                          <a href="#lift" onClick={(e) => { e.preventDefault(); liftRef.current?.scrollIntoView({ behavior: 'smooth' }); }} className="btn btn-primary">Explore Diagnostics <i className="bx bx-right-arrow-alt"></i></a>
                        </div>
                      </div>
                      <div className="image-col">
                        <div className="image-panel">
                          <img src="/assets/img/manufacturing_automations/mfg_diagnostics.webp" alt="Lift Diagnostics" />
                        </div>
                        <div className="spec-chip">
                          <div className="spec-label">Key Differentiator</div>
                          <div className="spec-value">Detection to Resolution in Seconds</div>
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

      {/* Main Content Area */}
      <main id="main" className="msl-bg-gray">
        
        {/* Section 1: Industrial IoT */}
        <section id="iot" ref={iotRef} style={{ background: '#f8fafc', paddingBottom: '60px' }}>
          
          {/* PRODUCT 01 UNIFIED HEADER */}
          <div className="caution-stripe msl-bg-navy" style={{ padding: '60px 0', borderBottom: '4px solid #c0001a', marginBottom: '40px' }}>
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
            <div className="msl-product-wrapper">

          {/* BLOCK 2: MANUFACTURING OVERVIEW CARD REDESIGNED */}
          <div style={{ padding: '40px 60px 20px' }}>
            <div className="lift-card" style={{ background: '#fff', borderRadius: '24px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <div className="row g-0">
                {/* Left Column - Image */}
                <div className="col-lg-6" style={{ minHeight: '400px' }}>
                  <img src="/assets/img/manufacturing_automations/mfg-robot-arm.webp" alt="Industrial IoT Automation" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                
                {/* Right Column - Content */}
                <div className="col-lg-6 d-flex align-items-center">
                  <div style={{ padding: '50px 40px' }}>
                    <div style={{ marginBottom: '15px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                      <span style={{ display: 'inline-block', background: 'rgba(192,0,26,0.1)', color: '#c0001a', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '30px' }}>
                        <i className="bx bx-buildings"></i> MANUFACTURING
                      </span>
                      <span style={{ display: 'inline-block', background: 'rgba(192,0,26,0.1)', color: '#c0001a', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '30px' }}>
                        SMART FACTORY OPERATIONS
                      </span>
                    </div>
                    
                    <h3 style={{ color: '#1a2a4a', fontSize: '32px', fontWeight: '800', marginBottom: '20px', lineHeight: '1.2' }}>
                      Unleash the Power of <br/><span style={{ color: '#c0001a' }}>Smart Manufacturing</span>
                    </h3>
                    
                    <p className="msl-text-body" style={{ fontSize: '15px', lineHeight: '1.6', marginBottom: '25px' }}>
                      <strong>The Challenges we face:</strong> Outdated, siloed machinery leads to blind spots and costly downtime. Traditional assembly lines lack the connectivity needed to prevent operational inefficiencies.
                    </p>

                    <div style={{ background: '#1a2a4a', borderRadius: '16px', padding: '25px 30px', color: '#fff', boxShadow: '0 10px 25px rgba(26,42,74,0.1)', marginBottom: '25px' }}>
                      <h6 style={{ color: '#fff', fontWeight: '800', fontSize: '18px', marginBottom: '10px' }}>Our Intelligent Solution</h6>
                      <p style={{ color: '#cbd5e1', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                        Our Industrial IoT platform seamlessly bridges the physical-digital divide, turning legacy assembly lines into intelligent, data-driven ecosystems that communicate with your management systems in real-time.
                      </p>
                    </div>

                    <h6 style={{ color: '#1a2a4a', fontWeight: '800', fontSize: '16px', marginBottom: '15px' }}>What our solution can do:</h6>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                        <i className="bx bx-check-circle" style={{ color: '#c0001a', fontSize: '22px' }}></i> <span style={{ color: '#4a5568', fontSize: '15px', fontWeight: '600' }}>Eliminate Unplanned Downtime</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                        <i className="bx bx-check-circle" style={{ color: '#c0001a', fontSize: '22px' }}></i> <span style={{ color: '#4a5568', fontSize: '15px', fontWeight: '600' }}>Centralize Disparate Sensor Data</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <i className="bx bx-check-circle" style={{ color: '#c0001a', fontSize: '22px' }}></i> <span style={{ color: '#4a5568', fontSize: '15px', fontWeight: '600' }}>Scale Automation Seamlessly</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Capabilities */}
          <div style={{ padding: '0px 60px 40px' }}>
            <h3 className="msl-navy" style={{ fontSize: '22px', fontWeight: '800', marginBottom: '30px' }}>Key Capabilities</h3>
            <div className="row g-4">
              <div className="col-md-6 col-lg-3">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                  <i className="bx bxs-circle" style={{ fontSize: '18px', color: '#c0001a' }}></i>
                  <span style={{ fontSize: '14px', color: '#1a2a4a', fontWeight: '700' }}>Machine Monitoring</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                  <i className="bx bxs-circle" style={{ fontSize: '18px', color: '#c0001a' }}></i>
                  <span style={{ fontSize: '14px', color: '#1a2a4a', fontWeight: '700' }}>Production Tracking</span>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                  <i className="bx bxs-circle" style={{ fontSize: '18px', color: '#c0001a' }}></i>
                  <span style={{ fontSize: '14px', color: '#1a2a4a', fontWeight: '700' }}>OEE Improvement</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="bx bxs-circle" style={{ fontSize: '18px', color: '#c0001a' }}></i>
                  <span style={{ fontSize: '14px', color: '#1a2a4a', fontWeight: '700' }}>Quality Assurance</span>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                  <i className="bx bxs-circle" style={{ fontSize: '18px', color: '#c0001a' }}></i>
                  <span style={{ fontSize: '14px', color: '#1a2a4a', fontWeight: '700' }}>Predictive Maintenance</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                  <i className="bx bxs-circle" style={{ fontSize: '18px', color: '#c0001a' }}></i>
                  <span style={{ fontSize: '14px', color: '#1a2a4a', fontWeight: '700' }}>Process Optimization</span>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="bx bxs-circle" style={{ fontSize: '18px', color: '#c0001a' }}></i>
                  <span style={{ fontSize: '14px', color: '#1a2a4a', fontWeight: '700' }}>Energy Monitoring</span>
                </div>
              </div>
            </div>
          </div>

          {/* BLOCK 3: IIoT SOLUTION ARCHITECTURE */}
          <div style={{ padding: '40px 60px 20px' }}>
            <div className="text-center mb-5">
              <div style={{ display: 'inline-block', background: '#1a2a4a', color: '#fff', padding: '6px 20px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase' }}>
                IIoT SOLUTION ARCHITECTURE
              </div>
            </div>
            
            <div className="row g-4 align-items-stretch text-center justify-content-center position-relative">
              {[
                {
                  header: 'FIELD DEVICES & SENSORS',
                  icon: 'bx-devices',
                  bullets: ['Temperature & Pressure', 'Vibration & Humidity', 'Flow, Energy & Level'],
                  arrow: 'single'
                },
                {
                  header: 'EDGE INFRASTRUCTURE',
                  icon: 'bx-network-chart',
                  bullets: ['Edge Processing (Nodes)', 'RF Range Extension', 'Gateway Protocol Sync'],
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
                <div className="col-lg-3 col-md-6 col-sm-12 position-relative" key={idx}>
                  <div className="lift-card" style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden', height: '100%', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
                    <div style={{ background: '#1a2a4a', color: '#fff', fontSize: '12px', fontWeight: '700', padding: '12px 10px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      {node.header}
                    </div>
                    <div style={{ padding: '30px 20px' }}>
                      <i className={`bx ${node.icon}`} style={{ fontSize: '40px', color: '#c0001a', marginBottom: '20px' }}></i>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'left' }}>
                        {node.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} style={{ fontSize: '13px', color: '#4a5568', marginBottom: '10px', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                            <span style={{ color: '#c0001a', fontSize: '16px' }}>•</span> {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* SVG Arrows visible only on large screens */}
                  {node.arrow !== 'none' && (
                    <div className="d-none d-lg-block" style={{ position: 'absolute', right: '-12px', top: '50%', transform: 'translateY(-50%)', zIndex: 10 }}>
                      <svg width="24" height="20" viewBox="0 0 24 20">
                        <line x1="0" y1="10" x2="20" y2="10" stroke="#c0001a" strokeWidth="2" strokeDasharray="3 3" />
                        <polyline points="15,5 21,10 15,15" fill="none" stroke="#c0001a" strokeWidth="2" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* BLOCK 4: KEY BENEFITS + ONE PLATFORM STRIP */}
          <div style={{ padding: '40px 60px 0px' }}>
            
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

          {/* Call to Action STRIP - Stuck to bottom */}
          <div style={{ background: '#1a2a4a', padding: '40px 60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', borderTop: '4px solid #c0001a', marginTop: '40px' }}>
            <div>
              <h4 style={{ fontWeight: '800', fontSize: '24px', color: '#fff', marginBottom: '8px' }}>Transform Your Assembly Line Today</h4>
              <p style={{ fontSize: '15px', color: '#cbd5e1', margin: 0 }}>Deploy intelligent IoT to eliminate downtime, centralize sensor data, and maximize your production output.</p>
            </div>
            <a href="#contact" className="btn" style={{ background: '#c0001a', color: '#fff', padding: '12px 28px', borderRadius: '8px', fontWeight: '700', fontSize: '15px', textDecoration: 'none', transition: 'background 0.3s ease', display: 'inline-flex', alignItems: 'center', gap: '8px', whiteSpace: 'nowrap' }} onMouseOver={e => e.currentTarget.style.background = '#a00016'} onMouseOut={e => e.currentTarget.style.background = '#c0001a'}>
              Request a Demo
            </a>
          </div>
            </div>
          </div>
        </section>

        {/* Section 2: Safety Mining */}
        <section id="mining" ref={miningRef} style={{ background: '#f8fafc', paddingBottom: '60px' }}>
          
          {/* PRODUCT 02 UNIFIED HEADER */}
          <div className="caution-stripe msl-bg-navy" style={{ padding: '60px 0', borderBottom: '4px solid #c0001a', marginBottom: '40px' }}>
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
        <section id="lift" ref={liftRef} style={{ background: '#f8fafc', paddingBottom: '60px' }}>
          
          {/* PRODUCT 03 UNIFIED HEADER */}
          <div className="caution-stripe msl-bg-navy" style={{ padding: '60px 0', borderBottom: '4px solid #c0001a', marginBottom: '40px' }}>
            <div className="container text-center position-relative" style={{ zIndex: 1 }}>
              <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '30px', marginBottom: '20px' }}>
                Product 03
              </span>
              <h2 style={{ color: '#fff', fontSize: '36px', fontWeight: '800', marginBottom: '15px' }}>
                Multi Escalators & Lifts Failure Identification
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '18px', maxWidth: '800px', margin: '0 auto', fontWeight: '300' }}>
                <strong style={{color: '#fff', fontWeight: '600'}}>Never Miss a Fault. Never Stop Operations.</strong><br/>
                Real-Time Escalator & Lift Failure Detection, Remotely Monitored.
              </p>
            </div>
          </div>

          <div className="container" data-aos="fade-up">
            <div className="msl-product-wrapper" style={{ padding: 0 }}>

              {/* HERO INTRO FOR ESCALATOR IoT */}
              <div style={{ padding: '40px 60px 20px' }}>
                <div className="lift-card" style={{ background: '#fff', borderRadius: '24px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                  <div className="row g-0 flex-lg-row-reverse">
                    {/* Image Column */}
                    <div className="col-lg-6" style={{ background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '400px', padding: '40px' }}>
                      <img src="/assets/img/manufacturing_automations/esculator.webp" alt="Escalator Failure Identification" style={{ width: '80%', height: 'auto', objectFit: 'contain', borderRadius: '24px' }} />
                    </div>
                    
                    {/* Right Column - Content */}
                    <div className="col-lg-6 d-flex align-items-center">
                      <div style={{ padding: '50px 40px' }}>
                        <div style={{ marginBottom: '15px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                          <span style={{ display: 'inline-block', background: 'rgba(192,0,26,0.1)', color: '#c0001a', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '30px' }}>
                            <i className="bx bx-buildings"></i> MANUFACTURING
                          </span>
                          <span style={{ display: 'inline-block', background: 'rgba(192,0,26,0.1)', color: '#c0001a', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '30px' }}>
                            REAL-TIME FAULT MONITORING
                          </span>
                        </div>
                        
                        <h3 style={{ color: '#1a2a4a', fontSize: '32px', fontWeight: '800', marginBottom: '20px', lineHeight: '1.2' }}>
                          Seamless Escalator & <br/><span style={{ color: '#c0001a' }}>Lift Diagnostics</span>
                        </h3>

                        <p className="msl-text-body" style={{ fontSize: '15px', lineHeight: '1.6', marginBottom: '15px' }}>
                          Modern infrastructure relies on the continuous operation of escalators and lifts. Ensuring seamless mobility in high-traffic environments like malls, airports, and corporate offices is critical to passenger safety and satisfaction.
                        </p>
                        
                        <div style={{ marginBottom: '25px' }}>
                          <strong style={{ fontSize: '15px', color: '#1a2a4a', display: 'block', marginBottom: '10px' }}>The Challenges we face:</strong>
                          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                              <i className="bx bx-x" style={{ color: '#c0001a', fontSize: '20px', marginTop: '1px' }}></i>
                              <span className="msl-text-body" style={{ fontSize: '14px', lineHeight: '1.5' }}>Unnoticed faults lead to sudden breakdowns and prolonged downtime.</span>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                              <i className="bx bx-x" style={{ color: '#c0001a', fontSize: '20px', marginTop: '1px' }}></i>
                              <span className="msl-text-body" style={{ fontSize: '14px', lineHeight: '1.5' }}>Manual floor-by-floor inspections are highly inefficient and costly.</span>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                              <i className="bx bx-x" style={{ color: '#c0001a', fontSize: '20px', marginTop: '1px' }}></i>
                              <span className="msl-text-body" style={{ fontSize: '14px', lineHeight: '1.5' }}>Delayed emergency responses pose significant passenger safety risks.</span>
                            </li>
                          </ul>
                        </div>

                        <div style={{ background: '#1a2a4a', borderRadius: '16px', padding: '25px 30px', color: '#fff', boxShadow: '0 10px 25px rgba(26,42,74,0.1)' }}>
                          <h6 style={{ color: '#fff', fontWeight: '800', fontSize: '16px', marginBottom: '15px' }}>What our solution can do:</h6>
                          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                              <i className="bx bx-check-circle" style={{ color: '#ef4444', fontSize: '22px' }}></i> <span style={{ color: '#cbd5e1', fontSize: '15px', fontWeight: '500' }}>Centralized Wireless Fault Tracking</span>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                              <i className="bx bx-check-circle" style={{ color: '#ef4444', fontSize: '22px' }}></i> <span style={{ color: '#cbd5e1', fontSize: '15px', fontWeight: '500' }}>Instant LED & Buzzer Notifications</span>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                              <i className="bx bx-check-circle" style={{ color: '#ef4444', fontSize: '22px' }}></i> <span style={{ color: '#cbd5e1', fontSize: '15px', fontWeight: '500' }}>Streamlined Rectification Workflow</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ padding: '0px 60px 40px' }}>
                <div className="text-center mb-5 mt-5">
                  <h3 style={{ color: '#1a2a4a', fontSize: '28px', fontWeight: '800' }}>System Workflow</h3>
                  <p style={{ color: '#64748b', fontSize: '16px' }}>How our wireless diagnostics keep your infrastructure moving.</p>
                </div>

                <div className="row g-5 align-items-center">
                  {/* Left Column - How It Works */}
                  <div className="col-lg-6">
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#1a2a4a', color: '#fff', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '25px' }}>
                      <i className="bx bx-network-chart"></i> HOW IT WORKS
                    </div>
                    
                    <h3 className="msl-navy" style={{ fontSize: '28px', fontWeight: '800', marginBottom: '30px' }}>
                      From Detection to Resolution in Seconds
                    </h3>
                    
                    <div style={{ position: 'relative', paddingLeft: '30px' }}>
                      {/* Vertical Line */}
                      <div style={{ position: 'absolute', left: '11px', top: '10px', bottom: '20px', width: '2px', background: 'linear-gradient(to bottom, #c0001a, rgba(192,0,26,0.1))' }}></div>
                      
                      {/* Step 1 */}
                      <div style={{ position: 'relative', marginBottom: '30px' }}>
                        <div style={{ position: 'absolute', left: '-30px', top: '0', width: '24px', height: '24px', borderRadius: '50%', background: '#c0001a', border: '4px solid #fff', boxShadow: '0 0 0 2px rgba(192,0,26,0.2)' }}></div>
                        <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '18px', marginBottom: '8px' }}>1. Detect</h5>
                        <p className="msl-text-body" style={{ fontSize: '15px', lineHeight: '1.6', margin: 0 }}>
                          Sensors at each escalator/lift unit continuously monitor for faults and feed data wirelessly to the IoT Cloud.
                        </p>
                      </div>
                      
                      {/* Step 2 */}
                      <div style={{ position: 'relative', marginBottom: '30px' }}>
                        <div style={{ position: 'absolute', left: '-30px', top: '0', width: '24px', height: '24px', borderRadius: '50%', background: '#c0001a', border: '4px solid #fff', boxShadow: '0 0 0 2px rgba(192,0,26,0.2)' }}></div>
                        <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '18px', marginBottom: '8px' }}>2. Alert</h5>
                        <p className="msl-text-body" style={{ fontSize: '15px', lineHeight: '1.6', margin: 0 }}>
                          Your control room hardware instantly displays which unit has faulted via LED indicators and triggers an alarm buzzer.
                        </p>
                      </div>
                      
                      {/* Step 3 */}
                      <div style={{ position: 'relative' }}>
                        <div style={{ position: 'absolute', left: '-30px', top: '0', width: '24px', height: '24px', borderRadius: '50%', background: '#c0001a', border: '4px solid #fff', boxShadow: '0 0 0 2px rgba(192,0,26,0.2)' }}></div>
                        <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '18px', marginBottom: '8px' }}>3. Resolve</h5>
                        <p className="msl-text-body" style={{ fontSize: '15px', lineHeight: '1.6', margin: 0 }}>
                          Maintenance team presses a single button to initiate rectification — and the system logs it, keeping records clean.
                        </p>
                      </div>
                    </div>
                    
                    <div style={{ marginTop: '40px', background: '#f8fafc', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                      <h6 style={{ color: '#1a2a4a', fontWeight: '700', fontSize: '14px', marginBottom: '15px', textTransform: 'uppercase' }}>Trusted By Facilities:</h6>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                        {['Malls & Retail', 'Airports & Metros', 'Corporate Offices', 'Hospitals', 'Hotels'].map((facility, idx) => (
                          <span key={idx} style={{ fontSize: '13px', color: '#4a5568', background: '#fff', padding: '5px 12px', borderRadius: '6px', border: '1px solid #cbd5e1' }}>
                            {facility}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Key Benefits Grid */}
                  <div className="col-lg-6">
                    <h3 className="msl-navy" style={{ fontSize: '28px', fontWeight: '800', marginBottom: '30px' }}>
                      Key Benefits
                    </h3>
                    <div className="row g-4">
                      <div className="col-sm-6">
                        <div className="lift-card" style={{ background: '#fff', padding: '30px 25px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                          <i className="bx bx-down-arrow-circle" style={{ fontSize: '36px', color: '#c0001a', marginBottom: '15px', display: 'block' }}></i>
                          <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '16px', marginBottom: '10px' }}>Reduce Downtime</h5>
                          <p className="msl-text-body" style={{ fontSize: '14px', margin: 0, lineHeight: '1.5', flexGrow: 1 }}>Faults are flagged instantly, so repairs begin before passengers are affected.</p>
                          <div style={{ marginTop: '20px' }}>
                            <span style={{ background: 'rgba(192,0,26,0.1)', color: '#c0001a', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '700', display: 'inline-block' }}>
                              <i className="bx bx-check-circle" style={{ marginRight: '4px' }}></i> IoT-Powered
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="lift-card" style={{ background: '#fff', padding: '30px 25px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                          <i className="bx bx-buildings" style={{ fontSize: '36px', color: '#c0001a', marginBottom: '15px', display: 'block' }}></i>
                          <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '16px', marginBottom: '10px' }}>Centralized Control</h5>
                          <p className="msl-text-body" style={{ fontSize: '14px', margin: 0, lineHeight: '1.5', flexGrow: 1 }}>Monitor every unit from a single control room, no manual floor checks needed.</p>
                          <div style={{ marginTop: '20px' }}>
                            <span style={{ background: 'rgba(192,0,26,0.1)', color: '#c0001a', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '700', display: 'inline-block' }}>
                              <i className="bx bx-check-circle" style={{ marginRight: '4px' }}></i> Wireless Architecture
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="lift-card" style={{ background: '#fff', padding: '30px 25px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                          <i className="bx bx-run" style={{ fontSize: '36px', color: '#c0001a', marginBottom: '15px', display: 'block' }}></i>
                          <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '16px', marginBottom: '10px' }}>Faster Response</h5>
                          <p className="msl-text-body" style={{ fontSize: '14px', margin: 0, lineHeight: '1.5', flexGrow: 1 }}>Service teams are dispatched with exact fault details already in hand.</p>
                          <div style={{ marginTop: '20px' }}>
                            <span style={{ background: 'rgba(192,0,26,0.1)', color: '#c0001a', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '700', display: 'inline-block' }}>
                              <i className="bx bx-check-circle" style={{ marginRight: '4px' }}></i> Real-Time Alerts
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="lift-card" style={{ background: '#fff', padding: '30px 25px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                          <i className="bx bx-shield-plus" style={{ fontSize: '36px', color: '#c0001a', marginBottom: '15px', display: 'block' }}></i>
                          <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '16px', marginBottom: '10px' }}>Improved Safety</h5>
                          <p className="msl-text-body" style={{ fontSize: '14px', margin: 0, lineHeight: '1.5', flexGrow: 1 }}>Automated alarms ensure no fault is silently missed during any shift.</p>
                          <div style={{ marginTop: '20px' }}>
                            <span style={{ background: 'rgba(192,0,26,0.1)', color: '#c0001a', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '700', display: 'inline-block' }}>
                              <i className="bx bx-check-circle" style={{ marginRight: '4px' }}></i> Multi-Unit Support
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action STRIP - Stuck to bottom */}
              <div style={{ background: '#1a2a4a', padding: '40px 60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', borderTop: '4px solid #c0001a' }}>
                <div>
                  <h4 style={{ fontWeight: '800', fontSize: '24px', color: '#fff', marginBottom: '8px' }}>Ensure Minimal Passenger Disruption</h4>
                  <p style={{ fontSize: '15px', color: '#cbd5e1', margin: 0 }}>Implement wireless real-time escalator diagnostics to track and resolve faults instantly.</p>
                </div>
                <a href="#demo" className="btn" style={{ background: '#c0001a', color: '#fff', padding: '12px 28px', borderRadius: '8px', fontWeight: '700', fontSize: '15px', textDecoration: 'none', transition: 'background 0.3s ease', display: 'inline-flex', alignItems: 'center', gap: '8px', whiteSpace: 'nowrap' }} onMouseOver={e => e.currentTarget.style.background = '#a00016'} onMouseOut={e => e.currentTarget.style.background = '#c0001a'}>
                  Request a Diagnostics Demo
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* Dedicated CTA Section */}
        <section id="contact" style={{ padding: '60px 0', background: '#ffffff' }}>
          <div className="container" data-aos="fade-up">
            <div style={{ background: '#1a2a4a', padding: '80px 40px', borderRadius: '24px', textAlign: 'center' }}>
              <h3 style={{ color: '#ffffff', fontSize: '36px', fontWeight: '800', marginBottom: '20px', textTransform: 'none' }}>Ready to Accelerate Your Manufacturing?</h3>
              <p style={{ color: '#cbd5e1', maxWidth: '650px', margin: '0 auto 40px', fontSize: '18px', lineHeight: '1.6' }}>
                Implement intelligent automation, telematics, and predictive maintenance in your industrial environments today.
              </p>
              <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                <Link to="/contact" className="hero-btn primary-btn msl-btn-primary" style={{ padding: '16px 36px', fontSize: '16px' }}>Contact Our Experts</Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default Manufacturing;

