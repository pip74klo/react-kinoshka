import { formatRating } from '../../helpers/formatRating';

import styles from './Rating.module.css';

const Rating = ({ movie }) => {

  return (
    <div className={styles.rating}>
      <div className={styles.wrapper}>
        <span>Кинопоиск <b>{formatRating(movie?.ratingKinopoisk)} / 10</b></span>
        <span>Imdb <b>{formatRating(movie?.ratingImdb)} / 10</b> </span>
      </div>
    </div>
  )
}

export default Rating