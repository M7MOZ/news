/* eslint-disable react/prop-types */

import Footer from "../components/footer/Footer";
import MainSection from "../components/main-section/MainSection";
import Side from "../components/side-new/Side";
import styles from "../styles/HomePage.module.css";
function HomePage({ width }) {
  return (
    <>
      <div className={styles.home}>
        <MainSection width={width} />
        <Side />
      </div>
      <Footer/>
    </>
  );
}

export default HomePage;
