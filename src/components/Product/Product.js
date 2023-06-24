
import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductImage from './ProductImage/ProductImage';
import ProductForm from './ProductFrom/ProductFrom';
import styles from './Product.module.scss';

const Product = ({ title, basePrice, colors, sizes, name }) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  const handlerColor = (color) => {
    setCurrentColor(color);
    console.log(color, 'color');
  };

  const handlerSize = (size) => {
    setCurrentSize(size);
  };

  const prepareColorClassName = (color) => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  };

  const getPrice = () => {
    const selectedSize = sizes.find((size) => size.name === currentSize);
    if (selectedSize) {
      return basePrice + selectedSize.additionalPrice;
    }
    return basePrice;
  };

  const summary = (e) => {
    e.preventDefault();
    const summaryData = {
      name: name,
      title: title,
      totalPrice: getPrice(),
      size: currentSize,
      color: currentColor,
    };
    console.log('summary', summary);
    console.log(summaryData, 'summaryData');
  };


  return (
    <article className={styles.product}>
      <ProductImage name={name} title={title} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductForm
          sizes={sizes}
          colors={colors}
          currentSize={currentSize}
          currentColor={currentColor}
          handlerSize={handlerSize}
          handlerColor={handlerColor}
          summary={summary}
          prepareColorClassName={prepareColorClassName}
        />
      </div>
    </article>
  );
};

Product.propTypes = {
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
};

export default Product;

