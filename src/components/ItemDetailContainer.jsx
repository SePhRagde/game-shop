import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products.jsx';
import { CartContext } from '../context/CartContext.jsx';

const ItemDetailContainer = () => {
  const { id: itemId } = useParams();
  const [product, setProduct] = useState(null);
  const { addItemToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const foundProduct = products.find(product => product.id === parseInt(itemId));
    setProduct(foundProduct);
  }, [itemId]);

  const handleAddToCart = () => {
    if (product) {
      addItemToCart({ ...product, quantity });
      setQuantity(1);
    }
  };

  if (!product) return <div>Cargando...</div>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} style={{ width: '300px' }} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      
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

      <button className="btn btn-primary" onClick={handleAddToCart}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemDetailContainer;