import React, { useState } from 'react';
import styles from './TestPageSection.module.css';
import { COLORS } from "../../utils/globalVariables";
import { useAuth } from '../../context/AuthContext';

import { auth } from '../../Firebase/firebaseconfig';
import { sendSignInLinkToEmail } from 'firebase/auth';

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
import IconClock from '../../assets/icons/clockRed.svg?react';
import { IoClose, IoTimeOutline } from 'react-icons/io5';
import { Button } from 'react-scroll';

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

  const { isTrialExpired, loading } = useAuth();

  const [modalType, setModalType] = useState(null);
  const [isExpiredModalOpen, setExpiredModalOpen] = useState(false);

  const [expiredName, setExpiredName] = useState('');
  const [expiredEmail, setExpiredEmail] = useState('');
  const [formState, setFormState] = useState({ loading: false, error: '', success: false });

  const openPremiumModal = (type) => setModalType(type);
  const openExpiredModal = () => setExpiredModalOpen(true);

  const closeModal = () => {
    setModalType(null);
    setExpiredModalOpen(false);
    setTimeout(() => {
      setFormState({ loading: false, error: '', success: false });
      setExpiredName('');
      setExpiredEmail('');
    }, 300);
  };

  // Função para submeter o formulário de expiração
  const handleExpiredSubmit = async (event) => {
    event.preventDefault();
    setFormState({ loading: true, error: '', success: false });
    const actionCodeSettings = {
      url: import.meta.env.VITE_APP_URL || 'http://localhost:3000/finalizar-cadastro',
      handleCodeInApp: true,
    };
    try {
      await sendSignInLinkToEmail(auth, expiredEmail, actionCodeSettings);
      window.localStorage.setItem('emailForSignIn', expiredEmail);
      window.localStorage.setItem('nameForSignIn', expiredName);
      setFormState({ loading: false, error: '', success: true });
    } catch (err) {
      setFormState({ loading: false, error: 'Erro ao enviar o link. Verifique o e-mail.', success: false });
    }
  };

// Lógica para o texto do modal "Acesso Exclusivo"
  let modalTitle = '';
  let modalText = '';
  if (modalType === 'card') {
    modalTitle = 'Acesso Exclusivo';
    modalText = 'Este material faz parte do nosso acervo completo. Para ter acesso a todo o conteúdo da plataforma, cadastre-se agora e torne-se premium.';
  } else if (modalType === 'banner') {
    modalTitle = 'Torne-se Premium!';
    modalText = 'Torne-se premium e acesse mais de 200 cursos, certificações e suporte especializado';
  }

  if (loading) {
    return <div>A carregar...</div>;
  }

  return (
    <Layout>
      <div className={styles.pageContentWrapper}>
        {isTrialExpired ? (
          <div className={styles.expiredBanner}>
            <IconInfo />
            <Text as="span" size={'20px'} color={COLORS.WHITE_COLOR}>Seu modo experimental terminou. Para continuar usando a plataforma, cadastre-se agora!</Text>
            <Text as="a" size={'16px'} href="/cadastro" className={styles.expictaButton}>Cadastre-se Agora!</Text>
          </div>
        ) : (
          <div className={styles.alertBanner}>
            <IconInfo />
            <Text as="span" size={'20px'} color={COLORS.WHITE_COLOR}>Você está no modo experimental. Seu acesso é limitado e durará 7 dias. Para ter acesso completo, cadastre-se.</Text>
            <Text as="a" size={'16px'} href="/cadastro" className={styles.alertctaButton}>Cadastre-se Agora!</Text>
          </div>
        )}

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

        {/* Conteúdo Experimental */}
        <div className={styles.pageWrapper}>
          <section className={styles.contentSection}>
            <Text as="h2" size={'48px'} color={COLORS.QUATERNARY_COLOR}>Conteúdo Experimental</Text>
            <Text as='p' color={COLORS.NEUTRAL_COLOR} size={'32px'}>Explore nossos materiais introdutórios e descubra o potencial da nossa metodologia.</Text>
            <div className={styles.grid}>
              {experimentalContent.map(item => (
                <ContentCard key={item.id} {...item} isTrialExpired={isTrialExpired} onClick={isTrialExpired ? openExpiredModal : null} />
              ))}
            </div>
          </section>

          {/* Conteúdo Premium */}    
          <section className={styles.contentSection}>
            <Text as="h2" size={'48px'} color={COLORS.PREMIUM_COLOR}>Conteúdo Premium</Text>
            <Text as='p' color={COLORS.NEUTRAL_COLOR} size={'32px'}>Acesso completo a materiais avançados, cursos especializados e mentoria personalizada.</Text>
            <div className={styles.grid}>
              {premiumContent.map(item => (
                <ContentCard key={item.id} {...item} isTrialExpired={isTrialExpired} onClick={() => openPremiumModal('card')} />
              ))}
            </div>
            <button className={styles.viewAllButton}>Visualizar todos &rarr;</button>
          </section>
        </div>

        {/* Banner CTA no final da página */}
        <div className={styles.ctaBanner}>
          <Text as="h2" size={'48px'} color={COLORS.WHITE_COLOR}>Pronto para desbloquear todo o conteúdo?</Text>
          <Text as='p' size={'22px'} color={COLORS.WHITE_COLOR}>Torne-se premium e acesse mais de 200 cursos, certificações e suporte especializado.</Text>
          <button onClick={() => openPremiumModal('banner')}>Torne-se Premium <IconCrown className={styles.buttonPremium} /> </button>
        </div>
      </div>

      {/* Modal de Acesso Exclusivo */}        
      <TrialSignupModal isOpen={modalType !== null} onClose={closeModal}>
        <div className={styles.premiumModalContent}>
          <button className={styles.closeButton} onClick={closeModal}>
            <IoClose size={24} />
          </button>
          <div className={styles.premiumModalHeader}>
            <IconCrown className={styles.crownIcon} />
            <Text as="h2" size={'36px'} color={COLORS.TERCIARY_COLOR}>{modalTitle}</Text>
          </div>
          <Text as="p" size={'24px'} color={COLORS.QUATERNARY_COLOR} className={styles.premiumModalText}>
            {modalText}
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

      {/* Modal de Expiração */}
      <TrialSignupModal isOpen={isExpiredModalOpen} onClose={closeModal}>
        <div className={styles.expiredModalContent}>
          <button className={styles.closeButton} onClick={closeModal} />
          {formState.success ? (
            <div className={styles.successContent}>
              <div className={styles.premiumModalHeader}>
                <Text as="h2" size="28px">Verifique seu E-mail!</Text>
              </div>
              <Text as="p" className={styles.expiredModalText}>
                Enviámos um link de acesso para <strong>{expiredEmail}</strong>. Clique nele para confirmar o seu registo.
              </Text>
            </div>
          ) : (
            <>
              <div className={styles.expiredModalHeader}>
                <IconClock className={styles.clockIcon} />
                <Text as="h2" size={'36px'} color={COLORS.TERCIARY_COLOR}>Modo Experimental Expirado</Text>
              </div>
              <Text as="p" size={'24px'} color={COLORS.QUATERNARY_COLOR} className={styles.expiredModalText}>
                Seu período experimental de 7 dias expirou. Para continuar com acesso completo à plataforma e desbloquear todo o conteúdo, registre-se agora e <br />torne-se premium.
              </Text>
              <form onSubmit={handleExpiredSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                  <label htmlFor="expiredName">Nome completo</label>
                  <input
                    type="text"
                    id="expiredName"
                    value={expiredName}
                    onChange={(e) => setExpiredName(e.target.value)} required
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="expiredEmail">E-mail</label>
                  <input
                    type="email"
                    id="expiredEmail"
                    value={expiredEmail}
                    onChange={(e) => setExpiredEmail(e.target.value)} required
                  />
                </div>
                {formState.error && <p className={styles.errorMessage}>{formState.error}</p>}
                <Button type="submit" className={styles.expiredCtaButton} disabled={formState.loading}>
                  {formState.loading ? 'A enviar...' : 'Torne-se Premium Agora!'}
                </Button>
              </form>
              <Text as="p" size={'24px'} color={COLORS.NEUTRAL_COLOR} className={styles.expiredModalText} >Já tem uma conta? {' '}
                <a href="/login" className={styles.loginLink}>
                  Fazer login
                </a>
              </Text>
            </>
          )}
        </div>
      </TrialSignupModal>
    </Layout>
  );
};

export default TestPageSection;