import React from 'react';
import MenuIcon from "../../assets//images/menu-icon.png";
import OptionIcon from "../../assets//images/options-icon.png";


const NavBar = () => (
  <div className="navbar">
    <img className="menu-icon" src={MenuIcon} alt="menu" />
    <h2>Pledges</h2>
    <img className="option-icon" src={OptionIcon} alt="option" />
  </div>
)

export default NavBar;