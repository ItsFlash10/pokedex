import React from 'react';

import { LineProgressBar } from '@frogress/line';

import './PokeProgressBar.scss';

function PokeProgressBar(props) {
  const { title, value, color } = props;
  return (
    <div className="progress-bar-container">
      <div className="progress-title">{`${title}`}</div>
      <div className="profress-value">{`${value}`}</div>
      <LineProgressBar
        percent={value/1.6}
        progressColor={color}
      />
    </div>
  );
}

export default PokeProgressBar;
