import React, { useState } from 'react';
import styles from './TestPageSection.module.css';
import { COLORS } from "../../utils/globalVariables";

import Layout from '../../components/common/Layout/Layout';
import Text from "../../components/common/Text/Text";
import ContentCard from '../../components/common/ContentCard/ContentCard';

import TrialSignupModal from '../../components/common/TrialSignupModal/TrialSignupModal';


import IconCam from '../../assets/icons/cam.svg?react';
import IconDoc from '../../assets/icons/doc.svg?react';
import IconBook from '../../assets/icons/booktwo.svg?react';
import IconStar from '../../assets/icons/star.svg?react';
import IconUsers from '../../assets/icons/users.svg?react';
import IconBook3 from '../../assets/icons/bookthree.svg?react';
import IconInfo from '../../assets/icons/infocircle.svg?react';
import IconCrown from '../../assets/icons/crown.svg?react';
import { IoClose } from 'react-icons/io5';

const experimentalContent = [
  { id: 1, icon: <IconCam />, title: 'Introdução aos Estudos', description: 'Aprenda técnicas de organização e planejamento de estudos.', duration: '15min' },
  { id: 2, icon: <IconDoc />, title: 'Métodos de Memorização', description: 'Descubra como melhorar sua capacidade de retenção de informações.', duration: '8min' },
  { id: 3, icon: <IconBook />, title: 'Cronograma de Estudos', description: 'Modelo básico para organizar seu tempo de estudo.', duration: '5min' },
];
const premiumContent = [
  { id: 4, icon: <IconStar />, title: 'Técnicas Avançadas', description: 'Curso completo com estratégias profissionais de aprendizagem.', duration: '3 horas', isPremium: true },
  { id: 5, icon: <IconUsers />, title: 'Mentoria Personalizada', description: 'Sessões individuais com especialistas em educação.', duration: '1 hora', isPremium: true },
  { id: 6, icon: <IconBook3 />, title: 'Biblioteca Premium', description: 'Acesso a mais de 500 materiais exclusivos.', duration: 'Ilimitado', isPremium: true },
];

const TestPageSection = () => {

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <Layout>
      <div className={styles.pageContentWrapper}>
        <div className={styles.alertBanner}>
          <IconInfo />
          <Text as="span" size={'20px'} color={COLORS.WHITE_COLOR}>Você está no modo experimental. Seu acesso é limitado e durará 7 dias. Para ter acesso completo, cadastre-se. <Text as="a" size={'16px'} href="/cadastro" className={styles.ctaButton}>Cadastre-se Agora!</Text></Text>
        </div>

        <section className={styles.pageHeader}>
          <div className={styles.pageWrapper}>
            <Text as="h1" size={'90px'} weight="700" color={COLORS.TERCIARY_COLOR} lineHeight="60px">
              Transforme seu
              <Text as="span" size={'90px'} color={COLORS.SECONDARY_COLOR}> Aprendizado</Text>
            </Text>
            <Text as="p" lineHeight="50px" weight="300" size={'40px'} color={COLORS.WHITE_COLOR}>
              Descubra métodos comprovados, organize seu tempo e acelere seu aprendizado com nossa plataforma completa.
            </Text>
          </div>
        </section>

        <div className={styles.pageWrapper}>
          <section className={styles.contentSection}>
            <Text as="h2" size={'48px'} color={COLORS.QUATERNARY_COLOR}>Conteúdo Experimental</Text>
            <Text as='p' color={COLORS.NEUTRAL_COLOR} size={'32px'}>Explore nossos materiais introdutórios e descubra o potencial da nossa metodologia.</Text>
            <div className={styles.grid}>
              {experimentalContent.map(item => (
                <ContentCard key={item.id} {...item} />
              ))}
            </div>
          </section>

          <section className={styles.contentSection}>
            <Text as="h2" size={'48px'} color={COLORS.PREMIUM_COLOR}>Conteúdo Premium</Text>
            <Text as='p' color={COLORS.NEUTRAL_COLOR} size={'32px'}>Acesso completo a materiais avançados, cursos especializados e mentoria personalizada.</Text>
            <div className={styles.grid}>
              {premiumContent.map(item => (
                <ContentCard key={item.id} {...item} onClick={openModal} />
              ))}
            </div>
            <button className={styles.viewAllButton}>Visualizar todos &rarr;</button>
          </section>
        </div>

        <div className={styles.ctaBanner}>
          <Text as="h2" size={'48px'} color={COLORS.WHITE_COLOR}>Pronto para desbloquear todo o conteúdo?</Text>
          <Text as='p' size={'22px'} color={COLORS.WHITE_COLOR}>Torne-se premium e acesse mais de 200 cursos, certificações e suporte especializado.</Text>
          <button>Torne-se Premium <IconCrown className={styles.buttonPremium} /> </button>
        </div>
      </div>

      <TrialSignupModal isOpen={isModalOpen} onClose={closeModal}>
        <div className={styles.premiumModalContent}>

          <button className={styles.closeButton} onClick={closeModal}>
            <IoClose size={24} />
          </button>

          <div className={styles.premiumModalHeader}>
            <IconCrown className={styles.crownIcon} />
            <Text as="h2" size={'36px'} color={COLORS.TERCIARY_COLOR}>Acesso Exclusivo</Text>
          </div>

          <Text as="p" size={'24px'} color={COLORS.QUATERNARY_COLOR} className={styles.premiumModalText}>
            Este material faz parte do nosso acervo completo. Para ter acesso a todo o conteúdo da plataforma, cadastre-se agora e torne-se premium.
          </Text>

          <button className={styles.premiumCtaButton}>
            Torne-se Premium Agora!
          </button>

          <div className={styles.benefitsBox}>
            <Text as="h3" size={'24px'} color={COLORS.PREMIUM_COLOR}>Benefícios da Conta Premium:</Text>
            <ul>
              <Text as="li" size={'20px'} weight="200" color={COLORS.TERCIARY_COLOR}>Acesso ilimitado a todos os materiais</Text>
              <Text as="li" size={'20px'} weight="200" color={COLORS.TERCIARY_COLOR}>Download de conteúdos para estudo offline</Text>
              <Text as="li" size={'20px'} weight="200" color={COLORS.TERCIARY_COLOR}>Acompanhamento de progresso personalizado</Text>
              <Text as="li" size={'20px'} weight="200" color={COLORS.TERCIARY_COLOR}>Suporte prioritário da equipe</Text>
            </ul>
          </div>

        </div>
      </TrialSignupModal>
    </Layout>
  );
};

export default TestPageSection;