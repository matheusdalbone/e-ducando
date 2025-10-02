import React from "react";
import styles from "./styles.module.css"
import { IoCloseCircleOutline } from "react-icons/io5";


const FormModal = ({ isOpen, onClick}) => {

  return (
    isOpen? 
      <div className={ styles.overlay }>
        <div className={styles.modalContainer}>
          <button className={styles.closeBtn} onClick={onClick}>
            <IoCloseCircleOutline size={'20px'}/>
          </button>
          <div className={ styles.topSection }>
          
          </div>
          <div className={ styles.bottomSection }>
          
          </div>
        </div>
    </div>
      : null
  );
}

export default FormModal;