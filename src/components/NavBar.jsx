import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">GameShop</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#home">Consolas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">Videojuegos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">Accesorios</a>
            </li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;