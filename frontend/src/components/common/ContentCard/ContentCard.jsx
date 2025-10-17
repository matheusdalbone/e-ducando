import React from 'react';
import styles from './styles.module.css';


import IconLock from '../../../assets/icons/lock2.svg?react';
import IconClock from '../../../assets/icons/clock2.svg?react';

const ContentCard = ({ icon, title, description, duration, isPremium, onClick, isTrialExpired }) => {

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className={`${styles.card} ${onClick ? styles.clickable : ''}`} onClick={handleClick}>

      <div className={styles.header}>
        <div className={styles.iconWrapper}>{icon}</div>
        <div className={styles.infoIcons}>
          {isPremium && <IconLock className={styles.infoIcon} />}
          {duration && duration.toLowerCase() !== 'ilimitado' && (
            <IconClock className={styles.infoIcon} />
          )}
          {duration && <span className={styles.durationText}>{duration}</span>}
        </div>
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.footer}>
        {isTrialExpired && !isPremium ? (
          // CASO 1: Teste expirado E o card NÃO é premium
          <button className={styles.expiredButton}>
            <IconLock className={styles.buttonIconLock} />
            <span>Período Expirado</span>
          </button>
        ) : (
          // CASO 2: Teste está ativo OU o card é premium
          <button className={isPremium ? styles.premiumButton : styles.primaryButton}>
            {isPremium ? (
              <>
                <IconLock className={styles.buttonIconLock} />
                <span>Acesso Premium</span>
              </>
            ) : (
              <span>Acessar Conteúdo</span>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default ContentCard;