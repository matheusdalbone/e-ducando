import React from 'react';
import styles from './TestPageSection.module.css';
import { COLORS } from "../../utils/globalVariables";

import Layout from '../../components/common/Layout/Layout';
import Text from "../../components/common/Text/Text";

import ContentCard from '../../components/common/ContentCard/ContentCard';

import { FaVideo, FaBrain, FaCalendarAlt, FaStar, FaUserFriends, FaBook, FaInfoCircle, FaCrown } from 'react-icons/fa';

const experimentalContent = [
  { id: 1, icon: <FaVideo />, title: 'Introdução aos Estudos', description: 'Aprenda técnicas de organização e planejamento de estudos.', duration: '10min' },
  { id: 2, icon: <FaBrain />, title: 'Métodos de Memorização', description: 'Descubra as melhores estratégias de construção de memória.', duration: '8min' },
  { id: 3, icon: <FaCalendarAlt />, title: 'Cronograma de Estudos', description: 'Aprenda a montar um cronograma que funcione para sua rotina.', duration: '5min' },
];
const premiumContent = [
  { id: 4, icon: <FaStar />, title: 'Técnicas Avançadas', description: 'Acesso a metodologias aprofundadas de aprendizagem.', duration: '2 horas', isPremium: true },
  { id: 5, icon: <FaUserFriends />, title: 'Mentoria Personalizada', description: 'Converse com nossos mentores e tire suas dúvidas.', duration: '1 hora', isPremium: true },
  { id: 6, icon: <FaBook />, title: 'Biblioteca Premium', description: 'Acesso a todos os materiais exclusivos.', duration: 'Ilimitado', isPremium: true },
];

const TestPageSection = () => {
  return (
    <Layout>
      <div className={styles.pageContentWrapper}>
        {/* Banner Amarelo de Alerta */}
        <div className={styles.alertBanner}>
          <FaInfoCircle />
          <span>Você está no modo experimental. Seu acesso é limitado e durará 7 dias. Para ter acesso completo, cadastre-se. <a href="/cadastro">Cadastre-se Agora!</a></span>
        </div>

        <div className={styles.pageWrapper}>
          {/* Seção de Cabeçalho da Página */}
          <section className={styles.pageHeader}>
            <Text as="h1" size="64px" weight="700" color={COLORS.TERCIARY_COLOR} lineHeight="60px">
              Transforme seu <br></br>
              <Text as="span" color={COLORS.SECONDARY_COLOR}> Aprendizado</Text>
            </Text>
            <Text as="p" lineHeight="24px" weight="400" size="24px" color={COLORS.WHITE_COLOR}>
              Descubra métodos comprovados, organize seu tempo e acelere seu aprendizado com nossa plataforma completa.
            </Text>
          </section>

          {/* Seção de Conteúdo Experimental */}
          <section className={styles.contentSection}>
            <Text as="h2" color={COLORS.QUATERNARY_COLOR}>Conteúdo Experimental</Text>
            <Text as='p' color={COLORS.NEUTRAL_COLOR} size={'16px'}>Explore nossos materiais introdutórios e descubra o potencial da nossa metodologia.</Text>
            <div className={styles.grid}>
              {experimentalContent.map(item => (
                <ContentCard key={item.id} {...item} />
              ))}
            </div>
          </section>

          {/* Seção de Conteúdo Premium */}
          <section className={styles.contentSection}>
            <Text as="h2" color={COLORS.PREMIUM_COLOR}>Conteúdo Premium</Text>
            <Text as='p' color={COLORS.NEUTRAL_COLOR} size={'16px'}>Acesso completo a materiais avançados, cursos especializados e mentoria personalizada.</Text>
            <div className={styles.grid}>
              {premiumContent.map(item => (
                <ContentCard key={item.id} {...item} />
              ))}
            </div>
            <button className={styles.viewAllButton}>Visualizar todos &rarr;</button>
          </section>
        </div>

        {/* Banner Roxo de CTA */}
        <div className={styles.ctaBanner}>
          <Text as="h2" color={COLORS.WHITE_COLOR}>Pronto para desbloquear todo o conteúdo?</Text>
          <Text as='p' color={COLORS.WHITE_COLOR} size={'14px'}>Torne-se premium e acesse mais de 200 cursos, certificações e suporte especializado.</Text>
          <button><FaCrown /> Torne-se Premium</button>
        </div>
      </div>
    </Layout>
  );
};

export default TestPageSection;