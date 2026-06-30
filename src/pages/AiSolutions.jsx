import PageBreadcrumb from '../components/PageBreadcrumb';
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
      {/* Breadcrumb */}
      <PageBreadcrumb productName="AI Solutions" />

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
          <SwiperSlide>
            <div className="slider-redesign">
              <div className="slider-wrap">
                <div className="stage">
                  <div className="card">
                    <div className="card-grid">
                      <div className="text-col">
                        <span className="tag">SECURITY &bull; SURVEILLANCE</span>
                        <h1>High Security<br/><span>Surveillance</span></h1>
                        <p className="subtext">See every threat before it becomes one.</p>
                        <div className="cap-grid">
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-cctv"></i></span><span className="cap-label">Detection</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-radar"></i></span><span className="cap-label">Cross-Check</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-bell"></i></span><span className="cap-label">Early Alerts</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-shield-alt-2"></i></span><span className="cap-label">Threat Analysis</span></div>
                        </div>
                        <div className="cta-row">
                          <a href="#surveillance" onClick={(e) => { e.preventDefault(); surveillanceRef.current?.scrollIntoView({ behavior: 'smooth' }); }} className="btn btn-primary">Explore Solution <i className="bx bx-right-arrow-alt"></i></a>
                        </div>
                      </div>
                      <div className="image-col">
                        <div className="image-panel">
                          <img src="/assets/img/ai/ai_surv.webp" alt="High Security Surveillance" />
                        </div>
                        <div className="spec-chip">
                          <div className="spec-label">Key Differentiator</div>
                          <div className="spec-value">Smarter Than Standard Cameras</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 - Traffic */}
          <SwiperSlide>
            <div className="slider-redesign">
              <div className="slider-wrap">
                <div className="stage">
                  <div className="card">
                    <div className="card-grid">
                      <div className="text-col">
                        <span className="tag">SMART CITY &bull; TRAFFIC</span>
                        <h1>High Traffic<br/><span>Signaling</span></h1>
                        <p className="subtext">Smarter signals for smoother traffic and safer roads.</p>
                        <div className="cap-grid">
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-car"></i></span><span className="cap-label">Live Counting</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-brain"></i></span><span className="cap-label">AI Density</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-wifi"></i></span><span className="cap-label">Wireless Comm.</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-traffic-cone"></i></span><span className="cap-label">Smart Control</span></div>
                        </div>
                        <div className="cta-row">
                          <a href="#traffic" onClick={(e) => { e.preventDefault(); trafficRef.current?.scrollIntoView({ behavior: 'smooth' }); }} className="btn btn-primary">Explore System <i className="bx bx-right-arrow-alt"></i></a>
                        </div>
                      </div>
                      <div className="image-col">
                        <div className="image-panel">
                          <img src="/assets/img/ai/ai_traffic_2.webp" alt="High Traffic Signaling" />
                        </div>
                        <div className="spec-chip">
                          <div className="spec-label">Key Differentiator</div>
                          <div className="spec-value">Beyond Fixed Timers</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 - Tender */}
          <SwiperSlide>
            <div className="slider-redesign">
              <div className="slider-wrap">
                <div className="stage">
                  <div className="card">
                    <div className="card-grid">
                      <div className="text-col">
                        <span className="tag">BUSINESS &bull; TENDER</span>
                        <h1>Tender / Bidding<br/><span>Automation</span></h1>
                        <p className="subtext">Win more tenders and spend less time on paperwork.</p>
                        <div className="cap-grid">
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-upload"></i></span><span className="cap-label">Smart Uploads</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-map-alt"></i></span><span className="cap-label">Mapping</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-server"></i></span><span className="cap-label">On-Premise</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-file"></i></span><span className="cap-label">Auto-Fill</span></div>
                        </div>
                        <div className="cta-row">
                          <a href="#tender" onClick={(e) => { e.preventDefault(); tenderRef.current?.scrollIntoView({ behavior: 'smooth' }); }} className="btn btn-primary">Explore Automation <i className="bx bx-right-arrow-alt"></i></a>
                        </div>
                      </div>
                      <div className="image-col">
                        <div className="image-panel">
                          <img src="/assets/img/defense/ai_tender_2.webp" alt="Tender / Bidding Automation" />
                        </div>
                        <div className="spec-chip">
                          <div className="spec-label">Key Differentiator</div>
                          <div className="spec-value">Focus on Winning, Not Typing</div>
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
            PRODUCT 1: SURVEILLANCE
        ========================================= */}
        <section id="surveillance" ref={surveillanceRef} style={{ background: '#f8fafc', paddingBottom: '0' }}>
          
          <div className="caution-stripe msl-bg-navy" style={{ padding: '60px 0', borderBottom: '4px solid #c0001a', marginBottom: '40px' }}>
            <div className="container text-center position-relative" style={{ zIndex: 1 }}>
              <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '30px', marginBottom: '20px' }}>
                Product 01
              </span>
              <h2 style={{ color: '#fff', fontSize: '36px', fontWeight: '800', marginBottom: '15px' }}>
                AI High Security Surveillance
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '18px', maxWidth: '800px', margin: '0 auto', fontWeight: '300' }}>
                <strong style={{color: '#fff', fontWeight: '600'}}>Identify. Cross-Check. Alert.</strong><br/>
                AI-powered security solution that identifies unauthorized individuals, cross-checks records, and delivers early alerts for rapid action.
              </p>
            </div>
          </div>

          <div className="container" data-aos="fade-up">
            <div className="msl-product-wrapper">
              
              <div style={{ padding: '60px', position: 'relative', zIndex: 1 }}>
                <div className="row g-5 align-items-center mb-5">
                  {/* Left Column: Solution Details */}
                  <div className="col-lg-6">
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', color: '#c0001a', fontSize: '12px', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '30px', background: 'rgba(192,0,26,0.1)', padding: '6px 16px', borderRadius: '20px' }}>
                      <span style={{ width: '6px', height: '6px', background: '#c0001a', borderRadius: '50%' }}></span>
                      PATENT IN PROGRESS
                    </div>
                    
                    <h3 style={{ color: '#1a2a4a', fontSize: '36px', fontWeight: '900', marginBottom: '20px', letterSpacing: '-1px', lineHeight: '1.2' }}>
                      Transform Existing Cameras into AI Sentinels.
                    </h3>
                    <p style={{ color: '#4a5568', fontSize: '16px', lineHeight: '1.7', marginBottom: '30px' }}>
                      Conventional security systems can detect people but lack advanced intelligence. Our solution works with existing cameras using a <strong style={{ color: '#1a2a4a' }}>backend AI edge device</strong> to provide fast decision-making and early warnings.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px', marginBottom: '40px' }}>
                      <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0', borderLeft: '4px solid #64748b', transition: 'all 0.3s ease' }} onMouseOver={(e) => { e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.05)'; e.currentTarget.style.transform = 'translateY(-2px)'; }} onMouseOut={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                        <h5 style={{ color: '#4a5568', fontSize: '16px', fontWeight: '700', marginBottom: '8px' }}><i className="bx bx-error-circle" style={{ color: '#4a5568', marginRight: '8px' }}></i> Market Gaps</h5>
                        <ul style={{ color: '#64748b', fontSize: '14px', margin: 0, paddingLeft: '20px', lineHeight: '1.6' }}>
                          <li>Conventional systems lack fast decision-making intelligence.</li>
                          <li>Struggles to accurately identify unauthorized individuals from past data.</li>
                          <li>Delayed identification reduces response effectiveness in sensitive zones.</li>
                        </ul>
                      </div>
                      <div className="msl-dark-navy-box" style={{ padding: '20px', borderRadius: '16px', borderLeft: '4px solid #c0001a', transition: 'all 0.3s ease' }} onMouseOver={(e) => { e.currentTarget.style.boxShadow = '0 10px 25px rgba(26,42,74,0.3)'; e.currentTarget.style.transform = 'translateY(-2px)'; }} onMouseOut={(e) => { e.currentTarget.style.boxShadow = '0 10px 30px rgba(26,42,74,0.15)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                        <h5 style={{ color: '#fff', fontSize: '16px', fontWeight: '700', marginBottom: '8px' }}><i className="bx bx-check-shield" style={{ color: '#c0001a', marginRight: '8px' }}></i> Our Solution</h5>
                        <ul style={{ color: '#cbd5e1', fontSize: '14px', margin: 0, paddingLeft: '20px', lineHeight: '1.6' }}>
                          <li>Identifies & cross-checks unauthorized individuals instantly.</li>
                          <li>Early alerts triggered when unauthorized persons enter secured zones.</li>
                          <li>Fast search & matching through authorized/unauthorized databases.</li>
                        </ul>
                      </div>
                    </div>

                  </div>

                  {/* Right Column: Image */}
                  <div className="col-lg-6 text-center" style={{ position: 'relative' }}>
                     <div style={{ position: 'relative', zIndex: 1, padding: '10px', background: '#f8fafc', borderRadius: '24px', border: '1px solid #e2e8f0', boxShadow: '0 15px 35px rgba(0,0,0,0.05)', transition: 'all 0.5s ease' }} onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.boxShadow = '0 25px 45px rgba(0,0,0,0.08)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.05)'; }}>
                       <img src="/assets/img/ai/ai_surveillance.webp" alt="AI Surveillance System" style={{ width: '100%', borderRadius: '16px', display: 'block' }} />
                       {/* Subtle animated corners */}
                       <div style={{ position: 'absolute', top: '0', left: '0', width: '20px', height: '20px', borderTop: '2px solid #c0001a', borderLeft: '2px solid #c0001a', borderRadius: '24px 0 0 0' }}></div>
                       <div style={{ position: 'absolute', bottom: '0', right: '0', width: '20px', height: '20px', borderBottom: '2px solid #c0001a', borderRight: '2px solid #c0001a', borderRadius: '0 0 24px 0' }}></div>
                     </div>
                  </div>
                </div>

                {/* Horizontal Pipeline: Operational Workflow */}
                <div className="mt-4 mb-5">
                  <h4 style={{ color: '#1a2a4a', fontSize: '22px', fontWeight: '800', marginBottom: '25px', textAlign: 'center' }}>Operational Workflow</h4>
                  <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
                    
                    {[
                      { step: '01', title: 'Capture', desc: 'Camera captures people in real time.', icon: 'bx-cctv' },
                      { step: '02', title: 'Detect & Track', desc: 'People are detected and tracked across frames.', icon: 'bx-scan' },
                      { step: '03', title: 'AI Recognition', desc: 'Cross-check with authorized & unauthorized DBs.', icon: 'bx-brain' },
                      { step: '04', title: 'Decision & Alert', desc: 'Identify status and generate early alerts.', icon: 'bx-bell' }
                    ].map((item, index) => (
                      <div key={index} style={{ flex: '1 1 200px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '25px 20px', position: 'relative', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.02)', transition: 'transform 0.3s' }} className="hover-scale">
                        <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(192,0,26,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px' }}>
                          <i className={`bx ${item.icon}`} style={{ fontSize: '30px', color: '#c0001a' }}></i>
                        </div>
                        <h6 style={{ color: '#1a2a4a', fontWeight: '800', fontSize: '16px', marginBottom: '8px' }}>{item.step}. {item.title}</h6>
                        <p style={{ color: '#4a5568', fontSize: '13px', margin: 0, lineHeight: '1.5' }}>{item.desc}</p>
                        
                        {index < 3 && (
                          <div className="d-none d-lg-block" style={{ position: 'absolute', right: '-25px', top: '50%', transform: 'translateY(-50%)', zIndex: 2, color: '#cbd5e1' }}>
                            <i className="bx bx-right-arrow-alt" style={{ fontSize: '32px' }}></i>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Section: Key Features & Benefits */}
                <div className="mt-5">
                  <div className="row g-5">
                    {/* Key Features */}
                    <div className="col-12">
                      <div style={{ background: '#f8fafc', padding: '40px', borderRadius: '24px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                        <h4 style={{ color: '#1a2a4a', fontSize: '24px', fontWeight: '800', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <i className="bx bx-star text-danger"></i> Key Features
                        </h4>
                        <div className="row g-4">
                          {[
                            { icon: 'bx-user-pin', title: 'AI-Powered Person Detection', desc: 'Automatically detects and identifies individuals using advanced computer vision.' },
                            { icon: 'bx-face', title: 'Facial Recognition & Identity', desc: 'Matches faces against databases for instant identity verification.' },
                            { icon: 'bx-error-alt', title: 'Instant Security Alerts', desc: 'Immediate notifications when unauthorized persons enter restricted areas.' },
                            { icon: 'bx-cctv', title: 'Works with Existing Cameras', desc: 'Enhances current infrastructure without replacing installed systems.' },
                            { icon: 'bx-chip', title: 'Edge AI Processing', desc: 'Processes video locally on AI edge devices for faster response.' },
                            { icon: 'bx-desktop', title: 'Real-Time Dashboard', desc: 'Centralized monitoring for live surveillance, alerts, and system status.' }
                          ].map((item, idx) => (
                            <div className="col-lg-6" key={idx}>
                              <div style={{ display: 'flex', gap: '15px', background: '#fff', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0', height: '100%', transition: 'all 0.3s' }} className="hover-scale">
                                <div style={{ fontSize: '28px', lineHeight: '1', color: '#1a2a4a' }}><i className={`bx ${item.icon}`}></i></div>
                                <div>
                                  <h6 style={{ color: '#1a2a4a', fontWeight: '700', fontSize: '16px', marginBottom: '8px' }}>{item.title}</h6>
                                  <p style={{ color: '#4a5568', fontSize: '14px', margin: 0, lineHeight: '1.5' }}>{item.desc}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Key Benefits */}
                    <div className="col-12">
                      <div style={{ background: '#1a2a4a', padding: '40px', borderRadius: '24px', boxShadow: '0 15px 40px rgba(26,42,74,0.15)' }}>
                        <h4 style={{ color: '#fff', fontSize: '24px', fontWeight: '800', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <i className="bx bx-line-chart text-success"></i> Key Benefits
                        </h4>
                        <div className="row g-4">
                          {[
                            { icon: 'bx-tachometer', title: 'Faster Threat Detection', desc: 'Identifies potential security threats instantly for rapid response.' },
                            { icon: 'bx-shield-quarter', title: 'Enhanced Security', desc: 'Detects unauthorized individuals before they access restricted areas.' },
                            { icon: 'bx-timer', title: 'Reduced Response Time', desc: 'Immediate alerts enable faster decision-making by security personnel.' },
                            { icon: 'bx-target-lock', title: 'Lower False Alarms', desc: 'AI-driven recognition improves detection accuracy and minimizes unnecessary alerts.' },
                            { icon: 'bx-wallet', title: 'Cost-Effective Upgrade', desc: 'Transforms existing CCTV systems without replacing hardware.' },
                            { icon: 'bx-history', title: 'Comprehensive Audit Trail', desc: 'Maintains searchable records of all detections, alerts, and security events.' }
                          ].map((item, idx) => (
                            <div className="col-lg-6" key={idx}>
                              <div style={{ display: 'flex', gap: '15px', background: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', height: '100%', transition: 'all 0.3s' }} className="hover-scale">
                                <div style={{ fontSize: '28px', lineHeight: '1', color: '#c0001a' }}><i className={`bx ${item.icon}`}></i></div>
                                <div>
                                  <h6 style={{ color: '#fff', fontWeight: '700', fontSize: '16px', marginBottom: '8px' }}>{item.title}</h6>
                                  <p style={{ color: '#cbd5e1', fontSize: '14px', margin: 0, lineHeight: '1.5' }}>{item.desc}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div style={{ background: '#f8fafc', padding: '30px 40px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', marginTop: '40px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                  <div style={{ marginBottom: '15px', flex: '1 1 300px' }}>
                    <h6 style={{ color: '#1a2a4a', fontWeight: '800', fontSize: '18px', marginBottom: '5px' }}>Don't wait for a breach to happen.</h6>
                    <p style={{ fontSize: '14px', color: '#4a5568', margin: 0, fontWeight: '500' }}>Upgrade your security infrastructure instantly with AI-powered surveillance.</p>
                  </div>
                  <div style={{ flex: '0 0 auto' }}>
                    <a href="#contact" style={{ display: 'inline-block', background: '#c0001a', color: '#fff', padding: '14px 30px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none', fontSize: '15px', textTransform: 'uppercase', boxShadow: '0 4px 15px rgba(192,0,26,0.3)', transition: 'all 0.3s' }} className="hover-scale">
                      Request a Demo <i className="bx bx-right-arrow-alt" style={{ verticalAlign: 'middle', fontSize: '20px', marginLeft: '5px' }}></i>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>


        {/* =========================================
            PRODUCT 2: TRAFFIC SIGNALING
        ========================================= */}
        <section id="traffic" ref={trafficRef} style={{ background: '#f8fafc', paddingBottom: '0' }}>
          
          <div className="caution-stripe msl-bg-navy" style={{ padding: '60px 0', borderBottom: '4px solid #c0001a', marginBottom: '40px' }}>
            <div className="container text-center position-relative" style={{ zIndex: 1 }}>
              <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '30px', marginBottom: '20px' }}>
                Product 02
              </span>
              <h2 style={{ color: '#fff', fontSize: '36px', fontWeight: '800', marginBottom: '15px' }}>
                AI High Traffic Signaling System
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '18px', maxWidth: '800px', margin: '0 auto', fontWeight: '300' }}>
                <strong style={{color: '#fff', fontWeight: '600'}}>Signals That Think. Traffic That Moves.</strong><br/>
                AI That Reads Real Traffic — Not Just Timers.
              </p>
            </div>
          </div>

          <div className="container" data-aos="fade-up">
            <div className="msl-product-wrapper">
              
              <div style={{ padding: '60px', position: 'relative', zIndex: 1 }}>
                
                {/* Header & Image Section */}
                <div className="row align-items-center mb-5">
                  {/* Image occupying ~5/8 space (col-lg-7) */}
                  <div className="col-lg-7">
                    <div style={{ position: 'relative', padding: '10px', background: '#f8fafc', borderRadius: '24px', border: '1px solid #e2e8f0', boxShadow: '0 15px 35px rgba(0,0,0,0.05)', transition: 'all 0.5s ease' }} className="hover-scale">
                      <img src="/assets/img/ai/ai_traffic.webp" alt="AI Traffic Detection Screenshot" style={{ width: '100%', borderRadius: '16px', display: 'block' }} />
                      {/* Text overlay removed as requested */}
                    </div>
                  </div>

                  {/* Text occupying remaining space (col-lg-5) */}
                  <div className="col-lg-5">
                    {/* Text directly without background box */}
                    <div style={{ padding: '0 20px' }}>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '25px' }}>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#1a2a4a', fontSize: '11px', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase', background: 'rgba(26,42,74,0.05)', padding: '6px 12px', borderRadius: '8px' }}>
                          <span style={{ width: '6px', height: '6px', background: '#c0001a', borderRadius: '50%' }}></span>
                          Smart Mobility
                        </span>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#1a2a4a', fontSize: '11px', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase', background: 'rgba(26,42,74,0.05)', padding: '6px 12px', borderRadius: '8px' }}>
                          <span style={{ width: '6px', height: '6px', background: '#c0001a', borderRadius: '50%' }}></span>
                          Real-Time Intelligence
                        </span>
                      </div>
                      
                      <h3 style={{ color: '#1a2a4a', fontSize: '42px', fontWeight: '900', marginBottom: '20px', letterSpacing: '-1px', lineHeight: '1.15' }}>
                        Signals That Think.<br/>
                        <span style={{ color: '#c0001a' }}>Traffic That Moves.</span>
                      </h3>
                      
                      <p style={{ color: '#4a5568', fontSize: '16px', lineHeight: '1.7', margin: 0, fontWeight: '500' }}>
                        Traditional traffic systems run on fixed timers — completely blind to what's actually on the road. Our AI-powered signaling system analyses live vehicle density in real time, dynamically controlling signals to cut congestion and reduce wait times.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Market Gaps */}
                <div className="row g-4 mb-5">
                  <div className="col-lg-6">
                    {/* Market Gaps */}
                    <div style={{ background: '#f8fafc', padding: '30px', borderRadius: '16px', border: '1px solid #e2e8f0', borderLeft: '4px solid #64748b', height: '100%', transition: 'all 0.3s ease' }} className="hover-scale">
                      <h5 style={{ color: '#4a5568', fontSize: '18px', fontWeight: '700', marginBottom: '12px' }}><i className="bx bx-error-circle" style={{ color: '#4a5568', marginRight: '8px' }}></i> The Problem with Timers</h5>
                      <ul style={{ color: '#64748b', fontSize: '15px', margin: 0, paddingLeft: '20px', lineHeight: '1.6' }}>
                        <li style={{ marginBottom: '8px' }}>Signals give 90s to an empty lane while 60 vehicles stack up opposite.</li>
                        <li style={{ marginBottom: '8px' }}>Legacy systems operate on blind, pre-programmed schedules.</li>
                        <li>Expensive wired infrastructure overhauls are required for basic updates.</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="col-lg-6">
                    {/* Our Solution */}
                    <div className="msl-dark-navy-box" style={{ background: '#1a2a4a', padding: '30px', borderRadius: '16px', borderLeft: '4px solid #c0001a', height: '100%', boxShadow: '0 10px 30px rgba(192,0,26,0.15)', transition: 'all 0.3s ease' }} className="hover-scale">
                      <h5 style={{ color: '#fff', fontSize: '18px', fontWeight: '800', marginBottom: '12px' }}><i className="bx bx-check-shield" style={{ color: '#ff3b3b', marginRight: '8px' }}></i> Our Solution</h5>
                      <ul style={{ color: '#fff', fontSize: '15px', margin: 0, paddingLeft: '20px', lineHeight: '1.6', fontWeight: '500' }}>
                        <li style={{ marginBottom: '8px' }}>Analyzes live vehicle density across distance zones in real-time.</li>
                        <li style={{ marginBottom: '8px' }}>Dynamically controls signals based on actual traffic conditions.</li>
                        <li>Wireless, cost-effective integration with existing hardware.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Workflow */}
                <div className="mt-4 mb-5">
                  <h4 style={{ color: '#1a2a4a', fontSize: '22px', fontWeight: '800', marginBottom: '25px', textAlign: 'center' }}>Operational Workflow</h4>
                  <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {[
                      { step: '01', title: 'Observe', desc: 'Cameras capture all vehicles across range zones.', icon: 'bx-cctv' },
                      { step: '02', title: 'Analyse', desc: 'Deep learning models count & classify every vehicle.', icon: 'bx-brain' },
                      { step: '03', title: 'Decide', desc: 'Signal phases are calculated dynamically.', icon: 'bx-git-branch' },
                      { step: '04', title: 'Control', desc: 'Decisions transmitted wirelessly instantly.', icon: 'bx-wifi' }
                    ].map((item, index) => (
                      <div key={index} style={{ flex: '1 1 200px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '25px 20px', position: 'relative', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.02)', transition: 'transform 0.3s' }} className="hover-scale">
                        <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(192,0,26,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px' }}>
                          <i className={`bx ${item.icon}`} style={{ fontSize: '30px', color: '#c0001a' }}></i>
                        </div>
                        <h6 style={{ color: '#1a2a4a', fontWeight: '800', fontSize: '16px', marginBottom: '8px' }}>{item.step}. {item.title}</h6>
                        <p style={{ color: '#4a5568', fontSize: '13px', margin: 0, lineHeight: '1.5' }}>{item.desc}</p>
                        
                        {index < 3 && (
                          <div className="d-none d-lg-block" style={{ position: 'absolute', right: '-25px', top: '50%', transform: 'translateY(-50%)', zIndex: 2, color: '#cbd5e1' }}>
                            <i className="bx bx-right-arrow-alt" style={{ fontSize: '32px' }}></i>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Features & Benefits */}
                <div className="mt-5 mb-5">
                  <div className="row g-5">
                    {/* Key Features */}
                    <div className="col-12">
                      <div style={{ background: '#f8fafc', padding: '40px', borderRadius: '24px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                        <h4 style={{ color: '#1a2a4a', fontSize: '24px', fontWeight: '800', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <i className="bx bx-star text-danger"></i> Key Features
                        </h4>
                        <div className="row g-4">
                          {[
                            { icon: 'bx-car', title: 'Real-Time Vehicle Density', desc: 'AI counts and classifies vehicles across defined distance zones in live camera feeds.' },
                            { icon: 'bx-brain', title: 'Custom Deep Learning', desc: 'Models trained specifically for your road geometry, vehicle mix, and traffic patterns.' },
                            { icon: 'bx-wifi', title: 'Wireless Signal Control', desc: 'Decisions made by AI are transmitted wirelessly to signal hardware.' },
                            { icon: 'bx-microchip', title: 'Purpose-Built Hardware', desc: 'End-to-end system with in-house designed controllers and edge devices.' },
                            { icon: 'bx-target-lock', title: 'Zone-Based Counting', desc: 'Distance-segmented vehicle counts prioritize lanes carrying the highest load.' },
                            { icon: 'bx-shield-quarter', title: 'High-Security Support', desc: 'Deployable in restricted campuses and sensitive installations.' }
                          ].map((item, idx) => (
                            <div className="col-lg-6" key={idx}>
                              <div style={{ display: 'flex', gap: '15px', background: '#fff', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0', height: '100%', transition: 'all 0.3s' }} className="hover-scale">
                                <div style={{ fontSize: '28px', lineHeight: '1', color: '#1a2a4a' }}><i className={`bx ${item.icon}`}></i></div>
                                <div>
                                  <h6 style={{ color: '#1a2a4a', fontWeight: '700', fontSize: '16px', marginBottom: '8px' }}>{item.title}</h6>
                                  <p style={{ color: '#4a5568', fontSize: '14px', margin: 0, lineHeight: '1.5' }}>{item.desc}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Key Benefits */}
                    <div className="col-12">
                      <div style={{ background: '#1a2a4a', padding: '40px', borderRadius: '24px', boxShadow: '0 15px 40px rgba(26,42,74,0.15)' }}>
                        <h4 style={{ color: '#fff', fontSize: '24px', fontWeight: '800', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <i className="bx bx-line-chart text-success"></i> Key Benefits
                        </h4>
                        <div className="row g-4">
                          {[
                            { icon: 'bx-timer', title: 'Cuts Congestion & Wait Times', desc: 'Optimizes traffic flow, drastically reducing vehicle idle time at intersections.' },
                            { icon: 'bx-line-chart', title: 'Dynamic Phases', desc: 'Signal timings adjust instantly based on live vehicle counts, not fixed cycles.' },
                            { icon: 'bx-car', title: 'Vehicle Classification', desc: 'Differentiates between cars, buses, and bikes to make weighted decisions.' },
                            { icon: 'bx-refresh', title: 'Continuous Self-Adjustment', desc: 'Automatically adapts to changing peak hours and traffic patterns.' },
                            { icon: 'bx-wallet', title: 'Cost-Effective Integration', desc: 'Eliminates the need for expensive wired infrastructure overhauls.' },
                            { icon: 'bx-street-view', title: 'Replaces Blind Inefficiency', desc: 'Turns passive, pre-programmed signals into intelligent traffic managers.' }
                          ].map((item, idx) => (
                            <div className="col-lg-6" key={idx}>
                              <div style={{ display: 'flex', gap: '15px', background: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', height: '100%', transition: 'all 0.3s' }} className="hover-scale">
                                <div style={{ fontSize: '28px', lineHeight: '1', color: '#c0001a' }}><i className={`bx ${item.icon}`}></i></div>
                                <div>
                                  <h6 style={{ color: '#fff', fontWeight: '700', fontSize: '16px', marginBottom: '8px' }}>{item.title}</h6>
                                  <p style={{ color: '#cbd5e1', fontSize: '14px', margin: 0, lineHeight: '1.5' }}>{item.desc}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Target Applications */}
                <div className="mb-5">
                  <h4 style={{ color: '#1a2a4a', fontSize: '20px', fontWeight: '800', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="bx bx-target-lock" style={{ color: '#c0001a' }}></i> Target Applications
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
                    {[
                      { icon: 'bx-buildings', text: 'Municipal Authorities' },
                      { icon: 'bx-map-alt', text: 'Smart City Programs' },
                      { icon: 'bx-trip', text: 'Highway Operators' },
                      { icon: 'bx-building-house', text: 'Corporate Campuses' },
                      { icon: 'bx-shield', text: 'Defence Installations' },
                      { icon: 'bx-plane-take-off', text: 'Airport Ground Ops' }
                    ].map((aud, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#f8fafc', border: '1px solid #e2e8f0', padding: '16px', borderRadius: '12px', transition: 'all 0.3s' }} className="hover-scale">
                        <i className={`bx ${aud.icon}`} style={{ color: '#1a2a4a', fontSize: '24px' }}></i>
                        <span style={{ color: '#4a5568', fontSize: '15px', fontWeight: '600' }}>{aud.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA */}
                <div style={{ background: '#f8fafc', padding: '30px 40px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                  <div style={{ marginBottom: '15px', flex: '1 1 300px' }}>
                    <h6 style={{ color: '#1a2a4a', fontWeight: '800', fontSize: '18px', marginBottom: '5px' }}>Transform intersections into intelligent zones.</h6>
                    <p style={{ fontSize: '14px', color: '#4a5568', margin: 0, fontWeight: '500' }}>Upgrade to the MSL AI Signaling System and watch your traffic flow.</p>
                  </div>
                  <div style={{ flex: '0 0 auto' }}>
                    <a href="#contact" style={{ display: 'inline-block', background: '#c0001a', color: '#fff', padding: '14px 30px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none', fontSize: '15px', textTransform: 'uppercase', boxShadow: '0 4px 15px rgba(192,0,26,0.3)', transition: 'all 0.3s' }} className="hover-scale">
                      Modernize Your Signals <i className="bx bx-right-arrow-alt" style={{ verticalAlign: 'middle', fontSize: '20px', marginLeft: '5px' }}></i>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>


        {/* =========================================
            PRODUCT 3: AI TENDER SOLUTION
        ========================================= */}
        <section id="tender" ref={tenderRef} style={{ background: '#f8fafc', paddingBottom: '0' }}>
          
          <div className="caution-stripe msl-bg-navy" style={{ padding: '60px 0', borderBottom: '4px solid #c0001a', marginBottom: '40px' }}>
            <div className="container text-center position-relative" style={{ zIndex: 1 }}>
              <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '30px', marginBottom: '20px' }}>
                Product 03
              </span>
              <h2 style={{ color: '#fff', fontSize: '36px', fontWeight: '800', marginBottom: '15px' }}>
                AI Tender & Bidding Solution
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '18px', maxWidth: '800px', margin: '0 auto', fontWeight: '300' }}>
                <strong style={{color: '#fff', fontWeight: '600'}}>Win More Tenders. In a Fraction of the Time.</strong><br/>
                Every tender your team misses or submits incomplete is revenue left on the table.
              </p>
            </div>
          </div>

          <div className="container" data-aos="fade-up">
            <div className="msl-product-wrapper">
              
              <div style={{ padding: '60px', position: 'relative', zIndex: 1 }}>
                
                {/* Header & Image Section */}
                <div className="row align-items-center mb-5">
                  {/* Text occupying left space (col-lg-5) */}
                  <div className="col-lg-5 mb-4 mb-lg-0">
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', color: '#1a2a4a', fontSize: '12px', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px', background: 'rgba(26,42,74,0.05)', padding: '6px 16px', borderRadius: '20px' }}>
                      <span style={{ width: '6px', height: '6px', background: '#c0001a', borderRadius: '50%' }}></span>
                      INTELLIGENT PROCESSING
                    </div>
                    <h3 style={{ color: '#1a2a4a', fontSize: '42px', fontWeight: '900', marginBottom: '20px', letterSpacing: '-1px', lineHeight: '1.2' }}>
                      Win More Tenders.<br />
                      <span style={{ color: '#c0001a' }}>In a Fraction of the Time.</span>
                    </h3>
                    <p style={{ color: '#4a5568', fontSize: '16px', lineHeight: '1.7', fontWeight: '500' }}>
                      Our AI-powered bidding solution reads customer requirement documents, maps them to your product catalogue, and auto-generates proposal drafts — so your team spends time refining winning bids, not manually extracting specs from PDFs.
                    </p>
                  </div>

                  {/* Image occupying right space ~5/8 (col-lg-7) */}
                  <div className="col-lg-7">
                    <div style={{ position: 'relative', transition: 'all 0.5s ease' }} className="hover-scale">
                      <img src="/assets/img/defense/ai_tender.webp" alt="AI Tender Processing Pipeline" style={{ width: '100%', borderRadius: '16px', display: 'block', boxShadow: '0 15px 40px rgba(0,0,0,0.08)', border: '1px solid #e2e8f0' }} />
                    </div>
                  </div>
                </div>

                {/* Problem & Trust Section */}
                <div className="row g-4 mb-5">
                  <div className="col-lg-6">
                    <div style={{ background: '#f8fafc', padding: '35px', borderRadius: '20px', border: '1px solid #e2e8f0', borderLeft: '4px solid #64748b', height: '100%', transition: 'all 0.3s ease' }} className="hover-scale">
                      <h4 style={{ color: '#4a5568', fontSize: '18px', fontWeight: '700', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="bx bx-error-circle" style={{ color: '#64748b', fontSize: '22px' }}></i> The Bidding Bottleneck</h4>
                      <p style={{ color: '#64748b', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>
                        Tender response is one of the most document-heavy, error-prone processes in enterprise sales. A single RFP can run hundreds of pages. Requirements are buried in annexures. Feature mapping is done manually under pressure. Mistakes mean non-compliant bids, and delays mean missed windows.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="msl-dark-navy-box" style={{ background: '#1a2a4a', padding: '35px', borderRadius: '20px', borderLeft: '4px solid #c0001a', height: '100%', boxShadow: '0 10px 30px rgba(192,0,26,0.15)', transition: 'all 0.3s ease' }} className="hover-scale">
                      <h4 style={{ color: '#fff', fontSize: '18px', fontWeight: '800', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}><i className="bx bx-shield-quarter" style={{ color: '#ff3b3b', fontSize: '24px' }}></i> Enterprise Trust & Security</h4>
                      <p style={{ color: '#cbd5e1', fontSize: '15px', lineHeight: '1.6', marginBottom: '20px', fontWeight: '500' }}>
                        Your pricing strategy and product roadmap never leave your building. Our system runs entirely on your on-premise infrastructure. No cloud upload. No third-party access.
                      </p>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {[
                          'On-premise deployment — zero cloud dependency',
                          'Trained exclusively on your own product data',
                          'Human approval gate before every submission',
                          'Full audit trail of every AI decision'
                        ].map((item, idx) => (
                          <li key={idx} style={{ color: '#fff', fontSize: '14px', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <i className="bx bxs-check-circle" style={{ color: '#c0001a', fontSize: '18px' }}></i> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Intelligent Processing Capabilities */}
                <div className="mb-5">
                  <h4 style={{ color: '#1a2a4a', fontSize: '22px', fontWeight: '800', marginBottom: '25px', textAlign: 'center' }}>Capabilities That Scale Your Win Rate</h4>
                  <div className="row g-4">
                    {[
                      { icon: 'bx-brain', title: 'Intelligent Processing', desc: 'Reads incoming RFPs like your best engineer, understanding complex context.' },
                      { icon: 'bx-file-find', title: 'Universal Acceptance', desc: 'Accepts massive PDFs, DOCs, and scattered Annexures via a secure internal portal.' },
                      { icon: 'bx-map-alt', title: 'Automated Extraction', desc: 'Instantly pulls and maps technical specifications to your existing product database.' },
                      { icon: 'bx-edit-alt', title: 'Instant Drafts', desc: 'Auto-generates a complete proposal complete with a granular compliance matrix.' },
                      { icon: 'bx-user-check', title: 'Human-in-the-Loop', desc: 'AI does the heavy lifting; your domain experts make the final strategic calls.' },
                      { icon: 'bx-line-chart', title: 'Continuous Learning', desc: 'Gets smarter with every approved proposal, adapting to your specific writing style.' }
                    ].map((cap, idx) => (
                      <div className="col-lg-4 col-md-6" key={idx}>
                        <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0', height: '100%', transition: 'all 0.3s', display: 'flex', alignItems: 'flex-start', gap: '15px' }} className="hover-scale">
                          <div style={{ width: '48px', height: '48px', minWidth: '48px', borderRadius: '12px', background: 'rgba(192,0,26,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <i className={`bx ${cap.icon}`} style={{ color: '#c0001a', fontSize: '24px' }}></i>
                          </div>
                          <div>
                            <h6 style={{ color: '#1a2a4a', fontSize: '16px', fontWeight: '700', marginBottom: '6px' }}>{cap.title}</h6>
                            <p style={{ color: '#4a5568', fontSize: '14px', margin: 0, lineHeight: '1.5' }}>{cap.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* The End-to-End Pipeline */}
                <div className="mt-5 mb-5">
                  <h4 style={{ color: '#1a2a4a', fontSize: '22px', fontWeight: '800', marginBottom: '30px', textAlign: 'center' }}>The End-to-End Bidding Pipeline</h4>
                  <div style={{ background: '#fff', padding: '40px', borderRadius: '24px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                    <div className="row g-4 align-items-center text-center justify-content-center">
                      <div className="col-md-2 col-6 position-relative">
                        <div style={{ width: '64px', height: '64px', background: '#f8fafc', borderRadius: '50%', margin: '0 auto 15px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #e2e8f0' }}>
                          <i className="bx bx-cloud-upload" style={{ color: '#1a2a4a', fontSize: '28px' }}></i>
                        </div>
                        <h6 style={{ color: '#1a2a4a', fontSize: '14px', fontWeight: '800' }}>Customer Uploads RFP</h6>
                        <p style={{ color: '#4a5568', fontSize: '12px', margin: 0 }}>(PDF / DOC / Annexure)</p>
                      </div>
                      <div className="col-md-1 d-none d-md-flex justify-content-center"><i className="bx bx-right-arrow-alt" style={{ color: '#c0001a', fontSize: '28px' }}></i></div>
                      
                      <div className="col-md-2 col-6 position-relative">
                        <div style={{ width: '64px', height: '64px', background: '#f8fafc', borderRadius: '50%', margin: '0 auto 15px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #e2e8f0' }}>
                          <i className="bx bx-brain" style={{ color: '#1a2a4a', fontSize: '28px' }}></i>
                        </div>
                        <h6 style={{ color: '#1a2a4a', fontSize: '14px', fontWeight: '800' }}>AI Extracts Specs</h6>
                        <p style={{ color: '#4a5568', fontSize: '12px', margin: 0 }}>In Seconds</p>
                      </div>
                      <div className="col-md-1 d-none d-md-flex justify-content-center"><i className="bx bx-right-arrow-alt" style={{ color: '#c0001a', fontSize: '28px' }}></i></div>

                      <div className="col-md-2 col-6 position-relative">
                        <div style={{ width: '64px', height: '64px', background: '#f8fafc', borderRadius: '50%', margin: '0 auto 15px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #e2e8f0' }}>
                          <i className="bx bx-sitemap" style={{ color: '#1a2a4a', fontSize: '28px' }}></i>
                        </div>
                        <h6 style={{ color: '#1a2a4a', fontSize: '14px', fontWeight: '800' }}>Auto-Maps Products</h6>
                        <p style={{ color: '#4a5568', fontSize: '12px', margin: 0 }}>To Your Database</p>
                      </div>
                      <div className="col-md-1 d-none d-md-flex justify-content-center"><i className="bx bx-right-arrow-alt" style={{ color: '#c0001a', fontSize: '28px' }}></i></div>

                      <div className="col-md-2 col-6 position-relative">
                        <div style={{ width: '64px', height: '64px', background: '#f8fafc', borderRadius: '50%', margin: '0 auto 15px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #e2e8f0' }}>
                          <i className="bx bx-file-blank" style={{ color: '#c0001a', fontSize: '28px' }}></i>
                        </div>
                        <h6 style={{ color: '#1a2a4a', fontSize: '14px', fontWeight: '800' }}>Draft Proposal Ready</h6>
                        <p style={{ color: '#4a5568', fontSize: '12px', margin: 0 }}>Human Reviews & Signs Off</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Comparison Table */}
                <div className="row justify-content-center mb-5">
                  <div className="col-lg-12">
                    <div style={{ background: '#f8fafc', borderRadius: '20px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', overflow: 'hidden' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', background: '#1a2a4a', color: '#fff', padding: '20px 30px', fontWeight: '800', fontSize: '18px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><i className="bx bx-time-five" style={{ color: '#cbd5e1', fontSize: '22px' }}></i> The Manual Bottleneck</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><i className="bx bx-check-shield" style={{ color: '#c0001a', fontSize: '22px' }}></i> How Our Product Helps</div>
                      </div>
                      
                      <div style={{ background: '#fff' }}>
                        {[
                          { manual: 'Takes 2–5 days just to extract and organise requirements from a 400-page RFP.', ai: 'Instantly reads and parses the entire document, extracting requirements in minutes.' },
                          { manual: 'Engineers manually cross-reference RFP clauses against spreadsheets to find matching products.', ai: 'Automatically maps every specification directly to your product catalogue with high accuracy.' },
                          { manual: 'Writing proposals from scratch leads to inconsistent messaging across the sales team.', ai: 'Generates a standardised, high-quality draft proposal ensuring relationship context and compliance.' },
                          { manual: 'Crucial compliance clauses are easily missed under tight deadlines.', ai: 'Auto-generates a flawless compliance checklist so experts only need to verify and sign off.' },
                          { manual: 'Response speed is entirely bottlenecked by the team’s manual bandwidth.', ai: 'Empowers your team to scale output and respond to 10x more tenders without hiring more staff.' }
                        ].map((row, idx) => (
                          <div key={idx} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', padding: '20px 30px', borderBottom: idx < 4 ? '1px solid #e2e8f0' : 'none', alignItems: 'center' }}>
                            <div style={{ color: '#64748b', fontSize: '15px', fontWeight: '500', lineHeight: '1.6' }}>{row.manual}</div>
                            <div style={{ color: '#1a2a4a', fontSize: '15px', fontWeight: '700', lineHeight: '1.6', position: 'relative', display: 'flex', gap: '12px' }}>
                              <i className="bx bx-check" style={{ color: '#c0001a', fontSize: '20px', flexShrink: 0, marginTop: '2px' }}></i>
                              <div>{row.ai}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Target Industries & Bottom CTA */}
                <div style={{ background: '#1a2a4a', padding: '40px', borderRadius: '24px', boxShadow: '0 15px 40px rgba(26,42,74,0.15)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '30px' }}>
                  <div style={{ flex: '1 1 400px' }}>
                    <h4 style={{ color: '#fff', fontSize: '20px', fontWeight: '800', marginBottom: '20px' }}>Target Industries</h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                      {[
                        { icon: 'bx-shield', text: 'Defence & Gov' },
                        { icon: 'bx-chip', text: 'Hardware Mfg' },
                        { icon: 'bx-network-chart', text: 'Systems Integrators' },
                        { icon: 'bx-code-block', text: 'IT Vendors' },
                        { icon: 'bx-building', text: 'Infrastructure' }
                      ].map((aud, idx) => (
                        <div key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.05)', padding: '8px 16px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)' }}>
                          <i className={`bx ${aud.icon}`} style={{ color: '#c0001a', fontSize: '16px' }}></i>
                          <span style={{ color: '#cbd5e1', fontSize: '13px', fontWeight: '600' }}>{aud.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div style={{ flex: '0 0 auto' }}>
                    <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px', background: '#c0001a', color: '#fff', padding: '16px 35px', borderRadius: '12px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '15px', textDecoration: 'none', transition: 'all 0.3s ease', boxShadow: '0 8px 25px rgba(192,0,26,0.3)' }} className="hover-scale">
                      Modernize Your Bidding <i className="bx bx-right-arrow-alt" style={{ fontSize: '22px' }}></i>
                    </a>
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

