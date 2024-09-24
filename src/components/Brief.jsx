import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx';

const Brief = ({ cart, total }) => {
  const { updateQuantity, removeItemFromCart } = useContext(CartContext);

  return (
    <div className="border p-3 rounded bg-dark mb-4 text-white">
      <h2 className="text-center">Resumen de Compra</h2>
      {cart.length === 0 ? (
        <p className="text-center">No hay productos en el carrito.</p>
      ) : (
        <ul className="list-group">
          {cart.map(item => (
            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
              <span>{item.name}</span>
              <span>Precio: ${item.price}</span>
              <div className="d-flex align-items-center">
                <button
                  className="btn btn-secondary btn-sm me-2"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span>Cantidad: {item.quantity}</span>
                <button
                  className="btn btn-secondary btn-sm ms-2"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
                <button
                  className="btn btn-danger btn-sm ms-3"
                  onClick={() => removeItemFromCart(item.id)}
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h4 className="text-end mt-3">Total: ${total}</h4>
    </div>
  );
};

export default Brief;