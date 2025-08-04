import React from 'react';
import styles from './styles.module.css';
import Icon from '../Icons/Icons'
import Text from '../Text/Text';
import Button from '../Button/Button';
import { COLORS } from '../../../utils/globalVariables';

const TrialCardModal = ({ iconSrc, iconAlt, title, description, hideButton = false }) => {
  return (
    <div className={styles.trialCard}>
      <div className={styles.iconWrapper}>
        <img src={iconSrc} alt={iconAlt} size={60} />
      </div>
      <Text as='h3' color={COLORS.BLACK_COLOR}>{title}</Text>
      <Text as='p' color={COLORS.BLACK_COLOR}>{description}</Text>

      {!hideButton && (
      <div className={styles.button}>
      <Button onClick={() => console.log('Clicou em Experimente Agora')} variant="primary-button">Iniciar simulação gratuita</Button>
      </div>
)}
    </div>

  );
};

export default TrialCardModal;