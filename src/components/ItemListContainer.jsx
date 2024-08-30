import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products.jsx';
import Item from './Item.jsx';

const ItemListContainer = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { id: categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      setFilteredProducts(products.filter(product => product.category === categoryId));
    } else {
      setFilteredProducts(products);
    }
  }, [categoryId]);

  return (
    <div className="product-list">
      {filteredProducts.map(product => (
        <Item
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default ItemListContainer;
