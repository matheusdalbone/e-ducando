import React from "react";
import BenefitsItem from "./BenefitsItem";
import Text from "../../common/Text/Text";
import styles from './BenefitsSection.module.css';
import { COLORS } from "../../../utils/globalVariables";

import targetIcon from '../../../assets/icons/target.svg';
import usersIcon from '../../../assets/icons/UserIcon.svg';
import progressIcon from '../../../assets/icons/progress.svg';
import bookIcon from '../../../assets/icons/book.svg';
import calendarIcon from '../../../assets/icons/calendar.svg';
import clockIcon from '../../../assets/icons/clock.svg';


const defaultBenefits = [
    { iconSrc: targetIcon, iconAlt: 'Alvo', title: 'Objetivos Personalizados', description: 'Defina metas e receba um plano de estudos adaptado ao seu ritmo.' },
    { iconSrc: usersIcon, iconAlt: 'Grupo de usuários', title: 'Aprendizado Colaborativo', description: 'Conecte-se com outros estudantes e aprenda em grupo de forma colaborativa.' },
    { iconSrc: progressIcon, iconAlt: 'Pequeno gráfico', title: 'Acompanhe seu Progresso', description: 'Monitore seu desenvolvimento com relatórios detalhados.' },
    { iconSrc: bookIcon, iconAlt: 'Livro', title: 'Materiais Interativos', description: 'Acesse conteúdos educacionais de alta qualidade.' },
    { iconSrc: calendarIcon, iconAlt: 'Calendário', title: 'Agenda Inteligente', description: 'Gerencie prazos, provas e compromissos com facilidade.' },
    { iconSrc: clockIcon, iconAlt: 'Relógio', title: 'Gestão de Tempo', description: 'Otimize sua rotina com ferramentas de controle de tempo de estudo.' },
];

const BenefitsSection = ({ title = 'Por que escolher o E-ducando', benefits = defaultBenefits }) => (
    <section className={styles.benefitsSection}>
        <Text as="h1" size="40px" weight="700" color={COLORS.QUATERNARY_COLOR} lineHeight="60px">{title}</Text>
        <Text as="p" lineHeight="24px" weight="400" size="18px" color={COLORS.NEUTRAL_COLOR}>Nossa plataforma oferece recursos inovadores para potencializar seu aprendizado</Text>
        <div className={styles.benefitsGrid}>
            {benefits.map(({iconSrc, iconAlt, title, description }, idx) => (
                <BenefitsItem
                    key={idx}
                    iconSrc={iconSrc}
                    iconAlt={iconAlt}
                    title={title}
                    description={description}
                />
            ))}
        </div>
    </section>
);

export default BenefitsSection;