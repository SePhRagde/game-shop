import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col text-center">
          <h2>{greeting}</h2>
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;