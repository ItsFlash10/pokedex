import React from 'react';

import { useNavigate } from 'react-router-dom';

import PDButton from '../../components/button/PDButton';

import './ErrorPage.scss';

import rocketTeam from "../../assets/images/teamRocket.svg";

function ErrorPage() {
  const navigate = useNavigate();

  const navigateToErrorPage = () => {
    return navigate(-1);
  };

  return (
    <div className="error-page">
      <div className="image-container">
        <img src={rocketTeam} alt="rocket" className="rocket-team" />
        <span className="error-404">404</span>
      </div>
      <div className="description-btn-container">
        <div className="description">
          <span className="white-text">The rocket team</span>
          <span className="black-text"> has won this time</span>
        </div>
        <PDButton
          handleClick={navigateToErrorPage}
          className="return-button"
          buttonText="Return"
        />
      </div>
    </div>
  );
}

export default ErrorPage;
