import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItemToCart = (product) => {
    const productExists = cart.find((item) => item.id === product.id);
    const productQuantity = product.quantity > 0 ? product.quantity : 1;
    if (productExists) {
      setCart(cart.map((item) => 
        item.id === product.id ? { ...productExists, quantity: productExists.quantity + productQuantity } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: productQuantity }]);
    }
  };

  const removeItemFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    const validQuantity = quantity > 0 ? quantity : 1;
    setCart(cart.map((item) => 
      item.id === productId ? { ...item, quantity: validQuantity } : item
    ));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const validPrice = item.price > 0 ? item.price : 0;
      const validQuantity = item.quantity > 0 ? item.quantity : 1;
      return total + validPrice * validQuantity;
    }, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addItemToCart, removeItemFromCart, updateQuantity, clearCart, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;