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
          <div>
            <li>{product?.category}</li>
            <li>{product?.model}</li>
            <li>{product?.marka}</li>
            <li>{product?.price}</li>
          </div>
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
