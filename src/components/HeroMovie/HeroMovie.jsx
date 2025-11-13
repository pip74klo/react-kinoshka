import { Link } from 'react-router-dom';

import { getHeroMovie } from '../../helpers/getHeroMovie';
import { getPopularMovies } from '../../api/apiMovies';
import { useFetch } from '../../helpers/hooks/useFetch';

import styles from './HeroMovie.module.css';

const HeroMovie = () => {
  const { data, error, loading } = useFetch(getPopularMovies, 'TOP_POPULAR_MOVIES')

  if (loading) return <div >Загрузка...</div>
  if (error) return <div className={styles.hero}>Не удалось загрузить фильм</div>
  if (!data) return <div className={styles.hero}>Нет данных о фильме</div>

  const heroMovie = getHeroMovie(data.items)

  if (!heroMovie) return <div className={styles.hero}>Не удалось выбрать фильм</div>

  return (
    <div className={styles.hero}>
      <div className={styles.info}>
        <h2>Уже в кино</h2>
        <h3 className={styles.title}>{heroMovie?.nameRu} ({heroMovie?.year})</h3>
        <p className={styles.description}>{heroMovie?.description}</p>
        <Link to={`/movie/${heroMovie?.kinopoiskId}`}>
          <button type='button' className={styles.button}>Подробнее</button>
        </Link>
      </div>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={heroMovie?.posterUrl} alt="poster" />
      </div>
    </div>
  )
}

export default HeroMovie;