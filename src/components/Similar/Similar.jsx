import { useState } from 'react';

import CardPreview from '../CardPreview';
import Pagination from '../Pagination';

import styles from './Similar.module.css'

const Similar = ({ similar }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const { data, loading, error } = similar;

  const countPreview = 4
  const startIndex = (currentPage - 1) * countPreview
  const endIndex = startIndex + countPreview

  const totalPage = Math.ceil(data?.items?.length / countPreview) || 1
  const currentList = data?.items?.slice(startIndex, endIndex) || []

  if (loading) return <div>Загрузка...</div>
  if (error) return <div className={styles.error}>Не удалось загрузить информацию о фильмах</div>
  if (!data?.items || data.items.length === 0) {
    return <div className={styles.error}>Похожие фильмы отсутствуют.</div>
  }

  return (
    <div className={styles.similar}>
      <div className={styles.title}>Возможно, вам понравится</div>
      <div className={styles.list}>
        {currentList.map(item =>
          <CardPreview
            key={item.filmId}
            movie={item}
          />)}
      </div>
      <Pagination
        data={data}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPage={totalPage}
        variant={'circle'}
      />
    </div>
  )
}

export default Similar;