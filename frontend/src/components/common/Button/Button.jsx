import React from "react";
import styles from './button.module.css';
import { COLORS } from '../../../utils/globalVariables';


const Button = ({ children, onClick, variant = 'primary-button', type = 'button', disabled = false, ...rest }) => {
    const variantClass = variant === 'secondary-button' ? styles.secondary : styles.primary;
  
    const componentStyles = {
      '--primary-color': variant === 'primary-button' ? COLORS.PRIMARY_COLOR : COLORS.SECONDARY_COLOR,
      '--secondary-color': variant === 'primary-button' ? COLORS.SECONDARY_COLOR : COLORS.PRIMARY_COLOR,
      '--white': COLORS.WHITE_COLOR,
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