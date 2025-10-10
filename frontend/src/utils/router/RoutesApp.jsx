import React from 'react';
import { Routes, Route } from 'react-router';

import HeroSection from '../../pages/HeroSection/HeroSection';
import PageError from '../../components/widgets/PageError/PageError';
import TestPageSection from '../../pages/TestPageSection/TestPageSection';
import FinishSignup from '../../pages/FinishSignup/FinishSignup';

const RoutesApp = () => {

  return (
    <Routes>
      <Route path="/" element={ <HeroSection />} />
      <Route path="/pageWithoutLogin" element={<PageError pageName="Página Sem Login" />} />
      <Route path="/loginPage" element={<PageError pageName="Página de Login" />} />
      <Route path="/testPage" element={<TestPageSection pageName="Página de Teste" />} />
      <Route path="/finishSignup" element={<FinishSignup pageName="Finaliza Cadastro" />} />
    </Routes>
  );
}

export default RoutesApp;