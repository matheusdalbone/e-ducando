import React from 'react';
import styles from './styles.module.css';
import UserIcon from '../../../assets/icons/UserIcon.svg';
import Text from '../Text/Text';
import RatingStars from '../RatingStars/RatingStars';
import { COLORS } from '../../../utils/globalVariables';

const RatingModal = ({ name, rating, description, comment }) => {

  return (
    <div className={ styles.modal }>
      <div className={ styles.imageWrapper }>
        <img src={ UserIcon } alt="Icone do Usuario"/>
      </div>
      <div className={styles.container}>
        <RatingStars rating={ rating }></RatingStars>
        <Text as='p' lineHeight='130%' size='1.1875rem'>
          { comment }
        </Text>
        <div className={styles.nameContainer}>
          <Text as='span' size='1.1912rem' weight='700' lineHeight='.75rem' >{ name }</Text>
          <Text as='span' size='.8469rem' lineHeight='.75rem' color={ COLORS.NEUTRAL_COLOR } opacity='40%'>{ description }</Text>
        </div>
      </div>
    </div>
  );
}

export default RatingModal;