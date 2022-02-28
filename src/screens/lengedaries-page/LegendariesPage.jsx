import React from "react";

import PDHeader from "../../components/header/PDHeader";
import PDFooter from "../../components/footer/PDFooter";

import "./LegendariesPage.scss";

import poke from "../../assets/images/comingSoon.svg";

function LegendariesPage() {
  return (
    <div className="legendaries-page">
      <PDHeader />
      <div className="coming-soon">This arena is under construction ! !</div>
      <img className="coming-soon-image" src={poke} alt="pokemon" />
      <PDFooter />
    </div>
  );
}

export default LegendariesPage;
