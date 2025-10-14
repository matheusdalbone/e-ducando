import React from 'react';
import styles from './styles.module.css';


import IconLock from '../../../assets/icons/lock2.svg?react';
import IconClock from '../../../assets/icons/clock2.svg?react';

const ContentCard = ({ icon, title, description, duration, isPremium, onClick }) => {

  const handleClick = () => {
    if (isPremium && onClick) {
      onClick();
    }
  };

  return (
    <div className={`${styles.card} ${isPremium ? styles.premiumCard : ''}`} 
      onClick={handleClick}>
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
        <button className={isPremium ? styles.premiumButton : styles.primaryButton}>
          {isPremium && <IconLock className={styles.buttonIconLock} />}
          <span>{isPremium ? 'Acesso Premium' : 'Acessar Conteúdo'}</span>
        </button>
      </div>
    </div>
  );
};

export default ContentCard;