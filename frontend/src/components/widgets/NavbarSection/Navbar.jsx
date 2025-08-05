import React from "react";
import styles from "./Navbar.module.css";
import { COLORS } from "../../../utils/globalVariables";
import Text from "../../common/Text/Text";
import Button from "../../common/Button/Button";
import Icon from "../../../assets/icons/logo.svg";
import { Link } from "react-router";

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
      <div className={styles.container}>
        <img src={Icon} alt="E-ducando" style={{height: "29px"}}/>
        <nav className={styles.navLinks}>
          <Text as={ Link } color={ COLORS.PRIMARY_COLOR } to="/inicio">Início</Text>
          <Text as={ Link } color={ COLORS.PRIMARY_COLOR } to="/beneficios">Benefícios</Text>
          <Text as={ Link } color={ COLORS.PRIMARY_COLOR } to="/acesso">Acesso</Text>
          <Text as={ Link } color={ COLORS.PRIMARY_COLOR } to="/depoimentos">Depoimentos</Text>
          <Text as={ Link } color={ COLORS.PRIMARY_COLOR } to="/contato">Contato</Text>
        </nav>

        <Button onClick={() => console.log('Clicou em Começar Agora')} variant="primary-button">Começar Agora</Button>
      </div>
    </header>
  );
};

export default Navbar;
