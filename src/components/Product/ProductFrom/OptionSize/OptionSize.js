import React from 'react';
import styles from './OptionSize.module.scss';
import clsx from "clsx";

const OptionSize = ({ sizes, currentSize, handlerSize }) => {
  return (

    <ul className={styles.choices}>
          {sizes.map(size=>
        <li key={size.name} >
            <button  type="button" className={clsx(currentSize === size.name && styles.active)} onClick={()=>handlerSize(size.name)}
            >{size.name}
            </button>
        </li>)}
    </ul>

  );
};

export default OptionSize;

