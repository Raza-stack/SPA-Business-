import React from 'react';
import Hero from '../components/Hero';
import ServicesSection from '../components/Services';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

const Home = () => {
  return (
    <div>
      <Hero />
      <ServicesSection />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default Home;