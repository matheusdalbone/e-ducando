import React from "react";
import styles from "./Navbar.module.css";
import { COLORS } from "../../../utils/globalVariables";
import Text from "../../common/Text/Text";
import Button from "../../common/Button/Button";
import Icon from "../../../assets/icons/logo.svg";

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
          <Text as='a' color={ COLORS.PRIMARY_COLOR } href="#inicio">Início</Text>
          <Text as='a' color={ COLORS.PRIMARY_COLOR } href="#beneficios">Benefícios</Text>
          <Text as='a' color={ COLORS.PRIMARY_COLOR } href="#acesso">Acesso</Text>
          <Text as='a' color={ COLORS.PRIMARY_COLOR } href="#depoimentos">Depoimentos</Text>
          <Text as='a' color={ COLORS.PRIMARY_COLOR } href="#contato">Contato</Text>
        </nav>

        <Button onClick={() => console.log('Clicou em Começar Agora')} variant="primary-button">Começar Agora</Button>
      </div>
    </header>
  );
};

export default Navbar;
