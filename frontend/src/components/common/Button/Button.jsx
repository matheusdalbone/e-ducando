import React from "react";
import styles from './button.module.css';
import { COLORS } from '../../../utils/globalVariables';


const Button = ({ children, onClick, variant = 'primary-button', type = 'button', disabled = false, width, height, ...rest }) => {
    const variantClass = variant === 'secondary-button' ? styles.secondary : styles.primary;
  
  const componentStyles = {
    width: width,
    height: height
    };
  
    return (
      <button
        onClick={onClick}
        className={`${styles.button} ${variantClass}`}
        disabled={disabled}
        style={componentStyles}
        {...rest}
      >
        {children}
      </button>
    );
  };
  
  export default Button;