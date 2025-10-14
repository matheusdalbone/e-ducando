import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { auth } from "../../../Firebase/firebaseconfig";
import {
  signInAnonymously,
  updateProfile,
} from "firebase/auth";

import { db } from "../../../Firebase/firebaseconfig";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";

import TrialSignupModal from '../../common/TrialSignupModal/TrialSignupModal';
import styles from './styles.module.css';

import Button from "../../common/Button/Button";
import Text from "../../common/Text/Text";
import { COLORS } from "../../../utils/globalVariables";
import logo from "../../../assets/icons/logo.svg";

const TrialSignupSection = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const userCredential = await signInAnonymously(auth);
      const user = userCredential.user;

      const userDocRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(userDocRef);

      //Verifica se o documento NÃO existe
      if (!docSnap.exists()) {
        const trialStartDate = new Date();
        const trialEndDate = new Date();
        trialEndDate.setDate(trialStartDate.getDate() + 7);

         await setDoc(userDocRef, {
          uid: user.uid,
          displayName: name.trim() || 'Estudante Anónimo',
          isAnonymous: true,
          role: 'trial_user',
          trialStartDate: trialStartDate,
          trialEndDate: trialEndDate,
          createdAt: serverTimestamp(),
        });
        console.log("Novo utilizador de teste criado. Teste termina em:", trialEndDate);
      } else {
        console.log("Utilizador já existente. A verificar o estado do teste...");
      }

      if (name.trim() !== '') {
        await updateProfile(user, {
          displayName: name
        });
        console.log("Perfil anonimo atualizado com o nome:", name);
      } else {
        console.log("Login anonimo sem nome, UID:", user.uid);
      }

      setLoading(false);
      navigate('/testPage');

    } catch (err) {
      console.error("Erro no login anonimo:", err);
      setError("Não foi possível continuar. Tente novamente mais tarde.");
      setLoading(false);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setError('');
      setEmail('');
      setName('');
    }, 300);
  };

  return (
    <TrialSignupModal isOpen={isOpen} onClose={handleClose}>
      <div className={styles.popupContainer}>

        <div className={styles.header}>
          <img src={logo} alt="e-ducando logo" className={styles.logo} />
          <button className={styles.closeButton} onClick={handleClose}>
          </button>
          <Text as="h3" size="32px" weight="602" color={COLORS.WHITE_COLOR} lineHeight="30px">Comece sua Experiência Gratuita</Text>
          <Text as='p' lineHeight='1.5' size='22px' color={COLORS.WHITE_COLOR}>
            Acesse uma prévia de nossos materiais por 7 dias.
          </Text>
        </div>

        <div className={styles.body}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Seu nome (Opcional)</label>
              <input
                type="text"
                id="name"
                placeholder="Como podemos te chamar?"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email">E-mail (Opcional)</label>
              <input
                type="email"
                id="email"
                placeholder="Usado apenas para contato futuro..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            {error && <p className={styles.errorMessage}>{error}</p>}

            <Button type="submit" variant="primary-button" disabled={loading}>
              {loading ? 'A entrar...' : 'Começar a experiência'}
            </Button>

          </form>

          <div className={styles.footerLinks}>
            <button
              className={styles.textLink}
              onClick={handleSubmit}
              disabled={loading}
            >
              Continuar sem cadastro
            </button>
            <p>
              Já tem uma conta?{' '}
              <button className={styles.textLink}>Fazer login</button>
            </p>
          </div>
        </div>

      </div>
    </TrialSignupModal>
  );
};

export default TrialSignupSection;