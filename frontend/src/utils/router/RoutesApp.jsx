import React from 'react';
import { AuthProvider } from '../../context/AuthContext';
import { Routes, Route } from 'react-router';

import ProtectedRoute from '../../components/auth/ProtectedRoute';
import HeroSection from '../../pages/HeroSection/HeroSection';
import PageError from '../../components/widgets/PageError/PageError';
import TestPageSection from '../../pages/TestPageSection/TestPageSection';
import FinishSignup from '../../pages/FinishSignup/FinishSignup';

const RoutesApp = () => {

  return (
    <AuthProvider>
    <Routes>
      <Route path="/" element={ <HeroSection />} />
      <Route path="/testPage" element={<TestPageSection pageName="Página de Login" />} />

      <Route element={<ProtectedRoute />}>
      <Route path="/pageWithoutLogin" element={<PageError pageName="Página Sem Login" />} />
      <Route path="/loginPage" element={<PageError pageName="Página de Login" />} />
      <Route path="/testPage" element={<TestPageSection pageName="Página de Teste" />} />
      <Route path="/finishSignup" element={<FinishSignup pageName="Finaliza Cadastro" />} />
      </Route>
    </Routes>
    </AuthProvider>
  );
}

export default RoutesApp;