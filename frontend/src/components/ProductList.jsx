import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

const ProductList = () => {
  const { products } = useContext(ShopContext);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;