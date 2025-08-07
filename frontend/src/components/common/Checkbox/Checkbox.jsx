import React from 'react';

import styles from './styles.module.css';
import Text from '../Text/Text';
import { COLORS } from '../../../utils/globalVariables';

const Checkbox = ({ title }) => {
  
  return (
    <div style={{"--primary-color": COLORS.PRIMARY_COLOR, display:'flex'}}>
      <label className={ styles.customCheckbox }>
        <input type="checkbox"/>
        <span className={ styles.checkmark }></span>
        <Text as='span' weight='700' size='12px' color={COLORS.NEUTRAL_COLOR} opacity='0.8' lineHeight="16px">{ title }</Text>
      </label>
    </div>
  )
}

export default Checkbox;