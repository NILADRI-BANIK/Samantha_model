import React from "react";
import styles from "./Recent.module.scss";
import blazerImage from "../../assets/image/Rectangle 492.png";

const Recent = () => {
  return (
    <div className={styles.recentSection}>
      <div className={styles.container}>
        <div className={styles.blazerImageWrapper}>
          <img
            src={blazerImage}
            alt="Fashion Blazer"
            className={styles.blazerImage}
          />
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.titleSection}>
            <div className={styles.horizontalLine}></div>
            <h2 className={styles.title}>
              Recent Case
              <br />
              Studies
            </h2>
          </div>

          <div className={styles.verticalLine}></div>

          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc,
            tincidunt sed purus phasellus condimentum sed diam sem. Maecenas
            fermentum ac aliquet felis. Eu sagittis, purus auctor curabitur.
            Pellentesque in quis rhoncus vel sed netus ipsum. Consectetur
            curabitur ante.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recent;
