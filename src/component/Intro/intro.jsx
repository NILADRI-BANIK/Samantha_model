import React from "react";
import styles from "./intro.module.scss";
import modelImage from "../../assets/image/image 104.png";
import lineImage from "../../assets/svg/Line 60.png";
const Intro = () => {
  return (
    <div className={styles.introSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <div className={styles.titleWrapper}>
              <h1 className={styles.title}>My Intro</h1>
              <img src={lineImage} alt="Line" className={styles.titleLine} />
            </div>

            <div className={styles.description}>
              <div className={styles.verticalLine}></div>
              <div className={styles.textWrapper}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc,
                  tincidunt sed purus phasellus condimentum sed diam sem.
                  Maecenas fermentum ac aliquet felis. Eu sagittis, purus auctor
                  vel. In tempor, quis rhoncus vel sed nunc. Sed curabitur ante.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.imageContent}>
            <img
              src={modelImage}
              alt="Fashion Model"
              className={styles.modelImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
