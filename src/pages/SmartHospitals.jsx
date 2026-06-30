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
  const nurseTabletRef = useRef(null);
  const impressStockRef = useRef(null);

  useEffect(() => {
    if (productId === 'automation' && automationRef.current) {
      automationRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (productId === 'locker' && lockerRef.current) {
      lockerRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (productId === 'asset' && assetRef.current) {
      assetRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (productId === 'nurse-tablet' && nurseTabletRef.current) {
      nurseTabletRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (productId === 'impress-stock' && impressStockRef.current) {
      impressStockRef.current.scrollIntoView({ behavior: 'smooth' });
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
          
          .p4-feature-card {
            background: #fff;
            border-radius: 20px;
            padding: 35px 25px;
            height: 100%;
            display: flex;
            flex-direction: column;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            box-shadow: 0 5px 20px rgba(0,0,0,0.03);
            position: relative;
            z-index: 1;
            border: 1px solid #f1f5f9;
          }
          .p4-feature-card::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            border-radius: 20px;
            background: linear-gradient(135deg, rgba(192,0,26,0.03) 0%, rgba(192,0,26,0) 100%);
            z-index: -1;
            opacity: 0;
            transition: opacity 0.4s ease;
          }
          .p4-feature-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 15px 35px rgba(0,0,0,0.08);
            border-color: transparent;
          }
          .p4-feature-card:hover::before {
            opacity: 1;
          }
          
          .p4-feature-icon {
            width: 60px;
            height: 60px;
            background: #f8fafc;
            color: #1a2a4a;
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 30px;
            margin-bottom: 25px;
            transition: all 0.4s ease;
          }
          .p4-feature-card:hover .p4-feature-icon {
            background: #c0001a;
            color: #fff;
            transform: scale(1.1) rotate(5deg);
          }
          
          .navy-icon {
            background: #1a2a4a !important;
            color: #ffffff !important;
            box-shadow: 0 5px 15px rgba(26,42,74,0.15) !important;
          }
          .p4-feature-card:hover .navy-icon {
            background: #c0001a !important;
            color: #fff !important;
            transform: scale(1.15) translateY(-5px) !important;
            box-shadow: 0 8px 25px rgba(192,0,26,0.25) !important;
          }
          
          .p4-feature-card h5 {
            color: #1a2a4a;
            font-weight: 800;
            font-size: 18px;
            margin-bottom: 15px;
            transition: color 0.3s ease;
          }
          .p4-feature-card:hover h5 {
            color: #c0001a;
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
          
          /* Mini cards for small lists */
          .mini-feature-card {
            background: #f8fafc;
            border-radius: 12px;
            padding: 15px;
            display: flex;
            align-items: center;
            gap: 15px;
            transition: all 0.3s ease;
            border: 1px solid transparent;
          }
          .mini-feature-card:hover {
            background: #fff;
            border-color: #c0001a;
            transform: translateX(5px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          }
          .mini-feature-card:hover i {
            color: #c0001a !important;
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

          .breadcrumb-link {
            color: #a0aec0;
            text-decoration: none;
            transition: color 0.2s;
          }
          .breadcrumb-link:hover {
            color: #ffffff;
          }
          
          .rounded-image-wrapper {
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 15px 40px rgba(0,0,0,0.1);
          }
          .rounded-image-wrapper img {
            width: 100%;
            height: auto;
            display: block;
            transition: transform 0.5s ease;
          }
          .rounded-image-wrapper:hover img {
            transform: scale(1.05);
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
          <SwiperSlide>
            <div className="slider-redesign">
              <div className="slider-wrap">
                <div className="stage">
                  <div className="card">
                    <div className="card-grid">
                      <div className="text-col">
                        <span className="tag">HEALTHCARE &bull; IOT</span>
                        <h1>Hospital IOT<br/><span>Automation</span></h1>
                        <p className="subtext">Smart automation and continuous monitoring.</p>
                        <div className="cap-grid">
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-building-house"></i></span><span className="cap-label">Central Control</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-leaf"></i></span><span className="cap-label">Energy Efficiency</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-bell"></i></span><span className="cap-label">Smart Alerts</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-cog"></i></span><span className="cap-label">Automation</span></div>
                        </div>
                        <div className="cta-row">
                          <a href="#automation" onClick={(e) => { e.preventDefault(); automationRef.current?.scrollIntoView({ behavior: 'smooth' }); }} className="btn btn-primary">Explore Solution <i className="bx bx-right-arrow-alt"></i></a>
                        </div>
                      </div>
                      <div className="image-col">
                        <div className="image-panel">
                          <img src="/assets/img/smart_hospitals/hosp_iot.webp" alt="Smart Hospital IOT" />
                        </div>
                        <div className="spec-chip">
                          <div className="spec-label">Key Differentiator</div>
                          <div className="spec-value">One Dashboard, Every System</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 - AI Locker */}
          <SwiperSlide>
            <div className="slider-redesign">
              <div className="slider-wrap">
                <div className="stage">
                  <div className="card">
                    <div className="card-grid">
                      <div className="text-col">
                        <span className="tag">HEALTHCARE &bull; SECURITY</span>
                        <h1>AI Secured<br/><span>Locker Systems</span></h1>
                        <p className="subtext">Special drug placing and secure dispensing.</p>
                        <div className="cap-grid">
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-fingerprint"></i></span><span className="cap-label">Biometrics</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-box"></i></span><span className="cap-label">Drug Tracking</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-file"></i></span><span className="cap-label">Audit Logs</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-lock-alt"></i></span><span className="cap-label">Security</span></div>
                        </div>
                        <div className="cta-row">
                          <a href="#locker" onClick={(e) => { e.preventDefault(); lockerRef.current?.scrollIntoView({ behavior: 'smooth' }); }} className="btn btn-primary">Explore Solution <i className="bx bx-right-arrow-alt"></i></a>
                        </div>
                      </div>
                      <div className="image-col">
                        <div className="image-panel">
                          <img src="/assets/img/smart_hospitals/hosp_locker.webp" alt="AI Secured Locker" />
                        </div>
                        <div className="spec-chip">
                          <div className="spec-label">Key Differentiator</div>
                          <div className="spec-value">Automated, Audit-Ready Drug Access</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 - Asset Management */}
          <SwiperSlide>
            <div className="slider-redesign">
              <div className="slider-wrap">
                <div className="stage">
                  <div className="card">
                    <div className="card-grid">
                      <div className="text-col">
                        <span className="tag">HEALTHCARE &bull; OPERATIONS</span>
                        <h1>Intelligent<br/><span>Asset Management</span></h1>
                        <p className="subtext">Track and optimize equipment usage in real time.</p>
                        <div className="cap-grid">
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-map"></i></span><span className="cap-label">Tracking</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-bar-chart-alt-2"></i></span><span className="cap-label">Utilization</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-wrench"></i></span><span className="cap-label">Maintenance</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-layer"></i></span><span className="cap-label">Efficiency</span></div>
                        </div>
                        <div className="cta-row">
                          <a href="#asset" onClick={(e) => { e.preventDefault(); assetRef.current?.scrollIntoView({ behavior: 'smooth' }); }} className="btn btn-primary">Explore Solution <i className="bx bx-right-arrow-alt"></i></a>
                        </div>
                      </div>
                      <div className="image-col">
                        <div className="image-panel">
                          <img src="/assets/img/manufacturing_automations/hosp_asset.webp" alt="Asset Management" />
                        </div>
                        <div className="spec-chip">
                          <div className="spec-label">Key Differentiator</div>
                          <div className="spec-value">Visibility Across Every Department</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 4 - Nurse Tablet Locker */}
          <SwiperSlide>
            <div className="slider-redesign">
              <div className="slider-wrap">
                <div className="stage">
                  <div className="card">
                    <div className="card-grid">
                      <div className="text-col">
                        <span className="tag">HEALTHCARE &bull; WARD MANAGEMENT</span>
                        <h1>Smart AI Locker<br/><span>for Nurse Tablets</span></h1>
                        <p className="subtext">Secure storage and automated access with AI facial recognition.</p>
                        <div className="cap-grid">
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-scan"></i></span><span className="cap-label">AI Face Auth</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-tablet"></i></span><span className="cap-label">Tablet Storage</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-lock-alt"></i></span><span className="cap-label">Smart Lock</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-cloud-upload"></i></span><span className="cap-label">Cloud Sync</span></div>
                        </div>
                        <div className="cta-row">
                          <a href="#nurse-tablet" onClick={(e) => { e.preventDefault(); nurseTabletRef.current?.scrollIntoView({ behavior: 'smooth' }); }} className="btn btn-primary">Explore Solution <i className="bx bx-right-arrow-alt"></i></a>
                        </div>
                      </div>
                      <div className="image-col">
                        <div className="image-panel">
                          <img src="/assets/img/smart_hospitals/nurse_tablet_locker_slider.webp" alt="Smart AI Locker for Nurse Tablets" />
                        </div>
                        <div className="spec-chip">
                          <div className="spec-label">Key Feature</div>
                          <div className="spec-value">Ward-Level Secure Management</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 5 - Impress Stock AI Medicine */}
          <SwiperSlide>
            <div className="slider-redesign">
              <div className="slider-wrap">
                <div className="stage">
                  <div className="card">
                    <div className="card-grid">
                      <div className="text-col">
                        <span className="tag">HEALTHCARE &bull; MEDICINE ACCESS</span>
                        <h1>Impress Stock<br/><span>AI Enabled Medicine</span></h1>
                        <p className="subtext">Smart, secure, and automated medicine refrigerator with RFID and AI face recognition.</p>
                        <div className="cap-grid">
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-scan"></i></span><span className="cap-label">AI Face Auth</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-broadcast"></i></span><span className="cap-label">RFID Sensing</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-lock-alt"></i></span><span className="cap-label">Auto Lock</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-cloud-upload"></i></span><span className="cap-label">Live Sync</span></div>
                        </div>
                        <div className="cta-row">
                          <a href="#impress-stock" onClick={(e) => { e.preventDefault(); impressStockRef.current?.scrollIntoView({ behavior: 'smooth' }); }} className="btn btn-primary">Explore Solution <i className="bx bx-right-arrow-alt"></i></a>
                        </div>
                      </div>
                      <div className="image-col">
                        <div className="image-panel">
                          <img src="/assets/img/smart_hospitals/impress_stock_slider.webp" alt="Impress Stock - AI Enabled Medicine Access" />
                        </div>
                        <div className="spec-chip">
                          <div className="spec-label">Key Feature</div>
                          <div className="spec-value">Real-Time Inventory</div>
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
          
          {/* =========================================
              PRODUCT 1: Smart Hospital IoT Automation & Monitoring System
          ========================================= */}
          <section id="automation" ref={automationRef} style={{ background: '#f8fafc', paddingBottom: '20px' }}>
            <div className="caution-stripe msl-bg-navy" style={{ padding: '60px 0', borderBottom: '4px solid #c0001a', marginBottom: '40px' }}>
              <div className="container text-center position-relative" style={{ zIndex: 1 }}>
                <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '30px', marginBottom: '20px' }}>
                  product 01
                </span>
                <h2 style={{ color: '#fff', fontSize: '36px', fontWeight: '800', marginBottom: '15px' }}>
                  Intelligent Connected Healthcare Infrastructure
                </h2>
                <p style={{ color: '#cbd5e1', fontSize: '18px', maxWidth: '800px', margin: '0 auto', fontWeight: '300' }}>
                  <strong style={{color: '#fff', fontWeight: '600'}}>Real-Time Machinery & Infrastructure Tracking.</strong><br/>
                  For Real-Time Equipment Monitoring, Predictive Maintenance & Asset Management.
                </p>
              </div>
            </div>

            <div className="container">
              <div className="msl-product-wrapper" data-aos="fade-up">
                
                {/* Product Overview & Solution */}
                <div style={{ padding: '40px 60px 20px' }}>
                  <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                      <span style={{ display: 'inline-block', background: 'rgba(192,0,26,0.1)', color: '#c0001a', fontSize: '12px', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase', padding: '5px 12px', borderRadius: '20px', marginBottom: '15px' }}>
                        Proactive Monitoring
                      </span>
                      <h3 className="msl-navy" style={{ fontSize: '32px', fontWeight: '800', marginBottom: '20px', lineHeight: '1.3' }}>
                        Stop Reacting to Equipment Failures. <span style={{color: '#c0001a'}}>Start Predicting Them.</span>
                      </h3>
                      
                      <p className="msl-text-body" style={{ fontSize: '15px', lineHeight: '1.6', marginBottom: '25px' }}>
                        Modern hospitals rely on hundreds of interconnected medical devices and critical facility systems. When these fail unexpectedly, the consequences extend beyond repair costs—directly impacting patient care and safety.
                      </p>

                      {/* 3 Core Challenges */}
                      <div className="mb-4">
                        <p className="msl-text-body" style={{ fontWeight: '700', fontSize: '14px', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>The Challenges We Solve</p>
                        <ul className="msl-text-body" style={{ paddingLeft: '20px', listStyleType: 'disc', fontSize: '14px', lineHeight: '1.5' }}>
                          <li style={{ marginBottom: '8px' }}><strong>Unexpected Downtime:</strong> Critical machines failing disrupts operations.</li>
                          <li style={{ marginBottom: '8px' }}><strong>Fragmented Data:</strong> Manual checks and isolated systems prevent unified tracking.</li>
                          <li style={{ marginBottom: '8px' }}><strong>Reactive Repairs:</strong> Waiting for failures increases maintenance costs.</li>
                        </ul>
                      </div>

                      {/* Our Solution */}
                      <div style={{ background: '#1a2a4a', borderRadius: '16px', padding: '30px', color: '#fff', boxShadow: '0 15px 35px rgba(26,42,74,0.15)' }}>
                        <h4 style={{ color: '#fff', fontSize: '20px', fontWeight: '800', marginBottom: '15px' }}>Our Solution</h4>
                        <p style={{ color: '#cbd5e1', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>
                          We unify your medical equipment, facility infrastructure, and environmental sensors into a single intelligent platform. By continuously collecting operational data and applying AI analytics, we detect anomalies early and alert your maintenance teams <strong>before</strong> critical issues arise.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="rounded-image-wrapper">
                        <img src="/assets/img/smart_hospitals/iot_hospital_hero.webp" alt="Smart Hospital Ecosystem" style={{ width: '100%', borderRadius: '24px' }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Target Applications (Logo Points) */}
                <div style={{ padding: '20px 60px 60px' }}>
                  <div style={{ background: '#f8fafc', padding: '50px 60px', borderRadius: '24px', border: '1px solid #e2e8f0' }}>
                    <div className="text-center mb-4">
                      <h3 className="msl-navy" style={{ fontSize: '24px', fontWeight: '800' }}>Comprehensive Facility Coverage</h3>
                      <p className="msl-text-body">Monitoring every critical asset across your hospital departments.</p>
                    </div>
                    <div className="d-flex flex-wrap justify-content-center gap-3">
                      {[
                        { icon: 'bx-bed', title: 'ICU & Ventilators' },
                        { icon: 'bx-wind', title: 'Oxygen Plants' },
                        { icon: 'bx-shield-plus', title: 'Operation Theatres' },
                        { icon: 'bx-barcode-reader', title: 'Biomedical Equipment' },
                        { icon: 'bx-heart', title: 'Patient Devices' },
                        { icon: 'bx-test-tube', title: 'Vaccine & Blood Banks' },
                        { icon: 'bx-plug', title: 'Power Backup & UPS' },
                        { icon: 'bx-buildings', title: 'HVAC & Environment' },
                        { icon: 'bx-car', title: 'Ambulances' },
                        { icon: 'bx-pie-chart-alt', title: 'Asset Utilization' },
                        { icon: 'bx-wrench', title: 'Service Alerts' },
                        { icon: 'bx-bolt-circle', title: 'Energy Monitoring' },
                      ].map((app, idx) => (
                        <div key={idx} style={{ background: '#fff', border: '1px solid #cbd5e1', borderRadius: '50px', padding: '10px 20px', display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                          <i className={`bx ${app.icon}`} style={{ fontSize: '20px', color: '#c0001a' }}></i>
                          <span style={{ fontSize: '14px', fontWeight: '700', color: '#1a2a4a' }}>{app.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

            {/* Zone 3: CT & MRI Deep Dive */}
            <div style={{ padding: '0 60px 60px' }}>
              <div className="text-center mb-5">
                <span style={{ display: 'inline-block', background: 'rgba(26,42,74,0.1)', color: '#1a2a4a', fontSize: '12px', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase', padding: '5px 12px', borderRadius: '20px', marginBottom: '15px' }}>
                  Deep Dive
                </span>
                <h3 className="msl-navy" style={{ fontSize: '28px', fontWeight: '800' }}>
                  CT & MRI Performance Monitoring
                </h3>
                <p className="msl-text-body" style={{ maxWidth: '700px', margin: '0 auto' }}>
                  The system continuously monitors advanced diagnostic equipment to maximize uptime and operational efficiency.
                </p>
              </div>

              <div className="row g-4">
                {/* CT Scan Card */}
                <div className="col-lg-6">
                  <div style={{ background: '#f8fafc', borderRadius: '24px', padding: '40px', border: '1px solid #e2e8f0', height: '100%' }}>
                    <div className="d-flex align-items-center mb-4">
                      <div style={{ width: '50px', height: '50px', background: 'rgba(192,0,26,0.1)', color: '#c0001a', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginRight: '15px' }}>
                        <i className="bx bx-scan"></i>
                      </div>
                      <h4 className="msl-navy" style={{ fontSize: '22px', fontWeight: '800', margin: 0 }}>CT Scan Monitoring</h4>
                    </div>
                    <ul style={{ paddingLeft: '0', listStyle: 'none', margin: 0 }}>
                      {[
                        'Real-Time Performance Monitoring',
                        'Cooling System Monitoring',
                        'Temperature & Vibration Analysis',
                        'Equipment Health Diagnostics',
                        'Utilization Tracking'
                      ].map((feature, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '12px' }}>
                          <i className="bx bx-check" style={{ color: '#c0001a', fontSize: '20px', marginRight: '10px' }}></i>
                          <span style={{ color: '#4a5568', fontSize: '15px', fontWeight: '500' }}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* MRI Scan Card */}
                <div className="col-lg-6">
                  <div style={{ background: '#f8fafc', borderRadius: '24px', padding: '40px', border: '1px solid #e2e8f0', height: '100%' }}>
                    <div className="d-flex align-items-center mb-4">
                      <div style={{ width: '50px', height: '50px', background: 'rgba(26,42,74,0.1)', color: '#1a2a4a', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginRight: '15px' }}>
                        <i className="bx bx-magnet"></i>
                      </div>
                      <h4 className="msl-navy" style={{ fontSize: '22px', fontWeight: '800', margin: '0' }}>MRI Scan Monitoring</h4>
                    </div>
                    <ul style={{ paddingLeft: '0', listStyle: 'none', margin: 0 }}>
                      {[
                        'Error Code & Fault Detection',
                        'Predictive Maintenance Alerts',
                        'Preventive Service Scheduling',
                        'Patient Safety Assurance',
                        'Liquid Helium Level Tracking'
                      ].map((feature, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '12px' }}>
                          <i className="bx bx-check" style={{ color: '#1a2a4a', fontSize: '20px', marginRight: '10px' }}></i>
                          <span style={{ color: '#4a5568', fontSize: '15px', fontWeight: '500' }}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Zone 4: Architecture & Flow */}
            <div style={{ padding: '0 60px 40px' }}>
              <div className="row g-5 align-items-center">
                <div className="col-lg-6">
                  <h3 className="msl-navy" style={{ fontSize: '28px', fontWeight: '800', marginBottom: '20px' }}>System Architecture</h3>
                  <p className="msl-text-body" style={{ marginBottom: '30px' }}>Our robust scalable IoT architecture handles hospital-wide data securely.</p>
                  
                  <div className="d-flex flex-column align-items-center gap-2" style={{ background: '#f8fafc', padding: '30px', borderRadius: '24px', border: '1px solid #e2e8f0' }}>
                    
                    {/* Box 1 */}
                    <div className="p4-feature-card text-center w-100" style={{ padding: '15px 20px', boxShadow: '0 5px 15px rgba(0,0,0,0.02)' }}>
                      <h5 style={{ margin: '0 0 5px 0', fontSize: '15px' }}>1. Equipment (IoT Sensor Nodes)</h5>
                      <p style={{ margin: 0, fontSize: '13px', color: '#4a5568', lineHeight: '1.4' }}>
                        Nodes installed on medical equipment collect operational data, temperature, power, and environmental parameters.
                      </p>
                    </div>

                    <i className="bx bx-down-arrow-alt" style={{ fontSize: '24px', color: '#c0001a' }}></i>

                    {/* Box 2 */}
                    <div className="p4-feature-card text-center w-100" style={{ padding: '15px 20px', boxShadow: '0 5px 15px rgba(0,0,0,0.02)' }}>
                      <h5 style={{ margin: '0 0 5px 0', fontSize: '15px' }}>2. The Organizer (IoT Gateway & Repeaters)</h5>
                      <p style={{ margin: 0, fontSize: '13px', color: '#4a5568', lineHeight: '1.4' }}>
                        Acts as the central hub collecting sensor data, validating information, and forwarding securely.
                      </p>
                    </div>

                    <i className="bx bx-down-arrow-alt" style={{ fontSize: '24px', color: '#c0001a' }}></i>

                    {/* Box 3 */}
                    <div className="p4-feature-card text-center w-100" style={{ padding: '15px 20px', boxShadow: '0 5px 15px rgba(0,0,0,0.02)' }}>
                      <h5 style={{ margin: '0 0 5px 0', fontSize: '15px' }}>3. Cloud Server (Local / Cloud)</h5>
                      <p style={{ margin: 0, fontSize: '13px', color: '#4a5568', lineHeight: '1.4' }}>
                        Data is analyzed using AI algorithms for predictive maintenance, health analytics, and trend reports.
                      </p>
                    </div>

                    <i className="bx bx-down-arrow-alt" style={{ fontSize: '24px', color: '#c0001a' }}></i>

                    {/* Box 4 */}
                    <div className="p4-feature-card text-center w-100" style={{ padding: '15px 20px', boxShadow: '0 5px 15px rgba(0,0,0,0.02)' }}>
                      <h5 style={{ margin: '0 0 5px 0', fontSize: '15px' }}>4. Dashboard</h5>
                      <p style={{ margin: 0, fontSize: '13px', color: '#4a5568', lineHeight: '1.4' }}>
                        Centralized interface providing live status, alarm notifications, schedules, and asset locations.
                      </p>
                    </div>

                  </div>
                </div>
                <div className="col-lg-6">
                   <div className="rounded-image-wrapper">
                      <img src="/assets/img/smart_hospitals/hospital_dashboard.webp" alt="Hospital Dashboard Architecture" />
                   </div>
                </div>
              </div>
            </div>

            {/* Zone 5: Key Benefits */}
            <div style={{ padding: '0 60px 40px' }}>
               <h3 className="msl-navy text-center" style={{ fontSize: '28px', fontWeight: '800', marginBottom: '40px' }}>Key Benefits</h3>
               <div className="row g-4">
                 {[
                   { title: 'Improved Patient Safety', desc: 'Ensure continuous availability of critical equipment supporting patient care.', icon: 'bx-shield-plus' },
                   { title: 'Reduced Downtime', desc: 'Detect faults early and perform preventive maintenance before failures.', icon: 'bx-time-five' },
                   { title: 'Lower Maintenance Costs', desc: 'Optimize schedules and reduce emergency repair expenses.', icon: 'bx-trending-down' },
                   { title: 'Better Asset Utilization', desc: 'Improve visibility and tracking, reducing equipment loss.', icon: 'bx-bar-chart-alt-2' },
                   { title: 'Regulatory Compliance', desc: 'Maintain accurate operational records and environmental logs.', icon: 'bx-check-shield' },
                   { title: 'Operational Efficiency', desc: 'Automate monitoring, allowing staff to focus on patient care.', icon: 'bx-cog' },
                   { title: 'Faster Decision-Making', desc: 'Access real-time operational insights for facility management.', icon: 'bx-brain' },
                   { title: 'Scalable Infrastructure', desc: 'Expand across departments or campuses without redesigning.', icon: 'bx-network-chart' }
                 ].map((benefit, i) => (
                   <div className="col-md-3 col-sm-6" key={i}>
                     <div className="p4-feature-card text-center" style={{ padding: '25px 15px', height: '100%', border: '1px solid #e2e8f0', borderRadius: '16px', background: '#fff' }}>
                       <div className="p4-feature-icon navy-icon" style={{ width: '45px', height: '45px', margin: '0 auto 15px', fontSize: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                         <i className={`bx ${benefit.icon}`}></i>
                       </div>
                       <h6 style={{ fontSize: '15px', fontWeight: '800', color: '#1a2a4a', marginBottom: '10px' }}>{benefit.title}</h6>
                       <p style={{ fontSize: '13px', color: '#4a5568', margin: 0, lineHeight: '1.4' }}>{benefit.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>

            {/* Bottom CTA */}
            <div className="cta-section">
              <div>
                <h4 style={{ margin: '0 0 10px 0', fontWeight: '800', fontSize: '28px', color: '#fff' }}>Modernize Your Healthcare Operations</h4>
                <p style={{ margin: 0, color: '#cbd5e1', fontSize: '16px', maxWidth: '600px', lineHeight: '1.6' }}>
                  By combining real-time monitoring, predictive maintenance, and AI analytics, we improve reliability, reduce costs, and support data-driven decision-making.
                </p>
              </div>
              <a href="#contact" className="cta-btn-hover">Schedule a Deployment Assessment <i className="bx bx-right-arrow-alt"></i></a>
            </div>
              </div>
            </div>
          </section>


          {/* =========================================
              PRODUCT 2: AI Secured Locker Systems
          ========================================= */}
          <section id="locker" ref={lockerRef} style={{ background: '#f8fafc', paddingBottom: '20px' }}>
            <div className="caution-stripe msl-bg-navy" style={{ padding: '60px 0', borderBottom: '4px solid #c0001a', marginBottom: '40px' }}>
              <div className="container text-center position-relative" style={{ zIndex: 1 }}>
                <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '30px', marginBottom: '20px' }}>
                  Product 02
                </span>
                <h2 style={{ color: '#fff', fontSize: '36px', fontWeight: '800', marginBottom: '15px' }}>
                  AI Secured Locker System for Healthcare
                </h2>
                <p style={{ color: '#cbd5e1', fontSize: '18px', maxWidth: '800px', margin: '0 auto', fontWeight: '300' }}>
                  <strong style={{color: '#fff', fontWeight: '600'}}>Intelligent Drug Storage & Two-Level Authentication.</strong><br/>
                  Secure medical asset management using AI-powered facial recognition.
                </p>
              </div>
            </div>

            <div className="container">
              <div className="msl-product-wrapper" data-aos="fade-up">
                
                {/* Intro & Problems Block */}
                <div style={{ padding: '40px 60px 20px' }}>
                  <div className="row g-5 align-items-center">
                    {/* Left Column - Vertical Image */}
                    <div className="col-lg-5">
                      <div className="rounded-image-wrapper h-100" style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.1)', borderRadius: '24px', overflow: 'hidden', minHeight: '600px' }}>
                        <img src="/assets/img/smart_hospitals/ai_smart_locker_v3.webp" alt="AI Smart Locker System" style={{ width: '100%', height: '100%', minHeight: '600px', objectFit: 'cover', display: 'block' }} />
                      </div>
                    </div>
                
                    {/* Right Column - Content */}
                    <div className="col-lg-7">
                      <div className="d-flex flex-column justify-content-center">
                        <span style={{ display: 'inline-block', background: 'rgba(192,0,26,0.1)', color: '#c0001a', fontSize: '12px', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase', padding: '5px 12px', borderRadius: '20px', marginBottom: '15px', alignSelf: 'flex-start' }}>
                          Secure Storage
                        </span>
                        <h3 className="msl-navy" style={{ fontSize: '32px', fontWeight: '800', marginBottom: '20px', lineHeight: '1.3' }}>
                          Eliminate Unauthorized Access. <span style={{color: '#c0001a'}}>Ensure Complete Accountability.</span>
                        </h3>
                        
                        {/* Industry Challenges */}
                        <div className="mb-4">
                          <p className="msl-text-body" style={{ fontSize: '15px', lineHeight: '1.6', marginBottom: '15px' }}>
                            Hospitals handle controlled medications, high-value medical supplies, and patient records that require strict access control. Traditional lockers with manual keys offer limited visibility and no audit trail. The challenges we face:
                          </p>
                          <ul className="msl-text-body" style={{ paddingLeft: '20px', listStyleType: 'disc', fontSize: '14px', lineHeight: '1.5' }}>
                            <li style={{ marginBottom: '8px' }}><strong>Unauthorized Access:</strong> Traditional lockers cannot prevent credential sharing.</li>
                            <li style={{ marginBottom: '8px' }}><strong>Manual Approvals:</strong> Paper-based tracking slows down critical operations.</li>
                            <li style={{ marginBottom: '8px' }}><strong>Lack of Accountability:</strong> Impossible to track who accessed items and when.</li>
                            <li style={{ marginBottom: '8px' }}><strong>Medication Mismanagement:</strong> Improper storage compromises patient safety.</li>
                          </ul>
                        </div>
                    
                        {/* Our Solution Highlights */}
                        <div style={{ background: '#1a2a4a', borderRadius: '16px', padding: '25px 30px', color: '#fff', boxShadow: '0 15px 35px rgba(26,42,74,0.15)' }}>
                          <h6 style={{ color: '#fff', fontWeight: '800', fontSize: '18px', marginBottom: '15px' }}>Our Intelligent Solution</h6>
                          <p style={{ color: '#cbd5e1', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                            An automated storage platform that combines <strong>AI facial recognition, two-level approval workflows, and electronic locking</strong>. Every transaction is digitally verified and securely logged for complete regulatory compliance.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* System Architecture */}
                <div style={{ padding: '40px 60px 20px' }}>
                  <div className="text-center mb-4">
                    <h3 className="msl-navy" style={{ fontSize: '28px', fontWeight: '800' }}>System Architecture</h3>
                    <p className="msl-text-body">Integrated intelligent hardware and software modules.</p>
                  </div>
                  <div className="row g-4">
                    <div className="col-md-6 col-lg-3">
                      <div className="p4-feature-card h-100" style={{ padding: '25px', textAlign: 'center', borderRadius: '20px' }}>
                        <i className="bx bx-scan" style={{ fontSize: '32px', color: '#c0001a', marginBottom: '15px' }}></i>
                        <h6 style={{ fontSize: '16px', fontWeight: '800', marginBottom: '10px' }}>AI Authentication Module</h6>
                        <p style={{ fontSize: '13px', margin: 0, lineHeight: '1.5' }}>Supports Facial Recognition, Fingerprint, RFID, and PIN authentication.</p>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                      <div className="p4-feature-card h-100" style={{ padding: '25px', textAlign: 'center', borderRadius: '20px' }}>
                        <i className="bx bx-check-double" style={{ fontSize: '32px', color: '#1a2a4a', marginBottom: '15px' }}></i>
                        <h6 style={{ fontSize: '16px', fontWeight: '800', marginBottom: '10px' }}>Two-Level Approval Engine</h6>
                        <p style={{ fontSize: '13px', margin: 0, lineHeight: '1.5' }}>Ensures controlled meds are only accessible after dual authorization.</p>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                      <div className="p4-feature-card h-100" style={{ padding: '25px', textAlign: 'center', borderRadius: '20px' }}>
                        <i className="bx bx-microchip" style={{ fontSize: '32px', color: '#c0001a', marginBottom: '15px' }}></i>
                        <h6 style={{ fontSize: '16px', fontWeight: '800', marginBottom: '10px' }}>Intelligent Locker Controller</h6>
                        <p style={{ fontSize: '13px', margin: 0, lineHeight: '1.5' }}>Manages electronic locks, door status, and tamper detection.</p>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                      <div className="p4-feature-card h-100" style={{ padding: '25px', textAlign: 'center', borderRadius: '20px' }}>
                        <i className="bx bx-list-check" style={{ fontSize: '32px', color: '#1a2a4a', marginBottom: '15px' }}></i>
                        <h6 style={{ fontSize: '16px', fontWeight: '800', marginBottom: '10px' }}>Audit & Notification System</h6>
                        <p style={{ fontSize: '13px', margin: 0, lineHeight: '1.5' }}>Records every transaction and sends real-time security alerts.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Two Level Authentication Workflow */}
                <div style={{ padding: '40px 60px' }}>
                  <div style={{ background: '#f8fafc', borderRadius: '24px', padding: '40px', border: '1px solid #e2e8f0' }}>
                    <div className="text-center mb-5">
                      <span style={{ display: 'inline-block', background: 'rgba(192,0,26,0.1)', color: '#c0001a', fontSize: '12px', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase', padding: '5px 12px', borderRadius: '20px', marginBottom: '15px' }}>
                        Workflow
                      </span>
                      <h3 className="msl-navy" style={{ fontSize: '28px', fontWeight: '800', marginBottom: '15px' }}>
                        Operational Approval Workflow
                      </h3>
                      <p className="msl-text-body" style={{ fontSize: '16px', maxWidth: '600px', margin: '0 auto' }}>
                        A strict, secure flow for accessing controlled medications through digital multi-level authorization.
                      </p>
                    </div>

                    <div className="row g-3 justify-content-center position-relative">
                      {[
                        { step: 1, title: 'Nurse Request', desc: 'User requests access to medical asset.', icon: 'bx-user' },
                        { step: 2, title: 'Level 1 Approval', desc: 'Ward In-Charge reviews request.', icon: 'bx-check-shield' },
                        { step: 3, title: 'Level 2 Approval', desc: 'Department Head finalizes auth.', icon: 'bx-check-double' },
                        { step: 4, title: 'Identity Verify', desc: 'Authorized user completes facial auth.', icon: 'bx-scan' },
                        { step: 5, title: 'System Validation', desc: 'Approvals & identity are matched.', icon: 'bx-shield-quarter' },
                        { step: 6, title: 'Locker Unlocks', desc: 'Designated compartment opens.', icon: 'bx-lock-open-alt' },
                        { step: 7, title: 'Item Retrieved', desc: 'Medication or asset is secured.', icon: 'bx-box' },
                        { step: 8, title: 'Audit Logged', desc: 'Transaction recorded and notified.', icon: 'bx-list-check' },
                      ].map((s, idx) => (
                        <div key={idx} className="col-6 col-md-3 col-xl flex-fill" style={{ zIndex: 1 }}>
                          <div className="p4-feature-card text-center" style={{ padding: '25px 10px', height: '100%', position: 'relative' }}>
                            <div style={{ width: '26px', height: '26px', background: '#1a2a4a', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '12px', position: 'absolute', top: '-13px', left: '50%', transform: 'translateX(-50%)', border: '3px solid #f8fafc', zIndex: 2 }}>
                              {s.step}
                            </div>
                            <div className="p4-feature-icon" style={{ width: '35px', height: '35px', margin: '10px auto 10px', fontSize: '18px' }}>
                              <i className={`bx ${s.icon}`}></i>
                            </div>
                            <h5 style={{ fontSize: '13px', marginBottom: '8px', fontWeight: '800' }}>{s.title}</h5>
                            <p className="msl-text-body" style={{ fontSize: '11px', margin: 0, lineHeight: '1.4' }}>{s.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Applications & Features (Logo Points) */}
                <div style={{ padding: '0px 60px 60px' }}>
                  <div className="text-center mb-4">
                    <h3 className="msl-navy" style={{ fontSize: '24px', fontWeight: '800' }}>Comprehensive Applications & Benefits</h3>
                    <p className="msl-text-body">Securing critical inventory across the entire healthcare ecosystem.</p>
                  </div>
                  <div className="d-flex flex-wrap justify-content-center gap-3">
                    {[
                      { icon: 'bx-plus-medical', title: 'Hospital Pharmacies' },
                      { icon: 'bx-capsule', title: 'Narcotic Drug Storage' },
                      { icon: 'bx-bed', title: 'Intensive Care Units' },
                      { icon: 'bx-test-tube', title: 'Blood & Vaccine Storage' },
                      { icon: 'bx-shield-plus', title: 'Operation Theatres' },
                      { icon: 'bx-building-house', title: 'Emergency Departments' },
                      { icon: 'bx-shield-quarter', title: 'Tamper Detection' },
                      { icon: 'bx-group', title: 'Role-Based Access' },
                      { icon: 'bx-bell', title: 'Instant Security Alerts' },
                      { icon: 'bx-check-double', title: 'Regulatory Compliance' }
                    ].map((app, idx) => (
                      <div key={idx} style={{ background: '#fff', border: '1px solid #cbd5e1', borderRadius: '50px', padding: '10px 20px', display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                        <i className={`bx ${app.icon}`} style={{ fontSize: '20px', color: '#c0001a' }}></i>
                        <span style={{ fontSize: '14px', fontWeight: '700', color: '#1a2a4a' }}>{app.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="cta-section">
                  <div>
                    <h4 style={{ margin: '0 0 5px 0', fontWeight: '800', fontSize: '22px', color: '#fff' }}>Strengthen Your Medication Security</h4>
                    <p style={{ margin: 0, color: '#cbd5e1', fontSize: '15px' }}>Enhance safety, compliance, and efficiency with our AI locker solution.</p>
                  </div>
                  <a href="#contact" className="cta-btn-hover">Request a Demo <i className="bx bx-right-arrow-alt"></i></a>
                </div>
              </div>
            </div>
          </section>

          {/* =========================================
              PRODUCT 3: Intelligent Asset Management
          ========================================= */}
          <section id="asset" ref={assetRef} style={{ background: '#f8fafc', paddingBottom: '20px' }}>
            <div className="caution-stripe msl-bg-navy" style={{ padding: '60px 0', borderBottom: '4px solid #c0001a', marginBottom: '40px' }}>
              <div className="container text-center position-relative" style={{ zIndex: 1 }}>
                <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '30px', marginBottom: '20px' }}>
                  Product 03
                </span>
                <h2 style={{ color: '#fff', fontSize: '36px', fontWeight: '800', marginBottom: '15px' }}>
                  Intelligent Asset Tracking
                </h2>
                <p style={{ color: '#cbd5e1', fontSize: '18px', maxWidth: '800px', margin: '0 auto', fontWeight: '300' }}>
                  <strong style={{color: '#fff', fontWeight: '600'}}>Real-time Indoor Tracking & Utilization.</strong><br/>
                  Never lose critical equipment again. Real-time indoor tracking and monitoring for high-value hospital assets.
                </p>
              </div>
            </div>

            <div className="container">
              <div className="msl-product-wrapper" data-aos="fade-up">
                {/* Intro & Problems Block */}
                <div style={{ padding: '40px 60px 20px' }}>
                  <div className="row g-5 align-items-center">
                    {/* Left Column - Vertical Image */}
                    <div className="col-lg-5">
                      <div className="rounded-image-wrapper h-100" style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.1)', borderRadius: '24px', overflow: 'hidden', minHeight: '600px', display: 'flex' }}>
                        <img src="/assets/img/manufacturing_automations/asset_map.webp" alt="Intelligent Asset Tracking" style={{ width: '100%', height: '100%', minHeight: '600px', objectFit: 'cover', display: 'block' }} />
                      </div>
                    </div>
                
                    {/* Right Column - Content */}
                    <div className="col-lg-7">
                      <div className="d-flex flex-column justify-content-center">
                        <span style={{ display: 'inline-block', background: 'rgba(192,0,26,0.1)', color: '#c0001a', fontSize: '12px', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase', padding: '5px 12px', borderRadius: '20px', marginBottom: '15px', alignSelf: 'flex-start' }}>
                          Real-Time Tracking
                        </span>
                        <h3 className="msl-navy" style={{ fontSize: '32px', fontWeight: '800', marginBottom: '20px', lineHeight: '1.3' }}>
                          Never Lose Critical Equipment. <span style={{color: '#c0001a'}}>Maximize Utilization.</span>
                        </h3>
                        
                        {/* Industry Challenges */}
                        <div className="mb-4">
                          <p className="msl-text-body" style={{ fontSize: '15px', lineHeight: '1.6', marginBottom: '15px' }}>
                            Nurses waste critical minutes every shift searching for IV pumps, wheelchairs, and defibrillators. This leads to equipment hoarding, wasted clinical hours, and unnecessary capital expenditure. The challenges we face:
                          </p>
                          <ul className="msl-text-body" style={{ paddingLeft: '20px', listStyleType: 'disc', fontSize: '14px', lineHeight: '1.5' }}>
                            <li style={{ marginBottom: '8px' }}><strong>Wasted Nursing Hours:</strong> High-value clinical time spent searching for assets.</li>
                            <li style={{ marginBottom: '8px' }}><strong>Equipment Hoarding:</strong> Staff hiding equipment for future shifts to avoid shortages.</li>
                            <li style={{ marginBottom: '8px' }}><strong>Excess Purchases:</strong> Buying new equipment when existing assets are underutilized.</li>
                            <li style={{ marginBottom: '8px' }}><strong>Missed Maintenance:</strong> Inability to locate devices for scheduled preventive service.</li>
                          </ul>
                        </div>
                    
                        {/* Our Solution Highlights */}
                        <div style={{ background: '#1a2a4a', borderRadius: '16px', padding: '25px 30px', color: '#fff', boxShadow: '0 15px 35px rgba(26,42,74,0.15)' }}>
                          <h6 style={{ color: '#fff', fontWeight: '800', fontSize: '18px', marginBottom: '15px' }}>Our Intelligent Solution</h6>
                          <p style={{ color: '#cbd5e1', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                            An active indoor positioning system powered by <strong>BLE and RFID tags, precise indoor gateways, and predictive analytics</strong>. Instantly locate any tagged asset across the hospital floor map in real time.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* System Architecture */}
                <div style={{ padding: '40px 60px 20px' }}>
                  <div className="text-center mb-4">
                    <h3 className="msl-navy" style={{ fontSize: '28px', fontWeight: '800' }}>System Architecture</h3>
                    <p className="msl-text-body">A scalable, hospital-wide IoT infrastructure.</p>
                  </div>
                  <div className="row g-4">
                    <div className="col-md-6 col-lg-3">
                      <div className="p4-feature-card h-100" style={{ padding: '25px', textAlign: 'center', borderRadius: '20px' }}>
                        <i className="bx bx-purchase-tag" style={{ fontSize: '32px', color: '#c0001a', marginBottom: '15px' }}></i>
                        <h6 style={{ fontSize: '16px', fontWeight: '800', marginBottom: '10px' }}>Active Smart Tags</h6>
                        <p style={{ fontSize: '13px', margin: 0, lineHeight: '1.5' }}>Long-battery BLE/RFID beacons securely attached to mobile assets.</p>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                      <div className="p4-feature-card h-100" style={{ padding: '25px', textAlign: 'center', borderRadius: '20px' }}>
                        <i className="bx bx-wifi" style={{ fontSize: '32px', color: '#1a2a4a', marginBottom: '15px' }}></i>
                        <h6 style={{ fontSize: '16px', fontWeight: '800', marginBottom: '10px' }}>Indoor Gateways</h6>
                        <p style={{ fontSize: '13px', margin: 0, lineHeight: '1.5' }}>Ceiling-mounted receivers mapping the hospital layout for precise positioning.</p>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                      <div className="p4-feature-card h-100" style={{ padding: '25px', textAlign: 'center', borderRadius: '20px' }}>
                        <i className="bx bx-bar-chart-alt-2" style={{ fontSize: '32px', color: '#c0001a', marginBottom: '15px' }}></i>
                        <h6 style={{ fontSize: '16px', fontWeight: '800', marginBottom: '10px' }}>Cloud Analytics Engine</h6>
                        <p style={{ fontSize: '13px', margin: 0, lineHeight: '1.5' }}>Processes location data to generate utilization and movement reports.</p>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                      <div className="p4-feature-card h-100" style={{ padding: '25px', textAlign: 'center', borderRadius: '20px' }}>
                        <i className="bx bx-mobile-alt" style={{ fontSize: '32px', color: '#1a2a4a', marginBottom: '15px' }}></i>
                        <h6 style={{ fontSize: '16px', fontWeight: '800', marginBottom: '10px' }}>Staff Mobile App</h6>
                        <p style={{ fontSize: '13px', margin: 0, lineHeight: '1.5' }}>Provides live search, turn-by-turn routing, and status updates.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Workflow section */}
                <div style={{ padding: '40px 60px' }}>
                  <div style={{ background: '#f8fafc', borderRadius: '24px', padding: '40px', border: '1px solid #e2e8f0' }}>
                    <div className="text-center mb-5">
                      <span style={{ display: 'inline-block', background: 'rgba(192,0,26,0.1)', color: '#c0001a', fontSize: '12px', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase', padding: '5px 12px', borderRadius: '20px', marginBottom: '15px' }}>
                        Workflow
                      </span>
                      <h3 className="msl-navy" style={{ fontSize: '28px', fontWeight: '800', marginBottom: '15px' }}>
                        Asset Discovery & Lifecycle Workflow
                      </h3>
                      <p className="msl-text-body" style={{ fontSize: '16px', maxWidth: '600px', margin: '0 auto' }}>
                        From initial tagging to scheduled maintenance, our system fully automates the lifecycle tracking of your medical equipment.
                      </p>
                    </div>

                    <div className="row g-3 justify-content-center position-relative">
                      {[
                        { step: 1, title: 'Tag Deployed', desc: 'Asset fitted with BLE tracking tag.', icon: 'bx-purchase-tag' },
                        { step: 2, title: 'Asset Moved', desc: 'Equipment leaves standard zone.', icon: 'bx-transfer' },
                        { step: 3, title: 'Gateway Scan', desc: 'Indoor network detects movement.', icon: 'bx-radar' },
                        { step: 4, title: 'Location Updated', desc: 'Floor plan map refreshes in real time.', icon: 'bx-map-alt' },
                        { step: 5, title: 'Nurse Searches', desc: 'Staff queries app for nearest pump.', icon: 'bx-search-alt' },
                        { step: 6, title: 'Asset Retrieved', desc: 'Nurse guided directly to the asset.', icon: 'bx-check-circle' },
                        { step: 7, title: 'Usage Logged', desc: 'Analytics engine updates runtime.', icon: 'bx-line-chart' },
                        { step: 8, title: 'Maintenance Alert', desc: 'Engineering notified for PM.', icon: 'bx-wrench' },
                      ].map((s, idx) => (
                        <div key={idx} className="col-6 col-md-3 col-xl flex-fill" style={{ zIndex: 1 }}>
                          <div className="p4-feature-card text-center" style={{ padding: '25px 10px', height: '100%', position: 'relative' }}>
                            <div style={{ width: '26px', height: '26px', background: '#1a2a4a', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '12px', position: 'absolute', top: '-13px', left: '50%', transform: 'translateX(-50%)', border: '3px solid #f8fafc', zIndex: 2 }}>
                              {s.step}
                            </div>
                            <div className="p4-feature-icon" style={{ width: '35px', height: '35px', margin: '10px auto 10px', fontSize: '18px' }}>
                              <i className={`bx ${s.icon}`}></i>
                            </div>
                            <h5 style={{ fontSize: '13px', marginBottom: '8px', fontWeight: '800' }}>{s.title}</h5>
                            <p className="msl-text-body" style={{ fontSize: '11px', margin: 0, lineHeight: '1.4' }}>{s.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Applications & Features (Logo Points) */}
                <div style={{ padding: '0px 60px 60px' }}>
                  <div className="text-center mb-4">
                    <h3 className="msl-navy" style={{ fontSize: '24px', fontWeight: '800' }}>Comprehensive Tracking Use Cases</h3>
                    <p className="msl-text-body">Optimize equipment availability across the entire facility.</p>
                  </div>
                  <div className="d-flex flex-wrap justify-content-center gap-3">
                    {[
                      { icon: 'bx-injection', title: 'IV Pumps' },
                      { icon: 'bx-wheelchair', title: 'Wheelchairs' },
                      { icon: 'bx-pulse', title: 'Defibrillators' },
                      { icon: 'bx-bed', title: 'Patient Beds' },
                      { icon: 'bx-scan', title: 'Portable Ultrasounds' },
                      { icon: 'bx-pie-chart-alt', title: 'Utilization Analytics' },
                      { icon: 'bx-wrench', title: 'Maintenance Sync' },
                      { icon: 'bx-door-open', title: 'Anti-Theft Geofencing' },
                      { icon: 'bx-shield-plus', title: 'Infection Control Routing' }
                    ].map((app, idx) => (
                      <div key={idx} style={{ background: '#fff', border: '1px solid #cbd5e1', borderRadius: '50px', padding: '10px 20px', display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                        <i className={`bx ${app.icon}`} style={{ fontSize: '20px', color: '#c0001a' }}></i>
                        <span style={{ fontSize: '14px', fontWeight: '700', color: '#1a2a4a' }}>{app.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="cta-section">
                  <div>
                    <h4 style={{ margin: '0 0 5px 0', fontWeight: '800', fontSize: '22px', color: '#fff' }}>Optimize Your Asset Utilization</h4>
                    <p style={{ margin: 0, color: '#cbd5e1', fontSize: '15px' }}>Stop wasting time searching. Start tracking with precision.</p>
                  </div>
                  <a href="#contact" className="cta-btn-hover">Explore Tracking Solutions <i className="bx bx-right-arrow-alt"></i></a>
                </div>
              </div>
            </div>
          </section>

          {/* =========================================
              PRODUCT 4: Smart AI Locker for Nurse Tablets
          ========================================= */}
          <section id="nurse-tablet" ref={nurseTabletRef} style={{ background: '#f8fafc', paddingBottom: '20px' }}>
            <div className="caution-stripe msl-bg-navy" style={{ padding: '60px 0', borderBottom: '4px solid #c0001a', marginBottom: '40px' }}>
              <div className="container text-center position-relative" style={{ zIndex: 1 }}>
                <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '30px', marginBottom: '20px' }}>
                  Product 04
                </span>
                <h2 style={{ color: '#fff', fontSize: '36px', fontWeight: '800', marginBottom: '15px' }}>
                  Smart AI Locker for Nurse Tablets
                </h2>
                <p style={{ color: '#cbd5e1', fontSize: '18px', maxWidth: '800px', margin: '0 auto', fontWeight: '300' }}>
                  <strong style={{color: '#fff', fontWeight: '600'}}>Ward-Level Secure Tablet Management System.</strong><br/>
                  Secure storage and automated access of Apollo-issued nurse tablets using AI-based facial recognition and cloud-connected smart lockers.
                </p>
              </div>
            </div>

            <div className="container">
              <div className="msl-product-wrapper" data-aos="fade-up">
                
                {/* Intro & Problems Block */}
                <div style={{ padding: '40px 60px 20px' }}>
                  <div className="row g-5 align-items-center">
                    <div className="col-lg-7">
                      <div className="d-flex flex-column justify-content-center">
                        <span style={{ display: 'inline-block', background: 'rgba(192,0,26,0.1)', color: '#c0001a', fontSize: '12px', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase', padding: '5px 12px', borderRadius: '20px', marginBottom: '15px', alignSelf: 'flex-start' }}>
                          Next-Gen Ward Management
                        </span>
                        <h3 className="msl-navy" style={{ fontSize: '32px', fontWeight: '800', marginBottom: '20px', lineHeight: '1.3' }}>
                          Empower Your Nurses. <span style={{color: '#c0001a'}}>Protect Your Digital Assets.</span>
                        </h3>
                        
                        <div className="mb-4">
                          <p className="msl-text-body" style={{ fontSize: '15px', lineHeight: '1.6', marginBottom: '15px' }}>
                            As hospitals transition to digital records, providing nurses with personalized tablets has become essential. However, managing these high-value assets across shifts brings significant operational challenges:
                          </p>
                          <ul className="msl-text-body" style={{ paddingLeft: '20px', listStyleType: 'disc', fontSize: '14px', lineHeight: '1.5' }}>
                            <li style={{ marginBottom: '8px' }}><strong>Asset Misplacement:</strong> Tablets are frequently left at nursing stations, leading to loss or time wasted searching.</li>
                            <li style={{ marginBottom: '8px' }}><strong>Data Security Risks:</strong> Unsecured tablets pose a risk to sensitive patient data if accessed by unauthorized personnel.</li>
                            <li style={{ marginBottom: '8px' }}><strong>Charging Issues:</strong> Tablets are often found uncharged at the start of a shift due to improper storage.</li>
                            <li style={{ marginBottom: '8px' }}><strong>Lack of Accountability:</strong> Tracking which nurse has which tablet requires tedious manual logs.</li>
                          </ul>
                        </div>
                    
                        <div style={{ background: '#1a2a4a', borderRadius: '16px', padding: '25px 30px', color: '#fff', boxShadow: '0 15px 35px rgba(26,42,74,0.15)' }}>
                          <h6 style={{ color: '#fff', fontWeight: '800', fontSize: '18px', marginBottom: '15px' }}>The AI Locker Solution</h6>
                          <p style={{ color: '#cbd5e1', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                            Our Smart AI Locker provides dedicated, secure compartments for each tablet. Integrated charging ports ensure devices are always ready, while <strong>AI-based facial recognition</strong> guarantees instant, frictionless access only to the assigned nurse.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-5">
                      <div className="rounded-image-wrapper h-100" style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.1)', borderRadius: '24px', overflow: 'hidden' }}>
                        <img src="/assets/img/smart_hospitals/nurse_tablet_locker.webp" alt="Smart AI Locker for Nurse Tablets" style={{ width: '100%', height: '100%', minHeight: '400px', objectFit: 'cover', display: 'block' }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Comparison Section */}
                <div style={{ padding: '40px 60px' }}>
                  <div className="text-center mb-5">
                    <h3 className="msl-navy" style={{ fontSize: '28px', fontWeight: '800' }}>Traditional Storage vs. Smart AI Locker</h3>
                    <p className="msl-text-body">How we revolutionize asset management on the ward floor.</p>
                  </div>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div style={{ background: '#fee2e2', borderRadius: '20px', padding: '30px', border: '1px solid #fecaca', height: '100%' }}>
                        <div className="d-flex align-items-center mb-4">
                          <i className="bx bx-x-circle" style={{ fontSize: '28px', color: '#ef4444', marginRight: '15px' }}></i>
                          <h4 style={{ color: '#991b1b', fontSize: '20px', fontWeight: '800', margin: 0 }}>Traditional Storage</h4>
                        </div>
                        <ul style={{ paddingLeft: '0', listStyle: 'none', margin: 0 }}>
                          {[
                            'Kept in open drawers or shared cabinets.',
                            'Manual logbooks for check-in/out.',
                            'Tangled wires and disorganized charging stations.',
                            'High risk of theft or misplacement.',
                            'No clear audit trail of who used the device last.'
                          ].map((item, i) => (
                            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '15px', color: '#7f1d1d', fontSize: '14px', lineHeight: '1.5' }}>
                              <i className="bx bx-minus" style={{ marginTop: '3px', marginRight: '10px' }}></i>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div style={{ background: '#ecfdf5', borderRadius: '20px', padding: '30px', border: '1px solid #a7f3d0', height: '100%', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', top: '-20px', right: '-20px', fontSize: '120px', opacity: '0.05', color: '#059669' }}>
                          <i className="bx bx-shield-check"></i>
                        </div>
                        <div className="d-flex align-items-center mb-4 position-relative" style={{ zIndex: 1 }}>
                          <i className="bx bx-check-circle" style={{ fontSize: '28px', color: '#10b981', marginRight: '15px' }}></i>
                          <h4 style={{ color: '#065f46', fontSize: '20px', fontWeight: '800', margin: 0 }}>Smart AI Locker</h4>
                        </div>
                        <ul style={{ paddingLeft: '0', listStyle: 'none', margin: 0, position: 'relative', zIndex: 1 }}>
                          {[
                            'Individual, electronically secured compartments.',
                            'Automated logs via AI facial recognition.',
                            'Built-in, organized charging in every slot.',
                            'Tamper-proof design with real-time alerts.',
                            '100% digital audit trail sent to the cloud dashboard.'
                          ].map((item, i) => (
                            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '15px', color: '#064e3b', fontSize: '14px', lineHeight: '1.5', fontWeight: '500' }}>
                              <i className="bx bx-check" style={{ marginTop: '2px', marginRight: '10px', fontSize: '18px', color: '#10b981' }}></i>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Features Array */}
                <div style={{ padding: '20px 60px 40px' }}>
                  <div className="text-center mb-5">
                    <h3 className="msl-navy" style={{ fontSize: '28px', fontWeight: '800' }}>Why Hospitals Choose Our System</h3>
                    <p className="msl-text-body">Features designed specifically for high-paced clinical environments.</p>
                  </div>
                  <div className="row g-4">
                    {[
                      { icon: 'bx-scan', title: 'Frictionless Facial Recognition', desc: 'Nurses just walk up and look at the screen. The assigned locker door opens automatically—no cards or keys to lose.' },
                      { icon: 'bx-battery', title: 'Always-On Charging', desc: 'Integrated power management ensures tablets are 100% charged and ready for the next grueling shift.' },
                      { icon: 'bx-shield-quarter', title: 'Infection Control Compliant', desc: 'Touchless authentication means zero cross-contamination. Surfaces are built with medical-grade materials.' },
                      { icon: 'bx-cloud-upload', title: 'Cloud Dashboard Analytics', desc: 'Administrators get real-time visibility into tablet status, utilization rates, and detailed access logs.' },
                      { icon: 'bx-bell-minus', title: 'Automated Reminders', desc: 'The system flags tablets that haven\'t been returned by the end of a shift, sending SMS or email alerts to supervisors.' },
                      { icon: 'bx-lock-open-alt', title: 'Emergency Override', desc: 'Mechanical bypass and IT-remote unlocking capabilities ensure access is never completely blocked during a crisis.' }
                    ].map((feature, i) => (
                      <div className="col-md-4" key={i}>
                        <div style={{ background: '#fff', borderRadius: '20px', padding: '25px 20px', height: '100%', border: '1px solid #e2e8f0', transition: 'all 0.3s ease' }} className="hover-shadow">
                          <div style={{ width: '45px', height: '45px', borderRadius: '12px', background: 'rgba(192,0,26,0.1)', color: '#c0001a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', marginBottom: '15px' }}>
                            <i className={`bx ${feature.icon}`}></i>
                          </div>
                          <h5 style={{ fontSize: '16px', fontWeight: '700', color: '#1a2a4a', marginBottom: '10px' }}>{feature.title}</h5>
                          <p style={{ fontSize: '13px', color: '#4a5568', margin: 0, lineHeight: '1.5' }}>{feature.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Section */}
                <div className="cta-section">
                  <div>
                    <h4 style={{ margin: '0 0 10px 0', fontWeight: '800', fontSize: '28px', color: '#fff', letterSpacing: '-0.5px' }}>Ready to Secure Your Ward's Devices?</h4>
                    <p style={{ margin: 0, color: '#cbd5e1', fontSize: '16px', lineHeight: '1.6' }}>Deploy our Smart AI Locker and eliminate device misplacement forever while ensuring complete accountability and readiness.</p>
                  </div>
                  <a href="#contact" className="cta-btn-hover">
                    Get a Custom Proposal <i className="bx bx-right-arrow-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* =========================================
              PRODUCT 5: Impress Stock - AI Enabled Medicine Access
          ========================================= */}
          <section id="impress-stock" ref={impressStockRef} style={{ background: '#f8fafc', paddingBottom: '20px' }}>
            <div className="caution-stripe msl-bg-navy" style={{ padding: '60px 0', borderBottom: '4px solid #c0001a', marginBottom: '40px' }}>
              <div className="container text-center position-relative" style={{ zIndex: 1 }}>
                <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '30px', marginBottom: '20px' }}>
                  Product 05
                </span>
                <h2 style={{ color: '#fff', fontSize: '36px', fontWeight: '800', marginBottom: '15px' }}>
                  Impress Stock: AI Enabled Medicine Access
                </h2>
                <p style={{ color: '#cbd5e1', fontSize: '18px', maxWidth: '800px', margin: '0 auto', fontWeight: '300' }}>
                  <strong style={{color: '#fff', fontWeight: '600'}}>Smart, Secure, Automated, and Accountable.</strong><br/>
                  Revolutionize common ward medicine management with RFID identification and AI-based facial recognition.
                </p>
              </div>
            </div>

            <div className="container">
              <div className="msl-product-wrapper" data-aos="fade-up">
                
                {/* Intro & Problems Block */}
                <div style={{ padding: '40px 60px 20px' }}>
                  <div className="row g-5 align-items-center">
                    <div className="col-lg-7">
                      <div className="d-flex flex-column justify-content-center">
                        <span style={{ display: 'inline-block', background: 'rgba(192,0,26,0.1)', color: '#c0001a', fontSize: '12px', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase', padding: '5px 12px', borderRadius: '20px', marginBottom: '15px', alignSelf: 'flex-start' }}>
                          Intelligent Medicine Fridge
                        </span>
                        <h3 className="msl-navy" style={{ fontSize: '32px', fontWeight: '800', marginBottom: '20px', lineHeight: '1.3' }}>
                          Eliminate Manual Books. <span style={{color: '#c0001a'}}>Ensure 100% Accountability.</span>
                        </h3>
                        
                        <div className="mb-4">
                          <p className="msl-text-body" style={{ fontSize: '15px', lineHeight: '1.6', marginBottom: '15px' }}>
                            Traditional ward medicine management relies on unsecured refrigerators and manual logbooks, leading to several critical challenges on the hospital floor:
                          </p>
                          <ul className="msl-text-body" style={{ paddingLeft: '20px', listStyleType: 'disc', fontSize: '14px', lineHeight: '1.5' }}>
                            <li style={{ marginBottom: '8px' }}><strong>Slow Medicine Access:</strong> Nurses spend valuable time manually writing down patient records and consumed quantities.</li>
                            <li style={{ marginBottom: '8px' }}><strong>Lack of Accountability:</strong> Manual entries are prone to errors, making it difficult to track exactly who accessed what and when.</li>
                            <li style={{ marginBottom: '8px' }}><strong>Poor Inventory Visibility:</strong> Pharmacy staff lack real-time data on ward stock levels, leading to unexpected shortages.</li>
                            <li style={{ marginBottom: '8px' }}><strong>Security Risks:</strong> Standard locks or open fridges offer no protection against unauthorized access to sensitive medications.</li>
                          </ul>
                        </div>

                        <div style={{ background: '#1a2a4a', borderRadius: '16px', padding: '25px 30px', color: '#fff', boxShadow: '0 15px 35px rgba(26,42,74,0.15)' }}>
                          <h6 style={{ color: '#fff', fontWeight: '800', fontSize: '18px', marginBottom: '15px' }}>The Impress Stock Solution</h6>
                          <p style={{ color: '#cbd5e1', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                            We replace manual logs with an AI-enabled smart refrigerator. <strong>AI facial recognition</strong> instantly authenticates the nurse to auto-unlock the door, while <strong>RFID sensors</strong> automatically detect which medicine boxes are used. The dashboard captures the exact quantity and syncs to the cloud immediately—delivering a 100% accurate, frictionless audit trail.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-5">
                      <div className="rounded-image-wrapper h-100" style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.1)', borderRadius: '24px', overflow: 'hidden' }}>
                        <img src="/assets/img/smart_hospitals/impress_stock.webp" alt="Impress Stock System" style={{ width: '100%', height: '100%', minHeight: '400px', objectFit: 'cover', display: 'block' }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Smart Intelligence / Features Highlights */}
                <div style={{ padding: '0 60px 40px' }}>
                  <div className="text-center mb-5">
                    <h3 className="msl-navy" style={{ fontSize: '28px', fontWeight: '800' }}>Smart Intelligence</h3>
                    <p className="msl-text-body">Advanced capabilities driving the Impress Stock system.</p>
                  </div>
                  <div className="row g-4">
                    {[
                      { icon: 'bx-scan', title: 'Face Recognition', desc: 'AI based secure face recognition for immediate nurse authentication.' },
                      { icon: 'bx-broadcast', title: 'RFID Medicine ID', desc: 'Automatic and accurate identification of medicine boxes without manual scanning.' },
                      { icon: 'bx-lock', title: 'Digital Lock Automation', desc: 'Refrigerator unlocks and locks automatically based on authentication status.' },
                      { icon: 'bx-sync', title: 'Immediate Sync', desc: 'All medicine transactions are updated to the central database in real-time.' }
                    ].map((feature, i) => (
                      <div className="col-md-3 col-sm-6" key={i}>
                        <div className="d-flex align-items-center hover-shadow" style={{ background: '#fff', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0', height: '100%', transition: 'all 0.3s ease' }}>
                          <i className={`bx ${feature.icon}`} style={{ fontSize: '32px', color: '#c0001a', marginRight: '15px' }}></i>
                          <div>
                            <h6 style={{ margin: '0 0 5px 0', fontWeight: '700', color: '#1a2a4a', fontSize: '15px' }}>{feature.title}</h6>
                            <p style={{ margin: 0, fontSize: '12px', color: '#4a5568', lineHeight: '1.4' }}>{feature.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Benefits */}
                <div style={{ padding: '20px 60px 40px' }}>
                  <div className="text-center mb-5">
                    <h3 className="msl-navy" style={{ fontSize: '28px', fontWeight: '800' }}>Benefits to the Hospital</h3>
                    <p className="msl-text-body">How AI Enabled Medicine Access improves overall care delivery.</p>
                  </div>
                  <div className="row g-4 justify-content-center">
                    {[
                      { icon: 'bx-time-five', title: 'Faster Medicine Access', desc: 'Reduces time spent in manual recording, allowing nurses to access critical medicines rapidly.' },
                      { icon: 'bx-user-check', title: 'Reduced Nurse Workload', desc: 'No manual books needed, leading to faster documentation and less administrative burden.' },
                      { icon: 'bx-bar-chart-alt-2', title: 'Real-Time Inventory Visibility', desc: 'Live stock updates provide better decision-making capabilities for pharmacy and ward management.' },
                      { icon: 'bx-shield-quarter', title: 'Improved Accountability', desc: 'Tracks exactly who, when, and what medicine was accessed with a 100% accurate digital audit trail.' },
                      { icon: 'bx-heart', title: 'Better Patient Care', desc: 'Ensures the right medicine is delivered at the right time for the right patient.' }
                    ].map((benefit, i) => (
                      <div className="col-md-4 col-sm-6" key={i}>
                        <div style={{ background: '#f8fafc', borderRadius: '20px', padding: '25px 20px', height: '100%', border: '1px solid #e2e8f0', transition: 'all 0.3s ease' }} className="hover-shadow">
                          <div style={{ width: '45px', height: '45px', borderRadius: '12px', background: 'rgba(192,0,26,0.1)', color: '#c0001a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', marginBottom: '15px' }}>
                            <i className={`bx ${benefit.icon}`}></i>
                          </div>
                          <h5 style={{ fontSize: '16px', fontWeight: '700', color: '#1a2a4a', marginBottom: '10px' }}>{benefit.title}</h5>
                          <p style={{ fontSize: '13px', color: '#4a5568', margin: 0, lineHeight: '1.5' }}>{benefit.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Section */}
                <div className="cta-section">
                  <div>
                    <h4 style={{ margin: '0 0 10px 0', fontWeight: '800', fontSize: '28px', color: '#fff', letterSpacing: '-0.5px' }}>Modernize Your Medicine Dispensary</h4>
                    <p style={{ margin: 0, color: '#cbd5e1', fontSize: '16px', lineHeight: '1.6' }}>Discover how Impress Stock can bring unparalleled accountability, speed, and security to your hospital wards.</p>
                  </div>
                  <a href="#contact" className="cta-btn-hover">
                    Schedule a Demo <i className="bx bx-right-arrow-alt"></i>
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


