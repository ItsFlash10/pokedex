const capitalizeString = str => {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
};

const addDash = str => {
  return str.replaceAll(',', ' - ');
};

const POKEMON_TYPES = [
  'grass',
  'fairy',
  'water',
  'electric',
  'dragon',
  'fighting',
  'fire',
  'flying',
  'glass',
  'ghost',
  'bug',
  'ground',
  'ice',
  'normal',
  'poison',
  'psychic',
  'rock',
  'steel',
];

export { capitalizeString, addDash, POKEMON_TYPES };
