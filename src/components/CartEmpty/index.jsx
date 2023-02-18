import React from "react";
import styles from "./CartEmpty.module.scss";

const CartEmpty = () => {
  return (
    <div className={styles.root}>
      <h1>КОРЗИНА ПУСТА</h1>
    </div>
  );
};

export default CartEmpty;
