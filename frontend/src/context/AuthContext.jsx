import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../Firebase/firebaseconfig';
import { doc, getDoc } from 'firebase/firestore';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, loadingAuth] = useAuthState(auth);
  const [isTrialExpired, setTrialExpired] = useState(false);
  const [loadingTrial, setLoadingTrial] = useState(true);

  const checkTrialStatus = useCallback(async (currentUser) => {
    const userToCheck = currentUser || user;

    setLoadingTrial(true);
    if (!userToCheck) {
      setTrialExpired(false);
      setLoadingTrial(false);
      return;
    }

    const userDocRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(userDocRef);

    if (docSnap.exists()) {
      const userData = docSnap.data();
      const trialEndDate = userData.trialEndDate.toDate();
      setTrialExpired(new Date() > trialEndDate);
    } else {
      setTrialExpired(false);
    }
    setLoadingTrial(false);
  }, [user]);

  useEffect(() => {
    if (!loadingAuth) {
      checkTrialStatus();
    }
  }, [user, loadingAuth, checkTrialStatus]);

  const value = {
    user,
    isTrialExpired,
    loading: loadingAuth || loadingTrial,
    recheckTrialStatus: checkTrialStatus,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Hook personalizado para usar facilmente o contexto
export const useAuth = () => {
  return useContext(AuthContext);
};