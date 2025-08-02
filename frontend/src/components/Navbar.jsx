import React from "react";
import styles from "./Navbar.module.css";
import { COLORS } from "../utils/globalVariables";
import Text from "./base/Text/Text";
import Icon from "../assets/icons/logo.svg"

const Navbar = () => {
  return (
    <header className={styles.navbar}
      style={{
        "--primary-color": COLORS.PRIMARY_COLOR,
        "--secondary-color": COLORS.SECONDARY_COLOR,
        "--background-color": COLORS.BACKGROUND_COLOR,
        "--white": COLORS.WHITE_COLOR,
      }}
    >
      <div className={styles.container}> {/* Logo */}
        <img src={Icon} alt="E-ducando" style={{height: "29px"}}/>
        <nav className={styles.navLinks}>
          <Text as='a' color={ COLORS.PRIMARY_COLOR } href="#inicio">Início</Text>
          <Text as='a' color={ COLORS.PRIMARY_COLOR } href="#beneficios">Benefícios</Text>
          <Text as='a' color={ COLORS.PRIMARY_COLOR } href="#acesso">Acesso</Text>
          <Text as='a' color={ COLORS.PRIMARY_COLOR } href="#depoimentos">Depoimentos</Text>
          <Text as='a' color={ COLORS.PRIMARY_COLOR } href="#contato">Contato</Text>
        </nav>

        <button className={styles.ctaButton}>Começar Agora</button>
      </div>
    </header>
  );
};

export default Navbar;
