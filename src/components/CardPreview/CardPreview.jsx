import styles from './CardPreview.module.css'

import { Link } from 'react-router-dom';

import { formatRating } from '../../helpers/formatRating';

const CardPreview = ({ movie, isShow }) => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  const shortName = movie?.nameRu?.length > 21 ? movie?.nameRu?.slice(0, 20) + ' ...' : movie?.nameRu

  return (
    <Link
      to={`/movie/${movie?.kinopoiskId || movie?.filmId}`}
      className={styles.card}
      onClick={scrollToTop}
    >
      <img className={styles.img} src={movie?.posterUrl} alt={`Постер фильма ${movie?.nameRu}`} />
      <div className={styles.info}>
        <h5 className={styles.name}>{shortName}</h5>
        <div className={styles.infoBox}>
          <span className={styles.year}>{isShow ? `${movie?.year}г.` : null}</span>
          <span className={styles?.rating}>
            {isShow ? formatRating(movie?.ratingKinopoisk) + ' / 10' : null}
          </span>
        </div>
      </div>
    </Link>
  )
}

export default CardPreview;