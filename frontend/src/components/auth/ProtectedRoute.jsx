import React, { useState, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../Firebase/firebaseconfig';
import { doc, getDoc } from 'firebase/firestore';

const ProtectedRoute = () => {
  const [user, loadingAuth] = useAuthState(auth);
  const [isTrialValid, setTrialValid] = useState(false);
  const [loadingCheck, setLoadingCheck] = useState(true);

  useEffect(() => {
    const checkTrialStatus = async () => {
      if (user) {
        const userDocRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(userDocRef);

        if (docSnap.exists()) {
          const userData = docSnap.data();
          const trialEndDate = userData.trialEndDate.toDate(); // Converte o timestamp para data
          
          if (new Date() < trialEndDate) {
            setTrialValid(true); // O teste ainda é válido
          } else {
            setTrialValid(false); // O teste expirou
          }
        } else {
          setTrialValid(false); // Não há registo do teste
        }
      }
      setLoadingCheck(false);
    };

    if (!loadingAuth) {
      checkTrialStatus();
    }
  }, [user, loadingAuth]);

  if (loadingAuth || loadingCheck) {
    return <div>A verificar o seu acesso...</div>; // Ecrã de carregamento
  }

  if (!user) {
    return <Navigate to="/" />; // Se não estiver logado, volta para a página inicial
  }

  if (!isTrialValid) {
    return <Navigate to="/loginPage" />; 
  }

  return <Outlet />;
};

export default ProtectedRoute;