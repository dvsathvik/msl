import React, { useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const AiSolutions = () => {
  const { productId } = useParams();

  // Refs for scrolling
  const surveillanceRef = useRef(null);
  const trafficRef = useRef(null);
  const tenderRef = useRef(null);

  useEffect(() => {
    // Scroll to section if hash exists or productId matches
    if (productId === 'surveillance' && surveillanceRef.current) {
      surveillanceRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (productId === 'traffic' && trafficRef.current) {
      trafficRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (productId === 'tender' && tenderRef.current) {
      tenderRef.current.scrollIntoView({ behavior: 'smooth' });
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
            <span style={{ color: '#ffffff', fontWeight: '500' }}>AI Solutions</span>
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
          {/* Slide 1 - Surveillance */}
          <SwiperSlide className="hero-slide slide-7">
            <div className="container hero-content">
              <div className="hero-grid">
                <div className="hero-text">
                  <span className="hero-tag" style={{ color: '#1a2a4a', border: '1px solid #e2e8f0', background: '#f8fafc' }}>SECURITY • SURVEILLANCE</span>
                  <h1 className="msl-navy">High Security <br/><span className="msl-solid-highlight">Surveillance</span></h1>
                  <p className="msl-text-body">See Every Threat. Before It Becomes One.</p>
                  <div className="hero-mini-features">
                    <span>Person Detection</span>
                    <span>Instant Cross-Check</span>
                    <span>Early Alerts</span>
                    <span>Hardware Agnostic</span>
                  </div>
                  <div className="hero-buttons">
                    <a href="#surveillance" onClick={(e) => { e.preventDefault(); surveillanceRef.current?.scrollIntoView({ behavior: 'smooth' }); }} className="hero-btn primary-btn msl-btn-primary">Explore Solution</a>
                  </div>
                </div>
                <div className="hero-image-col">
                  <div className="hero-image-panel" style={{ background: '#0f172a' }}>
                    <img src="/assets/img/hero/AI-security-servillance.webp" alt="High Security Surveillance" style={{ opacity: 0.9 }} />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 - Traffic */}
          <SwiperSlide className="hero-slide slide-8">
            <div className="container hero-content">
              <div className="hero-grid">
                <div className="hero-text">
                  <span className="hero-tag" style={{ color: '#1a2a4a', border: '1px solid #e2e8f0', background: '#f8fafc' }}>SMART CITY • TRAFFIC</span>
                  <h1 className="msl-navy">High Traffic <br/><span className="msl-solid-highlight">Signaling</span></h1>
                  <p className="msl-text-body">Smarter Signals. Smoother Traffic. Safer Roads.</p>
                  <div className="hero-mini-features">
                    <span>Live Vehicle Counting</span>
                    <span>Deep-Learning Density</span>
                    <span>Wireless Comm.</span>
                    <span>Custom Hardware</span>
                  </div>
                  <div className="hero-buttons">
                    <a href="#traffic" onClick={(e) => { e.preventDefault(); trafficRef.current?.scrollIntoView({ behavior: 'smooth' }); }} className="hero-btn primary-btn msl-btn-primary">Explore System</a>
                  </div>
                </div>
                <div className="hero-image-col">
                  <div className="hero-image-panel" style={{ background: '#0f172a' }}>
                    <img src="/assets/img/hero/AI-traffic.webp" alt="High Traffic Signaling" style={{ opacity: 0.9 }} />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 - Tender */}
          <SwiperSlide className="hero-slide slide-9">
            <div className="container hero-content">
              <div className="hero-grid">
                <div className="hero-text">
                  <span className="hero-tag" style={{ color: '#1a2a4a', border: '1px solid #e2e8f0', background: '#f8fafc' }}>BUSINESS • TENDER</span>
                  <h1 className="msl-navy">Tender / Bidding <br/><span className="msl-solid-highlight">Automation</span></h1>
                  <p className="msl-text-body">Win More Tenders. Spend Less Time on Paperwork.</p>
                  <div className="hero-mini-features">
                    <span>Smart Uploads</span>
                    <span>Requirement Mapping</span>
                    <span>Human in Loop</span>
                    <span>On-Premise Deploy</span>
                  </div>
                  <div className="hero-buttons">
                    <a href="#tender" onClick={(e) => { e.preventDefault(); tenderRef.current?.scrollIntoView({ behavior: 'smooth' }); }} className="hero-btn primary-btn msl-btn-primary">Explore Automation</a>
                  </div>
                </div>
                <div className="hero-image-col">
                  <div className="hero-image-panel" style={{ background: '#0f172a' }}>
                    <img src="/assets/img/hero/ai-chip.webp" alt="Tender / Bidding Automation" style={{ opacity: 0.9 }} />
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
            PRODUCT 1: SURVEILLANCE
        ========================================= */}
        <section id="surveillance" ref={surveillanceRef} style={{ background: '#f8fafc', paddingBottom: '60px' }}>
          
          <div className="caution-stripe msl-bg-navy" style={{ padding: '60px 0', borderBottom: '4px solid #c0001a', marginBottom: '40px' }}>
            <div className="container text-center position-relative" style={{ zIndex: 1 }}>
              <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '30px', marginBottom: '20px' }}>
                Product 01
              </span>
              <h2 style={{ color: '#fff', fontSize: '36px', fontWeight: '800', marginBottom: '15px' }}>
                AI High Security Surveillance
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '18px', maxWidth: '800px', margin: '0 auto', fontWeight: '300' }}>
                <strong style={{color: '#fff', fontWeight: '600'}}>See Every Threat. Before It Becomes One.</strong><br/>
                AI-Powered Surveillance That Identifies Unauthorized Individuals in Real Time.
              </p>
            </div>
          </div>

          <div className="container" data-aos="fade-up">
            <div style={{ background: '#fff', borderRadius: '24px', padding: '40px', boxShadow: '0 10px 40px rgba(0,0,0,0.04)' }}>
              
              <div className="row g-5 align-items-center">
                
                {/* LEFT COLUMN: Intro & Flow */}
                <div className="col-lg-6">
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#1a2a4a', color: '#fff', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '25px' }}>
                    <i className="bx bx-cctv"></i> SURVEILLANCE
                  </div>
                  <h3 className="msl-navy" style={{ fontSize: '28px', fontWeight: '800', marginBottom: '20px' }}>
                    Smarter than standard cameras
                  </h3>
                  <p className="msl-text-body" style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '30px' }}>
                    Traditional CCTV cameras record — they don't think. Our AI High Security Surveillance system goes further, actively identifying unauthorized individuals the moment they enter a secured zone and alerting your team before any incident can escalate.
                  </p>
                  
                  <div style={{ background: '#fff', borderLeft: '4px solid #c0001a', padding: '20px', borderRadius: '0 8px 8px 0', boxShadow: '0 2px 15px rgba(0,0,0,0.03)', marginBottom: '30px' }}>
                    <h6 style={{ color: '#1a2a4a', fontWeight: '700', fontSize: '15px', marginBottom: '10px' }}>The Problem We Solve</h6>
                    <ul style={{ paddingLeft: '20px', color: '#4a5568', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                      <li>Standard cameras can't distinguish authorized personnel from intruders</li>
                      <li>Manual monitoring misses threats — especially across multiple zones</li>
                      <li>Delayed identification means delayed response, and that costs you</li>
                    </ul>
                  </div>

                  <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '18px', marginBottom: '15px' }}>How It Works</h5>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
                    {['Capture', 'Detect & Track', 'AI Recognition', 'Alert'].map((step, idx, arr) => (
                      <React.Fragment key={idx}>
                        <div style={{ background: '#f1f5f9', padding: '8px 16px', borderRadius: '8px', fontSize: '13px', fontWeight: '600', color: '#1a2a4a' }}>
                          {step}
                        </div>
                        {idx < arr.length - 1 && <i className="bx bx-right-arrow-alt" style={{ color: '#c0001a', fontSize: '20px' }}></i>}
                      </React.Fragment>
                    ))}
                  </div>
                  <p className="msl-text-body" style={{ fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                    Your cameras feed live footage into our AI engine. Every person is detected, cross-matched against your access database, and if unauthorized — your team is alerted instantly.
                  </p>
                </div>

                {/* RIGHT COLUMN: What You Get Grid */}
                <div className="col-lg-6">
                  <h3 className="msl-navy" style={{ fontSize: '28px', fontWeight: '800', marginBottom: '30px' }}>
                    What You Get
                  </h3>
                  <div className="row g-4">
                    <div className="col-sm-6">
                      <div className="ai-feature-card">
                        <i className="bx bx-target-lock" style={{ fontSize: '36px', color: '#c0001a', marginBottom: '15px', display: 'block' }}></i>
                        <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '16px', marginBottom: '10px' }}>Person Detection</h5>
                        <p className="msl-text-body" style={{ fontSize: '14px', margin: 0, lineHeight: '1.5', flexGrow: 1 }}>Real-time detection and tracking. No unauthorized entry goes unnoticed.</p>
                        <div><span className="ai-tag"><i className="bx bx-check-circle" style={{ marginRight: '4px' }}></i> Patent in Progress</span></div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="ai-feature-card">
                        <i className="bx bx-user-check" style={{ fontSize: '36px', color: '#c0001a', marginBottom: '15px', display: 'block' }}></i>
                        <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '16px', marginBottom: '10px' }}>Instant Cross-Check</h5>
                        <p className="msl-text-body" style={{ fontSize: '14px', margin: 0, lineHeight: '1.5', flexGrow: 1 }}>Checks against authorized databases. Know *who* the threat is.</p>
                        <div><span className="ai-tag"><i className="bx bx-check-circle" style={{ marginRight: '4px' }}></i> Edge AI</span></div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="ai-feature-card">
                        <i className="bx bx-bell" style={{ fontSize: '36px', color: '#c0001a', marginBottom: '15px', display: 'block' }}></i>
                        <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '16px', marginBottom: '10px' }}>Early Alerts</h5>
                        <p className="msl-text-body" style={{ fontSize: '14px', margin: 0, lineHeight: '1.5', flexGrow: 1 }}>Instant generation means your team responds in seconds, not minutes.</p>
                        <div><span className="ai-tag"><i className="bx bx-check-circle" style={{ marginRight: '4px' }}></i> Real-Time Alerts</span></div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="ai-feature-card">
                        <i className="bx bx-video-plus" style={{ fontSize: '36px', color: '#c0001a', marginBottom: '15px', display: 'block' }}></i>
                        <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '16px', marginBottom: '10px' }}>Hardware Agnostic</h5>
                        <p className="msl-text-body" style={{ fontSize: '14px', margin: 0, lineHeight: '1.5', flexGrow: 1 }}>Works with your existing cameras. No need to replace current infrastructure.</p>
                        <div><span className="ai-tag"><i className="bx bx-check-circle" style={{ marginRight: '4px' }}></i> Works with Existing</span></div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <hr style={{ borderColor: '#e2e8f0', margin: '30px 0' }} />

              <div className="row align-items-center">
                <div className="col-lg-8 mb-3 mb-lg-0">
                  <h6 style={{ color: '#1a2a4a', fontWeight: '700', fontSize: '14px', marginBottom: '10px', textTransform: 'uppercase' }}>Ideal For:</h6>
                  <p style={{ fontSize: '14px', color: '#4a5568', margin: 0 }}>Traffic control zones • High-security offices • Defence & strategic facilities • Industrial campuses • Smart homes & night surveillance</p>
                </div>
                <div className="col-lg-4 text-start text-lg-end">
                  <a href="#contact" style={{ display: 'inline-block', background: '#c0001a', color: '#fff', padding: '12px 24px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none', fontSize: '14px' }}>Secure Your Facility with AI →</a>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* =========================================
            PRODUCT 2: TRAFFIC SIGNALING
        ========================================= */}
        <section id="traffic" ref={trafficRef} style={{ background: '#f8fafc', paddingBottom: '60px' }}>
          
          <div className="caution-stripe msl-bg-navy" style={{ padding: '60px 0', borderBottom: '4px solid #c0001a', marginBottom: '40px' }}>
            <div className="container text-center position-relative" style={{ zIndex: 1 }}>
              <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '30px', marginBottom: '20px' }}>
                Product 02
              </span>
              <h2 style={{ color: '#fff', fontSize: '36px', fontWeight: '800', marginBottom: '15px' }}>
                AI High Traffic Signaling System
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '18px', maxWidth: '800px', margin: '0 auto', fontWeight: '300' }}>
                <strong style={{color: '#fff', fontWeight: '600'}}>Smarter Signals. Smoother Traffic. Safer Roads.</strong><br/>
                AI That Reads Real Traffic — Not Just Timers.
              </p>
            </div>
          </div>

          <div className="container" data-aos="fade-up">
            <div style={{ background: '#fff', borderRadius: '24px', padding: '40px', boxShadow: '0 10px 40px rgba(0,0,0,0.04)' }}>
              
              <div className="row g-5 align-items-center">
                
                {/* LEFT COLUMN */}
                <div className="col-lg-6">
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#1a2a4a', color: '#fff', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '25px' }}>
                    <i className="bx bx-stopwatch"></i> TRAFFIC CONTROL
                  </div>
                  <h3 className="msl-navy" style={{ fontSize: '28px', fontWeight: '800', marginBottom: '20px' }}>
                    Beyond fixed timers
                  </h3>
                  <p className="msl-text-body" style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '30px' }}>
                    Most traffic control systems run on fixed timers, completely blind to what's actually happening on the road. Our AI uses real-time camera-based vehicle density analysis to make decisions based on actual traffic conditions — cutting congestion where it matters most.
                  </p>
                  
                  <div style={{ background: '#fff', borderLeft: '4px solid #c0001a', padding: '20px', borderRadius: '0 8px 8px 0', boxShadow: '0 2px 15px rgba(0,0,0,0.03)', marginBottom: '30px' }}>
                    <h6 style={{ color: '#1a2a4a', fontWeight: '700', fontSize: '15px', marginBottom: '10px' }}>The Problem We Solve</h6>
                    <ul style={{ paddingLeft: '20px', color: '#4a5568', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                      <li>Fixed-timers cause congestion at low-traffic hours and gridlock at peak hours</li>
                      <li>No existing system analyses actual vehicle count per lane in real time</li>
                      <li>High-density zones need smarter, faster traffic decisions</li>
                    </ul>
                  </div>

                  <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '18px', marginBottom: '15px' }}>How It Works</h5>
                  <p className="msl-text-body" style={{ fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                    Cameras monitor live traffic. AI counts vehicles across distance zones (e.g. 0–30m, 30–60m). The system calculates density and wirelessly instructs signals to adjust — all in real time, automatically.
                  </p>
                </div>

                {/* RIGHT COLUMN */}
                <div className="col-lg-6">
                  <h3 className="msl-navy" style={{ fontSize: '28px', fontWeight: '800', marginBottom: '30px' }}>
                    What You Get
                  </h3>
                  <div className="row g-4">
                    <div className="col-sm-6">
                      <div className="ai-feature-card">
                        <i className="bx bx-car" style={{ fontSize: '36px', color: '#c0001a', marginBottom: '15px', display: 'block' }}></i>
                        <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '16px', marginBottom: '10px' }}>Live Vehicle Counting</h5>
                        <p className="msl-text-body" style={{ fontSize: '14px', margin: 0, lineHeight: '1.5', flexGrow: 1 }}>Counts per lane/zone. Signals respond to actual traffic, not assumptions.</p>
                        <div><span className="ai-tag"><i className="bx bx-check-circle" style={{ marginRight: '4px' }}></i> Real-Time AI</span></div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="ai-feature-card">
                        <i className="bx bx-brain" style={{ fontSize: '36px', color: '#c0001a', marginBottom: '15px', display: 'block' }}></i>
                        <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '16px', marginBottom: '10px' }}>Deep-Learning Density</h5>
                        <p className="msl-text-body" style={{ fontSize: '14px', margin: 0, lineHeight: '1.5', flexGrow: 1 }}>Highly accurate analysis even in heavy, mixed-vehicle environments.</p>
                        <div><span className="ai-tag"><i className="bx bx-check-circle" style={{ marginRight: '4px' }}></i> Smart City Ready</span></div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="ai-feature-card">
                        <i className="bx bx-wifi" style={{ fontSize: '36px', color: '#c0001a', marginBottom: '15px', display: 'block' }}></i>
                        <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '16px', marginBottom: '10px' }}>Wireless Comm.</h5>
                        <p className="msl-text-body" style={{ fontSize: '14px', margin: 0, lineHeight: '1.5', flexGrow: 1 }}>Instant signal adjustments pushed wirelessly to the hardware.</p>
                        <div><span className="ai-tag"><i className="bx bx-check-circle" style={{ marginRight: '4px' }}></i> Wireless Control</span></div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="ai-feature-card">
                        <i className="bx bx-microchip" style={{ fontSize: '36px', color: '#c0001a', marginBottom: '15px', display: 'block' }}></i>
                        <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '16px', marginBottom: '10px' }}>Custom Hardware</h5>
                        <p className="msl-text-body" style={{ fontSize: '14px', margin: 0, lineHeight: '1.5', flexGrow: 1 }}>Purpose-built AI algorithms for high-density Indian traffic conditions.</p>
                        <div><span className="ai-tag"><i className="bx bx-check-circle" style={{ marginRight: '4px' }}></i> Custom Hardware</span></div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <hr style={{ borderColor: '#e2e8f0', margin: '30px 0' }} />

              <div className="row align-items-center">
                <div className="col-lg-8 mb-3 mb-lg-0">
                  <h6 style={{ color: '#1a2a4a', fontWeight: '700', fontSize: '14px', marginBottom: '10px', textTransform: 'uppercase' }}>Ideal For:</h6>
                  <p style={{ fontSize: '14px', color: '#4a5568', margin: 0 }}>Municipal traffic authorities • High-security campuses & office parks • Smart city infrastructure projects • Industrial zones with heavy vehicle movement</p>
                </div>
                <div className="col-lg-4 text-start text-lg-end">
                  <a href="#contact" style={{ display: 'inline-block', background: '#c0001a', color: '#fff', padding: '12px 24px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none', fontSize: '14px' }}>Bring Intelligence to Traffic →</a>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* =========================================
            PRODUCT 3: AI TENDER SOLUTION
        ========================================= */}
        <section id="tender" ref={tenderRef} style={{ background: '#f8fafc', paddingBottom: '60px' }}>
          
          <div className="caution-stripe msl-bg-navy" style={{ padding: '60px 0', borderBottom: '4px solid #c0001a', marginBottom: '40px' }}>
            <div className="container text-center position-relative" style={{ zIndex: 1 }}>
              <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '30px', marginBottom: '20px' }}>
                Product 03
              </span>
              <h2 style={{ color: '#fff', fontSize: '36px', fontWeight: '800', marginBottom: '15px' }}>
                AI Tender / Bidding Solution
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '18px', maxWidth: '800px', margin: '0 auto', fontWeight: '300' }}>
                <strong style={{color: '#fff', fontWeight: '600'}}>Win More Tenders. Spend Less Time on Paperwork.</strong><br/>
                AI That Reads, Analyses, and Drafts Your Bid — While Your Team Stays in Control.
              </p>
            </div>
          </div>

          <div className="container" data-aos="fade-up">
            <div style={{ background: '#fff', borderRadius: '24px', padding: '40px', boxShadow: '0 10px 40px rgba(0,0,0,0.04)' }}>
              
              <div className="row g-5 align-items-center">
                
                {/* LEFT COLUMN */}
                <div className="col-lg-6">
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#1a2a4a', color: '#fff', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '25px' }}>
                    <i className="bx bx-file-blank"></i> AUTOMATION
                  </div>
                  <h3 className="msl-navy" style={{ fontSize: '28px', fontWeight: '800', marginBottom: '20px' }}>
                    Focus on winning, not typing
                  </h3>
                  <p className="msl-text-body" style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '30px' }}>
                    Responding to tenders is slow, repetitive, and error-prone when done manually. Our AI Tender Solution automates the heaviest parts — reading customer requirements, mapping them to your product catalogue, and generating a draft proposal.
                  </p>
                  
                  <div style={{ background: '#fff', borderLeft: '4px solid #c0001a', padding: '20px', borderRadius: '0 8px 8px 0', boxShadow: '0 2px 15px rgba(0,0,0,0.03)', marginBottom: '30px' }}>
                    <h6 style={{ color: '#1a2a4a', fontWeight: '700', fontSize: '15px', marginBottom: '10px' }}>The Problem We Solve</h6>
                    <ul style={{ paddingLeft: '20px', color: '#4a5568', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                      <li>Tender documents are long, complex, and time-consuming to review manually</li>
                      <li>Errors in requirement mapping lead to weak or non-compliant bids</li>
                      <li>Slow turnaround means missing deadlines or submitting rushed proposals</li>
                    </ul>
                  </div>

                  <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '18px', marginBottom: '15px' }}>How It Works</h5>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '20px' }}>
                    {[
                      { step: '1. Upload', desc: 'Share your customer\'s tender document via our secure portal.' },
                      { step: '2. Analyse', desc: 'AI reads, extracts requirements, and maps them to your specs.' },
                      { step: '3. Review', desc: 'Your team reviews the draft, approves, and submits — fast.' }
                    ].map((item, idx) => (
                      <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                        <div style={{ width: '28px', height: '28px', background: '#f1f5f9', color: '#c0001a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 'bold', flexShrink: 0 }}>
                          {idx + 1}
                        </div>
                        <div>
                          <strong style={{ color: '#1a2a4a', fontSize: '14px' }}>{item.step}</strong>
                          <p style={{ color: '#4a5568', fontSize: '13px', margin: 0 }}>{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="col-lg-6">
                  <h3 className="msl-navy" style={{ fontSize: '28px', fontWeight: '800', marginBottom: '30px' }}>
                    What You Get
                  </h3>
                  <div className="row g-4">
                    <div className="col-sm-6">
                      <div className="ai-feature-card">
                        <i className="bx bx-upload" style={{ fontSize: '36px', color: '#c0001a', marginBottom: '15px', display: 'block' }}></i>
                        <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '16px', marginBottom: '10px' }}>Smart Uploads</h5>
                        <p className="msl-text-body" style={{ fontSize: '14px', margin: 0, lineHeight: '1.5', flexGrow: 1 }}>Read PDFs, DOCs, and Annexures. AI does the heavy lifting.</p>
                        <div><span className="ai-tag"><i className="bx bx-check-circle" style={{ marginRight: '4px' }}></i> Machine Learning</span></div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="ai-feature-card">
                        <i className="bx bx-sitemap" style={{ fontSize: '36px', color: '#c0001a', marginBottom: '15px', display: 'block' }}></i>
                        <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '16px', marginBottom: '10px' }}>Requirement Mapping</h5>
                        <p className="msl-text-body" style={{ fontSize: '14px', margin: 0, lineHeight: '1.5', flexGrow: 1 }}>Accurate, consistent matching to your product database every time.</p>
                        <div><span className="ai-tag"><i className="bx bx-check-circle" style={{ marginRight: '4px' }}></i> Auto Generation</span></div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="ai-feature-card">
                        <i className="bx bx-file-find" style={{ fontSize: '36px', color: '#c0001a', marginBottom: '15px', display: 'block' }}></i>
                        <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '16px', marginBottom: '10px' }}>Human in Loop</h5>
                        <p className="msl-text-body" style={{ fontSize: '14px', margin: 0, lineHeight: '1.5', flexGrow: 1 }}>Your team reviews and approves before submission. Stay in control.</p>
                        <div><span className="ai-tag"><i className="bx bx-check-circle" style={{ marginRight: '4px' }}></i> Human-in-the-Loop</span></div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="ai-feature-card">
                        <i className="bx bx-server" style={{ fontSize: '36px', color: '#c0001a', marginBottom: '15px', display: 'block' }}></i>
                        <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '16px', marginBottom: '10px' }}>On-Premise Deploy</h5>
                        <p className="msl-text-body" style={{ fontSize: '14px', margin: 0, lineHeight: '1.5', flexGrow: 1 }}>Sensitive tender data never leaves your servers. Fully secure.</p>
                        <div><span className="ai-tag"><i className="bx bx-check-circle" style={{ marginRight: '4px' }}></i> On-Premise & Secure</span></div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <hr style={{ borderColor: '#e2e8f0', margin: '30px 0' }} />

              <div className="row align-items-center">
                <div className="col-lg-8 mb-3 mb-lg-0">
                  <h6 style={{ color: '#1a2a4a', fontWeight: '700', fontSize: '14px', marginBottom: '10px', textTransform: 'uppercase' }}>Ideal For:</h6>
                  <p style={{ fontSize: '14px', color: '#4a5568', margin: 0 }}>Manufacturing companies handling enterprise tenders • B2B product companies with large catalogues • Sales & pre-sales teams</p>
                </div>
                <div className="col-lg-4 text-start text-lg-end">
                  <a href="#contact" style={{ display: 'inline-block', background: '#c0001a', color: '#fff', padding: '12px 24px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none', fontSize: '14px' }}>Cut Response Time in Half →</a>
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
              <h3 style={{ color: '#ffffff', fontSize: '36px', fontWeight: '800', marginBottom: '20px', textTransform: 'none' }}>Ready to Scale with Enterprise AI?</h3>
              <p style={{ color: '#cbd5e1', maxWidth: '650px', margin: '0 auto 40px', fontSize: '18px', lineHeight: '1.6' }}>
                Implement intelligent surveillance, traffic control, and tender automation in your environments today.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                <a href="#contact" style={{ background: '#c0001a', color: '#fff', padding: '15px 40px', borderRadius: '30px', fontWeight: '700', fontSize: '16px', textDecoration: 'none', transition: 'background 0.3s ease' }}>
                  Talk to an AI Expert
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

export default AiSolutions;
