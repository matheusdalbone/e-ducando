import React from "react";
import styles from "./HeroSection.module.css";
import Text from "./base/Text";
import { COLORS } from "../utils/globalVariables";

const HeroSection = () => {
    return (
        <section className={styles.hero}
            style={{
                "--primary-color": COLORS.PRIMARY_COLOR,
                "--secondary-color": COLORS.SECONDARY_COLOR,
                "--background-color": COLORS.BACKGROUND_COLOR,
                "--neutral-color": COLORS.NEUTRAL_COLOR,
                "--white": COLORS.WHITE_COLOR,
            }}
        >
            <div className={styles.content}>
                <h1 className={styles.title}>
                    <span>Transforme seu</span>
                    <span className={styles.destaque}>Aprendizado</span>
                </h1>
                <p>
                    Transforme sua rotina de estudos com nossa plataforma intuitiva. Acompanhe seu progresso, organize tarefas e alcance seus objetivos acadêmicos de forma eficiente e motivadora.
                </p>

                <div className={styles.buttons}>
                    <button className={styles.button}>Experimente Agora</button>
                    <button className={`${styles.button} ${styles.secondary}`}>Benefícios</button>
                </div>

                <ul className={styles.featuresList}>
                    <li>✓ Experiência Completa</li>
                    <li>✓ Acesso a Materiais</li>
                    <li>✓ 100% Gratuito</li>
                </ul>
            </div>

            <div className={styles.imageWrapper}>
                {/*Imagem do estudante */}
                <img
                    src="/images/hero-illustration.png"
                    alt="Ilustração de estudante usando computador"
                    className={styles.heroImage}
                />
            </div>
        </section>
    );
};

export default HeroSection;
