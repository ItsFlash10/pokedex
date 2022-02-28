import React from "react";

import { capitalizeString } from "../../../../common/utilities";

import "./PokeAbility.scss";

function PokeAbility(props) {
  const { ability, score } = props;
  return (
    <div className="pokemon-abilities">
      <div className="score-container">
        <span>{score}</span>
      </div>
      <span className="ability">{`${capitalizeString(ability)}`}</span>
    </div>
  );
}

export default PokeAbility;
