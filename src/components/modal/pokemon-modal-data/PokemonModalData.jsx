import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router';
import axios from 'axios';

import PokemonModal from '../PDModal';

function PokemonModalData(props) {
  const { pokemonName, setModalStatus } = props;
  const [pokemonData, setPokemonData] = useState({});
  const navigate = useNavigate();

  const fetchPokemonData = async () => {
    try {
      const pokeMDetails = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      setPokemonData(pokeMDetails.data);
    } catch (error) {
      navigate('/error', { replace: true });
      console.log(
        "Oppsie!!! Seems Team Rocket got us at this moment but we'll come back strong soon xD"
      );
    }
  };

  useEffect(() => {
    fetchPokemonData();
  }, []);

  let hp;
  let speed;
  let attack;
  let specialAttack;
  let defense;
  let specialDefense;
  let image = '';
  let pokemonSprites = pokemonData.sprites;
  let pokemonTypes = [];
  let pokemonAbilities = [];
  let baseExperience;
  let pokeMultiStats = {};

  if (pokemonData.stats) {
    pokemonData.stats.map(data => {
      const stats = data.base_stat;
      if (data.stat.name === 'hp') hp = stats;
      if (data.stat.name === 'attack') attack = stats;
      if (data.stat.name === 'defense') defense = stats;
      if (data.stat.name === 'special-attack') specialAttack = stats;
      if (data.stat.name === 'special-defense') specialDefense = stats;
      if (data.stat.name === 'speed') speed = stats;
    });

    pokeMultiStats = {
      defense: defense,
      attack: attack,
      spAttack: specialAttack,
      spDefence: specialDefense,
    };

    image = pokemonSprites.other.dream_world.front_default;

    pokemonTypes = pokemonData.types.map(obj => obj.type.name);
    pokemonAbilities = pokemonData.abilities.map(obj => obj.ability.name);
    baseExperience = pokemonData.base_experience;
  }
  return (
    <div>
      <PokemonModal
        name={pokemonName}
        pokeHp={hp}
        pokeSpeed={speed}
        pokeMultiStats={pokeMultiStats}
        pokeImage={image}
        pokeTypes={pokemonTypes}
        pokeBaseExperience={baseExperience}
        pokeAbilities={pokemonAbilities}
        setModalStatus={setModalStatus}
      />
    </div>
  );
}
export default PokemonModalData;
