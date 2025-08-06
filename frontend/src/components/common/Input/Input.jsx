import React, { useEffect, useState } from 'react';

import styles from './styles.module.css'
import { COLORS } from '../../../utils/globalVariables'

import Text from '../Text/Text';

const Input = ({ title, description, onChange, width, height }) => {
  const [inputText, setInputText] = useState('');

  const handleInputText = (e) => {
    setInputText(e.target.textContent);
  };

  var titleFormated = title + ':';

  var inputStyle = {
    width: width,
    height: height
  };

  return (
    <label className={ styles.inputContainer } style={{
      "--background-color": COLORS.BACKGROUND_COLOR,
      "--neutral-color": COLORS.NEUTRAL_COLOR
                }}>
      <Text as='span' lineHeight="16px" size="12px" weight="700">{ titleFormated }</Text>
      <div className={styles.input} style={inputStyle} contentEditable onInput={handleInputText}></div>
      { inputText.length == 0 ? <Text as='span' className={ styles.placeholder }>{ description }</Text> : null }
    </label>
  );
}

export default Input;