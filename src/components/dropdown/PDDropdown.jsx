import React from 'react';

import './PDDropdown.scss';

function PDDropdown() {
  return (
    <>
      <div className="pddropdown-container">
        <div className="dropdown">
          <button
            className="btn  btn-sm dropdown-toggle filter-btn"
            type="button"
            id="dropdownMenuButton2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Tipo
          </button>
          <ul
            className="dropdown-menu dropdown-menu-light"
            aria-labelledby="dropdownMenuButton2"
          >
            <li>
              <input type="checkbox" className="checkboxes" />
              Fire
            </li>
            <li>
              <input type="checkbox" className="checkboxes" />
              Normal
            </li>
            <li>
              <input type="checkbox" className="checkboxes" />
              Electric
            </li>
            <li>
              <input type="checkbox" className="checkboxes" />
              Water
            </li>
          </ul>
        </div>
        <div className="dropdown second-dropdown">
          <button
            className="btn  btn-sm dropdown-toggle filter-btn"
            type="button"
            id="dropdownMenuButton2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Ataque
          </button>
          <ul
            className="dropdown-menu dropdown-menu-light"
            aria-labelledby="dropdownMenuButton2"
          >
            <li>
              <input type="checkbox" className="checkboxes" />
              Fire
            </li>
            <li>
              <input type="checkbox" className="checkboxes" />
              Normal
            </li>
            <li>
              <input type="checkbox" className="checkboxes" />
              Electric
            </li>
          </ul>
        </div>
        <div className="dropdown second-dropdown">
          <button
            className="btn  btn-sm dropdown-toggle filter-btn"
            type="button"
            id="dropdownMenuButton2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Experiencia
          </button>
          <ul
            className="dropdown-menu dropdown-menu-light"
            aria-labelledby="dropdownMenuButton2"
          >
            <li>
              <input type="checkbox" className="checkboxes" />
              Fire
            </li>
            <li>
              <input type="checkbox" className="checkboxes" />
              Normal
            </li>
            <li>
              <input type="checkbox" className="checkboxes" />
              Electric
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default PDDropdown;
