import React from "react";
import styles from "./styles.module.css"

const Text = ({ font, size, color, children, as: Component = 'p' }) => {
  
  const textStyle = {
    color: color,
    fontSize: size,
    fontFamily: font
  };

  return (
    <>
      <Component className={styles.text} style={textStyle}>
        { children }
      </Component>
    </>
  )
  
}

export default Text;