import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonFinder from './PokemonFinder';



import React, { useEffect /*useState*/ } from 'react'          // Importing React and hooks

// The main App component
const App = () => {
  const [pokemonName, setPokemonName] = useState<string>('') // State for storing the name of the Pokémon to search
  const [pokemonData, setPokemonData] = useState<any>(null) // State for storing the fetched Pokémon data

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    if (!pokemonName) return // Skip if there's no name to search for

    // Fetching Pokémon data
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
      .then((response) => response.json()) // Parsing the JSON data from the response
      .then((data) => setPokemonData(data)) // Setting the fetched data to our state
  }, [pokemonName]) // This effect depends on the pokemonName state

  return (
    <div>
      <input
        type="text"
        placeholder="Search Pokémon"
        onChange={(e) => setPokemonName(e.target.value)} // Updating pokemonName state on every change
      />
      {pokemonData && (
        <div>
          <img src={pokemonData.sprites.front_default} alt={pokemonName} /> {/* Displaying sprite image */}
          <div>Height: {pokemonData.height}</div> {/* Displaying height */}
          <div>Weight: {pokemonData.weight}</div> {/* Displaying weight */}
          <button>CATCH</button> {/* Catch button */}
        </div>
      )}
    </div>
  )
}

export default App
