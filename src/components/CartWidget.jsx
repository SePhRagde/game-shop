import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = ({ itemCount }) => {
  return (
    <div className="cart-icon">
      <FaShoppingCart size={30} />
      {itemCount > 0 && (
        <span className="badge bg-primary">{itemCount}</span>
      )}
    </div>
  );
};

export default CartWidget;