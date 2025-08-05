import React from "react";
import styles from "./styles.module.css"

const Text = ({ font, size, color, weight, children, lineHeight, opacity, as: Component = 'p', ...props }) => {
  
  const textStyle = {
    color,
    fontSize: size,
    fontFamily: font,
    fontWeight: weight,
    lineHeight,
    opacity,
  };

  return (
    <>
      <Component className={styles.default} style={textStyle} {...props}>
        { children }
      </Component>
    </>
  )
  
}

export default Text;