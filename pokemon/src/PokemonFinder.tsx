// Import React and useEffect, useState hooks from React library
import React, { useEffect, useState } from 'react';
// Import Axios for making HTTP requests
import axios from 'axios';
// Import CSS
import './styles.css';

const PokemonFinder = () => {
  // Declare states for Pokemon name, sprite, and characteristics
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonData, setPokemonData] = useState<any>({});

  // useEffect to handle data fetching when component mounts and when pokemonName changes
  useEffect(() => {
    if (pokemonName) {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => {
          setPokemonData(response.data);
        })
        .catch(err => {
          console.error('Error:', err);
        });
    }
  }, [pokemonName]);

  return (
    <div>
      {/* Search box */}
      <input 
        type="text"
        placeholder="Enter Pokemon name"
        onChange={e => setPokemonName(e.target.value.toLowerCase())}
      />
      
      {/* Display Pokemon sprite */}
      <div>
        {pokemonData.sprites ? (
          <img src={pokemonData.sprites.front_default} alt={`${pokemonName} sprite`} />
        ) : null}
      </div>

      {/* Display Pokemon characteristics */}
      <div>
        {pokemonData.name ? <div>Name: {pokemonData.name}</div> : null}
        {pokemonData.height ? <div>Height: {pokemonData.height}</div> : null}
        {pokemonData.weight ? <div>Weight: {pokemonData.weight}</div> : null}
      </div>

      {/* Catch button */}
      <button>CATCH</button>
    </div>
  );
};

export default PokemonFinder;
