import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>


      {/* Main Intro - Uses the Slanted Section */}
      <section className="about section-bg">
        <div className="container" data-aos="fade-up">
          <div className="row no-gutters">
            <div className="col-xl-5 d-flex align-items-stretch">
              <div className="content" style={{ padding: '40px' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '4px', padding: '5px 14px', marginBottom: '20px' }}>
                  <i className="bx bx-buildings" style={{ color: '#ffffff' }}></i>
                  <span style={{ color: '#ffffff', fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '2px' }}>About MicroSysLogic</span>
                </div>
                <h3 style={{ color: '#E2313F' }}>Engineering Intelligence<br />at Every System Layer</h3>
                <p>
                  MicroSysLogic is a specialized engineering services firm delivering end-to-end product development across embedded systems, artificial intelligence, IoT, and automotive technologies. We combine deep hardware knowledge with cutting-edge software expertise to build solutions that scale from silicon to system.
                </p>
              </div>
            </div>
            <div className="col-xl-7 d-flex align-items-stretch">
              <div className="icon-boxes d-flex flex-column justify-content-center">
                <div className="row">
                  <div className="col-md-12" data-aos="fade-up" data-aos-delay="100">
                    <div style={{
                      background: '#ffffff',
                      borderRadius: '12px',
                      padding: '30px',
                      border: '1px solid #e5e7eb',
                      boxShadow: '0 10px 30px rgba(0,0,0,.08)',
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      {/* Top Label */}
                      <div style={{ 
                        borderBottom: '1px solid #f3f4f6', 
                        paddingBottom: '15px', 
                        marginBottom: '25px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                      }}>
                        <div style={{ background: '#E2313F', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <i className="bx bx-user" style={{ color: '#ffffff', fontSize: '18px' }}></i>
                        </div>
                        <span style={{ color: '#1a2744', fontWeight: '700', letterSpacing: '1px', fontSize: '13px', textTransform: 'uppercase' }}>Leadership Experience</span>
                      </div>
                      
                      {/* Split Layout */}
                      <div className="row align-items-center">
                        {/* Left: Founder Photo (Pop-out effect) */}
                        <div className="col-md-5 text-center mb-4 mb-md-0 d-flex justify-content-center">
                          <div style={{ position: 'relative', width: '180px', height: '180px', marginTop: '20px' }}>
                            {/* Bottom Half (Clipped to circle with background) */}
                            <div style={{
                              position: 'absolute',
                              top: 0, left: 0, width: '100%', height: '100%',
                              borderRadius: '50%',
                              background: '#e0f2fe', /* Soft blue background from reference */
                              overflow: 'hidden',
                              border: '4px solid #f3f4f6'
                            }}>
                              <img 
                                src="/assets/img/companies/founder_vijay_veera.png" 
                                alt="Vijay Veera" 
                                style={{
                                  position: 'absolute',
                                  bottom: 0,
                                  left: '50%',
                                  transform: 'translateX(-50%)',
                                  width: '95%',
                                  height: '115%', /* Image is taller than container to pop out */
                                  objectFit: 'cover',
                                  objectPosition: 'bottom center'
                                }} 
                              />
                            </div>

                            {/* Top Half (Pops out of bounds) */}
                            <div style={{
                              position: 'absolute',
                              top: 0, left: 0, width: '100%', height: '100%',
                              clipPath: 'inset(-50px 0 50% 0)', /* Hides bottom half, allows top to overflow */
                              zIndex: 2
                            }}>
                              <img 
                                src="/assets/img/companies/founder_vijay_veera.png" 
                                alt="Vijay Veera" 
                                style={{
                                  position: 'absolute',
                                  bottom: 0, /* Matches exactly with the bottom half */
                                  left: '50%',
                                  transform: 'translateX(-50%)',
                                  width: '95%',
                                  height: '115%',
                                  objectFit: 'cover',
                                  objectPosition: 'bottom center'
                                }} 
                              />
                            </div>
                          </div>
                        </div>
                        
                        {/* Right: Text Content */}
                        <div className="col-md-7">
                          <h4 style={{ color: '#1a2744', fontSize: '32px', fontWeight: '800', marginBottom: '4px' }}>Vijay Veera</h4>
                          <p style={{ color: '#4b5563', fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>Founder & CEO</p>
                          
                          <p style={{ color: '#4b5563', fontSize: '15px', lineHeight: '1.7', margin: '0' }}>
                            <span style={{ fontSize: '36px', color: '#E2313F', fontWeight: '800', marginRight: '8px', lineHeight: '1', display: 'inline-block', verticalAlign: 'middle', marginTop: '-4px' }}>25+</span>
                            years of experience in end-to-end industrial product development, specializing in Embedded AI technologies.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Uses .counts */}
      <section className="counts" style={{ paddingBottom: '50px' }}>
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2 style={{ color: '#1a2744', fontSize: '24px' }}>Who We Are</h2>
            <p>A Lean, Focused Engineering Team</p>
            <p style={{ color: '#4b5563', maxWidth: '700px', margin: '15px auto 0', fontSize: '15px' }}>
              We operate as a tight-knit organization of 13 engineers, enabling us to move fast, stay aligned, and deliver with exceptional quality on every engagement.
            </p>
          </div>
          <div className="row mt-5">
            <div className="col-lg-4 col-md-6">
              <div className="count-box">
                <i className="bx bx-group"></i>
                <span className="purecounter">13</span>
                <p>Specialized engineers across hardware, software, and AI domains</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-5 mt-md-0">
              <div className="count-box">
                <i className="bx bx-briefcase"></i>
                <span className="purecounter">25+</span>
                <p>Years of leadership experience in industrial product development</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="bx bx-layer"></i>
                <span className="purecounter">4</span>
                <p>Core capability domains — Embedded, AI, IoT/Security, Wireless</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="about" style={{ background: '#e2e8f0', padding: '50px 0' }}>
        <div className="container" data-aos="fade-up">
          <div className="text-center mb-5">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '1px solid rgba(226,49,63,0.2)', borderRadius: '6px', padding: '10px 24px', marginBottom: '25px' }}>
              <span style={{ color: '#E2313F', fontSize: '22px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px' }}>Why MicroSysLogic</span>
            </div>
            <h4 style={{ color: '#1a2744', fontSize: '16px', fontWeight: '700', marginBottom: '10px' }}>Built to Deliver at Every Stage</h4>
            <h4 style={{ color: '#1a2744', fontSize: '16px', fontWeight: '700', marginBottom: '20px' }}>Engineering Expertise Across the Complete Product Lifecycle</h4>
            <p style={{ color: '#4b5563', maxWidth: '700px', margin: '0 auto', fontSize: '16px' }}>
              From concept to product sustenance, our team brings together the expertise needed to own the complete engineering lifecycle — across platforms, geographies, and domains.
            </p>
          </div>

          <div className="row mt-4">
            <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="100">
              <div className="capability-card" style={{ padding: '24px', border: '2px solid #cbd5e1', borderRadius: '12px', height: '100%', background: '#ffffff' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                  <div className="premium-icon-circle">
                    <i className="bx bx-chip"></i>
                  </div>
                  <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#1a2744', margin: 0 }}>Embedded Systems</h4>
                </div>
                <p style={{ fontSize: '14px', color: '#4b5563', margin: 0, lineHeight: '1.6' }}>Deep proficiency in SoCs and microcontrollers with RTOS/Linux for complex embedded product development.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="200">
              <div className="capability-card" style={{ padding: '24px', border: '2px solid #cbd5e1', borderRadius: '12px', height: '100%', background: '#ffffff' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                  <div className="premium-icon-circle">
                    <i className="bx bx-globe"></i>
                  </div>
                  <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#1a2744', margin: 0 }}>Global Solution Delivery</h4>
                </div>
                <p style={{ fontSize: '14px', color: '#4b5563', margin: 0, lineHeight: '1.6' }}>Proven track record managing distributed engineering teams across geographies to deliver customer solutions.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="300">
              <div className="capability-card" style={{ padding: '24px', border: '2px solid #cbd5e1', borderRadius: '12px', height: '100%', background: '#ffffff' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                  <div className="premium-icon-circle">
                    <i className="bx bx-wrench"></i>
                  </div>
                  <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#1a2744', margin: 0 }}>Engineering Strength</h4>
                </div>
                <p style={{ fontSize: '14px', color: '#4b5563', margin: 0, lineHeight: '1.6' }}>Comprehensive knowledge in hardware design and software development, covering the full stack.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="400">
              <div className="capability-card" style={{ padding: '24px', border: '2px solid #cbd5e1', borderRadius: '12px', height: '100%', background: '#ffffff' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                  <div className="premium-icon-circle">
                    <i className="bx bx-microchip"></i>
                  </div>
                  <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#1a2744', margin: 0 }}>Chipset Ecosystems</h4>
                </div>
                <p style={{ fontSize: '14px', color: '#4b5563', margin: 0, lineHeight: '1.6' }}>Hands-on platform experience with Qualcomm, Broadcom, Xilinx, and Texas Instruments chipset ecosystems.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="500">
              <div className="capability-card" style={{ padding: '24px', border: '2px solid #cbd5e1', borderRadius: '12px', height: '100%', background: '#ffffff' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                  <div className="premium-icon-circle">
                    <i className="bx bx-car"></i>
                  </div>
                  <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#1a2744', margin: 0 }}>Domain Expertise</h4>
                </div>
                <p style={{ fontSize: '14px', color: '#4b5563', margin: 0, lineHeight: '1.6' }}>Specialized knowledge spanning semiconductors, automotive, IIoT, and AI security solution domains.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="600">
              <div className="capability-card" style={{ padding: '24px', border: '2px solid #cbd5e1', borderRadius: '12px', height: '100%', background: '#ffffff' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                  <div className="premium-icon-circle">
                    <i className="bx bx-infinite"></i>
                  </div>
                  <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#1a2744', margin: 0 }}>End-to-End Dev</h4>
                </div>
                <p style={{ fontSize: '14px', color: '#4b5563', margin: 0, lineHeight: '1.6' }}>Full product lifecycle ownership — from initial concept through to sustenance and long-term support.</p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Product Domains Section */}
      <section style={{ background: '#ffffff', padding: '80px 0' }}>
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2 style={{ color: '#1a2744', fontSize: '24px', textTransform: 'uppercase' }}>Product Domains</h2>
            <p style={{ color: '#4b5563', maxWidth: '700px', margin: '15px auto 0', fontSize: '15px' }}>
              Engineering solutions across embedded, AI, wireless, and connected systems.
            </p>
          </div>
          <div className="row">
            {/* Embedded Software */}
            <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="100">
              <div className="capability-card" style={{ padding: '24px', border: '2px solid #cbd5e1', borderRadius: '12px', height: '100%', background: '#ffffff' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                  <div className="premium-icon-circle">
                    <i className="bx bx-code-alt"></i>
                  </div>
                  <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#1a2744', margin: 0 }}>Embedded Software</h4>
                </div>
                <p style={{ fontSize: '14px', color: '#4b5563', marginBottom: '15px', lineHeight: '1.5' }}>End-to-end embedded platform development</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#4b5563', fontSize: '14px', lineHeight: '1.4' }}>
                  <li style={{ paddingBottom: '8px' }}><i className="bx bx-check" style={{ color: '#E2313F', marginRight: '6px' }}></i>OS Porting & BSP</li>
                  <li style={{ paddingBottom: '8px' }}><i className="bx bx-check" style={{ color: '#E2313F', marginRight: '6px' }}></i>Device Drivers</li>
                  <li style={{ paddingBottom: '8px' }}><i className="bx bx-check" style={{ color: '#E2313F', marginRight: '6px' }}></i>RTOS/Linux Development</li>
                  <li><i className="bx bx-check" style={{ color: '#E2313F', marginRight: '6px' }}></i>Software Integration</li>
                </ul>
              </div>
            </div>
            {/* Artificial Intelligence */}
            <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="200">
              <div className="capability-card" style={{ padding: '24px', border: '2px solid #cbd5e1', borderRadius: '12px', height: '100%', background: '#ffffff' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                  <div className="premium-icon-circle">
                    <i className="bx bx-brain"></i>
                  </div>
                  <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#1a2744', margin: 0 }}>Artificial Intelligence</h4>
                </div>
                <p style={{ fontSize: '14px', color: '#4b5563', marginBottom: '15px', lineHeight: '1.5' }}>Intelligent systems and AI-powered applications</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#4b5563', fontSize: '14px', lineHeight: '1.4' }}>
                  <li style={{ paddingBottom: '8px' }}><i className="bx bx-check" style={{ color: '#E2313F', marginRight: '6px' }}></i>Machine Learning</li>
                  <li style={{ paddingBottom: '8px' }}><i className="bx bx-check" style={{ color: '#E2313F', marginRight: '6px' }}></i>AI Agents</li>
                  <li style={{ paddingBottom: '8px' }}><i className="bx bx-check" style={{ color: '#E2313F', marginRight: '6px' }}></i>Generative AI (LLMs)</li>
                  <li><i className="bx bx-check" style={{ color: '#E2313F', marginRight: '6px' }}></i>Computer Vision & NLP</li>
                </ul>
              </div>
            </div>
            {/* IOT/Security Solutions */}
            <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="300">
              <div className="capability-card" style={{ padding: '24px', border: '2px solid #cbd5e1', borderRadius: '12px', height: '100%', background: '#ffffff' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                  <div className="premium-icon-circle">
                    <i className="bx bx-shield-quarter"></i>
                  </div>
                  <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#1a2744', margin: 0 }}>IOT & Security</h4>
                </div>
                <p style={{ fontSize: '14px', color: '#4b5563', marginBottom: '15px', lineHeight: '1.5' }}>Connected and secure intelligent solutions</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#4b5563', fontSize: '14px', lineHeight: '1.4' }}>
                  <li style={{ paddingBottom: '8px' }}><i className="bx bx-check" style={{ color: '#E2313F', marginRight: '6px' }}></i>AI-Based Security</li>
                  <li style={{ paddingBottom: '8px' }}><i className="bx bx-check" style={{ color: '#E2313F', marginRight: '6px' }}></i>LLM Optimization</li>
                  <li style={{ paddingBottom: '8px' }}><i className="bx bx-check" style={{ color: '#E2313F', marginRight: '6px' }}></i>Test Automation</li>
                  <li><i className="bx bx-check" style={{ color: '#E2313F', marginRight: '6px' }}></i>Connected Systems</li>
                </ul>
              </div>
            </div>
            {/* Wireless Tech. */}
            <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="400">
              <div className="capability-card" style={{ padding: '24px', border: '2px solid #cbd5e1', borderRadius: '12px', height: '100%', background: '#ffffff' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                  <div className="premium-icon-circle">
                    <i className="bx bx-wifi"></i>
                  </div>
                  <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#1a2744', margin: 0 }}>Wireless Tech</h4>
                </div>
                <p style={{ fontSize: '14px', color: '#4b5563', marginBottom: '15px', lineHeight: '1.5' }}>Advanced wireless communication systems</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#4b5563', fontSize: '14px', lineHeight: '1.4' }}>
                  <li style={{ paddingBottom: '8px' }}><i className="bx bx-check" style={{ color: '#E2313F', marginRight: '6px' }}></i>Secure Communications</li>
                  <li style={{ paddingBottom: '8px' }}><i className="bx bx-check" style={{ color: '#E2313F', marginRight: '6px' }}></i>RFID Integration</li>
                  <li style={{ paddingBottom: '8px' }}><i className="bx bx-check" style={{ color: '#E2313F', marginRight: '6px' }}></i>Bluetooth Enablement</li>
                  <li><i className="bx bx-check" style={{ color: '#E2313F', marginRight: '6px' }}></i>Vehicle Automation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Coverage Section */}
      <section style={{ background: '#e2e8f0', padding: '100px 0' }}>
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2 style={{ color: '#1a2744', fontSize: '24px' }}>Technology Coverage</h2>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="100">
              <div className="capability-card" style={{ padding: '24px', border: '2px solid #cbd5e1', borderRadius: '12px', background: '#ffffff', textAlign: 'center' }}>
                <div className="tech-icon-circle">
                  <i className="bx bx-chip"></i>
                </div>
                <h5 style={{ fontSize: '15px', fontWeight: '700', color: '#1a2744', textTransform: 'uppercase', margin: 0 }}>Semiconductors</h5>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="200">
              <div className="capability-card" style={{ padding: '24px', border: '2px solid #cbd5e1', borderRadius: '12px', background: '#ffffff', textAlign: 'center' }}>
                <div className="tech-icon-circle">
                  <i className="bx bx-brain"></i>
                </div>
                <h5 style={{ fontSize: '15px', fontWeight: '700', color: '#1a2744', textTransform: 'uppercase', margin: 0 }}>Embedded AI</h5>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="300">
              <div className="capability-card" style={{ padding: '24px', border: '2px solid #cbd5e1', borderRadius: '12px', background: '#ffffff', textAlign: 'center' }}>
                <div className="tech-icon-circle">
                  <i className="bx bx-car"></i>
                </div>
                <h5 style={{ fontSize: '15px', fontWeight: '700', color: '#1a2744', textTransform: 'uppercase', margin: 0 }}>Automotive</h5>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="400">
              <div className="capability-card" style={{ padding: '24px', border: '2px solid #cbd5e1', borderRadius: '12px', background: '#ffffff', textAlign: 'center' }}>
                <div className="tech-icon-circle">
                  <i className="bx bx-buildings"></i>
                </div>
                <h5 style={{ fontSize: '15px', fontWeight: '700', color: '#1a2744', textTransform: 'uppercase', margin: 0 }}>Industrial Internet of Things</h5>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="500">
              <div className="capability-card" style={{ padding: '24px', border: '2px solid #cbd5e1', borderRadius: '12px', background: '#ffffff', textAlign: 'center' }}>
                <div className="tech-icon-circle">
                  <i className="bx bx-shield-quarter"></i>
                </div>
                <h5 style={{ fontSize: '15px', fontWeight: '700', color: '#1a2744', textTransform: 'uppercase', margin: 0 }}>AI Security</h5>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="600">
              <div className="capability-card" style={{ padding: '24px', border: '2px solid #cbd5e1', borderRadius: '12px', background: '#ffffff', textAlign: 'center' }}>
                <div className="tech-icon-circle">
                  <i className="bx bx-microchip"></i>
                </div>
                <h5 style={{ fontSize: '15px', fontWeight: '700', color: '#1a2744', textTransform: 'uppercase', margin: 0 }}>Hardware Design</h5>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="700">
              <div className="capability-card" style={{ padding: '24px', border: '2px solid #cbd5e1', borderRadius: '12px', background: '#ffffff', textAlign: 'center' }}>
                <div className="tech-icon-circle">
                  <i className="bx bx-code-alt"></i>
                </div>
                <h5 style={{ fontSize: '15px', fontWeight: '700', color: '#1a2744', textTransform: 'uppercase', margin: 0 }}>Software Development</h5>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="800">
              <div className="capability-card" style={{ padding: '24px', border: '2px solid #cbd5e1', borderRadius: '12px', background: '#ffffff', textAlign: 'center' }}>
                <div className="tech-icon-circle">
                  <i className="bx bxl-tux"></i>
                </div>
                <h5 style={{ fontSize: '15px', fontWeight: '700', color: '#1a2744', textTransform: 'uppercase', margin: 0 }}>RTOS / Linux</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated CTA Section */}
      <section style={{ background: '#e2e8f0', padding: '0 0 100px 0' }}>
        <div className="container" data-aos="fade-up">
          <div style={{ background: '#0f172a', padding: '80px 40px', borderRadius: '24px', position: 'relative', overflow: 'hidden', boxShadow: '0 20px 40px rgba(15, 23, 42, 0.15)' }}>
            {/* Subtle background decoration */}
            <div style={{ position: 'absolute', top: '-50%', left: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(226,49,63,0.15) 0%, rgba(15,23,42,0) 70%)', borderRadius: '50%' }}></div>
            <div style={{ position: 'absolute', bottom: '-50%', right: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(226,49,63,0.15) 0%, rgba(15,23,42,0) 70%)', borderRadius: '50%' }}></div>
            
            <div className="position-relative">
              <div className="text-center">
                <h3 style={{ color: '#ffffff', fontSize: '32px', fontWeight: '800', marginBottom: '20px' }}>Ready to Accelerate Your Product Development?</h3>
                <p style={{ color: '#94a3b8', maxWidth: '600px', margin: '0 auto 40px', fontSize: '18px' }}>
                  Partner with MicroSysLogic to bring cutting-edge Embedded AI and IoT solutions from concept to reality.
                </p>
                <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link to="/contact" style={{ background: '#E2313F', color: '#ffffff', padding: '14px 32px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none', boxShadow: '0 4px 15px rgba(226,49,63,0.3)', transition: 'all 0.3s ease' }}>Schedule Consultation</Link>
                  <Link to="/services" style={{ background: 'transparent', color: '#ffffff', padding: '14px 32px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none', border: '2px solid rgba(255,255,255,0.2)', transition: 'all 0.3s ease' }} onMouseOver={(e) => {e.target.style.background='rgba(255,255,255,0.1)'; e.target.style.borderColor='rgba(255,255,255,0.4)'}} onMouseOut={(e) => {e.target.style.background='transparent'; e.target.style.borderColor='rgba(255,255,255,0.2)'}}>Explore Solutions</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
};

export default About;

