import React from "react";
import styles from "./Hero.module.scss";
import heroImage from "../../assets/image/image 103.png";
import FacebookIcon from "../../assets/svg/facebook.png";
import InstagramIcon from "../../assets/svg/instagram.png";
import TwitterIcon from "../../assets/svg/prime_twitter.png";
import ThreadsIcon from "../../assets/svg/threads.png";
import YoutubeIcon from "../../assets/svg/youtube.png";

const Hero = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroContent}>
        {/* Main Title */}
        <h1 className={styles.mainTitle}>
          <span className={styles.titlePart}>SAMA NTHA</span>
        </h1>

        {/* Hero Image */}
        <div className={styles.heroImageWrapper}>
          <img src={heroImage} alt="Samantha" className={styles.heroImage} />
        </div>

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          {/* Message Button */}
          <button className={styles.messageBtn}>MESSAGE</button>

          {/* Social Icons */}
          <div className={styles.socialIcons}>
            <a href="#" className={styles.socialIcon}>
              <img src={FacebookIcon} alt="Facebook" />
            </a>
            <a href="#" className={styles.socialIcon}>
              <img src={TwitterIcon} alt="Twitter" />
            </a>
            <a href="#" className={styles.socialIcon}>
              <img src={ThreadsIcon} alt="Threads" />
            </a>
            <a href="#" className={styles.socialIcon}>
              <img src={InstagramIcon} alt="Instagram" />
            </a>
            <a href="#" className={styles.socialIcon}>
              <img src={YoutubeIcon} alt="YouTube" />
            </a>
          </div>

          {/* Follow Button */}
          <button className={styles.followBtn}>FOLLOW</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
