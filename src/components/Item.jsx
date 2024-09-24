import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext.jsx';

const Item = ({ id, name, price, image }) => {
  const { addItemToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1); 

  const handleAddToCart = () => {
    addItemToCart({ id, name, price, quantity });
    setQuantity(1); 
  };

  return (
    <div className="card mx-auto mb-4" style={{ width: '18rem' }}>
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Precio: ${price}</p>
        <div className="input-group mb-3">
          <label className="input-group-text">Cantidad:</label>
          <input
            type="number"
            className="form-control"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            min="1"
          />
        </div>
        <Link to={`/item/${id}`} className="btn btn-primary me-2">Ver Detalle</Link>
        <button className="btn btn-success" onClick={handleAddToCart}>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default Item;