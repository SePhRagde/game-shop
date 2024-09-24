import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx';

const ItemDetail = ({ id, name, price, description, image }) => {
  const [quantity, setQuantity] = useState(1);
  const { addItemToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addItemToCart({ id, name, price, quantity });
    setQuantity(1); 
  };

  return (
    <div className="item-detail">
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <p>{description}</p>
      <h4>Precio: ${price}</h4>
      <div>
        <label>Cantidad:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          min="1"
        />
      </div>
      <button className="btn btn-primary" onClick={handleAddToCart}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemDetail;