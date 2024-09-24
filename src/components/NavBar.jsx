import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext.jsx';
import CartWidget from './CartWidget.jsx';

const NavBar = () => {
  const { cart } = useContext(CartContext);
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">GameShop</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/category/consolas">Consolas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/juegos">Juegos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/accesorios">Accesorios</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/checkout">Carrito</Link>
            </li>
          </ul>
          <CartWidget itemCount={cart.length} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;