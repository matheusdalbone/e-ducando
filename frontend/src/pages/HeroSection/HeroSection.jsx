import { Element } from 'react-scroll';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

import styles from "./HeroSection.module.css";

import { COLORS } from "../../utils/globalVariables";

import Text from "../../components/common/Text/Text";
import Button from "../../components/common/Button/Button";
import HeroIllustration from "../../assets/images/hero-illustration.png";
import RatingSection from "../../components/widgets/RatingSection/RatingSection";
import BenefitsSection from "../../components/widgets/BenefitsSection/BenefitsSection";
import TrialCardSection from "../../components/widgets/TrialCardSection/TrialCardSection";
import Layout from "../../components/common/Layout/Layout";
import ContactSection from "../../components/widgets/ContactSection/ContactSection";


const HeroSection = () => {
    return (
        <Layout>
            <Element name="inicio">
                <section className={styles.hero}>
                    <div className={styles.content}>
                        <div className={styles.textSection}>
                            <Text as="h1" size="64px" weight="700" color={COLORS.PRIMARY_COLOR} lineHeight="60px">
                                Transforme seu <br></br>
                                <Text as="span" color={COLORS.SECONDARY_COLOR}> Aprendizado</Text>
                            </Text>
                            <Text as="p" lineHeight="24px" weight="400" size="24px" color={COLORS.NEUTRAL_COLOR}>
                                Transforme sua rotina de estudos com nossa plataforma intuitiva. Acompanhe seu progresso, organize tarefas e alcance seus objetivos acadêmicos de forma eficiente e motivadora.
                            </Text>
                        </div>

                        <div className={styles.buttons}>
                            <Link to="/loginPage">
                                <Button variant="primary-button">Experimente Agora</Button>
                            </Link>

                            <ScrollLink to="beneficios" smooth={'easeInOutCubic'} duration={200} offset={-80}>
                                <Button variant="secondary-button">Benefícios</Button>
                            </ScrollLink>
                        </div>

                        <ul className={styles.featuresList}>
                            <li> Experiência Completa</li>
                            <li> Acesso a Materiais</li>
                            <li> 100% Gratuito</li>
                        </ul>
                    </div>

                    <div className={styles.imageWrapper}>
                        <img
                            src={HeroIllustration}
                            alt="Ilustração de estudante usando computador"
                            className={styles.heroImage}
                        />
                    </div>
                </section>
            </Element>

            <Element name="beneficios">
                <BenefitsSection />
            </Element>

            <Element name="acesso">
                <TrialCardSection></TrialCardSection>
            </Element>

            <Element name="depoimentos">
                <RatingSection></RatingSection>
            </Element>

            <Element name="contato">
                <ContactSection></ContactSection>
            </Element>

        </Layout>
    );
};

export default HeroSection;