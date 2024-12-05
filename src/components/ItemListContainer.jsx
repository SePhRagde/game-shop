import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products.jsx';
import Item from './Item.jsx';
import { CartContext } from '../context/CartContext.jsx';

const ItemListContainer = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { id: categoryId } = useParams();
  const { addItemToCart } = useContext(CartContext); 

  useEffect(() => {
    if (categoryId) {
      setFilteredProducts(products.filter(product => product.category === categoryId));
    } else {
      setFilteredProducts(products);
    }
  }, [categoryId]);

  const handleAddToCart = (product) => {
    addItemToCart({ ...product, quantity: 1 });
  };

  return (
    <div className="container">
      <div className="row">
        {filteredProducts.map(product => (
          <div className="col-md-4" key={product.id}>
            <Item
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              onAddToCart={handleAddToCart} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;