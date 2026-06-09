import React from 'react';

const Clients = () => {
  return (
    <section id="clients" className="clients section-white">
      <div className="container" data-aos="zoom-in">
        <div className="section-title" style={{ paddingBottom: '20px' }}>
          <h2 style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px', color: '#6b7280', fontWeight: '600' }}>Trusted By Industry Leaders</h2>
        </div>
        <div className="row justify-content-center text-center">
          <div className="col-lg-10">
            <img 
              src="/Companies_list.png" 
              className="img-fluid" 
              alt="Trusted Companies" 
              style={{ maxHeight: '80px', filter: 'grayscale(100%)', opacity: '0.65', transition: 'all 0.3s ease' }} 
              onMouseOver={(e) => { e.currentTarget.style.filter = 'none'; e.currentTarget.style.opacity = '1'; }} 
              onMouseOut={(e) => { e.currentTarget.style.filter = 'grayscale(100%)'; e.currentTarget.style.opacity = '0.65'; }} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
