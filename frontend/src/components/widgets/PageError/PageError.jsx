import React from 'react';
import styles from './styles.module.css';
import Button from "../../../components/common/Button/Button";
import Text from '../../common/Text/Text';
import { COLORS } from "../../../utils/globalVariables";

const PageError = ({ pageName }) => {
  return (
    <div className={styles.container}>
      <div className={styles.emoji} role="img" aria-label="Construção">
        🚧
      </div>
      <Text as="h1" size="64px" weight="700" color={ COLORS.PRIMARY_COLOR } lineHeight="60px">{pageName}</Text>
      <Text as="p" size="24px" weight="700" color={ COLORS.SECONDARY_COLOR } lineHeight="60px">Esta página está em construção. Volte em breve!</Text>
      
      <Button onClick={() => window.history.back()} variant="primary-button">
        Voltar
      </Button>
    </div>
  );
};

export default PageError;