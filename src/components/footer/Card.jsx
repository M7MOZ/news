/* eslint-disable react/prop-types */
// import React from 'react'
import styles from "./Footer.module.css";
function Card({image, head, content, index}) {
  return (
    <div className={styles.card}>
        <img src={image} alt="image" />
        <div className={styles.cardContent}>
          <h1>{`0${index}`}</h1>
          <h3>{head}</h3>
          <p>{content}</p>
        </div>
      </div>
  )
}

export default Card