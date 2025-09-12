import { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import styles from "./Navbar.module.css";

import Text from "../../common/Text/Text";
import Button from "../../common/Button/Button";
import Icon from "../../../assets/icons/logo.svg";
import { COLORS } from "../../../utils/globalVariables";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const scrollOffset = -80;
  const scrollDuration = 200;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarClasses = scrolled ? `${styles.navbar} ${styles.navbarScrolled}` : styles.navbar;

  return (
    <header className={navbarClasses}>
      <div className={styles.container}>
        <RouterLink to="/">
          <img src={Icon} alt="E-ducando" className="logo-branco" style={{ height: "30px" }} />
        </RouterLink>

        <nav className={styles.navLinks}>
          <Text as={ScrollLink} to="inicio" smooth={'easeInOutCubic'} duration={scrollDuration} offset={scrollOffset} color={COLORS.WHITE_COLOR} >Início</Text>
          <Text as={ScrollLink} to="beneficios" smooth={'easeInOutCubic'} duration={scrollDuration} offset={scrollOffset} color={COLORS.WHITE_COLOR} >Benefícios</Text>
          <Text as={ScrollLink} to="depoimentos" smooth={'easeInOutCubic'} duration={scrollDuration} offset={scrollOffset} color={COLORS.WHITE_COLOR} >Depoimentos</Text>
          <Text as={ScrollLink} to="acesso" smooth={'easeInOutCubic'} duration={scrollDuration} offset={scrollOffset} color={COLORS.WHITE_COLOR} >Acesso</Text>
        </nav>

        <RouterLink to="loginPage">
          <Button onClick={() => console.log('Clicou em Começar Agora')} variant="primary-button">Começar Agora</Button>
        </RouterLink>
      </div>
    </header>
  );
};

export default Navbar;
