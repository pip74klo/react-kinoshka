import { formatInfo } from '../../helpers/formatInfo'
import { formatStaff } from '../../helpers/formatStaff'

import styles from './AboutMovie.module.css'

const AboutMovie = ({ movie, dataStaff }) => {
  return (
    <div className={styles.about}>
      <h3 className={styles.title}>О фильме</h3>
      <div className={styles.table}>
        <div>
          <ul>
            <li>Жанр:</li>
            <li>{formatInfo(movie?.genres, 'genre')}</li>
          </ul>
          <ul>
            <li>Страна:</li>
            <li>{formatInfo(movie?.countries, 'country')}</li>
          </ul>
          <ul>
            <li>Год:</li>
            <li>{movie?.year}</li>
          </ul>
          <ul>
            <li>Режиcсер:</li>
            <li>{formatStaff(dataStaff, 'DIRECTOR')}</li>
          </ul>
          <ul>
            <li>В главных ролях:</li>
            <li>{formatStaff(dataStaff, 'ACTOR')}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AboutMovie;