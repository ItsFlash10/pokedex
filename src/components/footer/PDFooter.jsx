import React from "react";

import { useNavigate } from "react-router";

import "../footer/PDFooter.scss";

function PDFooter(props) {
  const { position } = props;
  const footerClassList = `pd-footer ${position}`;
  const navigate = useNavigate();
  const navigateToTeamPage = () => {
    navigate(`/legendaries`);
  };
  return (
    <footer className={footerClassList}>
      <span>Make with ❤️ for the PokéSpartans team Platzi Master</span>
      <span className="meet-our-team" onClick={navigateToTeamPage}>
        Meet our team
      </span>
    </footer>
  );
}

export default PDFooter;
