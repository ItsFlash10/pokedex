import React from "react";

import PDHeader from "../../components/header/PDHeader";
import PDLogin from "../../components/login/PDLogin";
import PDFooter from "../../components/footer/PDFooter";

import "./homePage.scss";

import banner from "../../assets/images/banner.svg";
import bannerFull from "../../assets/images/bannerFull.svg";

function HomePage() {
  return (
    <>
      <PDHeader />
      <div className="homepage-container">
        <div className="outer-container">
          <div className="inner-container-left">
            <div className="text-container">
              <p className="upper-text">
                <span>Find</span> all your
                <br /> favorite <br />
                <span>Pokemon</span>
              </p>
              <br />
              <p className="lower-text">
                You can know the type of Pokemon,
                <br /> its strengths, disadvantages and <br />
                abilities
              </p>
            </div>
            <div className="button-container">
              <PDLogin />
            </div>
          </div>
          <div className="inner-container-right">
            <img className="banner" src={banner} alt="banner" />
            <img
              className="banner-complete"
              src={bannerFull}
              alt="banner"
            ></img>
          </div>
        </div>
      </div>
      <PDFooter />
    </>
  );
}

export default HomePage;
