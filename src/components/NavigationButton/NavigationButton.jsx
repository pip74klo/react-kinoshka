import { useNavigate } from 'react-router-dom'

import styles from './NavigationButton.module.css'

const NavigationButton = ({ align, urlNavigate, text }) => {
  const navigate = useNavigate()
  const modification = align === 'start' ? styles.start : styles.end

  return (
    <div className={`${styles.navigation} ${modification}`}>
      <button
        type='button'
        className={`${styles.button} ${modification}`}
        onClick={() => navigate(urlNavigate)}
      >
        {text}
      </button>
    </div>
  )
}

export default NavigationButton;