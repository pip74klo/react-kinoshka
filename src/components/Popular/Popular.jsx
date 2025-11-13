import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setTypeMovies } from '../../redux/slice/moviesSlice';
import { useFetch } from '../../helpers/hooks/useFetch';
import { getPopularMovies } from '../../api/apiMovies';

import NavigationButton from '../NavigationButton';
import MovieList from '../MovieList';

import styles from './Popular.module.css'

import { POPULAR_NAMES, POPULAR_TYPES } from '../../constants/constants';

const Popular = () => {
  const dispatch = useDispatch()
  const [popularType, setPopularType] = useState('TOP_POPULAR_MOVIES')
  const [indexBtn, setIndexBtn] = useState(0)

  const { data, error, loading } = useFetch(getPopularMovies, popularType)

  const onClickPopularBtn = (index) => {
    setIndexBtn(index)
    setPopularType(POPULAR_TYPES[index])
    dispatch(setTypeMovies(POPULAR_TYPES[index]))
  }

  return (
    <div className={styles.popular}>
      <div className={styles.popularWrapper}>
        {POPULAR_NAMES.map((item, index) =>
          <button
            onClick={() => onClickPopularBtn(index)}
            key={item}
            className={index === indexBtn ?
              `${styles.button} ${styles.active}` : styles.button}>
            {POPULAR_NAMES[index]}
          </button>)}
      </div>

      <NavigationButton align={'end'} urlNavigate={'/movies/popular'} text={'Смотреть все'} />
      <MovieList data={data?.items} count={10} loading={loading} error={error} />
    </div>
  )
}

export default Popular;