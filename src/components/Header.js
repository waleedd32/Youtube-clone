import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/avatar";

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
      <VideoCallIcon className="header__icon" />
      <AppsIcon className="header__icon" />
      <NotificationsIcon className="header__icon" />
      <Avatar
        alt="Remy Sharp"
        src="https://avatars.githubusercontent.com/u/32420369?s=400&u=c53a0c0b6af70645e081570176c3a4732eadaad1&v=4"
      />
    </div>
  );
}

export default Header;
