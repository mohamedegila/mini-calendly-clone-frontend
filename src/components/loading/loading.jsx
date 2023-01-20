import React from "react";
import styles from "./loading.module.css"

export const Loading = (props) => {
  return (
    <>
      <section className={styles.loading}>
        <span className={styles.loadWords}>Loading ...</span>
        <span className={styles.loading__anim}></span>
      </section>
    </>
  );
};
