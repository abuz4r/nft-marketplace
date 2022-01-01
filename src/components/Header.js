import React from "react";
import "./Header.css";
import unnamed from "../assets/header/unnamed.png";
import searchIcon from "../assets/header/search.png";
import themeSwitchIcon from "../assets/header/theme-switch.png";

function Header() {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={unnamed} className="logo" alt="" />
      </div>
      <div className="title">
        <div>NFT</div>BARTER
      </div>
      <div className="searchBar">
        <div className="searchIconContainer">
          <img src={searchIcon} />
        </div>
        <input
          className="searchInput"
          placeholder="Collection, Item or User..."
        />
      </div>
      <div className="headerItems">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>
      <div className="headerActions">
        <div className="themeSwitchContainer">
          <img src={themeSwitchIcon} />
        </div>
        <div className="loginButton">GET IN</div>
      </div>
    </div>
  );
}

export default Header;
