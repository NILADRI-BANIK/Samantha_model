import React from "react";
import styles from "./Message.module.scss";
import ProfileImage from "../../assets/image/Ellipse 5.png";

const Message = () => {
  return (
    <div className={styles.messageSection}>
      <div className={styles.testimonialCard}>
        <h2 className={styles.title}>What my clients say about me</h2>

        <div className={styles.testimonialContent}>
          <div className={styles.profileImage}>
            <img src={ProfileImage} alt="Client" />
          </div>

          <p className={styles.testimonialText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc,
            tincidunt sed purus phasellus condimentum sed diam sem. Maecenas
            fermentum ac aliquet felis. Eu sagittis, pu Lorem ipsum dolor sit
            amet, consectetur adipiscing elit
          </p>
        </div>
      </div>

      <div className={styles.shortMessageSection}>
        <h2 className={styles.shortTitle}>Short Message</h2>
        <p className={styles.shortText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
        </p>
      </div>
    </div>
  );
};

export default Message;
