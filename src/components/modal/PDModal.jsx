import React from 'react';

import PokeAbility from './sub-components/poke-ability/PokeAbility';
import PokeTypes from './sub-components/poke-types/PokeTypes';
import PokeProgressBar from './sub-components/progress-bar/PokeProgressBar';

import { addDash } from '../../common/utilities';

import './PDModal.scss';

import closeBtn from '../../assets/icons/closeIcon.svg';

const PDModal = props => {
  const {
    name,
    pokeHp,
    pokeSpeed,
    pokeMultiStats,
    pokeImage,
    pokeTypes,
    pokeBaseExperience,
    pokeAbilities,
    setModalStatus,
  } = props;

  const renderPokeType = () => {
    return pokeTypes.map(type => <PokeTypes key={type} tag={type} />);
  };

  const renderPokemonAbilities = () => {
    return Object.keys(pokeMultiStats).map(ability => (
      <PokeAbility
        key={ability}
        ability={ability}
        score={pokeMultiStats[ability]}
      />
    ));
  };

  const renderPokeAbillities = () => {
    return pokeAbilities.map(ability => ability).toString();
  };

  const closeModal = () => {
      setModalStatus(false);
  };

  return (
    <div onClick={closeModal} className="pd-modal">
      <div className="modal-button-container">
        <img
          onClick={closeModal}
          className="close-modal-icon"
          src={closeBtn}
          alt="close-btn"
        />
      </div>
      <div className="pokemon-modal">
        <div className="pokemon-image-container">
          <div className="pokemon-name-mobile">{name}</div>
          <img src={pokeImage} alt="pokemon" />
          <div className="pokemon-types">{renderPokeType()}</div>
        </div>
        <div className="pokemon-description-container">
          <div className="title-base-points-container">
            <div className="pokemon-name">{name}</div>
            <div className="pokemon-base-point">{pokeBaseExperience}</div>
            <div className="pokemon-types-mobile">{renderPokeType()}</div>
          </div>
          <div className="pokemon-stats-container">
            <div className="pokemon-abilities-types">
              <span className="types-title"> Abilities </span>
              <span className="types">{addDash(renderPokeAbillities())}</span>
            </div>
            <div className="pokemon-hp-speed">
              <PokeProgressBar
                key={pokeHp}
                title="HP"
                value={pokeHp}
                color="linear-gradient(270deg, #64D368 0.15%, #64D368 70.88%)"
              />
              <PokeProgressBar
                key={pokeSpeed}
                title="Speed"
                value={pokeSpeed}
                color="linear-gradient(180deg, #F5DB13 0%, #F2B807 100%)"
              />
            </div>
            <div className="pokemon-abilities-container">
              {renderPokemonAbilities()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDModal;
