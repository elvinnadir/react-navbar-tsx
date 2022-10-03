import React = require('react');
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { products } from './data';

export const ProductDetails = () => {
  const { id } = useParams();

  return (
    <div>
      {products
        .filter((item) => item.key === id)
        .map((product) => (
          <>
            <li>{product.category}</li>
            <li>{product.title}</li>
            <li>{product.marka}</li>
          </>
        ))}
    </div>
  );
};

ProductDetails.PropTypes = {
  arr: PropTypes.array,
  category: PropTypes.string.isRequired,
  price: PropTypes.number,
  marka: PropTypes.string,
  model: PropTypes.string,
};
