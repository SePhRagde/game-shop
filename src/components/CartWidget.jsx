import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <FaShoppingCart size={30} />
      <span className="badge bg-primary">2</span>
    </div>
  );
};

export default CartWidget;