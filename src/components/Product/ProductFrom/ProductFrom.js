
import React from 'react';
import OptionColor from './OptionColor/OptionColor';
import OptionSize from './OptionSize/OptionSize';
import Button from './Button/Button';
import styles from './ProductFrom.module.scss';

const ProductForm = ({
  sizes,
  colors,
  currentSize,
  currentColor,
  handlerSize,
  handlerColor,
  prepareColorClassName,
  summary,

}) => {

  return (
    <form>
      <div className={styles.sizes}>
        <h3 className={styles.optionLabel}>Sizes</h3>
        <OptionSize sizes={sizes} currentSize={currentSize} handlerSize={handlerSize} />
      </div>
      <div className={styles.colors}>
        <h3 className={styles.optionLabel}>Colors</h3>
        <OptionColor
          colors={colors}
          currentColor={currentColor}
          handlerColor={handlerColor}
          prepareColorClassName={prepareColorClassName}
        />
      </div>
      <Button className={styles.button}>
        <span className="fa fa-shopping-cart" onClick={(e)=>summary(e)} />
      </Button>
    </form>
  );
};

export default ProductForm;

