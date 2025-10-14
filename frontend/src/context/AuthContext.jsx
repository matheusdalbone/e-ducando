import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../Firebase/firebaseconfig';
import { doc, getDoc } from 'firebase/firestore';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, loadingAuth] = useAuthState(auth);
  const [isTrialExpired, setTrialExpired] = useState(false);
  const [loadingTrial, setLoadingTrial] = useState(true);

  useEffect(() => {
    const checkTrialStatus = async () => {
      if (!user) {
        setTrialExpired(false);
        setLoadingTrial(false);
        return;
      }

      const userDocRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(userDocRef);

      if (docSnap.exists()) {
        const userData = docSnap.data();
        const trialEndDate = userData.trialEndDate.toDate();
        // Verifica se a data atual é MAIOR que a data de fim do teste
        if (new Date() > trialEndDate) {
          setTrialExpired(true);
        } else {
          setTrialExpired(false);
        }
      } else {
        // Se o utilizador não tem um registo de teste (caso de erro ou utilizador antigo),
        // consideramos o teste como expirado para forçar o cadastro.
        setTrialExpired(true);
      }
      setLoadingTrial(false);
    };

    // Só verifica o status se a autenticação já tiver sido carregada
    if (!loadingAuth) {
      checkTrialStatus();
    }
  }, [user, loadingAuth]);

  const value = {
    user,
    isTrialExpired,
    loading: loadingAuth || loadingTrial,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Hook personalizado para usar facilmente o contexto
export const useAuth = () => {
  return useContext(AuthContext);
};