import React from 'react';

import PDHeader from '../../components/header/PDHeader';
import PokemonDetails from '../../components/card/pokemon-details/PokemonDetails';
import PDDropdown from '../../components/dropdown/PDDropdown';
import PDDropdownMobile from '../../components/dropdown/PDDropdownMobile';
import PDFooter from '../../components/footer/PDFooter';

import { POKEMON_TYPES } from '../../common/utilities';

import 'bootstrap/dist/css/bootstrap.css';
import './PokedexPage.scss';

function PokedexPage() {
  return (
    <>
      <PDHeader />
      <div className="pokedex-main-container">
        <div className="pokedex-text-container">
          <span className="text">
            800 <span className="bold">Pokemons </span>for you to choose you
            <span className="text-fav">
              <br /> favourite
            </span>
          </span>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Encuentra tu pokemon..."></input>
        </div>
        <PDDropdown />
        <PDDropdownMobile filterTypes={POKEMON_TYPES} />
        <PokemonDetails />
      </div>
      <PDFooter position="mobile-modal" modalSat />
    </>
  );
}

export default PokedexPage;
