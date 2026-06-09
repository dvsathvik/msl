import React from 'react';

const Placeholder = ({ title }) => {
  return (
    <main id="main">
      <section className="section-bg" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="container text-center">
          <h2>{title} Page</h2>
          <p>This page is currently empty and will be built later.</p>
        </div>
      </section>
    </main>
  );
};

export default Placeholder;
