import styles from './Card.module.css'

import Rating from '../Rating';
import AboutMovie from '../AboutMovie';
import FavoriteButton from '../FavoriteButton';

const Card = ({ movie, staff }) => {
  const { data, loading, error } = movie

  if (loading) return <div>Загрузка...</div>
  if (error) return <div className={styles.error}>Не удалось загрузить информацию о фильме</div>
  if (!data) return <div className={styles.error}>Фильм не найден</div>

  return (
    <div className={styles.card}>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={data?.posterUrl} alt={data?.nameRu} />
      </div>
      <div>
        <div className={styles.info}>
          <h2 className={styles.title}>{data?.nameRu}</h2>
          <Rating movie={data} />
        </div>
        <p className={styles.description}>
          {data?.description}
        </p>

        <FavoriteButton data={data} />
        <AboutMovie movie={data} dataStaff={staff.data} />
      </div>
    </div>
  )
}

export default Card;