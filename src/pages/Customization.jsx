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
  const thermalRef = useRef(null);
  const dehazeRef = useRef(null);
  const defectRef = useRef(null);

  useEffect(() => {
    if (productId === 'face' && faceRef.current) {
      faceRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (productId === 'drone' && droneRef.current) {
      droneRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (productId === 'thermal' && thermalRef.current) {
      thermalRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (productId === 'dehaze' && dehazeRef.current) {
      dehazeRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (productId === 'defect' && defectRef.current) {
      defectRef.current.scrollIntoView({ behavior: 'smooth' });
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
          
          /* Removed .product-card-container in favor of global .msl-product-wrapper */

          .rounded-image-wrapper {
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 15px 40px rgba(0,0,0,0.1);
            height: 100%;
            min-height: 350px;
          }
          .rounded-image-wrapper img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            transition: transform 0.5s ease;
          }
          .rounded-image-wrapper:hover img {
            transform: scale(1.05);
          }

          .p4-feature-card {
            background: #fff;
            border-radius: 20px;
            padding: 35px 25px;
            height: 100%;
            display: flex;
            flex-direction: column;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            box-shadow: 0 5px 20px rgba(0,0,0,0.03);
            border: 1px solid #f1f5f9;
            position: relative;
            z-index: 1;
          }
          .p4-feature-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 15px 35px rgba(0,0,0,0.08);
            border-color: transparent;
          }
          .p4-icon-box-inline {
            color: #1a2a4a;
            transition: all 0.4s ease;
          }
          .p4-feature-card:hover .p4-icon-box-inline {
            background: #c0001a !important;
            color: #fff !important;
            transform: scale(1.1) rotate(5deg);
          }

          .breadcrumb-link {
            color: #a0aec0;
            text-decoration: none;
            transition: color 0.2s;
          }
          .breadcrumb-link:hover {
            color: #ffffff;
          }

          .cta-section {
            background: #1a2a4a;
            color: #fff;
            padding: 30px 60px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 20px;
            border-radius: 0 0 30px 30px;
          }
          .cta-btn-hover {
            background: #c0001a;
            color: #fff;
            padding: 12px 30px;
            border-radius: 12px;
            font-weight: 800;
            text-decoration: none;
            transition: all 0.3s ease;
            display: inline-block;
          }
          .cta-btn-hover:hover {
            background: #fff;
            color: #c0001a;
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(192,0,26,0.3);
          }
          
          /* Core Edge AI Enablement Styles */
          .core-edge-card {
            background: #1a2a4a;
            border-radius: 24px;
            padding: 60px 40px;
            text-align: center;
            position: relative;
            overflow: hidden;
            border: 1px solid rgba(255,255,255,0.1);
          }
          .core-edge-card::before {
            content: '';
            position: absolute;
            top: -50%; left: -50%;
            width: 200%; height: 200%;
            background: radial-gradient(circle, rgba(192,0,26,0.15) 0%, transparent 60%);
            z-index: 0;
            pointer-events: none;
          }
          .core-edge-item {
            position: relative;
            z-index: 1;
            padding: 20px;
            transition: transform 0.3s ease;
          }
          .core-edge-item:hover {
            transform: translateY(-10px);
          }
          .core-edge-icon {
            width: 70px;
            height: 70px;
            background: rgba(255,255,255,0.05);
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 32px;
            color: #ff6b7a;
            margin: 0 auto 20px;
            border: 1px solid rgba(255,255,255,0.1);
            transition: all 0.3s ease;
          }
          .core-edge-item:hover .core-edge-icon {
            background: #c0001a;
            color: #fff;
            border-color: #c0001a;
          }

          .hero-image-panel img {
            max-height: 380px !important;
            object-fit: cover;
            border-radius: 16px;
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
          {/* Slide 1 - Face Analytics */}
          <SwiperSlide>
            <div className="slider-redesign">
              <div className="slider-wrap">
                <div className="stage">
                  <div className="card">
                    <div className="card-grid">
                      <div className="text-col">
                        <span className="tag">EDGE AI &bull; SECURITY</span>
                        <h1>Face Analytics on<br/><span>Broadcom SoC</span></h1>
                        <p className="subtext">Edge-based face analytics for secure environments.</p>
                        <div className="cap-grid">
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-microchip"></i></span><span className="cap-label">Edge Processing</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-target-lock"></i></span><span className="cap-label">High Accuracy</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-battery"></i></span><span className="cap-label">Low Power</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-face"></i></span><span className="cap-label">Face Rec</span></div>
                        </div>
                        <div className="cta-row">
                          <a href="#face" onClick={(e) => { e.preventDefault(); faceRef.current?.scrollIntoView({ behavior: 'smooth' }); }} className="btn btn-primary">Explore Solution <i className="bx bx-right-arrow-alt"></i></a>
                        </div>
                      </div>
                      <div className="image-col">
                        <div className="image-panel">
                          <img src="/assets/img/ai/cust_soc.png" alt="Face Analytics SoC" />
                        </div>
                        <div className="spec-chip">
                          <div className="spec-label">Key Differentiator</div>
                          <div className="spec-value">Edge-based Processing</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 - Drone Vehicle Detection */}
          <SwiperSlide>
            <div className="slider-redesign">
              <div className="slider-wrap">
                <div className="stage">
                  <div className="card">
                    <div className="card-grid">
                      <div className="text-col">
                        <span className="tag">UAV &bull; COMPUTER VISION</span>
                        <h1>Onboard Vehicle<br/><span>Detection</span></h1>
                        <p className="subtext">Onboard vehicle detection from drone imagery.</p>
                        <div className="cap-grid">
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-paper-plane"></i></span><span className="cap-label">Aerial Tracking</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-ruler"></i></span><span className="cap-label">Distance Est.</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-camera"></i></span><span className="cap-label">High FPS</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-car"></i></span><span className="cap-label">Vehicles</span></div>
                        </div>
                        <div className="cta-row">
                          <a href="#drone" onClick={(e) => { e.preventDefault(); droneRef.current?.scrollIntoView({ behavior: 'smooth' }); }} className="btn btn-primary">Explore Solution <i className="bx bx-right-arrow-alt"></i></a>
                        </div>
                      </div>
                      <div className="image-col">
                        <div className="image-panel">
                          <img src="/assets/img/ai/cust_drone.png" alt="Drone Vision" />
                        </div>
                        <div className="spec-chip">
                          <div className="spec-label">Key Differentiator</div>
                          <div className="spec-value">High FPS Tracking</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 - Thermal Camera */}
          <SwiperSlide>
            <div className="slider-redesign">
              <div className="slider-wrap">
                <div className="stage">
                  <div className="card">
                    <div className="card-grid">
                      <div className="text-col">
                        <span className="tag">THERMAL &bull; RANGING</span>
                        <h1>Thermal Camera<br/><span>Detection</span></h1>
                        <p className="subtext">Object distance detection via thermal camera feeds.</p>
                        <div className="cap-grid">
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-moon"></i></span><span className="cap-label">Night Vision</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-sun"></i></span><span className="cap-label">Thermal Ranging</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-radar"></i></span><span className="cap-label">Detection</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-cctv"></i></span><span className="cap-label">Camera</span></div>
                        </div>
                        <div className="cta-row">
                          <a href="#thermal" onClick={(e) => { e.preventDefault(); thermalRef.current?.scrollIntoView({ behavior: 'smooth' }); }} className="btn btn-primary">Explore Solution <i className="bx bx-right-arrow-alt"></i></a>
                        </div>
                      </div>
                      <div className="image-col">
                        <div className="image-panel">
                          <img src="/assets/img/ai/cust_thermal.png" alt="Thermal Camera" />
                        </div>
                        <div className="spec-chip">
                          <div className="spec-label">Key Differentiator</div>
                          <div className="spec-value">Night Vision Ranging</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 4 - Dehaze / Fog */}
          <SwiperSlide>
            <div className="slider-redesign">
              <div className="slider-wrap">
                <div className="stage">
                  <div className="card">
                    <div className="card-grid">
                      <div className="text-col">
                        <span className="tag">IMAGE PROCESSING &bull; AI</span>
                        <h1>Dehaze &amp; Snow-Fog<br/><span>Removal</span></h1>
                        <p className="subtext">Visibility enhancement for low-visibility scenes.</p>
                        <div className="cap-grid">
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-cloud"></i></span><span className="cap-label">Fog Removal</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-water"></i></span><span className="cap-label">Snow Removal</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-timer"></i></span><span className="cap-label">Zero Latency</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-image-alt"></i></span><span className="cap-label">Clear Image</span></div>
                        </div>
                        <div className="cta-row">
                          <a href="#dehaze" onClick={(e) => { e.preventDefault(); dehazeRef.current?.scrollIntoView({ behavior: 'smooth' }); }} className="btn btn-primary">Explore Solution <i className="bx bx-right-arrow-alt"></i></a>
                        </div>
                      </div>
                      <div className="image-col">
                        <div className="image-panel">
                          <img src="/assets/img/ai/dehaze.png" alt="Dehaze" />
                        </div>
                        <div className="spec-chip">
                          <div className="spec-label">Key Differentiator</div>
                          <div className="spec-value">Zero Latency Processing</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 5 - Defect Detection */}
          <SwiperSlide>
            <div className="slider-redesign">
              <div className="slider-wrap">
                <div className="stage">
                  <div className="card">
                    <div className="card-grid">
                      <div className="text-col">
                        <span className="tag">MANUFACTURING &bull; QA</span>
                        <h1>Product Defect<br/><span>Detection</span></h1>
                        <p className="subtext">Automated visual inspection to catch micro-defects instantly.</p>
                        <div className="cap-grid">
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-run"></i></span><span className="cap-label">High-Speed QA</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-search"></i></span><span className="cap-label">Defect Scanning</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-git-commit"></i></span><span className="cap-label">Conveyor Ready</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-check-double"></i></span><span className="cap-label">QA Check</span></div>
                        </div>
                        <div className="cta-row">
                          <a href="#defect" onClick={(e) => { e.preventDefault(); defectRef.current?.scrollIntoView({ behavior: 'smooth' }); }} className="btn btn-primary">Explore Solution <i className="bx bx-right-arrow-alt"></i></a>
                        </div>
                      </div>
                      <div className="image-col">
                        <div className="image-panel">
                          <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" alt="Defect Detection" />
                        </div>
                        <div className="spec-chip">
                          <div className="spec-label">Key Differentiator</div>
                          <div className="spec-value">High-Speed QA</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 6 - Custom Orders */}
          <SwiperSlide>
            <div className="slider-redesign">
              <div className="slider-wrap">
                <div className="stage">
                  <div className="card">
                    <div className="card-grid">
                      <div className="text-col">
                        <span className="tag">ENGINEERING &bull; BESPOKE</span>
                        <h1>Custom Hardware<br/><span>Solutions</span></h1>
                        <p className="subtext">We take custom orders for bespoke edge AI solutions.</p>
                        <div className="cap-grid">
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-chip"></i></span><span className="cap-label">PCB Design</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-code-alt"></i></span><span className="cap-label">Embedded Software</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-layer"></i></span><span className="cap-label">Integration</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-cog"></i></span><span className="cap-label">Custom Build</span></div>
                        </div>
                        <div className="cta-row">
                          <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="btn btn-primary">Contact Our Experts <i className="bx bx-right-arrow-alt"></i></a>
                        </div>
                      </div>
                      <div className="image-col">
                        <div className="image-panel">
                          <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80" alt="Custom Engineering" />
                        </div>
                        <div className="spec-chip">
                          <div className="spec-label">Key Differentiator</div>
                          <div className="spec-value">Bespoke Engineering</div>
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

      <main id="main" className="msl-bg-gray" style={{ padding: '0 0 80px 0' }}>
        
        {/* Intro text */}
        <div className="container text-center" style={{ paddingTop: '80px', paddingBottom: '20px' }}>
          <h2 style={{ color: '#1a2a4a', fontSize: '36px', fontWeight: '800', marginBottom: '15px' }}>
            Representative Solutions
          </h2>
          <p style={{ color: '#4a5568', fontSize: '18px', maxWidth: '800px', margin: '0 auto', fontWeight: '400' }}>
            Customers approach us to create innovative solutions. We build products including PCB design, casing, and software enablement as per end-solution needs.
          </p>
        </div>

        {/* =========================================
            PRODUCT 01: Face Analytics
        ========================================= */}
        <section id="face" ref={faceRef} style={{ paddingBottom: '40px' }}>
          <div className="caution-stripe msl-bg-navy" style={{ padding: '60px 0', borderBottom: '4px solid #c0001a', marginBottom: '40px' }}>
            <div className="container text-center position-relative" style={{ zIndex: 1 }}>
              <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '30px', marginBottom: '20px' }}>
                Product 01
              </span>
              <h2 style={{ color: '#fff', fontSize: '36px', fontWeight: '800', marginBottom: '15px' }}>
                Face Analytics on Broadcom SoC
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '18px', maxWidth: '800px', margin: '0 auto', fontWeight: '300' }}>
                <strong style={{color: '#fff', fontWeight: '600'}}>Edge-Based Facial Recognition.</strong><br/>
                Instantaneous face analytics directly on the hardware for secure environments.
              </p>
            </div>
          </div>

          <div className="container" data-aos="fade-up">
            <div style={{ background: '#fff', borderRadius: '24px', padding: '0', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.04)', border: '1px solid #CBD5E1' }}>
              
              {/* Intro & Overview Block inside Card */}
              <div style={{ background: '#0E1628', color: '#fff', padding: '50px 40px' }}>
                <div className="row align-items-center g-5">
                  <div className="col-lg-6">
                    <div style={{ marginBottom: '15px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                      <span style={{ display: 'inline-block', background: 'rgba(192,0,26,0.1)', color: '#c0001a', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '30px' }}>
                        <i className="bx bx-chip" style={{ marginRight: '5px' }}></i> EDGE AI & SECURITY
                      </span>
                    </div>
                    <h3 style={{ fontSize: '32px', fontWeight: '800', lineHeight: '1.2', marginBottom: '20px', color: '#fff' }}>
                      Broadcom SoC <span style={{ color: '#FF4D4D' }}>Platform Integration</span>
                    </h3>
                    <p style={{ color: '#94A3B8', fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
                      Built on advanced Broadcom System-on-Chip (SoC) architecture, our edge AI solution delivers enterprise-grade security and reliability. By running sophisticated neural networks directly on-device, we eliminate cloud latency and external vulnerabilities.
                    </p>
                    <div style={{ marginTop: '20px' }}>
                      <h4 style={{ color: '#fff', fontSize: '22px', fontWeight: '800', marginBottom: '15px' }}>Operational Challenges</h4>
                      <ul style={{ color: '#94A3B8', fontSize: '15px', lineHeight: '1.6', paddingLeft: '0', margin: 0, listStyleType: 'none' }}>
                        <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'flex-start' }}><span style={{ color: '#FF4D4D', marginRight: '10px', fontSize: '20px', lineHeight: '1.2' }}>&bull;</span> <span><strong style={{ color: '#E2E8F0' }}>Cloud Dependency:</strong> Network latency and exposure to cyber threats.</span></li>
                        <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'flex-start' }}><span style={{ color: '#FF4D4D', marginRight: '10px', fontSize: '20px', lineHeight: '1.2' }}>&bull;</span> <span><strong style={{ color: '#E2E8F0' }}>Complex Environments:</strong> Traditional systems struggle with dynamic lighting.</span></li>
                        <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'flex-start' }}><span style={{ color: '#FF4D4D', marginRight: '10px', fontSize: '20px', lineHeight: '1.2' }}>&bull;</span> <span><strong style={{ color: '#E2E8F0' }}>Data Compliance:</strong> Hard to maintain privacy with biometric data.</span></li>
                        <li style={{ display: 'flex', alignItems: 'flex-start' }}><span style={{ color: '#FF4D4D', marginRight: '10px', fontSize: '20px', lineHeight: '1.2' }}>&bull;</span> <span><strong style={{ color: '#E2E8F0' }}>Offline Operation:</strong> Systems fail during network disruptions.</span></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                      <img src="/assets/img/ai/edge_ai_dashboard.png" alt="Face Analytics Dashboard" style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Our Solution & Architecture */}
              <div style={{ padding: '50px 40px', background: '#fff' }}>
                <div className="row g-5 align-items-center">
                  <div className="col-lg-5 order-2 order-lg-1">
                    <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', background: '#f8fafc', border: '1px solid #e2e8f0', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img src="/assets/img/ai/face_analytics_soc.png" alt="Broadcom SoC Platform" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }} />
                    </div>
                  </div>
                  <div className="col-lg-7 order-1 order-lg-2">
                    <span style={{ color: '#FF4D4D', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '12px', display: 'block', marginBottom: '10px' }}>Our Solution</span>
                    <h4 style={{ color: '#1A2A4A', fontSize: '28px', fontWeight: '800', marginBottom: '20px' }}>Real-Time Edge Intelligence</h4>
                    <p style={{ color: '#4A5568', fontSize: '15px', lineHeight: '1.6', marginBottom: '30px' }}>
                      Transforms conventional security into an intelligent network. Each device becomes an autonomous node, processing facial recognition data instantly and securely on the Broadcom SoC without requiring constant cloud connectivity.
                    </p>
                    
                    <div className="row g-4">
                      <div className="col-sm-6">
                        <div style={{ display: 'flex', gap: '15px' }}>
                          <i className="bx bx-bolt-circle" style={{ fontSize: '24px', color: '#FF4D4D' }}></i>
                          <div>
                            <h6 style={{ color: '#1A2A4A', fontWeight: '700', fontSize: '15px', marginBottom: '5px' }}>Millisecond Response</h6>
                            <p style={{ color: '#64748B', fontSize: '13px', margin: 0 }}>Instantaneous face analytics directly on the hardware.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div style={{ display: 'flex', gap: '15px' }}>
                          <i className="bx bx-shield-quarter" style={{ fontSize: '24px', color: '#FF4D4D' }}></i>
                          <div>
                            <h6 style={{ color: '#1A2A4A', fontWeight: '700', fontSize: '15px', marginBottom: '5px' }}>100% On-Device</h6>
                            <p style={{ color: '#64748B', fontSize: '13px', margin: 0 }}>Zero cloud cyber threat exposure and strict privacy.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div style={{ display: 'flex', gap: '15px' }}>
                          <i className="bx bx-scan" style={{ fontSize: '24px', color: '#FF4D4D' }}></i>
                          <div>
                            <h6 style={{ color: '#1A2A4A', fontWeight: '700', fontSize: '15px', marginBottom: '5px' }}>Advanced Recognition</h6>
                            <p style={{ color: '#64748B', fontSize: '13px', margin: 0 }}>Mask-aware, partial-face tracking, and multi-person detection.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div style={{ display: 'flex', gap: '15px' }}>
                          <i className="bx bx-wifi-off" style={{ fontSize: '24px', color: '#FF4D4D' }}></i>
                          <div>
                            <h6 style={{ color: '#1A2A4A', fontWeight: '700', fontSize: '15px', marginBottom: '5px' }}>Offline Operation</h6>
                            <p style={{ color: '#64748B', fontSize: '13px', margin: 0 }}>Continuous reliable operation even without internet access.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features & Benefits from Image */}
              <div style={{ padding: '50px 40px 25px', background: '#F8FAFC' }}>
                <div className="row g-4">
                  
                  {/* SOLUTION FEATURES */}
                  <div className="col-lg-7">
                    <div style={{ background: '#fff', padding: '30px', borderRadius: '16px', border: '1px solid #e2e8f0', height: '100%' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                        <div style={{ background: '#0E47A1', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <i className="bx bx-cog" style={{ color: '#fff', fontSize: '24px' }}></i>
                        </div>
                        <h4 style={{ color: '#0E47A1', fontSize: '18px', fontWeight: '800', margin: 0, textTransform: 'uppercase', letterSpacing: '1px' }}>Solution Features</h4>
                      </div>
                      
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '15px', textAlign: 'center' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                          <i className="bx bx-microchip" style={{ fontSize: '36px', color: '#0E47A1', marginBottom: '10px' }}></i>
                          <p style={{ fontSize: '11px', color: '#1A2A4A', fontWeight: '600', lineHeight: '1.4' }}>Broadcom SoC Integration</p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                          <i className="bx bx-run" style={{ fontSize: '36px', color: '#0E47A1', marginBottom: '10px' }}></i>
                          <p style={{ fontSize: '11px', color: '#1A2A4A', fontWeight: '600', lineHeight: '1.4' }}>Dynamic Lighting Accuracy</p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                          <i className="bx bx-error" style={{ fontSize: '36px', color: '#0E47A1', marginBottom: '10px' }}></i>
                          <p style={{ fontSize: '11px', color: '#1A2A4A', fontWeight: '600', lineHeight: '1.4' }}>Instant Watchlist Alerts</p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                          <i className="bx bx-check-shield" style={{ fontSize: '36px', color: '#0E47A1', marginBottom: '10px' }}></i>
                          <p style={{ fontSize: '11px', color: '#1A2A4A', fontWeight: '600', lineHeight: '1.4' }}>Privacy Regulation Compliant</p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                          <i className="bx bx-data" style={{ fontSize: '36px', color: '#0E47A1', marginBottom: '10px' }}></i>
                          <p style={{ fontSize: '11px', color: '#1A2A4A', fontWeight: '600', lineHeight: '1.4' }}>Reduced Bandwidth Usage</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* KEY BENEFITS */}
                  <div className="col-lg-5">
                    <div style={{ background: '#fff', padding: '30px', borderRadius: '16px', border: '1px solid #e2e8f0', height: '100%' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px', justifyContent: 'center' }}>
                        <div style={{ height: '2px', background: '#e2e8f0', flex: 1 }}></div>
                        <h4 style={{ color: '#0E47A1', fontSize: '18px', fontWeight: '800', margin: 0, textTransform: 'uppercase', letterSpacing: '1px' }}>Key Benefits</h4>
                        <div style={{ height: '2px', background: '#e2e8f0', flex: 1 }}></div>
                      </div>
                      
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#fff', padding: '12px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                          <i className="bx bx-stopwatch" style={{ fontSize: '28px', color: '#0E47A1' }}></i>
                          <span style={{ fontSize: '13px', color: '#1A2A4A', fontWeight: '700', lineHeight: '1.2' }}>Ultra-Low<br/>Latency</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#fff', padding: '12px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                          <i className="bx bx-wifi-off" style={{ fontSize: '28px', color: '#0E47A1' }}></i>
                          <span style={{ fontSize: '13px', color: '#1A2A4A', fontWeight: '700', lineHeight: '1.2' }}>Offline<br/>Operation</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#fff', padding: '12px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                          <i className="bx bx-shield-alt-2" style={{ fontSize: '28px', color: '#0E47A1' }}></i>
                          <span style={{ fontSize: '13px', color: '#1A2A4A', fontWeight: '700', lineHeight: '1.2' }}>Data<br/>Protection</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#fff', padding: '12px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                          <i className="bx bx-server" style={{ fontSize: '28px', color: '#0E47A1' }}></i>
                          <span style={{ fontSize: '13px', color: '#1A2A4A', fontWeight: '700', lineHeight: '1.2' }}>High<br/>Availability</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Bottom CTA within card */}
              <div style={{ background: '#F8FAFC', padding: '25px 40px 40px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ marginBottom: '15px', flex: '1 1 300px' }}>
                  <h6 style={{ color: '#FF4D4D', fontWeight: '700', fontSize: '14px', marginBottom: '8px', textTransform: 'uppercase' }}>Target Applications:</h6>
                  <p style={{ fontSize: '14px', color: '#4a5568', margin: 0, fontWeight: '500' }}>Defense & Military • Government Buildings • Smart Access Control • Critical Infrastructure</p>
                </div>
                <div style={{ flex: '0 0 auto' }}>
                  <a href="#contact" style={{ display: 'inline-block', background: '#FF4D4D', color: '#fff', padding: '18px 40px', borderRadius: '12px', fontWeight: '800', textDecoration: 'none', fontSize: '18px', boxShadow: '0 10px 25px rgba(255, 77, 77, 0.5)', textTransform: 'uppercase', letterSpacing: '1px' }} className="hover-scale">
                    Request Face Analytics Demo <i className="bx bx-right-arrow-alt" style={{ verticalAlign: 'middle', fontSize: '24px' }}></i>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================
            PRODUCT 02: Drone Vehicle Detection
        ========================================= */}
        <section id="drone" ref={droneRef} style={{ paddingBottom: '40px' }}>
          <div className="caution-stripe msl-bg-navy" style={{ padding: '60px 0', borderBottom: '4px solid #c0001a', marginBottom: '40px' }}>
            <div className="container text-center position-relative" style={{ zIndex: 1 }}>
              <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '30px', marginBottom: '20px' }}>
                Product 02
              </span>
              <h2 style={{ color: '#fff', fontSize: '36px', fontWeight: '800', marginBottom: '15px' }}>
                AI-Powered Aerial Intelligence
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '18px', maxWidth: '800px', margin: '0 auto', fontWeight: '300' }}>
                <strong style={{color: '#fff', fontWeight: '600'}}>Transform UAVs into intelligent surveillance platforms.</strong><br/>
                Real-time detection, tracking, and distance estimation straight from drone imagery.
              </p>
            </div>
          </div>

          <div className="container" data-aos="fade-up">
            <div className="msl-product-wrapper">
              <div className="p-4 p-lg-5" style={{ paddingBottom: '40px' }}>
                
                {/* Main Card */}
                <div className="row g-5 align-items-center">
                  <div className="col-lg-5">
                    <div className="rounded-image-wrapper">
                      <img src="/assets/img/ai/ai_surveillance.png" alt="Aerial Intelligence" />
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <h3 className="msl-navy" style={{ fontSize: '32px', fontWeight: '800', marginBottom: '20px' }}>
                      Real-Time <span style={{ color: '#c0001a' }}>Aerial Reconnaissance</span>
                    </h3>
                    <p className="msl-text-body" style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '30px' }}>
                      Our advanced Aerial Computer Vision solution processes live drone imagery to detect, classify, and track vehicles and assets. By combining AI and edge computing, drones instantly convert raw visual data into actionable insights for faster decision-making.
                    </p>
                    
                    <div className="row g-4">
                      {[
                        { title: 'Aerial Tracking', desc: 'Models optimized for top-down perspectives to maintain target tracking throughout the mission.', icon: 'bx-target-lock' },
                        { title: 'Distance Estimation', desc: 'Accurately calculate distances between targets using real-time pixel relationships.', icon: 'bx-ruler' },
                        { title: 'Edge Processing', desc: 'Onboard analytics eliminate cloud dependency for rapid, uninterrupted operation.', icon: 'bx-microchip' },
                        { title: 'Mission Ready', desc: 'Modular architecture designed for commercial and defense-grade UAV integration.', icon: 'bx-shield-quarter' }
                      ].map((feature, idx) => (
                        <div className="col-sm-6" key={idx}>
                          <div className="p4-feature-card">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '12px' }}>
                              <div className="p4-icon-box-inline" style={{ width: '45px', height: '45px', background: '#f8fafc', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', flexShrink: 0 }}>
                                <i className={`bx ${feature.icon}`}></i>
                              </div>
                              <h5 className="msl-navy" style={{ fontSize: '16px', fontWeight: '800', margin: 0 }}>{feature.title}</h5>
                            </div>
                            <p className="msl-text-body" style={{ fontSize: '13px', margin: 0, lineHeight: '1.5' }}>{feature.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Zone: Key Benefits */}
                {/* Zone: Why Choose Us */}
                <hr style={{ borderTop: '1px solid #e2e8f0', margin: '40px 0' }} />
                <div style={{ marginBottom: '40px' }}>
                  <div className="text-center mb-5">
                    <h3 className="msl-navy" style={{ fontSize: '28px', fontWeight: '800', marginBottom: '10px' }}>Why Choose Our Aerial Computer Vision Solution?</h3>
                    <p style={{ color: '#64748b', fontSize: '16px' }}>Delivering precise, actionable insights whenever and wherever they are needed.</p>
                  </div>
                  <div className="row g-4">
                    {[
                      { text: 'Real-Time Analytics', icon: 'bx-stopwatch' },
                      { text: 'Target Tracking', icon: 'bx-target-lock' },
                      { text: 'Distance Estimation', icon: 'bx-ruler' },
                      { text: 'Edge-Based AI', icon: 'bx-microchip' },
                      { text: 'Reduced Dependency', icon: 'bx-wifi-off' },
                      { text: 'Situational Awareness', icon: 'bx-radar' },
                      { text: 'Scalable Integration', icon: 'bx-layer' },
                      { text: 'Mission Reliability', icon: 'bx-check-shield' }
                    ].map((benefit, index) => (
                      <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                        <div style={{ background: '#fff', borderLeft: '4px solid #c0001a', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.04)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', transition: 'all 0.3s ease', cursor: 'default' }} onMouseEnter={(e) => {e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 10px 25px rgba(192,0,26,0.15)'; e.currentTarget.style.background = '#c0001a'; e.currentTarget.querySelector('h5').style.color = '#fff'; e.currentTarget.querySelector('div').style.color = '#fff'; e.currentTarget.querySelector('i').style.transform = 'scale(1.2)';}} onMouseLeave={(e) => {e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.04)'; e.currentTarget.style.background = '#fff'; e.currentTarget.querySelector('h5').style.color = ''; e.currentTarget.querySelector('div').style.color = '#c0001a'; e.currentTarget.querySelector('i').style.transform = 'scale(1)';}}>
                          <div style={{ color: '#c0001a', fontSize: '28px', marginBottom: '12px', transition: 'all 0.3s ease' }}>
                            <i className={`bx ${benefit.icon}`} style={{ display: 'inline-block', transition: 'transform 0.3s ease' }}></i>
                          </div>
                          <h5 className="msl-navy" style={{ fontSize: '15px', fontWeight: '700', margin: 0, lineHeight: '1.4', transition: 'all 0.3s ease' }}>{benefit.text}</h5>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Zone: Ideal Applications - Dark Pill Tag Layout */}
                <div style={{ background: '#0f172a', borderRadius: '20px', padding: '40px', color: '#fff', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(192,0,26,0.15) 0%, rgba(15,23,42,0) 70%)' }}></div>
                  <div className="row align-items-center position-relative" style={{ zIndex: 1 }}>
                    <div className="col-lg-4 mb-4 mb-lg-0 text-center text-lg-start">
                      <h3 style={{ fontSize: '28px', fontWeight: '800', margin: 0, color: '#fff' }}>Ideal Applications</h3>
                      <p style={{ color: '#94a3b8', fontSize: '15px', marginTop: '10px', marginBottom: 0 }}>Engineered for flexible commercial and defense-grade deployments.</p>
                    </div>
                    <div className="col-lg-8">
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
                        {[
                          { title: 'Defense & Recon', icon: 'bx-shield-quarter' },
                          { title: 'Border Surveillance', icon: 'bx-map-alt' },
                          { title: 'Infrastructure Monitoring', icon: 'bx-buildings' },
                          { title: 'Smart City Analytics', icon: 'bx-bar-chart-alt-2' },
                          { title: 'Asset Inspection', icon: 'bx-search-alt' },
                          { title: 'Search & Rescue', icon: 'bx-first-aid' },
                          { title: 'Disaster Assessment', icon: 'bx-error-circle' },
                          { title: 'Wildlife Monitoring', icon: 'bx-leaf' }
                        ].map((app, idx) => (
                          <div key={idx} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', padding: '10px 20px', borderRadius: '30px', display: 'flex', alignItems: 'center', gap: '10px', transition: 'all 0.3s ease', cursor: 'default' }} onMouseEnter={(e) => {e.currentTarget.style.background='rgba(192,0,26,0.2)'; e.currentTarget.style.borderColor='rgba(192,0,26,0.4)'; e.currentTarget.style.transform='translateY(-2px)';}} onMouseLeave={(e) => {e.currentTarget.style.background='rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.1)'; e.currentTarget.style.transform='translateY(0)';}}>
                            <i className={`bx ${app.icon}`} style={{ color: '#ff6b7a', fontSize: '18px' }}></i>
                            <span style={{ fontSize: '14px', fontWeight: '600', letterSpacing: '0.3px' }}>{app.title}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cta-section">
                <div>
                  <h4 style={{ margin: '0 0 5px 0', fontWeight: '800', fontSize: '22px', color: '#fff' }}>Empower Your UAVs</h4>
                  <p style={{ margin: 0, color: '#cbd5e1', fontSize: '15px' }}>Add onboard AI intelligence to your drone fleet.</p>
                </div>
                <a href="#contact" className="cta-btn-hover">Explore Drone Integration</a>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            PRODUCT 03: Thermal Camera Detection
        ========================================= */}
        <section id="thermal" ref={thermalRef} style={{ paddingBottom: '40px' }}>
          <div className="caution-stripe msl-bg-navy" style={{ padding: '60px 0', borderBottom: '4px solid #c0001a', marginBottom: '40px' }}>
            <div className="container text-center position-relative" style={{ zIndex: 1 }}>
              <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '30px', marginBottom: '20px' }}>
                Product 03
              </span>
              <h2 style={{ color: '#fff', fontSize: '36px', fontWeight: '800', marginBottom: '15px' }}>
                Thermal Camera Distance Detection
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '18px', maxWidth: '800px', margin: '0 auto', fontWeight: '300' }}>
                <strong style={{color: '#fff', fontWeight: '600'}}>See the Unseen.</strong><br/>
                Night vision thermal tracking and distance detection for adverse environments.
              </p>
            </div>
          </div>

          <div className="container" data-aos="fade-up">
            <div className="msl-product-wrapper" style={{ padding: '0', overflow: 'hidden' }}>
              
              {/* Top Split: Image & Problem Statement */}
              <div className="row g-0">
                <div className="col-lg-5" style={{ background: '#f8fafc', padding: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src="/assets/img/ai/thermal_camera.png" alt="Thermal Camera" style={{ maxWidth: '100%', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
                </div>
                <div className="col-lg-7" style={{ padding: '50px 40px', background: '#fff' }}>
                  <div className="mb-5">
                    <div style={{ marginBottom: '15px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                      <span style={{ display: 'inline-block', background: 'rgba(192,0,26,0.1)', color: '#c0001a', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '30px' }}>
                        AI-POWERED SURVEILLANCE
                      </span>
                      <span style={{ display: 'inline-block', background: 'rgba(192,0,26,0.1)', color: '#c0001a', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '30px' }}>
                        THERMAL INTELLIGENCE
                      </span>
                    </div>
                    <h3 className="msl-navy mt-2" style={{ fontSize: '32px', fontWeight: '800' }}>See Clearly <span style={{ color: '#c0001a' }}>When Nothing Else Can</span></h3>
                    <p style={{ fontSize: '16px', color: '#64748b', lineHeight: '1.6', marginTop: '10px' }}>When fog, rain, smoke, or darkness shuts down conventional surveillance, our thermal AI keeps your perimeter intelligence fully operational — detecting, ranging, and classifying threats with zero degradation.</p>
                  </div>
                  <h3 className="msl-navy" style={{ fontSize: '24px', fontWeight: '800', marginBottom: '20px' }}>The Problem with Conventional Cameras</h3>
                  <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '30px' }}>
                    Conventional cameras fail the moment conditions turn hostile. A foggy runway, a smoke-filled plant floor, a pitch-dark perimeter at 2 AM — these are exactly the moments when visibility matters most, and traditional systems go blind. A security gap in adverse weather isn't a technical inconvenience. <strong style={{ color: '#c0001a' }}>It's a liability.</strong>
                  </p>
                  <div style={{ background: '#fff0f2', borderLeft: '4px solid #c0001a', padding: '20px', borderRadius: '0 8px 8px 0' }}>
                    <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                      <i className="bx bxs-check-shield" style={{ color: '#c0001a', fontSize: '24px', marginTop: '3px' }}></i>
                      <div>
                        <h5 style={{ color: '#c0001a', fontSize: '15px', fontWeight: '700', margin: '0 0 5px 0' }}>Proven Reliability</h5>
                        <p style={{ margin: 0, fontSize: '14px', color: '#64748b', lineHeight: '1.5' }}>Validated across night-time perimeter deployments with detection accuracy maintained at <strong>99.8%</strong> in zero-visibility conditions — where conventional systems reported 0% usable frames.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Capabilities Grid - Unique 3-2 Layout */}
              <div style={{ background: '#0f172a', padding: '50px 40px' }}>
                <div className="text-center mb-5">
                  <h3 style={{ color: '#fff', fontSize: '28px', fontWeight: '800' }}>Core Capabilities</h3>
                </div>
                <div className="row g-4 justify-content-center">
                  {[
                    { title: 'Thermal Processing', icon: 'bxs-hot', desc: 'AI trained on radiometric data detects heat signatures through fog, rain, dust, and smoke.' },
                    { title: 'Night Vision Ready', icon: 'bx-moon', desc: 'Accurate distance estimation regardless of ambient light — full capacity dusk to dawn.' },
                    { title: 'Object Distance Detection', icon: 'bx-target-lock', desc: 'Computes precise range to each detected entity in real time — exactly how far away.' },
                    { title: 'Multi-Entity Classification', icon: 'bx-category-alt', desc: 'Differentiates humans, vehicles, and animals by thermal profile — reduces false alarms.' },
                    { title: 'Real-Time Edge Processing', icon: 'bx-microchip', desc: 'Thermal feeds processed on-device with sub-second latency — no cloud dependency.' }
                  ].map((cap, idx) => (
                    <div className={idx < 3 ? "col-lg-4 col-md-6" : "col-lg-5 col-md-6"} key={idx}>
                      <div style={{ background: 'rgba(255,255,255,0.05)', borderTop: '3px solid #ff6b7a', padding: '25px', borderRadius: '8px', height: '100%', transition: 'all 0.3s ease', cursor: 'default' }} onMouseEnter={(e)=>e.currentTarget.style.background='rgba(255,255,255,0.1)'} onMouseLeave={(e)=>e.currentTarget.style.background='rgba(255,255,255,0.05)'}>
                        <i className={`bx ${cap.icon}`} style={{ color: '#ff6b7a', fontSize: '28px', marginBottom: '15px' }}></i>
                        <h5 style={{ color: '#fff', fontSize: '16px', fontWeight: '700', marginBottom: '10px' }}>{cap.title}</h5>
                        <p style={{ color: '#94a3b8', fontSize: '14px', margin: 0, lineHeight: '1.6' }}>{cap.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Split: Use Cases & How It Works */}
              <div className="row g-0">
                <div className="col-lg-6" style={{ padding: '50px 40px', background: '#fff', borderRight: '1px solid #e2e8f0' }}>
                  <h3 className="msl-navy" style={{ fontSize: '24px', fontWeight: '800', marginBottom: '30px' }}>Use Cases</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {[
                      { t: 'Perimeter Security', d: 'Detect intrusions in complete darkness or heavy fog without missing a beat.' },
                      { t: 'Night Operations', d: 'Support military and industrial patrol teams with reliable ranging data after hours.' },
                      { t: 'Airport & Port Surveillance', d: 'Maintain situational awareness across runways and docks in low-visibility.' },
                      { t: 'Industrial Safety', d: 'Monitor hazardous zones where smoke or steam obstruct standard cameras.' },
                      { t: 'Border & Infrastructure', d: '24/7 coverage where weather-related blind spots are unacceptable.' }
                    ].map((uc, i) => (
                      <div key={i} style={{ display: 'flex', gap: '15px' }}>
                        <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#c0001a', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '12px' }}>
                          <i className="bx bx-check"></i>
                        </div>
                        <div>
                          <h6 className="msl-navy" style={{ fontSize: '15px', fontWeight: '700', margin: '0 0 5px 0' }}>{uc.t}</h6>
                          <p style={{ margin: 0, fontSize: '14px', color: '#64748b', lineHeight: '1.5' }}>{uc.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-lg-6" style={{ padding: '50px 40px', background: '#f8fafc' }}>
                  <h3 className="msl-navy" style={{ fontSize: '24px', fontWeight: '800', marginBottom: '30px' }}>How It Works</h3>
                  <div style={{ position: 'relative', paddingLeft: '30px' }}>
                    <div style={{ position: 'absolute', left: '11px', top: '10px', bottom: '20px', width: '2px', background: 'linear-gradient(to bottom, #c0001a, rgba(192,0,26,0.1))' }}></div>
                    {[
                      { step: '1', title: 'Capture', desc: 'Thermal cameras stream radiometric data continuously, capturing heat signatures invisible to the human eye.' },
                      { step: '2', title: 'Analyse', desc: 'Onboard AI models process each frame to detect, classify, and range entities in real time.' },
                      { step: '3', title: 'Alert', desc: 'Distance-tagged alerts are delivered to your security dashboard or integrated into your existing VMS.' }
                    ].map((hw, j) => (
                      <div key={j} style={{ position: 'relative', marginBottom: j === 2 ? 0 : '30px' }}>
                        <div style={{ position: 'absolute', left: '-30px', top: '0', width: '24px', height: '24px', borderRadius: '50%', background: '#c0001a', border: '4px solid #fff', boxShadow: '0 0 0 2px rgba(192,0,26,0.2)' }}></div>
                        <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '18px', marginBottom: '8px' }}>{hw.step}. {hw.title}</h5>
                        <p className="msl-text-body" style={{ fontSize: '15px', lineHeight: '1.6', margin: 0 }}>{hw.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="cta-section" style={{ borderRadius: 0, padding: '40px', background: '#1a2a4a' }}>
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center" style={{ width: '100%' }}>
                  <div className="mb-4 mb-md-0 text-center text-md-start">
                    <h4 style={{ margin: '0 0 5px 0', fontWeight: '800', fontSize: '22px', color: '#fff' }}>Request a Demo</h4>
                    <p style={{ margin: 0, color: '#cbd5e1', fontSize: '15px' }}>See thermal AI in action under simulated adverse conditions.</p>
                  </div>
                  <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <a href="#demo" className="cta-btn-hover" style={{ background: '#c0001a', color: '#fff', padding: '12px 24px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none' }}>Schedule a Live Demo</a>
                    <a href="#specs" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', padding: '12px 24px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none', transition: 'all 0.3s' }} onMouseEnter={(e)=>e.currentTarget.style.background='rgba(255,255,255,0.1)'} onMouseLeave={(e)=>e.currentTarget.style.background='transparent'}>Download Spec Sheet</a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section id="dehaze" ref={dehazeRef} style={{ paddingBottom: '40px' }}>
          {/* Top Banner */}
          <div className="caution-stripe msl-bg-navy" style={{ padding: '60px 0', borderBottom: '4px solid #c0001a', marginBottom: '40px' }}>
            <div className="container text-center position-relative" style={{ zIndex: 1 }}>
              <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '30px', marginBottom: '20px' }}>
                Product 04
              </span>
              <h2 style={{ color: '#fff', fontSize: '36px', fontWeight: '800', marginBottom: '15px' }}>
                Dehaze / Snow-Fog Removal
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '18px', maxWidth: '800px', margin: '0 auto', fontWeight: '300' }}>
                <strong style={{color: '#fff', fontWeight: '600'}}>Crystal Clear Data.</strong><br/>
                Visibility enhancement for critical camera feeds during heavy snow, fog, and rain.
              </p>
            </div>
          </div>

          <div className="container" data-aos="fade-up">
            <div className="msl-product-wrapper" style={{ padding: '0', overflow: 'hidden' }}>
              
              <div className="p-4 p-lg-5">
                <div className="row g-5 align-items-center mb-5">
                  <div className="col-lg-6 text-center">

                    <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.1)', background: '#000', display: 'inline-block', position: 'relative', width: '100%' }}>
                      <img src="/assets/img/ai/dehaze_landscape.png" alt="Dehaze Split Demo" style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }} />
                      <div style={{ position: 'absolute', top: '15px', left: '15px', background: 'rgba(0,0,0,0.7)', color: '#fff', padding: '5px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: '700' }}>RAW (Unusable)</div>
                      <div style={{ position: 'absolute', top: '15px', right: '15px', background: 'rgba(192,0,26,0.9)', color: '#fff', padding: '5px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: '700' }}>ENHANCED</div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div style={{ marginBottom: '15px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                      <span style={{ display: 'inline-block', background: 'rgba(192,0,26,0.1)', color: '#c0001a', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '30px' }}>
                        VISUAL INTELLIGENCE
                      </span>
                      <span style={{ display: 'inline-block', background: 'rgba(192,0,26,0.1)', color: '#c0001a', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '30px' }}>
                        REAL-TIME ENHANCEMENT
                      </span>
                    </div>
                    <h3 className="msl-navy mt-2" style={{ fontSize: '32px', fontWeight: '800' }}>Your Cameras <span style={{ color: '#c0001a' }}>Never Go Blind Again</span></h3>
                    <p style={{ fontSize: '16px', color: '#64748b', lineHeight: '1.6', marginTop: '15px', marginBottom: '30px' }}>
                      Heavy fog, dense snow, and driving rain don't pause operations — your surveillance shouldn't either. Our deep learning dehazing engine restores full visual clarity to compromised feeds in real time, so every frame is actionable, every moment is recorded, and nothing slips through.
                    </p>
                    
                    {/* Comprehensive Restoration moved up here */}
                    <h3 className="msl-navy" style={{ fontSize: '20px', fontWeight: '800', marginBottom: '20px' }}>Comprehensive Restoration</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                      {[
                        { t: 'Deep Learning Filtering', d: 'Restores detail rule-based filters can\'t recover.' },
                        { t: 'Real-Time Processing', d: 'Zero-latency enhancement live on the edge.' },
                        { t: 'Multi-Condition Handling', d: 'Unified model for fog, rain, snow, and glare.' }
                      ].map((cap, i) => (
                        <div key={i} style={{ display: 'flex', gap: '15px', background: '#f8fafc', padding: '15px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                          <i className="bx bx-check-circle" style={{ color: '#c0001a', fontSize: '22px', marginTop: '2px' }}></i>
                          <div>
                            <h5 className="msl-navy" style={{ fontSize: '15px', fontWeight: '800', marginBottom: '3px' }}>{cap.t}</h5>
                            <p style={{ margin: 0, fontSize: '13px', color: '#475569', lineHeight: '1.5' }}>{cap.d}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Section: Pipeline & Use Cases */}
                <div className="row g-5 align-items-stretch mb-4">
                  <div className="col-lg-6">
                    <div style={{ background: '#fff', border: '1px solid #e2e8f0', padding: '40px 30px', borderRadius: '20px', height: '100%' }}>
                      <h3 className="msl-navy" style={{ fontSize: '24px', fontWeight: '800', marginBottom: '30px' }}>The Pipeline</h3>
                      <div style={{ position: 'relative', paddingLeft: '30px' }}>
                        <div style={{ position: 'absolute', left: '11px', top: '10px', bottom: '20px', width: '2px', background: 'linear-gradient(to bottom, #c0001a, rgba(192,0,26,0.1))' }}></div>
                        {[
                          { s: 'Ingest', d: 'Raw camera feeds streamed in real time.' },
                          { s: 'Decompose', d: 'AI separates true scene from noise.' },
                          { s: 'Deliver', d: 'Enhanced video passed to your VMS.' }
                        ].map((step, idx) => (
                          <div key={idx} style={{ position: 'relative', marginBottom: idx === 2 ? 0 : '30px' }}>
                            <div style={{ position: 'absolute', left: '-30px', top: '0', width: '24px', height: '24px', borderRadius: '50%', background: '#c0001a', border: '4px solid #fff', boxShadow: '0 0 0 2px rgba(192,0,26,0.2)' }}></div>
                            <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '18px', marginBottom: '8px' }}>{idx + 1}. {step.s}</h5>
                            <p className="msl-text-body" style={{ fontSize: '15px', lineHeight: '1.6', margin: 0 }}>{step.d}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div style={{ padding: '20px 10px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <h3 className="msl-navy" style={{ fontSize: '24px', fontWeight: '800', marginBottom: '30px' }}>Core Applications</h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        {[
                          { t: 'Traffic Surveillance', d: 'Read licence plates during fog and heavy rain.', i: 'bxs-car' },
                          { t: 'Airport Runways', d: 'Maintain visual coverage of ground movements.', i: 'bxs-plane-alt' },
                          { t: 'Port & Logistics', d: 'Track vehicles through coastal fog.', i: 'bxs-ship' }
                        ].map((uc, idx) => (
                          <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', background: '#fff', border: '1px solid #e2e8f0', borderLeft: '4px solid #c0001a', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
                            <i className={`bx ${uc.i}`} style={{ color: '#c0001a', fontSize: '26px' }}></i>
                            <div>
                              <h6 className="msl-navy" style={{ fontSize: '16px', fontWeight: '800', margin: '0 0 6px 0' }}>{uc.t}</h6>
                              <p style={{ margin: 0, fontSize: '14px', color: '#64748b', lineHeight: '1.5' }}>{uc.d}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              
              {/* Standard CTA */}
              <div className="cta-section">
                <div>
                  <h4 style={{ margin: '0 0 5px 0', fontWeight: '800', fontSize: '22px', color: '#fff' }}>See the Difference Live</h4>
                  <p style={{ margin: 0, color: '#cbd5e1', fontSize: '15px' }}>Upload a sample foggy frame and watch our engine restore it.</p>
                </div>
                <a href="#try" className="cta-btn-hover">Try With Your Footage</a>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================
            PRODUCT 05: Product Defect Detection
        ========================================= */}
        <section id="defect" ref={defectRef} style={{ paddingBottom: '60px' }}>
          <div className="caution-stripe msl-bg-navy" style={{ padding: '60px 0', borderBottom: '4px solid #c0001a', marginBottom: '40px' }}>
            <div className="container text-center position-relative" style={{ zIndex: 1 }}>
              <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '30px', marginBottom: '20px' }}>
                Product 05
              </span>
              <h2 style={{ color: '#fff', fontSize: '36px', fontWeight: '800', marginBottom: '15px' }}>
                Product Defect Detection (Manufacturing)
              </h2>
            </div>
          </div>

          <div className="container" data-aos="fade-up">
            <div className="msl-product-wrapper" style={{ position: 'relative', overflow: 'hidden', padding: '0' }}>
              
              {/* Coming Soon Badge */}
              <div style={{ position: 'absolute', top: '30px', right: '30px', background: 'rgba(192,0,26,0.1)', color: '#c0001a', padding: '8px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '6px', zIndex: 10 }}>
                <i className="bx bx-cog bx-spin"></i> IN DEVELOPMENT
              </div>

              <div className="p-4 p-lg-5">
                {/* Intro Section */}
                <div className="row g-5 align-items-center mb-5">
                  <div className="col-lg-6">
                    <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.1)' }}>
                      <img src="/assets/img/manufacturing_automations/manufacturing_defect_qa.png" alt="Product Defect Detection" style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div style={{ marginBottom: '15px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                      <span style={{ display: 'inline-block', background: 'rgba(192,0,26,0.1)', color: '#c0001a', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '30px' }}>
                        MANUFACTURING INTELLIGENCE
                      </span>
                      <span style={{ display: 'inline-block', background: 'rgba(192,0,26,0.1)', color: '#c0001a', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '30px' }}>
                        COMING SOON
                      </span>
                    </div>
                    <h3 className="msl-navy mt-2" style={{ fontSize: '32px', fontWeight: '800' }}>Zero Defects. <span style={{ color: '#c0001a' }}>Full Speed. No Compromises.</span></h3>
                    <p style={{ fontSize: '16px', color: '#64748b', lineHeight: '1.6', marginTop: '15px', marginBottom: '25px' }}>
                      Manual inspection misses what moves too fast and costs too much to scale. Our computer vision QA system scans every unit on your production line at full conveyor speed — catching micro-defects, surface anomalies, and misalignments in real time, before they become customer problems.
                    </p>
                    
                    <div style={{ background: '#f8fafc', borderRadius: '12px', padding: '25px', borderLeft: '4px solid #c0001a', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                      <i className="bx bxs-quote-alt-left d-none d-md-block" style={{ fontSize: '40px', color: '#e2e8f0', marginTop: '-5px' }}></i>
                      <p style={{ fontSize: '14px', lineHeight: '1.7', color: '#334155', margin: 0, fontWeight: '500' }}>
                        One faulty batch reaching a customer isn't just a quality failure — it's a warranty claim, a recall notice, a damaged supplier relationship, and months of credibility rebuilt from scratch. Human inspectors fatigue, lighting shifts, and fast-moving lines make consistent visual QA impossible at scale. <strong style={{ color: '#0f172a' }}>The question isn't whether defects slip through. It's how many, and at what cost.</strong>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Capabilities Grid */}
                <div className="mb-5">
                  <h3 className="msl-navy" style={{ fontSize: '24px', fontWeight: '800', marginBottom: '25px' }}>Core Capabilities</h3>
                  <div className="row g-4">
                    {[
                      { icon: 'bx-search-alt', t: 'Micro-Defect Scanning', d: 'Spots microscopic scratches, cracks, and anomalies instantly at full production speed.' },
                      { icon: 'bx-tachometer', t: 'High-Speed QA', d: 'Vision models optimized for fast conveyors, ensuring inspection never slows your production.' },
                      { icon: 'bx-ruler', t: 'Misalignment Detection', d: 'Catches dimensional flaws, off-centre parts, and assembly errors before leaving the line.' },
                      { icon: 'bx-error-circle', t: 'Automated Rejection', d: 'Automatically flags and routes defective units for rejection without human intervention.' },
                      { icon: 'bx-line-chart', t: 'Analytics Dashboard', d: 'Logs and visualizes every anomaly, empowering QA managers to trace upstream root causes.' },
                      { icon: 'bx-wrench', t: 'Line-Agnostic Setup', d: 'Seamlessly integrates with your existing cameras and conveyors with zero downtime required.' }
                    ].map((cap, i) => (
                      <div key={i} className="col-md-4">
                        <div style={{ background: '#f8fafc', padding: '25px', borderRadius: '16px', border: '1px solid #e2e8f0', height: '100%', transition: 'all 0.3s ease' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                            <i className={`bx ${cap.icon}`} style={{ color: '#c0001a', fontSize: '28px' }}></i>
                            <h5 className="msl-navy" style={{ fontSize: '16px', fontWeight: '800', margin: 0 }}>{cap.t}</h5>
                          </div>
                          <p style={{ margin: 0, fontSize: '13px', color: '#475569', lineHeight: '1.6' }}>{cap.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* What It Catches & How It Works */}
                <div className="row g-5 align-items-stretch mb-5">
                  <div className="col-lg-6">
                    <div style={{ padding: '30px', borderRadius: '20px', border: '1px solid #e2e8f0', background: '#fff', height: '100%' }}>
                      <h3 className="msl-navy" style={{ fontSize: '24px', fontWeight: '800', marginBottom: '25px' }}>What It Catches</h3>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                        {[
                          'Surface scratches and scuffs', 'Hairline cracks and fractures', 'Pinholes and voids in coatings', 'Label misalignment and print defects',
                          'Component misplacement or absence', 'Dimensional deviation from tolerance', 'Colour inconsistency and contamination', 'Weld seam irregularities'
                        ].map((item, i) => (
                          <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                            <i className="bx bx-check" style={{ color: '#c0001a', fontSize: '20px', marginTop: '1px' }}></i>
                            <span style={{ fontSize: '14px', color: '#334155', fontWeight: '500', lineHeight: '1.4' }}>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div style={{ padding: '30px', borderRadius: '20px', border: '1px solid #e2e8f0', background: '#fff', height: '100%' }}>
                      <h3 className="msl-navy" style={{ fontSize: '24px', fontWeight: '800', marginBottom: '30px' }}>How It Works</h3>
                      <div style={{ position: 'relative', paddingLeft: '30px' }}>
                        <div style={{ position: 'absolute', left: '11px', top: '10px', bottom: '20px', width: '2px', background: 'linear-gradient(to bottom, #c0001a, rgba(192,0,26,0.1))' }}></div>
                        {[
                          { s: 'Capture', d: 'High-res industrial cameras mounted above the conveyor capture every unit at line speed with consistent lighting control.' },
                          { s: 'Inspect', d: 'Computer vision models analyse each frame against a learned baseline of defect-free products, flagging any deviation.' },
                          { s: 'Decide', d: 'Units are classified as pass, review, or reject in milliseconds — triggering automated sorting or alerting line operators.' },
                          { s: 'Learn', d: 'Every flagged defect feeds back into the model, continuously tightening detection accuracy for your specific product and line.' }
                        ].map((step, idx) => (
                          <div key={idx} style={{ position: 'relative', marginBottom: idx === 3 ? 0 : '30px' }}>
                            <div style={{ position: 'absolute', left: '-30px', top: '0', width: '24px', height: '24px', borderRadius: '50%', background: '#c0001a', border: '4px solid #fff', boxShadow: '0 0 0 2px rgba(192,0,26,0.2)' }}></div>
                            <h5 className="msl-navy" style={{ fontWeight: '700', fontSize: '18px', marginBottom: '8px' }}>{idx + 1}. {step.s}</h5>
                            <p className="msl-text-body" style={{ fontSize: '15px', lineHeight: '1.6', margin: 0 }}>{step.d}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* ROI Framing */}
                <div className="mb-5">
                  <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
                    <div className="row g-0">
                      <div className="col-md-6 p-4" style={{ background: '#f8fafc', borderRight: '1px solid #e2e8f0' }}>
                        <h4 style={{ color: '#475569', fontSize: '18px', fontWeight: '700', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <i className="bx bx-x-circle" style={{ color: '#64748b' }}></i> Without AI QA
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                          <li style={{ fontSize: '14px', color: '#64748b' }}>Human inspectors fatigue after 20 mins</li>
                          <li style={{ fontSize: '14px', color: '#64748b' }}>Sampling-based — only X% of units checked</li>
                          <li style={{ fontSize: '14px', color: '#64748b' }}>Defects found at end-of-line or by customers</li>
                          <li style={{ fontSize: '14px', color: '#64748b' }}>No data trail on defect patterns</li>
                          <li style={{ fontSize: '14px', color: '#64748b' }}>Inspection speed caps your line throughput</li>
                        </ul>
                      </div>
                      <div className="col-md-6 p-4" style={{ background: '#fff' }}>
                        <h4 style={{ color: '#c0001a', fontSize: '18px', fontWeight: '800', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <i className="bx bx-check-circle"></i> With AI QA
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                          <li style={{ fontSize: '14px', color: '#0f172a', fontWeight: '600' }}>Consistent accuracy across full shifts</li>
                          <li style={{ fontSize: '14px', color: '#0f172a', fontWeight: '600' }}>100% of units inspected, every cycle</li>
                          <li style={{ fontSize: '14px', color: '#0f172a', fontWeight: '600' }}>Defects caught and rejected at the source</li>
                          <li style={{ fontSize: '14px', color: '#0f172a', fontWeight: '600' }}>Full analytics log for root cause tracing</li>
                          <li style={{ fontSize: '14px', color: '#0f172a', fontWeight: '600' }}>Inspection scales with your line speed</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Industries */}
                <div className="mb-5">
                  <h3 className="msl-navy" style={{ fontSize: '24px', fontWeight: '800', marginBottom: '20px' }}>Industries This Serves</h3>
                  <div className="row g-3">
                    {[
                      { i: 'bx-chip', t: 'Electronics & PCB Manufacturing', d: 'Solder joint inspection, component placement, trace defects' },
                      { i: 'bx-car', t: 'Automotive Parts', d: 'Surface finish, dimensional tolerance, weld integrity' },
                      { i: 'bx-capsule', t: 'Pharmaceuticals & FMCG', d: 'Label accuracy, seal integrity, fill-level verification' },
                      { i: 'bx-package', t: 'Textiles & Packaging', d: 'Weave defects, print misalignment, perforation accuracy' },
                      { i: 'bx-layer', t: 'Metal & Glass Fabrication', d: 'Surface cracks, edge chips, coating uniformity' }
                    ].map((ind, i) => (
                      <div key={i} className="col-lg-4 col-md-6">
                        <div style={{ padding: '15px', border: '1px solid #e2e8f0', borderRadius: '12px', background: '#fff', display: 'flex', alignItems: 'flex-start', gap: '15px', height: '100%' }}>
                          <i className={`bx ${ind.i}`} style={{ color: '#c0001a', fontSize: '24px', marginTop: '2px' }}></i>
                          <div>
                            <h6 style={{ fontSize: '15px', fontWeight: '800', color: '#0f172a', margin: '0 0 5px 0' }}>{ind.t}</h6>
                            <p style={{ margin: 0, fontSize: '12px', color: '#64748b', lineHeight: '1.4' }}>{ind.d}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Coming Soon & Social Proof */}
                <div style={{ background: '#0f172a', borderRadius: '20px', padding: '40px', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: '-50%', left: '-20%', width: '100%', height: '200%', background: 'radial-gradient(circle at 0% 0%, rgba(192,0,26,0.15) 0%, transparent 60%)', pointerEvents: 'none' }}></div>
                  
                  <div className="row align-items-center position-relative" style={{ zIndex: 1 }}>
                    <div className="col-lg-12 mb-4 mb-lg-0">
                      <span style={{ color: '#ff4d6a', fontSize: '12px', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase' }}>Early Access</span>
                      <h3 style={{ color: '#fff', fontSize: '28px', fontWeight: '800', margin: '10px 0 15px' }}>Be First on the Line</h3>
                      <p style={{ color: '#cbd5e1', fontSize: '15px', lineHeight: '1.6', marginBottom: '20px', maxWidth: '800px' }}>
                        Product Defect Detection is currently in active development with select manufacturing partners. Early access clients get priority onboarding, custom model training on their specific product line, and locked-in pilot pricing.
                      </p>
                      
                      <h6 style={{ color: '#fff', fontSize: '14px', fontWeight: '700', marginBottom: '10px' }}>What early access includes:</h6>
                      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 25px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {['Dedicated integration support for your conveyor setup', 'Custom defect taxonomy training on your product catalogue', 'Direct input into feature prioritisation', 'Pilot pricing locked before general availability'].map((item, idx) => (
                          <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#94a3b8', fontSize: '14px' }}>
                            <i className="bx bx-check" style={{ color: '#10b981', fontSize: '18px' }}></i> {item}
                          </li>
                        ))}
                      </ul>
                      
                      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                        <a href="#contact" className="btn btn-danger" style={{ background: '#c0001a', border: 'none', padding: '12px 25px', borderRadius: '8px', fontWeight: '700', fontSize: '14px' }}>Join Waitlist — Get Early Access</a>
                        <a href="#contact" className="btn btn-outline-light" style={{ padding: '12px 25px', borderRadius: '8px', fontWeight: '700', fontSize: '14px' }}>Talk to Our Team</a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>


        {/* =========================================
            CUSTOM ORDERS CTA
        ========================================= */}
        <section id="contact" style={{ padding: '0 0 60px 0' }}>
          <div className="container" data-aos="fade-up">
            <div style={{ background: '#ffffff', padding: '60px 40px', borderRadius: '30px', textAlign: 'center', boxShadow: '0 20px 60px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '80px', background: 'rgba(192,0,26,0.1)', color: '#c0001a', borderRadius: '50%', fontSize: '40px', marginBottom: '20px' }}>
                <i className="bx bx-briefcase-alt-2"></i>
              </div>
              <h3 style={{ color: '#1a2a4a', fontSize: '36px', fontWeight: '800', marginBottom: '20px' }}>
                Can't find what you need? We take Custom Orders.
              </h3>
              <p style={{ color: '#4a5568', maxWidth: '700px', margin: '0 auto 40px', fontSize: '18px', lineHeight: '1.6' }}>
                Our engineering team specializes in building bespoke hardware and software solutions tailored exactly to your unique industrial requirements.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                <a href="/contact" style={{ background: '#c0001a', color: '#fff', padding: '16px 45px', borderRadius: '30px', fontWeight: '800', fontSize: '16px', textDecoration: 'none', transition: 'all 0.3s ease', boxShadow: '0 10px 25px rgba(192,0,26,0.2)' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  Contact Our Experts
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

