/* eslint-disable react/prop-types */
import styles from "./Side.module.css";
function New({ header, content }) {
  return (
    <div className={styles.new}>
      <h3>{header}</h3>
      <p>
        {content}
      </p>
    </div>
  );
}

export default New;
