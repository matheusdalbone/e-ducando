import React from 'react';
import styles from './styles.module.css';
import { COLORS } from '../../../utils/globalVariables';
import RatingModal from '../../common/RatingModal/RatingModal';
import Text from '../../common/Text/Text';

import DogIcon from '../../../assets/icons/dog.svg';
import SkierIcon from '../../../assets/icons/skier.svg';
import WormIcon from '../../../assets/icons/worm.svg';
import CatsIcon from '../../../assets/icons/cats.svg';

const mockedRatings = [
  { icon: DogIcon, name: "Lucas Andrade", description: " ", rating: '5', comment: "Nunca tinha conseguido organizar meus estudos de forma tão prática. A plataforma me deu clareza e motivação para seguir meu cronograma."},
  { icon: SkierIcon, name: "Mariana Costa", description: " ", rating: '5', comment: "Os recursos interativos tornaram o aprendizado muito mais leve e dinâmico. Me sinto mais confiante para as provas e projetos da faculdade."},
  { icon: WormIcon, name: "João Pereira", description: " ", rating: '5', comment: "Além de melhorar minha forma de estudar, a plataforma me ajudou a economizar tempo. Agora consigo conciliar faculdade, estágio e vida pessoal."},
  { icon: CatsIcon, name: "Carla Mendes", description: " ", rating: '5', comment: "A plataforma superou minhas expectativas! Os conteúdos são claros e objetivos, e consegui melhorar muito meu desempenho acadêmico."}
]

const RatingSection = ({ ratings = mockedRatings }) => {


  return (
    <section className={styles.ratingSection}>
      <div className={ styles.textSection }>
        <Text as='h2' weight='700' size='36px' color={COLORS.WHITE_COLOR} lineHeight='60px'>O que nossos estudantes dizem</Text>
        <Text as='h3' weight='400' size='24px' color={COLORS.WHITE_COLOR} opacity='60%' lineHeight='32px'>Mais de 10.000 estudantes já transformaram sua forma de aprender conosco</Text>
      </div>
      <div className={styles.ratingsGrid}>
        { 
          ratings.map(({ icon, name, description, rating, comment }, id) => (
            <RatingModal key={id} icon={icon} name={name} description={description} rating={rating} comment={comment}></RatingModal>
          ))
        }
      </div>
    </section>
  )
}

export default RatingSection;