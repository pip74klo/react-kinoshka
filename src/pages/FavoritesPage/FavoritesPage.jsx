import { useSelector } from 'react-redux'

import NavigationButton from '../../components/NavigationButton'
import FavoriteCard from '../../components/FavoriteCard'

import styles from './FavoritesPage.module.css'

const FavoritesPage = () => {
  const { favoriteList } = useSelector(state => state.favorites)

  return (
    <div className={styles.favorites}>
      <NavigationButton align={'start'} urlNavigate={-1} text={'Назад'} />

      {favoriteList.length === 0 ?
        (<div className={styles.title}>Вы ничего не добавляли в закладки.</div>) :
        (
          <>
            <div className={styles.title}>Избранное</div>
            <ul className={styles.list}>
              {favoriteList.map(movie =>
                <li key={movie.id} >
                  <FavoriteCard movie={movie} />
                </li>)}
            </ul>
          </>
        )}
    </div >
  )
}

export default FavoritesPage