import React from "react";
import styles from "./HeroSection.module.css";
import Text from "./base/Text/Text";
import { COLORS } from "../utils/globalVariables";
import HeroIllustration from "../assets/images/hero-illustration.png";

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
                <div className={styles.textSection}>
                    <Text as="h1" size="64px" weight="700" color={ COLORS.PRIMARY_COLOR } lineHeight="60px">
                    Transforme seu <br></br>
                    <Text as="span" color={ COLORS.SECONDARY_COLOR }> Aprendizado</Text>
                    </Text>
                    <Text as="p" lineHeight="24px" weight="400" size="24px" color={ COLORS.NEUTRAL_COLOR }>
                        Transforme sua rotina de estudos com nossa plataforma intuitiva. Acompanhe seu progresso, organize tarefas e alcance seus objetivos acadêmicos de forma eficiente e motivadora.
                    </Text>
                </div>

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
                    src={HeroIllustration}
                    alt="Ilustração de estudante usando computador"
                    className={styles.heroImage}
                />
            </div>
        </section>
    );
};

export default HeroSection;
