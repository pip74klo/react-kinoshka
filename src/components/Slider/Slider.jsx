import { useMemo } from 'react';

import styles from './Slider.module.css';

const Slider = ({ data, setShowSlider, currentSlide, setCurrentSlide }) => {

  const arraySlides = useMemo(() => {
    return data.map(item => item.imageUrl)
  }, [data])

  return (
    <div className={styles.overlay}>
      <button
        disabled={currentSlide <= 0}
        onClick={() => setCurrentSlide(prev => prev - 1)}
        className={styles.prev}></button>

      <div className={styles.wrapper}>
        <div className={styles.imgWrapper}>
          <img
            className={styles.img}
            src={arraySlides[currentSlide]}
            alt="" />
        </div>
        <span>{currentSlide + 1} из {data.length}</span>
        <button
          className={styles.closeCross}
          onClick={() => setShowSlider(false)}></button>
      </div>

      <button
        disabled={currentSlide === data.length - 1}
        onClick={() => setCurrentSlide(prev => prev + 1)}
        className={styles.next}></button>
    </div>
  )
}

export default Slider;