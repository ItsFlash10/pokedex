import React from "react";

import { capitalizeString } from "../../../../common/utilities";

import "./PokeTypes.scss"

function PokeTypes(props) {
  const { tag } = props;
  return (
    <span className={`type-tag ${tag.toLowerCase()}`}>
      {`${capitalizeString(tag)}`}
    </span>
  );
}

export default PokeTypes;
