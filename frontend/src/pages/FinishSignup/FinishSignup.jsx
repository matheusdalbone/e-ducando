import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../Firebase/firebaseconfig';
import { isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';

const FinishSignup = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('Finalizando seu acesso, por favor aguarde...');

  useEffect(() => {
    const completeSignIn = async () => {
      if (isSignInWithEmailLink(auth, window.location.href)) {
        let email = window.localStorage.getItem('emailForSignIn');
        if (!email) {
          email = window.prompt('Por favor, confirme seu e-mail para continuar.');
        }
        
        try {
          const result = await signInWithEmailLink(auth, email, window.location.href);
          window.localStorage.removeItem('emailForSignIn');

          const user = result.user;
          
          const trialStartDate = new Date();
          const trialEndDate = new Date();
          trialEndDate.setDate(trialStartDate.getDate() + 7);

          await setDoc(doc(db, "users", user.uid), {
            uid: user.uid,
            email: user.email,
            name: 'Usuário Trial',
            trialStartDate: trialStartDate,
            trialEndDate: trialEndDate,
            role: 'trial',
            createdAt: serverTimestamp(),
          });

          navigate('/testPage');

        } catch (error) {
          console.error(error);
          setMessage('Link de acesso inválido ou expirado. Por favor, tente novamente.');
        }
      } else {
        setMessage('Acesso inválido. Redirecionando...');
        setTimeout(() => navigate('/'), 3000);
      }
    };
    completeSignIn();
  }, [navigate]);

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>Aguarde...</h1>
      <p>{message}</p>
    </div>
  );
};

export default FinishSignup;