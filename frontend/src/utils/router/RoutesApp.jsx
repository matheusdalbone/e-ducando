import React from 'react';
import { Routes, Route } from 'react-router';

import HeroSection from '../../pages/HeroSection/HeroSection';
import PageError from '../../components/widgets/PageError/PageError';

const RoutesApp = () => {

  return (
    <Routes>
      <Route path="/" element={ <HeroSection />} />
      <Route path="/pageWithoutLogin" element={<PageError pageName="Página Sem Login" />} />
      <Route path="/loginPage" element={<PageError pageName="Página de Login" />} />
    </Routes>
  );
}

export default RoutesApp;