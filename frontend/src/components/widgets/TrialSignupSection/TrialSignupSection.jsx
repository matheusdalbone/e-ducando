import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { auth } from "../../../Firebase/firebaseconfig";
import { 
  sendSignInLinkToEmail,
  signInAnonymously,
  setPersistence,
  browserSessionPersistence
} from "firebase/auth";

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
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    const actionCodeSettings = {
      // URL para onde o usuário será redirecionado após clicar no link do e-mail.
      // CUIDADO: Esta URL deve estar nos "Domínios autorizados" no seu Firebase Console.
      // Em produção, mude para a URL do seu site.
        url: continueUrl,
        handleCodeInApp: true,
    };

    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      // Salva o e-mail no navegador para recuperá-lo na página de finalização
      window.localStorage.setItem('emailForSignIn', email);
      setLoading(false);
      setEmailSent(true); // Mostra a mensagem de sucesso
    } catch (err) {
      console.error("ERRO DETALHADO DO FIREBASE:", err);
      // Mostra o código e a mensagem exata do erro na tela
      setError(`Erro do Firebase: ${err.code} - Tente uma das soluções abaixo.`); // <--- NOVA LINHA
      setLoading(false);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setEmailSent(false);
      setError('');
      setEmail('');
      setName('');
    }, 300);
  };

    const handleAnonymousSignIn = async () => {
    setLoading(true);
    setError('');
   
    try {
      await setPersistence(auth, browserSessionPersistence);
      
      // Passo 2: Faz o login anónimo.
      const userCredential = await signInAnonymously(auth);
      const user = userCredential.user;

      console.log("Login anónimo bem-sucedido, UID:", user.uid);
      
      // Opcional: Você pode querer salvar um documento no Firestore para este utilizador anónimo
      // para rastrear o início do "trial", se necessário, mas não é obrigatório.
      // await setDoc(doc(db, "users", user.uid), {
      //   uid: user.uid,
      //   role: 'estudante',
      //   isAnonymous: true,
      //   createdAt: serverTimestamp(),
      // });
      
      setLoading(false);
      navigate('/testPage'); // Redireciona para a página de teste

    } catch (err) {
      console.error("Erro no login anónimo:", err);
      setError("Não foi possível continuar. Tente novamente mais tarde.");
      setLoading(false);
    }
  };

  return (
    <TrialSignupModal isOpen={isOpen} onClose={handleClose}>
      <div className={styles.popupContainer}>

        <div className={styles.header}>
          <img src={logo} alt="e-ducando logo" className={styles.logo} />
          <button className={styles.closeButton} onClick={onClose}>
          </button>

          <Text as="h3" size="32px" weight="602" color={COLORS.WHITE_COLOR} lineHeight="30px">Comece sua Experiência Gratuita</Text>
          <Text as='p' lineHeight='1.5' size='22px' color={COLORS.WHITE_COLOR}>
            Acesse uma prévia de nossos materiais por 7 dias. Não precisa <br />de cartão de crédito.
          </Text>
        </div>


        <div className={styles.body}>
          {emailSent ? (
            <div className={styles.successMessage}>
              <h4>Verifique seu e-mail!</h4>
              <p>Enviamos um link de acesso para <strong>{email}</strong>. Clique nele para iniciar seu teste gratuito.</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <label htmlFor="name">Nome completo (Opcional)</label>
                <input type="text" id="name" placeholder="Informe seu nome completo..." value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="email">E-mail (Opcional)</label>
                <input type="email" id="email" placeholder="Informe seu melhor e-mail..." required value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>

              {error && <p className={styles.errorMessage}>{error}</p>}

              <Button variant="primary-button">Experimente por 7 dias</Button>

            </form>

          )}

          <div className={styles.footerLinks}>
            <button className={styles.textLink} onClick={handleAnonymousSignIn}
              disabled={loading}>Continuar sem cadastro</button>
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
