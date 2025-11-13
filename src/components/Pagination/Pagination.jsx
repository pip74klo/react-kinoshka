import PaginationButton from '../PaginationButton'
import styles from './Pagination.module.css'

const Pagination = ({ currentPage, setCurrentPage, totalPage, variant }) => {

  return (
    <div className={styles.pagination}>
      {
        [...Array(totalPage)].map((_, index) => {
          const pageNumber = index + 1;

          if (currentPage <= 6 && pageNumber <= 10) {
            return <PaginationButton key={index}
              currentPage={currentPage}
              variant={variant}
              setCurrentPage={setCurrentPage}
              pageNumber={pageNumber}
            />
          }

          if (pageNumber >= currentPage - 5 && pageNumber <= currentPage + 4) {
            return <PaginationButton key={index}
              currentPage={currentPage}
              variant={variant}
              setCurrentPage={setCurrentPage}
              pageNumber={pageNumber}
            />
          }
        })
      }
    </div>
  )
}

export default Pagination;