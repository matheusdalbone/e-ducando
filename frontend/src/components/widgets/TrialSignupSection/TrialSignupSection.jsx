import React from 'react';
import { useNavigate } from 'react-router-dom';

import TrialSignupModal from '../../common/TrialSignupModal/TrialSignupModal';
import styles from './styles.module.css';

import Button from "../../common/Button/Button";
import Text from "../../common/Text/Text";
import { COLORS } from "../../../utils/globalVariables";
import logo from "../../../assets/icons/logo.svg";

const TrialSignupSection = ({ isOpen, onClose }) => {

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Formulário enviado, navegando...");
    navigate('/testPage');
    };

  return (
    <TrialSignupModal isOpen={isOpen} onClose={onClose}>
      <div className={styles.popupContainer}>
        
        <div className={styles.header}>
          <img src={logo} alt="e-ducando logo" className={styles.logo} />
          <button className={styles.closeButton} onClick={onClose}>
            &times;
          </button>

          <Text as="h3" size="36px" weight="602" color={COLORS.WHITE_COLOR} lineHeight="30px">Comece sua Experiência Gratuita</Text>
          <Text as='p' lineHeight='1.5' size='18px' color={COLORS.WHITE_COLOR}>
            Acesse uma prévia de nossos materiais por 7 dias. <br />
            Não precisa de cartão de crédito.
          </Text>
        </div>

        
        <div className={styles.body}>         
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
                <label htmlFor="name">Nome completo (Opcional)</label>
                <input type="text" id="name" placeholder="Informe seu nome completo..." />
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="email">E-mail (Opcional)</label>
                <input type="email" id="email" placeholder="Informe seu melhor e-mail..." />
            </div>
            
            <Button variant="primary-button">Experimente por 7 dias</Button>

          </form>

          
          <div className={styles.footerLinks}>
            <button className={styles.textLink}>Continuar sem cadastro</button>
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