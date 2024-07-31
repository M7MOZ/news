/* eslint-disable react/prop-types */
import styles from "./MainSection.module.css";
import desktopImg from "../../assets/images/image-web-3-desktop.jpg";
import mobileImg from "../../assets/images/image-web-3-mobile.jpg";
function MainSection({ width }) {
  return (
    <div className={styles.main}>
      <img src={width < 700 ? mobileImg : desktopImg} alt="web-3"></img>
      <div className={styles.content}>
        <div className={styles.left}>The Bright Future of Web 3.0?</div>
        <div className={styles.right}>
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button type="button">READ MORE</button>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
