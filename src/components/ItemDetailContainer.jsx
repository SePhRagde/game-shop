import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products.jsx';

const ItemDetailContainer = () => {
  const { id: itemId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = products.find(product => product.id === parseInt(itemId));
    setProduct(foundProduct);
  }, [itemId]);

  if (!product) return <div>Cargando...</div>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} style={{ width: '300px' }} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
    </div>
  );
};

export default ItemDetailContainer;
