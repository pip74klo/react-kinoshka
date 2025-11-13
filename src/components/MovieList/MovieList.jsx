import CardPreview from '../CardPreview';

import styles from './MovieList.module.css'

const MovieList = ({ data, count, loading, error }) => {
  if (loading) return <div>Загрузка...</div>
  if (error) return <div className={styles.title}>Не удалось загрузить информацию о фильмах или сериалах</div>
  if (!data || data?.length === 0) return <div className={styles.title}>Фильмы не найдены</div>

  const movies = count ? data.slice(0, count) : data

  return (
    <ul className={styles.moviesList}>
      {movies.map(movie =>
        <li key={movie.kinopoiskId || movie.filmId}>
          <CardPreview movie={movie} isShow />
        </li>)}
    </ul>
  )
}

export default MovieList;