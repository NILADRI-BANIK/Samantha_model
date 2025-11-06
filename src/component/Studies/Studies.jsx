import React from 'react'
import styles from './Studies.module.scss'
import mannequinsImage from '../../assets/image/image 105.png'
import mannequinsImage1 from '../../assets/image/image 105 (1).png'

const Studies = () => {
  return (
    <div className={styles.studiesSection}>
      <div className={styles.container}>
        <div className={styles.mannequinsWrapper}>
          <img 
            src={mannequinsImage} 
            alt="Fashion Mannequins Left" 
            className={styles.mannequinsImageLeft}
          />
          <img 
            src={mannequinsImage1} 
            alt="Fashion Mannequins Right" 
            className={styles.mannequinsImageRight}
          />
        </div>

        <div className={styles.descriptionBox}>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, tincidunt sed 
            purus phasellus condimentum sed diam sem. Maecenas fermentum ac 
            aliquet felis. Eu sagittis, purus auctor curabitur. Pellentesque in quis rhoncus 
            vel sed netus ipsum. Consectetur curabitur ante.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Studies