import React from 'react';
import styles from './styles.module.css';
import TrialCardModal from '../../common/TrialCardModal/TrialCardModal';
import { COLORS } from '../../../utils/globalVariables';
import Text from '../../common/Text/Text';
import Button from '../../common/Button/Button';

import logoIcon from '../../../assets/icons/logo2.svg';
import LoginIcon from '../../../assets/icons/UserIcon.svg?react';
import PlayIcon from '../../../assets/icons/play.svg?react';
import LockIcon from '../../../assets/icons/lock.svg?react';

const featureCards = [
    { Icon: LoginIcon, iconAlt: 'Usuario', title: 'Sem login', description: 'Acesso imediato sem criar conta' },
    { Icon: PlayIcon, iconAlt: 'Botão de play', title: 'Navegação completa', description: 'Explore todas as funcionalidades' },
    { Icon: LockIcon, iconAlt: 'Icone de um cadeado', title: '100% Seguro', description: 'Ambiente protegido para testes' }
];

const TrialCardSection = ({ title = 'Experimente nossa plataforma', cards = featureCards }) => (
    <section className={styles.cardsSection}>
        <div className={styles.whiteContainer}>

            <div className={styles.logoWrapper}>
                <img src={logoIcon} alt="Logo da Plataforma" className={styles.logoImage} />
            </div>

            <Text as="h1" size="40px" weight="700" color={COLORS.PRIMARY_COLOR} lineHeight="60px">{title}</Text>
            <Text as="p" lineHeight="24px" weight="400" size="18px" color={COLORS.NEUTRAL_COLOR}>Teste todas as funcionalidades do E-ducando sem compromisso! Não precisa de cadastro ou login para experimentar!</Text>
           
            <div className={styles.cardsGrid}>
                {cards.map(({ Icon, iconAlt, title, description }, idx) => (
                    <TrialCardModal
                        key={idx}
                        Icon={Icon}
                        iconAlt={iconAlt}
                        title={title}
                        description={description}
                        hideButton={true}
                    />
                ))}
            </div>

            <div className={styles.mainButtonWrapper}>
                <Button variant="primary-button" onClick={() => console.log('Clicou em Iniciar simulação gratuita')}>
                    Iniciar simulação gratuita
                </Button>
            </div>
        </div>
    </section>
);

export default TrialCardSection;