import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';


const Products = () => {
  const [products] = useState(productsData);

  return (
    <section>
      {products.map(product => (
        <Product key={product.id} {...product} />
      ))}
    </section>
  );
};

// const Products = () => {
//   const [products]  = useState(productsData);

//   return (
//     <section>
//       <Product
//         id={products[0].id}
//         nameee={products[0].name}
//         title={products[0].title}
//         colors={products[0].colors}
//         sizes={products[0].sizes}
//         basePrice={products[0].basePrice} />
//       <Product
      
//         id={products[1].id}
//         name={products[1].namee}
//         title={products[1].title}
//         colors={products[1].colors}
//         sizes={products[1].sizes}
//         basePrice={products[1].basePrice} />
//     </section>
//   );
// };

export default Products;

// const BookLists = ({ books, removeBook }) => {
    
//   return (
//       <ul>
//           {books.map(book => <li key={book.id}>{book.title} by {book.author}<button onClick={() => removeBook(book.id)}>remove</button></li> )}
//       </ul>
//   );
// };

// export default BookLists;