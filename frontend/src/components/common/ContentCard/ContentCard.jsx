import React from 'react';
import styles from './styles.module.css';
import { FaLock } from 'react-icons/fa';

const ContentCard = ({ icon, title, description, duration, isPremium = false }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.iconWrapper}>{icon}</div>
        <span className={styles.duration}>{duration}</span>
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.footer}>
        <button className={isPremium ? styles.premiumButton : styles.primaryButton}>
          {isPremium && <FaLock size={12} />}
          <span>{isPremium ? 'Acesso Premium' : 'Acessar Conteúdo'}</span>
        </button>
      </div>
    </div>
  );
};

export default ContentCard;