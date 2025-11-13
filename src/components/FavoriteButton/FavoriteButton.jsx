import { useDispatch, useSelector } from 'react-redux'

import { removeFavorite, addFavorite } from '../../redux/slice/favoritesSlice'
import { formatDataMovie } from '../../helpers/formatDataMovie'

import styles from './FavoriteButton.module.css'

const FavoriteButton = ({ data }) => {
  const dispatch = useDispatch()
  const { favoriteList } = useSelector(state => state.favorites)
  const isFavorite = favoriteList.some(item => item.id === data?.kinopoiskId)

  const addToFavorites = () => {
    if (!data) return

    const dataMovie = formatDataMovie(data)
    dispatch(addFavorite(dataMovie))
  }

  const removeFromFavorites = (id) => {
    dispatch(removeFavorite(id))
  }

  return (
    <button
      onClick={isFavorite ? () => removeFromFavorites(data?.kinopoiskId) : addToFavorites}
      className={isFavorite ? `${styles.button} ${styles.removeButton}` : styles.button}>
      {isFavorite ? ' Удалить из избранного' : 'Добавить в избранное'}
    </button>
  )
}

export default FavoriteButton