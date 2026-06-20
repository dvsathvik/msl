import React from 'react';

const Clients = () => {
  const logos = [
    { src: '/assets/img/companies/LT_technology_service.png', height: '56px' },
    { src: '/assets/img/companies/mirafra_technologies.png', height: '64px' },
    { src: '/assets/img/companies/toyada-logo-dark.png', height: '72px' },
    { src: '/assets/img/companies/ridenext_logo.png', height: '56px' },
    { src: '/assets/img/companies/adroitec.png', height: '60px' },
  ];

  return (
    <section id="clients" className="clients section-white">
      <div className="container-fluid" data-aos="zoom-in" style={{ padding: '0 5%' }}>
        <div className="section-title" style={{ paddingBottom: '30px' }}>
          <h2 style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px', color: '#6b7280', fontWeight: '600' }}>Trusted By Industry Leaders</h2>
        </div>
        <div className="row justify-content-center text-center">
          <div className="col-12 d-flex justify-content-between align-items-center" style={{ flexWrap: 'nowrap', gap: '1rem' }}>
            {logos.map((logo, index) => (
              <img 
                key={index}
                src={logo.src} 
                className="img-fluid" 
                alt={`Trusted Company ${index + 1}`} 
                style={{ 
                  height: logo.height, 
                  width: 'auto',
                  maxWidth: '18%',
                  filter: 'grayscale(100%)', 
                  opacity: '0.65', 
                  transition: 'all 0.3s ease', 
                  objectFit: 'contain' 
                }} 
                onMouseOver={(e) => { e.currentTarget.style.filter = 'none'; e.currentTarget.style.opacity = '1'; }} 
                onMouseOut={(e) => { e.currentTarget.style.filter = 'grayscale(100%)'; e.currentTarget.style.opacity = '0.65'; }} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;

