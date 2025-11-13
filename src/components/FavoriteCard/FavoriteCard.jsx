import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { formatInfo } from '../../helpers/formatInfo';
import { removeFavorite } from '../../redux/slice/favoritesSlice';

import styles from './FavoriteCard.module.css'

const FavoriteCard = ({ movie }) => {
  const dispatch = useDispatch()

  const removeFromFavorites = (id) => {
    dispatch(removeFavorite(id))
  }

  return (
    <div className={styles.card}>
      <Link to={`/movie/${movie.id}`}>
        <div className={styles.imgWrapper}>
          <img className={styles.img} src={movie.posterUrl} alt={`Постер фильма ${movie.nameRu}`} />
        </div>
      </Link>

      <div className={styles.info}>
        <div className={styles.list}>
          <h3 className={styles.title}>{movie.nameRu}</h3>
          <span className={styles.item}>{formatInfo(movie.genres, 'genre')}</span>
          <span className={styles.item}>{formatInfo(movie.countries, 'country')}</span>
          <span className={styles.item}>{movie.year} г.</span>
        </div>

        <button
          onClick={() => removeFromFavorites(movie.id)}
          className={styles.button}>
          Удалить
        </button>
      </div>
    </div>
  )
}

export default FavoriteCard;