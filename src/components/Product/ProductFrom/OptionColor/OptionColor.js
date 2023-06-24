
import React from 'react';
import styles from './OptionColor.module.scss';
import clsx from "clsx";

const OptionColor = ({ colors, currentColor, handlerColor }) => {

    const prepareColorClassName = color => {
        return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()]
       }   

  return (
    <ul className={styles.choices}>
    {colors.map((color) => (
      <li key={color}>
        <button
          type="button"
          className={clsx(prepareColorClassName(color), currentColor === color ? styles.active : '')} onClick={()=>handlerColor(color)}
        ></button>
      </li>
    ))}
  </ul>
 
  );
};

export default OptionColor;
