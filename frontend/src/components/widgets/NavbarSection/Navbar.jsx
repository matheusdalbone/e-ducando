import { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import styles from "./Navbar.module.css";

import { auth } from "../../../Firebase/firebaseconfig";
import { useAuthState } from 'react-firebase-hooks/auth';

import Text from "../../common/Text/Text";
import Button from "../../common/Button/Button";
import Icon from "../../../assets/icons/logo.svg";
import { COLORS } from "../../../utils/globalVariables";
import LoginIcon from "../../../assets/icons/login.svg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();
  const [user] = useAuthState(auth);
  const isTestPage = location.pathname === '/testPage';

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={navbarClasses}>
      <div className={styles.container}>
        <RouterLink to="/">
          <img src={Icon} alt="E-ducando" className="logo-branco" style={{ height: "30px" }} />
        </RouterLink>

        <nav className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
          <Text as={ScrollLink} to="inicio" smooth={'easeInOutCubic'} duration={scrollDuration} offset={scrollOffset} color={COLORS.WHITE_COLOR} onClick={closeMenu} >Início</Text>
          <Text as={ScrollLink} to="beneficios" smooth={'easeInOutCubic'} duration={scrollDuration} offset={scrollOffset} color={COLORS.WHITE_COLOR} onClick={closeMenu} >Benefícios</Text>
          <Text as={ScrollLink} to="depoimentos" smooth={'easeInOutCubic'} duration={scrollDuration} offset={scrollOffset} color={COLORS.WHITE_COLOR} onClick={closeMenu} >Depoimentos</Text>
          <Text as={ScrollLink} to="acesso" smooth={'easeInOutCubic'} duration={scrollDuration} offset={scrollOffset} color={COLORS.WHITE_COLOR} onClick={closeMenu} >Acesso</Text>

          {isTestPage ? (
            user && (
              <div className={`${styles.profileSection} ${styles.mobileButton}`}>
                <span>Olá, {user.displayName || 'Estudante'}!</span>
                <img src={LoginIcon} alt="user login" className={styles.profileIcon} />
              </div>
            )
          ) : (
            <RouterLink to="loginPage" className={styles.mobileButton}>
              <Button variant="primary-button">Começar Agora</Button>
            </RouterLink>
          )}
        </nav>

        {isTestPage ? (
          // Se estiver na testPage, mostra a saudação
          user && (
            <div className={`${styles.profileSection} ${styles.desktopButton}`}>
              <span>Olá, {user.displayName || 'Estudante'}!</span>
              <img src={LoginIcon} alt="user login" className={styles.profileIcon} />
            </div>
          )
        ) : (
          <RouterLink to="loginPage" className={styles.desktopButton}>
            <Button onClick={() => console.log('Clicou em Começar Agora')} variant="primary-button">Começar Agora</Button>
          </RouterLink>
        )}

        <button className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`} onClick={toggleMenu}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
