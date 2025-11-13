import styles from './PaginationButton.module.css'

const PaginationButton = ({ currentPage, pageNumber, variant, setCurrentPage }) => {
  const variantClass = variant === 'circle' ? styles.circle : styles.basic

  return (
    <button
      className={`${variantClass} ${currentPage === pageNumber ? styles.active : ''}`}
      onClick={() => setCurrentPage(pageNumber)}
    >
      {pageNumber}
    </button>
  )
}

export default PaginationButton