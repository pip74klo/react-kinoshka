import isEqual from 'lodash/isEqual'

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setParams } from '../../redux/slice/moviesSlice';

import { getMoviesByFilters } from '../../api/apiMovies';

import NavigationButton from '../NavigationButton';

import TabsCategory from '../TabsCategory';
import MovieList from '../MovieList';

import styles from './Categories.module.css'

const Categories = () => {
  const { params } = useSelector(state => state.movies)
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [data, setData] = useState([])
  const [queryParams, setQueryParams] = useState(params)
  const [prevQueryParams, setPrevQueryParams] = useState(params)


  useEffect(() => {
    getMoviesByFilters(queryParams)
      .then(data => setData(data))
      .catch(error => {
        console.log(error)
        setError(error)
      })
      .finally(() => setLoading(false))
  }, [])

  const onChangeQueryParams = (e) => {
    setQueryParams(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleClickSearch = (queryParams) => {
    if (isEqual(queryParams, prevQueryParams)) return

    setLoading(true)
    setPrevQueryParams(queryParams)
    dispatch(setParams(queryParams))

    getMoviesByFilters(queryParams)
      .then(data => setData(data))
      .catch(error => {
        console.log(error)
        setError(error)
      })
      .finally(() => setLoading(false))
  }

  return (
    <div className={styles.categories}>
      <div className={styles.title}><span>Фильмы по категориям</span></div>
      <TabsCategory
        queryParams={queryParams}
        onChangeQueryParams={onChangeQueryParams}
        handleClickSearch={handleClickSearch}
      />
      <NavigationButton
        align={'end'}
        urlNavigate={`/movies/by-category`}
        text={'Смотреть все'}
      />
      < MovieList data={data?.items} count={5} loading={loading} error={error} />
    </div>
  )
}

export default Categories;