import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Card from './Card';

function Favorites() {
  const [favoritePokemon, setFavoritePokemon] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavoritePokemon(storedFavorites);
  }, []);

  return (
    <>
      <Navbar />
      <div>Mes favoris</div>
      <Card
        pokemon={favoritePokemon.map((favData) => ({
          id: favData.id,
          name: favData.name,
          sprites: { front_default: favData.spriteUrl },
        }))}
      />
    </>
  );
}

export default Favorites;
