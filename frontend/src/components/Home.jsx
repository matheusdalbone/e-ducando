import React from "react";
import styles from "./Home.module.css";
import Text from "./base/Text/Text";
import { ERROR_COLOR, PRIMARY_COLOR, PRIMARY_FONT, TERCIARY_COLOR } from "../utils/globalVariables";


export default function Home() {
  return (
    <div className="home">
      <Text color={PRIMARY_COLOR} size="40px" font={ PRIMARY_FONT } as="h1">Bem-vindo à Plataforma <Text color={ ERROR_COLOR } as="span">E-Ducando</Text></Text>
      <Text color={TERCIARY_COLOR} as="h4">Explore conteúdos, aprenda no seu ritmo e conecte-se com o conhecimento.</Text>
      <Text>TESTESTES</Text>
    </div>
  );
}
