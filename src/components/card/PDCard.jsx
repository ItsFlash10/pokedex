import React, { useState } from 'react';

import PokemonModalData from '../modal/pokemon-modal-data/PokemonModalData';
import PokeAbility from '../modal/sub-components/poke-ability/PokeAbility';
import PokeTypes from '../modal/sub-components/poke-types/PokeTypes';

import { capitalizeString } from '../../common/utilities';

import './PDCard.scss';

function PDCard(props) {
  const { pokemonName, pokeTypes = [], pokeAbilities = {}, pokeImage } = props;
  const [selectedPokemon, setSelectedPokemon] = useState();
  const [isModalActive, setIsModalActive] = useState(false);

  const renderPokemonAbilities = () => {
    return Object.keys(pokeAbilities).map(ability => (
      <PokeAbility
        key={ability}
        ability={ability}
        score={pokeAbilities[ability]}
      />
    ));
  };

  const renderPokemonTypeTag = () => {
    return pokeTypes.map(type => <PokeTypes key={type} tag={type} />);
  };

  const renderModal = () => {
    setIsModalActive(true);
    setSelectedPokemon(pokemonName);
  };

  return (
    <>
      <div onClick={renderModal} className="poke-card">
        <div className="left-container">
          <div className="pokemon-name">{capitalizeString(pokemonName)}</div>
          <div className="pokemon-ability-container">
            {renderPokemonAbilities()}
          </div>
          <div className="poke-tags">{renderPokemonTypeTag()}</div>
        </div>
        <div className="right-container">
          <img className="pokemon-img" src={pokeImage} alt="pokemon" />
        </div>
      </div>
      {isModalActive && (
        <PokemonModalData
          pokemonName={selectedPokemon}
          setModalStatus={setIsModalActive}
        />
      )}
    </>
  );
}

export default PDCard;
