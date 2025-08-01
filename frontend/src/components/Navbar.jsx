import React from "react";
import styles from "./Navbar.module.css";
import { COLORS } from "../utils/globalVariables";

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
        <h1 className={styles.logo}>E-ducando</h1>
        <nav className={styles.navLinks}>
          <a href="#inicio">Início</a>
          <a href="#beneficios">Benefícios</a>
          <a href="#acesso">Acesso</a>
          <a href="#depoimentos">Depoimentos</a>
          <a href="#contato">Contato</a>
        </nav>

        <button className={styles.ctaButton}>Começar Agora</button>
      </div>
    </header>
  );
};

export default Navbar;
