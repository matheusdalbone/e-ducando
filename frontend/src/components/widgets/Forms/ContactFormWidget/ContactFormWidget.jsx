import React from 'react';

import styles from './styles.module.css';

import Text from '../../../common/Text/Text';
import Checkbox from '../../../common/Checkbox/Checkbox';
import Input from '../../../common/Input/Input';
import Modal from '../../../common/Modal/Modal';
import Button from '../../../common/Button/Button';

import { COLORS } from '../../../../utils/globalVariables';

const ContactFormWidget = () => {

   const handleSubmit = (e) => {
    //to do the react hook forms logic
     alert("Funcionando");
  };

  return (
    <Modal>
      <div className={ styles.titleContainer }>
        <Text weight='700' size='20px' color={ COLORS.TERCIARY_COLOR }>Envie sua mensagem</Text>
      </div>
      <form className={ styles.formContainer } onSubmit={handleSubmit}>
        <div className={ styles.contactContainer }>
          <Input title="Nome" description="Seu nome completo" width="207px"></Input>
          <Input title="Telefone" description="(11) 0000-0000" width="207px"></Input>
        </div>
          <Input title="E-mail" description="seu@email.com" width="591px"></Input>
          <Input title="Dúvida" description="Como podemos ajudar você?" width="591px" height="83px"></Input>
          <Checkbox title="Aceito o uso dos meus dados para entrar em contato comigo"></Checkbox>
          <Button variant="primary-button" width='591px' type="submit">Experimente Agora</Button>
      </form>
    </Modal>
  );
}

export default ContactFormWidget;