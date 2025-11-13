import { FILTERS, GENRES } from '../../constants/constants'

import styles from './TabsCategory.module.css'

const TabsCategory = ({ queryParams, onChangeQueryParams, handleClickSearch }) => {
  return (
    <div className={styles.list}>
      <select
        className={styles.select}
        name="genres"
        value={queryParams.genres}
        onChange={(e) => onChangeQueryParams(e)}
      >
        {
          GENRES.map(({ id, genre }) => {
            if (genre.length) return <option key={id} value={id}>{genre}</option>
          })
        }
      </select>
      <select
        className={styles.select}
        name="countries"
        value={queryParams.countries}
        onChange={(e) => onChangeQueryParams(e)}
      >
        {
          FILTERS.map(({ id, country }) => {
            if (country.length) return <option key={id} value={id} >{country}</option>
          })
        }
      </select>

      <button
        onClick={() => handleClickSearch(queryParams)}
        className={styles.button}>Поиск
      </button>
    </div>
  )
}

export default TabsCategory