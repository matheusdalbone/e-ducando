import React from "react";
import styles from "./styles.module.css"

const Text = ({ size, color, children, as: Component = 'p'}) => {

  return (
    <>
      <Component className={styles.text} style={{ color: color}}>
        { children }
      </Component>
    </>
  )
  
}

export default Text;