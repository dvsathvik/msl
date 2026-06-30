import PageBreadcrumb from '../components/PageBreadcrumb';
import React, { useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import t90SliderImg from '../assets/slider/defence/tanks.webp';
import g3000SliderImg from '../assets/slider/defence/cockpit.webp';
import lockerSliderImg from '../assets/slider/defence/smart_locker_defense.webp';
import streamingSliderImg from '../assets/slider/defence/secure_comm.webp';
import socSliderImg from '../assets/slider/defence/soc_modernization.png';
import aiZoneSliderImg from '../assets/slider/defence/ai_zone.png';

const Defense = () => {
  const { productId } = useParams();

  // Refs for scrolling
  const t90Ref = useRef(null);
  const g3000Ref = useRef(null);
  const lockerRef = useRef(null);
  const videoRef = useRef(null);
  const socModernizationRef = useRef(null);
  const aiSecurityRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (productId === 't90' && t90Ref.current) {
        t90Ref.current.scrollIntoView({ behavior: 'smooth' });
      } else if (productId === 'g3000' && g3000Ref.current) {
        g3000Ref.current.scrollIntoView({ behavior: 'smooth' });
      } else if (productId === 'locker' && lockerRef.current) {
        lockerRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (productId === 'video' && videoRef.current) {
        videoRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (productId === 'soc-modernization' && socModernizationRef.current) {
        socModernizationRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (productId === 'ai-security' && aiSecurityRef.current) {
        aiSecurityRef.current.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo(0, 0);
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [productId]);

  return (
    <>
      {/* Breadcrumb */}
      <PageBreadcrumb productName="Defense" />

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
          <SwiperSlide>
            <div className="slider-redesign">
              <div className="slider-wrap">
                <div className="stage">
                  <div className="card">
                    <div className="card-grid">
                      <div className="text-col">
                        <span className="tag">DEFENSE &bull; AUTOMATION</span>
                        <h1>T90's V2V<br/><span>RF Comm.</span></h1>
                        <p className="subtext">Secured Convoy Vehicles Comm. & Automation</p>
                        <div className="cap-grid">
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-wifi"></i></span><span className="cap-label">Wireless Tech</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-rfid"></i></span><span className="cap-label">RFID Based</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-desktop"></i></span><span className="cap-label">Qt Display</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-headphone"></i></span><span className="cap-label">Audio Comm</span></div>
                        </div>
                        <div className="cta-row">
                          <a href="#t90" onClick={(e) => { e.preventDefault(); t90Ref.current?.scrollIntoView({ behavior: 'smooth' }); }} className="btn btn-primary">Explore Solution <i className="bx bx-right-arrow-alt"></i></a>
                        </div>
                      </div>
                      <div className="image-col">
                        <div className="image-panel">
                          <img src={t90SliderImg} alt="T90 Communication" />
                        </div>
                        <div className="spec-chip">
                          <div className="spec-label">Key Differentiator</div>
                          <div className="spec-value">Secure Convoy Synchronization</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 - G3000 */}
          <SwiperSlide>
            <div className="slider-redesign">
              <div className="slider-wrap">
                <div className="stage">
                  <div className="card">
                    <div className="card-grid">
                      <div className="text-col">
                        <span className="tag">AEROSPACE &bull; AVIONICS</span>
                        <h1>Flight control<br/><span>Monitor Device</span></h1>
                        <p className="subtext">High Precision Monitoring for Modern Avionics</p>
                        <div className="cap-grid">
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-chip"></i></span><span className="cap-label">Embedded SW</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-timer"></i></span><span className="cap-label">Real-time OS</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-shield-quarter"></i></span><span className="cap-label">Critical Sys</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-code-alt"></i></span><span className="cap-label">Integration</span></div>
                        </div>
                        <div className="cta-row">
                          <a href="#g3000" onClick={(e) => { e.preventDefault(); g3000Ref.current?.scrollIntoView({ behavior: 'smooth' }); }} className="btn btn-primary">Explore Solution <i className="bx bx-right-arrow-alt"></i></a>
                        </div>
                      </div>
                      <div className="image-col">
                        <div className="image-panel">
                          <img src={g3000SliderImg} alt="G3000 Cockpit" />
                        </div>
                        <div className="spec-chip">
                          <div className="spec-label">Key Differentiator</div>
                          <div className="spec-value">DO-178C Compliant Systems</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 - AI Locker */}
          <SwiperSlide>
            <div className="slider-redesign">
              <div className="slider-wrap">
                <div className="stage">
                  <div className="card">
                    <div className="card-grid">
                      <div className="text-col">
                        <span className="tag">DEFENSE &bull; SECURITY</span>
                        <h1>Smart AI<br/><span>locker</span></h1>
                        <p className="subtext">AI-driven secure storage for strategic defense facilities</p>
                        <div className="cap-grid">
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-scan"></i></span><span className="cap-label">Face ID</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-box"></i></span><span className="cap-label">Asset Tracking</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-bell"></i></span><span className="cap-label">Alerts</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-lock-alt"></i></span><span className="cap-label">High Security</span></div>
                        </div>
                        <div className="cta-row">
                          <a href="#locker" onClick={(e) => { e.preventDefault(); lockerRef.current?.scrollIntoView({ behavior: 'smooth' }); }} className="btn btn-primary">Explore Solution <i className="bx bx-right-arrow-alt"></i></a>
                        </div>
                      </div>
                      <div className="image-col">
                        <div className="image-panel">
                          <img src={lockerSliderImg} alt="SMART AI Locker" />
                        </div>
                        <div className="spec-chip">
                          <div className="spec-label">Key Differentiator</div>
                          <div className="spec-value">Unbreakable Biometric Access</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 4 - Video/Voice Streaming */}
          <SwiperSlide>
            <div className="slider-redesign">
              <div className="slider-wrap">
                <div className="stage">
                  <div className="card">
                    <div className="card-grid">
                      <div className="text-col">
                        <span className="tag">MILITARY &bull; COMMUNICATIONS</span>
                        <h1>Secure Handheld <br/><span>Communicator</span></h1>
                        <p className="subtext">Encrypted media streaming for Mining & Military Operations</p>
                        <div className="cap-grid">
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-lock"></i></span><span className="cap-label">Encryption</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-tachometer"></i></span><span className="cap-label">Low Latency</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-shield"></i></span><span className="cap-label">Robust</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-devices"></i></span><span className="cap-label">Cross-Platform</span></div>
                        </div>
                        <div className="cta-row">
                          <a href="#video" onClick={(e) => { e.preventDefault(); videoRef.current?.scrollIntoView({ behavior: 'smooth' }); }} className="btn btn-primary">Explore Solution <i className="bx bx-right-arrow-alt"></i></a>
                        </div>
                      </div>
                      <div className="image-col">
                        <div className="image-panel">
                          <img src={streamingSliderImg} alt="High Secured Streaming" />
                        </div>
                        <div className="spec-chip">
                          <div className="spec-label">Key Differentiator</div>
                          <div className="spec-value">Military-Grade Stream Encryption</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 5 - SOC Modernization */}
          <SwiperSlide>
            <div className="slider-redesign">
              <div className="slider-wrap">
                <div className="stage">
                  <div className="card">
                    <div className="card-grid">
                      <div className="text-col">
                        <span className="tag">HARDWARE &bull; ENGINEERING</span>
                        <h1>Legacy to Latest<br/><span>SOC Modernization</span></h1>
                        <p className="subtext">Upgrading legacy defense chips to high-performance multi-core SOCs</p>
                        <div className="cap-grid">
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-microchip"></i></span><span className="cap-label">Multi-Core</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-code-alt"></i></span><span className="cap-label">C/C++ Porting</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-tachometer"></i></span><span className="cap-label">High Speed</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-check-shield"></i></span><span className="cap-label">Validated</span></div>
                        </div>
                        <div className="cta-row">
                          <a href="#soc-modernization" onClick={(e) => { e.preventDefault(); socModernizationRef.current?.scrollIntoView({ behavior: 'smooth' }); }} className="btn btn-primary">Explore Solution <i className="bx bx-right-arrow-alt"></i></a>
                        </div>
                      </div>
                      <div className="image-col">
                        <div className="image-panel">
                          <img src={socSliderImg} alt="SOC Modernization" />
                        </div>
                        <div className="spec-chip">
                          <div className="spec-label">Key Differentiator</div>
                          <div className="spec-value">Optimized Multi-Core Architecture</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 6 - AI Secured Zones */}
          <SwiperSlide>
            <div className="slider-redesign">
              <div className="slider-wrap">
                <div className="stage">
                  <div className="card">
                    <div className="card-grid">
                      <div className="text-col">
                        <span className="tag">AI &bull; SURVEILLANCE</span>
                        <h1>AI Secured Zones<br/><span>Monitoring System</span></h1>
                        <p className="subtext">Proactive defense with intelligent threat identification</p>
                        <div className="cap-grid">
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-cctv"></i></span><span className="cap-label">Vision AI</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-user-x"></i></span><span className="cap-label">Intruder Alert</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-bell-plus"></i></span><span className="cap-label">Proactive</span></div>
                          <div className="cap-item"><span className="cap-icon"><i className="bx bx-layer"></i></span><span className="cap-label">Dashboard</span></div>
                        </div>
                        <div className="cta-row">
                          <a href="#ai-zones" onClick={(e) => { 
                            e.preventDefault(); 
                            // Since we didn't add a ref for ai zones earlier, let's just scroll to the section ID.
                            document.getElementById('ai-zones')?.scrollIntoView({ behavior: 'smooth' }); 
                          }} className="btn btn-primary">Explore Solution <i className="bx bx-right-arrow-alt"></i></a>
                        </div>
                      </div>
                      <div className="image-col">
                        <div className="image-panel">
                          <img src={aiZoneSliderImg} alt="AI Secured Zones" />
                        </div>
                        <div className="spec-chip">
                          <div className="spec-label">Key Differentiator</div>
                          <div className="spec-value">Preemptive Threat Neutralization</div>
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
            PRODUCT 1: T90 V2V RF Comm.
        ========================================= */}
        <section id="t90" ref={t90Ref} style={{ background: '#f8fafc', paddingBottom: '60px' }}>
          
          <div className="caution-stripe msl-bg-navy" style={{ padding: '60px 0', borderBottom: '4px solid #c0001a', marginBottom: '40px' }}>
            <div className="container text-center position-relative" style={{ zIndex: 1 }}>
              <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '30px', marginBottom: '20px' }}>
                Product 01
              </span>
              <h2 style={{ color: '#fff', fontSize: '36px', fontWeight: '800', marginBottom: '15px' }}>
                T90's V2V RF Comm. & Automation
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '18px', maxWidth: '800px', margin: '0 auto', fontWeight: '300' }}>
                <strong style={{color: '#fff', fontWeight: '600'}}>Secured Convoy Vehicles Communication.</strong><br/>
                Advanced Wireless and RFID based communication systems for automated vehicle operations.
              </p>
            </div>
          </div>

          <div className="container" data-aos="fade-up">
            <div style={{ background: '#fff', borderRadius: '24px', padding: '0', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.04)', border: '1px solid #CBD5E1' }}>
              
              {/* Intro & Overview Block inside Card */}
              <div style={{ background: '#0E1628', color: '#fff', padding: '50px 40px' }}>
                <div className="row align-items-center g-5">
                  <div className="col-lg-6">
                    <span style={{ color: '#FF4D4D', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '12px', display: 'block', marginBottom: '15px' }}>
                      <i className="bx bx-broadcast" style={{ marginRight: '5px' }}></i> Fleet Monitoring System
                    </span>
                    <h3 style={{ fontSize: '32px', fontWeight: '800', lineHeight: '1.2', marginBottom: '20px', color: '#fff' }}>
                      Smart Tactical Vehicle Communication
                    </h3>
                    <p style={{ color: '#94A3B8', fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
                      An advanced battlefield communication and situational awareness platform for armored vehicles and military convoys. The solution enables secure, real-time communication while continuously monitoring operational parameters like ammunition, engine health, and fuel levels.
                    </p>
                    <div style={{ marginTop: '20px' }}>
                      <h4 style={{ color: '#fff', fontSize: '22px', fontWeight: '800', marginBottom: '15px' }}>Operational Challenges</h4>
                      <ul style={{ color: '#94A3B8', fontSize: '15px', lineHeight: '1.6', paddingLeft: '0', margin: 0, listStyleType: 'none' }}>
                        <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'flex-start' }}><span style={{ color: '#FF4D4D', marginRight: '10px', fontSize: '20px', lineHeight: '1.2' }}>&bull;</span> <span><strong style={{ color: '#E2E8F0' }}>Manual Status Reporting:</strong> Continuous monitoring consumes operational time.</span></li>
                        <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'flex-start' }}><span style={{ color: '#FF4D4D', marginRight: '10px', fontSize: '20px', lineHeight: '1.2' }}>&bull;</span> <span><strong style={{ color: '#E2E8F0' }}>Slow Decision Making:</strong> Outdated info due to transmission delays.</span></li>
                        <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'flex-start' }}><span style={{ color: '#FF4D4D', marginRight: '10px', fontSize: '20px', lineHeight: '1.2' }}>&bull;</span> <span><strong style={{ color: '#E2E8F0' }}>V2V Coordination:</strong> Voice methods increase communication overhead.</span></li>
                        <li style={{ display: 'flex', alignItems: 'flex-start' }}><span style={{ color: '#FF4D4D', marginRight: '10px', fontSize: '20px', lineHeight: '1.2' }}>&bull;</span> <span><strong style={{ color: '#E2E8F0' }}>Limited Awareness:</strong> Lack of a complete operational picture.</span></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                      <img src="/assets/img/defense/def_t90.webp" alt="Tactical Communication" style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>
                  </div>
                </div>
              </div>


              {/* Our Solution & Architecture */}
              <div style={{ padding: '50px 40px', background: '#fff' }}>
                <div className="row g-5 align-items-center">
                  <div className="col-lg-5 order-2 order-lg-1">
                    <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                      <img src="/assets/img/defense/t90_tanks_monitor.webp" alt="Tank Network Architecture" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }} />
                    </div>
                  </div>
                  <div className="col-lg-7 order-1 order-lg-2">
                    <span style={{ color: '#FF4D4D', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '12px', display: 'block', marginBottom: '10px' }}>Our Solution</span>
                    <h4 style={{ color: '#1A2A4A', fontSize: '28px', fontWeight: '800', marginBottom: '20px' }}>A Synchronized Operational Picture</h4>
                    <p style={{ color: '#4A5568', fontSize: '15px', lineHeight: '1.6', marginBottom: '30px' }}>
                      Transforms conventional operations into an intelligent network. Each vehicle becomes an autonomous node, gathering sensor data and securely exchanging it via a distributed communication architecture.
                    </p>
                    
                    <div className="row g-4">
                      <div className="col-sm-6">
                        <div style={{ display: 'flex', gap: '15px' }}>
                          <i className="bx bx-chip" style={{ fontSize: '24px', color: '#FF4D4D' }}></i>
                          <div>
                            <h6 style={{ color: '#1A2A4A', fontWeight: '700', fontSize: '15px', marginBottom: '5px' }}>Vehicle Monitoring Unit</h6>
                            <p style={{ color: '#64748B', fontSize: '13px', margin: 0 }}>Collects parameters like engine diagnostics, fuel, ammo, and GPS.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div style={{ display: 'flex', gap: '15px' }}>
                          <i className="bx bx-lock-alt" style={{ fontSize: '24px', color: '#FF4D4D' }}></i>
                          <div>
                            <h6 style={{ color: '#1A2A4A', fontWeight: '700', fontSize: '15px', marginBottom: '5px' }}>Secure RF Network</h6>
                            <p style={{ color: '#64748B', fontSize: '13px', margin: 0 }}>Dedicated protocol for V2V and V2C communication.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div style={{ display: 'flex', gap: '15px' }}>
                          <i className="bx bx-server" style={{ fontSize: '24px', color: '#FF4D4D' }}></i>
                          <div>
                            <h6 style={{ color: '#1A2A4A', fontWeight: '700', fontSize: '15px', marginBottom: '5px' }}>Master Commander Station</h6>
                            <p style={{ color: '#64748B', fontSize: '13px', margin: 0 }}>Operational control center providing fleet-wide visibility.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div style={{ display: 'flex', gap: '15px' }}>
                          <i className="bx bx-network-chart" style={{ fontSize: '24px', color: '#FF4D4D' }}></i>
                          <div>
                            <h6 style={{ color: '#1A2A4A', fontWeight: '700', fontSize: '15px', marginBottom: '5px' }}>Mesh Communication</h6>
                            <p style={{ color: '#64748B', fontSize: '13px', margin: 0 }}>Interconnected network eliminating single-point failures.</p>
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
                          <i className="bx bx-broadcast" style={{ fontSize: '36px', color: '#0E47A1', marginBottom: '10px' }}></i>
                          <p style={{ fontSize: '11px', color: '#1A2A4A', fontWeight: '600', lineHeight: '1.4' }}>Automated wireless communication between vehicles</p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                          <i className="bx bx-link" style={{ fontSize: '36px', color: '#0E47A1', marginBottom: '10px' }}></i>
                          <p style={{ fontSize: '11px', color: '#1A2A4A', fontWeight: '600', lineHeight: '1.4' }}>Vehicle-to-vehicle connectivity without internet</p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                          <i className="bx bx-radar" style={{ fontSize: '36px', color: '#0E47A1', marginBottom: '10px' }}></i>
                          <p style={{ fontSize: '11px', color: '#1A2A4A', fontWeight: '600', lineHeight: '1.4' }}>LiDAR-based speed and distance estimation for accidental protection</p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                          <i className="bx bx-shield-quarter" style={{ fontSize: '36px', color: '#0E47A1', marginBottom: '10px' }}></i>
                          <p style={{ fontSize: '11px', color: '#1A2A4A', fontWeight: '600', lineHeight: '1.4' }}>Secure packetized data transmission</p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                          <i className="bx bx-camera" style={{ fontSize: '36px', color: '#0E47A1', marginBottom: '10px' }}></i>
                          <p style={{ fontSize: '11px', color: '#1A2A4A', fontWeight: '600', lineHeight: '1.4' }}>Camera-assisted automatic collision avoidance (upcoming feature)</p>
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
                          <i className="bx bx-tachometer" style={{ fontSize: '28px', color: '#0E47A1' }}></i>
                          <span style={{ fontSize: '13px', color: '#1A2A4A', fontWeight: '700', lineHeight: '1.2' }}>Faster<br/>Decisions</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#fff', padding: '12px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                          <i className="bx bx-file-blank" style={{ fontSize: '28px', color: '#0E47A1' }}></i>
                          <span style={{ fontSize: '13px', color: '#1A2A4A', fontWeight: '700', lineHeight: '1.2' }}>Reduced<br/>Manual Reporting</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#fff', padding: '12px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                          <i className="bx bx-check-shield" style={{ fontSize: '28px', color: '#0E47A1' }}></i>
                          <span style={{ fontSize: '13px', color: '#1A2A4A', fontWeight: '700', lineHeight: '1.2' }}>Improved<br/>Safety</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#fff', padding: '12px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                          <i className="bx bx-refresh" style={{ fontSize: '28px', color: '#0E47A1' }}></i>
                          <span style={{ fontSize: '13px', color: '#1A2A4A', fontWeight: '700', lineHeight: '1.2' }}>Mission<br/>Continuity</span>
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
                  <p style={{ fontSize: '14px', color: '#4a5568', margin: 0, fontWeight: '500' }}>Military Convoys • Border Security • Disaster Response • Armored Fleets</p>
                </div>
                <div style={{ flex: '0 0 auto' }}>
                  <a href="#contact" style={{ display: 'inline-block', background: '#FF4D4D', color: '#fff', padding: '18px 40px', borderRadius: '12px', fontWeight: '800', textDecoration: 'none', fontSize: '18px', boxShadow: '0 10px 25px rgba(255, 77, 77, 0.5)', textTransform: 'uppercase', letterSpacing: '1px' }} className="hover-scale">
                    Talk to Our Defense Experts <i className="bx bx-right-arrow-alt" style={{ verticalAlign: 'middle', fontSize: '24px' }}></i>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================
            PRODUCT 2: Flight control Monitor
        ========================================= */}
        <section id="g3000" ref={g3000Ref} style={{ background: '#f8fafc', paddingBottom: '60px' }}>
          
          <div className="caution-stripe msl-bg-navy" style={{ padding: '60px 0', borderBottom: '4px solid #c0001a', marginBottom: '40px' }}>
            <div className="container text-center position-relative" style={{ zIndex: 1 }}>
              <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '30px', marginBottom: '20px' }}>
                Product 02
              </span>
              <h2 style={{ color: '#fff', fontSize: '36px', fontWeight: '800', marginBottom: '15px' }}>
                Flight control Monitor Device
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '18px', maxWidth: '800px', margin: '0 auto', fontWeight: '300' }}>
                <strong style={{color: '#fff', fontWeight: '600'}}>High Precision Monitoring for Avionics.</strong><br/>
                Advanced embedded software and reliable display technologies for aerospace applications.
              </p>
            </div>
          </div>

          <div className="container" data-aos="fade-up">
            <div style={{ background: '#fff', borderRadius: '24px', padding: '0', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.04)', border: '1px solid #CBD5E1' }}>
              
              <div style={{ padding: '50px 40px' }}>
                {/* Row 1: Intro & Overview with G3000 Cockpit Image */}
                <div className="row g-5 align-items-center mb-5">
                  <div className="col-lg-6">
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#1a2a4a', color: '#fff', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '20px' }}>
                      <i className="bx bx-paper-plane"></i> AVIONICS
                    </div>
                    {/* Dark theme red heading */}
                    <h3 className="msl-navy" style={{ fontSize: '34px', fontWeight: '800', marginBottom: '20px', lineHeight: '1.2' }}>
                      Uncompromising Avionics Precision. <span style={{ color: '#C0001A' }}>Zero Room For Error.</span>
                    </h3>
                    <p style={{ fontSize: '15px', lineHeight: '1.7', marginBottom: '30px', color: '#4a5568' }}>
                      The <strong>Flight control Monitor Device</strong> processes thousands of data points instantly. It acts as the central visualization platform, providing pilots with critical, real-time flight metrics and aircraft health data to ensure absolute situational awareness.
                    </p>

                    {/* Subtle Challenges Section */}
                    <div style={{ background: '#f8fafc', padding: '25px', borderRadius: '16px', borderLeft: '4px solid #C0001A', border: '1px solid #e2e8f0' }}>
                      <h6 style={{ color: '#1e293b', fontWeight: '700', fontSize: '14px', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '1px' }}>Legacy System Bottlenecks We Solve</h6>
                      <ul style={{ paddingLeft: '20px', color: '#64748b', fontSize: '14px', lineHeight: '1.7', margin: 0 }}>
                        <li style={{ marginBottom: '8px' }}>Aging hardware struggling with modern workloads.</li>
                        <li style={{ marginBottom: '8px' }}>Software architectures that are difficult to upgrade.</li>
                        <li>Complex ARINC 429 sensor integration causing latency.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    {/* G3000 Cockpit Image */}
                    <div style={{ position: 'relative' }}>
                      <img src="/assets/img/defense/g3000_cockpit.webp" alt="G3000 Monitor" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px', boxShadow: '0 15px 35px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' }} />
                    </div>
                  </div>
                </div>

                <div className="row g-5">
                  <div className="col-lg-12">
                    {/* Major Changes section */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '25px', background: '#fff', padding: '35px 40px', borderRadius: '20px', border: '1px solid #e2e8f0', marginBottom: '40px', boxShadow: '0 4px 15px rgba(0,0,0,0.02)' }}>
                      <div style={{ background: '#0e47a1', width: '70px', height: '70px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 10px 20px rgba(14,71,161,0.15)' }}>
                        <i className="bx bx-clipboard" style={{ color: '#fff', fontSize: '34px' }}></i>
                      </div>
                      <div style={{ flexGrow: 1 }}>
                        <h4 style={{ color: '#0e47a1', fontSize: '24px', fontWeight: '800', marginBottom: '15px' }}>Major Changes</h4>
                        <ul style={{ paddingLeft: '20px', color: '#334155', fontSize: '15px', lineHeight: '1.6', margin: 0, fontWeight: '500', display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: '30px' }}>
                          <li style={{ marginBottom: '10px' }}>Analyzed the overall software flow</li>
                          <li style={{ marginBottom: '10px' }}>Ported TMS320 and TMS340 solutions to TI OMAP chipset</li>
                          <li style={{ marginBottom: '10px' }}>Added a new operating system</li>
                          <li style={{ marginBottom: '10px' }}>Performed feature validation, including vertical speed</li>
                          <li style={{ marginBottom: '10px' }}>Conducted performance analysis</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Alternating Dark Section: Engineering Highlights */}
                <div style={{ background: '#0f172a', borderRadius: '16px', display: 'flex', alignItems: 'stretch', overflow: 'hidden', marginBottom: '50px', boxShadow: '0 10px 30px rgba(15,23,42,0.15)' }}>
                  <div style={{ background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)', padding: '20px 30px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, borderRight: '1px solid rgba(255,255,255,0.05)' }}>
                    <span style={{ color: '#fff', fontWeight: '800', fontSize: '16px', textAlign: 'center', lineHeight: '1.3', letterSpacing: '1px', textTransform: 'uppercase' }}>Engineering<br/>Highlights</span>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', flexGrow: 1 }}>
                    <div style={{ flex: '1 1 0', display: 'flex', alignItems: 'center', gap: '15px', padding: '20px 25px', borderRight: '1px solid rgba(255,255,255,0.05)' }}>
                      <div style={{ width: '48px', height: '48px', borderRadius: '50%', border: '2px solid rgba(96,165,250,0.3)', background: 'rgba(96,165,250,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <i className="bx bx-share-alt" style={{ fontSize: '24px', color: '#60A5FA' }}></i>
                      </div>
                      <span style={{ color: '#fff', fontWeight: '600', fontSize: '14px', lineHeight: '1.3' }}>ARINC429<br/>Interfacing</span>
                    </div>
                    <div style={{ flex: '1 1 0', display: 'flex', alignItems: 'center', gap: '15px', padding: '20px 25px', borderRight: '1px solid rgba(255,255,255,0.05)' }}>
                      <div style={{ width: '48px', height: '48px', borderRadius: '50%', border: '2px solid rgba(167,139,250,0.3)', background: 'rgba(167,139,250,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <i className="bx bx-microchip" style={{ fontSize: '24px', color: '#A78BFA' }}></i>
                      </div>
                      <span style={{ color: '#fff', fontWeight: '600', fontSize: '14px', lineHeight: '1.3' }}>Software<br/>Porting</span>
                    </div>
                    <div style={{ flex: '1 1 0', display: 'flex', alignItems: 'center', gap: '15px', padding: '20px 25px', borderRight: '1px solid rgba(255,255,255,0.05)' }}>
                      <div style={{ width: '48px', height: '48px', borderRadius: '50%', border: '2px solid rgba(52,211,153,0.3)', background: 'rgba(52,211,153,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <i className="bx bx-check-shield" style={{ fontSize: '24px', color: '#34D399' }}></i>
                      </div>
                      <span style={{ color: '#fff', fontWeight: '600', fontSize: '14px', lineHeight: '1.3' }}>Feature<br/>Validation</span>
                    </div>
                    <div style={{ flex: '1 1 0', display: 'flex', alignItems: 'center', gap: '15px', padding: '20px 25px' }}>
                      <div style={{ width: '48px', height: '48px', borderRadius: '50%', border: '2px solid rgba(251,191,36,0.3)', background: 'rgba(251,191,36,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <i className="bx bx-trending-up" style={{ fontSize: '24px', color: '#FBBF24' }}></i>
                      </div>
                      <span style={{ color: '#fff', fontWeight: '600', fontSize: '14px', lineHeight: '1.3' }}>Performance<br/>Optimization</span>
                    </div>
                  </div>
                </div>

                {/* Key Benefits */}
                <div className="row g-4 mt-2">
                  <div className="col-12">
                    <h4 style={{ color: '#1e293b', fontSize: '22px', fontWeight: '800', marginBottom: '20px', textAlign: 'center' }}>Key Benefits for Your Fleet</h4>
                  </div>
                  <div className="col-md-3">
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ width: '64px', height: '64px', background: '#fee2e2', borderRadius: '50%', border: '1px solid #fecaca', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                        <i className="bx bx-target-lock" style={{ fontSize: '32px', color: '#C0001A' }}></i>
                      </div>
                      <h6 style={{ color: '#1e293b', fontWeight: '700', fontSize: '15px', marginBottom: '10px' }}>Unmatched Precision</h6>
                      <p style={{ color: '#64748b', fontSize: '13px', margin: 0 }}>Real-time visualization eliminates interpretation delays.</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ width: '64px', height: '64px', background: '#fee2e2', borderRadius: '50%', border: '1px solid #fecaca', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                        <i className="bx bx-history" style={{ fontSize: '32px', color: '#C0001A' }}></i>
                      </div>
                      <h6 style={{ color: '#1e293b', fontWeight: '700', fontSize: '15px', marginBottom: '10px' }}>Extended Lifecycle</h6>
                      <p style={{ color: '#64748b', fontSize: '13px', margin: 0 }}>Modern hardware migration prevents costly overhauls.</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ width: '64px', height: '64px', background: '#fee2e2', borderRadius: '50%', border: '1px solid #fecaca', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                        <i className="bx bx-shield-quarter" style={{ fontSize: '32px', color: '#C0001A' }}></i>
                      </div>
                      <h6 style={{ color: '#1e293b', fontWeight: '700', fontSize: '15px', marginBottom: '10px' }}>Absolute Reliability</h6>
                      <p style={{ color: '#64748b', fontSize: '13px', margin: 0 }}>Rigorous DO-178C avionics standards compliance.</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ width: '64px', height: '64px', background: '#fee2e2', borderRadius: '50%', border: '1px solid #fecaca', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                        <i className="bx bx-plug" style={{ fontSize: '32px', color: '#C0001A' }}></i>
                      </div>
                      <h6 style={{ color: '#1e293b', fontWeight: '700', fontSize: '15px', marginBottom: '10px' }}>Seamless Integration</h6>
                      <p style={{ color: '#64748b', fontSize: '13px', margin: 0 }}>Plug-and-play compatibility with ARINC 429 systems.</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom CTA */}
              <div style={{ background: '#f1f5f9', padding: '30px 40px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #e2e8f0' }}>
                <div style={{ marginBottom: '15px', flex: '1 1 300px' }}>
                  <h6 style={{ color: '#C0001A', fontWeight: '800', fontSize: '18px', marginBottom: '5px' }}>Ready to bring your cockpit into the 21st century?</h6>
                  <p style={{ fontSize: '14px', color: '#4a5568', margin: 0, fontWeight: '500' }}>Stop risking your missions on outdated hardware. Let's modernize your fleet today.</p>
                </div>
                <div style={{ flex: '0 0 auto' }}>
                  <a href="#contact" style={{ display: 'inline-block', background: '#C0001A', color: '#fff', padding: '12px 28px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none', fontSize: '15px', textTransform: 'uppercase', boxShadow: '0 4px 15px rgba(192,0,26,0.3)' }} className="hover-scale">
                    Upgrade Avionics <i className="bx bx-right-arrow-alt" style={{ verticalAlign: 'middle', fontSize: '20px' }}></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            PRODUCT 3: Smart AI locker
        ========================================= */}
        <section id="locker" ref={lockerRef} style={{ background: '#f8fafc', paddingBottom: '60px' }}>
          
          <div className="caution-stripe msl-bg-navy" style={{ padding: '60px 0', borderBottom: '4px solid #c0001a', marginBottom: '40px' }}>
            <div className="container text-center position-relative" style={{ zIndex: 1 }}>
              <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '30px', marginBottom: '20px' }}>
                Product 03
              </span>
              <h2 style={{ color: '#fff', fontSize: '36px', fontWeight: '800', marginBottom: '15px' }}>
                Smart AI locker For Defence
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '18px', maxWidth: '800px', margin: '0 auto', fontWeight: '300' }}>
                <strong style={{color: '#fff', fontWeight: '600'}}>Impenetrable Asset Storage.</strong><br/>
                Intelligent lockers governed by AI algorithms, facial recognition, and continuous monitoring.
              </p>
            </div>
          </div>

          <div className="container" data-aos="fade-up">
            <div style={{ background: '#fff', borderRadius: '24px', padding: '0', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.04)', border: '1px solid #CBD5E1' }}>
              
              {/* Row 1: Vertical Image & Intro/Challenges */}
              <div className="row g-0">
                <div className="col-lg-7" style={{ padding: '50px 40px' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#1a2a4a', color: '#fff', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '20px' }}>
                    <i className="bx bx-shield-quarter"></i> SECURITY
                  </div>
                  
                  {/* Cheesy Line */}
                  <h3 className="msl-navy" style={{ fontSize: '36px', fontWeight: '800', marginBottom: '20px', lineHeight: '1.2' }}>
                    Lock Down the Unthinkable. <span style={{ color: '#C0001A' }}>Because Physical Keys Are For Amateurs.</span>
                  </h3>
                  
                  {/* Introduction */}
                  <p style={{ fontSize: '15px', lineHeight: '1.7', marginBottom: '30px', color: '#4a5568' }}>
                    The <strong>Smart AI Locker System</strong> modernizes secure storage by combining Artificial Intelligence, Facial Recognition, and Multi-Level Approval Workflows into a single platform. We eliminate manual registers and physical keys, ensuring that your classified documents, laptops, and mission-critical assets are only accessible to authorized personnel.
                  </p>

                  {/* Challenges */}
                  <div style={{ background: '#f8fafc', padding: '25px', borderRadius: '16px', borderLeft: '4px solid #C0001A', border: '1px solid #e2e8f0' }}>
                    <h6 style={{ color: '#1e293b', fontWeight: '700', fontSize: '15px', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '1px' }}>Current World Threat Vectors We Neutralize</h6>
                    <ul style={{ paddingLeft: '20px', color: '#64748b', fontSize: '14px', lineHeight: '1.7', margin: 0 }}>
                      <li style={{ marginBottom: '8px' }}><strong>Insider Threats:</strong> Unauthorized internal access to sensitive military documents.</li>
                      <li style={{ marginBottom: '8px' }}><strong>Traceability Blackholes:</strong> No centralized monitoring of who deposited or retrieved an item.</li>
                      <li><strong>Procedural Bypass:</strong> Inability to enforce strict multi-officer approval workflows.</li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-5" style={{ background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px' }}>
                  {/* Vertical Image */}
                  <img src="/assets/img/defense/smart_locker.webp" alt="Smart AI Locker" style={{ width: '100%', maxWidth: '350px', height: 'auto', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.15)', border: '1px solid rgba(0,0,0,0.05)' }} />
                </div>
              </div>

              {/* Row 2: Multi-Level Approval Workflow (Alternating Section) */}
              <div style={{ background: '#1a2a4a', padding: '50px 40px' }}>
                <div className="text-center mb-5">
                  <h4 style={{ color: '#fff', fontSize: '24px', fontWeight: '800', marginBottom: '10px' }}>Multi-Level Approval Workflow</h4>
                  <p style={{ color: '#cbd5e1', fontSize: '15px', margin: 0 }}>Assets remain locked until all operational command authorities approve.</p>
                </div>
                <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
                  
                  {/* Top Row (4 Items) */}
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '40px' }}>
                    {/* Item 1 */}
                    <div style={{ width: '160px', textAlign: 'center', marginBottom: '20px' }}>
                      <div style={{ width: '75px', height: '75px', borderRadius: '50%', background: '#1a2a4a', border: '2px solid #60A5FA', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px' }}>
                        <i className="bx bx-scan" style={{ fontSize: '34px', color: '#60A5FA' }}></i>
                      </div>
                      <h6 style={{ color: '#fff', fontWeight: '700', fontSize: '14.5px', lineHeight: '1.4' }}>User<br/>Authentication</h6>
                    </div>
                    
                    {/* Dotted Arrow 1 */}
                    <div className="d-none d-lg-flex" style={{ flex: '1', minWidth: '40px', maxWidth: '80px', alignItems: 'center', marginTop: '37px', position: 'relative' }}>
                      <div style={{ width: '100%', borderTop: '2px dashed rgba(255,255,255,0.3)' }}></div>
                      <i className="bx bx-chevron-right" style={{ position: 'absolute', right: '-8px', color: 'rgba(255,255,255,0.5)', fontSize: '24px' }}></i>
                    </div>

                    {/* Item 2 */}
                    <div style={{ width: '160px', textAlign: 'center', marginBottom: '20px' }}>
                      <div style={{ width: '75px', height: '75px', borderRadius: '50%', background: '#1a2a4a', border: '2px solid #A78BFA', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px' }}>
                        <i className="bx bx-file-find" style={{ fontSize: '34px', color: '#A78BFA' }}></i>
                      </div>
                      <h6 style={{ color: '#fff', fontWeight: '700', fontSize: '14.5px', lineHeight: '1.4' }}>Access<br/>Request</h6>
                    </div>

                    {/* Dotted Arrow 2 */}
                    <div className="d-none d-lg-flex" style={{ flex: '1', minWidth: '40px', maxWidth: '80px', alignItems: 'center', marginTop: '37px', position: 'relative' }}>
                      <div style={{ width: '100%', borderTop: '2px dashed rgba(255,255,255,0.3)' }}></div>
                      <i className="bx bx-chevron-right" style={{ position: 'absolute', right: '-8px', color: 'rgba(255,255,255,0.5)', fontSize: '24px' }}></i>
                    </div>

                    {/* Item 3 */}
                    <div style={{ width: '160px', textAlign: 'center', marginBottom: '20px' }}>
                      <div style={{ width: '75px', height: '75px', borderRadius: '50%', background: '#1a2a4a', border: '2px solid #34D399', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px' }}>
                        <i className="bx bx-user-check" style={{ fontSize: '34px', color: '#34D399' }}></i>
                      </div>
                      <h6 style={{ color: '#fff', fontWeight: '700', fontSize: '14.5px', lineHeight: '1.4' }}>Level One<br/>Approval</h6>
                    </div>

                    {/* Dotted Arrow 3 */}
                    <div className="d-none d-lg-flex" style={{ flex: '1', minWidth: '40px', maxWidth: '80px', alignItems: 'center', marginTop: '37px', position: 'relative' }}>
                      <div style={{ width: '100%', borderTop: '2px dashed rgba(255,255,255,0.3)' }}></div>
                      <i className="bx bx-chevron-right" style={{ position: 'absolute', right: '-8px', color: 'rgba(255,255,255,0.5)', fontSize: '24px' }}></i>
                    </div>

                    {/* Item 4 */}
                    <div style={{ width: '160px', textAlign: 'center', marginBottom: '20px' }}>
                      <div style={{ width: '75px', height: '75px', borderRadius: '50%', background: '#1a2a4a', border: '2px solid #FBBF24', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px' }}>
                        <i className="bx bx-check-shield" style={{ fontSize: '34px', color: '#FBBF24' }}></i>
                      </div>
                      <h6 style={{ color: '#fff', fontWeight: '700', fontSize: '14.5px', lineHeight: '1.4' }}>Level Two<br/>Approval</h6>
                    </div>
                  </div>

                  {/* Bottom Row (3 Items) */}
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                    {/* Item 5 */}
                    <div style={{ width: '160px', textAlign: 'center', marginBottom: '20px' }}>
                      <div style={{ width: '75px', height: '75px', borderRadius: '50%', background: '#1a2a4a', border: '2px solid #F472B6', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px' }}>
                        <i className="bx bx-cog" style={{ fontSize: '34px', color: '#F472B6' }}></i>
                      </div>
                      <h6 style={{ color: '#fff', fontWeight: '700', fontSize: '14.5px', lineHeight: '1.4' }}>System<br/>Verification</h6>
                    </div>
                    
                    {/* Dotted Arrow 4 */}
                    <div className="d-none d-lg-flex" style={{ flex: '1', minWidth: '40px', maxWidth: '80px', alignItems: 'center', marginTop: '37px', position: 'relative' }}>
                      <div style={{ width: '100%', borderTop: '2px dashed rgba(255,255,255,0.3)' }}></div>
                      <i className="bx bx-chevron-right" style={{ position: 'absolute', right: '-8px', color: 'rgba(255,255,255,0.5)', fontSize: '24px' }}></i>
                    </div>

                    {/* Item 6 */}
                    <div style={{ width: '160px', textAlign: 'center', marginBottom: '20px' }}>
                      <div style={{ width: '75px', height: '75px', borderRadius: '50%', background: '#1a2a4a', border: '2px solid #38BDF8', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px' }}>
                        <i className="bx bx-lock-open-alt" style={{ fontSize: '34px', color: '#38BDF8' }}></i>
                      </div>
                      <h6 style={{ color: '#fff', fontWeight: '700', fontSize: '14.5px', lineHeight: '1.4' }}>Locker<br/>Unlock</h6>
                    </div>

                    {/* Dotted Arrow 5 */}
                    <div className="d-none d-lg-flex" style={{ flex: '1', minWidth: '40px', maxWidth: '80px', alignItems: 'center', marginTop: '37px', position: 'relative' }}>
                      <div style={{ width: '100%', borderTop: '2px dashed rgba(255,255,255,0.3)' }}></div>
                      <i className="bx bx-chevron-right" style={{ position: 'absolute', right: '-8px', color: 'rgba(255,255,255,0.5)', fontSize: '24px' }}></i>
                    </div>

                    {/* Item 7 */}
                    <div style={{ width: '160px', textAlign: 'center', marginBottom: '20px' }}>
                      <div style={{ width: '75px', height: '75px', borderRadius: '50%', background: '#1a2a4a', border: '2px solid #E879F9', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px' }}>
                        <i className="bx bx-list-check" style={{ fontSize: '34px', color: '#E879F9' }}></i>
                      </div>
                      <h6 style={{ color: '#fff', fontWeight: '700', fontSize: '14.5px', lineHeight: '1.4' }}>Audit<br/>Logging</h6>
                    </div>
                  </div>
                  
                </div>
              </div>

              {/* Row 3: Key Features & Ideal For */}
              <div style={{ padding: '50px 40px' }}>
                <div className="row g-5">
                  <div className="col-lg-8">
                    <h4 style={{ color: '#1a2a4a', fontSize: '22px', fontWeight: '800', marginBottom: '25px' }}>Key Features</h4>
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div style={{ display: 'flex', gap: '15px' }}>
                          <div style={{ width: '50px', height: '50px', borderRadius: '8px', background: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <i className="bx bx-face" style={{ fontSize: '26px', color: '#C0001A' }}></i>
                          </div>
                          <div>
                            <h6 style={{ color: '#1a2a4a', fontWeight: '700', fontSize: '15px', marginBottom: '5px' }}>AI Biometrics</h6>
                            <p style={{ color: '#64748b', fontSize: '13px', margin: 0 }}>Facial recognition & smart card dual-auth.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div style={{ display: 'flex', gap: '15px' }}>
                          <div style={{ width: '50px', height: '50px', borderRadius: '8px', background: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <i className="bx bx-radar" style={{ fontSize: '26px', color: '#C0001A' }}></i>
                          </div>
                          <div>
                            <h6 style={{ color: '#1a2a4a', fontWeight: '700', fontSize: '15px', marginBottom: '5px' }}>Real-Time Monitoring</h6>
                            <p style={{ color: '#64748b', fontSize: '13px', margin: 0 }}>Instant tamper alerts & status tracking.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div style={{ display: 'flex', gap: '15px' }}>
                          <div style={{ width: '50px', height: '50px', borderRadius: '8px', background: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <i className="bx bx-history" style={{ fontSize: '26px', color: '#C0001A' }}></i>
                          </div>
                          <div>
                            <h6 style={{ color: '#1a2a4a', fontWeight: '700', fontSize: '15px', marginBottom: '5px' }}>Comprehensive Audit</h6>
                            <p style={{ color: '#64748b', fontSize: '13px', margin: 0 }}>Immutable digital trails for compliance.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div style={{ display: 'flex', gap: '15px' }}>
                          <div style={{ width: '50px', height: '50px', borderRadius: '8px', background: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <i className="bx bx-wifi-off" style={{ fontSize: '26px', color: '#C0001A' }}></i>
                          </div>
                          <div>
                            <h6 style={{ color: '#1a2a4a', fontWeight: '700', fontSize: '15px', marginBottom: '5px' }}>Network-Isolated</h6>
                            <p style={{ color: '#64748b', fontSize: '13px', margin: 0 }}>100% operational on private networks.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div style={{ display: 'flex', gap: '15px' }}>
                          <div style={{ width: '50px', height: '50px', borderRadius: '8px', background: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <i className="bx bx-box" style={{ fontSize: '26px', color: '#C0001A' }}></i>
                          </div>
                          <div>
                            <h6 style={{ color: '#1a2a4a', fontWeight: '700', fontSize: '15px', marginBottom: '5px' }}>Secure Storage</h6>
                            <p style={{ color: '#64748b', fontSize: '13px', margin: 0 }}>Protect documents, laptops & comms gear.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div style={{ display: 'flex', gap: '15px' }}>
                          <div style={{ width: '50px', height: '50px', borderRadius: '8px', background: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <i className="bx bx-shield-x" style={{ fontSize: '26px', color: '#C0001A' }}></i>
                          </div>
                          <div>
                            <h6 style={{ color: '#1a2a4a', fontWeight: '700', fontSize: '15px', marginBottom: '5px' }}>Tamper-Proof Security</h6>
                            <p style={{ color: '#64748b', fontSize: '13px', margin: 0 }}>Auto-detects & alerts on unauthorized access.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <h4 style={{ color: '#1a2a4a', fontSize: '22px', fontWeight: '800', marginBottom: '25px' }}>Ideal For Defence</h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      <li style={{ padding: '12px 15px', background: '#f8fafc', borderLeft: '3px solid #1a2a4a', marginBottom: '10px', borderRadius: '0 8px 8px 0', fontSize: '14px', color: '#4a5568', fontWeight: '600' }}>Command & Control Centers</li>
                      <li style={{ padding: '12px 15px', background: '#f8fafc', borderLeft: '3px solid #1a2a4a', marginBottom: '10px', borderRadius: '0 8px 8px 0', fontSize: '14px', color: '#4a5568', fontWeight: '600' }}>Ammunition & Arms Storage</li>
                      <li style={{ padding: '12px 15px', background: '#f8fafc', borderLeft: '3px solid #1a2a4a', marginBottom: '10px', borderRadius: '0 8px 8px 0', fontSize: '14px', color: '#4a5568', fontWeight: '600' }}>Defence Manufacturing</li>
                      <li style={{ padding: '12px 15px', background: '#f8fafc', borderLeft: '3px solid #1a2a4a', borderRadius: '0 8px 8px 0', fontSize: '14px', color: '#4a5568', fontWeight: '600' }}>R&D Laboratories</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div style={{ background: '#f8fafc', padding: '30px 40px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #e2e8f0' }}>
                <div style={{ marginBottom: '15px', flex: '1 1 300px' }}>
                  <h6 style={{ color: '#C0001A', fontWeight: '800', fontSize: '18px', marginBottom: '5px' }}>Because keys can be stolen, but faces cannot.</h6>
                  <p style={{ fontSize: '14px', color: '#4a5568', margin: 0, fontWeight: '500' }}>Secure the core before the perimeter fails. Deploy Smart AI Lockers today.</p>
                </div>
                <div style={{ flex: '0 0 auto' }}>
                  <a href="#contact" style={{ display: 'inline-block', background: '#C0001A', color: '#fff', padding: '14px 30px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none', fontSize: '15px', textTransform: 'uppercase', boxShadow: '0 4px 15px rgba(192,0,26,0.3)' }} className="hover-scale">
                    Lock It Down <i className="bx bx-shield-quarter" style={{ verticalAlign: 'middle', fontSize: '20px', marginLeft: '5px' }}></i>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* =========================================
            PRODUCT 4: Secure Handheld Communicator
        ========================================= */}
        <section id="video" ref={videoRef} style={{ background: '#f8fafc', paddingBottom: '60px' }}>
          
          <div className="caution-stripe msl-bg-navy" style={{ padding: '60px 0', borderBottom: '4px solid #c0001a', marginBottom: '40px' }}>
            <div className="container text-center position-relative" style={{ zIndex: 1 }}>
              <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '30px', marginBottom: '20px' }}>
                Product 04
              </span>
              <h2 style={{ color: '#fff', fontSize: '36px', fontWeight: '800', marginBottom: '15px' }}>
                Secure Handheld Communicator
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '18px', maxWidth: '800px', margin: '0 auto', fontWeight: '300' }}>
                <strong style={{color: '#fff', fontWeight: '600'}}>Unbreakable Comms. Unstoppable Missions.</strong><br/>
                Mission-critical, encrypted communication over self-healing wireless mesh networks.
              </p>
            </div>
          </div>

          <div className="container" data-aos="fade-up">
            <div style={{ background: '#fff', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.04)' }}>
              
              {/* Top Section: Intro & Challenges */}
              <div className="row g-0">
                <div className="col-lg-6" style={{ padding: '50px 40px', background: '#fff' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#1a2a4a', color: '#fff', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '25px' }}>
                    <i className="bx bx-broadcast"></i> TACTICAL COMMS
                  </div>
                  <h3 className="msl-navy" style={{ fontSize: '28px', fontWeight: '800', marginBottom: '20px', lineHeight: '1.2' }}>
                    Beyond Line-of-Sight Connectivity. <span style={{ color: '#C0001A' }}>Unbreakable Comms.</span>
                  </h3>
                  <p className="msl-text-body" style={{ fontSize: '15px', lineHeight: '1.7', marginBottom: '30px' }}>
                    Modern military missions and industrial operations increasingly depend on real-time communication. Our rugged platform provides real-time encrypted video, voice, and situational awareness across challenging environments where conventional communication infrastructure is unavailable or unreliable.
                  </p>
                  
                  <div style={{ background: '#f8fafc', borderLeft: '4px solid #c0001a', padding: '25px', borderRadius: '0 8px 8px 0', boxShadow: 'inset 2px 0 0 rgba(192,0,26,0.1)' }}>
                    <h6 style={{ color: '#1a2a4a', fontWeight: '800', fontSize: '16px', marginBottom: '15px' }}>Operational Challenges</h6>
                    <ul style={{ paddingLeft: '20px', color: '#4a5568', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                      <li style={{ marginBottom: '8px' }}><strong>NLOS Limitations:</strong> Natural obstacles block direct radio contact.</li>
                      <li style={{ marginBottom: '8px' }}><strong>Security Vulnerabilities:</strong> Sensitive data over unsecured channels is easily intercepted.</li>
                      <li style={{ marginBottom: '8px' }}><strong>High Latency:</strong> Traditional systems lag during multimedia transmission.</li>
                      <li><strong>Infrastructure Dependency:</strong> Cellular towers are useless in remote or disaster regions.</li>
                    </ul>
                  </div>
                </div>
                
                <div className="col-lg-6" style={{ position: 'relative', minHeight: '400px', background: 'url(/assets/img/defense/relay_system_bg.webp) center/cover' }}>
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 30%)' }}></div>
                  <div style={{ position: 'absolute', bottom: '30px', right: '30px', background: 'rgba(26,42,74,0.9)', padding: '20px', borderRadius: '12px', backdropFilter: 'blur(10px)', color: '#fff', maxWidth: '300px', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <h6 style={{ fontWeight: '700', fontSize: '15px', marginBottom: '10px', color: '#fff' }}>Our Solution</h6>
                    <p style={{ fontSize: '13px', margin: 0, color: '#cbd5e1', lineHeight: '1.5' }}>
                      A resilient, self-forming wireless mesh network. Each relay node intelligently receives, encrypts, and forwards the data—extending coverage far beyond traditional limits.
                    </p>
                  </div>
                </div>
              </div>

              {/* Middle Section: Architecture & Features */}
              <div style={{ background: '#1a2a4a', padding: '50px 40px', position: 'relative' }}>
                <h4 style={{ color: '#fff', fontSize: '24px', fontWeight: '800', marginBottom: '30px', textAlign: 'center' }}>System Architecture</h4>
                <div className="row g-4 mb-5">
                  <div className="col-lg-3 col-md-6">
                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', height: '100%', textAlign: 'center' }}>
                      <i className="bx bx-user-pin" style={{ fontSize: '36px', color: '#60A5FA', marginBottom: '15px' }}></i>
                      <h6 style={{ color: '#fff', fontWeight: '700', fontSize: '15px', marginBottom: '10px' }}>Field Operator Unit</h6>
                      <p style={{ color: '#cbd5e1', fontSize: '13px', margin: 0, lineHeight: '1.5' }}>Rugged handhelds for live video capture, voice comms, and secure GPS transmission.</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', height: '100%', textAlign: 'center' }}>
                      <i className="bx bx-network-chart" style={{ fontSize: '36px', color: '#A78BFA', marginBottom: '15px' }}></i>
                      <h6 style={{ color: '#fff', fontWeight: '700', fontSize: '15px', marginBottom: '10px' }}>Intelligent Relay Nodes</h6>
                      <p style={{ color: '#cbd5e1', fontSize: '13px', margin: 0, lineHeight: '1.5' }}>Decompress, re-encode, encrypt, and forward packets to extend long-distance paths.</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', height: '100%', textAlign: 'center' }}>
                      <i className="bx bx-share-alt" style={{ fontSize: '36px', color: '#34D399', marginBottom: '15px' }}></i>
                      <h6 style={{ color: '#fff', fontWeight: '700', fontSize: '15px', marginBottom: '10px' }}>Adaptive Mesh Network</h6>
                      <p style={{ color: '#cbd5e1', fontSize: '13px', margin: 0, lineHeight: '1.5' }}>Self-healing auto-route discovery with dynamic path optimization and fault tolerance.</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', height: '100%', textAlign: 'center' }}>
                      <i className="bx bx-building-house" style={{ fontSize: '36px', color: '#FBBF24', marginBottom: '15px' }}></i>
                      <h6 style={{ color: '#fff', fontWeight: '700', fontSize: '15px', marginBottom: '10px' }}>Command Center</h6>
                      <p style={{ color: '#cbd5e1', fontSize: '13px', margin: 0, lineHeight: '1.5' }}>Central hub for live monitoring, GPS tracking, and coordinating operational responses.</p>
                    </div>
                  </div>
                </div>

                <div style={{ background: 'rgba(0,0,0,0.2)', padding: '40px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                  <h4 style={{ color: '#fff', fontSize: '20px', fontWeight: '700', marginBottom: '25px' }}>Mesh Network Topography</h4>
                  <img src="/assets/img/defense/relay_system_user.webp" alt="Mesh Network Nodes Diagram" style={{ width: '100%', borderRadius: '12px', border: '2px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }} />
                </div>
              </div>

              {/* Bottom Section: Key Features & Benefits */}
              <div style={{ padding: '50px 40px', background: '#fff' }}>
                <div className="row g-5">
                  {/* Key Features */}
                  <div className="col-lg-6">
                    <div style={{ background: '#f8fafc', padding: '30px', borderRadius: '16px', border: '1px solid #e2e8f0', height: '100%' }}>
                      <h4 style={{ color: '#1a2a4a', fontSize: '22px', fontWeight: '800', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <i className="bx bx-star text-danger"></i> Key Features
                      </h4>
                      <div className="row g-3">
                        {[
                          "Live HD Video & Voice Streaming",
                          "Multi-Hop Wireless Relay",
                          "Beyond Line-of-Sight (BLOS) Communication",
                          "End-to-End Encryption",
                          "Adaptive Mesh Networking",
                          "Low-Latency Streaming",
                          "Real-Time Command Center Monitoring",
                          "Rugged Portable Devices",
                          "Scalable Relay Network",
                          "Recording & Playback"
                        ].map((item, idx) => (
                          <div className="col-sm-6" key={idx}>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                              <i className="bx bx-check-circle" style={{ color: '#C0001A', fontSize: '18px', marginTop: '2px' }}></i>
                              <span style={{ fontSize: '14px', color: '#4a5568', fontWeight: '600', lineHeight: '1.4' }}>{item}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Key Benefits */}
                  <div className="col-lg-6">
                    <div style={{ background: '#1a2a4a', padding: '30px', borderRadius: '16px', height: '100%' }}>
                      <h4 style={{ color: '#fff', fontSize: '22px', fontWeight: '800', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <i className="bx bx-line-chart text-success"></i> Key Benefits
                      </h4>
                      <div className="row g-3">
                        {[
                          "Extended Communication Range",
                          "Enhanced Situational Awareness",
                          "Secure Mission Communications",
                          "Reliable Connectivity",
                          "Faster Decision-Making",
                          "Infrastructure-Free Deployment",
                          "Improved Personnel Safety",
                          "Scalable Operations",
                          "Continuous Mission Availability",
                          "Lower Operational Costs"
                        ].map((item, idx) => (
                          <div className="col-sm-6" key={idx}>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', padding: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', height: '100%' }}>
                              <i className="bx bx-shield-plus" style={{ color: '#34D399', fontSize: '18px', marginTop: '1px' }}></i>
                              <span style={{ fontSize: '13px', color: '#cbd5e1', fontWeight: '500', lineHeight: '1.4' }}>{item}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div style={{ background: '#f8fafc', padding: '30px 40px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #e2e8f0' }}>
                <div style={{ marginBottom: '15px', flex: '1 1 300px' }}>
                  <h6 style={{ color: '#1a2a4a', fontWeight: '800', fontSize: '18px', marginBottom: '5px' }}>Ready to command the unseen?</h6>
                  <p style={{ fontSize: '14px', color: '#4a5568', margin: 0, fontWeight: '500' }}>Ideal for Military, Mining, Disaster Response, and Public Safety.</p>
                </div>
                <div style={{ flex: '0 0 auto' }}>
                  <a href="#contact" style={{ display: 'inline-block', background: '#C0001A', color: '#fff', padding: '14px 30px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none', fontSize: '15px', textTransform: 'uppercase', boxShadow: '0 4px 15px rgba(192,0,26,0.3)' }} className="hover-scale">
                    Request Secure Demo <i className="bx bx-right-arrow-alt" style={{ verticalAlign: 'middle', fontSize: '20px', marginLeft: '5px' }}></i>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================
            PRODUCT 5: SOC Modernization
        ========================================= */}
        <section id="soc-modernization" ref={socModernizationRef} style={{ background: '#f8fafc', paddingBottom: '60px' }}>
          
          <div className="caution-stripe msl-bg-navy" style={{ padding: '60px 0', borderBottom: '4px solid #c0001a', marginBottom: '40px' }}>
            <div className="container text-center position-relative" style={{ zIndex: 1 }}>
              <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '30px', marginBottom: '20px' }}>
                Product 05
              </span>
              <h2 style={{ color: '#fff', fontSize: '36px', fontWeight: '800', marginBottom: '15px' }}>
                Legacy to Latest SOC Modernization
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '18px', maxWidth: '800px', margin: '0 auto', fontWeight: '300' }}>
                <strong style={{color: '#fff', fontWeight: '600'}}>Modernizing Legacy. Powering the Future.</strong><br/>
                Involved in defence based product in assembly programming to latest trend of SOCs.
              </p>
            </div>
          </div>

          <div className="container" data-aos="fade-up">
            <div style={{ background: '#fff', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.04)' }}>
              
              {/* Top Section: Intro & Problem */}
              <div className="row g-0">
                <div className="col-lg-6" style={{ padding: '50px 40px', background: '#fff' }}>
                  <a href="#contact" style={{ display: 'inline-block', background: '#C0001A', color: '#fff', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '25px', textDecoration: 'none' }}>
                    <i className="bx bx-chip"></i> UPGRADE YOUR TECH ARSENAL TODAY!
                  </a>
                  <h3 className="msl-navy" style={{ fontSize: '28px', fontWeight: '800', marginBottom: '20px' }}>
                    Overcoming the Legacy <span style={{color: '#C0001A'}}>Bottleneck</span>
                  </h3>
                  <p className="msl-text-body" style={{ fontSize: '15px', lineHeight: '1.7', marginBottom: '30px' }}>
                    The world is moving forward, but many critical defense systems remain trapped in old-fashioned, legacy technologies like early generation DSPs with limited memory and performance. We upgrade these legacy defense chips to high-performance multi-core SOCs, bringing modern capabilities to your defense infrastructure.
                  </p>
                  
                  <div style={{ background: '#f8fafc', borderLeft: '4px solid #c0001a', padding: '25px', borderRadius: '0 8px 8px 0', boxShadow: 'inset 2px 0 0 rgba(192,0,26,0.1)' }}>
                    <h6 style={{ color: '#1a2a4a', fontWeight: '800', fontSize: '16px', marginBottom: '15px' }}>The Problem with Legacy Platforms</h6>
                    <ul style={{ paddingLeft: '20px', color: '#4a5568', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                      <li style={{ marginBottom: '8px' }}><strong>Outdated Tech:</strong> Relying on rigid Assembly/C code and fixed-point arithmetic.</li>
                      <li style={{ marginBottom: '8px' }}><strong>Limited Resources:</strong> Severe constraints on memory and overall performance capabilities.</li>
                      <li style={{ marginBottom: '8px' }}><strong>Obsolete Comms:</strong> Stuck with inefficient point-to-point communication and legacy peripherals.</li>
                      <li><strong>Maintenance Risks:</strong> Escalating costs and difficulty in sourcing outdated components.</li>
                    </ul>
                  </div>
                </div>
                
                <div className="col-lg-6">
                  <div style={{ height: '100%', minHeight: '400px', backgroundImage: 'url(/assets/img/defense/defense_soc_modernization.png)', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 30%)' }}></div>
                    <div style={{ position: 'absolute', bottom: '30px', right: '30px', background: 'rgba(26,42,74,0.95)', padding: '20px', borderRadius: '12px', backdropFilter: 'blur(10px)', color: '#fff', maxWidth: '320px', border: '1px solid rgba(255,255,255,0.1)' }}>
                      <h6 style={{ fontWeight: '700', fontSize: '15px', marginBottom: '10px', color: '#fff' }}>Porting & Modernization</h6>
                      <p style={{ fontSize: '13px', margin: 0, color: '#cbd5e1', lineHeight: '1.5' }}>
                        Seamlessly migrating from Assembly/C to Optimized C/C++, adapting architectures (memory, peripherals), and rigorously validating the new SOC setup.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Middle Section: Our Solution */}
              <div style={{ padding: '50px 40px', background: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
                <div className="row g-5 align-items-center">
                  <div className="col-lg-6 order-2 order-lg-1">
                    <img src="/assets/img/defense/defense_soc_capabilities_v3.webp" alt="Defense Capabilities" style={{ width: '100%', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }} />
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2">
                    <span style={{ color: '#C0001A', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '12px', display: 'block', marginBottom: '10px' }}>Our Solution</span>
                    <h4 style={{ color: '#1A2A4A', fontSize: '28px', fontWeight: '800', marginBottom: '20px' }}>Latest SOC & MPU Platforms</h4>
                    <p style={{ color: '#4A5568', fontSize: '15px', lineHeight: '1.6', marginBottom: '25px' }}>
                      We transition your systems to modern, high-performance multi-core SOCs equipped with advanced peripherals. From Avionics and Weapon Control to Surveillance Systems, we provide the computational backbone for next-generation defense.
                    </p>
                    
                    <div className="row g-4">
                      <div className="col-sm-6">
                        <div style={{ background: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', height: '100%' }}>
                          <i className="bx bx-network-chart" style={{ fontSize: '32px', color: '#C0001A', marginBottom: '15px' }}></i>
                          <h6 style={{ color: '#1a2a4a', fontWeight: '700', fontSize: '15px', marginBottom: '10px' }}>High Speed Connectivity</h6>
                          <p style={{ color: '#64748b', fontSize: '13px', margin: 0 }}>Support for ETH, CAN FD, ARINC, and PCIe for massive data throughput.</p>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div style={{ background: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', height: '100%' }}>
                          <i className="bx bx-check-shield" style={{ fontSize: '32px', color: '#C0001A', marginBottom: '15px' }}></i>
                          <h6 style={{ color: '#1a2a4a', fontWeight: '700', fontSize: '15px', marginBottom: '10px' }}>Enhanced Reliability</h6>
                          <p style={{ color: '#64748b', fontSize: '13px', margin: 0 }}>Scalable, future-ready architecture with top-tier security & fault tolerance.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Section: MicroSysLogic Capabilities & Benefits */}
              <div style={{ padding: '50px 40px', background: '#fff' }}>
                <h4 style={{ color: '#1a2a4a', fontSize: '24px', fontWeight: '800', marginBottom: '30px', textAlign: 'center' }}>MicroSysLogic Capabilities</h4>
                
                <div className="row g-4 mb-5">
                  {[
                    { icon: 'bx-code-alt', title: 'Assembly Expertise', desc: 'Deep expertise in low-level code optimization and processor utilization.' },
                    { icon: 'bx-cog', title: 'OS Integration', desc: 'Seamless RTOS/Linux integration with drivers & middleware.' },
                    { icon: 'bx-task', title: 'Task Planning', desc: 'Detailed tracking of module-wise tasks for efficient delivery.' },
                    { icon: 'bx-line-chart', title: 'Performance Analysis', desc: 'In-depth analysis of CPU load, memory, and real-time latency.' },
                    { icon: 'bx-test-tube', title: 'Test Automation', desc: 'Automation of unit, integration, and HIL system tests.' },
                    { icon: 'bx-table', title: 'Traceability Matrix', desc: 'End-to-end requirement traceability for compliance.' }
                  ].map((cap, idx) => (
                    <div className="col-lg-4 col-md-6" key={idx}>
                      <div style={{ padding: '20px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', gap: '15px', height: '100%' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(192,0,26,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <i className={`bx ${cap.icon}`} style={{ fontSize: '20px', color: '#C0001A' }}></i>
                        </div>
                        <div>
                          <h6 style={{ color: '#1a2a4a', fontWeight: '700', fontSize: '15px', marginBottom: '5px' }}>{cap.title}</h6>
                          <p style={{ color: '#64748b', fontSize: '13px', margin: 0 }}>{cap.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ background: '#1a2a4a', padding: '30px', borderRadius: '16px' }}>
                  <h4 style={{ color: '#fff', fontSize: '20px', fontWeight: '800', marginBottom: '25px', textAlign: 'center' }}>Key Benefits</h4>
                  <div className="row text-center g-3">
                    {["Improved Performance", "Reduced Power Consumption", "Modern Architecture", "Enhanced Safety", "Long Term Maintainability", "Future Scalability"].map((benefit, idx) => (
                      <div className="col-md-4 col-sm-6" key={idx}>
                        <div style={{ color: '#fff', fontSize: '15px', fontWeight: '600' }}>
                          <i className="bx bx-check-circle" style={{ color: '#34D399', marginRight: '8px' }}></i>
                          {benefit}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div style={{ background: '#f8fafc', padding: '30px 40px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #e2e8f0' }}>
                <div style={{ marginBottom: '15px', flex: '1 1 300px' }}>
                  <h6 style={{ color: '#1a2a4a', fontWeight: '800', fontSize: '18px', marginBottom: '5px' }}>Modernize your defense technology stack.</h6>
                  <p style={{ fontSize: '14px', color: '#4a5568', margin: 0, fontWeight: '500' }}>Future-proof your avionics, radars, and mission computers with advanced SOC platforms.</p>
                </div>
                <div style={{ flex: '0 0 auto' }}>
                  <a href="#contact" style={{ display: 'inline-block', background: '#C0001A', color: '#fff', padding: '14px 30px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none', fontSize: '15px', textTransform: 'uppercase', boxShadow: '0 4px 15px rgba(192,0,26,0.3)' }} className="hover-scale">
                    Upgrade Systems Now <i className="bx bx-rocket" style={{ verticalAlign: 'middle', fontSize: '20px', marginLeft: '5px' }}></i>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================
            PRODUCT 6: AI Secured Zones Monitoring System
        ========================================= */}
        {/* =========================================
            PRODUCT 6: AI Secured Zones Monitoring System
        ========================================= */}
        <section id="ai-security" ref={aiSecurityRef} style={{ background: '#f8fafc', paddingBottom: '60px' }}>
          
          <div className="caution-stripe msl-bg-navy" style={{ padding: '60px 0', borderBottom: '4px solid #c0001a', marginBottom: '40px' }}>
            <div className="container text-center position-relative" style={{ zIndex: 1 }}>
              <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '30px', marginBottom: '20px' }}>
                Product 06
              </span>
              <h2 style={{ color: '#fff', fontSize: '36px', fontWeight: '800', marginBottom: '15px' }}>
                AI Secured Zones Monitoring System
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '18px', maxWidth: '800px', margin: '0 auto', fontWeight: '300' }}>
                <strong style={{color: '#fff', fontWeight: '600'}}>Keep Unauthorized Individuals Out.</strong><br/>
                AI-powered security cameras for early alerts, rapid identification, and proactive defense.
              </p>
            </div>
          </div>

          <div className="container" data-aos="fade-up">
            <div style={{ background: '#fff', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.04)' }}>
              
              {/* Top Section: Intro & Problem */}
              <div className="row g-0">
                <div className="col-lg-6" style={{ padding: '50px 40px', background: '#fff' }}>
                  <a href="#contact" style={{ display: 'inline-block', background: '#C0001A', color: '#fff', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '25px', textDecoration: 'none' }}>
                    <i className="bx bx-shield-quarter"></i> Uncompromising Security. Zero Unauthorized Access.
                  </a>
                  <h3 className="msl-navy" style={{ fontSize: '28px', fontWeight: '800', marginBottom: '20px', lineHeight: '1.2' }}>
                    Don't Just Record Incidents. <span style={{ color: '#C0001A' }}>Prevent Them Entirely.</span>
                  </h3>
                  <p className="msl-text-body" style={{ fontSize: '15px', lineHeight: '1.7', marginBottom: '30px' }}>
                    Conventional camera security systems can detect people but often lack advanced intelligence for fast decision-making. Existing systems struggle to accurately identify unauthorized individuals from previously recorded data.
                  </p>
                  
                  <div style={{ background: '#f8fafc', borderLeft: '4px solid #c0001a', padding: '25px', borderRadius: '0 8px 8px 0', boxShadow: 'inset 2px 0 0 rgba(192,0,26,0.1)' }}>
                    <h6 style={{ color: '#1a2a4a', fontWeight: '800', fontSize: '16px', marginBottom: '15px' }}>The Problem</h6>
                    <ul style={{ paddingLeft: '20px', color: '#4a5568', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                      <li style={{ marginBottom: '8px' }}><strong>Delayed Identification:</strong> Reduces response effectiveness in sensitive zones.</li>
                      <li style={{ marginBottom: '8px' }}><strong>Dumb Cameras:</strong> Can only record, unable to automatically cross-check databases.</li>
                      <li><strong>Manual Monitoring:</strong> Relies heavily on human operators, leading to fatigue and errors.</li>
                    </ul>
                  </div>
                </div>
                
                <div className="col-lg-6">
                  <div style={{ height: '100%', minHeight: '400px', backgroundImage: 'url(/assets/img/defense/defense_ai_security_v2.webp)', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 30%)' }}></div>
                    <div style={{ position: 'absolute', bottom: '30px', right: '30px', background: 'rgba(26,42,74,0.95)', padding: '20px', borderRadius: '12px', backdropFilter: 'blur(10px)', color: '#fff', maxWidth: '320px', border: '1px solid rgba(255,255,255,0.1)' }}>
                      <h6 style={{ fontWeight: '700', fontSize: '15px', marginBottom: '10px', color: '#fff' }}>Our Solution</h6>
                      <p style={{ fontSize: '13px', margin: 0, color: '#cbd5e1', lineHeight: '1.5' }}>
                        AI-powered security solution that identifies unauthorized individuals, cross-checks records, and delivers early alerts for rapid action. Works seamlessly with your existing cameras.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Middle Section: Architecture & Features */}
              <div style={{ padding: '50px 40px', background: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
                <div className="row g-5 align-items-center">
                  <div className="col-lg-6 order-2 order-lg-1">
                    <img src="/assets/img/defense/defense_ai_dashboard.webp" alt="AI Security Dashboard" style={{ width: '100%', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }} />
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2">
                    <span style={{ color: '#C0001A', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '12px', display: 'block', marginBottom: '10px' }}>Technology Used</span>
                    <h4 style={{ color: '#1A2A4A', fontSize: '28px', fontWeight: '800', marginBottom: '20px' }}>Advanced Intelligence Core</h4>
                    <p style={{ color: '#4A5568', fontSize: '15px', lineHeight: '1.6', marginBottom: '25px' }}>
                      Our proprietary AI algorithms and search engine power the intelligence behind the cameras. We integrate IoT cloud systems, audio analytics, and a comprehensive application platform to provide full situational awareness.
                    </p>
                    
                    <div className="row g-4">
                      <div className="col-sm-6">
                        <div style={{ background: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', height: '100%' }}>
                          <i className="bx bx-scan" style={{ fontSize: '32px', color: '#C0001A', marginBottom: '15px' }}></i>
                          <h6 style={{ color: '#1a2a4a', fontWeight: '700', fontSize: '15px', marginBottom: '10px' }}>Capture & Detect</h6>
                          <p style={{ color: '#64748b', fontSize: '13px', margin: 0 }}>AI camera captures and tracks people in real time.</p>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div style={{ background: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', height: '100%' }}>
                          <i className="bx bx-brain" style={{ fontSize: '32px', color: '#C0001A', marginBottom: '15px' }}></i>
                          <h6 style={{ color: '#1a2a4a', fontWeight: '700', fontSize: '15px', marginBottom: '10px' }}>AI Recognition</h6>
                          <p style={{ color: '#64748b', fontSize: '13px', margin: 0 }}>Cross-check with authorized & unauthorized databases.</p>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div style={{ background: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', height: '100%' }}>
                          <i className="bx bx-bell" style={{ fontSize: '32px', color: '#C0001A', marginBottom: '15px' }}></i>
                          <h6 style={{ color: '#1a2a4a', fontWeight: '700', fontSize: '15px', marginBottom: '10px' }}>Decision & Alert</h6>
                          <p style={{ color: '#64748b', fontSize: '13px', margin: 0 }}>Identify status and generate early alerts.</p>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div style={{ background: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', height: '100%' }}>
                          <i className="bx bx-building" style={{ fontSize: '32px', color: '#C0001A', marginBottom: '15px' }}></i>
                          <h6 style={{ color: '#1a2a4a', fontWeight: '700', fontSize: '15px', marginBottom: '10px' }}>Target Applications</h6>
                          <p style={{ color: '#64748b', fontSize: '13px', margin: 0 }}>Defence facilities, traffic zones, and high-security offices.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Section: MicroSysLogic Capabilities & Benefits */}
              <div style={{ padding: '50px 40px', background: '#fff' }}>
                <h4 style={{ color: '#1a2a4a', fontSize: '24px', fontWeight: '800', marginBottom: '30px', textAlign: 'center' }}>MicroSysLogic Product Development</h4>
                
                <div className="row g-4 mb-5">
                  {[
                    { icon: 'bx-cctv', title: 'IP Camera Design', desc: 'Complete design of new IP Camera hardware and systems.' },
                    { icon: 'bx-data', title: 'Data Conversion', desc: 'Convert raw sensor data into structured IP data formats.' },
                    { icon: 'bx-server', title: 'Secure Local Server', desc: 'Push data to local Linux server for absolute high security.' },
                    { icon: 'bx-line-chart', title: 'Data Analysis', desc: 'Analyze data streams from all connected camera sensors.' },
                    { icon: 'bx-user-check', title: 'Member Identification', desc: 'Identify authorized and unauthorized members instantly.' },
                    { icon: 'bx-desktop', title: 'GUI Dashboard', desc: 'Created custom GUI Dashboard to visualize threats and alerts.' }
                  ].map((cap, idx) => (
                    <div className="col-lg-4 col-md-6" key={idx}>
                      <div style={{ padding: '20px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', gap: '15px', height: '100%' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(192,0,26,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <i className={`bx ${cap.icon}`} style={{ fontSize: '20px', color: '#C0001A' }}></i>
                        </div>
                        <div>
                          <h6 style={{ color: '#1a2a4a', fontWeight: '700', fontSize: '15px', marginBottom: '5px' }}>{cap.title}</h6>
                          <p style={{ color: '#64748b', fontSize: '13px', margin: 0 }}>{cap.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ background: '#1a2a4a', padding: '30px', borderRadius: '16px' }}>
                  <h4 style={{ color: '#fff', fontSize: '20px', fontWeight: '800', marginBottom: '25px', textAlign: 'center' }}>Key Benefits</h4>
                  <div className="row text-center g-3">
                    {["Early Warning", "Rapid Identification", "Works with Existing Cameras", "Improved Security Response", "State-of-the-art Process", "Cross-check Databases"].map((benefit, idx) => (
                      <div className="col-md-4 col-sm-6" key={idx}>
                        <div style={{ color: '#fff', fontSize: '15px', fontWeight: '600' }}>
                          <i className="bx bx-check-circle" style={{ color: '#34D399', marginRight: '8px' }}></i>
                          {benefit}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div style={{ background: '#f8fafc', padding: '30px 40px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #e2e8f0' }}>
                <div style={{ marginBottom: '15px', flex: '1 1 300px' }}>
                  <h6 style={{ color: '#1a2a4a', fontWeight: '800', fontSize: '18px', marginBottom: '5px' }}>Secure your restricted zones today.</h6>
                  <p style={{ fontSize: '14px', color: '#4a5568', margin: 0, fontWeight: '500' }}>Implement AI-powered early warnings and rapid identification.</p>
                </div>
                <div style={{ flex: '0 0 auto' }}>
                  <a href="#contact" style={{ display: 'inline-block', background: '#C0001A', color: '#fff', padding: '14px 30px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none', fontSize: '15px', textTransform: 'uppercase', boxShadow: '0 4px 15px rgba(192,0,26,0.3)' }} className="hover-scale">
                    Get Protected <i className="bx bx-shield" style={{ verticalAlign: 'middle', fontSize: '20px', marginLeft: '5px' }}></i>
                  </a>
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

