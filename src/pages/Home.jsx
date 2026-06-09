import React from 'react';
import Hero from '../components/Hero';
import Clients from '../components/Clients';
import AboutPreview from '../components/AboutPreview';
import Stats from '../components/Stats';

const Home = () => {
  return (
    <>
      <Hero />
      <main id="main">
        <Clients />
        <AboutPreview />
        <Stats />
      </main>
    </>
  );
};

export default Home;
