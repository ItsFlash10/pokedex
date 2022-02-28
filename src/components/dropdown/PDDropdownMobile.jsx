import React, { useState } from "react";

import "./PDDropdown.scss";

import { capitalizeString } from "../../common/utilities";

import closeIcon from "../../assets/icons/closeIcon.svg";

function PDDropdownMobile(props) {
  const { filterTypes = [] } = props;
  const [isButtonClicked, setButtonClicked] = useState(false);

  const isFilterClicked = () => setButtonClicked(!isButtonClicked);
  return (
    <>
      <div className="dropdown-mobile">
        <button className="filterbtn" onClick={isFilterClicked}>
          Filter
        </button>
      </div>

      {isButtonClicked && (
        <div className="dropdown-main-container">
          <div className="filter-type-container">
            <div className="close-icon">
              <img onClick={isFilterClicked} src={closeIcon} />
            </div>
            <div className="filter-title">Type</div>
            <div className="dropdown-content">
              {filterTypes.map((filterType) => {
                return (
                  <div className="filter-option">
                    <input type="checkbox" className="checkbox" />
                    <label>{capitalizeString(filterType)}</label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="filter-range-container-with-title">
            <div className="filter-title">Experience</div>
            <div className="filter-range-container">
              <div className="filter-from-to">
                <div className="dropdown-content">
                  From
                  <input className="search-text" type="text" />
                </div>
                <span className="filter-range-dash">-</span>
                <div className="dropdown-content">
                  To
                  <input className="search-text" type="text" />
                </div>
              </div>
              <div className="apply-button-container">
                <button className="apply-button"> Apply </button>
              </div>
            </div>
          </div>
          <div className="filter-range-container-with-title">
            <div className="filter-title">Attack</div>

            <div className="filter-range-container">
              <div className="filter-from-to">
                <div className="dropdown-content">
                  From
                  <input className="search-text" type="text" />
                </div>
                <span className="filter-range">-</span>
                <div className="dropdown-content">
                  To
                  <input className="search-text" type="text" />
                </div>
              </div>
              <div className="apply-button-container">
                <button className="apply-button"> Apply </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PDDropdownMobile;
