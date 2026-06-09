import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Placeholder from './pages/Placeholder';
import Manufacturing from './pages/Manufacturing';
import AiSolutions from './pages/AiSolutions';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        {/* Products */}
        <Route path="/products/manufacturing" element={<Manufacturing />} />
        <Route path="/products/manufacturing/:productId" element={<Manufacturing />} />
        {/* AI Solutions */}
        <Route path="/products/ai" element={<AiSolutions />} />
        <Route path="/products/ai/:productId" element={<AiSolutions />} />
        
        <Route path="/products" element={<Placeholder title="Products" />} />
        <Route path="/products/:slug" element={<Placeholder title="Product Details" />} />
        
        {/* Services */}
        <Route path="/services" element={<Placeholder title="Services" />} />
        <Route path="/services/:slug" element={<Placeholder title="Service Details" />} />
        
        <Route path="/training" element={<Placeholder title="Training" />} />
        <Route path="/career" element={<Placeholder title="Career" />} />
        <Route path="/contact" element={<Placeholder title="Contact Us" />} />
        
        {/* Fallback */}
        <Route path="*" element={<Placeholder title="404 Not Found" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
