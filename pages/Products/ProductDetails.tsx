import React = require('react');
import { useParams } from 'react-router-dom';
import { productData } from './data';

export const ProductDetails = () => {
  const { id } = useParams();
  return (
    <div>
      {productData
        .filter((item) => item.key === id)
        .map((filterProduct) => (
          <div
            className="cart"
            style={{ width: '300px', height: '300px', border: '1px solid red' }}
          >
            <h1>{filterProduct.category}</h1>
            <h3>{filterProduct.marka}</h3>
            <h4>{filterProduct.price}</h4>
          </div>
        ))}
      ;
    </div>
  );
};
