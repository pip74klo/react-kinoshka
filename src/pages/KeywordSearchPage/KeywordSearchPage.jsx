import { useState } from 'react';
import { useSelector } from 'react-redux';

import NavigationButton from '../../components/NavigationButton';
import Pagination from '../../components/Pagination';
import MovieList from '../../components/MovieList';

import { useFetch } from '../../helpers/hooks/useFetch';
import { getMoviesByKeyword } from '../../api/apiMovies';

import styles from './KeywordSearchPage.module.css';

const KeywordSearchPage = () => {
  const { keyword } = useSelector(state => state.movies)
  const [currentPage, setCurrPage] = useState(1)
  const { data, error, loading } = useFetch(getMoviesByKeyword, keyword, currentPage)

  return (
    <div className={styles.search}>
      <NavigationButton align={'start'} urlNavigate={-1} text={'Назад'} />

      <div className={styles.title}>Результат поиска по запросу "{keyword}" </div>
      <div className={styles.list}>
        <MovieList
          data={data?.films}
          loading={loading}
          error={error} />
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrPage}
        totalPage={data?.pagesCount}
        variant={'basic'} />
    </div>
  )
}

export default KeywordSearchPage;