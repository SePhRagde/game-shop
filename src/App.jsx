import React from 'react'
import NavBar from './components/NavBar' 
import ItemListContainer from './components/ItemListContainer'
import './App.css'

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenidos a GameShop!" />
      <div className="console-icons">
        <i className="fab fa-playstation"></i>
        <i className="fab fa-xbox"></i>
        <i className="fab fa-nintendo-switch"></i>
      </div>
    </div>
  )
}

export default App