import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HeroSection from '../../pages/HeroSection/HeroSection';
import Benefits from '../../pages/Benefits/Benefits';
import Access from '../../pages/Access/Access';
import Testimonials from '../../pages/Testimonials/Testimonials';
import Contact from '../../pages/Contact/Contact';

const RoutesApp = () => {

  return (
    <Routes>
      <Route path="/" element={ <HeroSection />} />
      <Route path="/beneficios" element={ <Benefits />} />
      <Route path="/acesso" element={ <Access />} />
      <Route path="/depoimentos" element={ <Testimonials />} />
      <Route path="/contato" element={ <Contact />} />
    </Routes>
  );
}

export default RoutesApp;