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
            background: #f5f7fa;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background 0.3s ease;
          }
          .safeload-icon-circle i {
            font-size: 24px;
            color: #1a2a4a;
            transition: color 0.3s ease;
          }
          .safeload-card:hover .safeload-icon-circle {
            background: rgba(192,0,26,0.1);
          }
          .safeload-card:hover .safeload-icon-circle i {
            color: #c0001a;
          }
          @keyframes pulse-ring {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.08); opacity: 0.4; }
            100% { transform: scale(1); opacity: 1; }
          }
          .pulse-brain {
            animation: pulse-ring 2s infinite ease-in-out;
          }
          .safeload-cta {
            background: #c0001a;
            color: #fff;
            padding: 14px 36px;
            border-radius: 8px;
            font-weight: 700;
            text-decoration: none;
            transition: background 0.3s ease;
            display: inline-block;
          }
          .safeload-cta:hover {
            background: #a0001a;
            color: #fff;
          }
        `}
      </style>

      {/* PART 1 — SafeLoad Use Cases */}
      <div className="container" data-aos="fade-up">
        <div style={{ background: '#fff', borderRadius: '24px', padding: '50px', boxShadow: '0 10px 40px rgba(0,0,0,0.04)' }}>

        <div className="row g-4 mb-5">
          <div className="col-lg-4">
            <div className="safeload-card h-100" style={{ padding: '30px' }}>
              <div className="safeload-icon-circle mb-4">
                <i className="bx bx-shield-alt-2"></i>
              </div>
              <h4 style={{ color: '#c0001a', fontWeight: '700', fontSize: '18px', marginBottom: '15px' }}>Coal Theft & Leakage Prevention</h4>
              <p className="msl-text-body" style={{ fontSize: '15px', lineHeight: '1.6', margin: 0 }}>Compare source loading, route path, stop events, and dump-point validation to prevent coal leakage at every stage.</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="safeload-card h-100" style={{ padding: '30px' }}>
              <div className="safeload-icon-circle mb-4">
                <i className="bx bx-car"></i>
              </div>
              <h4 style={{ color: '#c0001a', fontWeight: '700', fontSize: '18px', marginBottom: '15px' }}>Reckless Driving Control</h4>
              <p className="msl-text-body" style={{ fontSize: '15px', lineHeight: '1.6', margin: 0 }}>Detect over-speeding, route deviation, harsh driving, and unauthorized stops using real-time vehicle behavior analytics.</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="safeload-card h-100" style={{ padding: '30px' }}>
              <div className="safeload-icon-circle mb-4">
                <i className="bx bx-broadcast"></i>
              </div>
              <h4 style={{ color: '#c0001a', fontWeight: '700', fontSize: '18px', marginBottom: '15px' }}>Emergency Response</h4>
              <p className="msl-text-body" style={{ fontSize: '15px', lineHeight: '1.6', margin: 0 }}>Send live position and alert status directly to the control room to significantly reduce emergency response time.</p>
            </div>
          </div>
        </div>

        <div style={{ background: '#1a2a4a', borderRadius: '16px', padding: '30px 40px' }}>
          <div className="row align-items-center">
            <div className="col-lg-8 mb-3 mb-lg-0">
              <h4 style={{ color: '#fff', fontSize: '22px', fontWeight: 'bold', marginBottom: '10px' }}>Why Haul Roads Matter</h4>
              <p style={{ color: '#cbd5e0', fontSize: '15px', margin: 0, lineHeight: '1.6' }}>Haul roads drive a significant share of mining operating costs and directly affect safe truck performance. Road monitoring and driving behavior control deliver both safety and productivity benefits.</p>
            </div>
            <div className="col-lg-4 text-start text-lg-end">
              <span style={{ display: 'inline-block', background: 'rgba(192,0,26,0.2)', color: '#ff6b7a', fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', padding: '8px 16px', borderRadius: '30px', letterSpacing: '0.5px' }}>SAFELOAD • ANTI-LEAKAGE PLATFORM</span>
            </div>
          </div>
        </div>

        <hr style={{ borderColor: '#e2e8f0', margin: '30px 0' }} />

        {/* PART 2 — Fleet Productivity & Haul Cycle Optimization */}
          <div className="section-title text-center mb-4">
            <h2 className="msl-navy title-case" style={{ fontSize: '32px', fontWeight: '800' }}>Fleet Productivity & Haul Cycle Optimization</h2>
            <p className="msl-text-body" style={{ fontSize: '16px', maxWidth: '800px', margin: '0 auto' }}>
              AI models utilize telematics, payload, route, queue, and equipment-state data to optimize truck-shovel assignments and raise tons-per-hour performance.
            </p>
          </div>

          <div className="safeload-card" style={{ padding: '40px', background: '#fff', position: 'relative', overflow: 'hidden' }}>
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
                <div className="d-none d-lg-block" style={{ position: 'absolute', left: '-20px', top: '50%', width: 'calc(50% - 40px)', borderTop: '2px dashed #c0001a', transform: 'translateY(-50%)', zIndex: -1 }}></div>
                <div className="d-none d-lg-block" style={{ position: 'absolute', right: '-20px', top: '50%', width: 'calc(50% - 40px)', borderTop: '2px dashed #c0001a', transform: 'translateY(-50%)', zIndex: -1 }}>
                  <svg width="24" height="20" viewBox="0 0 24 20" style={{ position: 'absolute', right: '-12px', top: '-10px' }}>
                    <polyline points="15,5 21,10 15,15" fill="none" stroke="#c0001a" strokeWidth="2" />
                  </svg>
                </div>
                
                <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', background: '#fff', padding: '10px' }}>
                  <div className="pulse-brain" style={{ width: '100px', height: '100px', background: '#fdf0f2', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
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
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'left' }}>
                  {['Haul-Cycle Prediction', 'Dispatch Recommendations', 'Idle-Time Analysis', 'Bottleneck Detection'].map((item, i) => (
                    <div key={i} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ width: '20px', height: '20px', background: '#10b981', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', flexShrink: 0 }}>
                        <i className="bx bx-check"></i>
                      </div>
                      <span style={{ fontSize: '14px', fontWeight: '700', color: '#1a2a4a' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          <div style={{ background: '#fff', borderLeft: '4px solid #c0001a', borderRadius: '8px', padding: '20px 30px', marginTop: '30px', display: 'flex', alignItems: 'flex-start', gap: '15px', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
            <i className="bx bx-wrench" style={{ fontSize: '32px', color: '#1a2a4a', marginTop: '2px' }}></i>
            <div>
              <div style={{ color: '#1a2a4a', fontWeight: 'bold', fontSize: '16px', marginBottom: '5px' }}>Asset-Aware Dispatch (Optional Feature)</div>
              <div style={{ color: '#4a5568', fontSize: '14px' }}>Integrates Predictive Maintenance Scores for optimal truck-shovel allocation, reducing unplanned downtime.</div>
            </div>
          </div>

          <div className="text-center" style={{ marginTop: '50px' }}>
            <a href="#demo" className="safeload-cta">
              Request a Fleet Demo
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SafeLoadAntiLeakage;
