import { Link, useNavigate } from 'react-router-dom';
import styles from './Footer.module.css'
import { useDispatch } from 'react-redux';
import { setTypeMovies } from '../../redux/slice/moviesSlice';

const Footer = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onClickPopularSeries = () => {
    dispatch(setTypeMovies('POPULAR_SERIES'))
    navigate('/movies/popular')
  }

  return (
    <div className={styles.footer}>
      <div className={styles.wrapper}>
        <Link to={'/'}>
          <div className={styles.logo}>Kinoshka</div>
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <Link to={'/'} className={styles.listItem}>
                Главная
              </Link>
            </li>
            <li>
              <Link to={'/movies/popular'} className={styles.listItem}>
                Популярные фильмы
              </Link>
            </li>
            <li
              className={styles.listItem}
              onClick={onClickPopularSeries}>
              Популярные сериалы
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Footer;