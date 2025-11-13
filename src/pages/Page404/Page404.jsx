import styles from './Page404.module.css'

const Page404 = () => {
  return (
    <div className={styles.root}>
      <h1 >Ошибка 404</h1>
      <p className={styles.description}>
        К сожалению данная страница отсутствует.
      </p>
    </div>
  )
}

export default Page404