import React from "react";
import styles from "./styles.module.css"

const Text = ({ font, size, color, weight, children, lineHeight, opacity, as: Component = 'p' }) => {
  
  const textStyle = {
    color: color,
    fontSize: size,
    fontFamily: font,
    fontWeight: weight,
    lineHeight: lineHeight,
    opacity: opacity
  };

  return (
    <>
      <Component className={styles.default} style={textStyle}>
        { children }
      </Component>
    </>
  )
  
}

export default Text;