import React from 'react';
import styles from './styles.module.css';
import { COLORS } from '../../../utils/globalVariables';
import RatingModal from '../../base/RatingModal/RatingModal';
import Text from '../../base/Text/Text';

const mockedRatings = [
  { name: "Ana Silva", description: "Estudante de Engenharia", rating: '4', comment: "A plataforma mudou completamente minha forma de estudar. Os materiais interativos me ajudaram muito"},
  { name: "Ana Silva", description: "Estudante de Engenharia", rating: '4', comment: "A plataforma mudou completamente minha forma de estudar. Os materiais interativos me ajudaram muito"},
  { name: "Ana Silva", description: "Estudante de Engenharia", rating: '4', comment: "A plataforma mudou completamente minha forma de estudar. Os materiais interativos me ajudaram muito"},
  { name: "Ana Silva", description: "Estudante de Engenharia", rating: '4', comment: "A plataforma mudou completamente minha forma de estudar. Os materiais interativos me ajudaram muito"}
]

const RatingSection = ({ ratings = mockedRatings }) => {


  return (
    <section className={styles.ratingSection} style={{ "--background-color": COLORS.BACKGROUND_COLOR }}>
      <div className={ styles.textSection }>
        <Text as='h2' weight='700' size='36px' color={COLORS.PRIMARY_COLOR} lineHeight='60px'>O que nossos estudantes dizem</Text>
        <Text as='h3' weight='400' size='24px' color={COLORS.NEUTRAL_COLOR} opacity='60%' lineHeight='32px'>Mais de 10.000 estudantes já transformaram sua forma de aprender conosco</Text>
      </div>
      <div className={styles.ratingsGrid}>
        { 
          ratings.map(({ name, description, rating, comment }, id) => (
            <RatingModal key={id} name={name} description={description} rating={rating} comment={comment}></RatingModal>
          ))
        }
      </div>
    </section>
  )
}

export default RatingSection;