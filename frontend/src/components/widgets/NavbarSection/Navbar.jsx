import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import styles from "./Navbar.module.css";

import Text from "../../common/Text/Text";
import Button from "../../common/Button/Button";
import Icon from "../../../assets/icons/logo.svg";
import { COLORS } from "../../../utils/globalVariables";

const Navbar = () => {
  const scrollOffset = -80;
  const scrollDuration = 900;

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <RouterLink to="/">
          <img src={Icon} alt="E-ducando" style={{ height: "29px" }} />
        </RouterLink>

        <nav className={styles.navLinks}>
          <Text as={ScrollLink} to="inicio" smooth={'easeInOutQuint'} duration={scrollDuration} offset={scrollOffset} color={COLORS.PRIMARY_COLOR} >Início</Text>
          <Text as={ScrollLink} to="beneficios" smooth={'easeInOutQuint'} duration={scrollDuration} offset={scrollOffset} color={COLORS.PRIMARY_COLOR} >Benefícios</Text>
          <Text as={ScrollLink} to="acesso" smooth={'easeInOutQuint'} duration={scrollDuration} offset={scrollOffset} color={COLORS.PRIMARY_COLOR} >Acesso</Text>
          <Text as={ScrollLink} to="depoimentos" smooth={'easeInOutQuint'} duration={scrollDuration} offset={scrollOffset} color={COLORS.PRIMARY_COLOR} >Depoimentos</Text>
          <Text as={ScrollLink} to="contato" smooth={'easeInOutQuint'} duration={scrollDuration} offset={scrollOffset} color={COLORS.PRIMARY_COLOR} >Contato</Text>
        </nav>

        <Button onClick={() => console.log('Clicou em Começar Agora')} variant="primary-button">Começar Agora</Button>
      </div>
    </header>
  );
};

export default Navbar;
