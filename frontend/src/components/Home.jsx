import React from "react";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className="home">
      <div className="home-texto">
      <h1>Transforme seu <span className="destaque">Aprendizado</span></h1>
      <p>Transforme a sua rotina de estudos com nossa plataforma intuitiva. Acompanhe seu progresso, organize tarefas e alcance seus objetivos acadêmicos de forma eficiente e motivadora.</p>
        <button>Experimente Agora</button>
        <button>Benefícios</button>
      </div>
    </div>
  );
}
