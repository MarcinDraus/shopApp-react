import React from 'react';

import styles from './ProductImage.module.scss';

const ProductImage = ({ name, title, currentColor }) => {
  const shirtImageUrl = `${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`;

  return (
    <div className={styles.imageContainer}>
      <img className={styles.image} alt={title} src={shirtImageUrl} />
    </div>
  );
};

export default ProductImage;