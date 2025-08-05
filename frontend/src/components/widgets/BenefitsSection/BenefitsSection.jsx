import React from "react";
import BenefitsItem from "./BenefitsItem";
import Text from "../../common/Text/Text";
import styles from './BenefitsSection.module.css';
import { COLORS } from "../../../utils/globalVariables";

import targetIcon from '../../../assets/icons/target.svg';
import usersIcon from '../../../assets/icons/users.svg';
import progressIcon from '../../../assets/icons/progress.svg';
import bookIcon from '../../../assets/icons/book.svg';
import calendarIcon from '../../../assets/icons/calendar.svg';
import clockIcon from '../../../assets/icons/clock.svg';


const defaultBenefits = [
    { iconSrc: targetIcon, iconAlt: 'Alvo', title: 'Objetivos Personalizados', description: 'Defina metas únicas e acompanhe seu progresso no seu ritmo.' },
    { iconSrc: usersIcon, iconAlt: 'Grupo de usuários', title: 'Aprendizado Colaborativo', description: 'Conecte-se com outros alunos e cresça com o trabalho em grupo.' },
    { iconSrc: progressIcon, iconAlt: 'Pequeno gráfico', title: 'Acompanhe seu Progresso', description: 'Visualize seu avanço com relatórios e estatísticas.' },
    { iconSrc: bookIcon, iconAlt: 'Livro', title: 'Materiais Interativos', description: 'Acesse conteúdos atualizados e práticos.' },
    { iconSrc: calendarIcon, iconAlt: 'Calendário', title: 'Calendário Interativo', description: 'Planeje com antecedência com datas de entrega e prazos.' },
    { iconSrc: clockIcon, iconAlt: 'Relógio', title: 'Gestão de Tempo', description: 'Otimize seu tempo com ferramentas de organização.' },
];

const BenefitsSection = ({ title = 'Por que escolher o E-ducando', benefits = defaultBenefits }) => (
    <section className={styles.benefitsSection}>
        <Text as="h1" size="40px" weight="700" color={COLORS.PRIMARY_COLOR} lineHeight="60px">{title}</Text>
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