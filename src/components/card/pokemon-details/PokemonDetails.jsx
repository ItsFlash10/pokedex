import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { CircularProgress } from '@mui/material';
import axios from 'axios';

import PDCard from '../PDCard';

import './PokemonDetails.scss';

function PokemonDetails() {
  const [pokemonsData, setPokemonData] = useState([]);

  const navigate = useNavigate();

  const fetchPokemonsData = async () => {
    try {
      const pokemons = await axios.get(
        'https://6201203afdf5090017249856.mockapi.io/api/v1/pokemon-details/pokemon'
      );
      setPokemonData(pokemons.data);
    } catch (error) {
      navigate('/error', { replace: true });
      console.log(
        "Oppsie!!! Seems Team Rocket got us at this moment but we'll come back strong soon xD"
      );
    }
  };

  useEffect(() => {
    fetchPokemonsData();
  }, []);

  const renderPokeData = () => {
    return pokemonsData.map(pokemon => {
      const types = pokemon.type;
      const name = pokemon.name;
      const image = pokemon.image;
      const abilities = {
        attack: pokemon.height,
        defense: pokemon.weight,
      };

      return (
        <PDCard
          pokemonName={name}
          key={name}
          pokeTypes={types}
          pokeImage={image}
          pokeAbilities={abilities}
        />
      );
    });
  };

  return (
    <div className="poke-card-container">
      {pokemonsData.length ? (
        renderPokeData()
      ) : (
        <CircularProgress color="inherit" />
      )}
    </div>
  );
}
export default PokemonDetails;
