import React from "react";

import "./PDButton.scss";

function PokedexButton(props) {
  const { buttonText, handleClick, className } = props;
  return (
    <button onClick={handleClick} className={`poke-button ${className}`}>
      {buttonText}
    </button>
  );
}

export default PokedexButton;
