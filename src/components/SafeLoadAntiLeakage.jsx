import React from 'react';

const SafeLoadAntiLeakage = () => {
  return (
    <>
      <style>
        {`
          .safeload-card {
            background: #fff;
            border: 1px solid #e2e8f0;
            border-radius: 16px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.03);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .safeload-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 12px 24px rgba(0,0,0,0.08);
          }
          .safeload-icon-circle {
            width: 45px;
            height: 45px;
            background: rgba(192,0,26,0.1);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background 0.3s ease;
          }
          .safeload-icon-circle i {
            font-size: 24px;
            color: #c0001a;
            transition: color 0.3s ease;
          }
          .safeload-card:hover .safeload-icon-circle {
            background: #c0001a;
          }
          .safeload-card:hover .safeload-icon-circle i {
            color: #fff;
          }
          @keyframes gentle-float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
          @keyframes soft-glow {
            0%, 100% { box-shadow: 0 0 15px rgba(192,0,26,0.1); }
            50% { box-shadow: 0 0 40px rgba(192,0,26,0.4); }
          }
          @keyframes data-flow {
            to { stroke-dashoffset: -20; }
          }
          .animated-data-line {
            stroke-dasharray: 8 8;
            animation: data-flow 1s linear infinite;
          }
          .pulse-brain {
            animation: gentle-float 4s ease-in-out infinite, soft-glow 4s ease-in-out infinite;
          }
          .feature-list {
            list-style: none;
            padding: 0;
            margin: 15px 0 0 0;
          }
          .feature-list li {
            font-size: 14px;
            color: #4a5568;
            margin-bottom: 8px;
            display: flex;
            align-items: flex-start;
            gap: 8px;
          }
          .feature-list li i {
            color: #c0001a;
            margin-top: 3px;
          }
        `}
      </style>

      <div className="container" data-aos="fade-up">
        <div className="msl-product-wrapper" style={{ padding: 0 }}>
          
          {/* INTRO BLOCK like Product 01 */}
          <div style={{ padding: '40px 60px 20px' }}>
            <div className="lift-card" style={{ background: '#fff', borderRadius: '24px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <div className="row g-0">
                {/* Left Column - Image */}
                <div className="col-lg-6" style={{ minHeight: '400px' }}>
                  <img src="/assets/img/manufacturing_automations/safeload_dashboard.webp" alt="SafeLoad Central Dashboard" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                
                {/* Right Column - Content */}
                <div className="col-lg-6 d-flex align-items-center">
                  <div style={{ padding: '50px 40px' }}>
                    <div style={{ marginBottom: '15px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                      <span style={{ display: 'inline-block', background: 'rgba(192,0,26,0.1)', color: '#c0001a', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '30px' }}>
                        <i className="bx bx-buildings"></i> MANUFACTURING
                      </span>
                      <span style={{ display: 'inline-block', background: 'rgba(192,0,26,0.1)', color: '#c0001a', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '30px' }}>
                        CENTRALIZED CONTROL HUB
                      </span>
                    </div>
                    
                    <h3 style={{ color: '#1a2a4a', fontSize: '32px', fontWeight: '800', marginBottom: '20px', lineHeight: '1.2' }}>
                      Command Your Fleet with <br/><span style={{ color: '#c0001a' }}>Absolute Precision</span>
                    </h3>
                    
                    <p className="msl-text-body" style={{ fontSize: '15px', lineHeight: '1.6', marginBottom: '25px' }}>
                      <strong>The Challenges we face:</strong> Haul roads drive a significant share of mining operating costs and directly affect safe truck performance. Poor road conditions lead to equipment wear, slower cycle times, and higher safety risks.
                    </p>

                    <div style={{ background: '#1a2a4a', borderRadius: '16px', padding: '25px 30px', color: '#fff', boxShadow: '0 10px 25px rgba(26,42,74,0.1)', marginBottom: '25px' }}>
                      <h6 style={{ color: '#fff', fontWeight: '800', fontSize: '18px', marginBottom: '10px' }}>Our Intelligent Solution</h6>
                      <p style={{ color: '#cbd5e1', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                        The SafeLoad platform unifies all your telematics streams into a single, intuitive dashboard. From real-time route tracking to predictive analytics, get the insights you need to eliminate inefficiencies and secure your operations.
                      </p>
                    </div>

                    <h6 style={{ color: '#1a2a4a', fontWeight: '800', fontSize: '16px', marginBottom: '15px' }}>What our solution can do:</h6>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                        <i className="bx bx-check-circle" style={{ color: '#c0001a', fontSize: '22px' }}></i> <span style={{ color: '#4a5568', fontSize: '15px', fontWeight: '600' }}>Live Fleet Geolocation & Status Tracking</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                        <i className="bx bx-check-circle" style={{ color: '#c0001a', fontSize: '22px' }}></i> <span style={{ color: '#4a5568', fontSize: '15px', fontWeight: '600' }}>Instant Anomaly & Geofence Alerts</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <i className="bx bx-check-circle" style={{ color: '#c0001a', fontSize: '22px' }}></i> <span style={{ color: '#4a5568', fontSize: '15px', fontWeight: '600' }}>Comprehensive Shift Productivity Reports</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ padding: '0px 60px 40px' }}>
            {/* PART 1 — SafeLoad Use Cases */}
            <div className="text-center mb-4">
              <h3 style={{ color: '#1a2a4a', fontSize: '28px', fontWeight: '800' }}>Core Capabilities</h3>
              <p style={{ color: '#64748b', fontSize: '16px' }}>Targeted solutions to secure your mining assets and personnel.</p>
            </div>

            <div className="row g-4" style={{ marginBottom: '50px' }}>
              <div className="col-lg-4">
                <div className="safeload-card h-100" style={{ padding: '30px', borderTop: '4px solid #1a2a4a' }}>
                  <div className="safeload-icon-circle mb-4">
                    <i className="bx bx-shield-alt-2"></i>
                  </div>
                  <h4 style={{ color: '#1a2a4a', fontWeight: '800', fontSize: '18px', marginBottom: '15px' }}>Coal Theft & Leakage Prevention</h4>
                  <p className="msl-text-body" style={{ fontSize: '15px', lineHeight: '1.6', margin: 0 }}>Compare source loading, route path, stop events, and dump-point validation to prevent coal leakage at every stage of the journey.</p>
                  <ul className="feature-list">
                    <li><i className="bx bx-map-pin"></i> Route Deviation Alerts</li>
                    <li><i className="bx bx-lock"></i> Secure Dump Verification</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="safeload-card h-100" style={{ padding: '30px', borderTop: '4px solid #c0001a' }}>
                  <div className="safeload-icon-circle mb-4">
                    <i className="bx bx-car"></i>
                  </div>
                  <h4 style={{ color: '#1a2a4a', fontWeight: '800', fontSize: '18px', marginBottom: '15px' }}>Reckless Driving Control</h4>
                  <p className="msl-text-body" style={{ fontSize: '15px', lineHeight: '1.6', margin: 0 }}>Detect over-speeding, route deviation, harsh driving, and unauthorized stops using real-time vehicle behavior analytics.</p>
                  <ul className="feature-list">
                    <li><i className="bx bx-tachometer"></i> Speed & Braking Analytics</li>
                    <li><i className="bx bx-user-check"></i> Driver Scorecards</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="safeload-card h-100" style={{ padding: '30px', borderTop: '4px solid #1a2a4a' }}>
                  <div className="safeload-icon-circle mb-4">
                    <i className="bx bx-broadcast"></i>
                  </div>
                  <h4 style={{ color: '#1a2a4a', fontWeight: '800', fontSize: '18px', marginBottom: '15px' }}>Emergency Response</h4>
                  <p className="msl-text-body" style={{ fontSize: '15px', lineHeight: '1.6', margin: 0 }}>Send live position and alert status directly to the control room to significantly reduce emergency response time.</p>
                  <ul className="feature-list">
                    <li><i className="bx bx-bell"></i> Instant SOS Beacons</li>
                    <li><i className="bx bx-target-lock"></i> Exact Coordinate Sharing</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Haul Roads Section */}
            <div className="row mb-5 align-items-center" style={{ background: '#1a2a4a', borderRadius: '24px', overflow: 'hidden' }}>
              <div className="col-lg-6 p-0">
                <img src="/assets/img/manufacturing_automations/mining_emergency_response.webp" alt="Mining Emergency Response" style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: '350px' }} />
              </div>
              <div className="col-lg-6">
                 <div style={{ padding: '40px 50px' }}>
                   <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', padding: '6px 12px', borderRadius: '30px', letterSpacing: '1px', marginBottom: '20px' }}>
                     Road Safety & Monitoring
                   </span>
                   <h4 style={{ color: '#fff', fontSize: '28px', fontWeight: 'bold', marginBottom: '20px' }}>Why Haul Roads Matter</h4>
                   <p style={{ color: '#cbd5e0', fontSize: '16px', margin: 0, lineHeight: '1.7', marginBottom: '25px' }}>
                     Our integrated sensors and continuous road monitoring map out high-risk zones, allowing maintenance teams to address degradations proactively. Driving behavior control delivers both uncompromising safety and elevated productivity.
                   </p>
                   <div style={{ display: 'flex', gap: '20px' }}>
                     <div style={{ color: '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}>
                       <i className="bx bx-bar-chart" style={{ color: '#ff6b7a', fontSize: '24px' }}></i>
                       <span style={{ fontSize: '14px', fontWeight: '600' }}>Lower Maintenance Costs</span>
                     </div>
                     <div style={{ color: '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}>
                       <i className="bx bx-shield-plus" style={{ color: '#ff6b7a', fontSize: '24px' }}></i>
                       <span style={{ fontSize: '14px', fontWeight: '600' }}>Zero Accident Goal</span>
                     </div>
                   </div>
                 </div>
              </div>
            </div>

            <hr style={{ borderColor: '#e2e8f0', margin: '50px 0' }} />

            {/* PART 2 — Fleet Productivity & Haul Cycle Optimization */}
            <div className="row mb-5 align-items-center">
              <div className="col-lg-6 order-2 order-lg-1 mt-4 mt-lg-0">
                <div className="section-title text-start mb-4">
                  <span style={{ color: '#c0001a', fontSize: '13px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>AI-Powered Orchestration</span>
                  <h2 className="msl-navy title-case" style={{ fontSize: '32px', fontWeight: '800', marginTop: '10px', marginBottom: '20px' }}>Fleet Productivity & Haul Cycle Optimization</h2>
                  <p className="msl-text-body" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                    AI models utilize telematics, payload, route, queue, and equipment-state data to optimize truck-shovel assignments. By continuously analyzing the flow of operations, the system predicts and eliminates bottlenecks, raising your overall tons-per-hour performance.
                  </p>
                  <ul className="feature-list" style={{ marginTop: '20px', marginBottom: '30px' }}>
                    <li><i className="bx bx-trending-up"></i> Dynamic Re-routing & Shovel Assignment</li>
                    <li><i className="bx bx-timer"></i> Queue Reduction & Idle Time Minimization</li>
                    <li><i className="bx bx-data"></i> Payload Maximation per Haul</li>
                  </ul>
                </div>
                
                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderLeft: '4px solid #c0001a', borderRadius: '8px', padding: '20px 25px', display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                  <i className="bx bx-wrench" style={{ fontSize: '28px', color: '#1a2a4a', marginTop: '2px' }}></i>
                  <div>
                    <div style={{ color: '#1a2a4a', fontWeight: 'bold', fontSize: '15px', marginBottom: '5px' }}>Asset-Aware Dispatch (Optional)</div>
                    <div style={{ color: '#4a5568', fontSize: '14px', lineHeight: '1.5' }}>Integrates Predictive Maintenance Scores for optimal truck-shovel allocation, significantly reducing unplanned downtime.</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2">
                <img src="/assets/img/manufacturing_automations/truck_fleet_optimization.webp" alt="Fleet Productivity & Truck Optimization" style={{ width: '100%', height: 'auto', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', border: '1px solid #e2e8f0' }} />
              </div>
            </div>

            {/* AI Analysis Engine Graph */}
            <div className="safeload-card" style={{ padding: '40px', background: '#fff', position: 'relative', overflow: 'hidden', marginTop: '40px' }}>
              <div className="text-center mb-5">
                <h4 style={{ color: '#1a2a4a', fontWeight: '800', fontSize: '24px' }}>Data-to-Action Architecture</h4>
                <p style={{ color: '#64748b', fontSize: '15px' }}>How our AI models transform raw telematics into dispatch commands.</p>
              </div>
              
              <div className="row align-items-center position-relative">
                
                {/* LEFT COLUMN */}
                <div className="col-lg-4 position-relative text-center text-lg-start" style={{ zIndex: 1 }}>
                  <div style={{ background: '#1a2a4a', color: '#fff', display: 'inline-block', padding: '6px 16px', borderRadius: '30px', fontSize: '12px', fontWeight: 'bold', marginBottom: '25px' }}>Input Data (IoT & Telematics)</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', textAlign: 'left' }}>
                    {[
                      { label: 'GPS/Dispatch Integration', desc: 'Real-time truck positioning and dispatch sync' },
                      { label: 'Payload Sensors', desc: 'Live load weight per truck cycle' },
                      { label: 'Loading Status', desc: 'Shovel and loader state tracking' },
                      { label: 'Queue Detection', desc: 'Wait-time measurement at loading zones' },
                      { label: 'Fuel Inputs', desc: 'Fuel consumption per route segment' }
                    ].map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <div style={{ width: '8px', height: '8px', background: '#c0001a', borderRadius: '50%', marginTop: '6px', flexShrink: 0 }}></div>
                        <div>
                          <div style={{ fontSize: '14px', fontWeight: '700', color: '#1a2a4a' }}>{item.label}</div>
                          <div style={{ fontSize: '12px', color: '#64748b' }}>{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Mobile downward arrow */}
                  <div className="d-block d-lg-none text-center mt-4 mb-2">
                    <i className="bx bx-down-arrow-alt" style={{ fontSize: '28px', color: '#c0001a' }}></i>
                  </div>
                </div>

                {/* CENTER COLUMN */}
                <div className="col-lg-4 text-center my-2 my-lg-0 position-relative" style={{ zIndex: 1 }}>
                  {/* Desktop horizontal arrows */}
                  <div className="d-none d-lg-block" style={{ position: 'absolute', left: '-20px', top: '50%', width: 'calc(50% - 40px)', transform: 'translateY(-50%)', zIndex: -1, height: '2px' }}>
                    <svg width="100%" height="2" preserveAspectRatio="none">
                      <line x1="0" y1="1" x2="100%" y2="1" stroke="#c0001a" strokeWidth="2" className="animated-data-line" />
                    </svg>
                  </div>
                  <div className="d-none d-lg-block" style={{ position: 'absolute', right: '-20px', top: '50%', width: 'calc(50% - 40px)', transform: 'translateY(-50%)', zIndex: -1, height: '2px' }}>
                    <svg width="100%" height="2" preserveAspectRatio="none">
                      <line x1="0" y1="1" x2="100%" y2="1" stroke="#c0001a" strokeWidth="2" className="animated-data-line" />
                    </svg>
                    <svg width="24" height="20" viewBox="0 0 24 20" style={{ position: 'absolute', right: '-12px', top: '-10px' }}>
                      <polyline points="15,5 21,10 15,15" fill="none" stroke="#c0001a" strokeWidth="2" />
                    </svg>
                  </div>
                  
                  <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', background: '#fff', padding: '10px' }}>
                    <div className="pulse-brain" style={{ width: '100px', height: '100px', background: '#fdf0f2', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '46px', marginBottom: '15px' }}>
                      <i className="bx bx-brain" style={{ fontSize: '64px', color: '#c0001a' }}></i>
                    </div>
                    <div style={{ color: '#1a2a4a', fontSize: '13px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>AI ANALYSIS ENGINE</div>
                    <div style={{ color: '#4a5568', fontSize: '12px' }}>Models & Insights</div>
                  </div>

                  {/* Mobile downward arrow */}
                  <div className="d-block d-lg-none text-center mt-4 mb-2">
                    <i className="bx bx-down-arrow-alt" style={{ fontSize: '28px', color: '#c0001a' }}></i>
                  </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="col-lg-4 position-relative text-center text-lg-start" style={{ zIndex: 1 }}>
                  <div style={{ background: '#1a2a4a', color: '#fff', display: 'inline-block', padding: '6px 16px', borderRadius: '30px', fontSize: '12px', fontWeight: 'bold', marginBottom: '25px' }}>AI-Driven Outputs</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', textAlign: 'left' }}>
                    {['Haul-Cycle Prediction', 'Dispatch Recommendations', 'Idle-Time Analysis', 'Bottleneck Detection'].map((item, i) => (
                      <div key={i} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ width: '24px', height: '24px', background: '#10b981', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', flexShrink: 0 }}>
                          <i className="bx bx-check"></i>
                        </div>
                        <span style={{ fontSize: '14px', fontWeight: '700', color: '#1a2a4a' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Call to Action STRIP - Stuck to bottom */}
          <div style={{ background: '#1a2a4a', padding: '40px 60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', borderTop: '4px solid #c0001a' }}>
            <div>
              <h4 style={{ fontWeight: '800', fontSize: '24px', color: '#fff', marginBottom: '8px' }}>Secure Your Fleet Operations Today</h4>
              <p style={{ fontSize: '15px', color: '#cbd5e1', margin: 0 }}>Deploy intelligent telematics to eliminate leakage, control reckless driving, and maximize your production output.</p>
            </div>
            <a href="#demo" className="btn" style={{ background: '#c0001a', color: '#fff', padding: '12px 28px', borderRadius: '8px', fontWeight: '700', fontSize: '15px', textDecoration: 'none', transition: 'background 0.3s ease', display: 'inline-flex', alignItems: 'center', gap: '8px', whiteSpace: 'nowrap' }} onMouseOver={e => e.currentTarget.style.background = '#a00016'} onMouseOut={e => e.currentTarget.style.background = '#c0001a'}>
              Request a Fleet Demo
            </a>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default SafeLoadAntiLeakage;
