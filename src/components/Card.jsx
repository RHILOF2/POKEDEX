import React, { useState, useEffect } from 'react';
import '../assets/styles.css';
import * as Icon from 'react-bootstrap-icons';
import { Star } from "react-bootstrap-icons";


function Card({ pokemon }) {
    const [favoriteStates, setFavoriteStates] = useState([]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavoriteStates(new Array(pokemon.length).fill(false).map((_, index) => storedFavorites.includes(pokemon[index].id)));
    }, [pokemon]);

    const toggleFavorite = (index) => {
        const updatedFavoriteStates = [...favoriteStates];
        updatedFavoriteStates[index] = !updatedFavoriteStates[index];
        setFavoriteStates(updatedFavoriteStates);
      
        const updatedFavorites = pokemon
          .filter((_, i) => updatedFavoriteStates[i])
          .map((favPokemon) => ({
            id: favPokemon.id,
            name: favPokemon.name,
            spriteUrl: favPokemon.sprites.front_default,
          }));
      
        if (updatedFavorites.length > 0) {
          localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        } else {
          localStorage.removeItem('favorites'); // Supprimer le stockage s'il n'y a pas de favoris
        }
    };
      

  return (
    <>
      {pokemon.map((item, index) => {
        return (
          <div key={item.id} className='container_card'>
            <div className='card'>
              <img src={item.sprites.front_default} alt='' />
              <h3>{item.name}</h3>
              <ul className='button'>
                <li>
                  <button onClick={() => toggleFavorite(index)} className='pre'>
                    {favoriteStates[index] ? 'Enregistré': 'Enregistrer' }
                  </button>
                </li>
                <li>
                  <button>Détails</button>
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Card;