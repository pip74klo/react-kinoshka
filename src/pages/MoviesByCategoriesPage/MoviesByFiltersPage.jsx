import { useState } from 'react';
import { useSelector } from 'react-redux'

import { useFetch } from '../../helpers/hooks/useFetch';
import { getMoviesByFilters } from '../../api/apiMovies';

import CardPreview from '../../components/CardPreview';
import NavigationButton from '../../components/NavigationButton';
import Pagination from '../../components/Pagination';

import styles from './MoviesByCategoriesPage.module.css'

const MoviesByCategoriesPage = () => {
  const { params } = useSelector(state => state.movies)

  const [currentPage, setCurrPage] = useState(1)
  const { data, loading, error } = useFetch(getMoviesByFilters, params, currentPage)

  if (loading) return <div>Загрузка...</div>
  if (error) return <div className={styles.error}>Не удалось загрузить информацию о фильмах</div>
  if (!data || data?.length === 0) return <div className={styles.error}>Нет фильмов по  данным категориям</div>

  return (
    <div className={styles.moviesList}>
      <NavigationButton align={'start'} urlNavigate={-1} text={'Назад'} />

      <div className={styles.title}>Категории по фильтрам </div>
      <ul className={styles.list}>
        {data?.items?.map(movie => <li key={movie.kinopoiskId}><CardPreview movie={movie} isShow /></li>)}
      </ul>

      <Pagination currentPage={currentPage} setCurrentPage={setCurrPage} totalPage={data?.totalPages} variant={'basic'} />
    </div>
  )
}

export default MoviesByCategoriesPage