
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';

const Product = (props) => {
  const { name, price, sizes, colors } = props;

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          alt={name}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-kodilla--black.jpg`}
        />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{name}</h2>
          <span className={styles.price}>Price: {price}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {sizes.map((size) => (
                <li key={size.name}>
                  <button
                    type="button"
                    className={clsx(styles.size, { [styles.active]: size.isActive })}
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
                    className={clsx(styles.color, { [styles.active]: color.isActive })}
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
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      isActive: PropTypes.bool,
    })
  ).isRequired,
  colors: PropTypes.arrayOf(
    PropTypes.shape({
      isActive: PropTypes.bool,
    })
  ).isRequired,
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