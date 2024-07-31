// import React from 'react'
import retro from "../../assets/images/image-retro-pcs.jpg";
import laptop from "../../assets/images/image-top-laptops.jpg";
import gaming from "../../assets/images/image-gaming-growth.jpg";
import Card from "./Card";
import styles from "./Footer.module.css";
function Footer() {
  return (
    <div className={styles.cards}>
      <Card
        image={retro}
        index={1}
        head={"Reviving Retro PCs"}
        content={"what happens when old PCs are given modern upgrades"}
      />
      <Card
        image={laptop}
        index={2}
        head={"Reviving Retro PCs"}
        content={"what happens when old PCs are given modern upgrades"}
      />
      <Card
        image={gaming}
        index={3}
        head={"Reviving Retro PCs"}
        content={"what happens when old PCs are given modern upgrades"}
      />
    </div>
  );
}

export default Footer;
