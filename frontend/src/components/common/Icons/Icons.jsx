import React from 'react';
import styles from './Icon.module.css';

const Icon = ({ src, alt, size = 60 }) => (
  <img 
    src={src} 
    alt={alt} 
    className={styles.icon}
    style={{ width: size, height: size, objectFit: 'contain' }} 
  />
);

export default Icon;