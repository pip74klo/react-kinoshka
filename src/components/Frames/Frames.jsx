import { useState } from 'react'

import styles from './Frames.module.css'
import Slider from '../Slider'

const Frames = ({ images }) => {
  const [showSlider, setShowSlider] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(null)

  const { data } = images

  const onClickSlide = (index) => {
    setShowSlider(true)
    setCurrentSlide(index)
  }

  if (data?.length < 1) return <div className={styles.error}>Кадры не найдены.</div>

  return (
    <div className={styles.frames}>
      <div className={styles.title}><span>Кадры из фильма</span></div>
      <div className={styles.list}>
        {data?.slice(0, 6).map((imageObj, idx) => (
          <div
            className={styles.imgWrapper}
            key={idx}
            onClick={() => onClickSlide(idx)}>
            <img
              className={styles.img}
              src={imageObj.imageUrl}
              alt={`Кадр фильма ${idx + 1}`} />
          </div>)
        )}
      </div>

      {showSlider &&
        <Slider data={data}
          setShowSlider={setShowSlider}
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide} />}
    </div>
  )
}

export default Frames;