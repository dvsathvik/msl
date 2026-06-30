import React from 'react';
import { Link } from 'react-router-dom';

const PageBreadcrumb = ({ productName }) => {
  return (
    <div style={{ background: '#1a2a4a', paddingTop: '75px', paddingBottom: '15px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        <span style={{ color: '#a0aec0', fontSize: '13px', fontFamily: 'Inter, sans-serif' }}>
          <Link to="/" className="breadcrumb-link">Home</Link> <span style={{ margin: '0 8px' }}>&gt;</span> 
          <span>Products</span> <span style={{ margin: '0 8px' }}>&gt;</span> 
          <span style={{ color: '#ffffff', fontWeight: '500' }}>{productName}</span>
        </span>
      </div>
    </div>
  );
};

export default PageBreadcrumb;
