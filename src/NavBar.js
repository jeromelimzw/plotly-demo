import React from "react";
import { NavLink as Link } from "react-router-dom";

const NavBar = () => {
  return (
    <React.Fragment>
      <Link to="">
        <button>Full Chart</button>
      </Link>
      <Link to="diversityandinclusion">
        <button>Diversity And Inclusion</button>
      </Link>
      <Link to="religiousminorities">
        <button>Religious Minorities</button>
      </Link>
      <Link to="societyandprivilege">
        <button>Society and Privilege</button>
      </Link>
      <Link to="climateinjustice">
        <button>Climate Injustice</button>
      </Link>
      <Link to="equitabletech">
        <button>Equitable Tech</button>
      </Link>
      <Link to="sexualorientationidentity">
        <button>Sexual Orientation and Gender Identity</button>
      </Link>
      <Link to="racialminorities">
        <button>Racial Minorities</button>
      </Link>
      <Link to="economicjustice">
        <button>Economic Justice</button>
      </Link>
    </React.Fragment>
  );
};

export default NavBar;
