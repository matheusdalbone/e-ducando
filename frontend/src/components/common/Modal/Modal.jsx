import React from "react";

import styles from "./styles.module.css";

const Modal = ({ children }) => {

  return (
    <section className={styles.modalSection} >
      { children}
    </section>
  );
};

export default Modal;