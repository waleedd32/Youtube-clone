import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
function Header() {
  return (
    <div>
      <h1>This is header</h1>
      <MenuIcon />
      <img
        className="header__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
        alt=""
      />
      <input type="text" />
      <SearchIcon className="header__inputButton" />
    </div>
  );
}

export default Header;
