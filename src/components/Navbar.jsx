import React from 'react'
import { Link } from 'react-router-dom';
import '../assets/styles.css';

function Navbar() {
  return (
    <div className='navbar'>

        <ul className='navbar-menu'>
            <li><Link to="/">Pokedex</Link></li>
            <li><Link to="/Favoris">Mes favoris</Link></li>
        </ul>
    </div>
  )
}

export default Navbar