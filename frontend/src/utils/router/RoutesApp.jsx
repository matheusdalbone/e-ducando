import React from 'react';
import { Routes, Route } from 'react-router';

import HeroSection from '../../pages/HeroSection/HeroSection';

const RoutesApp = () => {

  return (
    <Routes>
      <Route path="/" element={ <HeroSection />} />
    </Routes>
  );
}

export default RoutesApp;