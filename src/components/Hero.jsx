import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Hero = () => {
  return (
    <>
      <section className="main-tagline text-center">
        <div className="container">
          <div className="tagline-label">AI • EMBEDDED • SEMICONDUCTOR • IOT</div>
          <h1 className="tagline-heading">Building Intelligent Systems for <br/> <span className="highlight">Industry, Defense</span> & Connected Infrastructure</h1>
          <p className="tagline-subtext">Delivering AI-powered embedded solutions, industrial automation, surveillance and IoT platforms for mission-critical environments.</p>
        </div>
      </section>

      <section id="hero-slider" className="heroSwiper">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          speed={900}
          slidesPerView="auto"
          centeredSlides={true}
          spaceBetween={30}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{ el: '.hero-pagination', clickable: true }}
          navigation={{ nextEl: '.hero-next', prevEl: '.hero-prev' }}
        >
          {/* Slide 1 */}
          <SwiperSlide className="hero-slide slide-1">
            <div className="container hero-content">
              <div className="hero-grid">
                <div className="hero-text">
                  <span className="hero-tag">Defense • Battlefield Automation</span>
                  <h1><span className="highlight">Defense</span> Automation Systems</h1>
                  <p>Enable seamless internet-free vehicle communication. Automate data collection for instant command decisions and collision protection.</p>
                  <div className="hero-mini-features">
                    <span>Secure Convoy</span>
                    <span>Real-Time Data</span>
                    <span>Collision Avoidance</span>
                  </div>
                  <div className="hero-buttons">
                    <Link to="/products" className="hero-btn primary-btn">Explore</Link>
                    <a href="#contact" className="hero-btn secondary-btn">Request Demo</a>
                  </div>
                </div>
                <div className="hero-image-col">
                  <div className="hero-image-panel">
                    <img src="/assets/img/slider/slide1.webp" alt="Defense Automation Systems" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          
          {/* Slide 2 */}
          <SwiperSlide className="hero-slide slide-2">
            <div className="container hero-content">
              <div className="hero-grid">
                <div className="hero-text">
                  <span className="hero-tag">Security • AI Surveillance</span>
                  <h1><span className="highlight">Intelligent</span> Security Automation</h1>
                  <p>Upgrade existing cameras with our AI Edge Device. Instantly identify unauthorized individuals and receive early alerts in high-security zones.</p>
                  <div className="hero-mini-features">
                    <span>Existing Camera Support</span>
                    <span>Early Alerts</span>
                    <span>Traffic Zones</span>
                  </div>
                  <div className="hero-buttons">
                    <Link to="/products" className="hero-btn primary-btn">Explore</Link>
                    <a href="#contact" className="hero-btn secondary-btn">Request Demo</a>
                  </div>
                </div>
                <div className="hero-image-col">
                  <div className="hero-image-panel">
                    <img src="/assets/img/slider/slide2.webp" alt="Intelligent Security Automation" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide className="hero-slide slide-3">
            <div className="container hero-content">
              <div className="hero-grid">
                <div className="hero-text">
                  <span className="hero-tag">Smart Office • IoT</span>
                  <h1><span className="highlight">AI</span> Secured Locker Systems</h1>
                  <p>Eliminate manual locker management. Our intelligent system automatically allocates lockers, tracks usage, and handles payments without on-site personnel.</p>
                  <div className="hero-mini-features">
                    <span>No Staff Needed</span>
                    <span>Auto Payments</span>
                    <span>Smart Allocation</span>
                  </div>
                  <div className="hero-buttons">
                    <Link to="/products" className="hero-btn primary-btn">Explore</Link>
                    <a href="#contact" className="hero-btn secondary-btn">Request Demo</a>
                  </div>
                </div>
                <div className="hero-image-col">
                  <div className="hero-image-panel">
                    <img src="/assets/img/slider/ai_secured_locker.webp" alt="AI Secured Locker Systems" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 4 */}
          <SwiperSlide className="hero-slide slide-4">
            <div className="container hero-content">
              <div className="hero-grid">
                <div className="hero-text">
                  <span className="hero-tag">Smart City • Traffic Management</span>
                  <h1><span className="highlight">Dynamic</span> Traffic Signaling</h1>
                  <p>Move beyond traditional timers. Our AI cameras analyze real-time density to actively control traffic flow in highly congested zones.</p>
                  <div className="hero-mini-features">
                    <span>Deep Learning</span>
                    <span>Real-Time Analysis</span>
                    <span>Density Control</span>
                  </div>
                  <div className="hero-buttons">
                    <Link to="/products" className="hero-btn primary-btn">Explore</Link>
                    <a href="#contact" className="hero-btn secondary-btn">Request Demo</a>
                  </div>
                </div>
                <div className="hero-image-col">
                  <div className="hero-image-panel">
                    <img src="/assets/img/slider/dynamic_traffic.webp" alt="Dynamic Traffic Signaling" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 5 */}
          <SwiperSlide className="hero-slide slide-5">
            <div className="container hero-content">
              <div className="hero-grid">
                <div className="hero-text">
                  <span className="hero-tag">AI • Industrial Safety</span>
                  <h1><span className="highlight">AI</span> Driver Safety Systems</h1>
                  <p>Protect your workforce and reduce costs. Our computer vision solution continuously monitors driver states to ensure total operational safety.</p>
                  <div className="hero-mini-features">
                    <span>Computer Vision</span>
                    <span>Continuous Monitoring</span>
                    <span>Cost Reduction</span>
                  </div>
                  <div className="hero-buttons">
                    <Link to="/products" className="hero-btn primary-btn">Explore</Link>
                    <a href="#contact" className="hero-btn secondary-btn">Request Demo</a>
                  </div>
                </div>
                <div className="hero-image-col">
                  <div className="hero-image-panel">
                    <img src="/assets/img/slider/ai_driver_safety.webp" alt="AI Driver Safety Systems" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 6 */}
          <SwiperSlide className="hero-slide slide-6">
            <div className="container hero-content">
              <div className="hero-grid">
                <div className="hero-text">
                  <span className="hero-tag">Energy • SCADA • IoT</span>
                  <h1><span className="highlight">Solar</span> Profiling & SCADA</h1>
                  <p>Maximize ROI by eliminating power losses. Our panel-level SCADA monitoring provides deep analytics and automated ticketing for technicians.</p>
                  <div className="hero-mini-features">
                    <span>Panel-Level Analysis</span>
                    <span>Maximize ROI</span>
                    <span>Auto-Ticketing</span>
                  </div>
                  <div className="hero-buttons">
                    <Link to="/products" className="hero-btn primary-btn">Explore</Link>
                    <a href="#contact" className="hero-btn secondary-btn">Request Demo</a>
                  </div>
                </div>
                <div className="hero-image-col">
                  <div className="hero-image-panel">
                    <img src="/assets/img/slider/solar_profiling.webp" alt="Solar Profiling & SCADA" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 7 */}
          <SwiperSlide className="hero-slide slide-7">
            <div className="container hero-content">
              <div className="hero-grid">
                <div className="hero-text">
                  <span className="hero-tag">Manufacturing • IoT • Automation</span>
                  <h1><span className="highlight">Industrial</span> IoT GateNodes</h1>
                  <p>Automate manufacturing with intelligent devices. Gather machinery data to ensure smooth operations, zero packet loss, and quick decision-making.</p>
                  <div className="hero-mini-features">
                    <span>Secure Data</span>
                    <span>LoRa Gateway</span>
                    <span>Sensor Integration</span>
                  </div>
                  <div className="hero-buttons">
                    <Link to="/products" className="hero-btn primary-btn">Explore</Link>
                    <a href="#contact" className="hero-btn secondary-btn">Request Demo</a>
                  </div>
                </div>
                <div className="hero-image-col">
                  <div className="hero-image-panel">
                    <img src="/assets/img/slider/industrial_iot.webp" alt="Industrial IoT GateNodes" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 8 */}
          <SwiperSlide className="hero-slide slide-8">
            <div className="container hero-content">
              <div className="hero-grid">
                <div className="hero-text">
                  <span className="hero-tag">Mining • AI • Telematics</span>
                  <h1><span className="highlight">SafeLoad</span> Driver Safety</h1>
                  <p>Prevent coal leakage and control reckless driving. Enable rapid emergency response with our integrated haul-road safety telematics platform.</p>
                  <div className="hero-mini-features">
                    <span>Leakage Prevention</span>
                    <span>Driving Analytics</span>
                    <span>Emergency Beacon</span>
                  </div>
                  <div className="hero-buttons">
                    <Link to="/products" className="hero-btn primary-btn">Explore</Link>
                    <a href="#contact" className="hero-btn secondary-btn">Request Demo</a>
                  </div>
                </div>
                <div className="hero-image-col">
                  <div className="hero-image-panel">
                    <img src="/assets/img/slider/safeload_driver.webp" alt="SafeLoad Driver Safety" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 9 */}
          <SwiperSlide className="hero-slide slide-9">
            <div className="container hero-content">
              <div className="hero-grid">
                <div className="hero-text">
                  <span className="hero-tag">Infrastructure • IoT</span>
                  <h1><span className="highlight">Escalator</span> & Lift Diagnostics</h1>
                  <p>Minimize downtime with continuous cloud monitoring. Instantly identify control faults and receive automated alerts for immediate rectification.</p>
                  <div className="hero-mini-features">
                    <span>Cloud Maintenance</span>
                    <span>Instant Alarms</span>
                    <span>Remote Diagnostics</span>
                  </div>
                  <div className="hero-buttons">
                    <Link to="/products" className="hero-btn primary-btn">Explore</Link>
                    <a href="#contact" className="hero-btn secondary-btn">Request Demo</a>
                  </div>
                </div>
                <div className="hero-image-col">
                  <div className="hero-image-panel">
                    <img src="/assets/img/slider/slide9.webp" alt="Escalator & Lift Diagnostics" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          
          <div className="hero-controls-wrapper">
            <div className="hero-pagination"></div>
            <div className="hero-navigation">
              <div className="hero-prev"><i className="bi bi-chevron-left"></i></div>
              <div className="hero-next"><i className="bi bi-chevron-right"></i></div>
            </div>
          </div>
        </Swiper>
      </section>
    </>
  );
};

export default Hero;

