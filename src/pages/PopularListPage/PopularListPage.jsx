import { useState } from 'react';
import { useSelector } from 'react-redux';

import { useFetch } from '../../helpers/hooks/useFetch';
import { getPopularMovies } from '../../api/apiMovies';

import NavigationButton from '../../components/NavigationButton';
import CardPreview from '../../components/CardPreview';
import Pagination from '../../components/Pagination';

import styles from './PopularListPage.module.css';

const MoviesListPage = () => {
  const { type } = useSelector(state => state.movies)
  const [currentPage, setCurrPage] = useState(1)
  const { data, error, loading } = useFetch(getPopularMovies, type, currentPage)

  if (loading) return <div>Загрузка...</div>
  if (error) return <div className={styles.title}>Не удалось загрузить информацию о фильмах или сериалах</div>
  if (!data || data?.length === 0) return <div className={styles.title}>Нет фильмов или сериалов в данной категории</div>

  return (
    <div className={styles.moviesList}>
      <NavigationButton
        align={'start'}
        urlNavigate={-1}
        text={'Назад'} />

      <div className={styles.title}>Популярныe {type === 'TOP_POPULAR_MOVIES' ? 'фильмы' : 'сериалы'}</div>
      <ul className={styles.list}>
        {data?.items?.map(movie => <li key={movie.kinopoiskId}><CardPreview movie={movie} isShow /></li>)}
      </ul>

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrPage}
        totalPage={data?.totalPages}
        variant={'basic'} />
    </div>
  )
}

export default MoviesListPage;