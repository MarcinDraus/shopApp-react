import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';

const Product = (props) => {
  const { title, basePrice, sizes, colors } = props;
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0]);

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          alt={title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-kodilla--black.jpg`}
        />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {basePrice}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {sizes.map((size) => (
                <li key={size.name}>
                  <button
                    type="button"
                    className={clsx(styles.size, { [styles.active]: size === currentSize })}
                    onClick={() => setCurrentSize(size)}
                  >
                    {size.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {colors.map((color) => (
                <li key={color}>
                  <button
                    type="button"
                    className={clsx(styles.color, { [styles.active]: color === currentColor })}
                    style={{ background: color }}
                    onClick={() => setCurrentColor(color)}
                  />
                </li>
              ))}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  );
};

Product.propTypes = {
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      additionalPrice: PropTypes.number.isRequired,
    })
  ).isRequired,
  colors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Product;



// import styles from './Product.module.scss';
// import clsx from 'clsx';
// import Button from '../Button/Button';

// const Product = props => {
//   return (
//     <article className={styles.product}>
//       <div className={styles.imageContainer}>
//         <img 
//           className={styles.image}
//           alt="Kodilla shirt"
//           src={`${process.env.PUBLIC_URL}/images/products/shirt-kodilla--black.jpg`} />
//       </div>
//       <div>
//         <header>
//           <h2 className={styles.name}>Kodilla shirt</h2>
//           <span className={styles.price}>Price: 20$</span>
//         </header>
//         <form>
//           <div className={styles.sizes}>
//             <h3 className={styles.optionLabel}>Sizes</h3>
//             <ul className={styles.choices}>
//               <li><button type="button" className={styles.active}>S</button></li>
//               <li><button type="button">M</button></li>
//               <li><button type="button">L</button></li>
//               <li><button type="button">XL</button></li>
//             </ul>
//           </div>
//           <div className={styles.colors}>
//             <h3 className={styles.optionLabel}>Colors</h3>
//             <ul className={styles.choices}>
//               <li><button type="button" className={clsx(styles.colorBlack, styles.active)} /></li>
//               <li><button type="button" className={clsx(styles.colorRed)} /></li>
//               <li><button type="button" className={clsx(styles.colorWhite)} /></li>
//             </ul>
//           </div>
//           <Button className={styles.button}>
//             <span className="fa fa-shopping-cart" />
//           </Button>
//         </form>
//       </div>
//     </article>
//   )
// };

// export default Product;