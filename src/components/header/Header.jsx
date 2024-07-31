/* eslint-disable react/prop-types */
// import React from 'react'
import styles from "./Header.module.css";
import logo from "../../assets/images/logo.svg";
import PageNav from "./PageNav";
import hamburger from "../../assets/images/icon-menu.svg";
import close from "../../assets/images/icon-menu-close.svg";
import { useState } from "react";
function Header({ width }) {
  const [isOpen, setIsOpen] = useState(false);
  const togleNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo" className={styles.logo} />
      {width > 1000 ? (
        <PageNav />
      ) : (
        <img src={hamburger} alt="Logo" className={styles.logoHam} onClick={togleNav}/>
      )}
      <div className={`${styles.slider} ${isOpen ? styles.open : ''}`} onClick={togleNav}>
        <img src = {close} alt = "close" className={styles.close}/>
        <PageNav/>
      </div>
    </header>
  );
}

export default Header;
