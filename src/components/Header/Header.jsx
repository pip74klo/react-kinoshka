import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { setKeywords } from '../../redux/slice/moviesSlice';

import styles from './Header.module.css'

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [inputValue, setInputValue] = useState('')

  const onChangeInput = (e) => {
    setInputValue(e.target.value)
  }

  const onClickSubmitSearch = (e) => {
    e.preventDefault()
    const trimmedValue = inputValue.trim()
    if (!trimmedValue) return

    dispatch(setKeywords(trimmedValue))
    setInputValue('')
    navigate('movies/search-by-keyword')
  }

  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <Link to={'/'} className={styles.logo}>Kinoshka</Link>

        <form
          onSubmit={onClickSubmitSearch}
          className={styles.search}
        >
          <input
            onChange={onChangeInput}
            className={styles.input}
            type="text"
            value={inputValue}
            placeholder='Поиск...' />
          <button className={styles.button}>Поиск</button>
        </form>
        <Link to={'movies/favorites'}>
          <button className={styles.button}>Избранное</button>
        </Link>
      </div>
    </div>
  )
}

export default Header;