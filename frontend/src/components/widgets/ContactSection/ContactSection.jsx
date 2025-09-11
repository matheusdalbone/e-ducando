import React from 'react';

import styles from './styles.module.css';
import { COLORS } from '../../../utils/globalVariables';

import Text from '../../common/Text/Text';
import ContactFormWidget from '../Forms/ContactFormWidget/ContactFormWidget';
import ContactUsModal from '../../common/ContactUsModal/ContactUsModal';

const ContactSection = () => {

  return (
    <section className={styles.formsSection}>
      <div className={styles.titleSection}>
        <Text weight="700" size="32px" color={ COLORS.TERCIARY_COLOR }>Formulário de Contato</Text>
        <Text weight="400" size="20px" lineHeight="32px" color={ COLORS.NEUTRAL_COLOR } opacity="0.5">Tem dúvidas? Entre em contato com a nossa equipe</Text>
      </div>
      <div className={styles.container}>
        <ContactFormWidget />
        <ContactUsModal/>
      </div>
    </section>
  );
}

export default ContactSection;