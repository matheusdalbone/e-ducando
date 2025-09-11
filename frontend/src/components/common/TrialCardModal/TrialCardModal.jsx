import React from 'react';
import styles from './styles.module.css';
import Icon from '../Icons/Icons'
import Text from '../Text/Text';
import { COLORS } from '../../../utils/globalVariables';

const TrialCardModal = ({ Icon, iconAlt, title, description}) => {
  return (
    <div className={styles.trialCard}>
      <div className={styles.iconWrapper}>
        <Icon alt={iconAlt} className={styles.cardIcon} />
      </div>
      <Text as='h3' color={COLORS.TERCIARY_COLOR}>{title}</Text>
      <Text as='p' color={COLORS.BLACK_COLOR}>{description}</Text>
    </div>

  );
};

export default TrialCardModal;